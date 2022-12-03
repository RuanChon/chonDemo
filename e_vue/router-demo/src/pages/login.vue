<!--
 * @Author: Chon
 * @Date: 2022-12-03 15:20:09
 * @Description: 文件说明
-->
<template>
  <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="80px" class="keyForm">
    <el-form-item label="账户" prop="admin">
      <el-input v-model="ruleForm.admin" />
    </el-form-item>
    <el-form-item label="密码" prop="pw">
      <el-input v-model="ruleForm.pw" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import { useRouter } from "vue-router"
import type { FormInstance, FormRules } from "element-plus"

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  admin: [
    { required: true, message: "请输入账户", trigger: "change" },
    { min: 3, max: 5, message: "账户长度 3 to 5", trigger: "blur" },
  ],
  pw: [
    {
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
})
const ruleForm = ref({
  admin: "",
  pw: "",
})

function submitForm() {
  ruleFormRef.value?.validate(valid => {
    console.log("11221", valid)
    if (valid) {
      localStorage.setItem("token", "1")
      router.push({
        path: "/",
      })
    }
  })
}
</script>

<style scoped>
.keyForm {
  width: 300px;
  margin: 30vh auto;
}
</style>
