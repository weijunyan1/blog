//8.已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
var num=[1,3,5,8,10,11,16]
var a
var b
for (var i = 0; i < num.length; i++)//循环遍历score数组
{
    if(num[i]%2==0)
    {
    a=num[i]-1
    }
    console.log(a)
    if(num[i]%2!=0)
    {
        b=num[i]+1
    }
    console.log(b)
}