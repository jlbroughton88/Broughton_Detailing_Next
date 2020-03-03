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

  var interiorArr = ["Windows inside & out", "Thorough vacuum (Including trunk)", "Door sills", "Door jams", "Trunk jams", "Hood jams", "Remove door panel scuffs / Skid marks", "Clean dashboard", "Clean console", "Vents cleaned", "Deep clean leather", "Protect leather", "Dust surfaces", "Condition & protect interior", "Shampoo floor mats", "Shampoo carpets", "Fabric guard cloth (seating, carpet, headliner)"];
  var exteriorArr = ["Windows inside & out", "Wash the car", "Dry the car", "Door sills", "Door jams", "Trunk jams", "Hood jams", "Wash tires", "Degrease tires", "Face of wheels", "Wheel wells", "Barrels of wheels", "Non-sling dressing on tires", "Decontaminate / Clay paint (If necessary))", "Light tar & bug removal (within reason)"];
  var fullArr = ["Windows inside & out", "Thorough vacuum (Including trunk)", "Door sills", "Door jams", "Trunk jams", "Hood jams", "Remove door panel scuffs / Skid marks", "Clean dashboard", "Clean console", "Vents cleaned", "Deep clean leather", "Protect leather", "Dust surfaces", "Condition & protect interior", "Shampoo floor mats", "Shampoo carpets", "Fabric guard cloth (seating, carpet, headliner)", "Wash the car", "Dry the car", "Wash tires", "Degrease tires", "Face of wheels", "Wheel wells", "Barrels of wheels", "Non-sling dressing on tires", "Decontaminate / Clay paint (If necessary))", "Light tar & bug removal (within reason)"];
  return __jsx("div", {
    className: "servicesMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("div", {
    className: "servicesMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Services"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "servicesGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx("div", {
    className: "serviceTypeRow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("button", {
    value: "Interior",
    onClick: handlePackageClick,
    id: "interior",
    className: "interiorSlide slide active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Interior"), __jsx("button", {
    value: "Exterior",
    onClick: handlePackageClick,
    id: "exterior",
    className: "exteriorSlide slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "Exterior"), __jsx("button", {
    value: "Full",
    onClick: handlePackageClick,
    id: "full",
    className: "fullSlide slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Full")), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList active",
    id: "interiorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, interiorArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, item);
  }), __jsx("div", {
    itemProp: "itemListElement",
    className: "priceTimeParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("div", {
    className: "priceTimeDivInterior",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "2 Door Car : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, "4 Door Family Sedan : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Small SUV / 2 Door Pickup :", " "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Large SUV / 4 Door Pickup :", " "))), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("ul", {
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
      key: item,
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
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "fullList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }, fullArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225
      },
      __self: this
    }, item);
  }), __jsx("div", {
    itemProp: "itemListElement",
    className: "priceTimeParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx("div", {
    className: "priceTimeDivFull",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }, __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }, "2 Door Car : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "4 Door Family Sedan : "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, "Small SUV / 2 Door Pickup :", " "), __jsx("h4", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Large SUV / 4 Door Pickup :", " "))), __jsx("p", {
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
//# sourceMappingURL=services.js.ac9adad8de66ea7ecc27.hot-update.js.map