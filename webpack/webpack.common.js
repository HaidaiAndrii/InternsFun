const Path = require('path');

module.exports = {
  entry: {
    app: [
      Path.resolve(__dirname, '../src/scripts/index.js'),
      Path.resolve(__dirname, '../src/scripts/home-page.js')
    ]
  },
  output: {
    path: Path.join(__dirname, '../build'),
    filename: 'js/[name].js',
  }
}
