import { motion } from 'framer-motion'
import Link from 'next/link'
import { styled } from 'styles/stitches.config'

export const InstaWrapper = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  width: '100%',

  '.wx-widget-container': {
    maxWidth: 'none !important'
  },

  '@bp2': {
    gap: '2rem'
  },

  '@bp3': {
    gap: '1.5rem',

    h1: {
      fontSize: '1.75rem'
    }
  }
})

export const InstaTitle = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  alignSelf: 'center',

  textDecoration: 'none',

  h1: {
    textAlign: 'center',
    transition: '$default'
  },

  transition: '$default',

  '&:hover': {
    cursor: 'pointer',
    h1: {
      color: '$primary'
    }
  },

  '@bp3': {
    h1: {
      fontSize: '1.5rem'
    }
  }
})

export const InstaProfileImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '3rem',
  height: '3rem',
  borderRadius: '50%',
  border: '2px solid $primary',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '@bp3': {
    width: '3rem',
    height: '3rem'
  }
})
