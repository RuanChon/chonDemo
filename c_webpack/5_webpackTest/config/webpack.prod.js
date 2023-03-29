const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")

// 封装复用loader
function getStyleLoader(pre) {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: [
            "postcss-preset-env", // 智能预设，解决样式兼容问题
          ],
        },
      },
    },
    pre,
  ].filter(Boolean) // 过滤undefined
}

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]_[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: getStyleLoader("less-loader"),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:5].css",
    }),
    new CssMinimizerPlugin(),
  ],
}
