import { Navbar } from 'components/Navbar'
import { SectionAbout } from 'components/Sections/SectionAbout'
import { SectionClinic } from 'components/Sections/SectionClinic'
import { SectionHero } from 'components/Sections/SectionHero'
import { SectionInfo } from 'components/Sections/SectionInfo'
import { SectionServices } from 'components/Sections/SectionServices'
import Head from 'next/head'
import { HomeContainer, HomeWrapper } from 'styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Psicóloga Isabela Castelli</title>
      </Head>

      <Navbar />
      <SectionHero />
      <HomeWrapper>
        <HomeContainer>
          <SectionInfo />
          <SectionAbout />
          <SectionClinic />
          <SectionServices />
        </HomeContainer>
      </HomeWrapper>
    </>
  )
}
