import { createStore } from "vuex";
//使用axios在异步中进行数据获取
import axios from 'axios';

export default createStore({
  state() {
    return{
      //周几
      leave:'第一周',
      //第几题
      ject:1,
      //数据存放
      quetions:[],
      //答案id存放
      answers:[]
    }
  },
  mutations: {
    //添加
    initdata(state,payload){
      state.quetions = payload.data
    },
    //将数据添加到答案id中
    addid(state,payload){
      state.answers.push(payload)
    },
    //使题号加1
    addject(state){
      state.ject +=1
    },
    //修改题号
    chanfeagain(state){
      state.ject = 1
    },
    //清除存储的答案id
    chan(state){
      state.answers.splice(0)
    }

  },
  actions: {
    //从publice的dat中获取数据
   async getData(context){
     let arc = await axios('/data/question.json')
     context.commit('initdata',arc)
   },

   idadd(context,payload){
     context.commit("addid",payload)
   },
   //题号加一
   jectadd(context){
     context.commit('addject')
   },
//修改题号，清空数据
   againchange(context){
     context.commit('chanfeagain')
     context.commit('chan')
   }
   
  },

  modules: {}
});
