<template>
  <div class="hello">
    <h3>我叫{{name}}，我今年{{age}}岁了</h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  //计算属性
  computed:{
    //this.$store.state.属性名
    name(){
      return this.$store.state.nmae;
      //return 
    },

    age(){
      return this.$store.state.age
    }


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
