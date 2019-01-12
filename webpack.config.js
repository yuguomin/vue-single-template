//webpack.config.js
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: __dirname + "/client/h5/mine/main.js",//入口文件
    output: {
        path: __dirname + "/dist",//打包后导出文件夹
        filename: "bundle.js"//导出的文件名
    },
    module: { 
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },           
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'less-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: "ts-loader",
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    },
    devServer: {
        contentBase: "./dist",
        stats:{colors: true},
        historyApiFallback: true,
        inline: true
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     // 文件名
        //     filename: 'index.html',
        //     // 根目录
        //     template: './client/h5/mine/index.html',
        //     inject: true//注入js
        // })
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		})
    ]
}