type Testimonial = {
  id: number
  type: 'Online' | 'Presencial'
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: 'Presencial',
    text: 'A Isa, é uma psicóloga incrível. Excelente profissional e super pontual. Ela melhorou minha relação com a minha família e comigo mesma. A Isa foi o melhor presente de 2022.'
  },
  {
    id: 2,
    type: 'Online',
    text: 'Estar em acompanhamento com a dra Isabela tem sido extremamente proveitoso e reflexivo para resolver tantos problemas cotidianos, digo que todos nós somos seres humanos e merecemos ter uma ajuda especializada pra suportar as intempéries que transpassam nosso dia a dia. A terapia tem me ajudado e viver mais plena comigo, independente dos obstáculos. Obrigada, dra Isabela!'
  },
  {
    id: 3,
    type: 'Presencial',
    text: 'Uma profissional que tem uma capacidade de conexão incrível! Estou me sentindo melhor mesmo com pouquíssimo tempo de terapia. Recomendadíssima, ela é a Messi das psicólogas!'
  },
  {
    id: 4,
    type: 'Presencial',
    text: 'Ótimo atendimento, passa segurança e tranquilidade. Deixa o paciente à vontade, facilitando a continuidade do tratamento.'
  },
  {
    id: 5,
    type: 'Presencial',
    text: 'Uma excelente profissional, paciente e muito atenciosa. Já admirava muito seu trabalho e com as sessões essa admiração cresceu ainda mais! É evidente como eu ando evoluindo graças a terapia e essa profissional incrível. Só tenho a agradecer'
  },
  {
    id: 6,
    type: 'Online',
    text: 'Uma profissional super atenta e eficaz. É nítida sua paixão pela profissão. Só elogios até o momento'
  },
  {
    id: 7,
    type: 'Online',
    text: 'A Dra foi extremamente atenciosa, me deixou muito a vontade, e fez a conversa parecer de amigos e não uma consulta'
  },
  {
    id: 8,
    type: 'Presencial',
    text: 'A melhor profissional que já me atendeu. Atenta, sincera, profissional, competente e com muito conhecimento na área! Isa, como eu sempre te digo, todas as semanas: muito obrigada por existir (e por me aguentar também). Você faz total diferença na minha vida. És perfeita!'
  }
]
