<template>
    <div>
    <div class="item" v-for="i in list" :key="i.id">
      <img :src="i.img" >
      <div class="name">{{i.name}}</div>
      <div class="change">
        <a href="" @click.prevent="cut(i.id)">—</a>
        <input type="text" class="num"  v-model="i.num"/>
        <a href="" @click.prevent="plas(i.id)">+</a>
      </div>
      <div class="del" @click="remove(i.id)">x</div>
    </div>
  </div>
</template>

<script>
export default {
    //数据
    props:["list"],
    //方法
    methods:{
        cut(id){
            // console.log(id)
            this.$emit("change",{
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
        }
    }

}
</script>

<style>

</style>