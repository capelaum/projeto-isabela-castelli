import { Text, TextProps } from '..'
import { StyledLink } from './styles'

interface TextLinkProps extends TextProps {
  href: string
  title: string
  children: string
  target?: '_blank'
}

export function TextLink({
  href,
  title,
  children,
  target,
  ...props
}: TextLinkProps) {
  return (
    <Text {...props} asChild>
      <StyledLink
        target={target}
        href={href}
        title={title}
        rel={target ? 'noreferrer noopener' : null}
      >
        {children}
      </StyledLink>
    </Text>
  )
}
