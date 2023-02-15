import { styled } from 'styles/stitches.config'

export const InfoWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column'
})

export const InfoContent = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10rem',
  padding: '3rem 0',
  position: 'relative',

  '@bp1': {
    gap: '4rem',

    h2: {
      fontSize: '1.25rem'
    },

    span: {
      fontSize: '$sm'
    }
  },

  '@bp2': {
    flexDirection: 'column',
    gap: '5rem',

    h2: {
      fontSize: '1.5rem',
      textAlign: 'center'
    },

    span: {
      textAlign: 'center'
    }
  },

  '@bp3': {
    gap: '2rem'
  }
})

export const InfotItems = styled('div', {
  display: 'flex',

  '@bp3': {
    borderTop: '1px solid rgba(255, 255, 255, .1)',
    paddingTop: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  }
})

export const InfotItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  borderLeft: '1px solid rgba(255, 255, 255, .1)',
  paddingLeft: '2rem',

  '&:not(:last-child)': {
    paddingRight: '2rem'
  },

  '@bp2': {
    borderLeft: 'none',
    padding: 0,
    alignItems: 'center',

    '&:last-child': {
      paddingLeft: '2rem',
      borderLeft: '1px solid rgba(255, 255, 255, .1)'
    }
  },

  '@bp3': {
    '&:not(:last-child)': {
      paddingRight: '0rem'
    },

    '&:last-child': {
      paddingLeft: '0rem',
      borderLeft: 'none'
    }
  }
})

export const InfoDivider = styled('hr', {
  background:
    'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.1) 95%, transparent 100%)',
  opacity: 0.7,
  height: '1px',
  width: '100%',
  border: 'none',

  '@bp1': {
    background:
      'linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.1) 5%, rgba(255, 255, 255, 0.1) 95%, transparent 100%)'
  }
})
