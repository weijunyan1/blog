<template>
  <div class="home_container">
    <section>
      <!-- 头部标签 -->
      <header class="top_tips">
        <span class="num_tip">题目{{ ject }}</span>
      </header>
      <!-- 题目内容 -->
      <div class="item_back item_container_style">
        <div class="item_list_container" v-if="quetions.length > 0">
          <!-- 题干 -->
          <header class="item_title">
            {{ quetions[ject - 1].topic_name }}
          </header>
          <!-- 选项 -->
          <ul>
            <li
              class="item_list"
              v-for="(item, index) in quetions[ject - 1].topic_answer"
              :key="item.topic_answer_id"
              @click="datain(item.topic_answer_id, index)"
            >
              <span
                class="option_style"
                :class="{ has_choosed: this.userindex == index }"
                >{{ String.fromCharCode(65 + index) }}</span
              >
              <span class="option_detail">{{ item.topic_answer_id }}</span>
            </li>
          </ul>
        </div>
      </div>
      <span class="next_item button_style" v-if="ject < quetions.length"
      @click="addnum"
      ></span>
      <span class="submit_item button_style" v-else
       @click="eddnum"
      ></span>
    </section>
  </div>
</template>

<script>
//使用vuex的mapState方法
import { mapState } from "vuex";
export default {
    
  data() {
    return {
      userid: null,
      userindex: null
    };
  },
  computed: {
    ...mapState(["quetions", "ject"])
  },
  //生命周期函数
  created() {
    //调用异步方法
    this.$store.dispatch("getData");
  },
  methods: {
      //将数据赋值到data中
    datain(id, index) {
      this.userid = id;
      this.userindex = index;
    },
    addnum(){
        //如果用户点击了选项
        if(this.userid != null){
            //对相应的id进行存储
            this.$store.dispatch('idadd',this.userid)
            //并使题号增加
            this.$store.dispatch('jectadd')
            this.userid=this.userindex=null
        }
    },
    eddnum(){
        if(this.userid != null){
            this.$store.dispatch('idadd',this.userid)
            this.$router.push('/score')
            this.userid=this.userindex=null
        }
    }
  }
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
