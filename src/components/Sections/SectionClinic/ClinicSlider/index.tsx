import { SliderArrow } from 'components/SliderArrow'
import { SliderMobileArrows } from 'components/SliderMobileArrows'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from 'react'
import { gallery } from './gallery'
import {
  ClinicImage,
  ClinicSliderContainer,
  ClinicSliderMobileWrapper
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
      <ClinicSliderContainer
        ref={sliderRef}
        className="keen-slider"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SliderArrow
          direction="left"
          onClick={() => instanceRef.current?.prev()}
        />

        {gallery.map((galleryImage) => (
          <ClinicImage
            key={galleryImage.id}
            src={galleryImage.src}
            alt={galleryImage.alt}
            className="keen-slider__slide"
          />
        ))}

        <SliderArrow
          direction="right"
          onClick={() => instanceRef.current?.next()}
        />
      </ClinicSliderContainer>

      <SliderMobileArrows
        titleLeft="Ir para imagem à esquerda."
        titleRight="Ir para imagem à direita."
        instanceRef={instanceRef}
      />
    </ClinicSliderMobileWrapper>
  )
}
