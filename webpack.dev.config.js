const webpack = require('webpack');

module.exports= {
    mode: 'development',
    entry: '/src/js/script.js',
    output: {
        path: __dirname  + '/dist',
        filename: 'bundle.js'
    },
};