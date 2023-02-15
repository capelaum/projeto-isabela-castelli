import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import { Text } from 'components/Text'
import { WhatsappLogo } from 'phosphor-react'
import { ClinicSlider } from './ClinicSlider'
import { ClinicContent, ClinicWrapper } from './styles'

export function SectionClinic() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <SectionContainer>
      <ClinicWrapper id="consultorio">
        <ClinicContent>
          <Heading size="lg" asChild>
            <h1>
              O que esperar <br /> de seu atendimento
            </h1>
          </Heading>

          <Text asChild>
            <p>
              Atenção personalizada, através do uso de vários métodos de
              psicoterapia e tratamentos associados, as sessões de terapia são
              elaboradas com intuito de examinar em profundidade os problemas
              pessoais e fornecer aos pacientes ferramentas eficazes para uma
              boa perspectiva de vida.
            </p>
          </Text>

          <ButtonLink
            href={`https://wa.me/5561981668336?text=${message}`}
            title="Agendar consulta!"
            target="_blank"
            size="lg"
          >
            <WhatsappLogo size={24} weight="regular" />
            Agendar Consulta
          </ButtonLink>
        </ClinicContent>

        <ClinicSlider />
      </ClinicWrapper>
    </SectionContainer>
  )
}
