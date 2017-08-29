var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    external: path.resolve(__dirname, './src/external.js'),
    library: path.resolve(__dirname, './src/library.js'),
    explicit: path.resolve(__dirname, './src/explicit.js')
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: { loaders: { } }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  performance: {
    hints: false
  },
  devtool: '#source-map'
}
