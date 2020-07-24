import React, { useState, useEffect } from "react";
import "../public/static/css/services.scss";
import Navbar from "./comps/navbar";
import Link from "next/link"
// import QuoteContainer from "./comps/quote.js";

const Services = () => {
  const [service, setService] = useState();

  const handlePackageClick = e => {
    let packages = document.getElementsByClassName("serviceList");
    let slides = document.getElementsByClassName("slide");
    let clickedSlide = e.target;
    let slidesArr = [].slice.call(slides);
    let packagesArr = [].slice.call(packages);
    let clickedPackage = e.target.id + "List";


    for(let i = 0; i < slidesArr.length; i++) {
      slidesArr[i].classList.add("active");
      if(slidesArr[i].id === clickedSlide.id) {
        slidesArr[i].classList.add("active");
      } else {
        slidesArr[i].classList.remove("active");
      }
    }

    for (let i = 0; i < packagesArr.length; i++) {
      if (packagesArr[i].id === clickedPackage) {
        packagesArr[i].classList.add("active");
        // packagesArr[i].style.display = "block";
      } else {
        packagesArr[i].classList.remove("active")
        // packagesArr[i].style.display = "none";
        
      }
    }
  };

  let interiorArr = [
    "Thorough vacuum (Including trunk)",
    "Windows inside & out",
    "Door, hood, & trunk jams",
    "Remove door panel scuffs / Skid marks",
    "Cleanse dashboard & console",
    "Dust & clean air vents",
    "Deep clean leather",
    "Condition & protect interior",
    "Shampoo floor mats"
  ];

  let exteriorArr = [
    "Microfiber wash & dry",
    "Machine wax",
    "Protect / finish black trim",
    "Door, hood, & trunk jams",
    "Wash tires",
    "Degrease tires",
    "Clean wheels",
    "Wheel wells",
    "Satin black tire 'gloss'",
    "Decontaminate / Clay paint (If necessary))",
    "Bug removal (Within limits)"
  ];

  let fullArr = [
    "Thorough vacuum (Including trunk)",
    "Windows inside & out",
    "Door, hood, & trunk jams",
    "Remove door panel scuffs / Skid marks",
    "Cleanse dashboard & console",
    "Dust & clean air vents",
    "Deep clean leather",
    "Condition & protect interior",
    "Shampoo floor mats",
    "Microfiber wash & dry",
    "Machine wax",
    "Protect / finish black trim",
    "Wash tires",
    "Degrease tires",
    "Clean wheels",
    "Wheel wells",
    "Satin black tire 'gloss'",
    "Decontaminate / Clay paint (If necessary))",
    "Bug removal (Within limits)"
  ]

  return (
    <div className="servicesMother">
      <Navbar />
      <div className="servicesMain">
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Services</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            <div className="servicesGrid">
              <div className="serviceTypeRow">
                <button  value="Interior" onClick={handlePackageClick} id="interior" className="interiorSlide slide active">
                  Interior
                </button>
                <button value="Exterior" onClick={handlePackageClick} id="exterior" className="exteriorSlide slide">
                  Exterior
                </button>
                <button value="Full" onClick={handlePackageClick} id="full" className="fullSlide slide">
                  Full
                </button>
              </div>
              {/* <div
                itemScope
                itemType="http://schema.org/ItemList"
                className="serviceDiv"
              >
              </div> */}



              <div
                itemScope
                itemType="http://schema.org/ItemList"
                className="serviceDiv"
              >
                <ul
                  itemScope
                  itemType="http://schema.org/ItemList"
                  className="serviceList active"
                  id="interiorList"
                >
                  {interiorArr.map(item => (
                    <li key={item} itemProp="itemListElement" className="serviceListItem">
                      {item}
                    </li>
                  ))}

                  <p className="quotePara">
                    <strong>Looking for a quote? </strong> Click{" "}
                    <Link href="/quote">here!</Link>
                  </p>



                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </ul>
              </div>






              <div
                itemScope
                itemType="http://schema.org/ItemList"
                className="serviceDiv"
              >
                <ul
                  itemScope
                  itemType="http://schema.org/ItemList"
                  className="serviceList"
                  id="exteriorList"
                >
                  {exteriorArr.map(item => (
                    <li key={item} itemProp="itemListElement" className="serviceListItem">
                      {item}
                    </li>
                  ))}
                  {/* <div className="conditionNoticeDiv">
                    <h4 className="conditionNotice">Prices are based on a vehicle in average condition.</h4>
                  </div>
                  <div itemProp="itemListElement" className="priceTimeParent">
                    <div className="priceTimeDivExterior">
                      <h4 className="packagePrice">2 Door Car : </h4>
                      <h4 className="packagePrice">4 Door Family Sedan : </h4>
                      <h4 className="packagePrice">
                        Small SUV / 2 Door Pickup :{" "}
                      </h4>
                      <h4 className="packagePrice">
                        Large SUV / 4 Door Pickup :{" "}
                      </h4>
                    </div>
                  </div> */}

<p className="quotePara">
                    <strong>Looking for a quote? </strong> Click{" "}
                    <Link href="/quote">here!</Link>
                  </p>

                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </ul>
              </div>

              {/* Quote component */}





              <div
                itemScope
                itemType="http://schema.org/ItemList"
                className="serviceDiv"
              >
                <ul
                  itemScope
                  itemType="http://schema.org/ItemList"
                  className="serviceList"
                  id="fullList"
                >
                  {fullArr.map(item => (
                    <li key={item} itemProp="itemListElement" className="serviceListItem">
                      {item}
                    </li>
                  ))}
                                    {/* <div className="conditionNoticeDiv">
                    <h4 className="conditionNotice">Prices are based on a vehicle in average condition.</h4>
                  </div>
                  <div itemProp="itemListElement" className="priceTimeParent">
                    <div className="priceTimeDivFull">
                      <h4 className="packagePrice">2 Door Car : </h4>
                      <h4 className="packagePrice">4 Door Family Sedan : </h4>
                      <h4 className="packagePrice">
                        Small SUV / 2 Door Pickup :{" "}
                      </h4>
                      <h4 className="packagePrice">
                        Large SUV / 4 Door Pickup :{" "}
                      </h4>
                    </div>
                  </div> */}

<p className="quotePara">
                    <strong>Looking for a quote? </strong> Click{" "}
                    <Link href="/quote">here!</Link>
                  </p>

                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
