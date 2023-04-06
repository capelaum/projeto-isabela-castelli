import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const ClinicWrapper = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

export const ClinicContainer = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10rem',
  width: '100%',
  maxWidth: '1448px',
  padding: '5rem 1.5rem',

  '@bp1': {
    gap: '5rem'
  },

  '@bp2': {
    gap: '3.5rem',
    flexDirection: 'column-reverse',
    padding: '0rem 1.25rem',
    paddingBottom: '2.5rem'
  }
})

export const ClinicContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '3rem',
  width: '40%',

  p: {
    lineHeight: '$base',
    maxWidth: '450px'
  },

  '@bp1': {
    width: '50%'
  },

  '@bp2': {
    width: '100%',

    h1: {
      fontSize: '2rem'
    },

    p: {
      fontSize: '1rem',
      maxWidth: 'none'
    }
  },

  '@bp3': {
    h1: {
      fontSize: '1.75rem'
    }
  }
})

export const ClinicDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  p: {
    lineHeight: '$base'
  },

  '@bp2': {
    p: {
      fontSize: '1rem'
    }
  }
})

export const ClinicObservationWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.75rem',
  padding: ' 0 1.5rem',
  margin: '2rem 0 3rem',

  width: '100%',
  maxWidth: '1448px'
})

export const ClinicObservation = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',

  backgroundColor: '$gray4',
  borderRadius: '$default',

  padding: '1.5rem',

  strong: {
    fontWeight: '$bold',
    color: '$white'
  },

  'span, strong': {
    lineHeight: '$base'
  }
})
