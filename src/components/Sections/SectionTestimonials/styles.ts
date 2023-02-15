import { Quotes } from 'phosphor-react'
import { styled } from 'styles/stitches.config'

export const TestimonialsWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5rem 0',
  width: '100%',

  '@bp1': {
    // padding: '5rem 1.5rem'
  },

  '@bp2': {
    padding: '2.5rem 1.5rem'
  },

  '@bp3': {
    padding: '1rem 1rem'
  }
})

export const TestimonialsHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.25rem',
  padding: '0 1.5rem',
  paddingBottom: '5rem',

  'h1, h2': {
    textAlign: 'center'
  },

  '@bp2': {
    h1: {
      fontSize: '1.5rem'
    },

    h2: {
      fontSize: '$sm'
    }
  },

  '@bp3': {
    padding: '0 1rem',
    paddingBottom: '3rem',

    h1: {
      fontSize: '1.25rem'
    },

    h2: {
      fontSize: '$xs'
    }
  }
})

export const StyledQuotes = styled(Quotes, {
  transform: 'rotate(180deg)'
})
