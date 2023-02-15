import { Footer } from 'components/Footer'
import { Navbar } from 'components/Navbar'
import { SectionAbout } from 'components/Sections/SectionAbout'
import { SectionClinic } from 'components/Sections/SectionClinic'
import { SectionFinal } from 'components/Sections/SectionFinal'
import { SectionHero } from 'components/Sections/SectionHero'
import { SectionInfo } from 'components/Sections/SectionInfo'
import { SectionInstagram } from 'components/Sections/SectionInstagram'
import { SectionServices } from 'components/Sections/SectionServices'
import { SectionTestimonials } from 'components/Sections/SectionTestimonials'
import 'keen-slider/keen-slider.min.css'
import Head from 'next/head'
import { HomeMain } from 'styles/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>Psicóloga Isabela Castelli</title>
      </Head>

      <Navbar />

      <HomeMain>
        <SectionHero />
        <SectionInfo />
        <SectionAbout />
        <SectionClinic />
        <SectionServices />
        <SectionInstagram />
        <SectionTestimonials />
        <SectionFinal />
      </HomeMain>

      <Footer />
    </>
  )
}
