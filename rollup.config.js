import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import typescript from '@rollup/plugin-typescript'

export default defineConfig([{
  input: 'src/index.ts',
  output: { file: 'dist/index.cjs', format: 'commonjs' },
  external: /^[@|\w]/,
  plugins: [typescript()],
}, {
  input: ['src/bun.ts', 'src/deno.ts', 'src/index.ts'],
  output: { dir: 'dist' },
  external: /^[@|\w]/,
  plugins: [typescript()],
}, {
  input: ['src/index.ts'],
  output: { file: 'dist/index.d.ts' },
  plugins: [dts()],
}])
