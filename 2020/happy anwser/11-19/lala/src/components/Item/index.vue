<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ titleNum }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="questions.length > 0">
          <!-- 题干 -->
          <header class="item_title">
            {{ questions[titleNum - 1].topic_name }}
          </header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in questions[titleNum - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="dataPut(item.topic_answer_id, index)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: this.userindex == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.answer_name }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span
        class="next_item button_style"
        v-if="titleNum < questions.length"
        @click="dataadd"
      ></span>
      <span class="submit_item button_style" v-else @click="dataedd"></span>
    </section>
  </div>
</template>

<script>
//import { ref } from 'vuex';
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    //#region   初始化数据
    let store = useStore();
    // store.dispatch = "getData";
    store.dispatch("getData");
    //#endregion

    //响应式：当数据发生变化，视图就会跟着发生变化，叫响应式
    //如何判断是否是响应式：当你获取的元素被包裹在proxy的对象中时就是响应式
    //#region   渲染题目页面头部
    let questions = computed(() => store.state.questions);
    setTimeout(() => {
      console.log(questions);
    }, 2000);
    //console.log(questions);
    //#endregion

    //#region   渲染题目页面头部
    let titleNum = computed(() => store.state.titleNum);
    //#endregion

    //#region   点击选中
    let userid = ref(null);
    let userindex = ref(null);

    function dataPut(id, index) {
      userid.value = id;
      userindex.value = index;
    }
    //#endregion

    //#region
    function dataadd() {
      if (userid.value != null) {
      
        //将用户选择答案的id存入异步方法中
        store.dispatch("answer", userid.value);
        //让题号增加
        store.dispatch("titleaddnum");
          userid.value = userindex.value = null;
      } else {
        alert("请选择一个答案");
      }
    }
    //#endregion

    //#region
    let router = useRouter();
    function dataedd() {
      if (userindex.value != null) {
        userindex.value = null;
        //将用户选择答案的id存入异步方法中
        store.dispatch("answer", userid.value);
        router.push("/score");
      } else {
        alert("请选择一个答案");
      }
    }
    //#endregion

    //#region
    //#endregion

    return {
      titleNum,
      questions,
      dataPut,
      userindex,
      dataadd,
      dataedd
    };
  }

  // data() {
  //   return {
  //     userid: null,
  //     userindex: null
  //   };
  // },
  // created() {
  //   this.$store.dispatch("getData");
  // },
  // computed: {
  //   ...mapState(["questions","titleNum"])
  // },
  // methods: {
  // dataPut(id, index) {
  //   (this.userid = id), (this.userindex = index);
  // },
  // dataadd() {
  //   if (this.userid != null) {
  //     //将用户选择答案的id存入异步方法中
  //     this.$store.dispatch("answer", this.userid);
  //     //让题号增加
  //     this.$store.dispatch("titleaddnum");
  //     this.userid = this.userindex = null;
  //   } else {
  //     alert("请选择一个答案");
  //   }
  // },
  // dataedd() {
  //   if (this.userid != null) {
  //     //将用户选择答案的id存入异步方法中
  //     this.$store.dispatch("answer", this.userid);
  //     this.$router.push("/score");
  //     this.userid = this.userindex = null;
  //   } else {
  //     alert("请选择一个答案");
  //   }
  // }
  // }
};
</script>

<style lang="scss">
.home_container {
  height: 100%;
  background-image: url("/images/1-1.jpg");
}
.next_item {
  background-image: url("/images/2-2.png");
}

.submit_item {
  background-image: url("/images/3-1.png");
}

.item_back {
  background-image: url("/images/2-1.png");
  background-size: 100% 100%;
}

.item_title {
  font-size: 0.65rem;
  color: #fff;
  line-height: 0.7rem;
}

.item_list_container {
  margin: 2.5rem;
  padding: 0;
}

.item_list {
  font-size: 0;
  margin-top: 0.4rem;
  width: 10rem;
  span {
    display: inline-block;
    font-size: 0.6rem;
    color: #fff;
    vertical-align: middle;
  }
  .option_style {
    height: 0.725rem;
    width: 0.725rem;
    border: 1px solid #fff;
    border-radius: 50%;
    line-height: 0.725rem;
    text-align: center;
    margin-right: 0.3rem;
    font-size: 0.5rem;
    font-family: "Arial";
  }
  .has_choosed {
    background-color: #ffd400;
    color: #575757;
    border-color: #ffd400;
  }
  .option_detail {
    width: 7.5rem;
    padding-top: 0.11rem;
  }
}
</style>
