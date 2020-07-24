webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/comps/quote.js":
/*!******************************!*\
  !*** ./pages/comps/quote.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _quote_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote.js */ "./pages/comps/quote.js");

var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/comps/quote.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Quote = function Quote() {
  var handleChange = function handleChange(e) {
    setFormData(e.target.value);
  };

  var handleEmailChange = function handleEmailChange(e) {
    setEmail(e.target.value);
  };

  var handleNameChange = function handleNameChange(e) {
    setName(e.target.value);
  };

  var handleMakeChange = function handleMakeChange(e) {
    setMake(e.target.value);
  };

  var handleModelChange = function handleModelChange(e) {
    setModel(e.target.value);
  };

  var handleDetailChange = function handleDetailChange(e) {
    console.log(e.target.value);
    setCondition(e.target.value);
  };

  var handleQuoteSubmit = function handleQuoteSubmit() {
    var _axios$post;

    axios.post("https://www.broughtondetailing.com/api/addquote", (_axios$post = {
      email: email,
      first_name: name,
      car_make: make,
      car_model: model,
      condition: condition
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_axios$post, "condition", detail), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_axios$post, "date", formattedDate), _axios$post)).then(function (response) {
      return console.log(response);
    })["catch"](function (err) {
      return console.log(err);
    });
    quoteMsg.style.display = "block";
    setTimeout(function () {
      quoteMsg.style.display = "none";
    }, 5000);
    e.preventDefault();
  };

  var handleFormInput = function handleFormInput(e) {
    var input = document.getElementById("emailInput");
    var thankYou = document.getElementById("thankYou");
    axios.post("https://www.broughtondetailing.com/api/addclient", {
      email: formData
    }).then(function (response) {
      return console.log(response);
    })["catch"](function (err) {
      return console.log(err);
    });

    if (formData !== "") {
      thankYou.style.display = "block";
    }

    input.value = "";
    setTimeout(function () {
      thankYou.style.display = "none";
    }, 5000);
    e.preventDefault();
  };

  return __jsx("div", {
    className: "quoteDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("h2", {
    className: "quoteHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Get a quote!"), __jsx("form", {
    onSubmit: handleQuoteSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("input", {
    placeholder: "First Name",
    onChange: handleNameChange,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Email",
    onChange: handleEmailChange,
    required: true,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Phone Number",
    onChange: handleEmailChange,
    required: true,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Make",
    onChange: handleMakeChange,
    required: true,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Model",
    onChange: handleModelChange,
    required: true,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Requested Detail (Full, Exterior, or Interior)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "How would you describe the condition of your vehicle? (optional, but appreciated)",
    onChange: handleDetailChange,
    type: "" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("input", {
    className: "quoteSubmit",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx("h4", {
    id: "quoteMessage",
    className: "quoteMessage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "We'll get back to you as soon as possible!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ }),

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
/* harmony import */ var _comps_quote_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/quote.js */ "./pages/comps/quote.js");
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
  var fullArr = ["Thorough vacuum (Including trunk)", "Windows inside & out", "Door, hood, & trunk jams", "Remove door panel scuffs / Skid marks", "Cleanse dashboard & console", "Dust & clean air vents", "Deep clean leather", "Condition & protect interior", "Shampoo floor mats", "Microfiber wash & dry", "Machine wax", "Protect / finish black trim", "Door, hood, & trunk jams", "Wash tires", "Degrease tires", "Clean wheels", "Wheel wells", "Satin black tire 'gloss'", "Decontaminate / Clay paint (If necessary))", "Bug removal (Within limits)"];
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
      lineNumber: 117
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList active",
    id: "interiorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, interiorArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, item);
  }), __jsx(_comps_quote_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "exteriorList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, exteriorArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, item);
  }), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "here")), " ", "and ask away!"))), __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, __jsx("ul", {
    itemScope: true,
    itemType: "http://schema.org/ItemList",
    className: "serviceList",
    id: "fullList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, fullArr.map(function (item) {
    return __jsx("li", {
      key: item,
      itemProp: "itemListElement",
      className: "serviceListItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, item);
  }), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Any questions?"), " Click", " ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services Inquiry",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }, __jsx("strong", {
    className: "link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "here")), " ", "and ask away!"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.b1fe4d0f04b31d9a5f1d.hot-update.js.map