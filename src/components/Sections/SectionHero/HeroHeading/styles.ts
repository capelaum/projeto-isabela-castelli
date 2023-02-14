import { styled } from 'styles/stitches.config'

export const HeroHeadingWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflow: 'visible',

  // border: '1px solid red',

  h2: {
    marginBottom: '0.75rem',
    paddingLeft: '0.75rem'
  },

  h1: {
    maxWidth: '650px',
    width: '100%',
    position: 'relative',
    lineHeight: 1.4,
    zIndex: 3,

    strong: {
      textDecoration: 'underline',
      textDecorationStyle: 'dotted',
      textDecorationThickness: '0.2rem',
      textDecorationColor: '$secondary',
      textUnderlineOffset: '0.3em'
    }
  },

  h3: {
    maxWidth: '450px',
    width: '100%',
    lineHeight: 1.4,
    marginTop: '2.5rem'
  },

  a: {
    marginTop: '4rem'
  },

  '@bp1': {
    alignItems: 'center',

    'h1, h2, h3': {
      textAlign: 'center'
    },

    h1: {
      background: 'radial-gradient(ellipse at center, $primary 0%, $white 70%)',
      strong: {
        textDecoration: 'none'
      }
    },

    h2: {
      paddingLeft: 0
    }
  },

  '@bp2': {
    h2: {
      fontSize: '$xs'
    },

    h1: {
      fontSize: '3rem',
      maxWidth: '450px'
    },

    h3: {
      fontSize: '$md',
      maxWidth: '450px'
    }
  },

  '@bp3': {
    h2: {
      // fontSize: '$xs'
    },

    h1: {
      fontSize: '2.5rem',
      maxWidth: '400px'
    },

    h3: {
      fontSize: '$sm',
      maxWidth: '380px'
    }
  },

  '@bp4': {
    h2: {},

    h1: {
      fontSize: '2rem',
      maxWidth: '300px'
    },

    h3: {
      maxWidth: '290px'
    }
  }
})
