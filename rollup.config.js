import pkg from './package.json';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import postcssPrefixer from 'postcss-prefixer';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import dts from 'rollup-plugin-dts';
import copy from 'rollup-plugin-copy';
import alias from '@rollup/plugin-alias';
import prettier from 'rollup-plugin-prettier';
import path from 'path';

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.scss'];

process.env.BABEL_ENV = 'production';

function setUpRollup({ input, output }) {
  return {
    input,
    exports: 'named',
    output,
    watch: {
      include: '*',
      exclude: 'node_modules/**',
    },
    plugins: [
      peerDepsExternal(),
      json(),
      resolve({ extensions }),
      commonjs({
        include: /node_modules/,
      }),
      typescript(),
      postcss({
        extract: true,
        modules: true,
        sourceMap: true,
        use: ['sass'],
        plugins: [
          postcssPrefixer({
            prefix: `${pkg.name}__`,
          }),
        ],
      }),
      copy({
        targets: [
          // Need to copy the files over for usage
          { src: 'src/assets', dest: 'lib' },
        ],
      }),
    ],
    external: ['react', 'react-dom'],
  };
}

export default [
  setUpRollup({
    input: './src/index.ts',
    output: {
      file: 'lib/index.js',
      sourcemap: true,
      format: 'cjs',
    },
  }),
  setUpRollup({
    input: './src/index.ts',
    output: {
      file: 'lib/index.esm.js',
      sourcemap: true,
      format: 'esm',
    },
  }),
  // 타입 정의 파일 번들링
  {
    input: 'src/index.ts',
    output: [{ file: 'lib/index.d.ts', format: 'cjs' }],
    plugins: [
      dts(),
      alias({
        entries: [
          { find: '@vases-ui', replacement: path.resolve(__dirname, 'src') },
        ],
      }),
      // 타입 정의 파일은 가독성을 위해 prettier 적용
    ],
  },
];
