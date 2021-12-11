const { dataPoint } = require("../model/dataPoint")

const insertDataWeatherStation =async (req, res) => {
    let newData = new dataPoint(req.body);
    let password_validation = await newData.password_validation() 
    if(password_validation == false){
        res.status(404).json({
            'Message' : 'Station not found',
        });
        return 
    }
    //generate meta data
    let meta_data = await newData.meta_data_generate();
    
    res.json(req.body)
}

module.exports = {insertDataWeatherStation}