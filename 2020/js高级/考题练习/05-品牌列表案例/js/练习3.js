//创建实例
let vm = Vue.createApp({
    //创建data方法
    data() {
        //将数据放在return中
        return {
            //双向绑定,用于传参
            id: '',
            name: '',
            keywords: '',
            //创建brandlis数组将原有的数据放到return中
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
            ]
        }
    },
    //创建事件方法
    methods: {
        //创建search方法渲染页面,动态查询
        // search() {
        //     //常量        获取数据    进行筛选  选中传入的name值 判断值是否相等 获取原数据的neme值
        //     const result = this.brandlist.filter(item.name.include(this.keywords))
        //     return result
        // },
        search(){
            const result = this.brandlist.filter(item=>item.name.includes(this.keywords))
            return result
        },



        //创建add方法 点击添加按钮添加新的编号名称
        add(){
            //先判断输入值不能为空
            if(!(this.id.trim()&&this.name.trim())){
                return alert('不能为空')
            }else{
                const arr={
                    id:this.id,
                    name:this.name,
                    ctime:new Date().toLocaleDateString()
                }
                this.brandlist.push(arr)
                this.name=this.id=""
            }
        },

        //删除
        remove(id){
            //findIndex方法返回符合测试条件的数组的第一位元素
            const index=this.brandlist.findIndex(item=>item.id==id)
            //使用splice()方法根据index值删除选中的那一项
            this.brandlist.splice(index,1)
        }




    }
}).mount('#app')


