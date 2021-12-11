const express = require('express');
require('dotenv').config();
const weatherData = require('./routes/weather/weatherData')
const app = express();

app.use(express.json())


//routes
app.use('/update',weatherData);


//    /weatherstation/updateweatherstation [post]
//    /waterlevelgauge/updatewaterlevelgauge [post]

port  =process.env.PORT
app.listen(port,()=>{
    console.log(`Application is working on port ${port}`);
})