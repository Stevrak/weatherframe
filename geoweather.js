const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

//get street/city/place to check weather
const location = process.argv[2];
if(!location){
    console.log(" please provide location");
}else{
    //bind geocode and forecast
    geocode(encodeURIComponent(location), (error, data) => {
        if (error){
          console.log(error);
        }else{
          // use data from geocode to call forecast
          console.log(data.name + "  (" + data.location+")");
          forecast(data.lat,data.long,(error,data)=>{
              if (error){console.log(error)
              }else{
                console.log(data);
              }
          });
        }
    });
}
