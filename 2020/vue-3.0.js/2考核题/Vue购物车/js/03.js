//1创建vue实例
let vm = Vue.createApp({})


//设置头部组件
let carttitle={
    //接收父组件的传值
    props:['uname'],
    //创建子组件的模板
    template:`
    <div class="title">{{uname}}的商品</div>
    `
}


//设置中间列表组件
let cartlist={
    //接收父组件的传值
    props:['list'],
    //创建子组件模板
    template:`
    <div>
    <!-- 因为中间要进行商品的增减所以-->
          <div class="item" v-for="(item,index) in list"  :key="item.id">
            <img :src="item.img">
            <div class="name">{{item.name}}</div>
            <div class="change">
            <!--给加号添加点击事件-->
              <a href="" @click.prevent="reduce(index)">－</a>
              <input type="text" class="num" v-move="item.num">
              <a href="" @click.prevent="plus(index)">＋</a>
            </div>
            <div class="del" @click="remove(index)">×</div>
          </div>
        </div>
    `,

    //创建方法
    methods:{
        plus(index){
            this.$emit('changet')
        }
    }
}


//设置底部结算组件
let carttotal={
    //接收父组件的传值
    props:['list'],
    //创建子组件模板
    template:`
    <div class="total">
    <span>总价：123</span>
    <button>结算</button>
  </div>
    `
}


//3创建父组件
vm.component('cart', {
    //3。1添加数据
    price() {
        return {
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


    //3.2创建父组件模板，并在父组件模板中添加自定义事件便于将父组件的数据发送到子组件
    template: `
    <div>
    <carttitle :uname='uname'></carttitle>
    <cartlist :list='list' 2
    
    ></cartlist>
    <carttotal :list='list'></carttotal>
    </div>
    `


    //3.3在外部创建子组件，并使用props方法接父组件的数据



    //3.4方法


    //3.5设置子组件


})

//2.进行挂载
vm.mount('#app')