import { styled } from 'styles/stitches.config'

export const StyledSection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1448px',
  padding: '5rem 1.5rem',

  '@bp2': {
    padding: '5rem 1.25rem'
  }
})
