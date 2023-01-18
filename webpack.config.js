const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
        mode: 'development',
        name: 'js',
        entry: './index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'public/js'),
        },
        devtool: 'source-map'
    },
    {
        mode: 'development',
        name: 'css',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: "styles",
                        test: /\.css$/,
                        chunks: "all",
                        enforce: true,
                    },
                },
            },
        },
        entry: {
            styles: [
                path.resolve(__dirname, './src/css/common.css'),
                path.resolve(__dirname, './src/css/slider.css'),
            ]
        },
        output: {
             path: path.resolve(__dirname, 'public/css'),
        },
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: "./public/"
                            }
                        },
                        'css-loader'
                    ],
                }
            ]
        },
        devtool: 'source-map'
    }
];