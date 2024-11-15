import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'
import external from 'rollup-plugin-peer-deps-external'
import image from '@rollup/plugin-image'
import json from '@rollup/plugin-json'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import postcss from 'rollup-plugin-postcss'
import meta from './package.json' assert { type: 'json' }

const config = {
  cjs: {
    output: {
      dir: meta['main'].replace('/main.js', ''),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [
      preserveDirectives.default({
        include: ['**/*.ts', '**/*.tsx'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: meta['main'].replace('/main.js', ''),
          declaration: false,
        },
      }),
    ],
  },
  es: {
    output: {
      dir: meta['module'].replace('/main.js', ''),
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [
      preserveDirectives.default({
        include: ['**/*.ts', '**/*.tsx'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: meta['module'].replace('/main.js', ''),
          declaration: false,
        },
      }),
    ],
  },
  umd: {
    output: {
      file: meta['umd:main'],
    },
    plugins: [
      typescript({
        tsconfig: './tsconfig.json',
        compilerOptions: {
          outDir: meta['umd:main'].replace('/main.js', ''),
          declaration: true,
        },
      }),
    ],
  },
}

export default ['cjs', 'es', 'umd'].map(format => ({
  input: 'src/main.tsx',
  output: [
    {
      ...config[format].output,
      format,
      name: meta.name,
      exports: 'named',
      globals: Object.assign({}, ...Object.keys(meta.dependencies || {})),
      sourcemap: true,
    },
  ],
  external: Object.keys(meta.dependencies || {}),
  plugins: [
    ...config[format].plugins,
    postcss({
      extract: 'fifi.css',
    }),
    json(),
    external(),
    nodeResolve({
      dedupe: ['react', 'react-dom'],
    }),
    commonjs({
      extensions: ['.js', '.ts'],
      sourceMap: true,
    }),
    image({ dom: false }),
    terser({
      mangle: {
        reserved: ['InternMap', 'InternSet'],
      },
    }),
  ],
  onwarn: (warning, warn) => {
    // remove unnecessary warning for the "use client"
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      if (
        warning.message.includes('Module level directives cause errors when bundled, "use client"')
      ) {
        return
      }
    }
    warn(warning)
  },
}))
