import { Hero } from 'components/@constants'
import Image from 'next/image'
import { HeroHeading } from './HeroHeading'
import { HeroSocial } from './HeroSocial'
import {
  HeroContainer,
  HeroContentWrapper,
  HeroImageMobileWrapper,
  HeroImageWrapper,
  HeroWrapper
} from './styles'

export function SectionHero() {
  return (
    <HeroWrapper id="inicio">
      <HeroContainer>
        <HeroContentWrapper>
          <HeroHeading />
          <HeroSocial />
        </HeroContentWrapper>
      </HeroContainer>

      <HeroImageMobileWrapper>
        <Image
          priority
          src={Hero}
          alt="Foto profissional da psicóloga Isabela castelli sentada e com as mãos em um notebook cinza."
        />
      </HeroImageMobileWrapper>

      <HeroImageWrapper>
        <Image
          priority
          src={Hero}
          alt="Foto profissional da psicóloga Isabela castelli sentada e com as mãos em um notebook cinza."
        />
      </HeroImageWrapper>
    </HeroWrapper>
  )
}
