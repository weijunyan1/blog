//2.定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和
var arr = [11,22,33,44,55]//定义一个数组，进行数据储存
var sum=0//声明一个变量求和
for(var i=0 ; i<arr.length ; i++)//循环遍历arr数组
{
    sum+=arr[i]//求和
}
console.log(sum)//打印