const path = require('path');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  entry: './src/index',
  target: "web",
  devtool: 'inline-source-map',
  module: {
    
  },
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: PUBLIC_DIR,
    filename: 'bundle.js'
  }, devServer: {
     open: '/index.html'
    }
};