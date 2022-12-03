/*
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 文件说明
 */
import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "./style.css"

createApp(App).use(router).use(ElementPlus).mount("#app")
