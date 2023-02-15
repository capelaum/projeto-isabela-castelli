import { styled } from 'styles/stitches.config'

export const StyledPinkGradient = styled('div', {
  position: 'absolute',
  bottom: -300,
  left: 0,
  width: '40%',
  height: '800px',
  zIndex: -1,

  background:
    'radial-gradient(circle at left center, rgba(235, 199, 197, .5) 0%,transparent 50%, transparent 100%)',

  '@bp2': {
    display: 'none'
  }
})
