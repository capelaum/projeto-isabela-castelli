import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const ClinicWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

export const ClinicContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10rem',
  width: '100%',
  maxWidth: '1448px',
  padding: '5rem 1.5rem',

  '@bp1': {
    gap: '5rem'
  },

  '@bp2': {
    gap: '3.5rem',
    flexDirection: 'column-reverse',
    padding: '2.5rem 1.25rem'
  }
})

export const ClinicContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  width: '40%',

  p: {
    lineHeight: 1.6,
    maxWidth: '400px'
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
