import { Services } from 'components/@constants'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  PinkGradient,
  ServiceItem,
  ServicesContainer,
  ServicesImageWrapper,
  ServicesList,
  ServicesWrapper
} from './styles'

export function SectionServices() {
  return (
    <ServicesWrapper>
      <Heading asChild size="md">
        <h1>
          A Terapia não é um local de julgamento, mas sim de aconchego,
          acolhimento e transformação.
        </h1>
      </Heading>

      <ServicesContainer>
        <ServicesImageWrapper>
          <Image
            src={Services}
            alt="Foto da Isabela Castelli sentada utilizando um notebook prata."
          />
        </ServicesImageWrapper>

        <ServicesList>
          <ServiceItem>
            <Heading asChild size="xs" color="pink">
              <h2>Terapia Cognitivo-Comportamental</h2>
            </Heading>

            <Text color="white" size="sm">
              Terapeuta cognitivas comportamentais.
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading asChild size="xs" color="pink">
              <h2>Avaliação Psicológica</h2>
            </Heading>

            <Text color="white" size="sm">
              Avaliações para procedimentos invasivos (cirurgias) e testagem
              para definição diagnóstico.
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading asChild size="xs" color="pink">
              <h2>Traumas Psicológicos</h2>
            </Heading>

            <Text color="white" size="sm">
              Foco nas experiências traumáticas.
            </Text>
          </ServiceItem>

          <ServiceItem>
            <Heading asChild size="xs" color="pink">
              <h2>Teste de Rorschach</h2>
            </Heading>

            <Text color="white" size="sm">
              Técnica de avaliação psicológica, comumente denominada de teste
              projetivo, ou mais recentemente de método de autoexpressão.
            </Text>
          </ServiceItem>
        </ServicesList>
      </ServicesContainer>

      <PinkGradient />
    </ServicesWrapper>
  )
}
