import React from "react";
import "../../public/static/css/quote.scss";

const Quote = () => {
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    setCondition(e.target.value);
  };

  const handleQuoteSubmit = () => {
    axios
      .post(`https://www.broughtondetailing.com/api/addquote`, {
        email: email,
        first_name: name,
        car_make: make,
        car_model: model,
        condition: condition,
        condition: detail,
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
    <div className="quoteDiv">
      <h2 className="quoteHead">Get a quote!</h2>
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
          onChange={handleEmailChange}
          required
          type="email"
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

        <input placeholder="Requested Detail (Full, Exterior, or Interior)" />
        <textarea
          placeholder="How would you describe the condition of your vehicle? (optional, but appreciated)"
          onChange={handleDetailChange}
          type=""
          // required
        />
        <input className="quoteSubmit" type="submit" />
      </form>
      <h4 id="quoteMessage" className="quoteMessage">
        We'll get back to you as soon as possible!
      </h4>
    </div>
  );
};

export default Quote;
