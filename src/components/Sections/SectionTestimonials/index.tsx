import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { TestimonialsWrapper } from './styles'

export function SectionTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 32
    },
    breakpoints: {
      '(max-width: 1180px)': {
        slides: {
          perView: 2,
          spacing: 32
        }
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 32
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

  return (
    <TestimonialsWrapper>
      <Heading size="md" asChild>
        <h1>O que os paciente estão falando</h1>
      </Heading>

      <Text asChild size="md">
        <h2>
          Em respeito ao sigilo terapêutico dos pacientes, não será divulgado
          seus nomes.
        </h2>
      </Text>
    </TestimonialsWrapper>
  )
}
