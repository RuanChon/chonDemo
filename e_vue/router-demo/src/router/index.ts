/*
 * @Author: Chon
 * @Date: 2022-11-08 23:30:24
 * @Description: 文件说明
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { createVNode, render } from "vue"
import LoadingBar from "@/components/loadingBar.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    alias: ["/index"],
    name: "Index",
    component: () => import("@/pages/index.vue"),
  },
  {
    path: "/mass",
    name: "Mass",
    component: () => import("@/components/Mass.vue"),
  },
  {
    path: "/custom",
    name: "Custom",
    component: () => import("../components/Custom.vue"),
  },
  {
    path: "/detail",
    name: "Detail",
    component: () => import("../components/Detail.vue"),
    children: [
      {
        path: "/detail/color",
        name: "Color",
        component: () => import("../components/Color.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    meta: { title: "404" },
    component: () => import("@/pages/404.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

// 路由白名单
const whileList = ["/", "/index", "/login"]

// 将进度条转为虚拟DOM 后挂载到 body上
const LoadingVNode = createVNode(LoadingBar)
render(LoadingVNode, document.body)

// 路由前置守卫
router.beforeEach((to, form, next) => {
  LoadingVNode.component?.exposed?.startLoading()
  if (whileList.includes(to.path) || localStorage.getItem("token")) {
    console.log("to=", to)
    next()
  } else {
    // 注意这里如果不把 login 加入白名单，那么就会陷入死循环
    next("/login")
  }
})

// 路由后置守卫
router.afterEach((to, from) => {
  LoadingVNode.component?.exposed?.endLoading()
})

export default router
