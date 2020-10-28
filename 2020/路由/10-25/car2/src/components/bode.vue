<template>
    <div>
    <div class="item" v-for="(item) in list" :key="item.id">
      <img :src="item.img">
      <div class="name">{{item.name}}</div>
      <div class="change">
        <a href="" @click.prevent="cut(item.id)">—</a>
        <input type="text" class="num" v-model="i.num" />
        <a href="" @click.prevent="plac(item.id)">+</a>
      </div>
      <div class="del" @click="remove(item.id)">x</div>
    </div>
  </div>
</template>

<script>
export default {
   //子组件获取父组件的传值
   props:[list],
   //方法
   methods:{
       cut(id){
           //子组件通过$emit触发父组件的自定义事件
           this.$emit('change',{
               type:'cut',
               id
           })
       },
       plas(id){
           this.$emit('change',{
               type:'plas',
               id
           })
       },
       remove(id){
           this.$emit('change',{
               type:'remove',
               id
           })
       },
       
   }
}
</script>

<style>

</style>