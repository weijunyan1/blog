// //第一题:数组

// ```js
// /**
//  * 已有数组var nums = [5,10,15],要求创建一个新数组
//  *  1.新数组的长度和已知数组相同
//  *  2.新数组每个元素的值，是已知对应位置元素的2倍
//  *  3.在控制台中打印新数组的所有元素
//  */
// ```

// var nums = [5,10,15]
// //创建新数组
// var arr=new Array(nums.length)
// for(let i=0;i<nums.length;i++){
//     arr[i]=nums[i]*2
// }
// console.log(arr)


// //第二题:判断是否是闰年

// ```js
// //	输入一个年份判断是否是闰年(能被400整除 或 被4整除同时不能被100整除)
// ```

// function when(year){
//     if(year%400==0||(year%4==0&&year%100!=0)){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(when(1234))

// // 第三题:解析URL

// ```js
// /*
//  *获取地址里面的用户名和年龄和邮箱
//  *https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
//  *并且控制台输出对象的格式
//  *{username:'lisi',age:28,email:120122@qq.com}
//  */
// ```


//var url="https://www.baidu.com?username=lisi&age=28&email=120122@qq.com"
// var arr=url.split("?")[1].split("&")
// var obj={}
// //console.log(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i].split("="))
//     obj[arr[i].split('=')[0]]=arr[i].split("=")[1]
// }
// console.log(obj)





// // 第四题:阶层

// ```js
// // 写一个(函数)，实现n的阶层的和求1+2!+3!+...+n!的和
// // 例:1+1*2+1*2*3+1*2*3*4+...
// ```

// //求和
// var num1=0
// //求阶乘
// var num2=1
// function arr(num){
//     for(let i=1;i<=num;i++){
//         num2*=i
//         num1+=num2
//     }
//     return(num1)
// }
// arr(3)
// console.log(num1)

// // 第五题: 字符串查找

// ```js
// //  字符串查找,不使用indexOf,正则，substr,substring,contain,slice等现成的方法,实现如下效果：
// //  a ="34",b="1234567"，返回2
// //  a = '35', b= "1234567" 返回-1
// //  a = "355", b = "12354355"  返回5
// ```

// // 第六题:数组

// ```js
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



// // 第七题:时间日期对象转换

// ```js
// // 封装一个函数，把一个时间日期对象转成yyyy-mm-dd HH:mm:ss   
// // 输出样式 2020-9-16 20:17:23
// ```

// // 第八题:随机十六进制

// ```js
// // 随机产生一个十六进制的颜色值 ,例如：#90E353   //最小值是0,最大值是F换算成十进制最小是0最大是255
// ```

// // 第九题:找出最长的字符串和字符串的长度

// ```js
// var str ="yuan yuan yuan jiang jiang yong aaaaaaaaaaaaa aaaaaaaaaaaaa odpsospoaioaoaoaoaoao";
// // 找字符串里面的最长的单词和单词的长度 
// ```

// // 第十题:对象

// ```js
// // 有一个二维数组，每条数据固定stuid表示学号,name表示姓名,gender表示性别
var students = [
  { stuid: "S01", name: "周夏", gender: "男", score: 86 },
  { stuid: "S02", name: "郑竹", gender: "男", score: 77 },
  { stuid: "S03", name: "吴兰", gender: "女", score: 35 },
  { stuid: "S04", name: "李云", gender: "男", score: 56 },
];
// // 定义函数getMaxScore,
// // 要求:接收学生信息二维数组students,函数中找出成绩最高和最低的学生姓名，并将结果返回
// ```


//创建一个函数
function getMaxScore(arr){
    //找到学习成绩最高的学生。就需要先找出所有的成绩，然后将所有成绩都放在同一个数组中
    var num=[]
    //循环遍历，找到所有的成绩
    for(var i=0;i<arr.length;i++){
        num.push(arr[i].score)
    }
    

    //设置一个最高成绩
    var max=num[0]
    //设置一个最低成绩
    var min=num[0]
    //循环遍历成绩的数组
    for(var i=0;i<num.length;i++){
        if(max>num[i]){
            max=num[i]
        }
        if(min<num[i]){
            min=num[i]
        }
    }

    var obj={}
    //循环遍历信息数组
    for(var i=0;i<arr.length;i++){
        //判断
        if(arr[i].score==max){
            Obj.maxName=arr[i].name
        }
        if(arr[i].score==min){
            obj.MinName=arr[i].name
        }
    }
    return obj
}
var zuihou=getMaxScore(students)
console.log(zuihou)