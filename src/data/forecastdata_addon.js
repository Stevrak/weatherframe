// test data for weather widget (so dont have to pay for monthly api)
// this version appends mock forcast data to existing free api call for
// a location's one-day forcast
// append to legitimate object with key 'forecast'

// eg: data.forecast = forecast_addon(data);

/*  example of what each day in forecast returns (chopped to few fields we use
    for the widget)
})
"2020-12-12": {
    "date": "2020-12-12",
    "avgtemp": 21,
    "hourly": [
        {
            "weather_descriptions": [
                "Cloud_slight_rain"
            ]
        }
    ]
}
*/

// builds single day object with random weather description (matching weatherstack options)
// and temperature based around known 1-day temp)
function forecast_date(date, temp, range){

  const descriptions = ["Cloud_slight_rain",
                        "Overcast",
                        "Sunny",
                        "Cloudy",
                        "Snowy",
                        "Rainy"];

  this.date = date;
  this.avgtemp = temp + Math.ceil(Math.random()*range - (range/2));
  this.hourly = [{weather_descriptions:[descriptions[Math.floor(Math.random()*descriptions.length)]]}];
  return this;
}

// builds mock forecast data to be added onto weatherstack return object to simulate 5 day forecastbox
// because full forecast data requires paid API

function forecast_addon(data){
  if (!data) var data = {current:{temperature:18}};
  let date = new Date();

  // turns date into weatherstack formatted date YYYY-MM-DD where month = 1-12
  function thisDate(){
    return date.getFullYear() + "-" + (date.getMonth()+1) +"-"+ date.getDate();
  }

  //increment day and return formatted as above
  function nextDate(){
    date.setDate(date.getDate()+1);
    return thisDate();
  }

  const addon = {};
  for(let i =0;i<5;i++){
    addon[nextDate()] = new forecast_date(thisDate(),data.current.temperature,5);
  }
  return addon;
}


module.exports = forecast_addon;
