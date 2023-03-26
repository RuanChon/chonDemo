<template>
  <div>
    <h3>图片懒加载</h3>
    <img v-lazy="item" v-for="item in imgArr" />
  </div>
</template>
<script setup lang="ts">
import type { Directive } from "vue"
// vite 提供的导入文件夹所有文件
// glob 是懒加载的模式
// let module = {
//   'xxx': () => import('xxx')
// }
// globEager 是静态加载, 写法改为了在后面配置 eager
// import xxx from "xxx"

const imgLists: Record<string, { default: string }> = import.meta.glob("./assets/*.jpg", { eager: true })
const imgArr = Object.values(imgLists).map(v => v.default)
console.log("imglists", imgArr)

// 懒加载自定义指令
let vLazy: Directive<HTMLImageElement, string> = async (el, bingding) => {
  console.log("21", bingding)
  const logo = await import("./assets/vue.svg")
  el.src = logo.default
  // 最重要的一步，判断图片是否在可视区域内
  // IntersectionObserver API 回调里的 options参数是个数组，其中数组内第一个对象里有个 intersectionRatio 属性
  // intersectionRatio 用来判断图片是否在可视区域内，当大于 0 时则表示出现在可视区域内
  const observer = new IntersectionObserver(options => {
    console.log("options", options[0])
    setTimeout(() => {
      if (options[0].intersectionRatio > 0) {
        el.src = bingding.value
        // 取消监听
        observer.unobserve(el)
      }
    }, 500)
  })
  // 开启监听
  observer.observe(el)
}
</script>

<style scoped>
img {
  width: 100%;
  min-height: 450px;
}
</style>
