
/**
 * loader 使用: 1.下载  2.使用
 * plugins 使用: 1.下载  2.引入  3.使用
*/
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 处理图片资源
      {
        test: /\.(png|jpg|gif)$/,
        // 当只需要一个 loader 时，就不需要用 use，直接使用 loader 即可
        loader: 'url-loader',
        options: {
          // 对 loader 的配置
          // 当图片大小小于8kb时，就会被 base64 处理
          // 优点：减少请求数量（减轻服务器压力）
          // 缺点：图片体积会更大（文件请求速度会变慢）
          limit: 8 * 1024,
          // 给图片重命名，取五位哈希值
          name: '[hash:5].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      }
    ],
  },
  plugins: [
    // 功能：默认创建一个空的 html，引入打包后的所有 js/css 资源
    // 需求：需要一个有结构的 html 文件
    new HtmlWebpackPlugin({
      // 复制指定 html 文件，并自动引入打包后的所有 js/css 资源
      template: './src/index.html'
    })
  ],
  mode: 'development'
}