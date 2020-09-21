// ```js
// //  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
// //  a ="34",b="1234567"，返回2
// //  a = '35', b= "1234567" 返回-1
// //  a = "355", b = "12354355"  返回5
// ```


function grade06(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] + arr[j] == target) return [j, i];
        };
    };

    return null;
};

console.log(grade06([2, 7, 11, 15], 26))