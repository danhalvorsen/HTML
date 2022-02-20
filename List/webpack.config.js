const path = require('path');

module.exports = {
  entry: './src/ts/main.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './src/public/js'),
    publicPath: './src/public/js',
    filename: 'bundle.js'
  },
  "mode": "development"
};