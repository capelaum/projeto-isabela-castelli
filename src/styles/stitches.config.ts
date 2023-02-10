import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',

      gray900: '#171717',
      gray800: '#262626',
      gray700: '#404040',
      gray600: '#525252',
      gray500: '#737373',
      gray400: '#a3a3a3',
      gray300: '#d4d4d4',
      gray200: '#e5e5e5',
      gray100: '#f5f5f5',
      gray50: '#fafafa'
    },

    fonts: {
      roboto: 'Roboto, sans-serif'
    },

    fontSizes: {
      xs: '0.875rem', // 14px
      sm: '1rem', // 16px
      md: '1.125rem', // 18px
      lg: '1.25rem', // 20px
      xl: '1.5rem', // 24px
      '2xl': '2rem' // 32px
    },

    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    space: {
      xs: '0.75rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '2.5rem'
    },

    radii: {
      default: '8px',
      lg: '24px',
      xl: '32px',
      circle: '50%',
      full: '9999px'
    },

    shadows: {
      default: '4px 4px 8px rgba(0, 0, 0, 0.25)',
      card: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
    },

    transitions: {
      default: 'all 0.3s ease-in-out',
      fast: 'all 0.15s ease-in-out',
      slow: 'all 0.45s ease-in-out'
    }
  },

  media: {
    bp1: '(max-width: 1200px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 576px)',
    bp4: '(max-width: 480px)'
  }
})
