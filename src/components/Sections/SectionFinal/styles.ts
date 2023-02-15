import { styled } from 'styles/stitches.config'

export const FinalWrapper = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const FinalContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  width: '40%',

  p: {
    lineHeight: 1.6,
    maxWidth: '400px'
  },

  '@bp1': {
    h1: {
      fontSize: '1.5rem'
    }
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

export const FinalImageWrapper = styled('div', {
  width: '40%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '@bp2': {
    width: '100%'
  }
})
