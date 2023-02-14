import { styled } from './stitches.config'

export const HomeWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1.5rem',
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20px',
    left: 0,
    right: 0,
    height: '20px',
    zIndex: 1,
    background: 'linear-gradient(to top, $gray5, $white, transparent)'
  },

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
