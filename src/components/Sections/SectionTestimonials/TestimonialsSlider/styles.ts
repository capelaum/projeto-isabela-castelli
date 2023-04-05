import { Quotes } from 'phosphor-react'
import { styled } from 'styles/stitches.config'

export const TestimonialsSliderContainer = styled('div', {
  display: 'flex',
  cursor: 'grab',
  width: '100%',
  position: 'relative',

  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',

    background:
      'linear-gradient(to right, $black 0%, transparent 25%, transparent 75%, $black 100%)'
  },

  '@bp2': {
    '&:after': {
      display: 'none'
    }
  }
})

export const TestimonialCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
  borderRadius: '$default',
  padding: '3rem',

  background: '$black',

  p: {
    lineHeight: '$base',
    position: 'relative'
  },

  '@bp3': {
    p: {
      fontSize: '$sm'
    }
  }
})

export const TestimonialCardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
})

export const TestimonialQuotes = styled(Quotes, {
  color: 'rgba(255,255, 255, .1)',

  variants: {
    position: {
      left: {
        transform: 'rotate(180deg)',
        position: 'absolute',
        top: -4,
        left: -32
      },
      right: {
        transform: 'rotate(0)'
      }
    }
  }
})
