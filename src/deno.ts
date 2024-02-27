import type { Serve } from './types'

declare const Deno: {
  serve: (
    options: { port?: number, hostname?: string },
    hander: (request: Request) => Response | Promise<Response>
  ) => { shutdown: () => Promise<void> }
}

export const serve: Serve = ({ port = 3000, hostname = '0.0.0.0', fetch }) => {
  const server = Deno.serve({ port, hostname }, fetch)
  return {
    close: () => server.shutdown(),
  }
}
