import { createApp } from "vue"
import App from "./App.vue"
import HelloWorld from "./components/HelloWorld.vue"

createApp(App).component("HelloWorld", HelloWorld).mount("#app")
