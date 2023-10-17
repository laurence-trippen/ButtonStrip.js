const path = require('path');

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
};
