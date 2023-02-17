import { Heading } from 'components/Heading'
import { Text } from 'components/Text'
import { ChatCenteredDots } from 'phosphor-react'
import { TestimonialsHeader, TestimonialsWrapper } from './styles'
import { TestimonialsSlider } from './TestimonialsSlider'

export function SectionTestimonials() {
  return (
    <TestimonialsWrapper id="depoimentos">
      <TestimonialsHeader
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* <StyledQuotes size={32} weight="fill" /> */}

        <ChatCenteredDots size={32} weight="fill" />

        <Heading size="md" asChild>
          <h1>O que os pacientes estão falando</h1>
        </Heading>

        <Text asChild size="md">
          <h2>
            Em respeito ao sigilo terapêutico dos pacientes, não serão
            divulgados os seus nomes.
          </h2>
        </Text>
      </TestimonialsHeader>

      <TestimonialsSlider />
    </TestimonialsWrapper>
  )
}
