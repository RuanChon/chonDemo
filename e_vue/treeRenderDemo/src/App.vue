<template>
  <div>
    <HelloWorld></HelloWorld>
    <Tree :data="data"></Tree>
  </div>
</template>

<script lang="ts" setup>
import Tree from "./components/tree.vue"
import { reactive } from "vue"

interface Tree {
  name: string
  checked: boolean
  children?: Tree[]
}

// mock
const data = reactive<Tree[]>([
  {
    name: "1",
    checked: true,
    children: [
      {
        name: "1-1",
        checked: false,
      },
      {
        name: "1-2",
        checked: true,
        children: [
          {
            name: "1-2-1",
            checked: false,
          },
        ],
      },
    ],
  },
  {
    name: "2",
    checked: true,
  },
  {
    name: "3",
    checked: true,
    children: [
      {
        name: "3-1",
        checked: true,
      },
    ],
  },
])
</script>
