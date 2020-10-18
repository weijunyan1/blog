// 配置基准URL
axios.defaults.baseURL = 'http://localhost:3000';
let vm = Vue.createApp({
  // data数据域
  data() {
    return {
      // 定义一个boolean遍历
      submitFlag: false,
      flag: false,
      id: '',
      name: "",
      books: ""
    }
  },
  created() {
    // 当打开页面的时候 渲染数据 调用 handleSearch方法
    this.handleSearch();
  },
  methods: {
    // 查询图书
    async handleSearch() {
      // 通过axios的get方法获取数据
      let res = await axios.get('books');
      // console.log(res);
      this.books = res.data;
    },

    // 添加图书
    async handleAdd() {
      // 如果id的那个input能用代表是添加 如果不能用代表是修改
      // 所以要判断flag的值是true还是false
      if (this.flag) { // 修改

        // 通过axios根据id把书籍名称进行更新
        let res = await axios.put(`books/${this.id}`, {
          name: this.name
        })
        // console.log(res);
        if (res.data.status == 200) {
          this.handleSearch();
          // 清空给输入框
          this.id = "";
          this.name = "";
        }
        // 让输入框还可以输入
        this.flag = false;
      } else {  // 添加
        // 1.获取到编号
        // 2.获取到名称
        // 3.组成新的对象
        // 4.把对象放到books里面
        let res = await axios.post('books', {
          // 根据接口文档 要求我们传 书籍名称
          name: this.name
        });
        if (res.data.status == 200) {
          // 那么就要刷新页面
          this.handleSearch();
          // 6.清空输入框
          this.id = "";
          this.name = "";
        }

      }
    },

    // 删除图书
    async handleDel(id) {
      // 通过axios的delete方式通过id删除书籍
      let res = await axios.delete(`books/${id}`);
      // 判断状态是不是200 如果是200 代表书籍删除成功 
      if (res.data.status == 200) {
        // 那么就要刷新页面
        this.handleSearch();
      }
    },

    // 修改图书
    async handleEdit(id) {
      // id的输入框 不能输入
      this.flag = true;
      // // 点击编辑的时候要获取id对应的内容(id name)
      // let arr = this.books.filter(item => item.id == id);
      // // console.log(arr);
      // this.id = arr[0].id;
      // this.name = arr[0].name;
      // 发起ajax的get请求根据书籍id获取书籍详情
      let res = await axios.get(`books/${id}`);

      // console.log(res.data);
      // 把id赋值给数据id 把name赋值给数据name
      this.id = res.data.id;
      this.name = res.data.name;
    }
  },
  watch: {
    async name() {
      let res = await axios.get(`books/book/${this.name}`);
      console.log(res.data.status);
      if (res.data.status == 1) {
        this.submitFlag = true;
      } else {
        this.submitFlag = false;
      }
    }
  }
}).mount('#app');