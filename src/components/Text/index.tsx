import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { StyledText } from './styles'

export type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type TextWeights =
  | 'normal'
  | 'medium'
  | 'semibold'
  | 'bold'
  | 'extrabold'
  | 'black'

export interface TextProps {
  color?: 'black' | 'white' | 'gray'
  size?: TextSizes
  weight?: TextWeights
  children: ReactNode
  asChild?: boolean
}

export function Text({
  color = 'gray',
  size = 'md',
  weight = 'normal',
  asChild,
  children
}: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <StyledText color={color} size={size} as={Comp} weight={weight}>
      {children}
    </StyledText>
  )
}
