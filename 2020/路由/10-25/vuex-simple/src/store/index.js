// //引入
// import {createStore} from "vuex"

// //配置
// let store=createStore({
//     //存数据的
//     state(){
//         return{

//         }
//     },

//     //存方法的（存同步方法，存异步方法）
//     mutations:{},
//     actions:{},

//     //存计算属性的类似于computed
//     getters:{}

// })


// //导出配置
// export default store









// //引入
 import {createStore} from "vuex"

// 导出配置
 export default createStore({
     //存数据的
     state(){
         return{

         }
     },

     //存方法的（存同步方法，存异步方法）
     mutations:{},
     actions:{},

     //存监听属性的类似于computed
     getters:{}

 })



 //注意：其中的createStore代表创建仓库  store代表数据仓库，为后期数据操作提供了各种各样的方法



 //在store的idex.js中导出配置后，要在main.js中进行导入


