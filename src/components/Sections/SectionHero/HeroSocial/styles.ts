import { motion } from 'framer-motion'
import Link from 'next/link'
import { keyframes, styled } from 'styles/stitches.config'

export const HeroSocialWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: '3rem',
  width: '100%',

  '@bp1': {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const Divider = styled('hr', {
  background:
    'linear-gradient(to right, $gray1, $gray1, $gray1, transparent, transparent)',
  opacity: 0.7,
  height: '1px',
  width: '100%',
  border: 'none',
  marginBottom: '2rem',

  '@bp1': {
    background:
      'linear-gradient(to right, transparent, $gray1, $gray1, transparent)'
  }
})

export const HeroSocialLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
  marginTop: '2rem',

  '@bp2': {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    gap: '1.5rem'
  }
})

export const shake = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '25%': { transform: 'rotate(10deg)' },
  '50%': { transform: 'rotate(0deg)' },
  '75%': { transform: 'rotate(-10deg)' },
  '100%': { transform: 'rotate(0deg)' }
})

export const HeroSocialLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',

  textDecoration: 'none',

  transition: '$default',

  span: {
    transition: '$default'
  },

  img: {
    width: '1.25rem',
    height: '1.25rem',
    transition: '$slow'
  },

  '&:hover': {
    span: {
      color: '$gray1'
    },

    img: {
      animation: `${shake} 0.5s linear infinite`
    }
  }
})
