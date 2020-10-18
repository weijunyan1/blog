axios.defaults.baseURL="http://localhost:3000"

let vm=Vue.createApp({
    //数据
    data(){
        return{
            flag:false,
            addflag:false,
            id:'',
            name:'',
            books:''

        }
    },




   //刷新
   created(){
       this.handleSearch()

   },




    //方法
    methods:{
        //渲染
        async handleSearch(){
            let src=await axios.get('books')
            this.books=src.data
        },



        //添加数据
        async handleAdd(){
         if(this.flag){
            let src=await axios.put(`books/${this.id}`,{
                name:this.name
            });
            if(src.data.status==200){
                this.handleSearch()
                this.id=''
                this.name=''
                this.flag=false
            }

         }else{
            let src=await axios.post('books',{
                name:this.name
            });
            if(src.data.status==200){
                this.handleSearch()
                this.id=''
                this.name=''
            }
         }
        },



        //删除数据
        async handleDel(id){
            let src=await axios.delete(`books/${id}`)
            if(src.data.status==200){
                this.handleSearch()
            }
        },


        //修改数据
        async handleEdit(id){
            let src=await axios.get(`books/${id}`)
            this.id=src.data.id
            this.name=src.data.name
            this.flag=true
        }
    },





    //监听
    watch:{
        async name(){
            let src=await axios.get(`books/book/${this.name}`)
            if(src.data.status==1){
                this.addflag=true
            }else{
                this.addflag=false
            }
            // console.log(src)
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