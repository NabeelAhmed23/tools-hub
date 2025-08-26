import { describe, it, expect } from '@jest/globals';
import { generateGradientCSS, type ColorStop } from '../src/lib/gradient-utils';

describe('Gradient Utilities', () => {
  describe('generateGradientCSS', () => {
    it('should generate basic linear gradient CSS', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 90, 'linear');
      expect(result).toBe('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
    });

    it('should generate radial gradient CSS', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 45, 'radial');
      expect(result).toBe('radial-gradient(circle, #ff0000 0%, #0000ff 100%)');
    });

    it('should handle multiple color stops', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#00ff00', position: 50 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 45, 'linear');
      expect(result).toBe('linear-gradient(45deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)');
    });

    it('should sort color stops by position', () => {
      const stops: ColorStop[] = [
        { color: '#0000ff', position: 100 },
        { color: '#ff0000', position: 0 },
        { color: '#00ff00', position: 50 }
      ];
      
      const result = generateGradientCSS(stops, 90, 'linear');
      expect(result).toBe('linear-gradient(90deg, #ff0000 0%, #00ff00 50%, #0000ff 100%)');
    });

    it('should handle different angle values', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#0000ff', position: 100 }
      ];
      
      expect(generateGradientCSS(stops, 0, 'linear')).toContain('0deg');
      expect(generateGradientCSS(stops, 180, 'linear')).toContain('180deg');
      expect(generateGradientCSS(stops, 360, 'linear')).toContain('360deg');
    });

    it('should handle fractional positions', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#00ff00', position: 33.33 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 90, 'linear');
      expect(result).toBe('linear-gradient(90deg, #ff0000 0%, #00ff00 33.33%, #0000ff 100%)');
    });

    it('should handle color formats beyond hex', () => {
      const stops: ColorStop[] = [
        { color: 'rgb(255, 0, 0)', position: 0 },
        { color: 'rgba(0, 255, 0, 0.5)', position: 50 },
        { color: 'hsl(240, 100%, 50%)', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 90, 'linear');
      expect(result).toBe('linear-gradient(90deg, rgb(255, 0, 0) 0%, rgba(0, 255, 0, 0.5) 50%, hsl(240, 100%, 50%) 100%)');
    });

    it('should use default parameters when not specified', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops);
      expect(result).toBe('linear-gradient(90deg, #ff0000 0%, #0000ff 100%)');
    });

    it('should handle edge cases with single color stop', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 50 }
      ];
      
      const result = generateGradientCSS(stops, 90, 'linear');
      expect(result).toBe('linear-gradient(90deg, #ff0000 50%)');
    });

    it('should handle many color stops', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#ff8000', position: 20 },
        { color: '#ffff00', position: 40 },
        { color: '#80ff00', position: 60 },
        { color: '#00ff00', position: 80 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 90, 'linear');
      expect(result).toBe('linear-gradient(90deg, #ff0000 0%, #ff8000 20%, #ffff00 40%, #80ff00 60%, #00ff00 80%, #0000ff 100%)');
    });

    it('should preserve radial gradient format regardless of angle', () => {
      const stops: ColorStop[] = [
        { color: '#ff0000', position: 0 },
        { color: '#0000ff', position: 100 }
      ];
      
      const result = generateGradientCSS(stops, 180, 'radial');
      expect(result).toBe('radial-gradient(circle, #ff0000 0%, #0000ff 100%)');
    });
  });
});