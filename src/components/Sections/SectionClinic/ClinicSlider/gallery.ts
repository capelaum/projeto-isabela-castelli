import Gallery1 from 'assets/images/gallery/gallery-1.png'
import Gallery2 from 'assets/images/gallery/gallery-2.png'
import Gallery3 from 'assets/images/gallery/gallery-3.png'
import Gallery4 from 'assets/images/gallery/gallery-4.png'
import Gallery6 from 'assets/images/gallery/gallery-6.png'
import Gallery7 from 'assets/images/gallery/gallery-7.png'
import { StaticImageData } from 'next/image'

type GalleryItem = {
  id: number
  src: StaticImageData
  alt: string
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    src: Gallery1,
    alt: 'Sofá do consultório da Isabela Castelli.'
  },
  {
    id: 2,
    src: Gallery2,
    alt: 'Sala de espera do consultório da Isabela Castelli.'
  },
  {
    id: 3,
    src: Gallery3,
    alt: 'Mesa e cadeira do consultório da Isabela Castelli.'
  },
  {
    id: 4,
    src: Gallery4,
    alt: 'Mesa e cadeira do consultório da Isabela Castelli.'
  },
  // {
  //   id: 5,
  //   src: Gallery5,
  //   alt: 'Consultório da Isabela Castelli.'
  // },
  {
    id: 6,
    src: Gallery6,
    alt: 'Isabela Castelli sentada sem sua mesa do consultório.'
  },
  {
    id: 7,
    src: Gallery7,
    alt: 'Mesa de café do consultório da Isabela Castelli.'
  }
]
