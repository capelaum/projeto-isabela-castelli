import { styled } from 'styles/stitches.config'

export const HeroWrapper = styled('section', {
  minHeight: '100vh',
  height: '100%',
  width: '100%',

  overflow: 'hidden',
  position: 'relative',

  backgroundColor: '$white',

  display: 'flex',
  justifyContent: 'center',

  '@bp1': {
    minHeight: '100%',
    height: 'auto',
    flexDirection: 'column'
  }
})

export const HeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',

  // border: '1px solid red',

  margin: '0 1.5rem',
  width: '100%',
  maxWidth: '1400px',

  zIndex: 3,

  '@bp1': {
    flexDirection: 'column',
    margin: '0 1rem',
    marginTop: '12rem',
    width: 'auto'
  }
})

export const HeroContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '@bp1': {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})

export const HeroImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60%',

  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,

  zIndex: 0,

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
      'linear-gradient(to right, $white, rgba(255, 255, 255, 0.5),  rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent, transparent, transparent, transparent, transparent)'
  },

  '@bp1': {
    display: 'none'
  }
})

export const HeroImageMobileWrapper = styled('div', {
  display: 'none',
  position: 'relative',
  marginTop: '3rem',

  width: '100%',
  height: '100%',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
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
      'linear-gradient(to bottom, $white, rgba(255, 255, 255, 0.5),  rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1), transparent, transparent, transparent, transparent, transparent)'
  },

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
