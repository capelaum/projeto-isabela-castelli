import { Logo } from 'components/@constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Container, LinksWrapper, NavLink, Wrapper } from './styles'

export function Navbar() {
  const [offsetY, setOffsetY] = useState(0)
  // console.log('💥 ~ offsetY', offsetY)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Wrapper isScrolled={offsetY > 0}>
      <Container>
        <Link href="#" title="Início" passHref>
          <Image
            src={Logo}
            alt="Logotipo da psicóloga Isabela Castelli, tendo escrito o nome Isabela Castelli e a frase Psicologa Clínica e Hospitalar em rosa claro."
          />
        </Link>

        <LinksWrapper>
          <NavLink href="#" title="Sobre">
            Sobre
          </NavLink>

          <NavLink href="#" title="Serviços">
            Serviços
          </NavLink>

          <NavLink href="#" title="Consultório">
            Consultório
          </NavLink>

          <NavLink href="#" title="Depoimentos">
            Depoimentos
          </NavLink>
        </LinksWrapper>
      </Container>
    </Wrapper>
  )
}
