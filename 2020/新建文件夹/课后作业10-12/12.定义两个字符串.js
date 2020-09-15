/*12.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];遍历arrA中的所有元素并按逆序存储在数组arrB中，
并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]*/

var arrA = ["a", "b", "c", "d", "e"]//声明一个变量存储数组
var arrB = []//声明一个变量存储转换好的数组
for (var i = arrA.length - 1; i >= 0; i--)//遍历数组
{
  arrB[arrB.length] = arrA[i]//将倒序字母赋值到新的数组
}
console.log(arrB)//打印