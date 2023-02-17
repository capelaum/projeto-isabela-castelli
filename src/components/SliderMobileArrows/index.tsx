import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider/react'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { MutableRefObject } from 'react'
import { SliderMobileArrow, SliderMobileArrowsWrapper } from './styles'

interface SliderArrowProps {
  instanceRef: MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks>>
  titleRight: string
  titleLeft: string
}

export function SliderMobileArrows({
  instanceRef,
  titleRight,
  titleLeft
}: SliderArrowProps) {
  return (
    <SliderMobileArrowsWrapper>
      <SliderMobileArrow title={titleLeft}>
        <CaretLeft size={28} onClick={() => instanceRef.current?.prev()} />
      </SliderMobileArrow>

      <SliderMobileArrow
        title={titleRight}
        onClick={() => instanceRef.current?.next()}
      >
        <CaretRight size={28} />
      </SliderMobileArrow>
    </SliderMobileArrowsWrapper>
  )
}
