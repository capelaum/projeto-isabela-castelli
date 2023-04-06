import { motion } from 'framer-motion'
import Image from 'next/image'
import { styled } from 'styles/stitches.config'

export const ClinicSliderMobileWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  width: '45%',

  '@bp2': {
    width: '100%'
  }
})

export const ClinicSliderContainer = styled(motion.div, {
  display: 'flex',
  cursor: 'grab',
  position: 'relative',
  borderRadius: '$lg',

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

export const ClinicImage = styled(Image, {
  height: '600px',
  objectFit: 'cover',

  '@bp3': {
    height: '300px'
  }
})
