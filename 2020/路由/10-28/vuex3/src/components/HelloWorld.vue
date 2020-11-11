<template>
  <div class="hello">
    <h3>{{name}}</h3>
  </div>
</template>

<script>

//从vuex这个插件中引入了mapState的方法，根据mapState这个方法获取数据库index.js中的数据，并使用...mapState进行

import {mapState} from "vuex"

export default {
  name: "HelloWorld",
  props: {
    msg:String
  },
  computed:{
    ...mapState(['name'])
  }
};
</script>





<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
