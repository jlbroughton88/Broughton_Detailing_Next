// Creates a connection to MySql database using credentials
// exports a function that ensures connections are closed once the query has resolved


const mysql = require("serverless-mysql");
console.log("this is the db.js file")

const db = mysql({
    config: {
        host: process.env.HOST,
        database: process.env.DATABASE,
        user: process.env.USERNAME,
        password: process.env.PASSWORD
    }
})

exports.query = async query => {
    try {
        const results = await db.query(query);
        await db.end()
        return results
    } catch (error) {
        console.log("ERROR FROM DB")
        return {error}
    }
}