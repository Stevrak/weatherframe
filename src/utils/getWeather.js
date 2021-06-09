// weatherstack API gets current weather data from
// standard search term

const request = require('request');

const key = process.env.WEATHER_API;

const forecastAPI = (search, callback) => {
      const url = 'http://api.weatherstack.com/current?access_key='+ key +
                  '&query='+ search;
      request({url:url,json:true}, (error,response) => {
          if (error){
              callback("error connecting to weatherstack" , undefined);
          }else if(response.body.error){
              callback("error requesting weatherstack for "+ search + ", likely API request limit reached", undefined);
          }else{
              callback(undefined,response.body)
          }
      }); //request
}

// promise wrapper we can await for
const getWeather = (address) => {
  return new Promise((resolve,reject)=>{
    // use data from geocode to call forecast
    forecastAPI(address,(error,weather)=>{
      if (error){
        reject(error);
      }else{
        resolve(weather);
      }
    });
 });
}

module.exports = getWeather;

/* optional parameters:

& units = m
& language = en
& callback = MY_CALLBACK
*/
