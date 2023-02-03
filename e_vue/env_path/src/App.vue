<!--
 * @Author: Chon
 * @Date: 2022-10-27 23:03:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-03 17:01:26
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

  fetch("/user")
})
</script>

<style scoped></style>
