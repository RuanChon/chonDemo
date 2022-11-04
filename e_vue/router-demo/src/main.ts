/*
 * @Author: Chon
 * @Date: 2022-11-01 16:41:48
 * @LastEditors: chon 724082712@qq.com
 * @LastEditTime: 2022-11-04 23:30:55
 * @FilePath: \my_study_vlog\e_vue\router-demo\src\main.ts
 * @Description: 文件说明
 */
import { createApp } from "vue"
import "./style.css"
import router from "./router"
import App from "./App.vue"

createApp(App).use(router).mount("#app")
