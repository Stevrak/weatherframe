const request = require('request');

// ipstack.com lookup address from inspect

//http://api.ipstack.com/174.95.199.49?access_key=<API_KEY>

const ipstack = (location,callback) => {
    const key = process.env.IPSTACK_API;
    const url= "http://api.ipstack.com/"+
                  location +
                  "?access_key="+
                  key;

    request({url:url,json:true}, (error,response) => {
    if (error){
        callback("error requesting ipstack: "+error, undefined);

    }else{

        // passback concise results
        const loc = response.body;
        console.log("ipstack returns:",loc)
        callback(undefined,{
            city:loc.city,
            location:loc.city+", "+loc.region_name+ ", "+ loc.country_name,
            zip:loc.zip,
            lat:loc.latitude,
            long:loc.longitude});

    }// ipstack response
  });// request
}// ipstack func def


// promise wrapper we can await for

const getIpLocation = (address) => {
  return new Promise((resolve,reject)=>{

    // use use ip to get location data
    ipstack(address,(error,location)=>{
      if (error){
        reject(error);
      }else{
        resolve(location);
      }
    });
 });
}

module.exports = getIpLocation;
