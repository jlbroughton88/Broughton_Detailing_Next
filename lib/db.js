// Creates a connection to MySql database using credentials
// exports a function that ensures connections are closed once the query has resolved


const mysql = require("serverless-mysql");
require("dotenv").config();

const db = mysql({
    config: {
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

exports.query = async query => {
    console.log("THESE ARE THE ENV VARIABLES");
    console.log("HOST: " + process.env.HOST)
    console.log("DATABASE: " + process.env.DATABASE)
    console.log("USERNAME: " + process.env.USERNAME)
    console.log("PASSWORD: " + process.env.PASSWORD)
    try {
        const results = await db.query(query);
        await db.end()
        return results
    } catch (error) {
        return {error}
    }
}