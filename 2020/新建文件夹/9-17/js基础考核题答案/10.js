// // 有一个二维数组，每条数据固定stuid表示学号,name表示姓名,gender表示性别
// var students = [
//   { stuid: "S01", name: "周夏", gender: "男", score: 86 },
//   { stuid: "S02", name: "郑竹", gender: "男", score: 77 },
//   { stuid: "S03", name: "吴兰", gender: "女", score: 35 },
//   { stuid: "S04", name: "李云", gender: "男", score: 56 },
// ];
// // 定义函数getMaxScore,
// // 要求:接收学生信息二维数组students,函数中找出成绩最高和最低的学生姓名，并将结果返回



// //创建函数
// function getMaxScore(arr) {
//   //创建一个空数组，用于存放对象
//   var num = [];
//   for (var i = 0; i < arr.length; i++) {
//     num.push(arr[i].score)
//   }

//   //定义一个最大值
//   var max = num[0];
//   //定义一个最小值
//   var min = num[0];
//   for (var i = 0; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i]
//     }
//     if (num[i] < min) {
//       min = num[i]
//     }
//   }


//   //创建一个空对象
//   var obj = {}
//   //循环遍历
//   for(var j=0;j<arr.length;j++){
//     if(max==arr[j].score){
//       obj.maxName = arr[j].name
//     }
//     if(min==arr[j].score){
//       obj.minName=arr[j].name
//     }
//   }
//   return obj
// }
// //传入参数l
// var result = getMaxScore(students)
// console.log(result)






















// //创建一个函数
// function getMaxScore(arr){
//   //创建一个新数组用于存放成绩
//   var num=[]
//   for(var i=0;i<arr.length;i++){
//     num.push(arr[i].score)
//   }


// //寻找最大值最小值
// //声明一个最大值、
// var max = num[0]
// //声明一个最小值
// var min = num[0]
// for (var i = 0; i < num.length; i++) {
//   //比较得出最大值
//   if (num[i] > max) {
//     max = num[i]
//   }
//   if (num[i] < min) {
//     min = num[i]
//   }
// }

// //创建一个空对象
// var obj = {};
// //循环遍历
// for (var j = 0; j < arr.length; j++) {
//   //f返回最大值的名字
//   if (arr[i].score == max) {
//     obj.maxName = arr[i].name
//   }
//   //返回最小值的名字
//   if (arr[i].score == min) {
//     obj.minName = arr[i].name
//   }
// }
// return obj
// }
// //传入参数
// var result = getMaxScore(students)
// console.log(result)







































// function getMaxScore(arr) {
//   // 保存成绩
//   let num = [];
//   // 查找成绩
//   for (let i = 0; i < arr.length; i++) {
//     num.push(arr[i].score);
//   }

//   // 找到最大最小值
//   let max = num[0];
//   let min = num[0];
//   for (let i = 0; i < num.length; i++) {
//     // 求出最大值
//     if (num[i] > max) {
//       max = num[i];
//     }
//     // 求出最小值
//     if (num[i] < min) {
//       min = num[i];
//     }
//   }

//   //返回的对象
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     // 返回最大值的名字
//     if (arr[i].score == max) {
//       obj.maxName = arr[i].name;
//     }
//     // 返回最小值的名字
//     if (arr[i].score == min) {
//       obj.minName = arr[i].name;
//     }
//   }
//   return obj;
// }
// // 传入参数
// let result = getMaxScore(students);
// console.log(result);

//#region 方法二

// let result = getMaxScore(students);
// console.log(result);
// function getMaxScore(arr) {
//   let num = [];
//   for (let i = 0; i < arr.length; i++) {
//     num.push(arr[i].score);
//   }
//   let max = Math.max.apply(null, num);
//   let min = Math.min.apply(null, num);
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].score == max) {
//       obj.maxName = arr[i].name;
//     }
//     if (arr[i].score == min) {
//       obj.minName = arr[i].name;
//     }
//   }
//   return obj;
// }

// let result = getMaxScore(students);
// console.log(result);

//#endregion






// 有一个二维数组，每条数据固定stuid表示学号,name表示姓名,gender表示性别
var students = [
  { stuid: "S01", name: "周夏", gender: "男", score: 86 },
  { stuid: "S02", name: "郑竹", gender: "男", score: 77 },
  { stuid: "S03", name: "吴兰", gender: "女", score: 35 },
  { stuid: "S04", name: "李云", gender: "男", score: 56 },
];
// 定义函数getMaxScore,
// 要求:接收学生信息二维数组students,函数中找出成绩最高和最低的学生姓名，并将结果返回


//创建一个函数
function getMaxScore(arr){
  //求最大成绩值，先创建一个数组，将所有的成绩都放进去
  var num=[]
  for(var i=0;i<arr.length;i++){
    num.push(arr[i].score)
  }
  //创建最大值最小值，然后让其与新创建的成绩数组进行比较
  var max=num[0]
  var min=num[0]
  for(var i=0;i<num.length;i++){
    if(max>num[i]){
      max=num[i]
    }
    if(min<num[i]){
      min=num[i]
    }
  }
  
  //创建对象
  var obj={}
  for(var i=0;i<arr.length;i++){
    if(arr[i].score==max){
      obj.maxName=arr[i].name
    }
    if(arr[i].score==min){
      obj.minName=arr[i].name
    }
  }
return obj
}
//传参
var arra= getMaxScore(students)
console.log(arra)