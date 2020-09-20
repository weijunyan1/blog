
// ```js
// //  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
// //  a ="34",b="1234567"，返回2
// //  a = '35', b= "1234567" 返回-1
// //  a = "355", b = "12354355"  返回5
// ```
// function getIndexOf(a, b) {
//     for (let i = 0; i < b.length; i++) {
//         let str = "";
//         for (let j = i; j < a.length + i; j++) {
//             str += b[j];
//             // console.log(str);
//         }
//         if (str == a) {

//             // console.log(str, a);
//             return i;
//         }
//         // console.log(i);

//         // console.log(str, a);
//     }
//     return -1;
// }
// // 测试;
// var indexOf = getIndexOf("34", "1234567");
// console.log(indexOf); //2



// function getIndexOf(a,b){
//     //循环遍历b控制增量
//     for(var i=0;i<b.length;i++){
//         //创建一个新数组
//         let str=""
//         //循环遍历a数组，控制新数组的个数
//         for(var j=i;j<a.length+i;j++){
//             str+=b[j]
//         }
//         if(str==a){
//             return i
//         }
//     }
//     return -1
// }
// var fuzhi=getIndexOf("34","1234567")
// console.log(fuzhi)




function getIndexOf(a,b){
    //循环遍历控制个增量
    for(var i=0;i<b.length;i++){
        //创建一个新数组
        var str=""
        //循环遍历
        for(var j=i;j<a.length+i;j++){
            //新数组赋值
            str+=b[j]
        }
        if(str==a){
            return i
        }
    }
    return -1
}

var zhuihou=getIndexOf("34","1234567")
console.log(zhuihou)