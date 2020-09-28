// 3.创建实例
let vm = Vue.createApp({
  // 4.创建data方法
  data() {
      // 5.将数据放在return中
      return {
          // 14.双向绑定，用于用户添加新品牌时传值
          id: '',
          name: '',
          // 8.在html页面对搜索输入框使用v-model进行双向绑定，并在js中设置用于判断的值
          keywords: '',
          // 7.创建brandlist数组将原有数据放进return中
          brandlist: [
              // id为id值，name为品牌名称，ctime为添加时间
              { id: 1, name: '奔驰', ctime: new Date().toLocaleDateString() },
              { id: 2, name: '宝马', ctime: new Date().toLocaleDateString() },
              { id: 3, name: '雪佛兰', ctime: new Date().toLocaleDateString() },
              { id: 4, name: '帕萨特', ctime: new Date().toLocaleDateString() }
          ]
      }
  },
  // 6.创建事件方法
  methods: {
      // 9.在html页面中对页面进行渲染
      // 11.渲染、动态查询页面,创建search方法
      search() {
          /* 
          12.创建一个用于传值的量，先获取到所有的数据，然后使用.filter()方法进行判断，
              再使用.includes()方法判断用户输入的值(keywords)和数据有无相同
          */
          const result = this.brandlist.filter(item => item.name.includes(this.keywords))
          return result
      },
      // 13.创建app()方法，点击添加按钮添加新品牌或enter添加添加新品牌(转html页面)
      add() {
          // 19.判断用户输入的值是否为空
          if (!(this.id.trim() && this.name.trim())) return alert('不能为空')
          // 20.创建一个用来存放用户输入的值的对象
          const newInfo = {
              id: parseInt(this.id),
              name: this.name,
              ctime: new Date().toLocaleDateString()
          }
          // 21.将用户创建的品牌添加进数据中，并渲染进页面
          this.brandlist.push(newInfo)
          // 22.让用户添加完数据后，添加用的输入框清空
          this.id = this.name = ''
      },
      // 23.创建remove方法用来删除数据
      // 因为要知道要删除的id，所以点击删除按钮传入相应的id
      remove(id) {
          // 25.创建一个用来储存点击元素id值的变量，使用findIndex()方法返回对应元素的位置
          const index = this.brandlist.findIndex(item => item.id === id)
          // 26.使用splice()方法根据index值删除选中的那一项
          this.brandlist.splice(index, 1)
      }
  }
}).mount("#app") // 设置挂载