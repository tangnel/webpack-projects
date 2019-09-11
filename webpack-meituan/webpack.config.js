var miniCssExtractPlugin = require('mini-css-extract-plugin');
var {CleanWebpackPlugin} = require('clean-webpack-plugin');
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        index:'./src/js/meituan-index.js',
        detail:'./src/js/meituan-info.js'
    },
    output:{
        filename:'[name][hash:5].js',
        path:__dirname+'/out'
    },
    module:{
        rules:[
            {'test':/(\.js)$/,use:['babel-loader']},
            {'test':/(\.css)$/,use:[miniCssExtractPlugin.loader,'css-loader']},
            {'test':/(\.jpg|png|jpeg|gif|svg|woff|ttf|eot)$/,use:['url-loader?limit=1000&name=./[name].[ext]']}
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            filename:'[name]-[hash:5].css'
        }),
        new CleanWebpackPlugin(),
        
        new htmlWebpackPlugin({
            template:'./meituan-index.html',
            filename:'index.html',
            chunks:['index'],
            minify:{removeComments:true}
        }),
        new htmlWebpackPlugin({
            template:'./meituan-detail.html',
            filename:'detail.html',
            chunks:['detail'],
            minify:{removeComments:true}
        })
    ],
    mode:'development',
    devServer:{port:'8989'}
}