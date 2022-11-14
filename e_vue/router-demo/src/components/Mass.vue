<!--
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 量产键盘列表
-->
<template>
  <div class="item" v-for="item in list" :v-key="item.id">
    <div>{{ item.name }}</div>
    <div @click="toDetail(item)">详情</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const list = ref([
  {
    id: 1,
    name: "NJ68",
    price: 680,
    date: "2021-3-26",
  },
  {
    id: 2,
    name: "CMK68",
    price: 580,
    date: "2022-4-21",
  },
  {
    id: 3,
    name: "GAS67",
    price: 199,
    date: "2021-9-2",
  },
])

function toDetail(item: any) {
  console.log("item", item)

  router.push({
    path: "/Detail",
    query: item,
  })
}
</script>

<style scoped>
.item {
  display: flex;
  justify-items: center;
  padding: 5px 10px;
}
.item div {
  width: 100px;
}
.item div:last-child {
  color: #666;
  cursor: pointer;
}
</style>
