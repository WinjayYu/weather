const IP_URL = 'https://weixin.jirengu.com/weather/ip';
const CITY_ID_URL = 'https://weixin.jirengu.com/weather/cityid?location=';   // 后面接ip
const WEATHER_URL = ' https://weixin.jirengu.com/weather/now?cityid=';  // 后面接cityid
const WEATHER_24_HOUR_URL = 'https://weixin.jirengu.com/weather/future24h?cityid=';

const WEATHER_NO_ARG_URL = 'https://weixin.jirengu.com/weather';    // 无参数
const WEATHER_ICONS = 'https://weixin.jirengu.com/images/weather/code/'   //后面接，例：0.png


async function getData(type) {
  console.log(type)
  return new Promise((resolve, reject) => {
    fetch(type).then(res => {
      if(res) {
        resolve(res.json());
      } else {
        reject('err');
      }
    });
  })
}

function _getWeatherData() {
  return WEATHER_NO_ARG_URL;
}

function icons(num) {
  return WEATHER_ICONS + num + '.png';
}

export default {
  getWeaData() {
    return getData(_getWeatherData())
  },
  getIcons(num) {
    console.log(icons(num));
    return icons(num)
  }
}