const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const allClients = await db.query(escape`SELECT * FROM clients`)
    console.log("THESE ARE THE CLIENTS")
    console.log(allClients)
    console.log("END OF CLIENTS")
    res.status(200).json(allClients)
}