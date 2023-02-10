import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },

  html: {
    scrollBehavior: 'smooth'
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray300',
    fontFamily: '$roboto',
    fontWeight: 400,
    '-webkit-font-smoothing': 'antialised'
  },

  'a, button': {
    fontFamily: '$roboto',
    cursor: 'pointer',
    border: 'none',

    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.7
    }
  },

  input: {
    fontFamily: '$roboto'
  }
})
