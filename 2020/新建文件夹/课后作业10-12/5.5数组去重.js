/*5.   数组去重
需求：
将数组[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]
中的 0 去掉后，形成一个不包含 0 的新数组。
思路分析：
① 声明一个变量存储数组
② 声明一个空数组
③ 遍历数组，通过if判断筛选出数组中不为0的数，添加到空数组中
④ 打印新数*/
var arr=[2, 0, 6, 1, 77, 0, 52, 0, 25, 7]//声明一个变量存储数组
var num=[]//声明一个空数组便于保存数据
for(var i=0 ; i<=arr.length ; i++)//遍历数组
{
    if(arr[i]!=0)//如果数字为0
    {
        num[num.length]=arr[i]//将符合条件的数字储存到num中
    }
}
console.log(num)//打印输出