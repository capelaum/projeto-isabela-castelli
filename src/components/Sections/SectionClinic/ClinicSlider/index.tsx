import { gallery } from 'data/gallery'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import {
  ClinicImageWrapper,
  ClinicMobileArrow,
  ClinicMobileArrows,
  ClinicSliderArrow,
  ClinicSliderContainer,
  ClinicSliderMobileWrapper,
  ClinicSliderWrapper
} from './styles'

export function ClinicSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      origin: 'center',
      perView: 1,
      spacing: 0
    },
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    }
  })

  return (
    <ClinicSliderMobileWrapper>
      <ClinicSliderWrapper
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <ClinicSliderContainer ref={sliderRef} className="keen-slider">
          <ClinicSliderArrow
            direction="left"
            onClick={() => instanceRef.current?.prev()}
          >
            <CaretLeft size={40} weight="bold" />
          </ClinicSliderArrow>

          {gallery.map((galleryImage) => (
            <ClinicImageWrapper
              key={galleryImage.id}
              className="keen-slider__slide"
            >
              <Image src={galleryImage.src} alt={galleryImage.alt} />
            </ClinicImageWrapper>
          ))}

          <ClinicSliderArrow
            direction="right"
            onClick={() => instanceRef.current?.next()}
          >
            <CaretRight size={40} weight="bold" />
          </ClinicSliderArrow>
        </ClinicSliderContainer>
      </ClinicSliderWrapper>

      <ClinicMobileArrows>
        <ClinicMobileArrow title="Ir para depoimento à esquerda">
          <CaretLeft size={28} onClick={() => instanceRef.current?.prev()} />
        </ClinicMobileArrow>

        <ClinicMobileArrow
          title="Ir para depoimento à direita"
          onClick={() => instanceRef.current?.next()}
        >
          <CaretRight size={28} />
        </ClinicMobileArrow>
      </ClinicMobileArrows>
    </ClinicSliderMobileWrapper>
  )
}
