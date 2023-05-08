import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  html: {
    scrollBehavior: 'smooth',
    scrollPaddingTop: '6rem'
  },

  body: {
    backgroundColor: '$gray5',
    color: '$white',
    fontFamily: '$inter',
    fontWeight: 400,

    '-webkit-font-smoothing': 'antialised',

    '::selection': {
      background: '$secondary',
      color: '$white'
    },

    scrollbarWidth: 'thin',
    scrollbarColor: '$primary $primary',

    '&::-webkit-scrollbar': {
      background: '$gray6',
      width: '8px',

      '&:hover': {
        background: '$black'
      }
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$secondary',
      borderRadius: '50px',
      width: '8px',

      '&:hover': {
        background: '$primary',
        width: '8px'
      }
    }
  },

  'a, button': {
    fontFamily: '$inter',
    cursor: 'pointer',
    border: 'none',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.7
    }
  },

  input: {
    fontFamily: '$inter'
  }
})
