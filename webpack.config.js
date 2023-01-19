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
        resolve: {
            alias: {
                bootstrap: path.resolve(__dirname, './node_modules/bootstrap'),
            }
        },
        devtool: 'source-map'
    },
    {
        mode: 'development',
        name: 'scss',
        entry: {
            styles: [
                path.resolve(__dirname, './src/css/pages/scsstrial.scss')
            ]
        },
        output: {
             path: path.resolve(__dirname, 'public/css'),
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { 
                            loader: "css-loader", 
                            options: { 
                                url: false, 
                                sourceMap: true 
                            } 
                        }, 
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                                sassOptions: {
                                    includePaths: [
                                        path.resolve(process.cwd(), './node_modules/')
                                    ]
                                }
                            }
                        }
                    ],
                }
            ]
        },
        devtool: 'source-map'
    }
];