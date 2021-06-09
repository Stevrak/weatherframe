/*
 *  forecast.js
 *
 *  using weatherstack.com API to get weather data at lat and long
 *
 *  we format and return specific fields, see callback arguments below
 */

const request = require('request');
const key = process.env.WEATHER_API;

const forecast= (lat,long,callback) => {
      const url = 'http://api.weatherstack.com/current?access_key='+key+
                  '&query='+lat+','+long;
      request({url:url,json:true}, (error,response) => {
          if (error){
              callback("error connecting to weatherstack" , undefined);
          }else if(response.body.error){
              callback("error requesting weatherstack for"+lat+','+long , undefined);
          }else{
            const w = response.body.current;
            callback(undefined,{
                location:response.body.location.name,
                temp:w.temperature,
                rain:w.precip,
                cloud:w.cloudcover,
                pressure:w.pressure,
                wind:w.wind_speed,
                desc:w.weather_descriptions,
                icon:w.weather_icons
            });
          }
      }); //request
}
module.exports = forecast;

/* optional parameters:

& units = m
& language = en
& callback = MY_CALLBACK
*/
