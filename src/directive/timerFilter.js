const dayjs = require("dayjs");
//给小于10的数值前面添加 0
function timerFilter(params) {
  if (params - 0 < 10) {
    return "0" + params;
  } else {
    return params;
  }
}
function workEndTime() {
  const nowDay = dayjs().format("YYYY-MM-DD");
  const endDate = nowDay + " 18:00:00";
  var nowTime = Date.now();
  // var nowTime = new Date().getTime();
  //获取当天 23:59
  var endTime = new Date(endDate);
  console.log({ endTime, nowDay });
  //获取时间差
  var timediff = Math.round((endTime - nowTime) / 1000);
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

  console.log(hour + "时" + minute + "分" + second + "秒");
  // setTimeout(showLeft, 1000);
}
module.exports = workEndTime

