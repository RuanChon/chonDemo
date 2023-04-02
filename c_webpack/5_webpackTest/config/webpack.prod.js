const path = require("path")
const os = require("os")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const ESlintPlugin = require("eslint-webpack-plugin")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const VueProloadPlugin = require("@vue/preload-webpack-plugin")
const WorkboxPlugin = require("workbox-webpack-plugin")

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
            "postcss-preset-env", // 智能预设，解决样式兼容问题
          ],
        },
      },
    },
    pre,
  ].filter(Boolean) // 过滤undefined
}

/**@type {import('webpack'.Configuration)} */
module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].[contenthash:5].js",
    chunkFilename: "js/[name].chunk.[contenthash:5].js",
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
                loader: "thread-loader",
                options: {
                  workers: thread,
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
      filename: "css/[name].[contenthash:5].css",
      chunkFilename: "css/[name].chunk.[contenthash:5].css",
    }),
    new CssMinimizerPlugin(),
    new TerserWebpackPlugin({
      parallel: thread,
    }),
    new VueProloadPlugin({
      rel: "preload",
      as: "script",
    }),
    new WorkboxPlugin.GenerateSW({
      // 这些选项帮助快速启用 ServiceWorkers
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      // 输出 runtime 文件，记录hash变化
      name: entrypoint => `runtime~${entrypoint.name}.js`,
    },
  },
  devtool: "source-map",
}
