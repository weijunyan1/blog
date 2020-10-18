//创建vue实例并挂载
let vm=Vue.createApp({})



//设置头部子组件
let carttitle={
    //设置接收父组件的传参
    props:['uname'],
    //创建模板
    template:`
    
    `

}

//1.创建跟组件
vm.component('cart',{
    //1.1添加数据
    data(){
        return{
            uname: '张三',
            list: [{
                id: 1,
                name: 'TCL彩电',
                price: 1000,
                num: 1,
                img: 'img/a.jpg'
            }, {
                id: 2,
                name: '机顶盒',
                price: 1000,
                num: 1,
                img: 'img/b.jpg'
            }, {
                id: 3,
                name: '海尔冰箱',
                price: 1000,
                num: 1,
                img: 'img/c.jpg'
            }, {
                id: 4,
                name: '小米手机',
                price: 1000,
                num: 1,
                img: 'img/d.jpg'
            }, {
                id: 5,
                name: 'PPTV电视',
                price: 1000,
                num: 2,
                img: 'img/e.jpg'
            }]
        }
    },


    
    //1.2写模板
    template:`
    <div class="cart">
         <carttitle :uname="uname"></carttitle>
         <cartlist :list="list"></cartlist>
         <carttotal :list="list"></carttotal>
    </div>
    `,


    //1.3设置方法
    methods:{
        //创建父组件自定义事件
        change(val){
            //判断type的状态是否为加
            if(val.type=='plus'){
                this.list[val.index].num++
            }else if(val.type=='reduce'){
                this.list[val.index].num--
            }else if(val.type=='remove'){
                this.list.splice(val.index,1)
            }
        }
    },


    //1.4设置组件
    components:{
        "carttitle":carttitle,
        "cartlist":cartlist,
        "carttotal":carttotal
    }

})

vm.mount('#app')