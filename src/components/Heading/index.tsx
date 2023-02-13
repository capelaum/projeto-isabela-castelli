import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'
import { StyledHeading } from './styles'

export interface HeadingProps {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  asChild?: boolean
  color?: 'black' | 'white'
}

export function Heading({
  size,
  children,
  asChild,
  color = 'white'
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <StyledHeading size={size} as={Comp} color={color}>
      {children}
    </StyledHeading>
  )
}
