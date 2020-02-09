webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/comps/logos/menusvg.js":
/*!**************************************!*\
  !*** ./pages/comps/logos/menusvg.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/comps/logos/menusvg.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var MenuSVG = function MenuSVG() {
  var style1 = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: 2
  };
  var style2 = {
    fill: "#b3b3b3"
  };
  return __jsx("svg", {
    width: "50px",
    height: "50px",
    viewBox: "0 0 209 209" //   version="1.1"
    ,
    style: style1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("path", {
    d: "M187.457,138.833c0,-0.874 -0.347,-1.712 -0.965,-2.33c-0.618,-0.618 -1.456,-0.965 -2.33,-0.965c-21.17,0 -137.859,0 -159.747,0c-0.938,0 -1.838,0.373 -2.502,1.036c-0.664,0.664 -1.037,1.564 -1.037,2.503c0,5.683 0,16.774 0,22.377c0,1.886 1.529,3.415 3.415,3.415c21.593,0 138.96,0 159.951,0c1.776,0 3.215,-1.439 3.215,-3.215c0,-5.614 0,-17.15 0,-22.821Z",
    style: style2,
    className: "pathSVG",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("path", {
    d: "M187.457,46.991c0,-0.874 -0.347,-1.712 -0.965,-2.33c-0.618,-0.618 -1.456,-0.965 -2.33,-0.965c-21.17,0 -137.859,0 -159.747,0c-0.938,0 -1.838,0.372 -2.502,1.036c-0.664,0.664 -1.037,1.564 -1.037,2.503c0,5.683 0,16.774 0,22.377c0,1.886 1.529,3.415 3.415,3.415c21.593,0 138.96,0 159.951,0c1.776,0 3.215,-1.44 3.215,-3.215c0,-5.615 0,-17.15 0,-22.821Z",
    style: style2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("path", {
    d: "M187.457,92.844c0,-0.874 -0.347,-1.712 -0.965,-2.33c-0.618,-0.618 -1.456,-0.966 -2.33,-0.966c-21.17,0 -137.859,0 -159.747,0c-0.938,0 -1.838,0.373 -2.502,1.037c-0.664,0.663 -1.037,1.564 -1.037,2.502c0,5.684 0,16.774 0,22.378c0,1.885 1.529,3.414 3.415,3.414c21.593,0 138.96,0 159.951,0c1.776,0 3.215,-1.439 3.215,-3.214c0,-5.615 0,-17.15 0,-22.821Z",
    style: style2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuSVG);

/***/ }),

/***/ "./pages/comps/navbar.js":
/*!*******************************!*\
  !*** ./pages/comps/navbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logos_menusvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos/menusvg */ "./pages/comps/logos/menusvg.js");
/* harmony import */ var _public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/css/navbar.scss */ "./public/static/css/navbar.scss");
/* harmony import */ var _public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/comps/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar() {
  var handleMenuOpen = function handleMenuOpen(e) {
    var dropdown = document.getElementById("dropDown");
    var overlay = document.getElementById("overlay");

    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    } else {
      dropdown.classList.add("active");
      overlay.classList.add("active");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var dropdown = document.getElementById("dropDown");
    var overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  });

  var overlayClose = function overlayClose(e) {
    var dropdown = document.getElementById("dropDown");

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      dropdown.classList.remove("active");
    }
  };

  return __jsx("nav", {
    className: "navMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "navMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    onClick: overlayClose,
    className: "",
    id: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "navLogoDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "navLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Broughton"), __jsx("h2", {
    className: "navLogoSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Detailing")))), __jsx("div", {
    tabIndex: "0",
    className: "navLinksDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navLink",
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navLink",
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navLink",
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Work")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navLink",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    tabIndex: "0",
    onClick: handleMenuOpen,
    className: "burgerMenuDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_logos_menusvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "burgerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("div", {
    tabIndex: "0",
    id: "dropDown",
    className: "navDropDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Work")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Contact"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_images_genesisWithTitle_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/images/genesisWithTitle.jpg */ "./public/static/images/genesisWithTitle.jpg");
/* harmony import */ var _public_static_images_genesisWithTitle_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_images_genesisWithTitle_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_static_css_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/static/css/index.scss */ "./public/static/css/index.scss");
/* harmony import */ var _public_static_css_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Index = function Index() {
  // const closeNavMenu = () => {
  //   let dropdown = document.getElementById("dropDown");
  //   let overlay = document.getElementById("overlay");
  //   dropdown.classList.remove("active");
  //   overlay.classList.remove("active");
  // };
  // useEffect(() => {
  //   closeNavMenu();
  // });
  var reviews = [{
    name: "Trent B.",
    text: "10/10 very professional and quick, cleaned my interior so good it looked new. Would recommend."
  }, {
    name: "Geoffrey S.",
    text: "Great guy, professional attitude. Worked around my schedule, and came to me. Car looks great!"
  }, {
    name: "Tanner H.",
    text: "Very professional detail, genuine guy who cares about his work. My car came out looking new."
  }, {
    name: "Louis M.",
    text: "Great job on our 96 truck, looks like new. Worked with our schedule. Thanks again!!"
  }, {
    name: "Kori T.",
    text: "Broughton Detailing did an amazing job with my husband's SUV. Jacob did a wonderful job, I will definitely be using his services again and highly recommend him for all your car cleanliness needs!"
  }, {
    name: "Luidmila B.",
    text: "Jacob did a fantastic job cleaning my car and it’s never looked this good! Very convenient and very thorough, would 100% recommend. Thank you!"
  }];
  var FAQs = [{
    question: "Why not use a drive-thru carwash?",
    answer: "Drive-thru car washes may potentially damage your paint, leaving micro-scratches from the large bristled brushes."
  }, {
    question: "Will my paint get damaged?",
    answer: "Not at all! We use proven techniques to avoid any paint damage."
  }, {
    question: "Will I have to drop my car off?",
    answer: "Nope, we'll come to you!"
  }, {
    question: "How much do you charge?",
    answer: "Broughton Detail's rates start at just $35!",
    link: "/services",
    topic: "services and pricing"
  }, {
    question: "Do you accept credit cards?",
    answer: "At the moment, no. Only cash or paypal/venmo is accepted."
  }, {
    question: "How long will the detail take??",
    answer: "It really depends which package is chosen and what type of car you have, but average time ranges from about 1.5 hours to 4 hours.",
    link: "/services",
    topic: "service time-frames"
  }];
  return __jsx("div", {
    className: "home1Mother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: "home1Main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("h3", {
    className: "subHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Mobile"), __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Auto Detailing"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("div", {
    className: "imgDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("img", {
    src: _public_static_images_genesisWithTitle_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Broughton Detailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })), __jsx("div", {
    className: "addrParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    className: "addrDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("h1", {
    className: "addrTextSmall",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Mobile Auto Detailing"), __jsx("h1", {
    className: "addrText",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Located in Matthews, NC"), __jsx("h1", {
    className: "addrText2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "I'll come to you"), __jsx("div", {
    className: "buttonsDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Detail Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("button", {
    className: "CTA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Lets talk!")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("button", {
    className: "CTA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Services"))))), __jsx("div", {
    className: "FAQDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "FAQHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("h2", {
    className: "FAQHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "FAQ")), __jsx("div", {
    className: "FAQListDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, FAQs.map(function (faq) {
    return __jsx("div", {
      key: faq.question,
      className: "faqItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("h2", {
      className: "faqQuestion",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, "\"", faq.question, "\""), __jsx("p", {
      className: "faqAnswer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, faq.answer), faq.link && faq.topic && __jsx("p", {
      className: "faqLink",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Click", " ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: faq.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "here")), " ", "for more info on ", faq.topic, "."));
  }))), __jsx("div", {
    className: "reviewsParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, __jsx("div", {
    className: "reviewsHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("h2", {
    className: "reviewsHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Here's what people are saying!")), __jsx("div", {
    className: "reviewsDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("div", {
    className: "reviewsScroll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, reviews.map(function (rev) {
    return __jsx("div", {
      key: rev.text,
      className: "revItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("p", {
      className: "revText",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, rev.text), __jsx("p", {
      className: "revName",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }, rev.name));
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.de47a6fd6280a0df8fec.hot-update.js.map