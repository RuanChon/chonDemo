// 传的属性可能会很诡异，不一定每次都能像这样以字符串的形式来替换，通过官方推荐的 loaderutils 解决
const loaderUtils = require("loader-utils")

//用function的原因在于为了业务层可以调用this
//source为引入文件的源代码
module.exports = function (source) {
  //getOptions会自动地帮我们分析this.query,然后把参数的所有内容放在options里面去
  const options = loaderUtils.urlToRequest(this)
  console.log("options", options)
  const result = source.replace("chon", options.name)

  this.callback(null, result)
}
