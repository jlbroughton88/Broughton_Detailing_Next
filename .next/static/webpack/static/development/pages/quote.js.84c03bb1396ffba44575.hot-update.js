webpackHotUpdate("static/development/pages/quote.js",{

/***/ "./pages/quote.js":
/*!************************!*\
  !*** ./pages/quote.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_quote_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/css/quote.scss */ "./public/static/css/quote.scss");
/* harmony import */ var _public_static_css_quote_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_quote_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/quote.js";
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
  }; //   const handleFormInput = e => {
  //     let input = document.getElementById("emailInput");
  //     let thankYou = document.getElementById("thankYou");
  //     axios
  //       .post(`https://www.broughtondetailing.com/api/addclient`, {
  //         email: formData
  //       })
  //       .then(response => console.log(response))
  //       .catch(err => console.log(err));
  //     if (formData !== "") {
  //       thankYou.style.display = "block";
  //     }
  //     input.value = "";
  //     setTimeout(() => {
  //       thankYou.style.display = "none";
  //     }, 5000);
  //     e.preventDefault();
  //   };


  return __jsx("div", {
    className: "quoteMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Get a Quote!"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "quoteDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleQuoteSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("input", {
    placeholder: "First Name",
    onChange: handleNameChange,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Email",
    onChange: handleEmailChange,
    required: true,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Phone Number",
    onChange: handleEmailChange,
    required: true,
    type: "email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Make",
    onChange: handleMakeChange,
    required: true,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Model",
    onChange: handleModelChange,
    required: true,
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Requested Detail (Full, Exterior, or Interior)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "How would you describe the condition of your vehicle? (optional, but appreciated)",
    onChange: handleDetailChange,
    type: "" // required
    ,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("input", {
    className: "quoteSubmit",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx("h4", {
    id: "quoteMessage",
    className: "quoteMessage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "We'll get back to you as soon as possible!"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ })

})
//# sourceMappingURL=quote.js.84c03bb1396ffba44575.hot-update.js.map