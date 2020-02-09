import React, { useEffect } from "react";
import Link from "next/link";
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
              <h2 className="navLogo">Broughton</h2>
              <h2 className="navLogoSecond">Detailing</h2>
            </div>
          </a>
        </Link>

        <div tabIndex="0" className="navLinksDiv">
          <Link  href="/about">
            <a className="navLink">About</a>
          </Link>
          <Link  href="/services">
            <a className="navLink">Services</a>
          </Link>
          <Link  href="/work">
            <a className="navLink">Work</a>
          </Link>
          <Link  href="/contact">
            <a className="navLink">Contact</a>
          </Link>
        </div>
        <div tabIndex="0" onClick={handleMenuOpen} className="burgerMenuDiv">
          {/* <button >Menu</button> */}
          <Menu className="burgerMenu" />
        </div>
        <div tabIndex="0" id="dropDown" className="navDropDown">
          <ul>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/work">
              <li>Work</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
