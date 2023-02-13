import { Text, TextProps } from '..'
import { StyledLink } from './styles'

interface TextLinkProps extends TextProps {
  href: string
  title: string
  children: string
}

export function TextLink({ href, title, children, ...props }: TextLinkProps) {
  return (
    <Text {...props} asChild>
      <StyledLink href={href} title={title}>
        {children}
      </StyledLink>
    </Text>
  )
}
