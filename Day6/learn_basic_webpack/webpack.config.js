const HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require("path");
module.exports = {
    entry : {
        bundle: path.resolve(__dirname, "src/index.mjs")
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js'
    },
    mode : "development",
    devServer: {
        static:{
            directory: path.resolve(__dirname, 'public'),
        },
        port:5000,
        hot:true,
        open:true,
    },
    plugins: [new HtmlWebpackPlugin({
        template : './public/index.html',
    })],
    module: {
        rules: [
            {
                test:/.js$/,
                exclude:'/node_modules',
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
            }
        ]
    }
};