# Toolshub - Complete Web Tools Collection

A comprehensive collection of 5 essential web development and design tools built with Next.js, React, and TypeScript. All tools process data entirely client-side for maximum privacy and performance.

## 🛠️ Tools Included

### 1. **Color Picker & Converter** 🎨
- Interactive color picker with live preview
- Convert between HEX, RGB, and HSL formats
- RGB sliders and number inputs
- Copy colors in multiple formats
- Generate CSS variables

### 2. **Image Compressor & Resizer** 🖼️
- Drag & drop image upload
- Adjustable quality and dimensions
- Multiple output formats (JPEG, PNG, WebP)
- Client-side processing - no uploads
- Download or copy to clipboard

### 3. **Favicon Generator** ⭐
- Generate complete favicon sets from any image
- All standard sizes (16x16 to 512x512)
- ZIP download with manifest and HTML snippet
- Apple Touch Icon and Android Chrome icons
- Auto-cropping for non-square images

### 4. **Gradient Generator** 🌈
- Linear and radial gradients
- Multiple color stops (up to 6)
- Angle control and presets
- Export as CSS, SCSS, or Tailwind config
- Download gradient as PNG

### 5. **Emoji Picker & Copy** 😀
- Browse 100+ emojis by category
- Search by name or keywords
- Recent emojis with localStorage persistence
- Click to copy or compose text
- Keyboard navigation support

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Add required packages for favicon generation (optional)
npm install jszip file-saver

# For server-side image processing (optional)
npm install sharp
```

### Running Locally

```bash
# Development server
npm run dev

# Open http://localhost:3000/tools to see all tools
```

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 🧪 Testing

Run the comprehensive unit test suite:

```bash
# Run all tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

Tests are included for:
- Color conversion utilities (`hexToRgb`, `rgbToHex`, `rgbToHsl`, `hslToRgb`)
- Image dimension calculations (`calculateResizeDimensions`)
- Gradient CSS generation (`generateGradientCSS`)

## 📁 Project Structure

```
toolshub/
├── src/
│   ├── app/
│   │   ├── tools/
│   │   │   ├── page.tsx              # Tools listing page
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Individual tool pages
│   │   └── api/
│   │       └── tools/
│   │           ├── image/process/    # Optional server-side image processing
│   │           └── favicon/make/     # Optional server-side favicon generation
│   ├── components/
│   │   ├── ToolRegistry.tsx          # Tool metadata and routing
│   │   └── tools/
│   │       ├── color-picker/
│   │       ├── image-compressor/
│   │       ├── favicon-generator/
│   │       ├── gradient-generator/
│   │       └── emoji-picker/
│   └── lib/
│       ├── color-utils.ts            # Color conversion functions
│       ├── image-utils.ts            # Image processing utilities
│       ├── gradient-utils.ts         # Gradient generation
│       ├── favicon-utils.ts          # Favicon creation helpers
│       └── emoji-data.ts             # Emoji dataset
└── __tests__/                        # Unit tests
```

## 🎯 Features

### Privacy & Security
- **100% client-side processing** - your files never leave your device
- No external API calls for core functionality
- No data collection or tracking
- Works completely offline after initial load

### Performance
- **Lazy loading** - tools are loaded only when accessed
- **Dynamic imports** - heavy libraries (JSZip, FileSaver) loaded on demand
- **Optimized bundle** - minimal initial bundle size
- **Modern React patterns** - hooks, functional components, TypeScript

### User Experience
- **Responsive design** - works on desktop, tablet, and mobile
- **Dark mode support** - persists between sessions
- **Keyboard navigation** - accessible to all users
- **Intuitive interfaces** - drag & drop, sliders, live previews

## 🛠️ Adding a New Tool

1. **Create the component**:
```typescript
// src/components/tools/my-tool/MyTool.tsx
'use client';

import React from 'react';

const MyTool: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">My Tool</h1>
      {/* Your tool UI here */}
    </div>
  );
};

export default MyTool;
```

2. **Add to the registry**:
```typescript
// src/components/ToolRegistry.tsx
const MyTool = dynamic(() => import('./tools/my-tool/MyTool'), {
  loading: () => <div>Loading...</div>
});

export const toolRegistry: ToolMeta[] = [
  // ... existing tools
  {
    id: 'my-tool',
    title: 'My Tool',
    description: 'Description of what my tool does',
    icon: '🔧',
    path: '/tools/my-tool',
    component: MyTool,
    category: 'Utilities',
    keywords: ['tool', 'utility', 'helper']
  }
];
```

3. **Test your tool**:
- Navigate to `http://localhost:3000/tools/my-tool`
- Verify it appears in the tools listing at `http://localhost:3000/tools`

## 🎨 Styling Guidelines

- **Tailwind CSS** for all styling
- **Consistent spacing** using Tailwind's spacing scale
- **Dark mode support** using `dark:` prefixes
- **Responsive design** with mobile-first approach
- **Component consistency** using shared UI components from `components/ui/`

### Color Scheme
- **Light mode**: Gray backgrounds, dark text
- **Dark mode**: Dark backgrounds, light text
- **Accent colors**: Blue for primary actions, green for success states

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
npx vercel

# Or connect your GitHub repository for automatic deployments
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export (for CDN deployment)
```bash
# Add to next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
};

# Build static files
npm run build
```

## 🔧 Configuration

### Environment Variables
```env
# Optional: Enable server-side processing endpoints
ENABLE_SERVER_PROCESSING=true

# Optional: Configure image processing limits
MAX_IMAGE_SIZE=10485760  # 10MB in bytes
MAX_IMAGE_DIMENSIONS=4096  # Max width/height in pixels
```

### Dark Mode Persistence
Dark mode preferences are automatically saved to `localStorage` and respect the user's system preference as a fallback.

## 📱 Browser Support

- **Chrome/Edge**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 88+

### Required APIs
- **File API** - for image uploads
- **Canvas API** - for image processing
- **Clipboard API** - for copy functionality
- **localStorage** - for recent emojis and dark mode

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/my-tool`
3. **Add your tool** following the structure above
4. **Write tests** for utility functions
5. **Update documentation** if needed
6. **Submit a pull request**

### Code Style
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code formatting
- **Functional components** with React hooks
- **Descriptive variable names** and clear comments

## 📄 License

MIT License - feel free to use this project for any purpose.

## 🙋 Support

For questions or issues:
1. Check the **FAQ** below
2. Search existing **GitHub Issues**
3. Create a **new issue** with detailed information

## ❓ FAQ

**Q: Do these tools work offline?**
A: Yes, after the initial page load, all tools work completely offline.

**Q: Are my files uploaded anywhere?**
A: No, all processing happens in your browser. Your files never leave your device.

**Q: Can I add custom tools?**
A: Yes! Follow the "Adding a New Tool" guide above.

**Q: Why are some features marked as "optional server endpoints"?**
A: Some operations (like ICO file creation) are complex client-side but simple server-side. The server endpoints are provided as alternatives but are not required.

**Q: How do I enable server-side image processing?**
A: Install Sharp (`npm install sharp`) and set `ENABLE_SERVER_PROCESSING=true` in your environment variables.

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**