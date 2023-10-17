const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/buttonstrip.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'buttonstrip.js',
    globalObject: 'this',
    library: {
      name: 'buttonstrip.js',
      type: 'umd',
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'src/buttonstrip.d.ts', to: 'buttonstrip.d.ts' }],
    }),
  ],
};
