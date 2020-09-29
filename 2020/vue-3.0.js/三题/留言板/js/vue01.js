let vm = Vue.createApp({
    data() {
        return {
            idName: '',
            age: '',
            inde: 0,
            all: false,
            // nowIndex: -100
            myData: [
                {
                    idName: 'TOM',
                    age: 18
                },
                {
                    idName: '阿萨',
                    age: 32
                },
            ]
        }
    },
    methods: {
        // 添加
        add() {
            if (!(this.idName.trim() && this.age.trim())) {
                alert('不能为空')
            } else {
                let str = {
                    idName: this.idName,
                    age: this.age
                }
                this.myData.push(str)

            }
            this.idName = ''
            this.age = ''
        },
        // 重置
        reset() {
            this.idName = ''
            this.age = ''
        },
        // 删除
        on(id, num) {
            // console.log(id)
            if (!this.all) {
                this.myData.splice(id, 1)
            } else {
                this.myData.splice(0, num)
            }
            this.all = false
        },
        // // 删除全部
        // alldelete(num) {
        //     // this.myData.splice(0, num)
        // }
    }
}).mount('#box')

