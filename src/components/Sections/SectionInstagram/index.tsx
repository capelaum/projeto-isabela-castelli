import { Profile } from 'components/@constants'
import { Heading } from 'components/Heading'
import Image from 'next/image'
import Script from 'next/script'
import { InstaProfileImageWrapper, InstaTitle, InstaWrapper } from './styles'

export function SectionInstagram() {
  return (
    <InstaWrapper>
      <InstaTitle
        href="https://www.instagram.com/psi.isabelacastelli"
        title="psi.isabelacastelli"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstaProfileImageWrapper>
          <Image
            src={Profile}
            alt="Imagem de perfil do instagram da Isabela Castelli."
          />
        </InstaProfileImageWrapper>

        <Heading asChild size="md">
          <h1>psi.isabelacastelli</h1>
        </Heading>
      </InstaTitle>

      <div data-mc-src="b53ac238-059d-406d-8a83-b959593432e0#instagram"></div>

      <Script
        src="https://cdn2.woxo.tech/a.js#613117f8ed78380016017a38"
        async
        data-usrc
        strategy="afterInteractive"
      ></Script>
    </InstaWrapper>
  )
}
