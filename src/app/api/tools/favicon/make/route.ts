import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';
import archiver from 'archiver';
import pngToIco from 'png-to-ico';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const SUPPORTED_INPUT_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif'];

interface FaviconSize {
  size: number;
  name: string;
  description: string;
}

const faviconSizes: FaviconSize[] = [
  { size: 16, name: 'favicon-16x16.png', description: '16x16 favicon' },
  { size: 32, name: 'favicon-32x32.png', description: '32x32 favicon' },
  { size: 48, name: 'favicon-48x48.png', description: '48x48 favicon' },
  { size: 64, name: 'favicon-64x64.png', description: '64x64 favicon' },
  { size: 96, name: 'favicon-96x96.png', description: '96x96 favicon' },
  { size: 180, name: 'apple-touch-icon.png', description: 'Apple Touch Icon' },
  { size: 192, name: 'android-chrome-192x192.png', description: 'Android Chrome 192x192' },
  { size: 512, name: 'android-chrome-512x512.png', description: 'Android Chrome 512x512' }
];

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const appName = formData.get('appName') as string || 'My App';
    const backgroundColor = formData.get('backgroundColor') as string || '#ffffff';

    // Validation
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!SUPPORTED_INPUT_FORMATS.includes(file.type)) {
      return NextResponse.json(
        { error: 'Unsupported input format. Supported formats: JPEG, PNG, WebP, GIF' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 10MB' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Get image metadata
    const metadata = await sharp(buffer).metadata();

    // Create ZIP archive
    const archive = archiver('zip');
    const chunks: Buffer[] = [];

    archive.on('data', (chunk) => chunks.push(chunk));

    // Generate PNG favicons for each size
    for (const favicon of faviconSizes) {
      const resizedBuffer = await generateFavicon(buffer, favicon.size, backgroundColor, metadata);
      archive.append(resizedBuffer, { name: favicon.name });
    }

    // Generate ICO file from 16x16 and 32x32 PNGs
    const ico16 = await generateFavicon(buffer, 16, backgroundColor, metadata);
    const ico32 = await generateFavicon(buffer, 32, backgroundColor, metadata);
    const icoBuffer = await pngToIco([ico16, ico32]);
    archive.append(icoBuffer, { name: 'favicon.ico' });

    // Add manifest file
    const manifest = {
      name: appName,
      short_name: appName,
      icons: [
        { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
      ],
      theme_color: backgroundColor,
      background_color: backgroundColor,
      display: "standalone"
    };

    archive.append(JSON.stringify(manifest, null, 2), { name: 'site.webmanifest' });

    // Add HTML snippet
    const htmlSnippet = `<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<!-- Optional: Theme color for mobile browsers -->
<meta name="theme-color" content="${backgroundColor}">

<!-- Optional: Microsoft tile -->
<meta name="msapplication-TileImage" content="/android-chrome-192x192.png">
<meta name="msapplication-TileColor" content="${backgroundColor}">`;

    archive.append(htmlSnippet, { name: 'favicon-html-snippet.txt' });

    // Finalize archive
    archive.finalize();

    // Wait for archive to complete
    await new Promise((resolve) => archive.on('end', resolve));

    const zipBuffer = Buffer.concat(chunks);

    return new NextResponse(zipBuffer, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${appName.replace(/[^a-zA-Z0-9]/g, '_')}_favicons.zip"`,
        'Content-Length': zipBuffer.length.toString(),
        'Cache-Control': 'no-cache',
        'X-Original-Size': file.size.toString(),
        'X-Generated-Files': (faviconSizes.length + 4).toString(), // +4 for ICO, manifest, HTML snippet
      },
    });

  } catch (error) {
    console.error('Favicon generation error:', error);

    // Handle specific Sharp errors
    if (error instanceof Error) {
      if (error.message.includes('Input file is missing') ||
          error.message.includes('Input file contains unsupported image format')) {
        return NextResponse.json(
          { error: 'Invalid or corrupted image file' },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { error: 'Failed to generate favicons. Please try again.' },
      { status: 500 }
    );
  }
}

async function generateFavicon(
  buffer: Buffer,
  size: number,
  backgroundColor: string,
  metadata?: sharp.Metadata
): Promise<Buffer> {
  let pipeline = sharp(buffer);

  // Handle transparency by adding background for formats that need it
  if (metadata?.hasAlpha && backgroundColor !== 'transparent') {
    pipeline = pipeline.flatten({ background: backgroundColor });
  }

  // Resize with high-quality settings
  pipeline = pipeline
    .resize(size, size, {
      fit: 'cover',
      position: 'center',
      withoutEnlargement: false
    })
    .png({
      quality: 90,
      compressionLevel: 6,
      progressive: true
    });

  return await pipeline.toBuffer();
}

// Handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}