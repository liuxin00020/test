// 这里只写了引入js和json的，如果需要引入css，需要配置style-loader css-loader
// 因为使用gulp已经有了文件入口，此处可以不写
module.exports = {
    // watch: true,
    mode: 'development',
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};