import Link from 'next/link'
import { styled } from 'styles/stitches.config'

export const Wrapper = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  width: '100%',
  padding: '1rem 1.5rem',

  background: '$white',

  variants: {
    isScrolled: {
      true: {},

      false: {}
    }
  },

  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 99,

  '@bp2': {
    padding: '1rem'
  }
})

export const Container = styled('nav', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  maxWidth: '1400px',

  img: {
    width: '180px',
    height: 'auto'
  },

  '@bp2': {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export const LinksWrapper = styled('div', {
  display: 'flex',
  gap: '2.5rem',
  flexWrap: 'wrap'
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
