//拿到vue  
import {createApp} from "vue";
//引入app.vue
import App from "./App.vue";
//引入index.js
import router from "./routes/index"


createApp(App)
// 做挂载
.use(router)
.mount('#app')
