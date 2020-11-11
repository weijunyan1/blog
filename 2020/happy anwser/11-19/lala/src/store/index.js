import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state() {
    return {
      //活动周数
      leave: "第一周",
      //第几题
      titleNum: 1,
      //数据库
      questions: [],
      //答案
      answerid: []
    };
  },
  mutations: {
    indexData(state, payload) {
      // console.log(payload);
      state.questions = payload.data;
     
    },
    //在同步中书写异步定义好的添加事件
    addanswer(state, payload) {
      state.answerid.push(payload);
    },
    //写添加题目项的方法
    addtitlenum(state) {
      state.titleNum += 1;
    }
  },

  actions: {
    async getData(context) {
      let res = await axios("/data/question.json");
      context.commit("indexData", res);
    },

    //在异步中书写item子组件中定义的异步事件
    answer(context, payload) {
      context.commit("addanswer", payload);
    },

    //在异步中继续写在子组件定义好的添加题目事件
    titleaddnum(context) {
      context.commit("addtitlenum");
    },

    changenum(context) {
      context.state.titleNum = 1;
      context.state.answerid.splice(0);
    }
  },
  modules: {}
});
