const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: '../app/assets/javascripts',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /.(jsx|js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".css"],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Styles: path.resolve(__dirname, 'src/styles/')
    }
  },
  plugins: [
    new ExtractTextPlugin({ filename: '../stylesheets/bundle.css', disable: false, allChunks: true })
  ]
};
