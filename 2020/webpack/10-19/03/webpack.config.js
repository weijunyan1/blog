const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 打包方式

    // development(不压缩)
    mode: 'development',
    // production(压缩)
    // mode:'production',
    // none
    // mode:'none',
    // 入口
    entry: './src/main.js',
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
    ],
    // 出口
    output: {
        // 编译打包的js文件输出的路径
        filename: 'bundle1.js',
        // 输出文件的名称
        path: path.resolve(__dirname, 'dist')
    }
}