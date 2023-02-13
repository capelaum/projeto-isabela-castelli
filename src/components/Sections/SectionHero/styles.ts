import { Text } from 'components/Text'
import { styled } from 'styles/stitches.config'

export const HeroWrapper = styled('section', {
  minHeight: '100vh',
  width: '100%',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',

  backgroundColor: '$white',

  display: 'flex',
  justifyContent: 'center',

  '@bp1': {
    flexDirection: 'column'
  }
})

export const HeroTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
  width: '45%',
  padding: '0 4rem',

  P: {
    maxWidth: '450px',
    width: '100%'
  }
})

export const HeroHeadingWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem'
})

export const HeroDescription = styled(Text, {
  width: '100%',
  maxWidth: '400px',
  display: 'flex'
})

export const HeroImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '55%',
  position: 'relative',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'right'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
    top: 0,
    right: 0,
    pointerEvents: 'none',
    background:
      'linear-gradient(to right, $white, rgba(255, 255, 255, 0.2), transparent, transparent)'
  }
})
