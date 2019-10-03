const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './public/javascript/gross.jsx',
    output: {
        path: path.join(__dirname, 'public', 'javascript'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/, /\.js?$/],
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", "*"]
    },
    mode: "development"
}
