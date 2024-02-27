import { serve as _serve } from '@hono/node-server'
import type { Serve } from './types'

export type { Request, Response, Serve } from './types'

export const serve: Serve = ({ port = 3000, hostname = '0.0.0.0', fetch }) => {
  const server = _serve({ port, hostname, fetch })
  return {
    close: () => new Promise<void>((resolve, reject) => server.close(err => err ? reject(err) : resolve())),
  }
}
