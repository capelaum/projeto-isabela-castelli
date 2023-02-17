import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const ClinicSliderMobileWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  width: '40%',

  '@bp2': {
    width: '100%'
  }
})

export const ClinicSliderWrapper = styled(motion.div, {
  display: 'flex',
  width: '100%',
  borderRadius: '$lg',
  overflow: 'hidden',

  '@bp2': {
    width: '100%'
  }
})

export const ClinicSliderContainer = styled('div', {
  display: 'flex',
  cursor: 'grab',
  width: '100%',
  position: 'relative',
  borderRadius: '$default',

  transition: '$slow',

  button: {
    transition: '$slow',
    opacity: 0
  },

  '&:hover': {
    button: {
      opacity: 1
    }
  },

  '@bp2': {
    button: {
      display: 'none'
    }
  }
})

export const ClinicImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '500px',
  width: '100%',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '@bp3': {
    height: '300px'
  }
})

export const ClinicSliderArrow = styled('button', {
  position: 'absolute',
  // top: '50%',
  // transform: 'translateY(-50%)',
  // borderRadius: '$circle',

  top: 0,
  height: '100%',
  zIndex: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.25rem',

  color: '$white',
  background: 'rgba(0, 0, 0, 0.3)',

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
        left: 0
        // background:
        //   'linear-gradient(to right, rgba(0 , 0, 0, 0.7), transparent)'
      },
      right: {
        right: 0
        // background: 'linear-gradient(to left, rgba(0 , 0, 0, 0.7), transparent)'
      }
    }
  }
})

export const ClinicMobileArrows = styled('div', {
  display: 'none',
  paddingTop: '2rem',

  '@bp2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  }
})

export const ClinicMobileArrow = styled('button', {
  width: '3rem',
  height: '3rem',
  borderRadius: '$circle',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  backgroundColor: '$gray4',

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
