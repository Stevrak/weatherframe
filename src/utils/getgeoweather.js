/*
 *  getgeoweather.js
 *
 *  combines API calls to geocode location lookup service
 *  and forecast API service for given decoded location
 *  accepts address as string of human readable location, city, postal code, street etc.
 */

const forecast = require('./forecast');
const geocode = require('./geocode');

const getGeoWeather = (address) => {

  return new Promise((resolve,reject)=>{
    const data = geocode(encodeURIComponent(address), (error, data) => {
        if (error){
          reject("geocode failed: "+error);
        }else{

          // use data from geocode to call forecast
          forecast(data.lat,data.long,(error,weather)=>{
              if (error){
                reject("forecast failed: "+error);
              }else{
                // geocode has more verbal location data
                weather.location.name = data.location;
                resolve(weather);
                //resolve({geo:data, weather:weather}); // not formatted correctly for mock_forecast
              }
          });
        }
    });
  })

}

module.exports = getGeoWeather;
