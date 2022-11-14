<!--
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 文件说明
-->
<template>
  <div>
    <button hover-class="button-hover" @click="toLink('mass')">量产</button>
    <button hover-class="button-hover" @click="toLink('custom')">客制化</button>
    <div class="line"></div>
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function toLink(type: string) {
  router.push({
    name: type === "mass" ? "Index" : "Custom",
  })
}
</script>

<style scoped>
button {
  margin: 10px;
}
.line {
  width: 404px;
  height: 1px;
  background-color: #333;
  margin: 10px 0;
}
</style>
