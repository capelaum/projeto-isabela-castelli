import { StyledPinkGradient } from './styles'

export function PinkGradient() {
  return (
    <StyledPinkGradient
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      viewport={{ once: true }}
    />
  )
}
