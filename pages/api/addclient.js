const db = require("../../lib/db");
const escape = require("sql-template-strings");

module.exports =  async (req, res) => {
    console.log(req.body)
    const newClient = await db.query(escape`INSERT INTO clients (email) VALUES ("${req.body.email}")`);
    res.status(200).json(newClient)
}