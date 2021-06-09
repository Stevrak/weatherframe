/*
 *  geocode.js
 *
 *  using mapbox.com API, we pass it some human readable string defining a world location
 *  (city, postal code, street etc) and retrieve lattitude and longitude, name etc.
 *
 *  see callback arguments below
 */

const request = require('request');
const key = process.env.MAPBOX_API;


const geocode = (location,callback) => {

    const mapbox= "https://api.mapbox.com/geocoding/v5/mapbox.places/"+location+".json?"+
                  "access_token="+ key +
                  "&limit=1";
    request({url:mapbox,json:true}, (error,response) => {

    if (error){
        callback("error requesting mapbox: "+error,undefined);

    }else if(!response.body.features || response.body.features.length==0){
        callback("error finding location", undefined);

    }else{
        const loc = response.body.features[0];
        callback(undefined,{
            lat:loc.center[1],
            long:loc.center[0],
            name:loc.text,
            location:loc.place_name
            });
        } // mapbox response
  }); // request
} // geocode def

module.exports = geocode;
