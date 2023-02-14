import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { HeroHeadingWrapper } from './styles'

export function HeroHeading() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <HeroHeadingWrapper>
      <Text weight="semibold" color="black" size="sm" asChild>
        <h2>Psicopatologia e Psicodiagnóstico</h2>
      </Text>

      <Heading color="black" size="xl" asChild>
        <h1>
          A sua saúde mental <strong> é prioridade!</strong>
        </h1>
      </Heading>

      <Text color="black" size="lg" asChild>
        <h3>
          Um acompanhamento psicológico bem feito vai ajudá-lo a compreender os
          seus sentimentos, seu modo de pensar e de agir.
        </h3>
      </Text>

      <ButtonLink
        size="xl"
        href={`https://wa.me/5561981668336?text=${message}`}
        title="Agendar Consulta"
        target="_blank"
      >
        Agendar Consulta
      </ButtonLink>
    </HeroHeadingWrapper>
  )
}
