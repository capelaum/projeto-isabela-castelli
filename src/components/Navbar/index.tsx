import { Logo } from 'components/@constants'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavbarDropdownMenu } from './NavbarDropdownMenu'
import { LinksWrapper, NavbarContainer, NavbarWrapper, NavLink } from './styles'

export function Navbar() {
  const [offsetY, setOffsetY] = useState(0)

  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavbarWrapper isScrolled={offsetY > 0}>
      <NavbarContainer>
        <Link href="#inicio" title="Início" scroll={false}>
          <Image
            priority
            src={Logo}
            alt="Logotipo da psicóloga Isabela Castelli, tendo escrito o nome Isabela Castelli e a frase Psicologa Clínica e Hospitalar em rosa claro."
          />
        </Link>

        <LinksWrapper>
          <NavLink href="#sobre" scroll={false}>
            Sobre
          </NavLink>

          <NavLink href="#consultorio" scroll={false}>
            Consultório
          </NavLink>

          <NavLink href="#servicos" scroll={false}>
            Serviços
          </NavLink>

          <NavLink href="#depoimentos" scroll={false}>
            Depoimentos
          </NavLink>
        </LinksWrapper>

        <NavbarDropdownMenu />
      </NavbarContainer>
    </NavbarWrapper>
  )
}
