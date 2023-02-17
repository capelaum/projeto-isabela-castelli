import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const StyledPinkGradient = styled(motion.div, {
  position: 'absolute',
  top: -400,
  left: 0,
  width: 'min(40%, 600px)',
  height: '800px',
  zIndex: -1,

  background:
    'radial-gradient(circle at center left, rgba(235, 199, 197, .6) 0%,transparent 50%, transparent 100%)',

  '@bp2': {
    display: 'none'
  }
})
