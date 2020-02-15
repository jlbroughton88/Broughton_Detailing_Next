import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useAppContext } from "./comps/context.js";
import "../public/static/css/contact.scss";
import Navbar from "./comps/navbar";
import Facebook from "./comps/logos/facebook";
import Instagram from "./comps/logos/instagram";

const Contact = () => {
  // const { statusUrl } = useAppContext();

  const [formData, setFormData] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [condition, setCondition] = useState("");
  const [detail, setDetail] = useState("");


  const handleChange = e => {
    setFormData(e.target.value);
  };
  
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleNameChange = e => {
    setName(e.target.value)
  }
  const handleMakeChange = e => {
    setMake(e.target.value)
  }
  const handleModelChange = e => {
    setModel(e.target.value)
  }
  const handleConditionChange = e => {
    setCondition(e.target.value)
  }
  const handleDetailChange = e => {
    setDetail(e.target.value)
  }

  const handleQuoteSubmit = e => {
    axios
      .post(`https://www.broughtondetailing.com/api/addquote`, {
        email: email,
        first_name: name,
        car_make: make,
        car_model: model,
        car_condition: condition,
        preferred_service: detail
      })
      .then(response => console.log(response))
      .catch(err => console.log(err))
  }

  const handleFormInput = e => {
    let input = document.getElementById("emailInput");
    let thankYou = document.getElementById("thankYou");
    axios
      .post(`https://www.broughtondetailing.com/api/addclient`, {
        email: formData
      })
      .then(response => console.log(response))
      .catch(err => console.log(err));
    if (formData !== "") {
      thankYou.style.display = "block";
    }

    input.value = "";
    setTimeout(() => {
      thankYou.style.display = "none";
    }, 5000);

    e.preventDefault();
  };



  return (
    <div
      itemScope
      itemType="http://schema.org/ContactPage"
      className="contactMother"
    >
      <Navbar />
      <div className="contactMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Contact</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            
            <div className="letsTalkDiv">
              <h2 className="letsTalkHead">Lets Talk!</h2>
              <p itemprop="creator" className="contactPara name">
                Jacob Broughton
              </p>
              <a
                href="mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry"
                className="emailLink"
              >
                <p className="email contactPara">
                  BroughtonDetailing@gmail.com
                </p>
              </a>
              <a href="tel:+7047708371" className="contactPara phone">
                704-770-8371
              </a>
              <div className="socialDiv">
                <a href="https://facebook.com/broughtondetailing">
                  <Facebook className="socialIcon" />
                </a>
                <a href="https://instagram.com/broughtondetailing">
                  <Instagram className="socialIcon" />
                </a>
              </div>
            </div>
            <div className="quoteDiv">
              <h2 className="quoteHead">Get a quote!</h2>
              <form onSubmit={handleQuoteSubmit}>
                <input placeholder="Email" onChange={handleEmailChange} type="" />
                <input placeholder="First Name" onChange={handleNameChange} type="" />
                <input placeholder="Your Car's Make" onChange={handleMakeChange} type="" />
                <input placeholder="Your Car's Model" onChange={handleModelChange} type="" />
                <input placeholder="Your Car's Condition" onChange={handleConditionChange} type="" />
                <textarea
                  placeholder="What kind of detail are you looking for?"
                  onChange={handleDetailChange}
                  type=""
                />
                <input className="quoteSubmit" type="submit"/>
              </form>
            </div>
            
            
            <div className="signupDiv">
              <h2 className="signupHead">Sign Up For Deals!</h2>
              <form onSubmit={handleFormInput} className="signupForm">
                <div className="signupInputParent">
                  <input
                    className="signupInput"
                    id="emailInput"
                    type="email"
                    onChange={handleChange}
                    placeholder="Your Email (I won't spam)"
                  />
                </div>

                <input
                  className="signupSubmit"
                  type="submit"
                  placeholder="Submit"
                />
              </form>
              <h4 id="thankYou" className="thankYou">
                Thank You!
              </h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
