import { Navbar } from 'components/Navbar'
import { SectionHero } from 'components/Sections/SectionHero'
import { SectionInfo } from 'components/Sections/SectionInfo'
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
        </HomeContainer>
      </HomeWrapper>
    </>
  )
}
