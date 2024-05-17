import { z } from 'zod'

import { publicProcedure, router } from '../../utils/router.utils'
import type { Experience } from './Content.Types'
import { ExampleContent } from './exampleContent'

export const contentRouter = router({
  experiences: publicProcedure.query((): Experience[] => {
    return [ExampleContent]
  }),
  experience: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query((): Experience => {
      return ExampleContent
    }),
})
