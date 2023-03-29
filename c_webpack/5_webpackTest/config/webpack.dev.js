const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

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
            "postcss-preset-env", // 解决样式兼容问题
          ],
        },
      },
    },
    pre,
  ].filter(Boolean) // 过滤undefined
}

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 开发环境不需要打包输出，配置devServer在内存执行
    path: undefined,
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
  ],
  // 服务设置 webpack-dev-server
  devServer: {
    port: 9001, // 端口号
    static: "../dist", // 静态资源
    hot: true, // 热更新
    host: "localhost", // 地址
    open: true, // 打开网页
    proxy: {}, // 代理
  },
}
