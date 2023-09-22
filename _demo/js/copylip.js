// 创建一个异步函数来复制文本到剪贴板
async function copyToClipboard(text) {
  try {
    // 使用 Clipboard API 写入文本到剪贴板
    await navigator.clipboard.writeText(text)
    console.log('文本已成功复制到剪贴板：', text)
  } catch (err) {
    console.error('复制到剪贴板时出错:', err)
  }
}

// 调用复制函数，并传递要复制的文本
copyToClipboard('love u')

// tips
// navigator 对象是 JavaScript 的全局对象之一，通常用于获取关于浏览器环境的信息，包括用户代理、地理位置、剪贴板等。但是，如果你在非浏览器环境（如服务器端 Node.js 环境）中使用 navigator，就会出现 "navigator is not defined" 的错误，因为 navigator 对象仅在浏览器环境中定义。
