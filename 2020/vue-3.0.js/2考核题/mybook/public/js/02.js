// 配置基准URL
axios.defaults.baseURL = 'http://localhost:3000'
// 创建Vue实例并绑定
let vm = Vue.createApp({
    // 数据
    data() {
        return {
            // id
            id: '',
            // 名称
            name: '',
            // books数据
            books: '',
            // 判断id输入框可否使用
            flag: false,
            // 判断提交按钮能否使用
            addFlag: false
        }
    },
    // 打开页面渲染数据  调用查询图书方法
    created() {
        this.query()
    },
    // 所有的事件（方法）
    methods: {
        // 查询图书
        async query() {
            // 通过axios的get方法获取数据
            let str = await axios.get('books')
            // console.log(str.data)
            this.books = str.data
        },
        // 添加图书
        async handleAdd() {
            // 判断是修改还是添加
            if (this.flag) {
                // 判断不能为空
                if (!(this.name.trim())) return alert('不能为空')
                let str = await axios.put(`books/${this.id}`, {
                    name: this.name
                })
                // 判断是不是200
                if (str.data.status == 200) {
                    // 刷新页面                
                    this.query()
                }

            } else {
                //判断name是不是空 
                if (!(this.name.trim())) return alert('输入不能为空')
                // 使用axios的post方法添加
                let str = await axios.post('books', {
                    name: this.name
                })

                // 判断是不是200
                // console.log(str.data.status)
                if (str.data.status == 200) {
                    // 刷新页面
                    this.query()
                }
            }
            // 清空输入框
            this.id = this.name = ''
            // 让输入框可用
            this.flag = false
            // 提交键可用
            this.addFlag = false
        },
        // 删除图书
        async handleDel(id) {
            // 使用axion的delete方法删除数据
            let str = await axios.delete(`books/${id}`)
            // 判断是不是200
            if (str.data.status == 200) {
                // 刷新页面
                this.query()
            }
        },
        // 修改数据
        async handleEdit(id) {
            // 将id输入框变为不可用
            this.flag = true
            // 使用axion的get方法
            let str = await axios.get(`books/${id}`)
            // 将id和name赋值
            this.id = str.data.id
            // console.log(str.data.id)
            this.name = str.data.name
        }
    },
    watch: {
        // 监听是否有重复的
        async name() {
            let str = await axios.get(`books/book/${this.name}`)
            // console.log(str)
            // 判断是否存在重复
            if (str.data.status == 1) {
                this.addFlag = true
            } else {
                this.addFlag = false
            }
        }
    },
    computed: {
        // 计算有几本书
        many() {
            // 遍历books的长度
            let num = this.books.length
            return num
        }
    }


}).mount('#app')
