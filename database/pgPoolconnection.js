const { Client } = require('pg')
require('dotenv').config();


module.exports.command = async function (query, values) {
    const client = new Client({
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: process.env.PASSWORD,
        port: process.env.DBPORT,
    })
    try {
        var connection = client.connect()
        //console.log(connection)
    } catch (error) {
        //console.log(error)
    }

    try {
        const res = await client.query(query, values)
        //console.log(res)
        return res.rows;
    } catch (err) {
       // console.log(err.stack)
    }
}