import React, { useEffect } from "react";
import titleImage from "../public/static/images/genesisWithTitle.jpg";
import Link from "next/link";
import "../public/static/css/index.scss";
import Navbar from "./comps/navbar";

const Index = () => {
  // const closeNavMenu = () => {
  //   let dropdown = document.getElementById("dropDown");
  //   let overlay = document.getElementById("overlay");
  //   dropdown.classList.remove("active");
  //   overlay.classList.remove("active");
  // };

  // useEffect(() => {
  //   closeNavMenu();
  // });

  const reviews = [
    {
      name: "Trent B.",
      text:
        "10/10 very professional and quick, cleaned my interior so good it looked new. Would recommend."
    },
    {
      name: "Geoffrey S.",
      text:
        "Great guy, professional attitude. Worked around my schedule, and came to me. Car looks great!"
    },
    {
      name: "Tanner H.",
      text:
        "Very professional detail, genuine guy who cares about his work. My car came out looking new."
    },
    {
      name: "Louis M.",
      text:
        "Great job on our 96 truck, looks like new. Worked with our schedule. Thanks again!!"
    },
    {
      name: "Kori T.",
      text:
        "Broughton Detailing did an amazing job with my husband's SUV. Jacob did a wonderful job, I will definitely be using his services again and highly recommend him for all your car cleanliness needs!"
    },
    {
      name: "Luidmila B.",
      text:
        "Jacob did a fantastic job cleaning my car and it’s never looked this good! Very convenient and very thorough, would 100% recommend. Thank you!"
    }, 
    {
      name: "Carli R.",
      text:
        "I had some pretty bad stains on all my seats and most of the carpet and Jacob got them all out. Definitely would recommend 10/10"
    }
  ];

  const FAQs = [
    {
      question: "Why not use a drive-thru carwash?",
      answer:
        "Drive-thru car washes may potentially damage your paint, leaving scratches and swirls from the large bristled brushes and harsh contact."
    },
    // {
    //   question: "Will my paint get damaged?",
    //   answer: "Only proven, time-tested techniques are used avoid any paint damage. Unlike traditional drive-thru carwashes, where brushes are slapped onto your vehicle's paintwork, causing scratches and swirls."
    // },
    {
      question: "Will I have to drop my car off?",
      answer: "It is preferred as several variables are controlled during the detailing process, but if you need us to come to you, we will!"
    },
    {
      question: "How much do you charge?",
      answer: `We don't have a fixed rate for details, as each vehicle requires a different kind/amount of attention. Instead please get in touch so we can get you a quote!`,
      link: "/services",
      topic: "services and pricing"
    },
    {
      question: "Do you accept credit cards?",
      answer: "At the moment, no. Only cash or paypal/venmo is accepted."
    },
    {
      question: "How long will the detail take??",
      answer:
        "It really depends which package is chosen and what type of car you have, but average time ranges from about 2.5 hours to 7 hours (depending on the service / condition of vehicle)."
      // link: "/services",
      // topic: "service time-frames"
    }
  ];
  
  return (
    <div itemScope itemType="http://schema.org/WebPage" className="home1Mother">
      <Navbar/>
      <div className="home1Main">
        <section className="leftSect">
          <div  itemProp="description" className="headDiv">
            <h3 className="subHead">Mobile</h3>
            <h1 className="head">Auto Detailing</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            <div className="imgDiv">
              <img src={titleImage} alt="Broughton Detailing" />
            </div>

            <div className="addrParent">
              <div itemProp="about" className="addrDiv">
                <h1 itemProp="description" className="addrTextSmall">Mobile Auto Detailing</h1>
                <h1 itemProp="contentLocation" className="addrText">Located in Matthews, NC</h1>
                {/* <h1 className="addrText2">I'll come to you</h1> */}
                <h1 className="CTAText">I'll come to you!</h1>
                <div className="buttonsDiv">
                  <a href="mailto:broughtondetailing@gmail.com?subject=Detail Inquiry">
                    <div className="CTA">Lets talk!</div>
                  </a>
                  <Link href="/services">
                    <a>
                      <div className="CTA">Services</div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div itemScope itemType="http://schema.org/FAQPage" className="FAQDiv">
              <div className="FAQHeadDiv">
                <h2 className="FAQHead">FAQ</h2>
              </div>
              <div className="FAQListDiv">
                {FAQs.map(faq => (
                  <div key={faq.question} className="faqItem">
                    <h2 itemScope itemType="http://schema.org/Questione" className="faqQuestion">{faq.question}</h2>
                    <p itemScope itemType="http://schema.org/acceptedAnswer" className="faqAnswer">{faq.answer}</p>
                    {faq.link && faq.topic && (
                      <p className="faqLink">
                        Click{" "}
                        <Link href={faq.link}>
                          <a>here</a>
                        </Link>{" "}
                        for more info on {faq.topic}.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="reviewsParent">
              <div className="reviewsHeadDiv">
                <h2 className="reviewsHead">Here's what people are saying!</h2>
              </div>
              <div className="reviewsDiv">


                
                {/* <div className="reviewsScroll">
                  {reviews.map(rev => (
                    <div itemScope itemType="http://schema.org/Recommendation" key={rev.text} className="revItem">
                      <p itemProp="reviewBody" className="revText">{rev.text}</p>
                      <p itemProp="author" className="revName">{rev.name}</p>
                    </div>
                  ))}
                </div> */}
                <div className="reviewsChild">
                   <p className="reviewText">"Great guy, professional attitude. Worked around my schedule, and came to me. Car looks great!"</p>
                   <p className="reviewName">Geoffrey S.</p>

                </div>

                <div className="reviewsChild">
                  <p className="reviewText">"Great job on our 96 truck, looks like new. Worked with our schedule. Thanks again!!"</p>
                  <p className="reviewName">Louis M.</p>
                  
                </div>

                <div className="reviewsChild">
                  <p className="reviewText">"Broughton Detailing did an amazing job with my husband's SUV. I will definitely be using his services again."</p>
                  <p className="reviewName">Kori T.</p>
                </div>

              </div>               
              <div>
                <p className="reviewFooter">Just to name a few!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Index;
