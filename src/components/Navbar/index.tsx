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
    <header>
      <Wrapper isScrolled={offsetY > 0}>
        <Container>
          <Link href="#inicio" title="Início" scroll={false}>
            <Image
              src={Logo}
              alt="Logotipo da psicóloga Isabela Castelli, tendo escrito o nome Isabela Castelli e a frase Psicologa Clínica e Hospitalar em rosa claro."
            />
          </Link>

          <LinksWrapper>
            <NavLink href="#sobre" title="Sobre" scroll={false}>
              Sobre
            </NavLink>

            <NavLink href="#consultorio" title="Consultório" scroll={false}>
              Consultório
            </NavLink>

            <NavLink href="#servicos" title="Serviços" scroll={false}>
              Serviços
            </NavLink>

            <NavLink href="#depoimentos" title="Depoimentos" scroll={false}>
              Depoimentos
            </NavLink>
          </LinksWrapper>
        </Container>
      </Wrapper>
    </header>
  )
}
