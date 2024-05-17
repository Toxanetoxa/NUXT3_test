import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client'
import { useRuntimeConfig } from '#app'

import type { AppRouter } from '@utopian-tours/api/src/router'

export const useClient = () => {
  const config = useRuntimeConfig()

  return createTRPCProxyClient<AppRouter>({
    links: [
      loggerLink(),
      httpBatchLink({
        url: config.public.api,
      }),
    ],
  })
}
