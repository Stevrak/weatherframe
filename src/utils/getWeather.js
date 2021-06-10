/*
 * getWeather.js
 *
 * chains lookups (geocode or (getIp and ipstack)) to then return weatherstack data
 *
 * takes req headers to either check :location value for passed world location
 *  or if absent get user's IP to find their location, then sends back weatherstack data
 *
 */

const getIp = require ('../utils/getIp');
const ipstack = require ('../utils/ipstack');
const forecast = require ('../utils/forecast');
const getGeoWeather = require ('../utils/getgeoweather');

// promise wrapper we can await for
async function getWeather(req){
  return new Promise(async (resolve,reject)=>{

    let location = req.params.location;

    // if told a location by users
    // check in in mapbox for lat/long then get weather
    if (location) {

        const weather = getGeoWeather(location).catch((e)=>{
              reject('<div style="color:red">'+ e +'</div>')
        });

        resolve(weather);


    // if no location was passed, find based on users ip address
    }else{

      // get ip of the user
        const ip = await getIp(req).catch((e)=>{
          reject('<div style="color:red">getIp call:'+ e +'</div>');
        });

        // then get the location from there
        const data = await ipstack(ip).catch((e)=>{
          reject('<div style="color:red">ipstack call: '+ e +'</div>');
        });

        // use data from ipstack to call forecast directly
        forecast(data.lat,data.long,(error,weather)=>{
            if (error){
              reject("forecast failed: "+error);
            }else{
              // ipstack returns a more detailed location string
              weather.location.name = data.location;
              resolve(weather);

            }
        });
      }
   });
}

module.exports = getWeather;
