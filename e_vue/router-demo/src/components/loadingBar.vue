<!--
 * @Author: Chon
 * @Date: 2022-12-03 17:01:52
 * @Description: 文件说明
-->
<template>
  <div class="wraps">
    <div ref="prog" class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"

let speed = ref<number>(1)
let prog = ref<HTMLElement>()
let timer = ref<number>(0)

const startLoading = () => {
  let dom = prog.value as HTMLElement
  speed.value = 1
  // requestAnimationFrame 渲染器，比定时器更节能
  timer.value = window.requestAnimationFrame(function fn() {
    if (speed.value < 90) {
      speed.value += 1
      dom.style.width = speed.value + "%"
      // 利用递归实现动画不停渲染
      timer.value = window.requestAnimationFrame(fn)
    } else {
      speed.value = 1
      // 清除渲染器
      window.cancelAnimationFrame(timer.value)
    }
  })
}

const endLoading = () => {
  let dom = prog.value as HTMLElement
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      speed.value = 100
      dom.style.width = speed.value + "%"
    })
  }, 800)
}

// 将组件方法暴露给外部
defineExpose({
  startLoading,
  endLoading,
})
</script>

<style scoped>
.wraps {
  width: 100%;
  height: 4px;
  position: fixed;
  top: 0;
}
.bar {
  width: 0;
  height: inherit;
  background-color: rgb(195, 63, 111);
}
</style>
