import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH

const buildFolder = 'dist'
const fileName = 'bundle'
const outputs = [
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
]

const common = {
  input: 'src/index.js',
  external: ['react'],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: ['.js', '.jsx']
    }),

    postcss({
      extract: 'style.min.css',
      minimize: true
    }),
    commonjs(),
    production && terser()
  ]
}

export default outputs.map((output) => ({
  ...common,
  output
}))
