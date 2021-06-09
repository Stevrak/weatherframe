const request = require('request');

//ipstack.com lookup address from inspect
//
//http://api.ipstack.com/174.95.199.49?access_key=<API_KEY>
// get mapbox api data

const ipstack = (location,callback) => {
    const key = process.env.IPSTACK_API;
    const url= "http://api.ipstack.com/"+
                  location +
                  "?access_key="+
                  key;

    request({url:url,json:true}, (error,response) => {
    if (error){
        callback("error requesting ipstack",undefined);

    }else{
        const loc = response.body;
        // passback error/results
        callback(undefined,{
            city:loc.city,
            flag:loc.location.country_flag_emoji,
            isEU:loc.location.is_eu,
            lat: loc.latitude,
            long:loc.longitude
        });
    }// ipstack response
  });// request
}// ipstack func def

module.exports = ipstack;
