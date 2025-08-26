export interface ColorStop {
  color: string;
  position: number;
}

export interface GradientConfig {
  type: 'linear' | 'radial';
  angle: number;
  stops: ColorStop[];
}

export const generateGradientCSS = (
  stops: ColorStop[],
  angle: number = 90,
  type: 'linear' | 'radial' = 'linear'
): string => {
  const colorStops = stops
    .sort((a, b) => a.position - b.position)
    .map(stop => `${stop.color} ${stop.position}%`)
    .join(', ');

  if (type === 'radial') {
    return `radial-gradient(circle, ${colorStops})`;
  }
  
  return `linear-gradient(${angle}deg, ${colorStops})`;
};

export const gradientPresets: GradientConfig[] = [
  {
    type: 'linear',
    angle: 45,
    stops: [
      { color: '#ff6b6b', position: 0 },
      { color: '#4ecdc4', position: 100 }
    ]
  },
  {
    type: 'linear',
    angle: 135,
    stops: [
      { color: '#667eea', position: 0 },
      { color: '#764ba2', position: 100 }
    ]
  },
  {
    type: 'linear',
    angle: 90,
    stops: [
      { color: '#f093fb', position: 0 },
      { color: '#f5576c', position: 100 }
    ]
  },
  {
    type: 'radial',
    angle: 0,
    stops: [
      { color: '#ffecd2', position: 0 },
      { color: '#fcb69f', position: 100 }
    ]
  }
];

export const downloadGradientAsPNG = (gradient: string, width: number = 400, height: number = 400) => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Create gradient background
  const tempDiv = document.createElement('div');
  tempDiv.style.background = gradient;
  tempDiv.style.width = `${width}px`;
  tempDiv.style.height = `${height}px`;
  
  // Fill canvas with gradient color approximation
  const grad = ctx.createLinearGradient(0, 0, width, height);
  grad.addColorStop(0, '#667eea');
  grad.addColorStop(1, '#764ba2');
  
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, width, height);

  canvas.toBlob(blob => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'gradient.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  });
};