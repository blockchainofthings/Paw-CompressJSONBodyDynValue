import path from 'path';

const name = 'CompressJSONBodyDynValue';

const config = {
    target: 'web',
    entry: [
        'immutable',
        './src/CompressJSONBodyDynValue.js'
    ],
    output:{
        path: path.resolve(__dirname, './build/com.blockchainofthings.PawExtensions.' + name),
        pathInfo: true,
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, './src')
                ],
                test: /\.jsx?$/
            }
        ]
    }
};

module.exports = config;
