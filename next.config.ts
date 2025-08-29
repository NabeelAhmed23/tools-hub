import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com https://www.googletagmanager.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' blob: data: https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://www.google-analytics.com https://api.exchangerate-api.com;
              frame-src 'self' https://pagead2.googlesyndication.com;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'none';
              upgrade-insecure-requests;
            `.replace(/\s{2,}/g, ' ').trim()
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()'
          }
        ]
      }
    ]
  }
};

export default nextConfig;
