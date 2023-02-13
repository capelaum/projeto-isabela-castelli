import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { StyledButton } from './styles'

export type ButtonColors = 'pink'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  isLoading?: boolean
  isFullWidth?: boolean
  isOnlyIcon?: boolean
  color?: ButtonColors
  asAnchor?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: 'noreferrer noopener'
}

const ButtonLoader = () => {
  return (
    <ThreeDots
      height="16"
      width="24"
      radius="8"
      color="#FFF"
      ariaLabel="Carregando..."
      wrapperStyle={{}}
      visible={true}
    />
  )
}

export const Button = forwardRef(
  ({ size, children, color, asAnchor, ...props }: ButtonProps, ref) => {
    const Comp = asAnchor ? 'a' : 'button'

    return (
      <StyledButton size={size} {...props} color={color} as={Comp}>
        {!props.isLoading && children}

        {props.isLoading && !props.isOnlyIcon && children}
        {props.isLoading && <ButtonLoader />}
      </StyledButton>
    )
  }
)

Button.displayName = 'Button'
