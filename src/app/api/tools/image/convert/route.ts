import { NextRequest, NextResponse } from 'next/server';
import sharp from 'sharp';

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const SUPPORTED_INPUT_FORMATS = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const SUPPORTED_OUTPUT_FORMATS = ['jpeg', 'png', 'webp'] as const;

type OutputFormat = typeof SUPPORTED_OUTPUT_FORMATS[number];

interface ConversionOptions {
  format: OutputFormat;
  quality?: number;
  backgroundColor?: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const targetFormat = formData.get('targetFormat') as OutputFormat;
    const quality = formData.get('quality') as string;
    const backgroundColor = formData.get('backgroundColor') as string;

    // Validation
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    if (!SUPPORTED_INPUT_FORMATS.includes(file.type)) {
      return NextResponse.json(
        { error: 'Unsupported input format. Supported formats: JPEG, PNG, WebP' },
        { status: 400 }
      );
    }

    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 10MB' },
        { status: 400 }
      );
    }

    if (!SUPPORTED_OUTPUT_FORMATS.includes(targetFormat)) {
      return NextResponse.json(
        { error: 'Unsupported target format' },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Get image metadata
    const metadata = await sharp(buffer).metadata();
    
    // Create Sharp pipeline
    const pipeline = sharp(buffer);

    // Apply format-specific conversions
    const options: ConversionOptions = {
      format: targetFormat,
      quality: quality ? parseInt(quality) : undefined,
      backgroundColor: backgroundColor || '#ffffff'
    };

    const processedBuffer = await convertImage(pipeline, options, metadata);

    // Get output metadata
    const outputMetadata = await sharp(processedBuffer).metadata();

    // Return the converted image
    const response = new NextResponse(processedBuffer as BodyInit, {
      headers: {
        'Content-Type': `image/${targetFormat === 'jpeg' ? 'jpeg' : targetFormat}`,
        'Content-Length': processedBuffer.length.toString(),
        'Cache-Control': 'no-cache',
        'X-Original-Size': file.size.toString(),
        'X-Converted-Size': processedBuffer.length.toString(),
        'X-Original-Format': file.type,
        'X-Converted-Format': `image/${targetFormat}`,
        'X-Original-Dimensions': `${metadata.width}x${metadata.height}`,
        'X-Converted-Dimensions': `${outputMetadata.width}x${outputMetadata.height}`,
      }
    });

    return response;

  } catch (error) {
    console.error('Image conversion error:', error);
    
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
      { error: 'Failed to convert image. Please try again.' },
      { status: 500 }
    );
  }
}

async function convertImage(
  pipeline: sharp.Sharp, 
  options: ConversionOptions,
  metadata?: sharp.Metadata
): Promise<Buffer> {
  const { format, quality, backgroundColor } = options;

  // Handle transparency for conversions to JPEG
  if (format === 'jpeg' && metadata?.hasAlpha) {
    pipeline = pipeline.flatten({ background: backgroundColor });
  }

  // Apply format-specific settings
  switch (format) {
    case 'jpeg':
      pipeline = pipeline.jpeg({
        quality: quality || 90,
        progressive: true,
        mozjpeg: true
      });
      break;
      
    case 'png':
      pipeline = pipeline.png({
        quality: quality || 90,
        compressionLevel: 6,
        progressive: true
      });
      break;
      
    case 'webp':
      pipeline = pipeline.webp({
        quality: quality || 85,
        effort: 4,
        lossless: quality === 100
      });
      break;
  }

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