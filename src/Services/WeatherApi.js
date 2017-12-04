const IP_URL = 'https://weixin.jirengu.com/weather/ip';
const CITY_ID_URL = 'https://weixin.jirengu.com/weather/cityid?location=';   // 后面接ip
const WEATHER_URL = ' https://weixin.jirengu.com/weather/now?cityid=';  // 后面接cityid
const WEATHER_24_HOUR_URL = 'https://weixin.jirengu.com/weather/future24h?cityid=';

const WEATHER_NO_ARG_URL = 'https://weixin.jirengu.com/weather';    // 无参数


export default function getWeatherData(){
  return new Promise((resolve, reject) => {
    fetch(WEATHER_NO_ARG_URL).then(res => {
      if(res) {
        resolve(res.json());
      } else {
        reject('errla');
      }
    });
  })
}
