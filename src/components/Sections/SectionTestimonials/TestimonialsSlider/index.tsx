import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { testimonials } from 'data/testimonials'
import { useKeenSlider } from 'keen-slider/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import {
  TestimonialCard,
  TestimonialCardHeader,
  TestimonialQuotes,
  TestimonialsMobileArrow,
  TestimonialsMobileArrows,
  TestimonialsSliderArrow,
  TestimonialsSliderContainer
} from './styles'

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
    </>
  )
}
