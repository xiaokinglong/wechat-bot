const dayjs = require("dayjs");
//给小于10的数值前面添加 0
function timerFilter(params) {
  if (params - 0 < 10) {
    return "0" + params;
  } else {
    return params;
  }
}
function workEndTime(message) {
  const currentDay = dayjs().format("YYYY-MM-DD") + ' 18:00:00' ;
  const nowTime = new Date().getTime();
  const endTime = new Date(currentDay).getTime();
  // note 时间差
  const timediff = Math.round((endTime - nowTime) / 1000);
  // 小于等于值  <=
  if (timediff <= 0) {
    message.say("还不下班呢,在干啥呢");
    return false
  }
  //获取还剩多少小时
  var hour =
    parseInt((timediff / 3600) % 24) + parseInt(timediff / 3600 / 24) * 24;
  //获取还剩多少分钟
  var minute = parseInt((timediff / 60) % 60);
  //获取还剩多少秒
  var second = timediff % 60;
  //输出还剩多少时间
  hour = timerFilter(hour);
  minute = timerFilter(minute);
  second = timerFilter(second);

  const sayWorld = `距离下班时间还有${hour}时${minute}分${second}秒`;

  console.log(sayWorld);
  message.say(sayWorld);
}
module.exports = workEndTime;
