# ToolsHub - Free Online Tools & Security Utilities

A modern, privacy-focused web application built with Next.js 14 that provides free online tools including security utilities, calculators, and converters.

## 🚀 Features

### Security Tools
- **Password Generator**: Generate cryptographically secure passwords with customizable options
- **Password Strength Checker**: Analyze password security with real-time feedback and crack time estimates
- **Hash Generator**: Generate MD5, SHA-1, SHA-256, and SHA-512 hash values for data integrity
- **Base64 Encoder/Decoder**: Encode and decode Base64 strings with UTF-8 support
- **URL Encoder/Decoder**: Safely encode URLs with percent-encoding for special characters
- **UUID Generator**: Generate RFC 4122 compliant UUID v4 identifiers in bulk
- **QR Code Generator**: Create QR codes from text, URLs, WiFi passwords, and more
- **What's My IP**: Discover your public IP address, location, and browser information

### Calculators & Converters
- **BMI Calculator**: Calculate Body Mass Index with support for metric and imperial units
- **Currency Converter**: Convert between currencies with live exchange rates

### Technical Features
- **Privacy First**: All tools run in your browser - no data sent to servers
- **Dark Mode Support**: Persistent theme switching with system preference detection
- **Responsive Design**: Mobile-friendly interface using Tailwind CSS and shadcn/ui
- **SEO Optimized**: Server-side rendering with proper metadata and schema markup
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **AdSense Ready**: Placeholder components for easy ad integration

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Theming**: next-themes
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **QR Generation**: qrcode

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd toolshub
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
cp .env.local.example .env.local
```
Edit `.env.local` if you want to use a custom exchange rate API key.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## 🌐 API Configuration

### Currency Converter
The Currency Converter uses [exchangerate-api.com](https://exchangerate-api.com) for live exchange rates. The app works without an API key using their free tier.

### What's My IP Tool
Uses [ipify.org](https://ipify.org) for IP address detection and [ipapi.co](https://ipapi.co) for optional location data. Both services offer free tiers.

## 📄 Pages

### Homepage (`/`)
- Overview of available tools organized by category
- Security Tools section with 8 tools
- Calculators & Converters section
- SEO-optimized content and AdSense ad slots

### Security Tools
- `/password-generator` - Generate secure passwords with customizable options
- `/password-strength-checker` - Analyze password security and get recommendations  
- `/hash-generator` - Generate MD5, SHA-1, SHA-256, SHA-512 hashes
- `/base64` - Encode/decode Base64 strings with UTF-8 support
- `/url-encode-decode` - URL percent-encoding with auto-detection
- `/uuid-generator` - Bulk UUID v4 generation with download options
- `/qr-generator` - QR code generation with customizable options
- `/my-ip` - IP address lookup with optional geolocation

### Calculators & Converters
- `/bmi-calculator` - BMI calculation with metric/imperial units
- `/currency-converter` - Live currency conversion with 100+ currencies

## 🎨 Components

### Layout Components
- `NavBar.tsx` - Site navigation with dropdowns and theme toggle
- `Footer.tsx` - Site footer with branding
- `AdPlaceholder.tsx` - Reusable ad slot component
- `ThemeProvider.tsx` - Dark/light mode theme provider

### Utility Components  
- `ToolCard.tsx` - Tool preview cards for homepage
- `CopyButton.tsx` - Copy to clipboard functionality with tooltips
- `ThemeToggle.tsx` - Theme switching dropdown menu

### UI Components
- Complete shadcn/ui component library (Button, Card, Input, Select, Tabs, Alert, etc.)
- Lucide React icons for consistent iconography

## 🔍 SEO Features

- Server-side rendering with Next.js App Router for better SEO
- Optimized metadata for all pages with proper titles and descriptions
- OpenGraph tags for social media sharing
- JSON-LD schema markup for tools (SoftwareApplication, HowTo schemas)
- Semantic HTML structure with proper headings and landmarks
- Privacy-focused content highlighting client-side processing

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

The build process includes:
- TypeScript type checking
- ESLint code quality checks
- Successful compilation verification

Run the build command to verify everything works:
```bash
npm run build
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

## 🔐 Security & Privacy

- **Client-Side Processing**: All security tools run entirely in your browser
- **No Data Transmission**: Passwords, hashes, and sensitive data never leave your device  
- **Cryptographically Secure**: Uses Web Crypto API for secure random generation
- **Privacy Notices**: Clear explanations of data handling on each tool
- **No Logging**: No server-side logging of user inputs or generated values

## 📊 Bundle Analysis

The application is optimized for performance:
- **Homepage**: ~3.9KB + 202KB shared JS
- **Security Tools**: ~4-12KB per tool + shared components
- **Total Bundle**: ~210KB gzipped for core functionality
- **Dynamic Imports**: Tools load only required dependencies

---

Built with ❤️ using Next.js 14, TypeScript, and modern web technologies with a focus on privacy and security.
