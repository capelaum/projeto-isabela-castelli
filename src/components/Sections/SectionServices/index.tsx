import { Services } from 'components/@constants'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  ServiceItem,
  ServicesContainer,
  ServicesImageWrapper,
  ServicesList,
  ServicesWrapper
} from './styles'

export function SectionServices() {
  return (
    <SectionContainer>
      <ServicesWrapper
        id="servicos"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
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

              <Text color="white" size="sm" asChild>
                <p>Terapeuta cognitivas comportamentais.</p>
              </Text>
            </ServiceItem>

            <ServiceItem>
              <Heading asChild size="xs" color="pink">
                <h2>Avaliação Psicológica</h2>
              </Heading>

              <Text color="white" size="sm" asChild>
                <p>
                  Avaliações para procedimentos invasivos (cirurgias) e testagem
                  para definição diagnóstico.
                </p>
              </Text>
            </ServiceItem>

            <ServiceItem>
              <Heading asChild size="xs" color="pink">
                <h2>Traumas Psicológicos</h2>
              </Heading>

              <Text color="white" size="sm" asChild>
                <p>Foco nas experiências traumáticas.</p>
              </Text>
            </ServiceItem>

            <ServiceItem>
              <Heading asChild size="xs" color="pink">
                <h2>Teste de Rorschach</h2>
              </Heading>

              <Text color="white" size="sm" asChild>
                <p>
                  Técnica de avaliação psicológica, comumente denominada de
                  teste projetivo, ou mais recentemente de método de
                  autoexpressão.
                </p>
              </Text>
            </ServiceItem>
          </ServicesList>
        </ServicesContainer>
      </ServicesWrapper>
    </SectionContainer>
  )
}
