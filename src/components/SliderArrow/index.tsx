import { CaretLeft, CaretRight } from 'phosphor-react'
import { SliderArrowButton } from './styles'

interface SliderArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
}

export function SliderArrow({ direction, onClick }: SliderArrowProps) {
  return (
    <SliderArrowButton direction={direction} onClick={onClick}>
      {direction === 'right' ? (
        <CaretRight size={28} weight="bold" />
      ) : (
        <CaretLeft size={28} weight="bold" />
      )}
    </SliderArrowButton>
  )
}
