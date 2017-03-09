/*
 * For bundling of Chrome extension
 */
let webpack = require('webpack')
let CopyWebpackPlugin = require('copy-webpack-plugin');
let path = require('path');

module.exports = [
    /**
     * 
     */
    {
        context : path.join(__dirname, 'chrome', 'src'),
        watch : true,
        entry : './injected/injector.js',
        output : {
            path: path.join(__dirname, 'chrome','build','injected'),
            filename : 'bundle.js'
        },
        plugins : [new CopyWebpackPlugin(
            [{
                from : '**/*', 
                to: path.resolve(__dirname, 'chrome', 'build')
            }], 
            {
                ignore : [path.join(__dirname, 'chrome', 'src', 'injected')]
            })
        ]
    },
]