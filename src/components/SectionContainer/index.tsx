import { ReactNode } from 'react'
import { StyledSection } from './styles'

interface SectionContainerProps {
  children: ReactNode
}

export function SectionContainer({ children }: SectionContainerProps) {
  return <StyledSection>{children}</StyledSection>
}
