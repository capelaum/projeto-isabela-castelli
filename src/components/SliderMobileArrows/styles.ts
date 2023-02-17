import { styled } from 'styles/stitches.config'

export const SliderMobileArrowsWrapper = styled('div', {
  display: 'none',
  paddingTop: '2rem',

  '@bp2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  }
})

export const SliderMobileArrow = styled('button', {
  width: '3rem',
  height: '3rem',
  borderRadius: '$circle',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  backgroundColor: '$gray3',

  transition: '$fast',

  '&:hover': {
    color: '$secondary'
  },

  '&:disabled': {
    display: 'none',
    cursor: 'not-allowed'
  },

  '@bp2': {
    display: 'flex'
  }
})
