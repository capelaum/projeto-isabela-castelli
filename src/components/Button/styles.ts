import { styled } from 'styles/stitches.config'

export const StyledButton = styled('button', {
  textDecoration: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$xs',

  borderRadius: '$default',
  fontWeight: '$medium',

  transition: '$fast',
  // alignSelf: 'stretch',

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed'
  },

  variants: {
    color: {
      pink: {
        backgroundColor: '$primary',
        color: '$white',

        '&:not(:disabled):hover': {
          filter: 'brightness(0.9)'
        }
      }
    },

    size: {
      sm: {
        fontSize: '$xs',
        padding: '0.5rem 1rem',
        gap: '0.5rem'
      },
      md: {
        fontSize: '$sm',
        padding: '0.75rem 1rem'
      },
      lg: {
        fontSize: '$sm',
        padding: '0.75rem 1.75rem'
      },
      xl: {
        fontSize: '$sm',
        padding: '0.75rem 2.5rem'
      }
    },

    isFullWidth: {
      true: {
        width: '100%'
      }
    },

    isOnlyIcon: {
      true: {
        fontSize: '$lg',
        padding: '0.75rem !important'
      }
    },

    isLoading: {
      true: {
        pointerEvents: 'none',
        cursor: 'not-allowed'
      }
    }
  },

  defaultVariants: {
    size: 'md',
    color: 'pink'
  }
})
