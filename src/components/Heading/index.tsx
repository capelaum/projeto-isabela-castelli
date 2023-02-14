import { Slot } from '@radix-ui/react-slot'
import { HTMLAttributes, ReactNode } from 'react'
import { StyledHeading } from './styles'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  asChild?: boolean
  color?: 'black' | 'white' | 'pink'
}

export function Heading({
  size,
  children,
  asChild,
  color = 'white',
  ...props
}: HeadingProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <StyledHeading size={size} as={Comp} color={color} {...props}>
      {children}
    </StyledHeading>
  )
}
