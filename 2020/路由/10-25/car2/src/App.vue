<template>
  <div id="app">
    <div class="cart">
      <!-- 创建自定义事件 -->
      <HelloWorld :uname="uname"></HelloWorld>
      <bode :list="list"></bode>
      <foot :list="list"></foot>
    </div>
  </div>
</template>

<script>

//获取图片所在路径，并对路径进行定义
import img1 from "@/assets/a.jpg"
import img2 from "@/assets/b.jpg"
import img3 from "@/assets/c.jpg"
import img4 from "@/assets/d.jpg"
import img5 from "@/assets/e.jpg"


//获取子组件所在路径，并对子组件进行定义
import HelloWorld from "./components/HelloWorld";
import bode from "./components/bode"
import foot from "./components/foot"


export default {
  //获取数据
  data(){
    return{
       uname: "张三",
      list: [
        {
          id: 1,
          name: "TCL彩电",
          price: 1000,
          num: 1,
          img: img1
        },
        {
          id: 2,
          name: "机顶盒",
          price: 1000,
          num: 1,
          img: img2
        },
        {
          id: 3,
          name: "海尔冰箱",
          price: 1000,
          num: 1,
          img: img3
        },
        {
          id: 4,
          name: "小米手机",
          price: 1000,
          num: 1,
          img: img4
        },
        {
          id: 5,
          name: "PPTV电视",
          price: 1000,
          num: 2,
          img: img5
        }
      ]
    }
  },


  //将获取的子组件路径进行二次定义
  components:{
    HelloWorld:HelloWorld,
    bode,
    foot,
  },


  //方法
  methods:{
    chang(val){
      let num=this.list.findIndex(item=>item.id==val.id);
      if(val.id==this.list[num].id){
        if(val.type=="cut"){
          this.list[num].num++
        }else if(val.type=="plas"){
          this.list[num].num--
        }else if(val.type=="remove"){
          this.list.splice(num,1)
        }
      }
      
    }
  }


}
</script>

<style>
.container .cart {
      width: 300px;
      /*background-color: lightgreen;*/
      margin: auto;
    }

    .container .title {
      background-color: lightblue;
      height: 40px;
      line-height: 40px;
      text-align: center;
      /*color: #fff;*/
    }

    .container .total {
      background-color: #FFCE46;
      height: 50px;
      line-height: 50px;
      text-align: right;
    }

    .container .total button {
      margin: 0 10px;
      background-color: #DC4C40;
      height: 35px;
      width: 80px;
      border: 0;
    }

    .container .total span {
      color: red;
      font-weight: bold;
    }

    .container .item {
      height: 55px;
      line-height: 55px;
      position: relative;
      border-top: 1px solid #ADD8E6;
    }

    .container .item img {
      width: 45px;
      height: 45px;
      margin: 5px;
    }

    .container .item .name {
      position: absolute;
      width: 90px;
      top: 0;
      left: 55px;
      font-size: 16px;
    }

    .container .item .change {
      width: 100px;
      position: absolute;
      top: 0;
      right: 50px;
    }

    .container .item .change a {
      font-size: 20px;
      width: 30px;
      text-decoration: none;
      background-color: lightgray;
      vertical-align: middle;
    }

    .container .item .change .num {
      width: 40px;
      height: 25px;
    }

    .container .item .del {
      position: absolute;
      top: 0;
      right: 0px;
      width: 40px;
      text-align: center;
      font-size: 40px;
      cursor: pointer;
      color: red;
    }

    .container .item .del:hover {
      background-color: orange;
    }
</style>