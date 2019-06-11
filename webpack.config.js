const path = require('path');

module.exports = {
  entry: './public/javascript/javascript.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public','dist')
  },
  mode: "development"
};
