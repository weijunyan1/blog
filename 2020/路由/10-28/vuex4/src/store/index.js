//引入
import { createStore } from "vuex";


//导出配置
export default createStore({
  state(){
    return{
      name:'你好明天'
    }
  },


  mutations: {
    //获取state中的数据
    //传参问题
    changeName(state){
      state.name="历史"
    }
  },
  actions: {},
  modules: {}
});
