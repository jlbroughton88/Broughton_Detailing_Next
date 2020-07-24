webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/css/contact.scss */ "./public/static/css/contact.scss");
/* harmony import */ var _public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var _comps_logos_facebook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/logos/facebook */ "./pages/comps/logos/facebook.js");
/* harmony import */ var _comps_logos_instagram__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/logos/instagram */ "./pages/comps/logos/instagram.js");

var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import { useAppContext } from "./comps/context.js";






var Contact = function Contact() {
  // const { statusUrl } = useAppContext();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      make = _useState4[0],
      setMake = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      model = _useState5[0],
      setModel = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      condition = _useState6[0],
      setCondition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      detail = _useState7[0],
      setDetail = _useState7[1];

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

  var handleConditionChange = function handleConditionChange(e) {
    setDetail(e.target.value);
  };

  var handleQuoteSubmit = function handleQuoteSubmit(e) {
    var _axios$post;

    var quoteMsg = document.getElementById("quoteMessage");
    var date = moment__WEBPACK_IMPORTED_MODULE_3___default()().format('L');
    var formattedDate = date.replace(/\//g, "-");
    console.log(formattedDate);
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://www.broughtondetailing.com/api/addquote", (_axios$post = {
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
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://www.broughtondetailing.com/api/addclient", {
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
    itemScope: true,
    itemType: "http://schema.org/ContactPage",
    className: "contactMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("div", {
    className: "contactMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Contact"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: "letsTalkDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h2", {
    className: "letsTalkHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Lets Talk!"), __jsx("p", {
    itemProp: "creator",
    className: "contactPara name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Jacob Broughton"), __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry",
    className: "emailLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx("p", {
    className: "email contactPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "BroughtonDetailing@gmail.com")), __jsx("a", {
    href: "tel:+7047708371",
    className: "contactPara phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "704-770-8371"), __jsx("div", {
    className: "socialDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("a", {
    href: "https://facebook.com/broughtondetailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx(_comps_logos_facebook__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "socialIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })), __jsx("a", {
    href: "https://instagram.com/broughtondetailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx(_comps_logos_instagram__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "socialIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  })))), __jsx("div", {
    className: "quoteDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("h2", {
    className: "quoteHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Get a quote!"), __jsx("form", {
    onSubmit: handleQuoteSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, __jsx("input", {
    placeholder: "First Name",
    onChange: handleNameChange,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Email",
    onChange: handleEmailChange,
    required: true,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Phone Number",
    onChange: handleEmailChange,
    required: true,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Make",
    onChange: handleMakeChange,
    required: true,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Model",
    onChange: handleModelChange,
    required: true,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Requested Detail (Full, Exterior, or Interior)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "How would you describe the condition of your vehicle? (optional, but appreciated)",
    onChange: handleDetailChange,
    type: "" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), __jsx("input", {
    className: "quoteSubmit",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  })), __jsx("h4", {
    id: "quoteMessage",
    className: "quoteMessage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "We'll get back to you as soon as possible!")), __jsx("div", {
    className: "signupDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, __jsx("h2", {
    className: "signupHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }, "Sign Up For Deals!"), __jsx("form", {
    onSubmit: handleFormInput,
    className: "signupForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, __jsx("div", {
    className: "signupInputParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx("input", {
    className: "signupInput",
    id: "emailInput",
    type: "email",
    onChange: handleChange,
    placeholder: "Your Email (I won't spam)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  })), __jsx("input", {
    className: "signupSubmit",
    type: "submit",
    placeholder: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx("h4", {
    id: "thankYou",
    className: "thankYou",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, "Thank You!"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.0cb0767f085ea9dbf44a.hot-update.js.map