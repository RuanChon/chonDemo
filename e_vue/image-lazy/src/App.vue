<template>
  <div>
    <HelleWorld :tips="tips" @setTitle="getTitle" />
    <h3>{{ title }}</h3>
    <img v-lazy="item" v-for="item in imgArr" />
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import type { Directive } from "vue"
import HelleWorld from "./components/HelloWorld.vue"

const tips = "请在开发者工具调整为移动端查看"
const title = ref()
const getTitle = (val: string) => {
  title.value = val
}

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
let vLazy: Directive<HTMLImageElement, string> = async (el, imgData) => {
  // console.log("21", imgData)
  const logo = await import("./assets/vue.svg")
  el.src = logo.default
  // 最重要的一步，判断图片是否在可视区域内
  // IntersectionObserver API 回调里的 options参数是个数组，其中数组内第一个对象里有个 intersectionRatio 属性
  // intersectionRatio 用来判断图片是否在可视区域内，当大于 0 时则表示出现在可视区域内
  const observer = new IntersectionObserver(options => {
    // console.log("options", options[0])
    setTimeout(() => {
      if (options[0].intersectionRatio > 0) {
        el.src = imgData.value
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
