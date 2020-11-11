<template>
  <div class="score_container">
    <!-- 分数 -->
    <div class="your_scores_container">
      <header class="your_scores">
        <span class="score_num">{{ num }}</span>
        <span class="fenshu">分!</span>
      </header>
      <div class="result_tip">{{ scoretips }}</div>
    </div>

    <div class="share_button" @click="again">再来一次</div>

    <div class="share_code">
      <header class="share_header">关注葡萄之家,获取答案.</header>
      <img src="/images/4-4.png" height="212" class="code_img" alt="" />
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    //#region
    let rightAnswer = reactive([2, 6, 10, 14, 18]); //正确答案
    let scoreTipsArr = [
      "你说，是不是把知识都还给小学老师了？",
      "还不错，但还需要继续加油哦！",
      "不要嘚瑟还有进步的空间！",
      "智商离爆表只差一步了！",
      "你也太聪明啦，葡萄之家欢迎你！"
    ];
    //分数
    let num = ref(0);
    //提示语渲染
    let scoretips = ref("");

    let store = useStore();

    let answerid = computed(() => store.state.answerid);
    function cret() {
      answerid.value.findIndex((item, index) => {
        if (item == rightAnswer[index]) {
          num.value += 20;
        }
      });
    }
    cret();

    function length() {
      if (num.value <= 20) {
        console.log(1);
        scoretips.value = scoreTipsArr[0];
      } else if (num.value <= 40) {
        scoretips.value = scoreTipsArr[1];
      } else if (num.value <= 60) {
        scoretips.value = scoreTipsArr[2];
      } else if (num.value <= 80) {
        scoretips.value = scoreTipsArr[3];
      } else if (num.value <= 100) {
        scoretips.value = scoreTipsArr[4];
      }
    }
    length();
    //#endregion
    let router = useRouter();
    function again() {
      store.dispatch("changenum");
      router.push("/");
    }

    return {
      num,
      // cret,
      scoretips,
      // length,
      // rightAnswer,
      again
    };
  }

  // data() {
  //   return {
  //     // rightAnswer: [2, 6, 10, 14, 18], //正确答案
  //     // scoreTipsArr: [
  //     //   "你说，是不是把知识都还给小学老师了？",
  //     //   "还不错，但还需要继续加油哦！",
  //     //   "不要嘚瑟还有进步的空间！",
  //     //   "智商离爆表只差一步了！",
  //     //   "你也太聪明啦，葡萄之家欢迎你！"
  //     // ],
  //     // //分数
  //     // num:0,
  //     // //提示语渲染
  //     // scoretips:""
  //   };
  // }

  //生命周期函数，进入页面加载数据
  // created () {
  //   this.cret()
  //   this.length()
  // },

  // computed: {
  //   //   ...mapState(['answerid'])
  // },

  // methods: {
  //   // cret(){
  //   //   this.answerid.findIndex((item,index)=>{
  //   //     if(item == this.rightAnswer[index]){
  //   //       this.num+=20
  //   //     }
  //   //   })
  //   //},
  //   // length(){
  //   //   if(this.num <= 20){
  //   //     this.scoretips=this.scoreTipsArr[0]
  //   //   }else  if(this.num <= 40){
  //   //     this.scoretips=this.scoreTipsArr[1]
  //   //   }else if(this.num <= 60){
  //   //     this.scoretips=this.scoreTipsArr[2]
  //   //   }else if(this.num <= 80){
  //   //     this.scoretips=this.scoreTipsArr[3]
  //   //   }else if(this.num <= 100){
  //   //     this.scoretips=this.scoreTipsArr[4]
  //   //   }
  //   // },

  //   // again() {
  //   //   this.$router.push("/");
  //   //   this.$store.dispatch("changenum");
  //   // }
  // }
};
</script>

<style lang="scss" scoped>
.score_container {
  height: 100%;
  background-image: url("/images/4-1.jpg");
}
.your_scores_container {
  width: 9.7rem;
  height: 9.1rem;
  background: url("/images/4-2.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 auto 0;
  position: relative;
  .your_scores {
    position: absolute;
    width: 100%;
    text-indent: 3.3rem;
    top: 4.7rem;
    font-size: 1.4rem;
    font-weight: 900;
    -webkit-text-stroke: 0.05rem #412318;
    font-family: "Microsoft YaHei";
    .score_num {
      font-family: Tahoma, Helvetica, Arial;
      color: #a51d31;
    }
    .fenshu {
      color: #a51d31;
    }
  }
  .result_tip {
    position: absolute;
    top: 7rem;
    width: 9rem;
    left: 0.6rem;
    color: #3e2415;
    font-size: 0.65rem;
    text-align: center;
  }
}
.share_button {
  width: 6.025rem;
  height: 2.4rem;
  line-height: 2.4rem;
  margin: 0.8rem auto 0;
  text-align: center;
  font-size: 1rem;
  color: yellow;
  background-color: rgba(0, 0, 0, 0.5);
}
.share_code {
  width: 5.3rem;
  margin: 1.5rem auto 0;
  .share_header {
    color: #664718;
    font-size: 0.475rem;
    font-family: "Microsoft YaHei";
    width: 7rem;
    font-weight: 500;
  }
  .code_img {
    height: 5.3rem;
    width: 5.3rem;
    margin-top: 0.5rem;
  }
}
.share_cover {
  position: fixed;
  bottom: 0;
  right: 0;
  top: 0;
  left: 0;
  background: url("/images/5-1.png") no-repeat;
  background-size: 100% 100%;
  opacity: 0.92;
}
.share_img {
  height: 10.975rem;
  width: 11.95rem;
  position: fixed;
  top: 0.5rem;
  left: 50%;
  margin-left: -5.975rem;
}
</style>
