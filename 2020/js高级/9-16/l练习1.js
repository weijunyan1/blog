// let arr = [
//     [11, 11, 22, 33, 44, 55],
//     [22, 11, 22, 33, 44, 55, 88],
//     [33, 11, 22, 33, 44],
//     [44, 11, 22, 44, 55],
//     [55, 55],
//   ];

//   //求平均值
//   var avg=0
//   //求和
//   var sum=0
//   //求11出现的次数
//   var num=0
//   //求共有多少个数
//   var  count=0

//   for(var i=0;i<arr.length;i++){
//       for(var j=0;j<arr[i].length;j++){
//           if(arr[i][j]==11){
//               num++
//           }
//           sum+=arr[i][j]
//           count++
//       }
//   }
// console.log(`平均数为${avg}，11出现的次数为${num}，和为${sum}`)



// 已有数组var nums = [5,10,15],要求创建一个新数组
//  1.新数组的长度和已知数组相同
//  2.新数组每个元素的值，是已知对应位置元素的2倍
//  3.在控制台中打印新数组的所有元素

// var nums = [5,10,15]
// var arr=new Array(nums.length)
// for(let i=0;i<nums.length;i++){
//     arr[i]=nums[i]*2
// }
// console.log(arr) 



// 写一个(函数)，实现n的阶层的和求1+2!+3!+...+n!的和

// /**
//  * 1
//  * 1*2
//  * 1*2*3
//  * 1*2*3*4
//  * 1*2*3*4*5
//  */

// //求和
// var num1 = 0
// //求阶乘
// var num2 = 1

// function arr(num) {
//     for (let i = 1; i <= num; i++) {
//         num2*=i
//         num1+=num2
//     }
//     return(num1)
// }
// arr(3)
// console.log(num1)

// // 自定义构造函数，创建一个自己的信息，包含name,age,sex,hobbies(爱好,数组形式),say(方法,想说的一句话)
// function my(name, age, sex, hobbies) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
//     this.hobbies = hobbies;
//     this.say = function () {
//         console.log("苹果")
//     }
// }
// var in=new my('灰姑娘',18,'女','跳舞').say
// console.log(in)

//////////////////say///////////////

// function when(year){
//     if(year%400==0||(year%4==0&&year%100!=0)){
//         return  true
//     }else{
//         return false
//     }
// }
// console.log(when(1234))


 let url = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";

 let arr=url.split("?")[1].split('&')
 for(var i=0;i<arr.length;i++){
     console.log(arr[i].s)
 }