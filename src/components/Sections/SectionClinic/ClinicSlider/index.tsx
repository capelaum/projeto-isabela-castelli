import { gallery } from 'data/gallery'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import {
  ClinicImageWrapper,
  ClinicSliderArrow,
  ClinicSliderContainer,
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
    <ClinicSliderWrapper>
      <ClinicSliderContainer ref={sliderRef} className="keen-slider">
        <ClinicSliderArrow
          direction="left"
          onClick={(e) => instanceRef.current?.prev()}
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
          onClick={(e) => instanceRef.current?.next()}
        >
          <CaretRight size={40} weight="bold" />
        </ClinicSliderArrow>
      </ClinicSliderContainer>
    </ClinicSliderWrapper>
  )
}
