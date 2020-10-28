import Vue from "vue"
import App from "./App.vue";
//4.导入路由
import routes from "./routes"
// import { createApp } from "vue";
//5.1挂载的准备工作
const app=Vue.createApp(App)

//5.把路由挂载到app实例上
//5.2
app.use(routes)
//5.3
app.mount('#app')
//createApp(App).mount("#app");
