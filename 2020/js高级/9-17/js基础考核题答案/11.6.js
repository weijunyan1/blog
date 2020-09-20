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

// //定义一个目标值
// var num1 = 13
// //创建一个空数组用于存放下标
// var num2 = []

// for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//         if(nums[i]!=nums[j]){
//             let num3=nums[i]+nums[j]
//             if(num1==num3){
//                 num2.push[i,j]
//             }
//         }
//     }
    
// }

// var set =new Set(num2)
// console.log(set)













// nums = [2, 7, 11, 15]
// //创建目标值
// var arr=13
// //创建空数组
// var arra=[]
// //循环遍历
// for(var i=0;i<nums.length;i++){
//     for(var j=0;j<nums.length;j++){
//         //判断是否相等
//         if(nums[i]!=nums[j]){
//             let num=nums[i]+nums[j]
//             if(num=arr){
//                 arra.push[i,j]
//             }
//         }
//     }
// }
// var set=new Set(arra)
// console.log(set)














// nums = [2, 7, 11, 15]
// //创建一个目标值
// var arr=13
// //创建一个新数组
// var arra=[]
// //循环遍历
// for(var i=0;i<nums.length;i++){
//     for(var j=0;j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//             var num=nums[i]+nums[j]
//             if(num==arr){
//                 arra.push(i,j)
//             }
//         }
//     }
// }
// var set =new Set(arra)
// console.log(set)













// nums = [2, 7, 11, 15]
// //给定一个目标值
// var arr=13
// //创建一个空数组,用于存放下标
// var arra=[]
// //遍历循环
// for(var i=0;i<nums.length;i++){
//     for(var j=0;j<nums.length;j++){
//         if(nums[i]!=nums[j]){
//             let num=nums[i]+nums[j]
//             if(num==arr){
//                 arra.push(i,j)
//             }
//         }
//     }
// }
// let set=new Set(arra)
// console.log(set)














// var arr = 13
// let arra = []
// nums = [2,7,11,15]
// for(var i = 0; i < nums.length; i++){
//     //console.log(i)
//     for(var j = 0; j < nums.length; j++){
//          //console.log(j)
//         if(nums[i] != nums[j]){
//             let num = nums[i]+nums[j]
//             if(num == arr){
//                 // console.log(i,j)
//                 arra.push(i,j)
//             }
//         }
//     }
// }
// let set = new Set(arra)
// console.log(set)

 nums = [2, 7, 11, 15]

//定义一个目标值
var num1 = 13
//创建一个空数组用于存放下标
var num2 = []

for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
        if(nums[i]!=nums[j]){
            let num3=nums[i]+nums[j]
            if(num1==num3){
                num2.push(i,j)
            }
        }
    }
    
}

var set =new Set(num2)
console.log(set)