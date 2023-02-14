import { styled } from './stitches.config'

export const HomeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1.5rem',
  position: 'relative',

  '@bp2': {
    padding: '0 1rem'
  }
})

export const HomeContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1400px'
})
