import { createRouter, createWebHashHistory } from "vue-router";
//在路由文件夹中引入Home子路由
import Home from "@/components/Home";

const routes = [
  //写加载路径和名称
  { path: "/", component: Home },
  //懒加载item
  { path: "/item", component: () => import("../components/Item") },
  //懒加载score
  { path: "/score", component: () => import("../components/score") }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
