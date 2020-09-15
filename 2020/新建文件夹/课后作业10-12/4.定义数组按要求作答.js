
// 4. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台
var arr = [11,22,33,44,55]//定义一个数组，进行数据储存
for(var i=arr.length-1 ; i>=0; i--)//循环遍历arr数组
{
    console.log(arr[i])
}

/*	reverse() 方法将数组中元素的位置颠倒。
var reduceArr=[1,2,3,4,5,6]
console.log(reduceArr.reverse()) //[ 6, 5, 4, 3, 2, 1 ] 数组顺序颠倒*/
