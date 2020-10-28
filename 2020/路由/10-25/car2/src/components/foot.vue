<template>
  <div class="total">
      <span>总价{{mony}}</span>
      <button>结算</button>
  </div>
</template>

<script>
export default {
    //子组件获取父组件的传值
    props:["list"],
    computed:{
        money(){
            let num=0,
            this.list.forEach(item=>{
                if(item.num<0){
                    item.num=0
                }
                num+=item.price*item.num
            })
            return num
        }
    }
}
</script>

<style>

</style>