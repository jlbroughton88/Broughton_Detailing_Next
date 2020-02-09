webpackHotUpdate("static/development/pages/work.js",{

/***/ "./pages/work.js":
/*!***********************!*\
  !*** ./pages/work.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_css_work_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/css/work.scss */ "./public/static/css/work.scss");
/* harmony import */ var _public_static_css_work_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_work_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/work.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var chevytruck1 = __webpack_require__(/*! ../public/static/images/chevytruck1.jpg */ "./public/static/images/chevytruck1.jpg");

var chevyvan1 = __webpack_require__(/*! ../public/static/images/chevyvan1.jpeg */ "./public/static/images/chevyvan1.jpeg");

var genesis1 = __webpack_require__(/*! ../public/static/images/genesis1.jpg */ "./public/static/images/genesis1.jpg");

var genesis2 = __webpack_require__(/*! ../public/static/images/genesis2.jpg */ "./public/static/images/genesis2.jpg");

var genesis3 = __webpack_require__(/*! ../public/static/images/genesis3.jpg */ "./public/static/images/genesis3.jpg");

var pilot1 = __webpack_require__(/*! ../public/static/images/pilot1.jpg */ "./public/static/images/pilot1.jpg");

var smart1 = __webpack_require__(/*! ../public/static/images/smart1.jpg */ "./public/static/images/smart1.jpg");

var smart2 = __webpack_require__(/*! ../public/static/images/smart2.jpg */ "./public/static/images/smart2.jpg");

var runner1 = __webpack_require__(/*! ../public/static/images/4runner1.jpg */ "./public/static/images/4runner1.jpg");

var patriot1 = __webpack_require__(/*! ../public/static/images/patriot1.jpg */ "./public/static/images/patriot1.jpg");

var patriotFillDoor = __webpack_require__(/*! ../public/static/images/patriotFillDoor.jpg */ "./public/static/images/patriotFillDoor.jpg");

var patriotInterior1 = __webpack_require__(/*! ../public/static/images/patriotInterior1.jpg */ "./public/static/images/patriotInterior1.jpg");

var patriotInterior2 = __webpack_require__(/*! ../public/static/images/patriotInterior2.jpg */ "./public/static/images/patriotInterior2.jpg");

var wrx1 = __webpack_require__(/*! ../public/static/images/wrx1.jpg */ "./public/static/images/wrx1.jpg");

var wrx2 = __webpack_require__(/*! ../public/static/images/wrx2.jpg */ "./public/static/images/wrx2.jpg");

var wrx3 = __webpack_require__(/*! ../public/static/images/wrx3.jpg */ "./public/static/images/wrx3.jpg");

var wrxInterior = __webpack_require__(/*! ../public/static/images/wrxInterior.jpg */ "./public/static/images/wrxInterior.jpg");

var Work = function Work() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      loadCount = _useState[0],
      setLoadCount = _useState[1];

  var imageArr = [{
    url: chevytruck1,
    alt: "Chevy Silverado (White)"
  }, {
    url: chevyvan1,
    alt: "Chevy Van (Red)"
  }, {
    url: genesis1,
    alt: "Hyundai Genesis (White)"
  }, {
    url: genesis2,
    alt: "Hyundai Genesis (White)"
  }, {
    url: genesis3,
    alt: "Hyundai Genesis (White)"
  }, {
    url: pilot1,
    alt: "Honda Pilot (Green)"
  }, {
    url: smart1,
    alt: "Smart Car (White)"
  }, {
    url: smart2,
    alt: "Smart Car (White)"
  }, {
    url: runner1,
    alt: "Toyota 4Runner (Silver)"
  }, {
    url: patriot1,
    alt: "Jeep Patriot (White)"
  }, {
    url: patriotFillDoor,
    alt: "Jeep Patriot (White)"
  }, {
    url: patriotInterior1,
    alt: "Jeep Patriot (White)"
  }, {
    url: patriotInterior2,
    alt: "Jeep Patriot (White)"
  }, {
    url: wrx1,
    alt: "Subaru WRX (White)"
  }, {
    url: wrx2,
    alt: "Subaru WRX (White)"
  }, {
    url: wrx3,
    alt: "Subaru WRX (White)"
  }, {
    url: wrxInterior,
    alt: "Subaru WRX (White)"
  }]; //   const closeNavMenu = () => {
  //     let dropdown = document.getElementById("dropDown");
  //     let overlay = document.getElementById("overlay");
  //     dropdown.classList.remove("active");
  //     overlay.classList.remove("active");
  //   }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // closeNavMenu();
    var imagesContainer = document.getElementById("imagesGrid");
    var loadingContainer = document.getElementById("loadingContainer");
    console.log(loadCount); // console.log(imageArr.length)

    if (loadCount != imageArr.length) {
      imagesContainer.style.display = "none";
      loadingContainer.style.display = "flex";
    } else {
      imagesContainer.style.display = "grid";
      loadingContainer.style.display = "none";
    }
  });

  var loadFunc = function loadFunc(img) {
    // let image = document.getElementById(img);
    // let imageParent = image.parentNode;
    // imageParent.style.backgroundImage = image.id;
    setLoadCount(loadCount + 1);
  }; // console.log(loadCount)


  return __jsx("div", {
    className: "workMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx("div", {
    className: "workMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Work"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    id: "imagesGrid",
    className: "imagesGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, imageArr.map(function (img) {
    return __jsx("div", {
      className: "imageItem",
      tabIndex: "0",
      "aria-labelledby": img.alt,
      role: "img",
      alt: img.alt,
      id: img.url,
      key: img.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx("img", {
      className: "image",
      src: img.url,
      alt: img.alt,
      onLoad: function onLoad() {
        return loadFunc(img.url);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }));
  })), __jsx("div", {
    id: "loadingContainer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Loading..."))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ })

})
//# sourceMappingURL=work.js.2bf346d660668d4a5ef3.hot-update.js.map