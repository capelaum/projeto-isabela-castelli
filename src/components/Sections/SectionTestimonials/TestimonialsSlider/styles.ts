import { Quotes } from 'phosphor-react'
import { styled } from 'styles/stitches.config'

export const TestimonialsSliderContainer = styled('div', {
  display: 'flex',
  cursor: 'grab',
  width: '100%',
  position: 'relative',

  // border: '1px solid red',

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
  gap: '4rem',
  borderRadius: '$default',
  padding: '5rem 3.5rem',

  background: '$black',

  p: {
    lineHeight: '1.6',
    position: 'relative'
  },

  '@bp3': {
    gap: '2rem',
    padding: '4rem 2.5rem',

    p: {
      fontSize: '$sm'
    }
  }
})

export const TestimonialCardHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
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

export const TestimonialsSliderArrow = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,

  width: '3rem',
  height: '3rem',
  borderRadius: '$circle',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  backgroundColor: '$gray4',

  transition: '$fast',

  '&:hover': {
    color: '$secondary'
  },

  '&:disabled': {
    display: 'none',
    cursor: 'not-allowed'
  },

  variants: {
    direction: {
      left: {
        left: 20
      },
      right: {
        right: 20
      }
    }
  },

  '@bp2': {
    display: 'none'
  }
})

export const TestimonialsMobileArrows = styled('div', {
  display: 'none',
  paddingTop: '2rem',

  '@bp2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  }
})

export const TestimonialsMobileArrow = styled('button', {
  width: '3rem',
  height: '3rem',
  borderRadius: '$circle',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  backgroundColor: '$gray4',

  transition: '$fast',

  '&:hover': {
    color: '$secondary'
  },

  '&:disabled': {
    display: 'none',
    cursor: 'not-allowed'
  },

  '@bp2': {
    display: 'flex'
  }
})
