// //引入
import {createStore} from "vuex"

// 导出配置
 export default createStore({
     //存数据的
     state(){
         return{
             name:"小绿",
             age:18

         }
     },

     //存方法的（存同步方法，存异步方法）
     mutations:{},
     actions:{},

     //存监听属性的类似于computed
     getters:{}

 })



//注意：此处的state中的数据只能通过下方的    mutations:{},  actions:{},  getters:{}
//进行改变 ，无法通过components中的vue文件进行改变


   
