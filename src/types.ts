export interface Request extends globalThis.Request {}

export interface Response extends globalThis.Response {}

export type Serve = (options: {
  fetch: (request: Request) => Response | Promise<Response>
  port?: number
  hostname?: string
}) => { close: () => Promise<void> }
