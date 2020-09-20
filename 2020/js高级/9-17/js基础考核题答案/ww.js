// ## 第一题:数组

// ```js
// /**
//  * 已有数组var nums = [5,10,15],要求创建一个新数组
//  *  1.新数组的长度和已知数组相同
//  *  2.新数组每个元素的值，是已知对应位置元素的2倍
//  *  3.在控制台中打印新数组的所有元素
//  */
// ```

// var nums = [5,10,15]
// //创建一个新数组
// var arr=new Array(nums.length)
// //循环遍历
// for(var i=0;i<nums.length;i++){
//     arr[i]=nums[i]*2
// }
// console.log(arr)



// ## 第二题:判断是否是闰年

// ```js
// //	输入一个年份判断是否是闰年(能被400整除 或 被4整除同时不能被100整除)
// ```
// function when(year) {
//     if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
//         return   true
//     } else {
//         return   false
//     }

// }

// console.log(when(1234))

// ## 第三题:解析URL

// ```js
// /*
//  *获取地址里面的用户名和年龄和邮箱
//  *https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
//  *并且控制台输出对象的格式
//  *{username:'lisi',age:28,email:120122@qq.com}
//  */
// ```

// var url="https://www.baidu.com?username=lisi&age=28&email=120122@qq.com"
// //创建一个新数组
// var arr=url.split("?")[1].split("&")
// //console.log(arr)
// //创建一个空对象
// var obj={}
// //循环遍历
// for(var i=0;i<arr.length;i++){
//     var arra=arr[i].split("=")
//     //console.log(arra[0])
//     obj[arra[0]]=arra[1]
// }
// console.log(obj)


// ## 第四题:阶层

// ```js
// // 写一个(函数)，实现n的阶层的和求1+2!+3!+...+n!的和
// // 例:1+1*2+1*2*3+1*2*3*4+...
// ```


// var 
// function arr(){
//     for(var i=1;i<arr.length;i++){

//     }
// }



// ## 第五题: 字符串查找

// ```js
//  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
//  a ="34",b="1234567"，返回2
//  a = '35', b= "1234567" 返回-1
//  a = "355", b = "12354355"  返回5
// ```

function search(MatchStr, OriginStr) {

    //分
    let OriginArr = OriginStr.split('');

    for (let i = 0; i < OriginArr.length; i++) {
        //拼接
        let Temp = '';

        for (let j = i; j < i + MatchStr.length; j++) {
            if (i + MatchStr.length > OriginArr.length) return -1;
            Temp += OriginArr[j];
        };

        if (Temp == MatchStr) return i;
    };
};

console.log(search('34', '1234567'));
console.log(search('35', '1234567'));
console.log(search('355', '12354355'));

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

var num=13
var num1=[]
for(var i=0;i<nums.length;i++){
    for(var j=0;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            let num2=nums[i]+nums[j]
            if(num==num2){
                num1.push(i,j)
            }
        }
    }
}
let set=new Set(num1)
console.log(set)

// ## 第七题:时间日期对象转换

// ```js
// // 封装一个函数，把一个时间日期对象转成yyyy-mm-dd HH:mm:ss   
// // 输出样式 2020-9-16 20:17:23
// ```

let date = new Date()
//console.log(date.getDay());
function time(date) {
    return date.toLocaleString()
}
console.log(time(date))
// ## 第八题:随机十六进制

// ```js
// // 随机产生一个十六进制的颜色值 ,例如：#90E353   //最小值是0,最大值是F换算成十进制最小是0最大是255
// ```

// function color(){
//     var r=Math.floor(Math.random()*256)
//     var g=Math.floor(Math.random()*256)
//     var b=Math.floor(Math.random()*256)
//     var num="#"+r.toString(16)+g.toString(16)+b.toString(16)
//     return num
// }
// console.log(num)

// ## 第九题:找出最长的字符串和字符串的长度

// ```js
// var str ="yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// // 找字符串里面的最长的单词和单词的长度 
// ```

// var str ="yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";

// var arr=str.split(" ")
// //console.log(arr)
//  var num=arr[0]
// for(var i=0;i<arr.length;i++){
//  if(arr[i].length>num.length){
//      num=arr[i]
//  }
// }
// console.log(`最长的是${num}，长度为${num.length}`)
// ## 第十题:对象

// ```js
// // 有一个二维数组，每条数据固定stuid表示学号,name表示姓名,gender表示性别
// var students = [
//   { stuid: "S01", name: "周夏", gender: "男", score: 86 },
//   { stuid: "S02", name: "郑竹", gender: "男", score: 77 },
//   { stuid: "S03", name: "吴兰", gender: "女", score: 35 },
//   { stuid: "S04", name: "李云", gender: "男", score: 56 },
// ];
// // 定义函数getMaxScore,
// // 要求:接收学生信息二维数组students,函数中找出成绩最高和最低的学生姓名，并将结果返回
// ```
