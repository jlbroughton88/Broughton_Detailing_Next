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
    className: "contactMother"
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("div", {
    className: "contactMain"
  }, __jsx("section", {
    className: "leftSect"
  }, __jsx("div", {
    className: "headDiv"
  }, __jsx("h1", {
    className: "head"
  }, "Contact"))), __jsx("section", {
    className: "rightSect"
  }, __jsx("div", {
    className: "rightSectChild"
  }, __jsx("div", {
    className: "signupDiv"
  }, __jsx("h2", {
    className: "signupHead"
  }, "Sign Up For Deals!"), __jsx("form", {
    onSubmit: handleFormInput,
    className: "signupForm"
  }, __jsx("div", {
    className: "signupInputParent"
  }, __jsx("input", {
    className: "signupInput",
    id: "emailInput",
    type: "email",
    onChange: handleChange,
    placeholder: "Your Email (I won't spam)"
  })), __jsx("input", {
    className: "signupSubmit",
    type: "submit",
    placeholder: "Submit"
  })), __jsx("h4", {
    id: "thankYou",
    className: "thankYou"
  }, "Thank You!")), __jsx("div", {
    className: "letsTalkDiv"
  }, __jsx("h2", {
    className: "letsTalkHead"
  }, "Lets Talk"), __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry",
    className: "emailLink"
  }, __jsx("p", {
    className: "email"
  }, "BroughtonDetailing@gmail.com")), __jsx("a", {
    href: "tel:+7047708371",
    className: "phone"
  }, "704-770-8371"), __jsx("div", {
    className: "socialDiv"
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.74523d4be817d3141613.hot-update.js.map