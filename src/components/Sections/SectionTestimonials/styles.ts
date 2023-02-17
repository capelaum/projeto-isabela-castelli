import { motion } from 'framer-motion'
import { Quotes } from 'phosphor-react'
import { styled } from 'styles/stitches.config'

export const TestimonialsWrapper = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',

  padding: '5rem 0',

  '@bp2': {
    padding: '2.5rem 1.25rem'
  }
})

export const TestimonialsHeader = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
  padding: '0 1.5rem',
  paddingBottom: '5rem',

  'h1, h2': {
    textAlign: 'center'
  },

  '@bp2': {
    h2: {
      fontSize: '$sm'
    }
  },

  '@bp3': {
    padding: '0 1rem',
    paddingBottom: '5rem'
  }
})

export const StyledQuotes = styled(Quotes, {
  transform: 'rotate(180deg)'
})
