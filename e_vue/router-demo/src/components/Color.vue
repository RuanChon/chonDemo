<!--
 * @Author: Chon
 * @Date: 2022-11-15 16:58:15
 * @Description: 文件说明
-->
<template>
  <div>推荐颜色</div>
</template>

<script setup lang="ts">
import { onMounted, ref, toRaw } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

onMounted(() => {
  console.log("color", route.params)
})
</script>

<style scoped></style>
