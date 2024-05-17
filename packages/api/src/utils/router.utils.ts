import { initTRPC } from '@trpc/server'

type CreateContextOptions = Record<string, any> & {
  headers: Headers
}
export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    headers: opts.headers,
    env: opts.env,
    resHeaders: opts.resHeaders as Headers,
  }
}

export const createTRPCContext = (opts: any) => {
  return createInnerTRPCContext(opts)
}

export const t = initTRPC.context<typeof createTRPCContext>().create()

export const publicProcedure = t.procedure
export const router = t.router
