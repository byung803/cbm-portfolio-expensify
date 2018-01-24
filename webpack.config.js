// entry -> output 
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader', // 사용할 모듈 
            test: /\.js$/,          // 모듈이 확인할 파일, regExp
            exclude: /node_modules/ // 모듈이 배제할 내용. node_module
        },{             
            test: /\.s?css$/,
            use: [
                'style-loader', //style tag 달아줌
                'css-loader',    // css load 해줌 
                'sass-loader'   // scss load 해줌
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true // 404 에러나면 index.html로 돌아오게함. 
    }
};
