import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

const production = !process.env.ROLLUP_WATCH

const buildFolder = 'dist'
const fileName = 'bundle'

export default {
  input: 'src/index.js',
  external: ['react'],
  output: [
    {
      name: 'ReactPureSpinners',
      file: `${buildFolder}/${fileName}.umd.js`,
      format: 'umd',
      globals: {
        react: 'React'
      }
    },
    {
      file: `${buildFolder}/${fileName}.esm.js`,
      format: 'esm'
    },
    {
      file: `${buildFolder}/${fileName}.cjs.js`,
      format: 'cjs',
      exports: 'auto'
    }
  ],
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**', runtimeHelpers: true }),
    production && terser()
  ]
}
