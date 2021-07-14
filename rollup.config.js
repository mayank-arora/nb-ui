import babel from 'rollup-plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import external from 'rollup-plugin-peer-deps-external'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import image from '@rollup/plugin-image'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: './src/index.tsx',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'named',
        sourcemap: true,
      },
      {
        file: pkg.module,
        format: 'es',
        exports: 'named',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      image(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react'],
      }),
      external({
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
      }),
      resolve(),
      postcss({
        plugins: [],
        modules: true,
        extract: true
        // minimize: true,
      }),
      // terser(),
    ],
  },
]
