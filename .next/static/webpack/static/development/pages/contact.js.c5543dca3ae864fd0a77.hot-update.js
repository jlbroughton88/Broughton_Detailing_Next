webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/css/contact.scss */ "./public/static/css/contact.scss");
/* harmony import */ var _public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var _comps_logos_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/logos/facebook */ "./pages/comps/logos/facebook.js");
/* harmony import */ var _comps_logos_instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/logos/instagram */ "./pages/comps/logos/instagram.js");
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { useAppContext } from "./comps/context.js";






var Contact = function Contact() {
  // const { statusUrl } = useAppContext();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      formData = _useState[0],
      setFormData = _useState[1]; // const closeNavMenu = () => {
  //   let dropdown = document.getElementById("dropDown");
  //   let overlay = document.getElementById("overlay");
  //   dropdown.classList.remove("active");
  //   overlay.classList.remove("active");
  // }
  // useEffect(() => {
  //   closeNavMenu();
  // })


  var handleChange = function handleChange(e) {
    setFormData(e.target.value);
  };

  var handleFormInput = function handleFormInput(e) {
    var input = document.getElementById("emailInput");
    var thankYou = document.getElementById("thankYou");
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://www.broughtondetailing.com/api/addclient", {
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
      lineNumber: 51
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("div", {
    className: "contactMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Contact"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "letsTalkDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("h2", {
    className: "letsTalkHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Lets Talk!"), __jsx("p", {
    itemprop: "creator",
    className: "contactPara name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Jacob Broughton"), __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry",
    className: "emailLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("p", {
    className: "email contactPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "BroughtonDetailing@gmail.com")), __jsx("a", {
    href: "tel:+7047708371",
    className: "contactPara phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "704-770-8371"), __jsx("div", {
    className: "socialDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("a", {
    href: "https://facebook.com/broughtondetailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(_comps_logos_facebook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "socialIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx("a", {
    href: "https://instagram.com/broughtondetailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx(_comps_logos_instagram__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "socialIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })))), __jsx("div", {
    className: "quoteDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h2", {
    className: "quoteHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Get a quote!"), __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Email",
    onChange: "",
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("input", {
    placeholder: "First Name",
    onChange: "",
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Make",
    onChange: "",
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Model",
    onChange: "",
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Condition",
    onChange: "",
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "What kind of detail are you looking for?",
    onChange: "",
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))), __jsx("div", {
    className: "signupDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("h2", {
    className: "signupHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Sign Up For Deals!"), __jsx("form", {
    onSubmit: handleFormInput,
    className: "signupForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("div", {
    className: "signupInputParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
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
      lineNumber: 112
    },
    __self: this
  })), __jsx("input", {
    className: "signupSubmit",
    type: "submit",
    placeholder: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), __jsx("h4", {
    id: "thankYou",
    className: "thankYou",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Thank You!"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.c5543dca3ae864fd0a77.hot-update.js.map