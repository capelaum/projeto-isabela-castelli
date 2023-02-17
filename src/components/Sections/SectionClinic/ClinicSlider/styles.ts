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
