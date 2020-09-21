//15.15



// ## 第一题:数组

// ```js
// /**
//  * 已有数组var nums = [5,10,15],要求创建一个新数组
//  *  1.新数组的长度和已知数组相同
//  *  2.新数组每个元素的值，是已知对应位置元素的2倍
//  *  3.在控制台中打印新数组的所有元素
//  */
// ```
// var nums = [10, 20, 30]
// //创建一个新数组
// var num1 = [];
// //循环遍历原数组
// for (let i = 0; i < nums.length; i++) {
//     //等号赋值
//     num1[i]=nums[i]*2
// }
// console.log(num1)


// ## 第二题:判断是否是闰年

// ```js
// //	输入一个年份判断是否是闰年(能被400整除 或 被4整除同时不能被100整除)
// ```

//创建一个函数
// function time(year){
//     if(year%400==0||(year%4==0&&year!=100)){
//         return true
//     }else{
//         return false
//     }
// }
// var zuihou=time(2019)
// console.log(zuihou)

// ## 第三题:解析URL

// ```js
// /*
//  *获取地址里面的用户名和年龄和邮箱
//  *https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
//  *并且控制台输出对象的格式
//  *{username:'lisi',age:28,email:120122@qq.com}
//  */
// ```

// var arr={}
// var url = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";
// var url1 =url.split("?")[1].split("&")
// for(var i=0;i<url1.length;i++){
//     var url2=url1[i].split("=")
//     arr[url2[0]]=url2[1]
//     console.log(url2[0])
// }
// console.log(arr)


// ## 第四题:阶层

// ```js
// // 写一个(函数)，实现n的阶层的和求1+2!+3!+...+n!的和
// // 例:1+1*2+1*2*3+1*2*3*4+...
// ```

// //求和
// var num1=0;
// //求乘积
// var num2=1;
// //创建函数
// //形参
// function arr(num3){
//     for(var i=1;i<=num3;i++){
//         //乘积的值
//         num2*=i
//         //和的值-+
//         num1+=num2
//     }
//     return num1
// }
// //实参
// arr(5)
// console.log(num1)

// ## 第五题: 字符串查找

// ```js
// //  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
// //  a ="34",b="1234567"，返回2
// //  a = '35', b= "1234567" 返回-1
// //  a = "355", b = "12354355"  返回5
// ```


// ## 第六题:数组

// ```js
// /**
//  * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
//  *你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
//  *
//  *示例:
//  *
//  *给定 nums = [2, 7, 11, 15], target = 9
//  *
//  *因为 nums[0] + nums[1] = 2 + 7 = 9
//  *所以返回 [0, 1]
//  *
//  */
// ```
// nums = [2, 7, 11, 15]
// //创建一个新的数组
// var num1=[]
// //创建一个目标值
// var num2=18
// //循环遍历原数组
// for(var i=0;i<nums.length;i++){
//     for(var j=0;j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//             var count=nums[i]+nums[j]
//             if(count==num2){
//                 num1.push(i,j)
//             }
//         }
//     }
// }

// var set=new Set(num1)
// console.log(set)



// ## 第七题:时间日期对象转换

// ```js
// // 封装一个函数，把一个时间日期对象转成yyyy-mm-dd HH:mm:ss   
// // 输出样式 2020-9-16 20:17:23
// ```

// var date=new Date()
// function time(date){
//     return date.toLocaleString()
// }
// console.log( time(date))
// ## 第八题:随机十六进制

// ```js
// // 随机产生一个十六进制的颜色值 ,例如：#90E353   //最小值是0,最大值是F换算成十进制最小是0最大是255
// ```

// function color() {
//     var r = Math.floor(Math.random() * 256)
//     var g = Math.floor(Math.random() * 256)
//     var b = Math.floor(Math.random() * 256)
//     var aColor = "#" + r.toString(16) + g.toString(16) + b.toString(16)
//     return aColor
// }
// console.log(color())
// console.log(color())
// console.log(color())

// ## 第九题:找出最长的字符串和字符串的长度

// // ```js
// var str ="yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// // // 找字符串里面的最长的单词和单词的长度 
// // ```

// var num=str.split(" ")
// var max=num[0]
// for(var i=0;i<num.length;i++){
//     if(max.length<num[i].length){
//         max=num[i]
//     }
// }
// console.log(`最长的是${max}，长度为${max.length}`)


// ## 第十题:对象

// ```js
// // 有一个二维数组，每条数据固定stuid表示学号,name表示姓名,gender表示性别
// var students = [
//     { stuid: "S01", name: "周夏", gender: "男", score: 86 },
//     { stuid: "S02", name: "郑竹", gender: "男", score: 77 },
//     { stuid: "S03", name: "吴兰", gender: "女", score: 35 },
//     { stuid: "S04", name: "李云", gender: "男", score: 56 },
// ];
// // // 定义函数getMaxScore,
// // // 要求:接收学生信息二维数组students,函数中找出成绩最高和最低的学生姓名，并将结果返回
// // ```

// function getMaxScore(arr) {
//     //创建一个新数组
//     var num = []
//     //循环遍历原数组
//     for (var i = 0; i < arr.length; i++) {
//         num.push(arr[i].score)
//     }
//     //console.log(num)
//     //定义一个最大值
//     var max = num[0]
//     //定义一个最小值
//     var min = num[0]
//     //循环遍历成绩数组
//     for (var i = 0; i < num.length; i++) {
//         //判断
//         if (max < num[i]) {
//             max = num[i]
//         }
//         if (min > num[i]) {
//             min = num[i]
//         }
//     }
//     //console.log(max)


//     //创建一个对象
//     var obj = {}
//     //循环遍历原数组
//     for (var i = 0; i < arr.length; i++) {
//         //判断
//         if (max == arr[i].score) {
//             obj.maxName = arr[i].name
//         }
//         if (min == arr[i].score) {
//             obj.minName = arr[i].name
//         }
//     }
// return obj
// }

// var zhuihou = getMaxScore(students)
// console.log(zhuihou)