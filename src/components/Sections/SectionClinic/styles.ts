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

export const ClinicImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40%',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '@bp2': {
    width: '100%'
  }
})

export const ClinicContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  width: '40%',

  p: {
    lineHeight: 1.6
  },

  '@bp2': {
    width: '100%',

    h1: {
      fontSize: '2rem'
    },

    p: {
      fontSize: '1rem'
    }
  },

  '@bp3': {
    h1: {
      fontSize: '1.5rem'
    }
  }
})
