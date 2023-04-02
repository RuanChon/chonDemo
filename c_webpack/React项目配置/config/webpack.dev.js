const path = require("path")
const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
// react热更新插件
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

// 封装重复cssloader
const getCssLoaders = function (pre) {
  return [
    "style-loader",
    "css-loader",
    {
      // 处理css兼容，性配合package.json中的browserslis来指定兼容性
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"],
        },
      },
    },
    pre,
  ].filter(Boolean)
}

/**@type {import('webpack'.Configuration)} */
module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: undefined,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
    assetModuleFilename: "static/media/[hash:5][ext][query]",
  },
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: getCssLoaders(),
      },
      // 处理less
      {
        test: /\.less$/,
        use: getCssLoaders("less-loader"),
      },
      // 处理图片
      {
        test: /\.(png|jpe?g|gif|svg)/,
        type: "asset",
        parser: {
          // 配置小于指定大小时转base64
          dataUrlComponents: {
            maxSize: 10 * 1024,
          },
        },
      },
      // 处理其他资源
      {
        test: /\.(woff2?|ttf|mp3)/,
        type: "asset/resource",
      },
      // 处理js
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          cacheDirectory: true, // 开启babel缓存
          cacheCompression: false, // 关闭缓存文件压缩
          plugins: [
            "react-refresh/babel", // 激活js的热更新
          ],
        },
      },
    ],
  },
  plugins: [
    new EslintWebpackPlugin({
      context: path.resolve(__dirname, "../src"),
      exclude: "node_modules",
      cache: true,
      cacheLocation: path.resolve(__dirname, "../node_modules/.cache/.eslintcache"),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new ReactRefreshWebpackPlugin(), // 激活react热更新插件
  ],
  devtool: "cheap-module-source-map",
  optimization: {
    // 代码分割生成多个chunk
    splitChunks: {
      chunks: "all",
    },
    // 代码分割可能导致缓存失效，所以配置runtimeChunk
    runtimeChunk: {
      name: enrtypoint => `runtime~${enrtypoint.name}.js`,
    },
  },
  resolve: {
    // 识别后缀
    extensions: [".jsx", ".ts"],
  },
  devServer: {
    host: "localhost",
    port: "3001",
    open: true,
    hot: true,
  },
}
