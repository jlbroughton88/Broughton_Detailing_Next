import React, { useState, useEffect } from "react";
import "../public/css/Work.scss";
import chevytruck1 from "../public/images/chevytruck1.jpg";
import chevyvan1 from "../public/images/chevyvan1.jpeg";
import genesis1 from "../public/images/genesis1.jpg";
import genesis2 from "../public/images/genesis2.jpg";
import genesis3 from "../public/images/genesis3.jpg";
import pilot1 from "../public/images/pilot1.jpg";
import smart1 from "../public/images/smart1.jpg";
import smart2 from "../public/images/smart2.jpg";
import runner1 from "../public/images/4runner1.jpg";
import patriot1 from "../public/images/patriot1.jpg";
import patriotFillDoor from "../public/images/patriotFillDoor.jpg";
import patriotInterior1 from "../public/images/patriotInterior1.jpg";
import patriotInterior2 from "../public/images/patriotInterior2.jpg";
import wrx1 from "../public/images/wrx1.jpg";
import wrx2 from "../public/images/wrx2.jpg";
import wrx3 from "../public/images/wrx3.jpg";
import wrxInterior from "../public/images/wrxInterior.jpg";



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
