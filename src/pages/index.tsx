import { Navbar } from 'components/Navbar'
import { SectionHero } from 'components/Sections/SectionHero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Psicóloga Isabela Castelli</title>
      </Head>

      <Navbar />
      <SectionHero />
    </>
  )
}
