import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles/stitches.config'

export const StyledHeading = styled(Slot, {
  fontWeight: '$bold',

  fontFamily: '$grotesk',

  variants: {
    color: {
      black: {
        color: '$black'
      },
      white: {
        color: '$white'
      },
      pink: {
        color: '$primary'
      }
    },

    size: {
      '2xs': {
        fontSize: '$sm'
      },
      xs: {
        fontSize: '$lg'
      },
      sm: {
        fontSize: '$xl'
      },
      md: {
        fontSize: '$2xl'
      },
      lg: {
        fontSize: '2.5rem'
      },
      xl: {
        fontSize: '4rem'
      }
    }
  },

  defaultVariants: {
    color: 'white',
    size: 'md'
  }
})
