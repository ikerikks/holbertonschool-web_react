const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    all: ['./modules/header/header.js', './modules/body/body.js', './modules/footer/footer.js']
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'inline-source-map',  // Add this line to set devtool to inline-source-map
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    static: path.join(__dirname, './public'),
    port: 8564
  },
  plugins: [
    new HtmlWebpackPlugin({  // Corrected typo in plugin name
      filename: 'index.html',
      chunks: ['header', 'body', 'footer']
    }),
    new CleanWebpackPlugin()
  ]
};
