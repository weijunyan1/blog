import { createStore } from "vuex";

export default createStore({
  state(){
    return{
      name:'张三'
    }
  },
  mutations: {
    changeOtherName(state,uname){
      state.name=uname
      // console.log(state.name)
    }
  },
  actions: {},
  modules: {}
});
