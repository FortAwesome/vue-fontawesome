import resolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
  external: [
    '@fortawesome/fontawesome'
  ],
  globals: {
    '@fortawesome/fontawesome': 'FontAwesome'
  },
  input: 'src/index.js',
  name: 'vue-fontawesome',
  output: [
    {
      format: 'umd',
      file: 'index.js'
    }
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonJs(),
    babel({
      babelrc: false,
      presets: [
        ['es2015', { modules: false }],
        'stage-3'
      ],
      plugins: [
        'external-helpers'
      ],
      exclude: 'node_modules/**'
    })
  ]
}
