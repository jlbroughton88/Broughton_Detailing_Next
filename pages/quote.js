import React, {useState} from "react";
import axios from "axios";
import moment from "moment";
import Navbar from "./comps/navbar.js";
import "../public/static/css/quote.scss";

const Quote = () => {
  const [formData, setFormData] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  const [detail, setDetail] = useState("");

const handleEmailChange = (e) => {
  setEmail(e.target.value);
};
const handlePhoneChange = (e) => {
  setPhone(e.target.value);
};
const handleNameChange = (e) => {
  setName(e.target.value);
};
const handleMakeChange = (e) => {
  setMake(e.target.value);
};
const handleModelChange = (e) => {
  setModel(e.target.value);
};
const handleDetailChange = (e) => {
  console.log(e.target.value);
  setDetail(e.target.value);
};
const handleConditionChange = (e) => {
  console.log(e.target.value);
  setCondition(e.target.value);
};


  const handleQuoteSubmit = (e) => {

    let quoteMsg = document.getElementById("quoteMessage");
    let date = moment().format('L');
    let formattedDate = date.replace(/\//g, "-");
    console.log(formattedDate)

    axios
      .post(`https://www.broughtondetailing.com/api/addquote`, {
        first_name: name,
        email: email,
        phone_number: phone,
        car_make: make,
        car_model: model,
        car_detail: detail,
        car_condition: condition,
        date: formattedDate,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    quoteMsg.style.display = "block";
    setTimeout(() => {
      quoteMsg.style.display = "none";
    }, 5000);
    e.preventDefault();
  };
  

  //   const handleFormInput = e => {
  //     let input = document.getElementById("emailInput");
  //     let thankYou = document.getElementById("thankYou");
  //     axios
  //       .post(`https://www.broughtondetailing.com/api/addclient`, {
  //         email: formData
  //       })
  //       .then(response => console.log(response))
  //       .catch(err => console.log(err));
  //     if (formData !== "") {
  //       thankYou.style.display = "block";
  //     }

  //     input.value = "";
  //     setTimeout(() => {
  //       thankYou.style.display = "none";
  //     }, 5000);

  //     e.preventDefault();
  //   };
  return (
    <div className="quoteMother">
      <Navbar />
      <div className="quoteMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Get a Quote!</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="quoteDiv">
            {/* <h2 className="quoteHead">Get a quote!</h2> */}
            <form onSubmit={handleQuoteSubmit}>
        <input
          placeholder="First Name"
          onChange={handleNameChange}
          type="text"
        />
        <input
          placeholder="Email"
          onChange={handleEmailChange}
          required
          type="email"
        />
        <input
          placeholder="Phone Number"
          onChange={handlePhoneChange}
          required
          type="tel"
        />

        <input
          placeholder="Your Car's Make"
          onChange={handleMakeChange}
          required
          type="text"
        />
        <input
          placeholder="Your Car's Model"
          onChange={handleModelChange}
          required
          type="text"
        />

        <input placeholder="Requested Detail (Full, Exterior, or Interior)" onChange={handleDetailChange}/>
        <textarea
          placeholder="How would you describe the condition of your vehicle? (optional, but appreciated)"
          onChange={handleConditionChange}
          type=""
          // required
        />
        <input className="quoteSubmit" type="submit" />
      </form>
        <h4 id="quoteMessage" className="quoteMessage">
          We'll get back to you as soon as possible!
        </h4>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Quote;
