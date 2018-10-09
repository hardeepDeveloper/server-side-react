const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we are building a bundle for nodeJS , rather than for the browser
    target: 'node',

    // Root file of our Server Application
    entry: './src/index.js',

    // Out of our webpack file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]

};

module.exports = merge(baseConfig, config);