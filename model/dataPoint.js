const { station } = require("./stationModel");
const db_connection = require('../database/pgPoolconnection')

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

        this.ID = dataObject.ID;
        this.PASSWORD = dataObject.PASSWORD;
 
        //weather station
        this.dailyrain = dataObject.data[0].dailyrainMM;
        this.rain = dataObject.data[0].rain;
        this.temperature = dataObject.data[0].tempc;
        this.windDirection = dataObject.data[0].winddir;
        this.windspeed = dataObject.data[0].windspeedkmh;
        this.humidity = dataObject.data[0].humidity;
        this.pressure = dataObject.data[0].baromMM;

        //water level station
        this.waterlevel = dataObject.data[0].waterlevelm;
 
        //general 
        this.date = dataObject.data[0].dateist;
        this.battery = dataObject.health.BAT;
        this.network = dataObject.health.network;
        this.RSSI = dataObject.health.RSSI;

        //station
        this.station = null;

        console.log(this.ID)
        console.log(this.PASSWORD)
        console.log(this.rain)
        console.log(this.temperature)


    }

    //password validation
    async password_validation() {
        const new_station = new station(this.ID, this.PASSWORD);
        await new_station.validate_station();
        if (new_station.station_name == undefined) {
            return false;
        } else {
            this.station = new_station;
            return true;
        }
    }

    async meta_data_generate() {
        await this.station.station_metadata();
    }

    //last reading 
    async upsert_data() {
        const data = await db_connection.command('select * from station where station_id=$1 AND station_password=$2', [this.station_ID, this.station_PASSWROD]);
    }
    //network

    //
}

module.exports = { dataPoint }