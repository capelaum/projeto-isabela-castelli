import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { InfotItem, InfoWrapper } from './styles'

export function SectionInfo() {
  return (
    <InfoWrapper>
      <Heading size="sm">Atendimentos online e Presencial:</Heading>

      <InfotItem>
        <Heading size="md">Consulta Psicologia</Heading>
        <Text color="gray1">Presencial em consultório</Text>
      </InfotItem>

      <InfotItem>
        <Heading size="md">Telemedicina</Heading>
        <Text color="gray1">Atendimento online</Text>
      </InfotItem>
    </InfoWrapper>
  )
}
