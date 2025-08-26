import { describe, it, expect } from '@jest/globals';
import { calculateResizeDimensions } from '../src/lib/image-utils';

describe('Image Utilities', () => {
  describe('calculateResizeDimensions', () => {
    it('should return original dimensions when no constraints are provided', () => {
      const result = calculateResizeDimensions(1920, 1080);
      expect(result).toEqual({ width: 1920, height: 1080 });
    });

    it('should maintain aspect ratio when only max width is provided', () => {
      const result = calculateResizeDimensions(1920, 1080, 960);
      expect(result).toEqual({ width: 960, height: 540 });
    });

    it('should maintain aspect ratio when only max height is provided', () => {
      const result = calculateResizeDimensions(1920, 1080, undefined, 540);
      expect(result).toEqual({ width: 960, height: 540 });
    });

    it('should respect both width and height constraints', () => {
      // Landscape image constrained by both dimensions - width should be limiting factor
      const result1 = calculateResizeDimensions(1920, 1080, 800, 600);
      expect(result1).toEqual({ width: 800, height: 450 });

      // Portrait image constrained by both dimensions - height should be limiting factor
      const result2 = calculateResizeDimensions(1080, 1920, 800, 600);
      expect(result2).toEqual({ width: 338, height: 600 });
    });

    it('should handle square images correctly', () => {
      const result = calculateResizeDimensions(1000, 1000, 500, 300);
      expect(result).toEqual({ width: 300, height: 300 });
    });

    it('should not upscale images when constraints are larger than original', () => {
      const result = calculateResizeDimensions(800, 600, 1920, 1080);
      expect(result).toEqual({ width: 800, height: 600 });
    });

    it('should handle edge cases with very small dimensions', () => {
      const result = calculateResizeDimensions(2000, 1000, 1, 1);
      expect(result).toEqual({ width: 1, height: 1 });
    });

    it('should round dimensions to integers', () => {
      // Test case that would produce fractional dimensions
      const result = calculateResizeDimensions(1000, 333, 100);
      expect(result.width).toBe(100);
      expect(result.height).toBe(33); // 33.3 rounded down
      expect(Number.isInteger(result.width)).toBe(true);
      expect(Number.isInteger(result.height)).toBe(true);
    });

    it('should handle extreme aspect ratios', () => {
      // Very wide image
      const result1 = calculateResizeDimensions(3000, 100, 1000, 1000);
      expect(result1).toEqual({ width: 1000, height: 33 });

      // Very tall image
      const result2 = calculateResizeDimensions(100, 3000, 1000, 1000);
      expect(result2).toEqual({ width: 33, height: 1000 });
    });

    it('should preserve aspect ratio accurately', () => {
      const originalWidth = 1920;
      const originalHeight = 1080;
      const originalRatio = originalWidth / originalHeight;

      const result = calculateResizeDimensions(originalWidth, originalHeight, 800);
      const newRatio = result.width / result.height;

      // Allow for small rounding differences
      expect(Math.abs(newRatio - originalRatio)).toBeLessThan(0.01);
    });

    it('should handle zero and negative constraints gracefully', () => {
      // While not realistic usage, the function should handle edge cases
      const result1 = calculateResizeDimensions(1920, 1080, 0);
      expect(result1.width).toBeGreaterThanOrEqual(0);
      
      const result2 = calculateResizeDimensions(1920, 1080, undefined, 0);
      expect(result2.height).toBeGreaterThanOrEqual(0);
    });
  });
});