webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_css_services_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/css/services.scss */ "./public/static/css/services.scss");
/* harmony import */ var _public_static_css_services_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_services_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _comps_quote_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/quote.js */ "./pages/comps/quote.js");
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Services = function Services() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      service = _useState[0],
      setService = _useState[1];

  var handlePackageClick = function handlePackageClick(e) {
    var packages = document.getElementsByClassName("serviceList");
    var slides = document.getElementsByClassName("slide");
    var clickedSlide = e.target;
    var slidesArr = [].slice.call(slides);
    var packagesArr = [].slice.call(packages);
    var clickedPackage = e.target.id + "List";

    for (var i = 0; i < slidesArr.length; i++) {
      slidesArr[i].classList.add("active");

      if (slidesArr[i].id === clickedSlide.id) {
        slidesArr[i].classList.add("active");
      } else {
        slidesArr[i].classList.remove("active");
      }
    }

    for (var _i = 0; _i < packagesArr.length; _i++) {
      if (packagesArr[_i].id === clickedPackage) {
        packagesArr[_i].classList.add("active"); // packagesArr[i].style.display = "block";

      } else {
        packagesArr[_i].classList.remove("active"); // packagesArr[i].style.display = "none";

      }
    }
  };

  var interiorArr = ["Thorough vacuum (Including trunk)", "Windows inside & out", "Door, hood, & trunk jams", "Remove door panel scuffs / Skid marks", "Cleanse dashboard & console", "Dust & clean air vents", "Deep clean leather", "Condition & protect interior", "Shampoo floor mats"];
  var exteriorArr = ["Microfiber wash & dry", "Machine wax", "Protect / finish black trim", "Door, hood, & trunk jams", "Wash tires", "Degrease tires", "Clean wheels", "Wheel wells", "Satin black tire 'gloss'", "Decontaminate / Clay paint (If necessary))", "Bug removal (Within limits)"];
  var fullArr = ["Thorough vacuum (Including trunk)", "Windows inside & out", "Door, hood, & trunk jams", "Remove door panel scuffs / Skid marks", "Cleanse dashboard & console", "Dust & clean air vents", "Deep clean leather", "Condition & protect interior", "Shampoo floor mats", "Microfiber wash & dry", "Machine wax", "Protect / finish black trim", "Wash tires", "Degrease tires", "Clean wheels", "Wheel wells", "Satin black tire 'gloss'", "Decontaminate / Clay paint (If necessary))", "Bug removal (Within limits)"];
  return __jsx("div", {
    className: "servicesMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("div", {
    className: "servicesMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Services"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "servicesGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "serviceTypeRow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("button", {
    value: "Interior",
    onClick: handlePackageClick,
    id: "interior",
    className: "interiorSlide slide active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Interior"), __jsx("button", {
    value: "Exterior",
    onClick: handlePackageClick,
    id: "exterior",
    className: "exteriorSlide slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Exterior"), __jsx("button", {
    value: "Full",
    onClick: handlePackageClick,
    id: "full",
    className: "fullSlide slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Full")), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList active",
    id: "interiorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, interiorArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, item);
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Looking for a quote? ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Click Here!")), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "exteriorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, exteriorArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, item);
  }), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "fullList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, fullArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, item);
  }), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, "here")), " ", "and ask away!"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.14c53a63ca752eefbea5.hot-update.js.map