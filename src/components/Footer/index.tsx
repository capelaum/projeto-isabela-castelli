import {
  DoctoraliaWhite,
  FooterLogo,
  InstagramWhite
} from 'components/@constants'
import { Text } from 'components/Text'
import { TextLink } from 'components/Text/TextLink'
import Image from 'next/image'
import {
  FooterContainer,
  FooterContent,
  FooterEnd,
  FooterImageWrapper,
  FooterLeft,
  FooterNav,
  FooterNavLink,
  FooterRight,
  FooterSocialLink,
  FooterSocialLinks,
  FooterWrapper
} from './styles'

export function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterContent>
          <FooterLeft>
            <FooterNav>
              <FooterNavLink href="#inicio" scroll={false}>
                Início
              </FooterNavLink>

              <FooterNavLink href="#sobre" scroll={false}>
                Sobre
              </FooterNavLink>

              <FooterNavLink href="#consultorio" scroll={false}>
                Consultório
              </FooterNavLink>

              <FooterNavLink href="#servicos" scroll={false}>
                Serviços
              </FooterNavLink>

              <FooterNavLink href="#depoimentos" scroll={false}>
                Depoimentos
              </FooterNavLink>
            </FooterNav>

            <FooterSocialLinks>
              <FooterSocialLink
                href="https://www.instagram.com/psi.isabelacastelli"
                title="psi.isabelacastelli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={InstagramWhite} alt="Logo do Instagram." />
              </FooterSocialLink>

              <FooterSocialLink
                href="https://www.doctoralia.com.br/isabela-castelli/psicologo/brasilia"
                title="Doctoralia da Isabela Castelli"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={DoctoraliaWhite} alt="Logo do Instagram." />
              </FooterSocialLink>
            </FooterSocialLinks>
          </FooterLeft>

          <FooterRight>
            <FooterImageWrapper>
              <Image
                src={FooterLogo}
                alt="Logo em rosa escrito Isabela Castelli em letra cursiva e um cerebro rosa claro ao lado."
              />
            </FooterImageWrapper>

            <Text size="xs" color="gray1">
              Psicóloga Isabela Castelli - Terapeuta Cognitivo Comportamental -
              Psicopatologia - Psicodiagnóstico
            </Text>

            <Text size="xs" color="gray1">
              <strong>Endereço: </strong>
              Setor Médico Hospitalar Norte Edifício de Clínicas Sala 507 - Asa
              Norte, Brasília - DF, 70710-904
            </Text>

            <Text size="xs" color="gray1">
              <strong>Telefone: </strong>
              +55 (61) 98166-8336
            </Text>
          </FooterRight>
        </FooterContent>

        <FooterEnd>
          <Text size="xs">Todos os direitos reservados.</Text>

          <Text size="xs">
            Desenvolvido com 🤍 por{' '}
            <TextLink
              size="xs"
              href="https://github.com/capelaum"
              title="Github de Luís V. Capelletto."
              target="_blank"
            >
              Luís V. Capelletto.
            </TextLink>
          </Text>
        </FooterEnd>
      </FooterContainer>
    </FooterWrapper>
  )
}
