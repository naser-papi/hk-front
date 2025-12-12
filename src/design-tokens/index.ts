/**
 * Design Tokens System
 * 
 * Centralized design system tokens for the HollandKade Frontend.
 * This file serves as the single source of truth for all design decisions
 * including colors, spacing, typography, shadows, and more.
 * 
 * Colors are chosen to reflect professionalism, trust, and warmth
 * suitable for an immigration consulting website.
 */

export const designTokens = {
  /**
   * Color Palette
   * 
   * Primary colors: Professional blues representing trust and stability
   * Accent colors: Warm oranges/reds representing energy and approachability
   * Neutral colors: Grays for text and backgrounds
   * Semantic colors: Success, warning, error, info
   */
  colors: {
    // Primary Brand Colors - Professional Blue Palette
    primary: {
      50: '#e8f0f7',
      100: '#c5d9ec',
      200: '#9ebfdf',
      300: '#77a5d2',
      400: '#5a91c9',
      500: '#3d7dc0', // Main primary color - Trust blue
      600: '#3775ba',
      700: '#2f6ab2',
      800: '#2760aa',
      900: '#1a4d9c',
      DEFAULT: '#3d7dc0',
      light: '#5a91c9',
      lighter: '#77a5d2',
      dark: '#2f6ab2',
      darker: '#1a4d9c',
    },

    // Secondary/Accent Colors - Warm Orange/Red Palette
    accent: {
      50: '#fff3e0',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800', // Main accent color - Warm orange
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
      DEFAULT: '#ff9800',
      light: '#ffb74d',
      lighter: '#ffcc80',
      dark: '#f57c00',
      darker: '#e65100',
    },

    // Success Color - Green (Growth, Success, New Beginnings)
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50', // Main success color
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      DEFAULT: '#4caf50',
      light: '#66bb6a',
      dark: '#388e3c',
    },

    // Warning Color - Amber/Yellow
    warning: {
      50: '#fff8e1',
      100: '#ffecb3',
      200: '#ffe082',
      300: '#ffd54f',
      400: '#ffca28',
      500: '#ffc107', // Main warning color
      600: '#ffb300',
      700: '#ffa000',
      800: '#ff8f00',
      900: '#ff6f00',
      DEFAULT: '#ffc107',
      light: '#ffd54f',
      dark: '#ffa000',
    },

    // Error Color - Red
    error: {
      50: '#ffebee',
      100: '#ffcdd2',
      200: '#ef9a9a',
      300: '#e57373',
      400: '#ef5350',
      500: '#f44336', // Main error color
      600: '#e53935',
      700: '#d32f2f',
      800: '#c62828',
      900: '#b71c1c',
      DEFAULT: '#f44336',
      light: '#ef5350',
      dark: '#d32f2f',
    },

    // Info Color - Light Blue
    info: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3', // Main info color
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
      DEFAULT: '#2196f3',
      light: '#42a5f5',
      dark: '#1976d2',
    },

    // Neutral Colors - Grays
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      DEFAULT: '#757575',
      light: '#9e9e9e',
      dark: '#424242',
    },

    // Background Colors
    background: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      tertiary: '#f0f2f5',
      dark: '#1a1f2e',
      overlay: 'rgba(0, 0, 0, 0.5)',
      overlayLight: 'rgba(0, 0, 0, 0.3)',
    },

    // Text Colors
    text: {
      primary: '#212121',
      secondary: '#424242',
      tertiary: '#616161',
      disabled: '#9e9e9e',
      inverse: '#ffffff',
      link: '#3d7dc0',
      linkHover: '#2f6ab2',
    },

    // Border Colors
    border: {
      light: '#e0e0e0',
      default: '#bdbdbd',
      dark: '#757575',
      focus: '#3d7dc0',
    },
  },

  /**
   * Spacing Scale
   * Based on 4px base unit for consistency
   */
  spacing: {
    0: '0',
    1: '0.25rem',   // 4px
    2: '0.5rem',    // 8px
    3: '0.75rem',   // 12px
    4: '1rem',      // 16px
    5: '1.25rem',   // 20px
    6: '1.5rem',    // 24px
    8: '2rem',      // 32px
    10: '2.5rem',   // 40px
    12: '3rem',     // 48px
    16: '4rem',     // 64px
    20: '5rem',     // 80px
    24: '6rem',     // 96px
    32: '8rem',     // 128px
  },

  /**
   * Typography Scale
   * Fluid typography with responsive sizing
   */
  typography: {
    fontFamily: {
      sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'] as string[],
      persian: ['var(--font-iransans)', 'Tahoma', 'Arial', 'sans-serif'] as string[],
      mono: ['var(--font-geist-mono)', 'monospace'] as string[],
    },

    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.025em' }],      // 12px
      sm: ['0.875rem', { lineHeight: '1.25rem', letterSpacing: '0.025em' }],  // 14px
      base: ['1rem', { lineHeight: '1.5rem', letterSpacing: '0em' }],         // 16px
      lg: ['1.125rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }], // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem', letterSpacing: '-0.025em' }], // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem', letterSpacing: '-0.025em' }],   // 24px
      '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.025em' }], // 30px
      '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.05em' }], // 36px
      '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.05em' }],          // 48px
      '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.05em' }],        // 60px
      '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.05em' }],        // 72px
    },

    fontWeight: {
      thin: '100',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },

    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
  },

  /**
   * Border Radius Scale
   */
  borderRadius: {
    none: '0',
    sm: '0.25rem',   // 4px
    md: '0.5rem',    // 8px
    lg: '1rem',      // 16px
    xl: '1.5rem',    // 24px
    '2xl': '2rem',   // 32px
    '3xl': '3rem',   // 48px
    full: '9999px',
  },

  /**
   * Shadow System
   */
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },

  /**
   * Z-Index Scale
   * All values must be strings for Tailwind compatibility
   */
  zIndex: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    tooltip: '1700',
  },

  /**
   * Breakpoints
   */
  breakpoints: {
    xs: '380px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  },

  /**
   * Transitions & Animations
   */
  transitions: {
    duration: {
      fast: '150ms',
      base: '200ms',
      slow: '300ms',
      slower: '500ms',
    },
    timing: {
      ease: 'ease',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },

  /**
   * Opacity Scale
   */
  opacity: {
    0: '0',
    5: '0.05',
    10: '0.1',
    20: '0.2',
    25: '0.25',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    75: '0.75',
    80: '0.8',
    90: '0.9',
    95: '0.95',
    100: '1',
  },
};

// Export individual token categories for easier imports
export const colors = designTokens.colors;
export const spacing = designTokens.spacing;
export const typography = designTokens.typography;
export const borderRadius = designTokens.borderRadius;
export const shadows = designTokens.shadows;
export const zIndex = designTokens.zIndex;
export const breakpoints = designTokens.breakpoints;
export const transitions = designTokens.transitions;
export const opacity = designTokens.opacity;

// Type exports for TypeScript
export type DesignTokens = typeof designTokens;
export type ColorPalette = typeof colors;
export type SpacingScale = typeof spacing;
export type TypographyScale = typeof typography;

