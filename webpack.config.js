// entry -> output 
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css'); 

    return {
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
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
                // [
                //     'style-loader', //style tag 달아줌
                //     'css-loader',    // css load 해줌 
                //     'sass-loader'   // scss load 해줌
                // ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true // 404 에러나면 index.html로 돌아오게함. 
        }
    }
};
