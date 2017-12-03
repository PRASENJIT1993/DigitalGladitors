const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  entry: [path.join(__dirname, '/src/app/app.js')],
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: './dist-production', // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        MODE: JSON.stringify('WEB'),  // WEB OR MOBILE
        JSONTEST: true
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // suppresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // Transfer Files
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
      { from: 'favicon.ico', to: 'favicon.ico' },
      { from: 'main.css', to: 'main.css' },
      { from: 'src/app/shared/resources/images', to: 'src/app/shared/resources/images' },
      { from: 'src/app/shared/resources/styles', to: 'src/app/shared/resources/styles' }
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // react-hot is like browser sync and babel loads jsx and es6-7
        exclude: [nodeModulesPath],
      },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.(jpe?g|png|gif)$/i, loader: 'file?name=[name].[ext]' },
      { test: /\.ico$/, loader: 'file?name=[name].[ext]' },
      { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap'] }
    ],
  },
  postcss: () => [autoprefixer]
};

module.exports = config;
