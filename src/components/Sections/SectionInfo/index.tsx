import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { InfoContent, InfotItem, InfotItems, InfoWrapper } from './styles'

export function SectionInfo() {
  return (
    <InfoWrapper>
      <InfoContent>
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
