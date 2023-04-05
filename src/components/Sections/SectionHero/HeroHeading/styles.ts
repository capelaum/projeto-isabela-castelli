import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const HeroHeadingWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflow: 'visible',

  h2: {
    marginBottom: '0.75rem',
    paddingLeft: '0.75rem'
  },

  h1: {
    maxWidth: '650px',
    width: '100%',
    position: 'relative',
    lineHeight: '$short',
    zIndex: 3
  },

  p: {
    maxWidth: '450px',
    width: '100%',
    lineHeight: '$short',
    marginTop: '1.25rem'
  },

  a: {
    marginTop: '4rem'
  },

  '@bp1': {
    alignItems: 'center',

    'h1, h2, p': {
      textAlign: 'center'
    },

    h1: {
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

    p: {
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

    p: {
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

    p: {
      maxWidth: '290px'
    }
  }
})
