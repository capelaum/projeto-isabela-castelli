import { Text } from 'components/Text'
import { motion } from 'framer-motion'
import { styled } from 'styles/stitches.config'

export const InfoSection = styled(motion.section, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$gray4',

  width: '100%',
  gap: '2.5rem'
})

export const InfoWrapper = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',

  width: '100%',
  maxWidth: '1448px'
})

export const InfoWarning = styled(motion.div, {
  width: '100%',
  maxWidth: '1448px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export const InfoWarningText = styled(Text, {
  width: '100%',
  display: 'flex',

  borderRadius: '$default',

  // background: 'rgba(0, 0, 0, 0.25)',
  backgroundColor: 'rgba(235, 199, 197, .1)',
  padding: '1.75rem 1.25rem',
  margin: '2.5rem 1.25rem',

  justifyContent: 'flex-start',

  lineHeight: 1.6,
  textAlign: 'justify'
})

export const InfoContent = styled(motion.div, {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '10rem',
  position: 'relative',
  padding: '2.5rem 1.25rem',

  '@bp1': {
    gap: '4rem',

    span: {
      fontSize: '$sm'
    }
  },

  '@bp2': {
    flexDirection: 'column',
    gap: '5rem',

    h2: {
      fontSize: '1.5rem',
      textAlign: 'center'
    },

    span: {
      textAlign: 'center'
    }
  },

  '@bp3': {
    gap: '2rem'
  }
})

export const InfotItems = styled('div', {
  display: 'flex',

  '@bp3': {
    borderTop: '1px solid rgba(255, 255, 255, .1)',
    paddingTop: '2rem',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '2rem'
  }
})

export const InfotItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',

  borderLeft: '1px solid rgba(255, 255, 255, .1)',
  paddingLeft: '2rem',

  '&:not(:last-child)': {
    paddingRight: '2rem'
  },

  '@bp2': {
    borderLeft: 'none',
    padding: 0,
    alignItems: 'center',

    '&:last-child': {
      paddingLeft: '2rem',
      borderLeft: '1px solid rgba(255, 255, 255, .1)'
    }
  },

  '@bp3': {
    '&:not(:last-child)': {
      paddingRight: '0rem'
    },

    '&:last-child': {
      paddingLeft: '0rem',
      borderLeft: 'none'
    }
  }
})
