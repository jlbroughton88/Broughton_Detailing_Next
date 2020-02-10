const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports = async (req, res) => {
    const allClients = await db.query(escape`SELECT * FROM clients`)

    res.status(200).json(allClients)
}