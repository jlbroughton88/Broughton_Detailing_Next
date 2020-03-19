import React, { useEffect } from "react";
import Link from "next/link";
import LogoSVG from "./logos/logo";
import Menu from "./logos/menusvg";
import "../../public/static/css/navbar.scss";

const Navbar = () => {
  const handleMenuOpen = e => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    } else {
      dropdown.classList.add("active");
      overlay.classList.add("active");
    }
  };

  useEffect(() => {
    let dropdown = document.getElementById("dropDown");
    let overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  });

  const overlayClose = e => {
    let dropdown = document.getElementById("dropDown");
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      dropdown.classList.remove("active");
    }
  };

  return (
    <nav className="navMother">
      <div className="navMain">
        <div onClick={overlayClose} className="" id="overlay"></div>
        <Link href="/">
          <a>
            <div className="navLogoDiv">
              <LogoSVG/>
              {/* <h2 className="navLogo">Broughton</h2>
              <h2 className="navLogoSecond">Detailing</h2> */}
            </div>
          </a>
        </Link>

        <ul
          itemScope
          itemType="http://schema.org/ItemList"
          tabIndex="0"
          className="navLinksDiv"
        >
          <Link href="/about">
            <a itemProp="itemListElement" className="navLink">
              <li itemProp="ListItem" className="navListItem">About</li>
            </a>
          </Link>
          <Link href="/services">
            <a itemProp="itemListElement" className="navLink">
              <li itemProp="ListItem" className="navListItem">Services</li>
            </a>
          </Link>
          <Link href="/work">
            <a itemProp="itemListElement" className="navLink">
              <li itemProp="ListItem" className="navListItem">Work</li>
            </a>
          </Link>
          <Link href="/contact">
            <a itemProp="itemListElement" className="navLink">
              <li itemProp="ListItem" className="navListItem">Contact</li>
            </a>
          </Link>
        </ul>
        <div tabIndex="0" onClick={handleMenuOpen} className="burgerMenuDiv">
          {/* <button >Menu</button> */}
          <Menu className="burgerMenu" />
        </div>
        <div tabIndex="0" id="dropDown" className="navDropDown">
          <ul itemScope itemType="http://schema.org/ItemList">
            <Link href="/about">
              <a itemProp="itemListElement" >
                 <li itemProp="ListItem">About</li>
              </a>
             
            </Link>
            <Link href="/services">
            <a itemProp="itemListElement" >
              <li itemProp="ListItem">Services</li>
            </a>
              
            </Link>
            <Link href="/work">
            <a itemProp="itemListElement" >
              <li itemProp="ListItem" >Work</li>
            </a>
              
            </Link>
            <Link href="/contact">
            <a itemProp="itemListElement" >
              <li itemProp="ListItem">Contact</li>
            </a>
              
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
