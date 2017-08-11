import resolve from 'rollup-plugin-node-resolve'
import commonJs from 'rollup-plugin-commonjs'
import buble from 'rollup-plugin-buble'

export default {
  entry: 'src/index.js',
  dest: 'index.js',
  external: [
    '@fortawesome/fontawesome'
  ],
  globals: {
    '@fortawesome/fontawesome': 'FontAwesome'
  },
  moduleName: 'vue-fontawesome',
  format: 'umd',
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonJs(),
    buble()
  ]
}
