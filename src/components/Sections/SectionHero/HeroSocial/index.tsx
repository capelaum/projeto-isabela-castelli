import { Doctoralia, Instagram } from 'components/@constants'
import { Text } from 'components/Text'
import Image from 'next/image'
import {
  Divider,
  HeroSocialLink,
  HeroSocialLinks,
  HeroSocialWrapper
} from './styles'

export function HeroSocial() {
  return (
    <HeroSocialWrapper>
      <Divider />

      <Text size="sm" color="gray3" weight="medium">
        Conheça minhas redes sociais:
      </Text>

      <HeroSocialLinks>
        <HeroSocialLink
          href="https://www.instagram.com/psi.isabelacastelli"
          title="psi.isabelacastelli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Instagram} alt="Logo do Instagram." />

          <Text size="sm" color="black" weight="medium">
            psi.isabelacastelli
          </Text>
        </HeroSocialLink>

        <HeroSocialLink
          href="https://www.doctoralia.com.br/isabela-castelli/psicologo/brasilia"
          title="Doctoralia da Isabela Castelli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={Doctoralia} alt="Logo do Instagram." />

          <Text size="sm" color="black" weight="medium">
            doctoralia isabelacastelli
          </Text>
        </HeroSocialLink>
      </HeroSocialLinks>
    </HeroSocialWrapper>
  )
}
