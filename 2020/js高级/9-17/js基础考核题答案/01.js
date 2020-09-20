/**
 *
 * 定义数组
 * let arr = [
 *  [11, 11, 22, 33, 44, 55],
 *  [22, 11, 22, 33, 44, 55, 88],
 *  [33, 11, 22, 33, 44],
 *  [44, 11, 22, 44, 55],
 *  [55, 55],
 *  ];
 *
 *  求出和,平均数,数字 11 出现的次数
 *
 */



// // 求和
// let sum = 0;
// // 有多少个数字
// let count = 0;
// // 平均数
// let avg = 0;
// // 11出现的次数
// let countNum = 0;
// for (let i = 0; i < arr.length; i++) {
//   // console.log(arr[i])
//   // console.log( arr[i].length)
//   for (let j = 0; j < arr[i].length; j++) {
//     if (arr[i][j] == 11) {
//       countNum++;
//     }
//     sum += arr[i][j];
//     count++;
//   }
// }
// avg = sum / count;

// // console.log("和是:", sum, "平均数是:", avg, "11出现的次数:", countNum);


// let arr = [
//   [11, 11, 22, 33, 44, 55],
//   [22, 11, 22, 33, 44, 55, 88],
//   [33, 11, 22, 33, 44],
//   [44, 11, 22, 44, 55],
//   [55, 55],
// ];

// //求和
// var sum=0;
// //求平均数
// var avg=0;
// //求11的个数
// var  num=0;
// //求个数
// var count=0

// for(let i=0;i<arr.length;i++){
//   for(let j=0;j<arr[i].length;j++){
//     if(arr[i][j]==11){
//       num++
//     }
//     //求和
//     sum+=arr[i][j];
//     //求个数
//     count++
//   }
// }
// //求平均数
// avg=sum/count
// console.log(`和是${sum},平均数${avg},11的个数${num}`)

let arr = [
  [11, 11, 22, 33, 44, 55],
  [22, 11, 22, 33, 44, 55, 88],
  [33, 11, 22, 33, 44],
  [44, 11, 22, 44, 55],
  [55, 55],
];

//求和
var sum=0
//求平均数
var avg=0
//求11出现的次数
var num=0
//求所有数的个数
var count=0
for(let i=0;i<arr.length;i++){
  for(let j=0;j<arr[i].length;j++){
    if(arr[i][j]==11){
      count++
    }
    //求和
    sum+=arr[i][j]
    //求所有数出现的次数
    count++
  }
}
avg=sum/count
console.log(`所求的和为${sum}，平均数为${avg}，11出现的次数为${count}`)