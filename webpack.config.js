const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        app: './src/index.js',
        main: './src/js/main',
        burger: './src/js/burger-button',
        feedbackSlider: './src/js/feedback-slider',
        slider: './src/js/slider',
        sport: './src/js/sport',
        motorics: './src/js/motorics',
        languages: './src/js/languages',
        preschool: './src/js/preschool',
        creative: './src/js/creative',
        music: './src/js/music',
        cooking: './src/js/cooking',
        progressiveImage: './src/js/progressive-image',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        library: '[name]'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                    plugins: [
                        '@babel/plugin-proposal-private-methods',
                        '@babel/plugin-proposal-class-properties'
                    ]
                }
            }
        }, {
            test: /\.html$/,
            include: path.resolve(__dirname, 'src/html/includes'),
            use: [
                {
                    loader: 'file-loader',
                    options: { minimize: false, name: '[name].[ext]' }
                }
            ],
            exclude: path.resolve(__dirname, 'src/index.html')
        }, {
            test: /\.(ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                name: 'assets/fonts/[name].[ext]'
            }
        },
        {
            test: /\.(png|jpe?g|svg|gif)$/i,
            loader: 'url-loader',
            options: {
                name: 'assets/[name].[ext]',
                publicPath: 'public/'
            },
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                }, {
                    loader: 'sass-loader',
                    options: { sourceMap: true }
                }
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: { sourceMap: true }
                }, {
                    loader: 'postcss-loader',
                    options: { sourceMap: true, config: { path: 'src/js/postcss.config.js' } }
                }
            ]

        }]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),

        new HtmlWebPackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            filename: './index.html',
            chunks: ['app' , 'main', 'feedbackSlider', 'burger'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'sport.html',
            template: './src/sport.html',
            chunks: ['app' , 'burger', 'slider', 'sport', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'motorics.html',
            template: './src/motorics.html',
            chunks: ['app' , 'burger', 'slider', 'motorics', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'languages.html',
            template: './src/languages.html',
            chunks: ['app' , 'burger', 'slider', 'languages', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'preschool.html',
            template: './src/preschool.html',
            chunks: ['app' , 'burger', 'slider', 'preschool', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'creative.html',
            template: './src/creative.html',
            chunks: ['app' , 'burger', 'slider', 'creative', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'music.html',
            template: './src/music.html',
            chunks: ['app' , 'burger', 'slider', 'music', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),

        new HtmlWebPackPlugin({  
            filename: 'cooking.html',
            template: './src/cooking.html',
            chunks: ['app' , 'burger', 'slider', 'cooking', 'progressiveImage'],
            favicon: './src/assets/images/logo.ico',
        }),
       
    ],

}