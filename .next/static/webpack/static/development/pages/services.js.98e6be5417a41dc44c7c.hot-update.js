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
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Services = function Services() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      service = _useState[0],
      setService = _useState[1];

  var handlePackageClick = function handlePackageClick(e) {
    var packages = document.getElementsByClassName("serviceList");
    var packagesArr = [].slice.call(packages);
    var clickedPackage = e.target.id + "List";

    for (var i = 0; i < packagesArr.length; i++) {
      if (packagesArr[i].id === clickedPackage) {
        packagesArr[i].classList.add("active");
        packagesArr[i].style.display = "block";
      } else {
        packagesArr[i].style.display = "none";
      }
    }
  };

  var interiorArr = ["Windows Inside & Out", "Thorough vacuum (Including trunk)", "Door sills", "Door Jams", "Trunk Jams", "Hood Jams", "Remove door panel scuffs / Skid marks", "Clean dashboard", "Clean console", "Vents cleaned", "Deep clean leather", "Protect leather", "Dust Surfaces", "Condition & Protect Interior", "Shampoo Floor Mats", "Shampoo Carpets", "Fabric Guard cloth (seating, carpet, headliner)"];
  var exteriorArr = ["Windows Inside & Out", "Wash the car", "Dry the car", "Door sills", "Door Jams", "Trunk Jams", "Hood Jams", "Wash tires", "Degrease tires", "Face of Wheels", "Wheel Wells", "Barrels of wheels", "Non-sling dressing on tires", "Wash the car", "Dry the car", "Decontaminate / Clay the paint", "Light tar & bug removal (within reason)"];
  return __jsx("div", {
    className: "servicesMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("div", {
    className: "servicesMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Services"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "servicesGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "basics",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "The Basics"), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceListBasics",
    id: "basicsList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("li", {
    itemProp: "itemListElement",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "- Hand Washed"), __jsx("li", {
    itemProp: "itemListElement",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "- Windows Inside & Out"), __jsx("li", {
    itemProp: "itemListElement",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "- Door Jams"), __jsx("li", {
    itemProp: "itemListElement",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "- Clean Plastics / Dust"), __jsx("li", {
    itemProp: "itemListElement",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "- Shampoo Floor Mats"), __jsx("li", {
    itemProp: "itemListElement",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "- Vacuum"), __jsx("div", {
    itemProp: "itemListElement",
    className: "priceTimeParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("p", {
    className: "priceRubric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Cars ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "/"), " SUVs ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "/"), " Minivans"), __jsx("div", {
    className: "priceTimeDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("h3", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "$45 / $55 / $65"), __jsx("h3", {
    className: "packageTime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "1.5 - 2.5 hours"))))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "interior",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Interior"), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "interiorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, interiorArr.map(function (item) {
    return __jsx("li", {
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, item);
  }), __jsx("div", {
    itemProp: "itemListElement",
    className: "priceTimeParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("div", {
    className: "priceTimeDivInterior",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "2 Door Car : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "4 Door Family Sedan : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "Small SUV / 2 Door Pickup :", " "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Large SUV / 4 Door Pickup :", " "))), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "exterior",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Exterior"), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "exteriorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, exteriorArr.map(function (item) {
    return __jsx("li", {
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, item);
  }), __jsx("div", {
    itemProp: "itemListElement",
    className: "priceTimeParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "priceTimeDivExterior",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: this
  }, __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, "2 Door Car : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "4 Door Family Sedan : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, "Small SUV / 2 Door Pickup :", " "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Large SUV / 4 Door Pickup :", " "))), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    className: "premiumHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("h2", {
    className: "premiumHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, "Premium Services")), __jsx("div", {
    itemProp: "itemListElement",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "interior",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, "Interior Conditioning"), __jsx("div", {
    className: "serviceList",
    id: "interiorDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx("p", {
    itemScope: true,
    itemType: "http://schema.org/HowToTip",
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "Plastics and other vinyl-like interior surfaces are very susceptable to damage from the sun over time, as well as from natural body oils. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), "This sun damage mainly causes the color to fade. So rather than the deep color that was there from the factory, the plastics begin to look a bit develop. Protecting and conditioning these surfaces is vital to keeping them looking fantastic."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "here")), " ", "and ask away!"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.98e6be5417a41dc44c7c.hot-update.js.map