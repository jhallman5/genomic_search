 const webpack = require('webpack')
 const path = require('path')

 module.exports = {
   mode: 'development',
   entry: './src/view/index.js',
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: 'bundle.js'
   },
   module: {
     rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
     ]
   }
 }
