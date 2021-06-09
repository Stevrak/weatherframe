//Async fnction to get user IP address, either from req headers
// or via free api service

const request = require('request');

const getIp = async (req) => {
  return new Promise(async (resolve,reject)=>{

    if(process.env.PROD == 1){ // get ip from headers
      if (req.headers['x-forwarded-for']) {
        resolve(req.headers['x-forwarded-for'].split(",")[0]);
    } else if (req.connection && req.connection.remoteAddress) {
      resolve(req.connection.remoteAddress);
    } else {
        resolve(req.ip);
    }

    }else{ // localhost, use service to get ip
      await request({url:'https://api.ipify.org?format=json'}, (error,response) => {
        if(error) {
          console.log("ipify error",error)
          resolve(req.ip);//send nonsense data if this failed (should reject instead)
        }
        if (response)
          resolve(JSON.parse(response.body).ip);
      })
    }
  })
}

module.exports = getIp;
