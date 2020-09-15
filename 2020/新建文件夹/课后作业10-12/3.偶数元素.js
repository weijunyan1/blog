//3. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
var arr = [11,22,33,44,55]//定义一个数组，进行数据储存
for(var i=0 ; i<arr.length ; i++)//循环遍历arr数组
{
    if(arr[i]%2==0)//如果为偶数
    {
        console.log(arr[i])//打印
    }
}