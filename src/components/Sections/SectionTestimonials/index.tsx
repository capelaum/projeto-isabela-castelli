import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { testimonials } from 'data/testimonials'
import { useKeenSlider } from 'keen-slider/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import {
  StyledQuotes,
  TestimonialCard,
  TestimonialCardHeader,
  TestimonialQuotes,
  TestimonialsHeader,
  TestimonialsMobileArrow,
  TestimonialsMobileArrows,
  TestimonialsSliderArrow,
  TestimonialsSliderContainer,
  TestimonialsWrapper
} from './styles'

export function SectionTestimonials() {
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

  return (
    <TestimonialsWrapper>
      <TestimonialsHeader>
        <StyledQuotes size={32} weight="fill" />

        <Heading size="md" asChild>
          <h1>O que os pacientes estão falando</h1>
        </Heading>

        <Text asChild size="md">
          <h2>
            Em respeito ao sigilo terapêutico dos pacientes, não será divulgado
            seus nomes.
          </h2>
        </Text>
      </TestimonialsHeader>

      <TestimonialsSliderContainer ref={sliderRef} className="keen-slider">
        <TestimonialsSliderArrow
          direction="left"
          onClick={(e) => instanceRef.current?.prev()}
        >
          <CaretLeft size={28} />
        </TestimonialsSliderArrow>

        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} className="keen-slider__slide">
            <TestimonialCardHeader>
              <Heading color="white" size="xs" asChild>
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

        {loaded && instanceRef.current && (
          <TestimonialsSliderArrow
            direction="right"
            onClick={(e) => instanceRef.current?.next()}
          >
            <CaretRight size={28} />
          </TestimonialsSliderArrow>
        )}
      </TestimonialsSliderContainer>

      <TestimonialsMobileArrows>
        <TestimonialsMobileArrow>
          <CaretLeft size={28} onClick={(e) => instanceRef.current?.prev()} />
        </TestimonialsMobileArrow>

        <TestimonialsMobileArrow onClick={(e) => instanceRef.current?.next()}>
          <CaretRight size={28} />
        </TestimonialsMobileArrow>
      </TestimonialsMobileArrows>
    </TestimonialsWrapper>
  )
}
