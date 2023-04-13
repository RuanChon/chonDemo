module.exports = {
  // 解析选项
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 8, // es语法版本
    sourceType: "module", // es模块化
    ecmaFeatures: {
      // es其他配置
      jsx: true, // 如果是react项目，开启jsx语法
    },
  },
}
