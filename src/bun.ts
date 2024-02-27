import type { Serve } from './types'

export const serve: Serve = ({ port = 3000, hostname = '0.0.0.0', fetch }) => {
  const server = Bun.serve({ port, hostname, fetch })
  return {
    async close() {
      server.stop(true)
      await new Promise(resolve => setTimeout(resolve))
    },
  }
}
