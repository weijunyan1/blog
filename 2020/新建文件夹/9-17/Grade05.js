
// ```js
// //  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
// //  a ="34",b="1234567"，返回2
// //  a = '35', b= "1234567" 返回-1
// //  a = "355", b = "12354355"  返回5
// ```


// function grade05(searchStr,originStr) {
//     for (let i = 0;i < originStr.length;i++) {
//         let tempStr = '';
//         for (let j = i;j < i + searchStr.length;j++) {
//             if (i + searchStr.length > originStr.length) return -1;
//             tempStr += originStr[j];
//         };
//         if (searchStr == tempStr) return i;
//     };
// };

// console.log(grade05('34','1234567'));
// console.log(grade05('35','1234567'));
// console.log(grade05('355','12354355'));


// function arr(a, b) {
//     //遍历b的字符串
//     for (var i = 0; i < b.length; i++) {
//         //创建一个新的缓存字符串
//         var temp = "";
//         for (var j = i; j < i + a.length; j++) {
//             if (i + a.length > b.length) {
//                 return -1
//             }
//             temp += b[j];
//         }
//         if (a == temp) {
//             return i
//         }
//     }
// }
// console.log(arr('34', '1234567'))



function arr(a, b) {
    //循环遍历b的字符串
    for (var i = 0; i < b.length; i++) {
        //创建一个新的缓存字符串
        var temp = "";
        //循环遍历a 数组
        for (var j = i; j < a.length + i; j++) {
            if (a.length + i > b.length) {
                return -1
            }
            temp += b[j]
        }
        if (a == temp) {
            return i
        }
    }
   

}
console.log(arr('34', '1234567'))