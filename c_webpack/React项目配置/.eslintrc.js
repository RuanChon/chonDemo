module.exports = {
  extends: ["react-app"], // 继承官方规则
  parserOptions: {
    babelOptions: {
      presets: [
        // 解决页面报错
        ["babel-preset-react-app", false],
        "babel-preset-react-app/prod",
      ],
    },
  },
  plugins: ["import"], // 解决动态导入语法报错
}
