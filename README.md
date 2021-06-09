# weatherframe
Weatherstack forecast API iframe/widget in Node/express/handlebars


Using [Mapbox](https://www.mapbox.com/) and [Weather stack](https://weatherstack.com/) APIs to gather weather and forecast information for a user-selected world location. Generate an information widget displaying 5 day forecast, either inpage or external through iframe.
need to provide own API keys in process.env.MAPBOX_API and process.env.WEATHER_API

initialize with node npm and provide keys, otherwise some mock-data versions are avaliable to test the final output

free Mapbox key is free
WeatherBox free key allows for current day weather, must pay for forecast (5 day) though a mock-data generator is avaliable to supplement for display 

Most of the code was built thanks to Andrew Mead's great Node course on udemy.com.
The widget was reverse-engineered from weatherstack homepage then modified and then served with handlebars.


