/* 
  webpack 入口文件

  1.运行指令：
    开发环境：webpack ./src/index.js -o ./build --mode=development
      webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build，整体打包环境是开发环境

    生产环境：webpack ./src/index.js -o ./build --mode=production
      webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build，整体打包环境是生产环境

  2.结论：
    webpack 能处理 js、json资源，不能处理 css、img 等其他资源
    生产环境和开发环境将 ES6 模块化编译成浏览器能识别的模块化
    生产环境比开发环境多了一个压缩 js 代码，体积更小
*/

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2))
console.log(sum(1, 2));