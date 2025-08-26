export const faviconSizes = [
  { size: 16, name: 'favicon-16x16.png', description: '16x16 favicon' },
  { size: 32, name: 'favicon-32x32.png', description: '32x32 favicon' },
  { size: 48, name: 'favicon-48x48.png', description: '48x48 favicon' },
  { size: 64, name: 'favicon-64x64.png', description: '64x64 favicon' },
  { size: 96, name: 'favicon-96x96.png', description: '96x96 favicon' },
  { size: 180, name: 'apple-touch-icon.png', description: 'Apple Touch Icon' },
  { size: 192, name: 'android-chrome-192x192.png', description: 'Android Chrome 192x192' },
  { size: 512, name: 'android-chrome-512x512.png', description: 'Android Chrome 512x512' }
];

export const generateFaviconFromImage = (
  imageFile: File,
  size: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      canvas.width = size;
      canvas.height = size;

      // Calculate crop dimensions to center the image
      const sourceSize = Math.min(img.width, img.height);
      const sourceX = (img.width - sourceSize) / 2;
      const sourceY = (img.height - sourceSize) / 2;

      // Draw the cropped and resized image
      ctx.drawImage(
        img,
        sourceX, sourceY, sourceSize, sourceSize,
        0, 0, size, size
      );

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to create favicon blob'));
        }
      }, 'image/png');
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(imageFile);
  });
};

export const generateWebManifest = (name: string = 'My App') => {
  return JSON.stringify({
    name,
    short_name: name,
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone'
  }, null, 2);
};

export const generateHtmlSnippet = () => {
  return `<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<!-- Optional: Theme color for mobile browsers -->
<meta name="theme-color" content="#ffffff">

<!-- Optional: Microsoft tile -->
<meta name="msapplication-TileImage" content="/android-chrome-192x192.png">
<meta name="msapplication-TileColor" content="#ffffff">`;
};