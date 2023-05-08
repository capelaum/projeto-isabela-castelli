import { Heading } from 'components/Heading'
import { SliderArrow } from 'components/SliderArrow'
import { SliderMobileArrows } from 'components/SliderMobileArrows'
import { Text } from 'components/Text'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import {
  TestimonialCard,
  TestimonialCardHeader,
  TestimonialQuotes,
  TestimonialsSliderContainer
} from './styles'
import { testimonials } from './testimonials'

export function TestimonialsSlider() {
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
      '(min-width: 2000px)': {
        slides: {
          perView: 4,
          spacing: 24
        }
      },
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

  return (
    <>
      <TestimonialsSliderContainer ref={sliderRef} className="keen-slider">
        <SliderArrow
          direction="left"
          onClick={() => instanceRef.current?.prev()}
        />

        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} className="keen-slider__slide">
            <TestimonialCardHeader>
              <Heading color="white" size="sm" asChild>
                <h3>Paciente</h3>
              </Heading>

              <Text size="sm">{testimonial.type}</Text>
            </TestimonialCardHeader>

            <Text color="white" asChild>
              <p>
                <TestimonialQuotes size={24} weight="fill" position="left" />
                {testimonial.text}{' '}
                <TestimonialQuotes size={24} weight="fill" position="right" />
              </p>
            </Text>
          </TestimonialCard>
        ))}

        <SliderArrow
          direction="right"
          onClick={() => instanceRef.current?.next()}
        />
      </TestimonialsSliderContainer>

      <SliderMobileArrows
        titleLeft="Ir para depoimento à esquerda."
        titleRight="Ir para depoimento à direita."
        instanceRef={instanceRef}
      />
    </>
  )
}
