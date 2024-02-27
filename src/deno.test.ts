import { equal } from 'node:assert'
import { serve } from './deno'

declare const Deno: any

Deno.test('deno:serve', async () => {
  const text = 'test'
  const server = serve({ fetch() {
    return new Response(text)
  } })
  const res = await fetch('http://127.0.0.1:3000')
  const _text = await res.text()
  equal(_text, text)
  await server.close()
})
