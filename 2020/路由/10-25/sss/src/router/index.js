import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";

import Users from "../components/Users";

const routes = [
  {
    //路由规则
    path: "/",
    //当你到根路径的时候要到其他路径
    //重定项到那个路由
    redirect: "/users"
  },

  {
    //路由规则
    path: "/users",
    //要展示的组件
    component: Users
  },

  {
    path: "/rights",
    //当path中的路由被触发是时候，动态的懒加载改组件，而不是当应用启动的时候就去加载
    component: () => import("../components/Rights.vue")
  },

  {
    path: "/goods",
    //当path中的路由被触发是时候，动态的懒加载改组件，而不是当应用启动的时候就去加载
    component: () => import("../components/Goods.vue")
  },

  {
    path: "/orders",
    //当path中的路由被触发是时候，动态的懒加载改组件，而不是当应用启动的时候就去加载
    component: () => import("../components/Orders.vue")
  },

  {
    path: "/settings",
    //当path中的路由被触发是时候，动态的懒加载改组件，而不是当应用启动的时候就去加载
    component: () => import("../components/Settings.vue")
  },

  {
    path: "/userinfo/:id",
    //当path中的路由被触发是时候，动态的懒加载改组件，而不是当应用启动的时候就去加载
    component: () => import("../components/userinfo.vue"),
    props: true
  }

  // // 在第二行可以看到home的路径已被获取并从新定义（导入）
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home//在引入
  // },
  // {
  //   //并没有导入并使用lazy-loaded进行了一个懒加载
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting    路由级别的代码切割
  //   // this generates a separate chunk (about.[hash].js) for this route    当路由被访问后进行懒加载
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
