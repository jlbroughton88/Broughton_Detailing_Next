import React, { useState, useEffect } from "react";
import "../public/static/css/services.scss";
import Navbar from "./comps/navbar";

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
    "Windows inside & out",
    "Thorough vacuum (Including trunk)",
    "Door sills",
    "Door jams",
    "Trunk jams",
    "Hood jams",
    "Remove door panel scuffs / Skid marks",
    "Clean dashboard",
    "Clean console",
    "Vents cleaned",
    "Deep clean leather",
    "Protect leather",
    "Dust surfaces",
    "Condition & protect interior",
    "Shampoo floor mats",
    "Shampoo carpets",
    "Fabric guard cloth (seating, carpet, headliner)"
  ];

  let exteriorArr = [
    "Windows inside & out",
    "Wash the car",
    "Dry the car",
    "Door sills",
    "Door jams",
    "Trunk jams",
    "Hood jams",
    "Wash tires",
    "Degrease tires",
    "Face of wheels",
    "Wheel wells",
    "Barrels of wheels",
    "Non-sling dressing on tires",
    "Decontaminate / Clay paint (If necessary))",
    "Light tar & bug removal (within reason)"
  ];

  let fullArr = [
    "Windows inside & out",
    "Thorough vacuum (Including trunk)",
    "Door sills",
    "Door jams",
    "Trunk jams",
    "Hood jams",
    "Remove door panel scuffs / Skid marks",
    "Clean dashboard",
    "Clean console",
    "Vents cleaned",
    "Deep clean leather",
    "Protect leather",
    "Dust surfaces",
    "Condition & protect interior",
    "Shampoo floor mats",
    "Shampoo carpets",
    "Fabric guard cloth (seating, carpet, headliner)",
    "Wash the car",
    "Dry the car",
    "Wash tires",
    "Degrease tires",
    "Face of wheels",
    "Wheel wells",
    "Barrels of wheels",
    "Non-sling dressing on tires",
    "Decontaminate / Clay paint (If necessary))",
    "Light tar & bug removal (within reason)"
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

                  <div itemProp="itemListElement" className="priceTimeParent">
                    <div className="priceTimeDivInterior">
                      <h4 className="packagePrice">2 Door Car : </h4>
                      <h4 className="packagePrice">4 Door Family Sedan : </h4>
                      <h4 className="packagePrice">
                        Small SUV / 2 Door Pickup :{" "}
                      </h4>
                      <h4 className="packagePrice">
                        Large SUV / 4 Door Pickup :{" "}
                      </h4>
                    </div>
                  </div>
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
                  </div>
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
                  id="fullList"
                >
                  {fullArr.map(item => (
                    <li key={item} itemProp="itemListElement" className="serviceListItem">
                      {item}
                    </li>
                  ))}
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
                  </div>
                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </ul>
              </div>

              {/* <div className="premiumHeadDiv">
                <h2 className="premiumHead">Premium Services</h2>
              </div>

              <div itemProp="itemListElement" className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="interior"
                  className="serviceHead"
                >
                  Interior Conditioning
                </div>
                <div className="serviceList" id="interiorDesc">
                  <p
                    itemScope
                    itemType="http://schema.org/HowToTip"
                    className="serviceListItem"
                  >
                    Plastics and other vinyl-like interior surfaces are very
                    susceptable to damage from the sun over time, as well as
                    from natural body oils. <br />
                    <br />
                    This sun damage mainly causes the color to fade. So rather
                    than the deep color that was there from the factory, the
                    plastics begin to look a bit develop. Protecting and
                    conditioning these surfaces is vital to keeping them looking
                    fantastic.
                  </p>
                  <br />
                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </div>
              </div> */}

              {/* <div itemProp="itemListElement" className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="wheels"
                  className="serviceHead"
                >
                  Wheel Service
                </div>
                <div className="serviceList" id="wheelsDesc">
                  <p itemScope itemType="http://schema.org/HowToTip" className="serviceListItem">
                    The first glance that people give to cars is usually
                    straight to the wheels.
                    <br />
                    <br />
                    Over time, wheels tend to gather lots of brake dust from
                    continuous brake pad wear while driving. This break dust
                    builds up on the wheel and can actually embed itself into
                    the wheel, causing permanant damage if not taken care of.
                    Not to mention, clean wheels just look fantastic. Along with
                    getting that brake dust taken care of, applying a fresh coat
                    of tire shine, cleaning the wheel wells, and inner barrel of
                    the wheel are also taken care of.
                  </p>
                  <br />
                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </div>
              </div>

              <div itemProp="itemListElement" className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="leather"
                  className="serviceHead"
                >
                  Leather Treatment
                </div>
                <div  className="serviceList" id="leatherDesc">
                  <p itemScope itemType="http://schema.org/HowToTip" className="serviceListItem">
                    Leather is important to maintain. Over time, if cared for
                    correctly, it develops a wonderful finish called a patina,
                    or a 'sheen'. This adds a bit of character to the leather.
                    <br />
                    <br />
                    This is caused by the sun, dirt particles, and your natural
                    body oils. If cared for improperly, leather starts to crack
                    and actually lose some of it's color.
                  </p>
                  <br />
                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </div>
              </div>

              <div itemProp="itemListElement" className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="carpets"
                  className="serviceHead"
                >
                  Carpet & Seat Cleaning
                </div>
                <div className="serviceList" id="carpetsDesc">
                  <p itemScope itemType="http://schema.org/HowToTip" className="serviceListItem">
                    Carpets are often overlooked because we're always stepping
                    and sitting on them, but their cleanliness actually
                    effect the experience quite a lot. Past the obvious, (or not-so-obvious) visual
                    appearance, they tend to hold the majority of whatever smell
                    seems to be locked in the car.
                    <br />
                    <br />
                    You'd be amazed at how much dirt and gunk usually comes out of seats/carpets that look pretty clean.
                    This is a great way to really restore the feel of your interior cabin.
                  </p>
                  <br />
                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                </div>
              </div> */}

              {/* <div itemProp="itemListElement" className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="paint"
                  className="serviceHead"
                >
                  Paint Revitalization
                </div>
                <div className="serviceList" id="paintDesc">
                  <p itemScope itemType="http://schema.org/HowToTip" className="serviceListItem">
                    Paint can make all the difference visually.
                    <br />
                    <br />
                    Firstly, (if paint clearly contains contaminants), a clay
                    bar will be used to safely extract the contaminants that are
                    embeded into the paint. Secondly, after the paint is smooth
                    to the touch and lacking any grit feeling, wax will be
                    applied. Wax creates a hydrophobic effect, making water bead
                    off the surface rather than sheeting off.
                    <br />
                    <br />
                    Along with the beading, wax provides an incredible gloss to
                    the paint, as well as very smooth to the touch (I recommend
                    avoiding contact though, without any lubrication that is.).
                  </p>
                  <br />
                  <p className="questionPara">
                    <strong className="italic">Any questions?</strong> Click{" "}
                    <a href="mailto:broughtondetailing@gmail.com?subject=Services Inquiry">
                      <strong className="link">here</strong>
                    </a>{" "}
                    and ask away!
                  </p>
                  <br />
                  <p className="serviceNotice">
                    <strong className="italic">Notice:</strong> Paint correction
                    is not offered in this service.
                  </p>
                </div>
              </div> */}
              {/* <div className="serviceDiv">
                <div
                  onClick={handlePackageClick}
                  id="all"
                  className="serviceHead"
                >
                 All In
                </div>
                <div className="serviceList" id="allDesc">
                  <p className="serviceListItem">
                    Paint can make all the difference visually.
                    <br />
                    <br />
                    Firstly, (if paint clearly contains contaminants), a clay
                    bar will be used to safely extract the contaminants that are
                    embeded into the paint. Secondly, after the paint is smooth
                    to the touch and lacking any grit feeling, wax will be
                    applied. Wax creates a hydrophobic effect, making water bead
                    off the surface rather than sheeting off.
                    <br />
                    <br />
                    Along with the beading, wax provides an incredible gloss to
                    the paint, as well as very smooth to the touch (I recommend
                    avoiding contact though, without any lubrication that is.).
                  </p>
                  <br />
                  <p className="serviceNotice">
                    <strong className="italic">Notice:</strong> Paint correction
                    is not offered in this service.
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
