import type { Experience } from './Content.Types'

export const ExampleContent: Experience = {
  mainImage: '/horse-tour.png',
  title: 'Horseback tour in Russian countryside',
  slug: 'horseback-tour-in-russian-countryside',
  duration: 120, //TODO you need to make it a line so that days/hours are marked or send days/hours as a separate key
  gallery: [
    '/horse-tour.png',
    '/horse-tour.png',
    '/horse-tour.png',
    '/horse-tour.png',
  ],
  // TODO Where can I get text for “What is included”, “Time”, “Price”. Will they be here (description: ) or will there be separate keys?
  description:
    'Experience the Russian **countryside** on top of a well behaved horse. Ride through a forest full of singing birds, trot over a wide field or even gallop if you have enough experience. If you have children with you, they can ride beautiful, calm white ponies, accompanied by an instructor.',
  included: ['Transfer Mercedes V class English', 'English speaking guide'],
  activities: ['Activity time - 2 hours'],
  pricesDetails: ['Price per person - 150 euro', 'Price per group - 500 euro'],
  price: 12000,
  type: 'tour',
}
