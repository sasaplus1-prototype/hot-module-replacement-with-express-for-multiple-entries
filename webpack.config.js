'use strict';

const path = require('path');

const webpack = require('webpack');

module.exports = function(env) {
  return [
    {
      entry: {
        client1: [
          'webpack-hot-middleware/client',
          path.join(__dirname, '/src/client1/index.js'),
        ],
        client2: [
          'webpack-hot-middleware/client',
          path.join(__dirname, '/src/client2/index.js'),
        ],
      },
      output: {
        path: path.join(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/',
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
      ],
      target: 'web',
    },
  ];
};
