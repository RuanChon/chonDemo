/*
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 文件说明
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: () => import("../components/Mass.vue"),
  },
  {
    path: "/Custom",
    name: "Custom",
    component: () => import("../components/Custom.vue"),
  },
  {
    path: "/Detail",
    name: "Detail",
    component: () => import("../components/Detail.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
