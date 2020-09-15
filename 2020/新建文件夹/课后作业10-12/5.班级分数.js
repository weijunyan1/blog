/*5. 分析以下需求并实现
   1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
   2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
   3.求出班级的平均分
   4.求出班级的总分数*/
var score = [80,90,85,90,78,88,89,93,98,75]//定义一个数组，进行数据储存
var fail = [] //定义一个空数组用于存放不及格的分数
var sum = 0//声明一个变量用于求班级总分数
for (var i = 0; i < score.length; i++)//循环遍历score数组
{
    if (score[i] < 60)//如果分数低于60分
    {
          fail[fail.length] = score[i]//就把它添加到fail数组中
    }
      sum += score[i]//求出班级的总分数
} 
var avg = sum / score.length  //求出班级的平均分 =总分/人数   
console.log(fail.length, avg, sum)//打印不及格人数，班级平均分，总分数 
