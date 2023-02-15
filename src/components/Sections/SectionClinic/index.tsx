import { Clinic } from 'components/@constants'
import { ButtonLink } from 'components/Button/ButtonLink'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { WhatsappLogo } from 'phosphor-react'
import { useState } from 'react'
import { ClinicContent, ClinicImageWrapper, ClinicWrapper } from './styles'

export function SectionClinic() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 24
    },
    loop: true,
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 24
        }
      }
    },

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  const message = encodeURIComponent(
    'Olá Isabela, gostaria de marcar uma consulta.'
  )

  return (
    <ClinicWrapper>
      <ClinicContent>
        <Heading size="lg" asChild>
          <h1>
            O que esperar <br /> de seu atendimento
          </h1>
        </Heading>

        <Text asChild>
          <p>
            Atenção personalizada, através do uso de vários métodos de
            psicoterapia e tratamentos associados, as sessões de terapia são
            elaboradas com intuito de examinar em profundidade os problemas
            pessoais e fornecer aos pacientes ferramentas eficazes para uma boa
            perspectiva de vida.
          </p>
        </Text>

        <ButtonLink
          href={`https://wa.me/5561981668336?text=${message}`}
          title="Agendar consulta!"
          target="_blank"
          size="lg"
        >
          <WhatsappLogo size={24} weight="regular" />
          Agendar Consulta
        </ButtonLink>
      </ClinicContent>

      <ClinicImageWrapper>
        <Image
          src={Clinic}
          alt="Foto da Isabela Castelli sentada, segurando uma caneta e um caderno em uma mesa à sua frente."
        />
      </ClinicImageWrapper>
    </ClinicWrapper>
  )
}
