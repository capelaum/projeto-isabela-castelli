import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const AboutWrapper = styled('section', {
  display: 'flex',
  alignItems: 'center',
  gap: '10rem',
  width: '100%',

  '@bp1': {
    gap: '5rem'
  },

  '@bp2': {
    gap: '3.5rem',
    flexDirection: 'column'
  }
})

export const AboutImageWrapper = styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '$lg'
  },

  '@bp2': {
    width: '100%'
  }
})

export const AboutContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  width: '40%',

  '@bp2': {
    width: '100%',

    h1: {
      fontSize: '2rem'
    }
  }
})

export const AboutDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  maxWidth: '400px',

  p: {
    lineHeight: '$base'
  },

  '@bp2': {
    maxWidth: 'none',
    width: '100%',

    p: {
      fontSize: '1rem'
    }
  }
})
