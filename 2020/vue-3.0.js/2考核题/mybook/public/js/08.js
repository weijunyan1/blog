axios.defaults.baseURL = "http://localhost:3000"

let vm = Vue.createApp({

    //数据
    data() {
        return {
            flag: false,
            addflag: false,
            id: '',
            name: '',
            books: ''
        }
    },




    //刷新
    created() {
        this.handleSearch()
    },




    //方法
    methods: {
        //渲染
        async handleSearch() {
            let src = await axios.get('books')
            this.books = src.data
        },


        //添加
        async headelApp() {
            if (this.flag) {
                let src = await axios.put(`books/${this.id}`, {
                    name: this.name
                })
                if (src.data.status == 200) {
                    this.handleSearch()
                    this.id = ''
                    this.name = ""
                    this.flag=false
                }
            }else{
                let src = await axios.post('books', {
                    name: this.name
                })
                if (src.data.status == 200) {
                    this.handleSearch()
                    this.id = ''
                    this.name = ""
                }
            }
        },


        //删除
        async handleDel(id) {
            let src = await axios.delete(`books/${id}`)
            if (src.data.status == 200) {
                this.handleSearch()

            }
        },



        //修改
        async handleEach(id) {
            let src = await axios.get(`books/${id}`)
            this.id = src.data.id
            this.name = src.data.name
            this.flag = true
        }
    },




    //监听 
    watch:{
        async name(){
            let src = await axios.get(`books/book/${this.name}`)
            if (src.data.status == 1) {
               this.addflag=true

            }else{
                this.addflag=false
            }
        }
    },





    //计算
    computed:{
        many(){
            let num=this.books.length
            return num
        }
    }

}).mount('#app')