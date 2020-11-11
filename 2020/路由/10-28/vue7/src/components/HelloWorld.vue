<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3 @click="handleOtherChange">{{ name }}</h3>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data() {
    return {
      myname: "郑傻"
    };
  },

  methods: {
    //这个方法是用来触发Store中的mitations中的ChangeName方法的
    handleOtherChange(){
      let uname=this.myname
      //
      this.$store.commit('changeOtherName',uname)
      // console.log(name);
    }
  },

  computed: {
    ...mapState(["name"])
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






1、漫画2. 沙丘3、杂志4、传记。山6座，历史7座，瀑布9座，小说9座，树林10座，峡谷10座