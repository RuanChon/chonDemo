/*
 * @Author: Chon
 * @Date: 2022-10-24 14:53:30
 * @LastEditors: chon 724082712@qq.com
 * @LastEditTime: 2022-10-25 11:25:22
 * @FilePath: \my_study_vlog\c_webpack\2_webpack_demo\webpack.config.ts
 * @Description: 文件说明
 */
/*
  webpack 的配置文件
  作用：指示 webpack 干那些活（当运行 webpack 指令时，会加载里面的配置）

  所有的构建工具都是基于 node 平台运行的，模块化默认采用 commonJs

  src文件夹下的文件是写项目的代码，所以用的 es6 的模块化，比如 import
  webpack.config 是配置的代码，所以用 commonJs 的模块化， 比如 module.exports

*/

// resolve 用来拼接绝对路径的方法
const { resolve } = require('path')

module.exports = {
	// 模式
  mode: 'development' // 开发模式，'production' 生产模式，打包的代码会被压缩
  // 入口
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'built.js',
    // 输出路径 ， __dirname 是 nodeJs 的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
	resolve: {
		// 路径别名
		alias: {
			'@': resolve(__dirname, 'src')
		}
		// 识别后缀
		extensions: ['.vue', '.ts']
	},
  // loader 的配置
  module: {
    rules: [
      // 详细 loader 配置，一般都是处理文件的
      {
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些 loader 进行处理
        use: [
          // use 数组中的 loader 执行顺序：从右到左，从下到上
          // 创建 style 标签，将 js 中的样式资源插入进行，添加到 head 中生效
          'style-loader',
          // 将 css 文件变成 commonjs 模块加载到 js 中，里面内容是样式字符串
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
			{
				test: /\.ts$/,
				loader: "ts-loader",
				// ts-loader不能直接使用，针对vue单文件进行处理
				options: {
					configFile: path.resolve(process.cwd(), 'tsconfig.json'),
					appendTsSuffixTo: [/\.vue$/]
				}
			}
    ]
  },
  // plugins 插件的配置
  plugins: [
		// html模板
		new htmlWebpackPlugin({
			template: "./piblic/index.html"
		}),
		// 解析vue
		new VueLoaderPlugin(),
		// 打包清空dist
		new CleanWebpackPlugin()
		// 美化重启样式
		new FriendlyErrorsWebpackPlugin({
			compilationSuccessInfo: {
				messages: ['You appliction is running here: htttp://localhost:8080']
			}
		})
  ],
	// 美化重启样式
	stats: "errors-only",
	// 服务设置
	devServer: {
		port: 9001, // 端口号
		hot: true, // 热更新
		host: '', // 地址
		open: '', // 打开网页
		proxy: {}, // 代理	
	},
	// 性能优化
	externals: {
		vue: 'Vue' // 还需要手动在index.html引入CDN，这样就不会打包vue了，节省空间
	}
}