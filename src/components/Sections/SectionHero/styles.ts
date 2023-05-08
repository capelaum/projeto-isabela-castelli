import { styled } from 'styles/stitches.config'

export const HeroWrapper = styled('section', {
  minHeight: '100vh',
  height: '100%',
  width: '100%',

  overflow: 'hidden',
  position: 'relative',

  display: 'flex',
  justifyContent: 'center',

  background: '$white',

  '@bp1': {
    minHeight: '100%',
    height: 'auto',
    flexDirection: 'column',
    background: '$white'
  }
})

export const HeroContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',

  margin: '0 1.5rem',
  marginTop: '12rem',
  marginBottom: '3rem',
  width: '100%',
  maxWidth: '1400px',

  zIndex: 3,

  '@bp1': {
    flexDirection: 'column',
    width: 'auto'
  },

  '@bp2': {
    margin: '0 1rem',
    marginTop: '10rem'
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
  width: '50%',
  marginTop: '5rem',

  // border: '1px solid red',

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
      'linear-gradient(to right, $white 0%, rgba(255, 255, 255, 0.5) 2%, transparent 6%, transparent 100%)'
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
      'linear-gradient(to bottom, $white 0%, rgba(255, 255, 255, 0.5) 2%, transparent 8%, transparent 100%)'
  },

  '@bp1': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
