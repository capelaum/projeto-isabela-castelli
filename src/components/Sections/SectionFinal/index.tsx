import { Profile } from 'components/@constants'
import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { SectionContainer } from 'components/SectionContainer'
import { Text } from 'components/Text'
import Image from 'next/image'
import { WhatsappLogo } from 'phosphor-react'
import { FinalContent, FinalImageWrapper, FinalWrapper } from './styles'

export function SectionFinal() {
  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <SectionContainer>
      <FinalWrapper>
        <FinalContent
          initial={{ opacity: 0, x: '100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.75 }}
          viewport={{ once: true }}
        >
          <Heading size="lg" asChild>
            <h1>
              A vida pode ser difícil e, às vezes, a ajuda de um Psicoterapeuta
              profissional pode ser muito efetiva.
            </h1>
          </Heading>

          <Text asChild>
            <p>
              Entre em contato para mais informações, ficarei feliz em te
              atender.
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

        <FinalImageWrapper
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Image
            src={Profile}
            alt="Foto de perfil da Psicóloga Isabela Castelli."
          />
        </FinalImageWrapper>
      </FinalWrapper>
    </SectionContainer>
  )
}
