import { styled } from 'styles/stitches.config'

export const ServicesWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '7.5rem',
  padding: '10rem 0',

  h1: {
    textAlign: 'center',
    maxWidth: '750px'
  },

  '@bp2': {
    paddingTop: '2.5rem',
    paddingBottom: '5rem',

    h1: {
      fontSize: '2rem'
    }
  },

  '@bp3': {
    paddingTop: '1.5rem',
    gap: '5rem',

    h1: {
      fontSize: '1.5rem'
    }
  }
})

export const ServicesContainer = styled('div', {
  display: 'flex',
  borderRadius: '$lg',
  backgroundColor: 'rgba(235, 199, 197, .1)',

  width: '100%',

  '@bp2': {
    flexDirection: 'column'
  }
})

export const ServicesImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '3.5rem',
  width: '60%',

  img: {
    width: '100%',
    height: '100%',
    borderRadius: '$lg',
    objectFit: 'cover'
  },

  '@bp1': {
    padding: '1.5rem'
  },

  '@bp2': {
    width: '100%'
  }
})

export const ServicesList = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',
  borderLeft: '1px solid rgba(255, 255, 255, .1)',

  '@bp2': {
    width: '100%',
    borderLeft: 0
  }
})

export const ServiceItem = styled('li', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '1rem',

  padding: '2rem 1.25rem',
  borderLeft: '2px solid transparent',

  transition: '$fast',

  '&:first-child': {
    borderRadius: '0 $lg 0 0 '
  },

  '&:last-child': {
    borderRadius: '0 0 $lg 0 '
  },

  '&:not(:last-child)': {
    borderBottom: '1px solid rgba(255, 255, 255, .1)'
  },

  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderLeft: '2px solid $primary'
  },

  '@bp1': {
    span: {
      fontSize: '$xs'
    }
  },

  '@bp2': {
    padding: '1.25rem',

    '&:first-child': {
      borderRadius: 0
    },

    '&:last-child': {
      borderRadius: '0 0 $lg $lg'
    }
  }
})
