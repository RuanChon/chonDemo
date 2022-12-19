<!--
 * @Author: Chon
 * @Date: 2022-12-03 15:20:25
 * @Description: 文件说明
-->
<template>
  <div>这里是键盘首页 index</div>
  <button hover-class="button-hover" @click="toLink('mass')">量产</button>
  <button hover-class="button-hover" @click="toLink('custom')">客制化</button>
  <div class="colorDiv">
    <img src="@/assets/zhiyin.jpg" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

function toLink(type: string) {
  router.push({
    path: type === "mass" ? "/mass" : "/custom",
  })
}
</script>

<style scoped>
button {
  margin: 10px;
}
.colorDiv {
  width: 350px;
  margin: 20px 0;
}
.colorDiv img {
  width: 100%;
}
</style>
