//	输入一个年份判断是否是闰年(能被400整除 或 被4整除同时不能被100整除)

function getRunNian(year) {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    return true;
  } else {
    return false;
  }
}

console.log(getRunNian(1980));
console.log(getRunNian(2021));


function when(year){
  if(year%400==0||(year%$==0&&year%100!=0)){
    return true
  }
  else{
    return false
  }
}
console.log(when(2001))
console.log(when(2010))



function when(year){
  if(year%400==0||(year%4==0&&year%100!=0)){
    return true
  }
  else{
    return false
  }
}
console.log(when(2021))

