const axios = require("axios");
const cheerio = require("cheerio");
function getMovie(message) {
  axios.get("https://maoyan.com/films?sortId=1").then((result) => {
    // note 解析的html
    let $ = cheerio.load(result.data);
    let items = [];
    console.log('123')
    $("dl.movie-list dd").each((index, ele) => {
      const href = 'https://maoyan.com/' + $(ele).find('a').attr('href');
      console.log(href);
      items.push({
        title: $(ele).find('.movie-item-title').attr('title'),
        orange: $(ele).find('.channel-detail-orange').text(),
        href: href
      });
    });

    if (items.length) {
      message.say(item.toString())
    } else {
      console.log()
      message.say('不好意思, 爬的太多被封了')
    }

    // note 发送信息

  });
}

module.exports = getMovie;