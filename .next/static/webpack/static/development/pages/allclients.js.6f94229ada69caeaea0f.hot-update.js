webpackHotUpdate("static/development/pages/allclients.js",{

/***/ "./pages/allclients.js":
/*!*****************************!*\
  !*** ./pages/allclients.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_context_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/context.js */ "./pages/comps/context.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_static_css_allclients_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/static/css/allclients.scss */ "./public/static/css/allclients.scss");
/* harmony import */ var _public_static_css_allclients_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_allclients_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");

var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/allclients.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var AllClients = function AllClients(allClients) {
  var _useAppContext = Object(_comps_context_js__WEBPACK_IMPORTED_MODULE_2__["useAppContext"])(),
      statusUrl = _useAppContext.statusUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      clients = _useState[0],
      setClients = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(typeof allClients);
    setClients([allClients]); //     if (statusUrl !== "") {
    //       axios
    //         .get(`${statusUrl}/api/getclients`)
    //         .then(response => setClients([...response.data]))
    //         .catch(err => console.log(err));
    //     }
  }, []); // }, [statusUrl]);

  return __jsx("div", {
    className: "allMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "allMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Sign Ups"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, console.log(clients[0].json), clients.length !== 0 ? clients.map(function (client) {
    return __jsx("div", {
      key: client.id,
      className: "clientItem",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("h3", {
      className: "clientEmail",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, client.email));
  }) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "No clients yet"))))));
};

AllClients.getInitialProps = function _callee(_ref) {
  var req, res, json;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          req = _ref.req;
          _context.next = 3;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://localhost:3000/api/index"));

        case 3:
          res = _context.sent;
          _context.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(res.json());

        case 6:
          json = _context.sent;
          return _context.abrupt("return", {
            json: json
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AllClients);

/***/ })

})
//# sourceMappingURL=allclients.js.6f94229ada69caeaea0f.hot-update.js.map