import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { PinkGradient } from 'components/PinkGradient'
import { Text } from 'components/Text'
import { WhatsappLogo } from 'phosphor-react'
import { ClinicSlider } from './ClinicSlider'
import {
  ClinicContainer,
  ClinicContent,
  ClinicDescription,
  ClinicWrapper
} from './styles'

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

          <ClinicDescription>
            <Text asChild>
              <p>
                Atenção personalizada através do uso de métodos e técnicas da
                abordagem cognitiva comportamental.
              </p>
            </Text>

            <Text asChild>
              <p>
                Cada sessão de terapia é elaborada exclusivamente para a demanda
                de cada paciente com o objetivo de compreender, em profundidade,
                os problemas apresentados e fornecer ao paciente ferramentas
                baseadas em evidências científicas para melhora da perspectiva e
                qualidade de vida.
              </p>
            </Text>

            <Text asChild>
              <p>
                Trabalhamos apenas com atendimento particular. Não atendemos
                convênios e planos de saúde. Mas não se preocupe. Se você possui
                algum convênio ou plano de saúde, pode realizar seu agendamento
                na modalidade particular e nós iremos te orientar e auxiliar,
                para que você solicite o reembolso junto ao convênio e peça,
                ainda, dedução no Imposto de Renda.
              </p>
            </Text>
          </ClinicDescription>

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
