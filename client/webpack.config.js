const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DartSass = require('sass');
const path = require('path');

module.exports = {
    entry: [
        'regenerator-runtime/runtime',
        './src/index.js'
    ],
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        host: '0.0.0.0',
        port: 80,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['css-loader', 'style-loader'],
            },
            {
                test: /\.sass$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                        },
                    },
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: DartSass,
                            sourceMap: true,
                            sassOptions: {
                                quietDeps: true,
                                includePaths: [
                                    path.resolve('src', 'styles'),
                                ]
                            }
                        }
                    }
                ].filter(Boolean),
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({
            filename: 'assets/css/[name].[name].css',
        })
    ],
    devtool: 'source-map',
}