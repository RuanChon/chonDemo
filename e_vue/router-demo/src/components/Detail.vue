<!--
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 键盘详情
-->
<template>
  <ul>
    <li>套件名称：{{ route.query.name }}</li>
    <li>发售价格：{{ route.query.price }}</li>
    <li>发售时间：{{ route.query.date }}</li>
  </ul>
  <div @click="toColor">是啥颜色</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

function toColor() {
  router.push({
    name: "Color",
    params: {
      id: 13,
    },
  })
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0 10px;
  margin: 0;
}
ul li {
  margin-bottom: 5px;
}
</style>
