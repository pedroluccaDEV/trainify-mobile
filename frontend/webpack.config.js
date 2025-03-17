const path = require('path');

module.exports = {
  // ... outras configurações ...
  module: {
    rules: [
      // ... outras regras ...
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  },
};