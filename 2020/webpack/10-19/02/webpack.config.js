const path = require('path')
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
    // 出口
    output: {
        // 编译打包的js文件输出的路径
        filename: 'bundle.js',
        // 输出文件的名称
        path: path.resolve(__dirname, 'dist')
    }
}