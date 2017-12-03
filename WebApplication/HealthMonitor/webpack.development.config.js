const webpack = require('webpack');
const path = require('path');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  // Entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/app.js'),
  ],
  // Server Configuration options
  devServer: {
    contentBase: './', // Relative directory for base of server
    devtool: 'source-map',
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  devtool: 'source-map',
  output: {
    path: './dist', // Path of output file
    filename: 'app.js',
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: 'index.html' },
      { from: 'favicon.ico', to: 'favicon.ico' },
      { from: 'main.css', to: 'main.css' },
      { from: 'src/app/shared/resources/images', to: 'src/app/shared/resources/images' },
      { from: 'src/app/shared/resources/styles', to: 'src/app/shared/resources/styles' }
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        MODE: JSON.stringify('WEB'),  // WEB OR MOBILE
        JSONTEST: true
      }
    }),
    // Allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {
        // React-hot loader and
        test: /\.js$/, // All .js files
        loaders: ['react-hot', 'babel'], // react-hot is like browser sync and babel loads jsx and es6-7
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
