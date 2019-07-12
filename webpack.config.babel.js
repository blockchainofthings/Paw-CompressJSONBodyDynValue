import path from 'path';

const name = 'CompressJSONBodyDynValue';

const config = {
    target: 'web',
    mode: 'none',
    entry: [
        'immutable',
        './src/CompressJSONBodyDynValue.js'
    ],
    output:{
        path: path.resolve(__dirname, './build/com.blockchainofthings.PawExtensions.' + name),
        publicPath: '/build/',
        filename: name + '.js'
    },
    module: {
        rules: [{
            use: [{
                loader: 'babel-loader',
            }],
            include: [
                path.resolve(__dirname, './src')
            ],
            test: /\.jsx?$/
        }]
    }
};

module.exports = config;
