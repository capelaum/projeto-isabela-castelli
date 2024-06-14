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
                Sou psicóloga, inscrita no CRP {'01/18851'}. Doutora e mestre em
                Psicologia pela Universidade de Brasília.
              </p>
            </Text>

            <Text asChild>
              <p>
                Pós-graduada em Terapia Cognitivo Comportamental pelo Instituto
                Brasileiro de Neuropsicologia e Ciências Cognitivas.
                Pós-graduanda em Neuropsicologia pela Faculdade de Medicina da
                Universidade de São Paulo. Pós-doutoranda pela Pontifícia
                Universidade Católica de Goiás.
              </p>
            </Text>

            <Text asChild>
              <p>
                Realizo avaliações e testagem para psicodiagnóstico e preparo
                para procedimentos invasivos. Possuo experiência com pacientes
                em crise, terapia de adultos, casais e crianças em idade verbal.
              </p>
            </Text>
          </AboutDescription>
        </AboutContent>
      </AboutWrapper>
    </SectionContainer>
  )
}
