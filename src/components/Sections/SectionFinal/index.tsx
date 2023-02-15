import { Profile } from 'components/@constants'
import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import Image from 'next/image'
import { WhatsappLogo } from 'phosphor-react'
import { FinalContent, FinalImageWrapper, FinalWrapper } from './styles'

export function SectionFinal() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <FinalWrapper>
      <FinalContent>
        <Heading size="lg" asChild>
          <h1>
            A vida pode ser difícil e, às vezes, a ajuda de um Psicoterapeuta
            profissional pode ser muito efetiva.
          </h1>
        </Heading>

        <Text asChild>
          <p>
            Entre em contato para mais informações, ficarei feliz em te atender.
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
      </FinalContent>

      <FinalImageWrapper>
        <Image
          src={Profile}
          alt="Foto de perfil da Psicóloga Isabela Castelli."
        />
      </FinalImageWrapper>
    </FinalWrapper>
  )
}
