
const HtmlWebPackPlugin           = require('html-webpack-plugin');
const MiniCssExtractPlugin        = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin   = require('css-minimizer-webpack-plugin');
const CopyPlugin                  = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    optimization: {
        minimizer: [
          new CssMinimizerWebpackPlugin(),
        ]
      },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /styles\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    attributes: false,
                    minimize: false,
                },
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false,
        }),
        new CopyPlugin({
            patterns: [
              { from: 'src/assets', to: 'assets/' },
            ],
          })
        ]
}
