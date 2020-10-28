import { createRouter, createWebHashHistory } from "vue-router";

//获取users的路径
import Users from "../components/Users"

const routes = [
  {
    //设置重定项：当你去到根路径是时候，要去到其他的路径
    path:'/',
    redirect:"/users"
  },

  {
    //路由规则
    path:'/users',
    //所要展示的组件
    component:Users
  },

  {
    //定义路由规则
    path:'/rights',
    //当路由中的数据被触发的时候，进行动态的懒加载该组件。并不是一旦应用启动就去进行加载
    component:()=>import("../components/Rights.vue")

  },


  {
    //定义路由规则
    path:'/goods',
    //当路由中的数据被触发的时候，进行动态的懒加载该组件。并不是一旦应用启动就去进行加载
    component:()=>import("../components/Goods.vue")

  },


  {
    //定义路由规则
    path:'/orders',
    //当路由中的数据被触发的时候，进行动态的懒加载该组件。并不是一旦应用启动就去进行加载
    component:()=>import("../components/Orders.vue")

  },

  {
    //定义路由规则
    path:'/settngs',
    //当路由中的数据被触发的时候，进行动态的懒加载该组件。并不是一旦应用启动就去进行加载
    component:()=>import("../components/Settngs.vue")

  },
  

  {
    //定义路由规则
    path:'/userinfo/:id',
    //当路由中的数据被触发的时候，进行动态的懒加载该组件。并不是一旦应用启动就去进行加载
    component:()=>import("../components/Userinfo"),
    //传参
    props:true


  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
