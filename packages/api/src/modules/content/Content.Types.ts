export interface Experience {
  mainImage: string
  slug: string
  title: string
  duration: number // in minutes
  gallery: string[]
  description: string
  included: string[]
  activities: string[]
  pricesDetails: string[]
  price: number
  type: 'tour' | 'expedition'
}
