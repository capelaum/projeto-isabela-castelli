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

    scrollbarWidth: 'thin',
    scrollbarColor: '$primary $primary',

    '&::-webkit-scrollbar': {
      background: '$gray6',
      width: '10px',

      '&:hover': {
        background: '$black',
        width: '10px'
      }
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$secondary',
      // borderRadius: '50px',
      width: '10px',

      '&:hover': {
        background: '$primary',
        width: '10px'
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
