import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const FinalWrapper = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10rem',
  width: '100%',

  '@bp1': {
    gap: '5rem'
  },

  '@bp2': {
    gap: '5rem',
    flexDirection: 'column'
  }
})

export const FinalContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  width: '40%',

  p: {
    lineHeight: '$base',
    maxWidth: '400px'
  },

  '@bp1': {
    h1: {
      fontSize: '1.5rem'
    }
  },

  '@bp2': {
    width: '100%',

    h1: {
      fontSize: '2rem'
    },

    p: {
      fontSize: '1rem',
      maxWidth: 'none'
    }
  },

  '@bp3': {
    h1: {
      fontSize: '1.75rem'
    }
  }
})

export const FinalImageWrapper = styled(motion.div, {
  width: '40%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
    height: '100%',
    maxHeight: 650,
    objectFit: 'cover',
    borderRadius: '$lg'
  },

  '@bp2': {
    width: '100%'
  }
})
