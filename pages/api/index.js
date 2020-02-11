const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    const allClients = await db.query(escape`SELECT * FROM clients`)
    console.log(allClients)
    res.status(200).json(allClients)
}