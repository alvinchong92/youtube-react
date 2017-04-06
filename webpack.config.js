// module.exports = {
//   entry: [
//     './src/index.js'
//   ],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [{
//       exclude: /node_modules/,
//       loader: 'babel',
//       query: {
//         presets: ['react', 'es2015', 'stage-1']
//       }
//     }]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './'
//   }
// };


const path = require('path');
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'src', 'index.js'),
  devServer: {
    contentBase: path.join(__dirname, 'src', 'static'),
    inline: true,
    port: 8080,
  },
  output: {
    path: path.join(__dirname, 'static', 'js'),
    filename: 'bundle.js',
  },
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  })
],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
}
