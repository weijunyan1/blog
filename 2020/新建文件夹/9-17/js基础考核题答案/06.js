/*
 *获取地址里面的用户名和年龄和邮箱
 *https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
 *并且控制台输出对象的格式
 *{username:'lisi',age:28,email:120122@qq.com}
 */

let url = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";

// console.log(url.split("?")[1].split("&"));  //核心代码split()
let arr = url.split("?")[1].split("&");


let obj = {};
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i].split("="));
  obj[arr[i].split("=")[0]] = arr[i].split("=")[1];
}

console.log("答案", obj);

//将url分割成三个数组存储在arr中
let arr = url.split("?")[1].split("&")
//console.log(arr)
//['username=lisi', 'age=28', 'email=120122@qq.com']

//创建一个空对象
let obj = {}

//循环遍历arr数组
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].split("="))
    //['username', 'lisi']['age', '28']...
    //console.log(arr[i].split("=")[0])
    //username,age,email
    //console.log(arr[i].split("=")[1])
    //list,28,120122@qq.com
    obj[arr[i].split("=")[0]]=arr[i].split("=")[1];
}
console.log(obj)



// // let url = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";

// //先将数组url分成三个部分
// var arr=url.split("?")[1].split("&")
// //在创建一个新对象
// var obj={}
// //循环遍历arr
// for(let i=0;i<arr.length,i++){
//     console.log(arr[i].split("="))
//     obj[arr[i].split("=")[0]]=arr[i].split("=")[1]
// }console.log(obj)


// let url = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";
//先将数组从?开始分为前后两个部分，然后在将后一个部分根据&在分为三个并列的部分
let  arr=url.split("?")[1].split("&")
//循环遍历arr的三个并列部分
for(let i=0;i<arr.length;i++){
    //根据=在将三个并列的部分分成前后两个部分
    console.log(arr[i].split('='))
    //然后让前面的属性等于后面的值
    obj[arr[i].split('=')[0]]=arr[i].split('=')[1]
}
console.log(obj)