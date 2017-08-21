const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: [
      './app.ts',
    ],
  },
  devtool: 'eval-source-map',
  target: 'web',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
        }
      ],
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'babel-loader',
        }
      ],
    },{
      test: /\.html?/,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    }],
  },
  plugins: [
    // fix for https://github.com/angular/angular/issues/11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/,
      path.resolve(__dirname, '../src')
    ),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    inline: true,
    overlay: {
      errors: true,
    },
    port: 8000,
  },
};
