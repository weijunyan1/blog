let vm = Vue.createApp({
  //创建data方法
  data() {
    //在result中添加数据
    return {
      id: '',
      name: '',
      keywords: '',
      //创建新数组
      brandlist: [
        {
          id: 1,
          name: "奔驰",
          ctime: new Date().toLocaleDateString(),
        },
        {
          id: 2,
          name: "宝马",
          ctime: new Date().toLocaleDateString(),
        },
        {
          id: 3,
          name: "长安奔奔",
          ctime: new Date().toLocaleDateString(),
        },
        {
          id: 4,
          name: "千里马",
          ctime: new Date().toLocaleDateString(),
        },
      ],
    }
  },




  //创建methods方法
  methods: {

    //创建search搜索方法
    search(){
      //创建一个用于传值的量，然后获取到所有数据，通过filter()方法进行筛选，最后通过includes()将数据中的所有name和传入数据的keywordes进行比较
      const hh1=this.brandlist.filter(item=>item.name.includes(this.keywords))
      return hh1
    },

    //通过add添加新的名字和id
    add(){
      //首先判断其id和name不为空
      if(!(this.id.trim()&&this.name.trim())){
        return alert('不能为空')
      }
      //然后创建一个用来存放用户输入值的对象
      const hh2={
        id:this.id,
        name:this.name,
        ctime: new Date().toLocaleDateString(),
      }
      //将输入值渲染到页面上
      this.brandlist.push(hh2)
      //将添加完是输入框进行清空
      this.id=this.name=""
    },




    //通过remove删除数据
    remove(id){
      //创建一个用来存放id的量，使用findIndex()方法返回对应元素的位置
      const hh3=this.brandlist.findIndex(item=>item.id==id)
      //通过splice()根据hh3的值删除选中的那一项
      this.brandlist.splice(hh3,1)
    }


  }

}).mount("#app")
//设置挂载