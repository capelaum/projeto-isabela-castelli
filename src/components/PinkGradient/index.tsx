import { StyledPinkGradient } from './styles'

export function PinkGradient() {
  return (
    <StyledPinkGradient
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: 'min(40%, 600px)' }}
      transition={{ delay: 0.5, duration: 1 }}
      viewport={{ once: true }}
    />
  )
}
