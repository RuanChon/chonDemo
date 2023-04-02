// node模块直接使用
const os = require("os")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ESlintPlugin = require("eslint-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")

// 获取 cpu 核心数量
const thread = os.cpus().length

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

/**@type {import('webpack'.Configuration)} */
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    // 开发环境不需要打包输出，配置devServer在内存执行
    path: undefined,
    filename: "js/[name]_[contenthash:5].js",
    clean: true,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            use: [
              {
                loader: "thread-loader", // 开启多进程
                options: {
                  workers: thread, // 进程数量
                },
              },
              {
                loader: "babel-loader",
                options: {
                  cacheDirectory: true, // 开启babel缓存
                  cacheCompression: false, // 关闭缓存文件压缩
                  plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
                },
              },
            ],
          },
          {
            test: /\.less$/i,
            exclude: /node_modules/,
            use: getStyleLoader("less-loader"),
          },
        ],
      },
    ],
  },
  plugins: [
    new ESlintPlugin({
      context: path.resolve(__dirname, "../src"),
      cache: true,
      cacheLocation: path.resolve(__dirname, "../node_modules/.cache/eslint"),
      threads: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:5].css",
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  // 服务设置 webpack-dev-server
  devServer: {
    port: 9001, // 端口号
    static: "../dist", // 静态资源
    hot: true, // 热模替换
    host: "localhost", // 地址
    open: true, // 打开网页
    proxy: {}, // 代理
  },
  devtool: "cheap-module-source-map",
}
