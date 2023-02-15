import { About } from 'components/@constants'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  AboutContent,
  AboutDescription,
  AboutImageWrapper,
  AboutWrapper
} from './styles'

export function SectionAbout() {
  return (
    <SectionContainer>
      <AboutWrapper id="sobre">
        <AboutImageWrapper>
          <Image
            src={About}
            alt="Foto da Isabela Castelli sentada, segurando uma caneta e um caderno em uma mesa à sua frente."
          />
        </AboutImageWrapper>

        <AboutContent>
          <Heading size="lg" asChild>
            <h1>Sobre mim</h1>
          </Heading>

          <AboutDescription>
            <Text asChild>
              <p>
                Sou Psicóloga, possuo o CRP 01/18851 Doutoranda em /Psicologia
                pela Universidade de Brasília. Pós-Graduanda em Terapia
                Cognitivo Comportamental pelo Instituto Brasileiro de
                Neuropsicologia e Ciências Cognitivas.
              </p>
            </Text>

            <Text asChild>
              <p>
                Pós-Graduanda em Avaliação Psicológica pelo IPOG. Realiza
                avaliações para procedimentos invasivos (cirurgias) e testagem
                para definição diagnóstica. Experiência com terapia de adultos,
                casais e crianças em idade verbal.
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
