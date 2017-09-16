/**
 * Created by jyothi on 16/9/17.
 */
var path = require("path");
module.exports = {
    entry: {
        app: ["./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, //Check for all js files
                loader: 'babel-loader',
                query: {
                    presets: [ "babel-preset-es2015" ].map(require.resolve)
                }
            },
            {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"  //JSON loader
            }
        ]
    },
    devServer: {
        contentBase: './build',
        inline: true
    }
};