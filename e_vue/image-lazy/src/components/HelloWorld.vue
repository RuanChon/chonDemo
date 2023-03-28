<template>
  <div class="card">{{ tips }}</div>
</template>

<script setup lang="ts">
import { defineProps, onMounted, useAttrs } from "vue"

const emits = defineEmits(["setTitle"])
defineProps({
  tips: String,
})

const attrs = useAttrs()
const setTitle = "图片懒加载"

onMounted(() => {
  emits("setTitle", setTitle)
})
</script>

<style scoped>
.card {
  line-height: 50px;
}
</style>
