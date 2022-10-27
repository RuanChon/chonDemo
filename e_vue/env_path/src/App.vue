<!--
 * @Author: Chon
 * @Date: 2022-10-27 23:03:49
 * @LastEditors: chon 724082712@qq.com
 * @LastEditTime: 2022-10-27 23:17:40
 * @FilePath: \my_study_vlog\e_vue\env_path\src\App.vue
 * @Description: 文件说明
-->
<template>
  <div>app</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

onMounted(() => {
  console.log(import.meta.env)
})
</script>

<style scoped></style>
