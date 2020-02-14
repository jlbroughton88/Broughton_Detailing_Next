const db = require("../../lib/db");
const escape = ("sql-template-strings");

module.exports = async (req, res) => {
    let quo = req.body;
    const newQuote = await db.query(`INSERT INTO quotes (email, first_name, car_make, car_model, car_condition, preferred_service) VALUES ("${quo.email}", "${quo.first_name}", "${quo.car_make}", "${quo.car_model}", "${quo.car_condition}", "${quo.preferred_service}")`)
    res.status(200).json(newQuote);
}