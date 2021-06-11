const prod = 0;
const path  = require('path');
const express = require('express');
const hbs = require('hbs');
const request = require('request');

const port = process.env.PORT || 3000;
const app = express();
const publicPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// configure handlebars  engine directory paths
app.set('view engine','hbs');
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


// setup static directory
app.use(express.static(publicPath));


// weather routes insertion (hbs template/request model)
app.use(require('./routers/weather_router'));


// default pages routes

app.get('',(req,res) =>{
  res.render('weather');
});

app.get('/',(req,res) =>{
  res.render('weather');
});

// 404 page
app.get('*',(req,res) =>{
  res.send("Sorry the link you followed doesn't exist");

});



// continue server
app.listen(port,()=>{
    console.log('Server is up on port:',port);
});
