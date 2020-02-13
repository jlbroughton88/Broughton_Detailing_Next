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

  // const closeNavMenu = () => {
  //   let dropdown = document.getElementById("dropDown");
  //   let overlay = document.getElementById("overlay");
  //   dropdown.classList.remove("active");
  //   overlay.classList.remove("active");
  // }

  // useEffect(() => {
  //   closeNavMenu();
  // })

  const handleChange = e => {
    setFormData(e.target.value);
  };

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
    <div itemScope itemType="http://schema.org/ContactPage" className="contactMother">
      <Navbar />
      <div className="contactMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Contact</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
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
            <div className="letsTalkDiv">
              <h2 className="letsTalkHead">Lets Talk!</h2>
              <p itemprop="creator">Jacob Broughton</p>
              <a
                href="mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry"
                className="emailLink"
              >
                <p className="email">BroughtonDetailing@gmail.com</p>
              </a>
              <a href="tel:+7047708371" className="phone">
                704-770-8371
              </a>
              <div className="socialDiv">
                <a href="https://facebook.com/broughtondetailing">
                  <Facebook className="socialIcon" />
                  </a>
                  <a href="https://instagram.com/broughtondetailing">
                    <Instagram className="socialIcon"/>
                  </a>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
