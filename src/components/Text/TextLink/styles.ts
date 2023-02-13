import Link from 'next/link'
import { styled } from 'styles/stitches.config'

export const StyledLink = styled(Link, {
  textDecoration: 'none',
  transition: '$fast',

  '&:hover': {
    color: '$primary'
  }
})
