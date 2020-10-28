<template>
  <div class="total">
      <span>总价{{money}}</span>
      <button>结算</button>
  </div>
</template>

<script>
export default {
    //子组件获取父组件传值
    props:["list"],
    //计算属性
    computed:{
        //函数
        money(){
            //定义一个累加值（总价）
            let num=0;
            //循环遍历
            this.list.forEach(item=>{
                if(item.num<0){
                    item.num=0;
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