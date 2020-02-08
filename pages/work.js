import React, { useState, useEffect } from "react";
import "../public/css/work.scss";
const chevytruck1 = require("../public/images/chevytruck1.jpg")
const chevyvan1 = require("../public/images/chevyvan1.jpeg")
const genesis1 = require("../public/images/genesis1.jpg")
const genesis2 = require("../public/images/genesis2.jpg")
const genesis3 = require("../public/images/genesis3.jpg")
const pilot1 = require("../public/images/pilot1.jpg")
const smart1 = require("../public/images/smart1.jpg")
const smart2 = require("../public/images/smart2.jpg")

const runner1 = require("../public/images/4runner1.jpg")

const patriot1 = require("../public/images/patriot1.jpg")
const patriotFillDoor = require("../public/images/patriotFillDoor.jpg")
const patriotInterior1 = require("../public/images/patriotInterior1.jpg")
const patriotInterior2 = require("../public/images/patriotInterior2.jpg")
const wrx1 = require("../public/images/wrx1.jpg")
const wrx2 = require("../public/images/wrx2.jpg")
const wrx3 = require("../public/images/wrx3.jpg")
const wrxInterior = require("../public/images/wrxInterior.jpg")



const Work = () => {
  
  const [loadCount, setLoadCount] = useState(0);
  
  let imageArr = [
    {
      url: chevytruck1,
      alt: "Chevy Silverado (White)"
    },
    {
      url: chevyvan1,
      alt: "Chevy Van (Red)"
    },
    {
      url: genesis1,
      alt: "Hyundai Genesis (White)"
    },
    {
      url: genesis2,
      alt: "Hyundai Genesis (White)"
    },
    {
      url: genesis3,
      alt: "Hyundai Genesis (White)"
    },
    {
      url: pilot1,
      alt: "Honda Pilot (Green)"
    },
    {
      url: smart1,
      alt: "Smart Car (White)"
    },
    {
      url: smart2,
      alt: "Smart Car (White)"
    },
    
    {
      url: runner1,
      alt: "Toyota 4Runner (Silver)"
    },
    {
      url: patriot1,
      alt: "Jeep Patriot (White)"
    },
    {
      url: patriotFillDoor,
      alt: "Jeep Patriot (White)"
    },
    {
      url: patriotInterior1,
      alt: "Jeep Patriot (White)"
    },
    {
      url: patriotInterior2,
      alt: "Jeep Patriot (White)"
    },
    {
      url: wrx1,
      alt: "Subaru WRX (White)"
    },
    {
      url: wrx2,
      alt: "Subaru WRX (White)"
    },
    {
      url: wrx3,
      alt: "Subaru WRX (White)"
    },
    {
      url: wrxInterior,
      alt: "Subaru WRX (White)"
    }
  ];

  const closeNavMenu = () => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  }

  useEffect(() => {
    closeNavMenu();
    let imagesContainer = document.getElementById("imagesGrid");
    let loadingContainer = document.getElementById("loadingContainer");
    console.log(loadCount)
    // console.log(imageArr.length)

    if(loadCount != imageArr.length) {
      imagesContainer.style.display = "none";
      loadingContainer.style.display = "flex";
    } else {
      imagesContainer.style.display = "grid";
      loadingContainer.style.display = "none";
    }
  })

  const loadFunc = (img) => {
    // let image = document.getElementById(img);
    // let imageParent = image.parentNode;
    // imageParent.style.backgroundImage = image.id;

    setLoadCount(loadCount + 1);
  }

// console.log(loadCount)
  return (
    <div className="workMother">
      <div className="workMain">
        {/* <DownArrow className="downArrow"/> */}
        <section className="leftSect">
          <div className="headDiv">
            <h1 className="head">Work</h1>
          </div>
        </section>
        <section className="rightSect">
          <div className="rightSectChild">
            <div id="imagesGrid" className="imagesGrid">

              {imageArr.map(img => (
                
                <div className="imageItem" tabIndex="0" aria-labelledby={img.alt} role="img" alt={img.alt} id={img.url} key={img.url}>
                  <img className="image" src={img.url}  alt={img.alt} onLoad={() => loadFunc(img.url)}/>
                </div>
              ))}
            </div>
            <div id="loadingContainer">
              <h1>Loading...</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
