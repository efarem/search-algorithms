import { join } from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/dist',
    libraryTarget: 'umd',
    library: 'searchesmun',
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      include,
    }],
  },
};
