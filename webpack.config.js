const path = require('path')
module.exports = {
  // src/index.jsに書いたReactのプログラムを
  entry: path.join(__dirname, 'src/index.js'),
  // public/bundle.jsに出力
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
