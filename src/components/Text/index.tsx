import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, ReactNode } from 'react'
import { StyledText } from './styles'

export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type TextWeights =
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  color?: 'black' | 'white' | 'gray1' | 'gray3'
  size?: TextSizes
  weight?: TextWeights
  children: ReactNode
  asChild?: boolean
}

export function Text({
  color = 'gray1',
  size = 'md',
  weight = 'normal',
  asChild,
  children,
  ...props
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <StyledText color={color} size={size} as={Comp} weight={weight} {...props}>
      {children}
    </StyledText>
  )
}
