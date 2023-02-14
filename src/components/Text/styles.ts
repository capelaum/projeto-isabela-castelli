import { Slot } from '@radix-ui/react-slot'
import { styled } from 'styles/stitches.config'

export const StyledText = styled(Slot, {
  variants: {
    color: {
      black: {
        color: '$black'
      },
      white: {
        color: '$white'
      },
      gray3: {
        color: '$gray3'
      },
      gray1: {
        color: '$gray1'
      }
    },

    size: {
      xs: {
        fontSize: '$xs'
      },
      sm: {
        fontSize: '$sm'
      },
      md: {
        fontSize: '$md'
      },
      lg: {
        fontSize: '$lg'
      },
      xl: {
        fontSize: '$xl'
      },
      '2xl': {
        fontSize: '$2xl'
      }
    },

    weight: {
      normal: {
        fontWeight: '$normal'
      },
      medium: {
        fontWeight: '$medium'
      },
      semibold: {
        fontWeight: '$semibold'
      },
      bold: {
        fontWeight: '$bold'
      },
      extrabold: {
        fontWeight: '$extrabold'
      },
      black: {
        fontWeight: '$black'
      }
    }
  },

  defaultVariants: {
    size: 'sm',
    color: 'gray1',
    weight: 'normal'
  }
})
