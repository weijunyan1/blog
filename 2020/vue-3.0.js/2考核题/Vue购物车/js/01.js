// 创建Vue实例并挂载
let vm = Vue.createApp({})

// 第二部，设置头部子组件
let carttitle = {
    // 2.1设置接收父组件传参
    props: ['uname'],
    // 2.2创建模板
    template: `
    <div class="title"> {{uname}}的商品 </div>
    `
}

// 第三步，设置中间列表子组件
let cartlist = {
    // 3.1设置接收父组件传参
    props: ['list'],
    // 3.2创建模板，渲染页面
    template: `
        <div>
            <div class="item" v-for="(item,index) in list" :key="item.id">
                <img :src="item.img" alt="">
                <div class="name"> {{item.name}} </div>
                <div class="change">
                    <a href="" @click.prevent="reduce(index)">—</a>
                    <input type="text" class="num" v-model="item.num">
                    <a href="" @click.prevent="plus(index)">+</a>
                </div>
                <div class="del" @click="remove(index)">x</div>
            </div>
        </div>
    `,
    // 3.3方法（事件）——>下接 1.2
    methods: {
        // 3.3.1 添加点击事件，点击加号,触发父组件自定义事件，拟定下标值和状态
        plus(index) {
            this.$emit('changet', {
                index: index,
                type: 'plus'
            })
        },
        // 3.3.2 添加点击事件，点击减号,触发父组件自定义事件，拟定下标值和状态
        reduce(index) {
            this.$emit('changet', {
                index: index,
                type: 'reduce'
            })
        },
        // 3.3.3 添加点击事件，点击X号,触发父组件自定义事件，拟定下标值和状态
        remove(index) {
            this.$emit('changet', {
                index: index,
                type: 'remove'
            })
        },
    }
}

// 第四步，设置底部结算子组件
let carttotal = {
    // 4.1设置接收父组件传值
    props: ['list'],
    // 4.2模板
    template: `
    <div class="total">
        <span> 总价：{{price}} </span>
        <button> 结算 </button>
    </div>
    `,
    // 4.3计算属性
    computed: {
        // 4.3.1计算总价
        price() {
            // 4.3.1.1设置价格
            let money = 0
            // 4.3.1.2循环遍历
            this.list.forEach(item => {
                // 4.3.1.3判断商品数量是否小于0
                if (item.num < 0) {
                    // 告诉用户商品数量不能小于0
                    alert('不能小于0')
                    // 设置为0
                    item.num = 0
                }
                // 4.3.1.4累加总价格
                money += item.num * item.price
            })
            return money
        }
    }

}


// 第一步，创建根组件
vm.component('cart', {
    // 添加数据
    data() {
        return {
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
    // 1.1创建在html文件中显示的子组件，设置接收
    template: `
    <div class="cart">
        <carttitle :uname="uname"></carttitle>
        <cartlist :list="list" @changet="change($event)"></cartlist>
        <carttotal :list="list"></carttotal>
    </div>
    `,
    // 1.2设置方法——>上接3.3
    methods: {
        // 3.4创建父组件自定义事件
        change(val) {
            // 3.5判断type状态是否为加
            if (val.type == 'plus') {
                this.list[val.index].num++
                // 3.6判断type状态是否为减
            } else if (val.type == 'reduce') {
                this.list[val.index].num--
                // 3.7判断type状态是否为删除
            } else if (val.type == 'remove') {
                this.list.splice(val.index, 1)
            }
            // console.log(val);
        }
    },
    // 1.3设置组件
    components: {
        "carttitle": carttitle,
        "cartlist": cartlist,
        "carttotal": carttotal
    }
})

vm.mount('#app')