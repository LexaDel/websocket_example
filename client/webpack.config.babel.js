import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import DartSass from 'sass';
import path from 'path';
import { createProxyMiddleware } from 'http-proxy-middleware';


export default {
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
        onBeforeSetupMiddleware({app}) {
            app.use('/api', createProxyMiddleware({
                target: 'http://localhost:3000',
                changeOrigin: true,
            }))
        }
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