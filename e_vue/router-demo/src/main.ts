/*
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 文件说明
 */
import { createApp } from "vue"
import "./style.css"
import router from "./router"
import App from "./App.vue"

createApp(App).use(router).mount("#app")
