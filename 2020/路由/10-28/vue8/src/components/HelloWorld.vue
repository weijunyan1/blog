<template>
  <div class="hello">
    <h1 @click="arr">{{ firstname }}</h1>
    <h2 @click="arr2"> asd </h2>
   
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },

  data(){
    return{
      lastname:"想不想知道她是谁嘞"
    }
  },


  methods:{
    ...mapMutations(['arr2','arr'])
  },

  computed:{
    ...mapState(["firstname"])
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
