import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { appRouter } from './src/router'
import { createTRPCContext } from './src/utils/router.utils'

const corsHeaders = {
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS,PUT',
  'Access-Control-Allow-Origin': '*',
}
export default {
  async fetch(request: Request, env: any, _ctx: any): Promise<Response> {
    if (request.method.toLowerCase() === 'options') {
      return new Response('ok', {
        headers: corsHeaders,
      })
    }

    const res = await fetchRequestHandler({
      endpoint: '/trpc',
      req: request,
      router: appRouter,
      createContext: ({ resHeaders }) =>
        createTRPCContext({
          env,
          headers: request.headers,
          resHeaders,
        }),
    })

    res.headers.set('Access-Control-Allow-Origin', '*')
    return res
  },
}
