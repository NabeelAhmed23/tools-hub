export interface ConversionResult {
  blob: Blob;
  originalSize: number;
  convertedSize: number;
  originalFormat: string;
  convertedFormat: string;
  originalDimensions: string;
  convertedDimensions: string;
  compressionRatio: number;
}

export interface ConversionSettings {
  quality: number;
  backgroundColor: string;
}

export const DEFAULT_SETTINGS: Record<string, ConversionSettings> = {
  'jpg-to-png': { quality: 90, backgroundColor: '#ffffff' },
  'jpg-to-webp': { quality: 85, backgroundColor: '#ffffff' },
  'png-to-jpg': { quality: 90, backgroundColor: '#ffffff' },
  'png-to-webp': { quality: 85, backgroundColor: '#ffffff' },
  'webp-to-jpg': { quality: 90, backgroundColor: '#ffffff' },
  'webp-to-png': { quality: 90, backgroundColor: '#ffffff' },
};

export async function convertImage(
  file: File,
  targetFormat: 'jpeg' | 'png' | 'webp',
  settings: ConversionSettings
): Promise<ConversionResult> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('targetFormat', targetFormat);
  formData.append('quality', settings.quality.toString());
  formData.append('backgroundColor', settings.backgroundColor);

  const response = await fetch('/api/tools/image/convert', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Conversion failed');
  }

  const blob = await response.blob();
  
  // Extract metadata from response headers
  const originalSize = parseInt(response.headers.get('X-Original-Size') || '0');
  const convertedSize = parseInt(response.headers.get('X-Converted-Size') || '0');
  const originalFormat = response.headers.get('X-Original-Format') || '';
  const convertedFormat = response.headers.get('X-Converted-Format') || '';
  const originalDimensions = response.headers.get('X-Original-Dimensions') || '';
  const convertedDimensions = response.headers.get('X-Converted-Dimensions') || '';
  
  const compressionRatio = originalSize > 0 
    ? ((originalSize - convertedSize) / originalSize) * 100 
    : 0;

  return {
    blob,
    originalSize,
    convertedSize,
    originalFormat,
    convertedFormat,
    originalDimensions,
    convertedDimensions,
    compressionRatio,
  };
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getFileExtension(format: 'jpeg' | 'png' | 'webp'): string {
  switch (format) {
    case 'jpeg':
      return 'jpg';
    case 'png':
      return 'png';
    case 'webp':
      return 'webp';
    default:
      return 'jpg';
  }
}

export function generateFileName(originalName: string, targetFormat: 'jpeg' | 'png' | 'webp'): string {
  const baseName = originalName.replace(/\.[^/.]+$/, '');
  const extension = getFileExtension(targetFormat);
  return `${baseName}_converted.${extension}`;
}

export function validateImageFile(file: File): { valid: boolean; error?: string } {
  const maxSize = 10 * 1024 * 1024; // 10MB
  const supportedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

  if (!supportedTypes.includes(file.type)) {
    return { 
      valid: false, 
      error: 'Unsupported file format. Please use JPEG, PNG, or WebP images.' 
    };
  }

  if (file.size > maxSize) {
    return { 
      valid: false, 
      error: 'File size too large. Maximum size is 10MB.' 
    };
  }

  return { valid: true };
}

export function getConversionDescription(
  sourceFormat: string, 
  targetFormat: string
): { title: string; description: string; benefits: string[] } {
  const key = `${sourceFormat}-to-${targetFormat}`;
  
  const descriptions: Record<string, { title: string; description: string; benefits: string[] }> = {
    'jpg-to-png': {
      title: 'JPG to PNG Converter',
      description: 'Convert JPEG images to PNG format with transparency support and lossless quality.',
      benefits: [
        'Adds transparency channel support',
        'Lossless image quality',
        'Better for images with text or graphics',
        'Supports transparent backgrounds'
      ]
    },
    'jpg-to-webp': {
      title: 'JPG to WebP Converter',
      description: 'Convert JPEG images to modern WebP format for better compression and faster loading.',
      benefits: [
        '25-35% smaller file sizes',
        'Faster web page loading',
        'Modern browser support',
        'Better compression algorithm'
      ]
    },
    'png-to-jpg': {
      title: 'PNG to JPG Converter',
      description: 'Convert PNG images to JPEG format for smaller file sizes and universal compatibility.',
      benefits: [
        'Significantly smaller file sizes',
        'Universal browser support',
        'Better for photographs',
        'Faster upload and sharing'
      ]
    },
    'png-to-webp': {
      title: 'PNG to WebP Converter',
      description: 'Convert PNG images to WebP format while maintaining transparency and reducing file size.',
      benefits: [
        'Maintains transparency support',
        'Better compression than PNG',
        'Modern web standard',
        'Smaller file sizes'
      ]
    },
    'webp-to-jpg': {
      title: 'WebP to JPG Converter',
      description: 'Convert WebP images to JPEG format for maximum compatibility across all devices and platforms.',
      benefits: [
        'Universal compatibility',
        'Supported by all devices',
        'Good for sharing and printing',
        'Smaller than PNG files'
      ]
    },
    'webp-to-png': {
      title: 'WebP to PNG Converter',
      description: 'Convert WebP images to PNG format with preserved transparency and lossless quality.',
      benefits: [
        'Preserves transparency',
        'Lossless conversion',
        'Better compatibility',
        'Perfect for graphics and logos'
      ]
    }
  };

  return descriptions[key] || {
    title: 'Image Format Converter',
    description: 'Convert images between different formats.',
    benefits: ['High quality conversion', 'Fast processing']
  };
}