/*4.筛选数组
需求：
将数组 [2, 0, 6, 1, 77, 0, 52, 0, 25, 7] 
中大于等于 10 的元素选出来，放入新数组。*/
// ① 声明一个变量存储数组
// ② 声明一个变量存储转换好的字符串
// ③ 声明一个变量表示分隔符
// ④ 遍历数组，在每一项元素后面加上一个分隔符
// ⑤ 打印结果
var arr = [2, 0, 6, 1, 77, 0, 52, 0, 25, 7]//声明一个变量存储数组
for(var i=0;i<arr.length;i++)//遍历数组
{  
  if(arr[i] == 0)//如果数字为0
  {
    arr.splice(i,1)//跳过
  }
}
console.log(arr)//打印