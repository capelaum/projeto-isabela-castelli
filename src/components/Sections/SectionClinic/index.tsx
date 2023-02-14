import { Clinic } from 'components/@constants'
import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import Image from 'next/image'
import { ChatDots } from 'phosphor-react'
import { ClinicContent, ClinicImageWrapper, ClinicWrapper } from './styles'

export function SectionClinic() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <ClinicWrapper>
      <ClinicContent>
        <Heading size="lg" asChild>
          <h1>O que esperar de seu atendimento</h1>
        </Heading>

        <Text asChild>
          <p>
            Atenção personalizada, através do uso de vários métodos de
            psicoterapia e tratamentos associados, as sessões de terapia são
            elaboradas com intuito de examinar em profundidade os problemas
            pessoais e fornecer aos pacientes ferramentas eficazes para uma boa
            perspectiva de vida.
          </p>
        </Text>

        <ButtonLink
          href={`https://wa.me/5561981668336?text=${message}`}
          title="Agendar Consulta"
          target="_blank"
          size="lg"
        >
          <ChatDots size={20} weight="bold" />
          Agendar
        </ButtonLink>
      </ClinicContent>

      <ClinicImageWrapper>
        <Image
          src={Clinic}
          alt="Foto da Isabela Castelli sentada, segurando uma caneta e um caderno em uma mesa à sua frente."
        />
      </ClinicImageWrapper>
    </ClinicWrapper>
  )
}
