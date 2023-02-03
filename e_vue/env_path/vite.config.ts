import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // 使用 proxy 代理跨域
    proxy: {
      "/user": {
        target: "http://localhost:1998",
        // rewrite: path => {
        //   path.replace(/^\/api/, "")
        // },
      },
    },
  },
})
