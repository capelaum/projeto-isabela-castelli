import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { PinkGradient } from 'components/PinkGradient'
import { Text } from 'components/Text'
import { WhatsappLogo } from 'phosphor-react'
import { ClinicSlider } from './ClinicSlider'
import { ClinicContainer, ClinicContent, ClinicWrapper } from './styles'

export function SectionClinic() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <ClinicWrapper id="consultorio">
      <ClinicContainer>
        <ClinicContent
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          viewport={{ once: true }}
        >
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
      </ClinicContainer>
      <PinkGradient />
    </ClinicWrapper>
  )
}
