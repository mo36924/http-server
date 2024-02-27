import { expect, test } from 'bun:test'
import { serve } from './bun'

test('bun:serve', async () => {
  const text = 'test'
  const server = serve({ fetch() {
    return new Response(text)
  } })
  const res = await fetch('http://127.0.0.1:3000')
  const _text = await res.text()
  expect(_text).toEqual(text)
  await server.close()
})
