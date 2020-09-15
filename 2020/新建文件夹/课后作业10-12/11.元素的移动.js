/*11.  var arr = [1,888,4,66,7,8]
要求，可以把数组中的下标为 3 的元素移到数组的开头*/
var arr = [1,888,4,66,7,8]//定义一个数组，进行数据储存
var arr1=[]//定义空数组便于储存数组
arr1[0]=arr[3]
for(var i=0 ; i<arr.length; i++)//循环遍历arr数组
{
    if(i==3)//如果为3的话
    { 
        continue
    } 
    arr1[arr1.length]=arr[i]//把他添加到arr1中
    
}
console.log(arr1)
