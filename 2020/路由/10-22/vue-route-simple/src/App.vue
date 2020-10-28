<template>
<!-- 7.创建跟组件 -->

<div class="route">
  <!-- 8添加路由连接 -->
  <!-- to中写路由规则 to属性相当于href--> 
   <router-link to="/">首页</router-link>
   <!-- 此处的to中 的内容和index.js中的定义路由一致 -->
    <router-link to="/about">关于</router-link>
 
    <!-- 9导航和导航对应路由显示内容   添加路由填充位-->
    <router-view></router-view>
</div>

</template>

<script>


export default {
  name: "App",

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
