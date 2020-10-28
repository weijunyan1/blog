//1引入vue-router
import {createRouter,createWebHashHistory} from "vue-router";


//6.3导入对应组件
import Home from "../components/Home.vue"
import About from "../components/About.vue"

//6定义路由(routes)
const routes=[
    {path:'/',component:Home},
    {path:'/',component:About}
]
//6.2在components中创建对应组件



//2创建路由
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes,//此处的routes是2步中的定义路由
})



//3.导出路由
export default router;
