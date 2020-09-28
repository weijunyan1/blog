let vm = Vue.createApp({
    data() {
        return {
            id: '',
            name: '',
            keyword: '',
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


    methods: {
        search() {
            //根据filter筛选符合的对象
            const result = this.brandlist.filter(item => item.name.includes(this.keyword))
            return result
        },
        // add() {
        //     //判断是否为空
        //     if (!(this.id.trim() && this.name.trim())) return alert('不能为空')
        //     //创建一个新对象
        //     const newInfo = {
        //         id: this.id,
        //         name: this.name,
        //         ctime: new Date().toLocaleDateString()
        //     }
        //     //将数值渲染到页面中
        //     this.brandlist.push(newInfo)
        //     //清空
        //     this.id = this.name = ''
        // },








        //    remove(id){
        //        const index=this.brandlist.findindex(item=>item.id==id)
        //        this.brandlist.splice(index,1)
        //    }


    }


});
vm.mount('#app');