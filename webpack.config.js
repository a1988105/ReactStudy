import path from 'path';
import webpack from 'webpack';

const webpackConfig = {
    entry: path.join(__dirname, 'App/index'),
    output: {
        path: path.join(__dirname, 'output/assets'),
        filename: 'app.js',
        publicPath: '/assets'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    }
}

module.exports = webpackConfig;