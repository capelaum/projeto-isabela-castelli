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
        <AboutImageWrapper
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={About}
            alt="Foto da Isabela Castelli sentada, segurando uma caneta e um caderno em uma mesa à sua frente."
          />
        </AboutImageWrapper>

        <AboutContent
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" asChild>
            <h1>Sobre mim</h1>
          </Heading>

          <AboutDescription>
            <Text asChild>
              <p>
                Sou Psicóloga, possuo o CRP 01/18851. Doutoranda em Psicologia
                pela Universidade de Brasília. Pós-Graduanda em Terapia
                Cognitivo Comportamental pelo Instituto Brasileiro de
                Neuropsicologia e Ciências Cognitivas.
              </p>
            </Text>

            <Text asChild>
              <p>
                Realizo avaliações para procedimentos invasivos (cirurgias) e
                testagem para definição diagnóstica. Experiência com terapia de
                adultos, casais e crianças em idade verbal.
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
