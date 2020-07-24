const db = require("../../lib/db");
const escape = ("sql-template-strings");

module.exports = async (req, res) => {
    let quo = req.body;
    const newQuote = await db.query(`INSERT INTO quotes (first_name, email, phone_number, car_make, car_model, car_condition, preferred_service, date) 
    VALUES
     ("${quo.first_name}", "${quo.email}", "${quo.phone_number}", "${quo.car_make}", "${quo.car_model}", "${quo.car_condition}", "${quo.car_detail}","${quo.date}")`)
    res.status(200).json(newQuote);
}