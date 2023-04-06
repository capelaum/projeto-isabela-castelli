import { SliderArrow } from 'components/SliderArrow'
import { SliderMobileArrows } from 'components/SliderMobileArrows'
import { gallery } from 'data/gallery'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { useState } from 'react'
import {
  ClinicImageWrapper,
  ClinicSliderContainer,
  ClinicSliderMobileWrapper,
  ClinicSliderWrapper
} from './styles'

export function ClinicSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,

    slides: {
      origin: 'center',
      perView: 1,
      spacing: 0
    },

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
          <SliderArrow
            direction="left"
            onClick={() => instanceRef.current?.prev()}
          />

          {gallery.map((galleryImage) => (
            <ClinicImageWrapper
              key={galleryImage.id}
              className="keen-slider__slide"
            >
              <Image src={galleryImage.src} alt={galleryImage.alt} />
            </ClinicImageWrapper>
          ))}

          <SliderArrow
            direction="right"
            onClick={() => instanceRef.current?.next()}
          />
        </ClinicSliderContainer>
      </ClinicSliderWrapper>

      <SliderMobileArrows
        titleLeft="Ir para imagem à esquerda."
        titleRight="Ir para imagem à direita."
        instanceRef={instanceRef}
      />
    </ClinicSliderMobileWrapper>
  )
}
