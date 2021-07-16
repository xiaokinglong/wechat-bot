// note 消息处理模块
const workEndTime = require("../directive/timerFilter");
const getMovie = require('../directive/getMovie.js')
module.exports = messageProcessing = (message) => {
  console.log(message);
  if (message.payload.text == "时间") {
    workEndTime(message);
  } else if (message.payload.text == '电影') {
    getMovie(message)
  }
};
