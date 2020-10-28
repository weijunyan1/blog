//引入vue-router
import{} from "vue-router";
//引入子组件
import Home from "../components/Home.vue"
import About from "../components/About.vue"


//挂载子组件
const routers=[
    //重定向
    //如果要重定向，那么就直接在路由规则上面添加一行
    //这可以使我们在访问/的时候自动跳转到/home
    {
        path:'/',redirect:'/home'
    },

    {
        path:'/',
        component:Home
    },
    {
        path:'/about',
        component:About
    },

];


//2创建路由
const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes=routes
})



//3.导出路由
export default router;