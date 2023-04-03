// 存储 token 和过期时间
const token = "your_token"
const expireTime = Date.now() + 3600 * 1000 // 过期时间为当前时间加1小时
localStorage.setItem("token", token)
localStorage.setItem("expireTime", expireTime)

// 发送请求时检查 token 是否过期
const currentTime = Date.now()
const savedToken = localStorage.getItem("token")
const savedExpireTime = localStorage.getItem("expireTime")

if (currentTime < savedExpireTime) {
  // token 未过期，可以正常发送请求
  fetch("your_api_url", {
    headers: {
      Authorization: `Bearer ${savedToken}`,
    },
  })
    .then(response => {
      // 处理响应数据
    })
    .catch(error => {
      // 处理错误
    })
} else {
  // token 已过期，需要重新登录获取新的 token
  // ...
}
