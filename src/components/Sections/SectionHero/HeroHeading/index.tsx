import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { HeroHeadingWrapper } from './styles'

export function HeroHeading() {
  return (
    <HeroHeadingWrapper>
      <Text weight="semibold" color="black" size="sm" asChild>
        <h2>Psicopatologia e Psicodiagnóstico</h2>
      </Text>

      <Heading color="black" size="xl" asChild>
        <h1>A sua saúde mental é prioridade!</h1>
      </Heading>

      <Text color="black" size="lg" asChild>
        <h3>
          Um acompanhamento psicológico bem feito vai ajudá-lo a compreender os
          seus sentimentos, seu modo de pensar e de agir.
        </h3>
      </Text>

      <ButtonLink href="#" size="xl" title="Agendar Consulta">
        Agendar Consulta
      </ButtonLink>
    </HeroHeadingWrapper>
  )
}
