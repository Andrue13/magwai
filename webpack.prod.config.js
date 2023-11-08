const webpack = require('webpack');

module.exports= {
    mode: 'production',
    entry: '/src/js/script.js',
    output: {
        path: __dirname  + '/dist',
        filename: 'bundle.js'
    },
};