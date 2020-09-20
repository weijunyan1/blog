// // 写一个(函数)，实现n的阶层的和求1+2!+3!+...+n!的和

// /**
//  * 1
//  * 1*2
//  * 1*2*3
//  * 1*2*3*4
//  * 1*2*3*4*5
//  */

// // 先求n的阶层

// function factorial(n) {
//   // if (n <= 1) {
//   //   return 1;
//   // } else {
//   //   return n * factorial(n - 1);
//   // }
//   return n <= 1 ? 1 : n * factorial(n - 1);
// }
// console.log("4的阶层是", factorial(4));

// /*
//  *如果上面的factorial不理解可以看下面的factorial
//  *
//  */
// // `````````````````````````````````````````
// // function factorial(n) {
// //   let result = 1;
// //   for (let i = 1; i <= n; i++) {
// //     result *= i;
// //   }
// //   return result;
// // }
// // console.log(factorial(4));
// // `````````````````````````````````````````
// // 再计算阶层和
// function getSum(n) {
//   let count = 0;
//   for (i = 1; i <= n; i++) {
//     count += factorial(i);
//   }
//   return count;
// }

// console.log("答案到3的阶层和是", getSum(3));



// 写一个(函数)，实现n的阶层的和求1+2!+3!+...+n!的和

/**
 * 1
 * 1*2
 * 1*2*3
 * 1*2*3*4
 * 1*2*3*4*5
 */

// //求和
// var num1=0;
// //求阶乘
// var num2=1
// function arr(num){
//   for(let i=1;i<=num;i++){
//     num2*=i
//     num1+=num2
//   }
//   return(num1)
// }
// arr(3)
// console.log(num1)

// //求和
// var num1=0;
// //求阶乘
// var num2=1;
// function arr(num){
//   for(let i=0;i<=num;i++){
//     num2*=i;
//     num1+=num2
//   }
//   return(num1)
// }
// arr(3)
// console.log(num1)


//求和
var num1=0;
//求阶乘
var num2=1;
function arr(num){
  for(let i=1;i<=num;i++){
    num2*=i;
    num1+=num2
  }
  return(num1)
}
arr(3)
console.log(num1)
















// // 累加
// var num1 = 0
// // 阶乘
// var num2 = 1
// // 函数
// function arr(num) {
//   // for循环出输入的数字从1开始
//   for (var i = 1; i <= num; i++) {
//     // 求乘积
//     num2 *= i
//     // console.log(num2)
//     //求乘积和
//     num1 += num2
//     // console.log(num1)
//     // console.log(i)
//   }
//   return(num1)
// }
// //传参
// arr(3)
// //输出
// console.log(num1)


