<template>
  <div>
    <h3>用户管理页面</h3>
    <!-- 列表 -->
    <table>
      <!-- 表头 -->
      <thead>
        <th>编号</th>
        <th>姓名</th>
        <th>年龄</th>
        <th>操作</th>
      </thead>
      <!-- 列表内容 -->
      <!--  :data-index="index"  ???????????   -->
      <tbody>
        <tr v-for="(item, index) in list" :key="item.id" :data-index="index">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <!-- 编程式导航   给详情按钮添加点击事件 并传一个id -->
          <td><a href="" @click.prevent="handkeLink(item.id)">详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  //写入列表数据
  data() {
    return {
      list: [
        { id: 1, name: "张三", age: 10 },
        { id: 2, name: "李四", age: 20 },
        { id: 3, name: "王五", age: 30 },
        { id: 4, name: "赵六", age: 40 }
      ]
    };
  },

  methods: {
    //此处所要达成的功能：当点击a标签的时候，使用编程式导航跳转到新路由下面的页面
    //上面出一个id，这里就接收一个id
    handkeLink(id) {
      //   console.log();
      //this.$router.push("/userinfor/" + id);
      this.$router.push("/userinfo/"+id)
    }
  }
};
</script>

<style>
</style>