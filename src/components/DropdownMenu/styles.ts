import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { keyframes, styled } from 'styles/stitches.config'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' }
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' }
})

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  minWidth: 180,
  maxWidth: 320,
  backgroundColor: '$white',
  borderRadius: '$default',
  padding: '0.25rem',
  boxShadow: '$card',
  zIndex: 5,

  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',

  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade }
  },

  a: {
    textDecoration: 'none'
  },

  variants: {
    type: {
      navbar: {
        marginRight: '1.25rem',
        fontSize: '$sm',
        display: 'none',

        '@bp2': {
          display: 'block'
        }
      }
    }
  },

  '@bp2': {
    marginRight: 0,
    marginLeft: 0
  }
})

export const DropdownMenuArrow = styled(DropdownMenu.Arrow, {
  fill: 'rgba(235, 199, 197, 1)',

  variants: {
    type: {
      navbar: {
        fill: 'rgba(235, 199, 197, 1)',
        marginRight: '1.25rem'
      }
    }
  },

  '@bp2': {
    marginRight: 0,
    marginLeft: 0
  }
})

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  all: 'unset',
  position: 'relative',
  userSelect: 'none',

  fontWeight: '$medium',
  fontSize: '$md',

  lineHeight: '$shorter',

  backgroundColor: '$white',

  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',

  padding: '1rem 0.5rem',

  '&[data-disabled]': {
    color: '$gray1',
    pointerEvents: 'none'
  },

  variants: {
    type: {
      navbar: {
        color: '$gray3',

        '&[data-highlighted]': {
          backgroundColor: '$secondary',
          color: '$white'
        }
      }
    }
  },

  defaultVariants: {
    type: 'navbar'
  },

  '&:hover': {
    cursor: 'pointer'
  }
})

export const LeftSlot = styled('div', {
  paddingRight: '0.5rem',
  color: '$secondary',
  '[data-highlighted] > &': { color: 'white' },
  '[data-disabled] &': { color: '$gray1' }
})

export const DropdownMenuSeparator = styled(DropdownMenu.Separator, {
  height: 1,
  backgroundColor: '$gray2',
  margin: 5
})

export const TriggerButton = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: '$default',

  '&:hover': {
    cursor: 'pointer'
  },

  variants: {
    type: {
      navbar: {
        background: 'transparent',
        color: '$secondary',
        borderRadius: '$full',
        display: 'none',
        width: 56,
        height: 56,

        '&:hover': {
          backgroundColor: 'rgba(235, 199, 197, .3)'
        },

        '&[data-state="open"]': {
          backgroundColor: 'rgba(235, 199, 197, .3)'
        },

        '@bp2': {
          display: 'block'
        }
      }
    }
  }
})
