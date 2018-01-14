module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // a regular expression that catches .js files
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        port: 3003, // most common port
        contentBase: './build',
        inline: true
    }
}