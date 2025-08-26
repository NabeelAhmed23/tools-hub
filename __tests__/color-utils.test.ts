import { describe, it, expect } from '@jest/globals';
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from '../src/lib/color-utils';

describe('Color Utilities', () => {
  describe('hexToRgb', () => {
    it('should convert valid hex colors to RGB', () => {
      expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
      expect(hexToRgb('#00ff00')).toEqual({ r: 0, g: 255, b: 0 });
      expect(hexToRgb('#0000ff')).toEqual({ r: 0, g: 0, b: 255 });
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 });
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should handle hex colors without # prefix', () => {
      expect(hexToRgb('ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    });

    it('should return null for invalid hex colors', () => {
      expect(hexToRgb('#gg0000')).toBeNull();
      expect(hexToRgb('#ff00')).toBeNull();
      expect(hexToRgb('not-a-color')).toBeNull();
      expect(hexToRgb('')).toBeNull();
    });
  });

  describe('rgbToHex', () => {
    it('should convert RGB values to hex', () => {
      expect(rgbToHex(255, 0, 0)).toBe('#ff0000');
      expect(rgbToHex(0, 255, 0)).toBe('#00ff00');
      expect(rgbToHex(0, 0, 255)).toBe('#0000ff');
      expect(rgbToHex(255, 255, 255)).toBe('#ffffff');
      expect(rgbToHex(0, 0, 0)).toBe('#000000');
    });

    it('should handle values outside 0-255 range', () => {
      expect(rgbToHex(-10, 0, 0)).toBe('#000000');
      expect(rgbToHex(300, 0, 0)).toBe('#ff0000');
      expect(rgbToHex(128.7, 64.3, 192.9)).toBe('#8040c1');
    });

    it('should produce single-digit hex values with leading zeros', () => {
      expect(rgbToHex(1, 2, 3)).toBe('#010203');
      expect(rgbToHex(15, 15, 15)).toBe('#0f0f0f');
    });
  });

  describe('rgbToHsl', () => {
    it('should convert RGB to HSL', () => {
      // Red
      expect(rgbToHsl(255, 0, 0)).toEqual({ h: 0, s: 100, l: 50 });
      
      // Green
      expect(rgbToHsl(0, 255, 0)).toEqual({ h: 120, s: 100, l: 50 });
      
      // Blue
      expect(rgbToHsl(0, 0, 255)).toEqual({ h: 240, s: 100, l: 50 });
      
      // White
      expect(rgbToHsl(255, 255, 255)).toEqual({ h: 0, s: 0, l: 100 });
      
      // Black
      expect(rgbToHsl(0, 0, 0)).toEqual({ h: 0, s: 0, l: 0 });
    });

    it('should handle grayscale colors', () => {
      const gray = rgbToHsl(128, 128, 128);
      expect(gray.h).toBe(0);
      expect(gray.s).toBe(0);
      expect(gray.l).toBe(50);
    });
  });

  describe('hslToRgb', () => {
    it('should convert HSL to RGB', () => {
      // Red
      expect(hslToRgb(0, 100, 50)).toEqual({ r: 255, g: 0, b: 0 });
      
      // Green
      expect(hslToRgb(120, 100, 50)).toEqual({ r: 0, g: 255, b: 0 });
      
      // Blue
      expect(hslToRgb(240, 100, 50)).toEqual({ r: 0, g: 0, b: 255 });
      
      // White
      expect(hslToRgb(0, 0, 100)).toEqual({ r: 255, g: 255, b: 255 });
      
      // Black
      expect(hslToRgb(0, 0, 0)).toEqual({ r: 0, g: 0, b: 0 });
    });

    it('should handle grayscale colors (saturation = 0)', () => {
      expect(hslToRgb(0, 0, 50)).toEqual({ r: 128, g: 128, b: 128 });
      expect(hslToRgb(180, 0, 75)).toEqual({ r: 191, g: 191, b: 191 });
    });
  });

  describe('Conversion round-trips', () => {
    it('should maintain consistency in RGB -> Hex -> RGB conversion', () => {
      const originalRgb = { r: 123, g: 45, b: 234 };
      const hex = rgbToHex(originalRgb.r, originalRgb.g, originalRgb.b);
      const convertedRgb = hexToRgb(hex);
      
      expect(convertedRgb).toEqual(originalRgb);
    });

    it('should maintain consistency in RGB -> HSL -> RGB conversion', () => {
      const testColors = [
        { r: 255, g: 0, b: 0 },    // Red
        { r: 0, g: 255, b: 0 },    // Green
        { r: 0, g: 0, b: 255 },    // Blue
        { r: 123, g: 45, b: 234 }, // Random color
      ];

      testColors.forEach(originalRgb => {
        const hsl = rgbToHsl(originalRgb.r, originalRgb.g, originalRgb.b);
        const convertedRgb = hslToRgb(hsl.h, hsl.s, hsl.l);
        
        // Allow for small rounding differences
        expect(Math.abs(convertedRgb.r - originalRgb.r)).toBeLessThanOrEqual(1);
        expect(Math.abs(convertedRgb.g - originalRgb.g)).toBeLessThanOrEqual(1);
        expect(Math.abs(convertedRgb.b - originalRgb.b)).toBeLessThanOrEqual(1);
      });
    });
  });
});