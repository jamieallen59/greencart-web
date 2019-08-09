module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BrowserImg/index.js":
/*!****************************************!*\
  !*** ./components/BrowserImg/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/BrowserImg/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/BrowserImg/index.js";



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.browserButtonWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.browserButton,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/highlight_books.png",
    alt: "Chrome store image",
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/BrowserImg/index.scss":
/*!******************************************!*\
  !*** ./components/BrowserImg/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___L8OSk",
	"header": "header___1PLHl",
	"browserButtonWrapper": "browserButtonWrapper___13IHN",
	"browserButton": "browserButton___2S5Xl",
	"content": "content___R3XJ0",
	"image": "image___HNI1z"
};

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Text */ "./components/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Link */ "./components/Link/index.js");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.js");
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/Header/index.js";






var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.contact,
    to: "mailto:hello@greencart.app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_2__["TextMedium"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Contact")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/index.scss":
/*!**************************************!*\
  !*** ./components/Header/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper____XInW",
	"contact": "contact___Baw28"
};

/***/ }),

/***/ "./components/Headers/index.js":
/*!*************************************!*\
  !*** ./components/Headers/index.js ***!
  \*************************************/
/*! exports provided: H1, H3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Headers/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/Headers/index.js";




var H1 = function H1(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "".concat(_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headerOne, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children);
};

H1.defaultProps = {
  className: ''
};
H1.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var H3 = function H3(_ref2) {
  var children = _ref2.children,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "".concat(_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headerThree, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, children);
};

H3.defaultProps = {
  className: ''
};
H3.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};


/***/ }),

/***/ "./components/Headers/index.scss":
/*!***************************************!*\
  !*** ./components/Headers/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"headerBase": "headerBase___x1Nbr",
	"headerOne": "headerOne___2aBHH headerBase___x1Nbr",
	"headerThree": "headerThree___23PtV headerBase___x1Nbr"
};

/***/ }),

/***/ "./components/Homepage/index.js":
/*!**************************************!*\
  !*** ./components/Homepage/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/Homepage/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header */ "./components/Header/index.js");
/* harmony import */ var _Headers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Headers */ "./components/Headers/index.js");
/* harmony import */ var _BrowserImg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../BrowserImg */ "./components/BrowserImg/index.js");
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/Homepage/index.js";

 // import { TextMedium } from '../Text'





var Homepage = function Homepage() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.centralColumn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Headers__WEBPACK_IMPORTED_MODULE_3__["H1"], {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.mainHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Shopping green online is difficult. Let's make it easier."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Headers__WEBPACK_IMPORTED_MODULE_3__["H3"], {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.subHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "A browser extension to visualize carbon impact, provide greener options, and reward sustainable choices."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BrowserImg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "./components/Homepage/index.scss":
/*!****************************************!*\
  !*** ./components/Homepage/index.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___h58q-",
	"mainHeading": "mainHeading___1R0av",
	"subHeading": "subHeading___3T5_c",
	"centralColumn": "centralColumn___28q59"
};

/***/ }),

/***/ "./components/Link/index.js":
/*!**********************************!*\
  !*** ./components/Link/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Link/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/Link/index.js";




var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      to = _ref.to;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "".concat(_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.wrapper, " ").concat(className),
    href: to,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children);
};

Link.defaultProps = {
  className: ''
};
Link.propTypes = {
  to: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired]).isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./components/Link/index.scss":
/*!************************************!*\
  !*** ./components/Link/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___2etUv"
};

/***/ }),

/***/ "./components/Logo/index.js":
/*!**********************************!*\
  !*** ./components/Logo/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/Logo/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/Logo/index.js";



var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.wrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "greenCart");
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/index.scss":
/*!************************************!*\
  !*** ./components/Logo/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"wrapper": "wrapper___2d452"
};

/***/ }),

/***/ "./components/Text/index.js":
/*!**********************************!*\
  !*** ./components/Text/index.js ***!
  \**********************************/
/*! exports provided: TextMedium */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextMedium", function() { return TextMedium; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./components/Text/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/components/Text/index.js";




var TextMedium = function TextMedium(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "".concat(_index_scss__WEBPACK_IMPORTED_MODULE_2___default.a.textMedium, " ").concat(className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children);
};

TextMedium.defaultProps = {
  className: ''
};
TextMedium.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};


/***/ }),

/***/ "./components/Text/index.scss":
/*!************************************!*\
  !*** ./components/Text/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"baseFont": "baseFont___3L4ZC",
	"textMedium": "textMedium___k8Xt0 baseFont___3L4ZC"
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Homepage */ "./components/Homepage/index.js");
var _jsxFileName = "/Users/jamieallen/Desktop/Development/2019/greencart-web/pages/index.js";



function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Homepage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jamieallen/Desktop/Development/2019/greencart-web/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map