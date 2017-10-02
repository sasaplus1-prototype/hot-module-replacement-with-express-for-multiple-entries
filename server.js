'use strict';

const webpack = require('webpack'),
      webpackConfigFunction = require('./webpack.config.js'),
      webpackConfigClient = webpackConfigFunction()[0];

const compiler = webpack(webpackConfigClient);

const express = require('express');

const app = express();

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: false,
  publicPath: webpackConfigClient.output.publicPath,
}));
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`starting server at 127.0.0.1:${port}`);
});
