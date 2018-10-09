const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {

    // Root file of our Server Application
    entry: './src/client/client.js',

    // Out of our webpack file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }

};

module.exports = merge(baseConfig, config);