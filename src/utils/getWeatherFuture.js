// weatherstack API gets future weather data
// We dont have the key! so on the backburner
const request = require('request');
const key = process.env.WEATHER_API || undefined;

const forecastFutureAPI= (search, callback) => {
      const url = 'http://api.weatherstack.com/forecast?access_key='+ key +
                  '&query='+ search +
                  '&forecast_days=5&hourly=0';
      request({url:url,json:true}, (error,response) => {
          if (error){
              console.log(error);
              callback("error connecting to weatherstack"+e , undefined);
          }else if(response.body.error){
            console.log(response.body.error);
              callback("error for("+ search+') :'+response.body.error, undefined);
          }else{
            const w = response.body;
            console.log(w);
            callback(undefined,w);
          }
      }); //request
}

// promise wrapper we can await for
// entry and export function
const getWeatherFuture = (address) => {
  return new Promise((resolve,reject)=>{
    // use data from geocode to call forecast
    forecastFutureAPI(address,(error,weather)=>{
      if (error){
        reject("forecast failed"+error);
      }else{
        resolve({weather});
      }
    });
 });
}

module.exports = getWeatherFuture;

/* optional parameters:

& units = m
& language = en
& callback = MY_CALLBACK
*/
