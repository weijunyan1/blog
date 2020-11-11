import { createStore } from "vuex";

export default createStore({
  state(){
    return{
      firstname:'听说有个戏子在唱霸王别姬'
    }
  },
  mutations: {
    arr2(state){
      state.firstname="白宇"
    },
    //获取state中的数据
    arr(state,uname){
      state.firstname=uname
      // console.log(state.name)
    }

  },
  actions: {},
  modules: {}
});
