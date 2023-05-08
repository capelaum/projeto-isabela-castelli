type Testimonial = {
  id: number
  type: 'Online' | 'Presencial'
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    type: 'Presencial',
    text: 'Boa noite Isa! Eu quero agradecer demais pela consulta de hoje, essa troca de experiências durante a consulta são fundamentais pra mim. Uma das melhores consultas, sai leve e totalmente acreditada na mudança interna que estou disposta a mudar. Concordo com tudo que foi dito. Juro, me fez muito bem. Obrigada por acreditar em mim, assim como acredito e confio totalmente no seu trabalho, um beijo e uma excelente noite'
  },
  {
    id: 2,
    type: 'Presencial',
    text: 'A Isa, é uma psicóloga incrível. Excelente profissional e super pontual. Ela melhorou minha relação com a minha família e comigo mesma. A Isa foi o melhor presente de 2022.'
  },
  {
    id: 3,
    type: 'Online',
    text: 'Uma profissional super atenta e eficaz. É nítida sua paixão pela profissão. Só elogios até o momento'
  },
  {
    id: 4,
    type: 'Presencial',
    text: 'A Isabela é uma profissional extremamente atenta ao que o paciente compartilha, demonstra ter muito conhecimento e ser muito competente em sua área. Além disso é uma pessoa muito querida, carinhosa e muito educada. Ela é nota mil!'
  },
  {
    id: 5,
    type: 'Online',
    text: 'A Dra foi extremamente atenciosa, me deixou muito a vontade, e fez a conversa parecer de amigos e não uma consulta'
  },
  {
    id: 6,
    type: 'Presencial',
    text: 'Uma profissional que tem uma capacidade de conexão incrível! Estou me sentindo melhor mesmo com pouquíssimo tempo de terapia. Recomendadíssima, ela é a Messi das psicólogas!'
  },
  {
    id: 7,
    type: 'Presencial',
    text: 'A melhor profissional que já me atendeu. Atenta, sincera, profissional, competente e com muito conhecimento na área! Isa, como eu sempre te digo, todas as semanas: muito obrigada por existir (e por me aguentar também). Você faz total diferença na minha vida. És perfeita!'
  },
  {
    id: 8,
    type: 'Presencial',
    text: 'Ótimo atendimento, passa segurança e tranquilidade. Deixa o paciente à vontade, facilitando a continuidade do tratamento.'
  },
  {
    id: 9,
    type: 'Presencial',
    text: 'Uma excelente profissional, paciente e muito atenciosa. Já admirava muito seu trabalho e com as sessões essa admiração cresceu ainda mais! É evidente como eu ando evoluindo graças a terapia e essa profissional incrível. Só tenho a agradecer'
  }
]
