const { station } = require("./stationModel");

class dataPoint {
    /*
    ID
    PASSWORD
    action
    softwareType
    version
    health [BAT,RSSI]
    data [dateist,waterlevel]
    */
    constructor(dataObject) {
        console.log(dataObject)
        this.ID = dataObject.ID;
        this.PASSWORD = dataObject.PASSWORD;
        // this.Action = dataObject.Action;
        // this.SoftwareType = dataObject.softwareType;
        // this.BAT = dataObject.BAT;
        // this.RSSI = dataObject.RSSI;
        console.log(this.ID)
        console.log(this.PASSWORD)
    }

    //password validation
    password_validation(){
        let new_station = new station(ID=this.id,this.PASSWORD=this.PASSWORD);
        let station_validation = new_station.validate_station();
            //return station validation fail
    }

    //last reading 
    get_last_reading(){
        
    }
    //network

    //
}

module.exports = { dataPoint }