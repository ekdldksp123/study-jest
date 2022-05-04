const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
    webpack(config) {
        config.resolve.fallback = {
        };
        return config;
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
        // [name], [hash], [chunkhash]와 같은 해시 값을 붙일 수 있다
    },
    images: {
        loader: 'akamai',
        path: '',
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
}