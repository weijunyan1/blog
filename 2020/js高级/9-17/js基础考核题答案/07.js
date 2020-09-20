/**
 * 根据当前时间编写一个函数，做出相应问候语：
 *早上8点~12点 “早上好，欢迎登陆系统”
 *中午 12点~14点 “中午好，该休息了”
 *下午14点~18点 “下午好！欢迎登录系统”
 *晚上19点~0点 “晚上好，该休息了”
 */

// function getNow() {
//   let date = new Date();
//   // 得到时间
//   let hours = date.getHours();
//   // 测试代码
//   // hours = 20;
//   if (hours >= 8 && hours < 12) {
//     console.log( "早上好);，欢迎登陆系统";
//   } else if (hours >= 12 && hours < 14) {
//     console.log( "中午好);，该休息了";
//   } else if (hours >= 14 && hours < 18) {
//     console.log( "下午好);！欢迎登录系统";
//   } else if (hours >= 19 && hours < 24) {
//     console.log( "晚上好);，该休息了";
//   } else {
//     // 0到8点
//     console.log( "该猝死);了";
//   }
// }
// let result = getNow();
// console.log(result);

// function getNow(){
//   let date=new Date()
//   let hovers=date.getHours()
//   if(hovers>=8 && hovers<12){
//     console.log("早上好");
//   }else if(hovers>=12&&hovers<14){
//     console.log("中午好");
//   }else if(hovers>=14&&hovers<18){
//     console.log("下午好");
//   }else if(hovers>=19&&hovers<24){
//     console.log("晚上好");
//   }else{
//     console.log( "猝死");
//   }
// }

// let result=getNow();
// console.log(result)








// var now = new Date();
// var hovers = now.getHours();//得到小时
// // console.log((hour));
//   if(hovers>=8 && hovers<12){
//     console.log("早上好");
//   }else if(hovers>=12&&hovers<14){
//     console.log("中午好");
//   }else if(hovers>=14&&hovers<18){
//     console.log("下午好");
//   }else if(hovers>=19&&hovers<24){
//     console.log("晚上好");
//   }else{
//     console.log( "猝死");
//   }

  var now=new Date();
  var hovers=now.getHours()
  if(hovers>8&&hovers<12){
    console.log("早上好")
  }else if(hovers>=12&&hovers<14){
    console.log('中午好')
  }else if(hovers>=14&& hovers<18){
    console.log("下午好")
  }else if(hovers>=18&&hovers<24){
    console.log("晚上好")
  }else{
    console.log("猝死")
  }


