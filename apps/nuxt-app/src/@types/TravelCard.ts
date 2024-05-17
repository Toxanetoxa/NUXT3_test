export interface TravelCard {
  mainImage: string
  slug: string
  title: string
  duration: number // in minutes
  description: string
  activities: string[]
  pricesDetails: string[]
  price: number
  type: 'tour' | 'expedition'
  descriptionTitle: string
  includedTitle: string
  included: string
  timeTitle: string
  timeContent: string
  pricesTitle: string
  pricesContent: string
  gallery: {
    thumbnail: string
    medium: string
    large: string
  }[]
}

export type TravelCardShort = Pick<
  TravelCard,
  'mainImage' | 'slug' | 'title' | 'duration' | 'price' | 'type'
>
