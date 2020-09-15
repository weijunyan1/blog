//3.数组转换为字符串
/*需求：
将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割*/

var arr=['red', 'green', 'blue', 'pink']//声明一个变量存储数组
var num=''//声明一个变量存储转换好的字符串
var cut='|'//声明一个变量表示分隔符
for(var i=0 ; i<arr.length ; i++)//遍历数组
{
    num=console.log(arr[i])+cut
}
console.log(num)//打印