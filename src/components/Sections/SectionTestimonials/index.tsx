import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { StyledQuotes, TestimonialsHeader, TestimonialsWrapper } from './styles'
import { TestimonialsSlider } from './TestimonialsSlider'

export function SectionTestimonials() {
  return (
    <TestimonialsWrapper id="depoimentos">
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

      <TestimonialsSlider />
    </TestimonialsWrapper>
  )
}
