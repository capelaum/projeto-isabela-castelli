import { styled } from 'styles/stitches.config'

export const ClinicWrapper = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10rem',
  padding: '2.5rem 0',
  width: '100%',

  '@bp1': {
    gap: '5rem'
  },

  '@bp2': {
    gap: '3.5rem',
    flexDirection: 'column-reverse',
    paddingTop: '1rem',
    paddingBottom: '5rem'
  }
})

export const ClinicContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  width: '40%',

  p: {
    lineHeight: 1.6,
    maxWidth: '400px'
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
