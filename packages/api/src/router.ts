import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
import { z } from 'zod'

import { contentRouter } from './modules/content/Content.Router'
import { publicProcedure, router } from './utils/router.utils'

export const appRouter = router({
  hello: publicProcedure.input(z.string().nullish()).query(({ input }) => {
    return `hello ${input ?? 'world'}`
  }),
  content: contentRouter,
})

export type AppRouter = typeof appRouter

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>
