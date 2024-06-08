const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    entry: './src/server.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        fallback: { tls: false, net: false, async_hooks: false },
        extensions: ['.js'],
        alias: {
            '@lib': path.resolve(__dirname, 'src/lib'),
            '@middleware': path.resolve(__dirname, 'src/middleware'),
            '@controller': path.resolve(__dirname, 'src/controller'),
            '@repository': path.resolve(__dirname, 'src/repository'),
            '@service': path.resolve(__dirname, 'src/service'),
            '@route': path.resolve(__dirname, 'src/route'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@constant': path.resolve(__dirname, 'src/constant'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
