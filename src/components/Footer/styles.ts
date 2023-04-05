import { shake } from 'components/Sections/SectionHero/HeroSocial/styles'
import Link from 'next/link'
import { styled } from 'styles/stitches.config'

export const FooterWrapper = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2.5rem 1.5rem',
  paddingBottom: '1.25rem',
  background: '$gray6',

  '@bp2': {
    padding: '2.5rem 1.25rem',
    paddingBottom: '1.25rem'
  }
})

export const FooterContainer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '1448px'
})

export const FooterContent = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',

  '@bp3': {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    gap: 0
  }
})

export const FooterLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2.5rem',
  marginTop: '1rem',

  '@bp3': {
    alignItems: 'center',
    margin: '5rem 0'
  }
})

export const FooterRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem',
  maxWidth: '380px',

  span: {
    lineHeight: '$base'
  },

  '@bp3': {
    alignItems: 'center',

    span: {
      textAlign: 'center'
    }
  }
})

export const FooterNav = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.25rem',

  '@bp3': {
    alignItems: 'center'
  }
})

export const FooterNavLink = styled(Link, {
  fontWeight: '$semibold',
  fontSize: '$md',
  color: '$white',
  textDecoration: 'none',
  position: 'relative',
  padding: '0 0.75rem',

  '&:hover': {
    color: '$primary',
    '&::after': {
      opacity: 1
    }
  },

  '&::after': {
    content: '',
    width: 3,
    height: '100%',
    opacity: 0,
    backgroundColor: '$primary',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'block',
    borderRadius: '$full',

    transition: '$slow'
  },

  '@bp3': {
    '&::after': {
      display: 'none'
    }
  }
})

export const FooterSocialLinks = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem'
})

export const FooterSocialLink = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  width: '3rem',
  height: '3rem',
  padding: '0.75rem',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '$full',

  textDecoration: 'none',
  transition: '$slow',

  img: {
    width: '100%',
    height: '100%',
    transition: '$slow'
  },

  '&:hover': {
    background: 'rgba(255, 255, 255, 0.2)',

    img: {
      animation: `${shake} 0.5s linear infinite`
    }
  }
})

export const FooterImageWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '380px',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },

  '@bp3': {
    width: '90%'
  }
})

export const FooterEnd = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
  marginTop: '5rem',

  span: {
    textAlign: 'center'
  },

  '@bp3': {
    alignItems: 'center',
    marginTop: '0rem'
  }
})
