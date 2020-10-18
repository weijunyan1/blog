axios.defaults.baseURL = 'http://localhost:3000'
let vm = Vue.createApp({
    data() {
        return {
            id: '',
            name: '',
            flag: false,
            addFlag: false,
            books: ''
        }
    },
    created() {
        this.query()
    },
    methods: {
        async query() {
            let str = await axios.get(`books`)
            // console.log(str.data)
            this.books = str.data
        },
        async handleAdd() {
            if (this.flag) {
                if (!(this.name.trim())) return alert('不能为空')
                let str = await axios.put(`books/${this.id}`, {
                    name: this.name
                    
                })
                // console.log(str)
                if (str.data.status == 200) {
                    this.query()
                }

            } else {
                if (!(this.name.trim())) return alert('不能为空')
                let str = await axios.post(`books`, {
                    name: this.name
                })
                // console.log(str)
                if (str.data.status == 200) {
                    this.query()
                }
            }
            this.id = this.name = ''
            this.flag = false
            this.addflag = false

        },
        async handleDel(id) {
            let str = await axios.delete(`books/${id}`)
            if (str.data.status == 200) {
                this.query()
            }
        },
        async handleEdit(id) {
            this.flag = true
            let str = await axios.get(`books/${id}`)
            // console.log(str.data)
            this.id = str.data.id
            this.name = str.data.name
        }
    },
    computed:{
        many(){
            let num = this.books.length
            return num
        }
    },
    watch:{
        async name(){
            let str = await axios.get(`books/book/${this.name}`)
            if(str.data.status == 1){
                this.addFlag = true
            }else{
                this.addFlag = false
            }
        }
    }
}).mount('#app')