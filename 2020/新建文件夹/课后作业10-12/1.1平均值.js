//求数组 [5,19,23,6,14,8] 里面所有元素的和以及平均值
var num=[5,19,23,6,14,8]
var sum=0
for (var i = 0; i < num.length; i++)
{
    sum+=num[i]
}
avg=sum/num.length
console.log(sum)
console.log(avg)