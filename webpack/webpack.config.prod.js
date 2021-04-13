const Path = require('path');
const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = env => {

  const endpoint = env.endpoint;

  return  merge(common, {
    mode: 'production',
    plugins: [
      new Webpack.DefinePlugin({
        prod: true,
        endpoint: JSON.stringify(endpoint)
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        template: Path.resolve(__dirname, '../src/index.html'),
        chunks: ['app'],
      }),
      new MiniCssExtractPlugin({
        filename: 'style.css'
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          include: Path.resolve(__dirname, '../src'),
          loader: 'babel-loader'
        }, {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
      ]
    }
  });
};
