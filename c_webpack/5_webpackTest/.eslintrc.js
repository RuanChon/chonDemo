module.exports = {
  // 解析选项
  parserOptions: {
    ecmaVersion: 6, // es语法版本
    sourceType: "module", // es模块化
    ecmaFeatures: {
      // es其他配置
      jsx: false, // 如果是react项目，开启jsx语法
    },
  },
  plugins: ["import"], // 解决动态导入语法报错
}
