const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
    console.log("START OF DB")
    console.log(db)
    console.log("END OF DB")
    res.setHeader('Content-Type', 'application/json')
    const allClients = await db.query(escape`SELECT * FROM clients`)
    console.log("THESE ARE THE CLIENTS ON SERVER SIDE")
    console.log(allClients)
    console.log("END OF CLIENTS")
    res.status(200).json(allClients)
}