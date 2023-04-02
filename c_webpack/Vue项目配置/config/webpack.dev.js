const path = require("path")
const { DefinePlugin } = require("webpack")
const EslintWebpackPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

// 封装重复cssloader
const getCssLoaders = function (pre) {
  return [
    "vue-style-loader",
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
        test: /\.js$/,
        include: path.resolve(__dirname, "../src"),
        loader: "babel-loader",
        options: {
          cacheDirectory: true, // 开启babel缓存
          cacheCompression: false, // 关闭缓存文件压缩
        },
      },
      // 处理vue
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          // 开启缓存
          cacheDirectory: path.resolve(__dirname, "node_modules/.cache/vue-loader"),
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
    new VueLoaderPlugin(),
    // cross-env定义的变量给打包工具使用
    // DefinePlugin定义的环境变量给源代码使用，解决vue3页面警告问题
    new DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
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
    // 识别后缀，类似于引入模块时不需要写扩展名了
    extensions: [".vue", ".ts"],
  },
  devServer: {
    host: "localhost",
    port: "3002",
    open: true,
    hot: true,
  },
}
