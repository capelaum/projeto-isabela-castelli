import Link from 'next/link'
import { styled } from 'styles/stitches.config'

export const NavbarWrapper = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$white',

  width: '100%',
  padding: '1rem 1.5rem',

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 4,

  variants: {
    isScrolled: {
      true: {
        background: '$white'
      },

      false: {
        backgroundColor: '$white'
      }
    }
  },

  '@bp2': {
    padding: '1rem'
  }
})

export const NavbarContainer = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  maxWidth: '1400px',

  img: {
    width: '180px',
    height: 'auto'
  }
})

export const LinksWrapper = styled('div', {
  display: 'flex',
  gap: '2.5rem',

  '@bp2': {
    display: 'none'
  }
})

export const NavLink = styled(Link, {
  fontWeight: '$semibold',
  fontSize: '$sm',
  color: '$black',
  textDecoration: 'none',
  position: 'relative',
  padding: '0.75rem 0',

  '&:hover': {
    '&::after': {
      content: '',
      width: '100%'
    }
  },

  '&::after': {
    content: '',
    width: 0,
    height: 3,
    backgroundColor: '$primary',
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'block',
    borderRadius: '$full',

    transition: '$slow'
  }
})
