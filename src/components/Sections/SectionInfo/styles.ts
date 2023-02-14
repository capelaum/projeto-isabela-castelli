import { styled } from 'styles/stitches.config'

export const InfoWrapper = styled('section', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '2rem',
  padding: '3rem 0',
  position: 'relative',

  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',

  '@bp1': {
    flexDirection: 'column',

    'h1, h2, h3, span': {
      textAlign: 'center'
    }
  },

  '@bp3': {
    h2: {
      fontSize: '1.5rem'
    }
  }
})

export const InfotItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  '@bp1': {
    alignItems: 'center'
  },

  '@bp3': {
    h2: {
      fontSize: '1.5rem'
    },

    span: {
      fontSize: '1rem'
    }
  }
})
