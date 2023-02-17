import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { InfoContent, InfotItem, InfotItems, InfoWrapper } from './styles'

export function SectionInfo() {
  return (
    <InfoWrapper>
      <InfoContent
        initial={{ opacity: 0, x: '-100%' }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
        viewport={{ once: true }}
      >
        <Heading size="sm">
          Atendimentos online <br /> e presencial:
        </Heading>

        <InfotItems>
          <InfotItem>
            <Heading size="md">Consulta Psicológica</Heading>
            <Text color="gray1">Presencial em consultório</Text>
          </InfotItem>

          <InfotItem>
            <Heading size="md">Telemedicina</Heading>
            <Text color="gray1">Atendimento online</Text>
          </InfotItem>
        </InfotItems>
      </InfoContent>
    </InfoWrapper>
  )
}
