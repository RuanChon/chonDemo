<!--
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 客制化键盘列表
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
    name: "Aero75",
    price: 2699,
    date: "2022-10-8",
  },
  {
    id: 2,
    name: "zoom65",
    price: 1099,
    date: "2022-8-1",
  },
  {
    id: 3,
    name: "QK75",
    price: 1188,
    date: "2022-10-23",
  },
  {
    id: 3,
    name: "Suger80",
    price: 699,
    date: "2022-7-12",
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
