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

  margin: '0 1.5rem',
  width: '100%',
  maxWidth: '1400px',
  zIndex: 3,

  '@bp1': {
    flexDirection: 'column',
    margin: '0 1rem',
    marginTop: '10rem'
  }
})

export const HeroTextWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '2rem',

  P: {
    maxWidth: '450px',
    width: '100%',
    display: 'flex',
    lineHeight: 1.4
  },

  a: {
    marginTop: '1.5rem'
  },

  '@bp1': {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingBottom: '3rem',

    p: {
      textAlign: 'center'
    }
  },

  '@bp2': {
    p: {
      fontSize: '$md'
    }
  },

  '@bp3': {
    p: {
      fontSize: '$sm'
    }
  }
})

export const HeroHeadingWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  h1: {
    maxWidth: '650px',
    width: '100%'
  },

  span: {
    paddingLeft: '0.75rem'
  },

  '@bp1': {
    h1: {
      textAlign: 'center'
    },

    span: {
      textAlign: 'center',
      paddingLeft: 0
    }
  },

  '@bp2': {
    gap: '1rem',

    h1: {
      fontSize: '3rem'
    },

    span: {
      fontSize: '$xs'
    }
  },

  '@bp3': {
    h1: {
      fontSize: '2.125rem'
    }
  }
})

export const HeroImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '60%',

  position: 'absolute',
  top: '80px',
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
