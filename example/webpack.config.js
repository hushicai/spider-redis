
var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './index.js'),
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'dist.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules(?!\/spider-*)/
      },
    ]
  },
  externals: [
    nodeExternals({
      whitelist: [
        /^spider-*/
      ]
    })
  ],
  node: {
    __dirname: true,
    __filename: true
  }
};
