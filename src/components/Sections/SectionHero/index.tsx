import { Hero, Logo } from 'components/@constants'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  HeroDescription,
  HeroHeadingWrapper,
  HeroImageWrapper,
  HeroTextWrapper,
  HeroWrapper
} from './styles'

export function SectionHero() {
  return (
    <HeroWrapper>
      <HeroTextWrapper>
        <Image
          src={Logo}
          alt="Logotipo da psicóloga Isabela Castelli, tendo escrito o nome Isabela Castelli e a frase Psicologa Clínica e Hospitalar em rosa claro."
        />

        <HeroHeadingWrapper>
          <Text weight="bold" color="black">
            Psicopatologia e Psicodiagnóstico
          </Text>

          <Heading color="black" size="xl" asChild>
            <h1>A sua saúde mental é prioridade!</h1>
          </Heading>
        </HeroHeadingWrapper>

        <HeroDescription asChild color="black" size="lg">
          <p>
            Um acompanhamento psicológico bem feito vai ajudá-lo a compreender
            os seus sentimentos, seu modo de pensar e de agir.
          </p>
        </HeroDescription>
      </HeroTextWrapper>

      <HeroImageWrapper>
        <Image
          src={Hero}
          alt="Foto profissional da psicóloga Isabela castelli"
        />
      </HeroImageWrapper>
    </HeroWrapper>
  )
}
