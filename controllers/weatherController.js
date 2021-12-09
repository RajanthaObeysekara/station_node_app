const { dataPoint } = require("../model/dataPoint")

const insertDataWeatherStation = (req, res) => {
    let newData = new dataPoint(req.body);
    //station validation
    
    //validate existance of the data point
    
}

module.exports = {insertDataWeatherStation}