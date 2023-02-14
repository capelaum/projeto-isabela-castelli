import { Hero } from 'components/@constants'
import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  HeroContainer,
  HeroHeadingWrapper,
  HeroImageMobileWrapper,
  HeroImageWrapper,
  HeroTextWrapper,
  HeroWrapper
} from './styles'

export function SectionHero() {
  return (
    <HeroWrapper>
      <HeroContainer>
        <HeroTextWrapper>
          <HeroHeadingWrapper>
            <Text weight="semibold" color="black" size="sm">
              Psicopatologia e Psicodiagnóstico
            </Text>

            <Heading color="black" size="xl" asChild>
              <h1>A sua saúde mental é prioridade!</h1>
            </Heading>
          </HeroHeadingWrapper>

          <Text asChild color="black" size="lg">
            <p>
              Um acompanhamento psicológico bem feito vai ajudá-lo a compreender
              os seus sentimentos, seu modo de pensar e de agir.
            </p>
          </Text>

          <ButtonLink href="#" size="xl" title="Agendar Consulta">
            Agendar Consulta
          </ButtonLink>
        </HeroTextWrapper>
      </HeroContainer>

      <HeroImageMobileWrapper>
        <Image
          src={Hero}
          alt="Foto profissional da psicóloga Isabela castelli"
        />
      </HeroImageMobileWrapper>

      <HeroImageWrapper>
        <Image
          priority
          src={Hero}
          alt="Foto profissional da psicóloga Isabela castelli"
        />
      </HeroImageWrapper>
    </HeroWrapper>
  )
}
