import { styled } from 'styles/stitches.config'

export const SliderArrowButton = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,

  width: '3rem',
  height: '3rem',
  borderRadius: '$circle',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  backgroundColor: '$gray4',

  transition: '$default',

  '&:hover': {
    color: '$secondary'
  },

  '&:disabled': {
    display: 'none',
    cursor: 'not-allowed'
  },

  variants: {
    direction: {
      left: {
        left: 20
      },
      right: {
        right: 20
      }
    }
  },

  '@bp2': {
    display: 'none'
  }
})
