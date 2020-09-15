
// 1.
//  定义数组
//  let arr = [
//   [11, 11, 22, 33, 44, 55],
//   [22, 11, 22, 33, 44, 55, 88],
//   [33, 11, 22, 33, 44],
//   [44, 11, 22, 44, 55],
//   [55, 55],
//   ];
// 
//   求出和,平均数,数字 11 出现的次数


let arr = [
    [11, 11, 22, 33, 44, 55],
    [22, 11, 22, 33, 44, 55, 88],
    [33, 11, 22, 33, 44],
    [44, 11, 22, 44, 55],
    [55, 55],
];


//求和
var sum = 0
//求平均数
var avg = 0
//求出现的次数
var num = 0
//有多少个数字
let count = 0
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == 11) {
            num++
        }
        sum += arr[i][j]
        count++
    }
}
avg = sum / count;
console.log("和是:", sum, "平均数是:", avg, "11出现的次数:", num);


// 2已有数组var nums = [5,10,15],要求创建一个新数组
//  新数组的长度和已知数组相同
//  新数组每个元素的值，是已知对应位置元素的2倍
//  在控制台中打印新数组的所有元素
var nums = [5, 10, 15];
//使用Array构造函数创建一个新数组
var arr = new Array(nums.length)
console.log(arr)
for (var i = 0; i < nums.length; i++) {
    arr[i] = nums[i] * 2
}
console.log(arr)

//4 自定义构造函数，创建一个自己的信息，包含name,age,sex,hobbies(爱好,数组形式),say(方法,想说的一句话)
function myInfo(name, age, sex, hobbies) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.hobbies = hobbies;
    this.asy = function () {
        console.log('小河')
    }
}
let result=new myInfo('万物',12,'男','看书').asy;

console.log(result)

//5	输入一个年份判断是否是闰年(能被400整除 或 被4整除同时不能被100整除)
function when(year){
    if(year%400==0||(year%4==0 && year%100!=0)){
        return true;
    }else{
        return false;
    }
}
console.log(when(1980));
console.log(when(2010))