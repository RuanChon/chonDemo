<template>
  <div class="trees" v-for="item in data">
    <input v-model="item.checked" type="checkbox" />
    <span>{{ item.name }}</span>
    <Tree v-if="item?.children?.length" :data="item?.children"></Tree>
  </div>
</template>

<script name="tree" lang="ts" setup>
import { ref, reactive, defineProps } from "vue"

interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}

defineProps<{
  data?: Tree[]
}>()
</script>

<style scoped>
.trees {
  margin-left: 15px;
}
</style>
