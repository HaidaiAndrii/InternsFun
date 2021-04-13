const Path = require('path');
const Webpack = require('webpack')
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {

  const endpoint = env.endpoint;

  return merge( common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    plugins: [
      new Webpack.DefinePlugin({
        prod: false,
        endpoint: JSON.stringify(endpoint)
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        inject: 'body',
        template: Path.resolve(__dirname, '../src/index.html'),
        chunks: ['app']
      })
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
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
              },
            },
          ],
        }
      ]
    }
  });
}
