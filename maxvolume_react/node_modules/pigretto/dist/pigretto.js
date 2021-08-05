(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pigretto", [], factory);
	else if(typeof exports === 'object')
		exports["pigretto"] = factory();
	else
		root["pigretto"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(/*! ./superPropBase */ "./node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/declarative-factory/src/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/declarative-factory/src/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return declarativeFactory; });
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



/**
 * @type {Function}
 */
const testConditionFn = testCondition =>
  Boolean(
    typeof testCondition === "function" ? testCondition() : testCondition
  );

/**
 * A function to easily create interchangeable factories switching them
 * in a declarative way based on the given runtime parameters.
 *
 * @param {Function} tuples An array of tuples, each tuple being an array of two elements:
 *
 *                                - testCondition: A boolean value or a function returning a boolean value
 *                                                 which, if "true", instructs this function to return the "factory" factory
 *                                                 bound to this "testCondition".
 *                                                 Note that the first "factory" for which "testCondition" is truthy
 *                                                 will be returned and further tuples will be ignored;
 *
 *                                - factory: Anything. The value to return if "testCondition" is a truthy value
 *                                           or a function returning a truthy value.
 *
 *                            The last element of the returned tuples MAY not be a tuple array with two elements,
 *                            and in such case it will be treated as the default factory value to return if none
 *                            of the test conditions of the previous factories are satisfied.
 *                            If the last tuple is not a default value and none of the test conditions of the previous
 *                            factories are satisfied as well as for the factory of last tuple, then "undefined"
 *                            will be returned by this function.
 * @param {Array|undefined} deps Dependencies array to use.
 * @return {*} The first factory value for which the test is truthy or returns a truthy value, a default factory value,
 *             or "undefined".
 */
function declarativeFactory(tuples) {
  const factoryValue = (() => {
    let i = 0;
    // Loop through all the tuples except the last one (handled after this loop).
    for (; i < tuples.length - 1; i++) {
      const tuple = tuples[i];
      const [testCondition, factoryValue] = tuple;
      if (testConditionFn(testCondition)) {
        // Test condition for factory value is satisfied.
        return factoryValue;
      }
    }
    const lastTuple = tuples[i];
    if (Object(js_utl__WEBPACK_IMPORTED_MODULE_0__["isArray"])(lastTuple) && lastTuple.length === 2) {
      const [testCondition, factoryValue] = lastTuple;
      if (testConditionFn(testCondition)) {
        // Test condition for last factory value is satisfied.
        return factoryValue;
      }

      // No default and no factory value satisfying a test condition.
      return void 0;
    } else {
      // Default factory value.
      return lastTuple;
    }
  })();

  return factoryValue;
}


/***/ }),

/***/ "./node_modules/escape-string-regexp/index.js":
/*!****************************************************!*\
  !*** ./node_modules/escape-string-regexp/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.replace(matchOperatorsRegex, '\\$&');
};


/***/ }),

/***/ "./node_modules/js-utl/dist/es6/index.js":
/*!***********************************************!*\
  !*** ./node_modules/js-utl/dist/es6/index.js ***!
  \***********************************************/
/*! exports provided: config, isObjectEmpty, isObject, isPlainObject, isArray, isEmpty, isEmptyOr0, getGlobalObject, uniqueId, deepArrayCompare, deepObjectCompare, nestedObjectConstructValue, cloneDeeplyJSON, isReferenceType, isPrimitiveType, hasCyclicReference, typeToStr, cloneObjDeeply, deepObjectExtend, deepObjectCloningExtend, extend, extendDecorate, includesTypeCoercion, nestedPropertyValue, getNestedPropertyValue, hasNestedPropertyValue, setNestedPropertyValue, isUndefined, isInt, ctypeDigit, isIntegerOrIntegerStr, isCallable, findIndex, firstPropValue, isStrictlyTrue, isTruthy, allTruthy, allNotUndefined, isJSONString, noOpFn, is, shallowEqual, objectPropEqual, partialShallowEqual, shallowObjectDiff, nestedMapSet, nestedMapHas, nestedMapGet, nestedTreeMapSet, nestedTreeMapHas, nestedTreeMapGet, mapYield, str, mapObject, propSelection, prototypeChainProperties, _, proceedCallingFn, curry, POJOCurry, compose, pipe, pick, liftBinaryFn, juxt, converge, execIfPOJOHas, execWithExistentProps, forGen, flatten, flattenDeep, cartesianProduct, identityFn, identityArgsFn, stringHashArray, hashString, onePassStringHash, timeout, minDelayPromise, maxDelayFallbackPromise, applyAsync, composeAsync, buildQueryString, formData, xhr, checkNetwork, waitNetwork, setCookie, getCookie, unsetCookie, isInViewport, isScrolledIntoView, hasVerticalScrollbar, hasHorizontalScrollbar, elementUniqueId, getElementComputedStyle, elementInnerDimensions, countTextareaLines, isScrollOnBottom, getVerticalScrollBarWidth, isEllipsisActive, copyTextToClipboard, rAFLooper, nestedRAF, getRawURIFragment, getDecodedURIFragment, appendEncodedJSONFragmentToURI, getDecodedJSONFromFragmentURI, getQueryStringArgsMultiDim, cursorFocus, parseQueryStringArgsMultiDim, randomInt, randomStr, randomDifferentFromValue, randomArrayShuffle, time, msToTime, millisecToSec, escapeRegExp, trimCharacterMask, trimCharacterRegex, trim, trimLeft, trimRight, concatWithInnerOuterSeparators, optionsValueLabel, startsWith, ucaseFirst, googleMapBestZoomLevelFromBounds, delay, debounce, throttle, basename, pathinfo, filenameExtension, dirname, b2d, d2b, turnNthBitOff, turnNthBitOn, toggleNthBit, checkNthBitOn, getLuminance, yieldCombinationsWithoutRepetition, uniqueProgressiveIncrementalCombinations, yieldUniqueProgressiveIncrementalCombinations, yieldAllSubsequences, yieldUniqueSubsequences, yieldPermutations, round, sum, intDiv, isEven, isOdd, unshiftArray, cloneArray, arraySliceFromValueToValue, areArrayItemsAllCoercibleToNumber, arrayOrArrayLike, lastOfArray, firstOfArray, arrayFindReverse, arrayMax, arrayMin, sortNums, mean, median, minAbsDeviationFromValue, minAbsDeviationFromExcludedValue, clampLat, wrapLng, normalizeLat, normalizeLng, xrange, isValidDate, isValidDateTimeStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["config"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isObjectEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmptyOr0", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isEmptyOr0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["getGlobalObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["uniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepArrayCompare", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["deepArrayCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepObjectCompare", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["deepObjectCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedObjectConstructValue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedObjectConstructValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneDeeplyJSON", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["cloneDeeplyJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReferenceType", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isReferenceType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPrimitiveType", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isPrimitiveType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasCyclicReference", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["hasCyclicReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "typeToStr", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["typeToStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneObjDeeply", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["cloneObjDeeply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepObjectExtend", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["deepObjectExtend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deepObjectCloningExtend", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["deepObjectCloningExtend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendDecorate", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["extendDecorate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "includesTypeCoercion", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["includesTypeCoercion"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedPropertyValue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedPropertyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNestedPropertyValue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["getNestedPropertyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasNestedPropertyValue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["hasNestedPropertyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setNestedPropertyValue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["setNestedPropertyValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ctypeDigit", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["ctypeDigit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isIntegerOrIntegerStr", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isIntegerOrIntegerStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isCallable", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isCallable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["findIndex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstPropValue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["firstPropValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isStrictlyTrue", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isStrictlyTrue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isTruthy", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isTruthy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allTruthy", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["allTruthy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allNotUndefined", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["allNotUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isJSONString", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["isJSONString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noOpFn", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["noOpFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["is"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectPropEqual", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["objectPropEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partialShallowEqual", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["partialShallowEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowObjectDiff", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["shallowObjectDiff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedMapSet", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedMapSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedMapHas", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedMapHas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedMapGet", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedMapGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedTreeMapSet", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedTreeMapSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedTreeMapHas", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedTreeMapHas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedTreeMapGet", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["nestedTreeMapGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapYield", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["mapYield"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "str", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["str"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["mapObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propSelection", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["propSelection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "prototypeChainProperties", function() { return _modules_core__WEBPACK_IMPORTED_MODULE_0__["prototypeChainProperties"]; });

/* harmony import */ var _modules_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/fn */ "./node_modules/js-utl/dist/es6/modules/fn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["_"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proceedCallingFn", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["proceedCallingFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["curry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POJOCurry", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["POJOCurry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["compose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["pick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "liftBinaryFn", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["liftBinaryFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "juxt", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["juxt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "converge", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["converge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execIfPOJOHas", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["execIfPOJOHas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execWithExistentProps", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["execWithExistentProps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forGen", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["forGen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["flatten"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flattenDeep", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["flattenDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cartesianProduct", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["cartesianProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identityFn", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["identityFn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "identityArgsFn", function() { return _modules_fn__WEBPACK_IMPORTED_MODULE_1__["identityArgsFn"]; });

/* harmony import */ var _modules_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/hash */ "./node_modules/js-utl/dist/es6/modules/hash.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringHashArray", function() { return _modules_hash__WEBPACK_IMPORTED_MODULE_2__["stringHashArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hashString", function() { return _modules_hash__WEBPACK_IMPORTED_MODULE_2__["hashString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onePassStringHash", function() { return _modules_hash__WEBPACK_IMPORTED_MODULE_2__["onePassStringHash"]; });

/* harmony import */ var _modules_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/promise */ "./node_modules/js-utl/dist/es6/modules/promise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return _modules_promise__WEBPACK_IMPORTED_MODULE_3__["timeout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minDelayPromise", function() { return _modules_promise__WEBPACK_IMPORTED_MODULE_3__["minDelayPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxDelayFallbackPromise", function() { return _modules_promise__WEBPACK_IMPORTED_MODULE_3__["maxDelayFallbackPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyAsync", function() { return _modules_promise__WEBPACK_IMPORTED_MODULE_3__["applyAsync"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composeAsync", function() { return _modules_promise__WEBPACK_IMPORTED_MODULE_3__["composeAsync"]; });

/* harmony import */ var _modules_web__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/web */ "./node_modules/js-utl/dist/es6/modules/web.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["buildQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formData", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["formData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xhr", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["xhr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkNetwork", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["checkNetwork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "waitNetwork", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["waitNetwork"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["setCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsetCookie", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["unsetCookie"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["isInViewport"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScrolledIntoView", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["isScrolledIntoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasVerticalScrollbar", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["hasVerticalScrollbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalScrollbar", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["hasHorizontalScrollbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementUniqueId", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["elementUniqueId"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getElementComputedStyle", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getElementComputedStyle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "elementInnerDimensions", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["elementInnerDimensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countTextareaLines", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["countTextareaLines"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isScrollOnBottom", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["isScrollOnBottom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVerticalScrollBarWidth", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getVerticalScrollBarWidth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEllipsisActive", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["isEllipsisActive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copyTextToClipboard", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["copyTextToClipboard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rAFLooper", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["rAFLooper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nestedRAF", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["nestedRAF"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRawURIFragment", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getRawURIFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDecodedURIFragment", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getDecodedURIFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendEncodedJSONFragmentToURI", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["appendEncodedJSONFragmentToURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDecodedJSONFromFragmentURI", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getDecodedJSONFromFragmentURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryStringArgsMultiDim", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["getQueryStringArgsMultiDim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cursorFocus", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["cursorFocus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseQueryStringArgsMultiDim", function() { return _modules_web__WEBPACK_IMPORTED_MODULE_4__["parseQueryStringArgsMultiDim"]; });

/* harmony import */ var _modules_rand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rand */ "./node_modules/js-utl/dist/es6/modules/rand.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return _modules_rand__WEBPACK_IMPORTED_MODULE_5__["randomInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomStr", function() { return _modules_rand__WEBPACK_IMPORTED_MODULE_5__["randomStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomDifferentFromValue", function() { return _modules_rand__WEBPACK_IMPORTED_MODULE_5__["randomDifferentFromValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "randomArrayShuffle", function() { return _modules_rand__WEBPACK_IMPORTED_MODULE_5__["randomArrayShuffle"]; });

/* harmony import */ var _modules_time__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/time */ "./node_modules/js-utl/dist/es6/modules/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _modules_time__WEBPACK_IMPORTED_MODULE_6__["time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return _modules_time__WEBPACK_IMPORTED_MODULE_6__["msToTime"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "millisecToSec", function() { return _modules_time__WEBPACK_IMPORTED_MODULE_6__["millisecToSec"]; });

/* harmony import */ var _modules_string__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/string */ "./node_modules/js-utl/dist/es6/modules/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["escapeRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimCharacterMask", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["trimCharacterMask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimCharacterRegex", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["trimCharacterRegex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["trim"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimLeft", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["trimLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "trimRight", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["trimRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatWithInnerOuterSeparators", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["concatWithInnerOuterSeparators"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsValueLabel", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["optionsValueLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["startsWith"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ucaseFirst", function() { return _modules_string__WEBPACK_IMPORTED_MODULE_7__["ucaseFirst"]; });

/* harmony import */ var _modules_google__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/google */ "./node_modules/js-utl/dist/es6/modules/google.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "googleMapBestZoomLevelFromBounds", function() { return _modules_google__WEBPACK_IMPORTED_MODULE_8__["googleMapBestZoomLevelFromBounds"]; });

/* harmony import */ var _modules_callback__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/callback */ "./node_modules/js-utl/dist/es6/modules/callback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return _modules_callback__WEBPACK_IMPORTED_MODULE_9__["delay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _modules_callback__WEBPACK_IMPORTED_MODULE_9__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _modules_callback__WEBPACK_IMPORTED_MODULE_9__["throttle"]; });

/* harmony import */ var _modules_path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/path */ "./node_modules/js-utl/dist/es6/modules/path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return _modules_path__WEBPACK_IMPORTED_MODULE_10__["basename"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pathinfo", function() { return _modules_path__WEBPACK_IMPORTED_MODULE_10__["pathinfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filenameExtension", function() { return _modules_path__WEBPACK_IMPORTED_MODULE_10__["filenameExtension"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return _modules_path__WEBPACK_IMPORTED_MODULE_10__["dirname"]; });

/* harmony import */ var _modules_convert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/convert */ "./node_modules/js-utl/dist/es6/modules/convert.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b2d", function() { return _modules_convert__WEBPACK_IMPORTED_MODULE_11__["b2d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d2b", function() { return _modules_convert__WEBPACK_IMPORTED_MODULE_11__["d2b"]; });

/* harmony import */ var _modules_bitwise__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/bitwise */ "./node_modules/js-utl/dist/es6/modules/bitwise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "turnNthBitOff", function() { return _modules_bitwise__WEBPACK_IMPORTED_MODULE_12__["turnNthBitOff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "turnNthBitOn", function() { return _modules_bitwise__WEBPACK_IMPORTED_MODULE_12__["turnNthBitOn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toggleNthBit", function() { return _modules_bitwise__WEBPACK_IMPORTED_MODULE_12__["toggleNthBit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkNthBitOn", function() { return _modules_bitwise__WEBPACK_IMPORTED_MODULE_12__["checkNthBitOn"]; });

/* harmony import */ var _modules_color__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/color */ "./node_modules/js-utl/dist/es6/modules/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return _modules_color__WEBPACK_IMPORTED_MODULE_13__["getLuminance"]; });

/* harmony import */ var _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/combinatorics */ "./node_modules/js-utl/dist/es6/modules/combinatorics.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yieldCombinationsWithoutRepetition", function() { return _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__["yieldCombinationsWithoutRepetition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uniqueProgressiveIncrementalCombinations", function() { return _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__["uniqueProgressiveIncrementalCombinations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yieldUniqueProgressiveIncrementalCombinations", function() { return _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__["yieldUniqueProgressiveIncrementalCombinations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yieldAllSubsequences", function() { return _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__["yieldAllSubsequences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yieldUniqueSubsequences", function() { return _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__["yieldUniqueSubsequences"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "yieldPermutations", function() { return _modules_combinatorics__WEBPACK_IMPORTED_MODULE_14__["yieldPermutations"]; });

/* harmony import */ var _modules_math__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/math */ "./node_modules/js-utl/dist/es6/modules/math.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "round", function() { return _modules_math__WEBPACK_IMPORTED_MODULE_15__["round"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _modules_math__WEBPACK_IMPORTED_MODULE_15__["sum"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "intDiv", function() { return _modules_math__WEBPACK_IMPORTED_MODULE_15__["intDiv"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEven", function() { return _modules_math__WEBPACK_IMPORTED_MODULE_15__["isEven"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isOdd", function() { return _modules_math__WEBPACK_IMPORTED_MODULE_15__["isOdd"]; });

/* harmony import */ var _modules_array__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/array */ "./node_modules/js-utl/dist/es6/modules/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unshiftArray", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["unshiftArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneArray", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["cloneArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arraySliceFromValueToValue", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["arraySliceFromValueToValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "areArrayItemsAllCoercibleToNumber", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["areArrayItemsAllCoercibleToNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayOrArrayLike", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["arrayOrArrayLike"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lastOfArray", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["lastOfArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "firstOfArray", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["firstOfArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayFindReverse", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["arrayFindReverse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayMax", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["arrayMax"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayMin", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["arrayMin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortNums", function() { return _modules_array__WEBPACK_IMPORTED_MODULE_16__["sortNums"]; });

/* harmony import */ var _modules_stats__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/stats */ "./node_modules/js-utl/dist/es6/modules/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _modules_stats__WEBPACK_IMPORTED_MODULE_17__["mean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _modules_stats__WEBPACK_IMPORTED_MODULE_17__["median"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minAbsDeviationFromValue", function() { return _modules_stats__WEBPACK_IMPORTED_MODULE_17__["minAbsDeviationFromValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minAbsDeviationFromExcludedValue", function() { return _modules_stats__WEBPACK_IMPORTED_MODULE_17__["minAbsDeviationFromExcludedValue"]; });

/* harmony import */ var _modules_map_coordinates__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/map-coordinates */ "./node_modules/js-utl/dist/es6/modules/map-coordinates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clampLat", function() { return _modules_map_coordinates__WEBPACK_IMPORTED_MODULE_18__["clampLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrapLng", function() { return _modules_map_coordinates__WEBPACK_IMPORTED_MODULE_18__["wrapLng"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeLat", function() { return _modules_map_coordinates__WEBPACK_IMPORTED_MODULE_18__["normalizeLat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "normalizeLng", function() { return _modules_map_coordinates__WEBPACK_IMPORTED_MODULE_18__["normalizeLng"]; });

/* harmony import */ var _modules_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/iterator */ "./node_modules/js-utl/dist/es6/modules/iterator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xrange", function() { return _modules_iterator__WEBPACK_IMPORTED_MODULE_19__["xrange"]; });

/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/date */ "./node_modules/js-utl/dist/es6/modules/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return _modules_date__WEBPACK_IMPORTED_MODULE_20__["isValidDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidDateTimeStr", function() { return _modules_date__WEBPACK_IMPORTED_MODULE_20__["isValidDateTimeStr"]; });

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Public API exposed to client code.
 */





















//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/array.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/array.js ***!
  \*******************************************************/
/*! exports provided: unshiftArray, cloneArray, arraySliceFromValueToValue, areArrayItemsAllCoercibleToNumber, arrayOrArrayLike, lastOfArray, firstOfArray, arrayFindReverse, arrayMax, arrayMin, sortNums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unshiftArray", function() { return unshiftArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneArray", function() { return cloneArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arraySliceFromValueToValue", function() { return arraySliceFromValueToValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areArrayItemsAllCoercibleToNumber", function() { return areArrayItemsAllCoercibleToNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayOrArrayLike", function() { return arrayOrArrayLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lastOfArray", function() { return lastOfArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstOfArray", function() { return firstOfArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFindReverse", function() { return arrayFindReverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMax", function() { return arrayMax; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayMin", function() { return arrayMin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortNums", function() { return sortNums; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Array-related utility functions.
 */

/**
 * Unshifts an array.
 *
 * @param {Array} arr The array.
 * @param {*} item The item to unshift.
 * @return {undefined}
 */
function unshiftArray(arr, item) {
  let len = arr.length;

  while (len) {
    arr[len] = arr[len - 1];
    len--;
  }

  arr[0] = item;
}
/**
 * Clones an array.
 *
 * @param {Array} arr The array to clone.
 * @return {Array} The cloned array.
 */

function cloneArray(arr) {
  return arr.slice(0);
}
/**
 * Gets a slice of an array from a value up until another.
 *
 * @param {Array} arr The input array.
 * @param {number} from The "from" lower value.
 * @param {number} to The "two" upper value.
 * @return {Array} The slice as a new array.
 */

function arraySliceFromValueToValue(arr, from, to) {
  const ret = [];
  let include = false;

  for (const value of arr) {
    if (!include && value == from) {
      ret.push(value);
      include = true;
    } else if (include && value == to) {
      ret.push(value);
      break;
    } else if (include) {
      ret.push(value);
    }
  }

  return ret;
}
/**
 * Tests whether all the elements of an array are coercible to a number or not.
 *
 * @param {Array} array An array.
 * @return {boolean} True if all the elements are coercible to a number, false otherwise.
 */

function areArrayItemsAllCoercibleToNumber(array) {
  const res = !array.some(isNaN);
  return res;
}
/**
 * Copies an array or converts an array-like object to a new array.
 *
 * @param {*} arg Array or array-like object.
 * @return {Array} An array.
 */

function arrayOrArrayLike(arg) {
  return Array.prototype.slice.call(arg);
}
/**
 * Returns the last element of the given array.
 *
 * @param {Array} array An array.
 * @return {*} The last element of the array or undefined if there isn't one.
 */

function lastOfArray(array) {
  return array[array.length - 1];
}
/**
 * Returns the first element of the given array.
 *
 * @param {Array} array An array.
 * @return {*} The first element of the array or undefined if there isn't one.
 */

function firstOfArray(array) {
  return array[0];
}
/**
 * Like {@link Array.prototype.find}, but in reverse order.
 *
 * @param {Array} array An array.
 * @param {Function} fn Function to use for the test. The function will receive the array element as parameter.
 * @return {*} The first element which satisfies the test in the array by seeking for the element in reverse order
 *             (i.e. the last element of the array for which the test is satisfied).
 *             If no element satisfies the test, "undefined" is returned.
 */

function arrayFindReverse(array, fn) {
  let l = array.length;
  let ret = void 0;

  while (l) {
    l--;

    if (fn(array[l])) {
      ret = array[l];
      break;
    }
  }

  return ret;
}
/**
 * Finds the maximum value of an array of numbers.
 *
 * @param {number[]} array An array of numbers.
 * @return {number|undefined} The maximum value of the array, or "undefined"
 *                            if the given array is empty.
 */

const arrayMax = array => array.length ? array.reduce((carry, current) => current > carry ? current : carry, -Infinity) : void 0;
/**
 * Finds the minimum value of an array of numbers.
 *
 * @param {number[]} array An array of numbers.
 * @return {number|undefined} The minimum value of the array, or "undefined"
 *                            if the given array is empty.
 */

const arrayMin = array => array.length ? array.reduce((carry, current) => current < carry ? current : carry, +Infinity) : void 0;
/**
 * Sorts an array of numbers returning a new array with the sorted
 * numbers (does not mutate the original).
 *
 * @param {number[]} arrayOfNums An array of numbers.
 * @param {boolean} [desc] True for descending order, false for ascending order (default).
 * @return {number[]} A new array with the sorted numbers.
 */

const sortNums = (arrayOfNums, desc = false) => [...arrayOfNums].sort((a, b) => !desc // asc
? a - b : // desc
b - a);
//# sourceMappingURL=array.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/bitwise.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/bitwise.js ***!
  \*********************************************************/
/*! exports provided: turnNthBitOff, turnNthBitOn, toggleNthBit, checkNthBitOn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnNthBitOff", function() { return turnNthBitOff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "turnNthBitOn", function() { return turnNthBitOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleNthBit", function() { return toggleNthBit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNthBitOn", function() { return checkNthBitOn; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Bitwise utility functions.
 */

/**
 * Turns nth bit off.
 *
 * @param {number} num A number.
 * @param {number} nth Nth bit to turn off (starting from 1 for the rightmost bit).
 * @return {number} New number with the nth bit turned off.
 */
const turnNthBitOff = (num, nth) => num & ~(1 << nth - 1);
/**
 * Turns nth bit on.
 *
 * @param {number} num A number.
 * @param {number} nth Nth bit to turn on (starting from 1 for the rightmost bit).
 * @return {number} New number with the nth bit turned off.
 */

const turnNthBitOn = (num, nth) => num | 1 << nth - 1;
/**
 * Toggles nth bit.
 *
 * @param {number} num A number.
 * @param {number} nth Nth bit to toggle (starting from 1 for the rightmost bit).
 * @return {number} New number with the nth bit toggled.
 */

const toggleNthBit = (num, nth) => num ^ 1 << nth - 1;
/**
 * Checks if nth bit is on.
 *
 * @param {number} num A number.
 * @param {number} nth Nth bit to check.
 * @param {number} 0 if the nth bit is off, otherwise a number greater than 0 if the nth bit is on.
 */

const checkNthBitOn = (num, nth) => num & 1 << nth - 1;
//# sourceMappingURL=bitwise.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/callback.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/callback.js ***!
  \**********************************************************/
/*! exports provided: delay, debounce, throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delay", function() { return delay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions for callback handling (like debouncing, throttling).
 */

/**
 * Delays execution of a callback and cancels a previously registered callback if it wasn't executed yet.
 */

const delay = function () {
  let timer = 0;
  /**
   * Inner function.
   *
   * @param {Function} callback The callback to execute.
   * @param {number} ms Milliseconds to wait before executing the callback.
   * @return {undefined}
   */

  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback();
    }, ms);
  };
}();
/**
 * Debounces a function.
 *
 * @param {Function} fn A function.
 * @param {number} wait Wait interval in milliseconds.
 * @return {Function} A new function, debounced.
 */

function debounce(fn, wait) {
  let timer = void 0;
  return function (...args) {
    !Object(_core__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(timer) && clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args);
    }, wait);
  };
}
/**
 * Throttles a function.
 *
 * @see https://www.sitepoint.com/throttle-scroll-events/
 *
 * @param {Function} fn A function.
 * @param {number} wait Wait interval in milliseconds.
 * @return {Function} A new function, throttled.
 */

function throttle(fn, wait) {
  let time = Date.now();
  return function (...args) {
    if (time + wait - Date.now() < 0) {
      fn(...args);
      time = Date.now();
    }
  };
}
//# sourceMappingURL=callback.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/color.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/color.js ***!
  \*******************************************************/
/*! exports provided: getLuminance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Color-related utility functions.
 */

/**
 * Gets a color's luminance.
 *
 * @param {number} color Color int value (RGB).
 * @return {number} An int greater than 160 if the color is considered dark and less than or
 *                  equal to 160 if the color is considered light.
 */
function getLuminance(color) {
  const c = parseInt(color, 16);
  const r = (c & 0xff0000) >> 16;
  const g = (c & 0x00ff00) >> 8;
  const b = c & 0x0000ff;
  return 0.299 * r + 0.587 * g + 0.114 * b;
}
//# sourceMappingURL=color.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/combinatorics.js":
/*!***************************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/combinatorics.js ***!
  \***************************************************************/
/*! exports provided: yieldCombinationsWithoutRepetition, uniqueProgressiveIncrementalCombinations, yieldUniqueProgressiveIncrementalCombinations, yieldAllSubsequences, yieldUniqueSubsequences, yieldPermutations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yieldCombinationsWithoutRepetition", function() { return yieldCombinationsWithoutRepetition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueProgressiveIncrementalCombinations", function() { return uniqueProgressiveIncrementalCombinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yieldUniqueProgressiveIncrementalCombinations", function() { return yieldUniqueProgressiveIncrementalCombinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yieldAllSubsequences", function() { return yieldAllSubsequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yieldUniqueSubsequences", function() { return yieldUniqueSubsequences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yieldPermutations", function() { return yieldPermutations; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/js-utl/dist/es6/modules/array.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Combinatorics utility functions.
 */


/**
 * Yields all the combinations of an array without repetitions (binomial coefficient).
 *
 * @generator
 * @param {Array} items An array.
 * @param {number} numberOfItemsPerCombination The number of elements in each combination
 *                                             (this function assumes it to be less than "items.length"
 *                                             and greater than 0).
 * @param {boolean} yieldCopy True if the yielded combination should be a copy (default) or
 *                            the internal array used during the generation of the current combination.
 * @yields {Array} The next combination.
 */

const yieldCombinationsWithoutRepetition = function* (items, numberOfItemsPerCombination, yieldCopy = true) {
  const l = items.length;
  const prefix = [];

  const recurse = function* recurse(items, l, prefix, numberOfItemsPerCombination, nextIndex = 0) {
    // Same as:
    // if (nextIndex === numberOfItemsPerCombination) {
    if (prefix.length === numberOfItemsPerCombination) {
      // Base case:
      yield yieldCopy ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["arrayOrArrayLike"])(prefix) : prefix;
    } else {
      // Recurrent case:
      for (let i = nextIndex; i < l && // Remaining needed items
      numberOfItemsPerCombination - prefix.length <= // Remaining available items
      l - i; i++) {
        prefix.push(items[i]);
        yield* recurse(items, l, prefix, numberOfItemsPerCombination, i + 1);
        prefix.pop();
      }
    }
  };

  yield* recurse(items, l, prefix, numberOfItemsPerCombination);
};
/**
 * Generate unique, progressive and incremental combinations.
 *
 * @param {Array} items An array of items.
 * @return {Array[]} An array of arrays, each representing a unique progressive incremental combination.
 *                   An empty array is returned if the given items array is empty.
 */

const uniqueProgressiveIncrementalCombinations = items => {
  const len = items.length;

  if (len === 0) {
    return [];
  }

  const last = Object(_array__WEBPACK_IMPORTED_MODULE_1__["arrayOrArrayLike"])(items); // Shallow copy/clone of the given array.

  if (len === 1) {
    // [1] => [[1]]
    return [last];
  }

  const ret = []; // [1], [2], [3], ..., [n]

  items.map(item => ret.push([item]));

  if (len > 2) {
    // There  are at least three items.
    for (let numberOfItemsPerCombination = 2; numberOfItemsPerCombination < len; numberOfItemsPerCombination++) {
      for (const combination of yieldCombinationsWithoutRepetition(items, numberOfItemsPerCombination)) {
        ret.push(combination);
      }
    }
  }

  ret.push(last);
  return ret;
};
/**
 * Yields unique, progressive and incremental combinations.
 *
 * @generator
 * @param {Array} items An array of items.
 * @param {boolean} yieldCopy True if some of the yielded combinations should be a copy (default)
 *                         of the corresponding internal array used during the generation of the current combination
 *                         or that same array should be returned (if "yieldCopy" is "false").
 * @yields {Array} An array, each representing the next unique progressive incremental combination.
 *                 An empty array is yielded if the given items array is empty.
 */

const yieldUniqueProgressiveIncrementalCombinations = function* (items, yieldCopy = true) {
  const len = items.length;

  if (len === 0) {
    return;
  }

  const last = yieldCopy ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["arrayOrArrayLike"])(items) : items; // Shallow copy/clone of the given array.

  if (len === 1) {
    // [1] => [[1]]
    yield last;
    return;
  } // [1], [2], [3], ..., [n]


  yield* Object(_core__WEBPACK_IMPORTED_MODULE_0__["mapYield"])(items, item => [item]);

  if (len > 2) {
    // There  are at least three items.
    for (let numberOfItemsPerCombination = 2; numberOfItemsPerCombination < len; numberOfItemsPerCombination++) {
      for (const combination of yieldCombinationsWithoutRepetition(items, numberOfItemsPerCombination, yieldCopy)) {
        yield combination;
      }
    }
  }

  yield last;
};
/**
 * Yields all the subsequences of the given array of items.
 *
 * @generator
 * @param {Array} items An array of items to use to yield subsequences.
 * @yields {Array} The next subsequence.
 */

const yieldAllSubsequences = function* (items) {
  const l = items.length;

  for (let i = 0; i <= l; i++) {
    for (const combination of yieldCombinationsWithoutRepetition(items, i)) {
      yield combination;
    }
  }
};
/**
 * Yields only the unique subsequences of the given array of items.
 *
 * @generator
 * @param {Array} items An array of items to use to yield subsequences.
 * @yields {Array} The next unique subsequence.
 */

const yieldUniqueSubsequences = function* (items) {
  const map = new Map();
  yield [];

  for (const subsequence of yieldAllSubsequences(items)) {
    if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["nestedMapHas"])(map, subsequence)) {
      Object(_core__WEBPACK_IMPORTED_MODULE_0__["nestedMapSet"])(map, subsequence, true);
      yield subsequence;
    }
  }
};
/**
 * Yields all the permutations of the given array of items.
 *
 * @generator
 * @param {Array} items An array of items to use to yield permutations.
 * @param {boolean} yieldCopy True if the yielded permutation should be a copy (default) or
 *                            the internal array used during the generation of the current permutation.
 * @yields {Array} The next permutation.
 */

const yieldPermutations = function* (items, yieldCopy = true) {
  const currentPermutationPrefix = [];
  const currentPermutationIndicesMap = {};

  const permute = function* () {
    if (currentPermutationPrefix.length === items.length) {
      yield yieldCopy ? Object(_array__WEBPACK_IMPORTED_MODULE_1__["arrayOrArrayLike"])(currentPermutationPrefix) : currentPermutationPrefix;
    } else {
      for (let i = 0; i < items.length; i++) {
        if (currentPermutationIndicesMap[i]) {
          continue;
        }

        currentPermutationPrefix.push(items[i]);
        currentPermutationIndicesMap[i] = true;
        yield* permute();
        delete currentPermutationIndicesMap[i];
        currentPermutationPrefix.pop();
      }
    }
  };

  yield* permute();
};
//# sourceMappingURL=combinatorics.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/convert.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/convert.js ***!
  \*********************************************************/
/*! exports provided: b2d, d2b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b2d", function() { return b2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d2b", function() { return d2b; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions related to conversion of data from one format to another.
 */

/**
 * Binary to decimal.
 *
 * @param {string} x Binary string.
 * @return {number} Decimal number.
 */
const b2d = x => parseInt(x, 2);
/**
 * Decimal to binary.
 *
 * @param {number} x Decimal number.
 * @return {string} Binary representation.
 */

const d2b = x => x.toString(2);
//# sourceMappingURL=convert.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/core/compare.js":
/*!**************************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/core/compare.js ***!
  \**************************************************************/
/*! exports provided: is, objectPropEqual, shallowEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "is", function() { return is; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectPropEqual", function() { return objectPropEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 *
 */

/**
 * @type {Function}
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Function implementing "Object.is" behaviour.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 *
 * @param {*} x The first value to compare.
 * @param {*} y The second value to compare.
 * @return {boolean} A boolean indicating whether or not the two arguments are the same value.
 */

function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}
/**
 * Checks whether a prop of an object equals in the other object (shallow comparison).
 *
 * @param {Object} objA The first object.
 * @param {Object} objB The second object.
 * @param {string} prop The name of the property.
 * @return {boolean} True if the value of "prop" in "objA" is shallowly equal to the value of "prop" in "objB".
 */

function objectPropEqual(objA, objB, prop) {
  return hasOwnProperty.call(objB, prop) && is(objA[prop], objB[prop]);
}
/**
 * Performs equality by iterating through keys on an object and returning "false"
 * when any key has values which are not strictly equal between the arguments.
 * Returns "true" when the values of all keys are strictly equal.
 *
 * @see https://stackoverflow.com/questions/22266826/how-can-i-do-a-shallow-comparison-of-the-properties-of-two-objects-with-javascri#answer-37636728
 *
 * @param {*} objA First object.
 * @param {*} objB Second object.
 * @return {boolean}
 */

function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  for (let i = 0; i < keysA.length; i++) {
    const prop = keysA[i];

    if (!objectPropEqual(objA, objB, prop)) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=compare.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/core/index.js":
/*!************************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/core/index.js ***!
  \************************************************************/
/*! exports provided: shallowEqual, objectPropEqual, is, config, isObjectEmpty, isObject, isPlainObject, isArray, isCallable, isEmpty, isEmptyOr0, getGlobalObject, uniqueId, nestedPropertyValue, getNestedPropertyValue, hasNestedPropertyValue, setNestedPropertyValue, nestedMapSet, nestedMapHas, nestedMapGet, nestedTreeMapSet, nestedTreeMapHas, nestedTreeMapGet, mapYield, deepArrayCompare, deepObjectCompare, nestedObjectConstructValue, cloneDeeplyJSON, isReferenceType, isPrimitiveType, hasCyclicReference, typeToStr, cloneObjDeeply, deepObjectExtend, deepObjectCloningExtend, extend, extendDecorate, includesTypeCoercion, isUndefined, isInt, ctypeDigit, isIntegerOrIntegerStr, findIndex, firstPropValue, isStrictlyTrue, isTruthy, allTruthy, allNotUndefined, isJSONString, noOpFn, partialShallowEqual, shallowObjectDiff, str, mapObject, propSelection, prototypeChainProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectEmpty", function() { return isObjectEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCallable", function() { return isCallable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyOr0", function() { return isEmptyOr0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlobalObject", function() { return getGlobalObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uniqueId", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedPropertyValue", function() { return nestedPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNestedPropertyValue", function() { return getNestedPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasNestedPropertyValue", function() { return hasNestedPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNestedPropertyValue", function() { return setNestedPropertyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedMapSet", function() { return nestedMapSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedMapHas", function() { return nestedMapHas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedMapGet", function() { return nestedMapGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedTreeMapSet", function() { return nestedTreeMapSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedTreeMapHas", function() { return nestedTreeMapHas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedTreeMapGet", function() { return nestedTreeMapGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapYield", function() { return mapYield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepArrayCompare", function() { return deepArrayCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepObjectCompare", function() { return deepObjectCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedObjectConstructValue", function() { return nestedObjectConstructValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeeplyJSON", function() { return cloneDeeplyJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReferenceType", function() { return isReferenceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitiveType", function() { return isPrimitiveType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCyclicReference", function() { return hasCyclicReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeToStr", function() { return typeToStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneObjDeeply", function() { return cloneObjDeeply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepObjectExtend", function() { return deepObjectExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepObjectCloningExtend", function() { return deepObjectCloningExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendDecorate", function() { return extendDecorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includesTypeCoercion", function() { return includesTypeCoercion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInt", function() { return isInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ctypeDigit", function() { return ctypeDigit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIntegerOrIntegerStr", function() { return isIntegerOrIntegerStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstPropValue", function() { return firstPropValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictlyTrue", function() { return isStrictlyTrue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTruthy", function() { return isTruthy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTruthy", function() { return allTruthy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allNotUndefined", function() { return allNotUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJSONString", function() { return isJSONString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noOpFn", function() { return noOpFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partialShallowEqual", function() { return partialShallowEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowObjectDiff", function() { return shallowObjectDiff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapObject", function() { return mapObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propSelection", function() { return propSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prototypeChainProperties", function() { return prototypeChainProperties; });
/* harmony import */ var _compare__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare */ "./node_modules/js-utl/dist/es6/modules/core/compare.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return _compare__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "objectPropEqual", function() { return _compare__WEBPACK_IMPORTED_MODULE_0__["objectPropEqual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "is", function() { return _compare__WEBPACK_IMPORTED_MODULE_0__["is"]; });

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * Core utility functions.
 */

/**
 * Optional configuration with useful properties.
 *
 * @type {Object}
 */

const config = {
  uniqueIdPrefix: "",
  elementUniqueIdPrefix: "",
  checkNetworkURI: null
};
/**
 * Tests if an object is empty.
 *
 * @param {Object} obj The object to test.
 * @return {boolean} "true" if the given object is empty (does not have own properties), "false" otherwise.
 */

function isObjectEmpty(obj) {
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }

  return true;
}
/**
 * @type {string}
 */

const objPrototypeToString = Object.prototype.toString.call({});
/**
 * Tests if a variable is an object.
 *
 * @param {*} obj The variable to test.
 * @return {boolean} "true" if "obj" is indeed an object, "false" otherwise.
 */

const isObject = function (obj) {
  return objPrototypeToString === Object.prototype.toString.call(obj);
};
/**
 * Tests if a variable is a plain object (i.e. "{}", an object literal).
 *
 * @param {*} obj The variable to test.
 * @return {boolean} "true" if "obj" is a plain object, "false" otherwise.
 */

const isPlainObject = obj => {
  return obj !== null && typeof obj === "object" && obj.constructor === Object && isObject(obj);
};
/**
 * Tests to see whether something is an array or not.
 *
 * @param {*} something A variable to check whether it is an array or not.
 * @return {boolean} True if the parameter passed in is an array, false otherwise.
 */

function isArray(something) {
  return Object.prototype.toString.call(something) === Object.prototype.toString.call([]);
}
/**
 * Tests if the given value is callable.
 *
 * @param {*} v The value.
 * @return {boolean} True if callable, false otherwise.
 */

function isCallable(v) {
  return typeof v === "function";
}
/**
 * Tests if a variable is empty returning true for empty strings and empty arrays.
 *
 * @param {*} data The variable to test.
 * @return {boolean} True if the variable is empty, false otherwise.
 */

function isEmpty(data) {
  return !data || data.length === 0;
}
/**
 * Tests if a variable is empty or 0 ("0" string) returning true for empty strings,
 * empty arrays, the "0" string and empty values.
 *
 * @param {*} data The variable to test.
 * @return {boolean} True if the variable is empty or "0", false otherwise.
 */

function isEmptyOr0(data) {
  return !data || data === "0" || data.length === 0;
}
/**
 * Returns a reference to the global object.
 *
 * @return {Window|global} The global object (this function is cross-platform aware).
 */

function getGlobalObject() {
  return typeof global !== "undefined" ? global : window;
}
/**
 * @type {string}
 */

const JSUtlUniqueIdCounterProp = "JSUtlUniqueIdCounterLEzKKl87QCDxwVH";
/**
 * Generates a unique ID which can be used as an "id" attribute.
 *
 * @param {string|undefined} [uniqueIdPrefix] Local unique ID prefix which overrides the prefix
 *                                            set on the "config" configuration object.
 * @return {string} The unique ID.
 */

function uniqueId(uniqueIdPrefix = void 0) {
  const globalObject = getGlobalObject();
  globalObject[JSUtlUniqueIdCounterProp] = globalObject[JSUtlUniqueIdCounterProp] || 0;
  globalObject[JSUtlUniqueIdCounterProp]++;
  const uniqueIdCounter = globalObject[JSUtlUniqueIdCounterProp];
  const uniqueId = (uniqueIdPrefix || config.uniqueIdPrefix) + uniqueIdCounter;
  return uniqueId;
}
/**
 * Gets a nested value of an object given an array of nested property names (keys).
 *
 * @param {Object} data JS POJO object.
 * @param {Array} props Array of object nested keys.
 * @return {*} The leaf value.
 */

function nestedPropertyValue(data, props) {
  let root = data;

  for (let i = 0; i < props.length; i++) {
    const prop = props[i];
    root = root[prop];
  }

  return root;
}
/**
 * Alias for "nestedPropertyValue".
 *
 * @alias
 */

const getNestedPropertyValue = nestedPropertyValue;
/**
 * Checks if a nested value of an object given an array of nested property names (keys) exists.
 *
 * @param {Object} data JS POJO object.
 * @param {Array} props Array of object nested keys.
 * @return {boolean} True if the nested key exists, false otherwise.
 */

function hasNestedPropertyValue(data, props) {
  if (!props.length) {
    return false;
  }

  let root = data;

  for (let i = 0; i < props.length; i++) {
    const prop = props[i];

    if (!root[prop]) {
      return false;
    }

    root = root[prop];
  }

  return true;
}
/**
 * Sets a nested value of an object given an array of nested property names (keys).
 *
 * @param {Object} data JS POJO object.
 * @param {Array} props Array of object nested keys.
 * @param {*} value Leaf value.
 * @return {undefined}
 */

function setNestedPropertyValue(data, props, value) {
  if (!props.length) {
    return;
  }

  let root = data;
  let prev = null;

  for (let i = 0; i < props.length; i++) {
    const prop = props[i];

    if (typeof root[prop] !== "object") {
      root[prop] = {};
    }

    prev = root;
    root = root[prop];
  }

  if (prev) {
    prev[props[props.length - 1]] = value;
  }
}
/**
 * Sets a nested value on a nested map.
 *
 * @param {Map|WeakMap} map A map or weak map.
 * @param {Array} keys Array of keys to traverse. Each key will lead to a nested map.
 * @param {*} value The value to set at the inner key.
 * @return {undefined}
 */

const nestedMapSet = (map, keys, value) => {
  let i = 0;
  let current = map;

  while (i < keys.length - 1) {
    const key = keys[i];
    const nested = current.get(key);

    if (nested instanceof Map || nested instanceof WeakMap) {
      current = nested;
    } else {
      const newMap = new Map();
      current.set(key, newMap);
      current = newMap;
    }

    i++;
  }

  current.set(keys[i], value);
};
/**
 * Tests if a map has the given nested keys.
 *
 * @param {Map|WeakMap} map A map or weak map.
 * @param {Array} keys Array of keys to check. Each key represents a nested map.
 * @return {boolean} "true" if all the nested keys exist, false otherwise.
 */

const nestedMapHas = (map, keys) => {
  let current = map;
  let i = 0;
  const l = keys.length;

  while ((current instanceof Map || current instanceof WeakMap) && current.has(keys[i]) && i < l) {
    current = current.get(keys[i]);
    i++;
  }

  return i == l;
};
/**
 * Gets a value from a nested map.
 *
 * @param {Map|WeakMap} map A map or weak map.
 * @param {Array} keys Array of keys. Each key represents a nested map.
 * @return {*} The value of the map or "undefined" if there is no value for the given nested keys.
 */

const nestedMapGet = (map, keys) => {
  let current = map;
  let i = 0;
  const l = keys.length;

  while ((current instanceof Map || current instanceof WeakMap) && current.has(keys[i]) && i < l) {
    current = current.get(keys[i]);
    i++;
  }

  return i == l ? current : void 0;
};
/**
 * @type {Symbol}
 */

const treeMapSubtree = Symbol("treeMapSubtree");
/**
 * Sets a nested value on a nested tree map.
 *
 * @param {Map|WeakMap} rootMap A map or weak map to use as the root.
 * @param {Array} keys Array of keys to traverse. Each key will lead to a nested node of the tree map.
 * @param {*} value The value to set at the inner nested key.
 * @return {undefined}
 */

const nestedTreeMapSet = (rootMap, keys, value) => {
  let i = 0;
  let current = rootMap;
  const MapConstructor = rootMap instanceof WeakMap ? WeakMap : Map;

  while (i < keys.length - 1) {
    const key = keys[i];
    const nested = current.get(key);

    if (nested) {
      current = nested[treeMapSubtree] || (nested[treeMapSubtree] = new MapConstructor());
    } else {
      const newMap = new MapConstructor();
      const node = {
        [treeMapSubtree]: newMap,
        value: void 0
      };
      current.set(key, node);
      current = newMap;
    }

    i++;
  }

  const key = keys[i];
  !current.has(key) ? current.set(key, {
    value
  }) : current.get(key).value = value;
};
/**
 * Tests if a tree map has the given nested keys.
 *
 * @param {Map|WeakMap} rootMap The root of the map or weak map.
 * @param {Array} keys Array of keys to check. Each key represents a nested node of the tree map.
 * @return {boolean} "true" if all the nested keys exist, false otherwise.
 */

const nestedTreeMapHas = (rootMap, keys) => {
  let current = rootMap;
  let i = 0;
  const l = keys.length;

  while ((current instanceof Map || current instanceof WeakMap) && current.has(keys[i]) && i < l) {
    current = current.get(keys[i])[treeMapSubtree];
    i++;
  }

  return i == l;
};
/**
 * Gets a value from a nested tree map.
 *
 * @param {Map|WeakMap} rootMap The root of the map or weak map.
 * @param {Array} keys Array of keys. Each key represents a nested node of the tree map.
 * @return {*} The value of the tree map or "undefined" if there is no value for the given nested keys.
 */

const nestedTreeMapGet = (rootMap, keys) => {
  let current = rootMap;
  let i = 0;
  const lastIndex = keys.length - 1;

  while ((current instanceof Map || current instanceof WeakMap) && current.has(keys[i]) && i < lastIndex) {
    current = current.get(keys[i])[treeMapSubtree];
    i++;
  }

  if (i === lastIndex && current) {
    const lastKey = keys[i];

    if (current.has(lastKey)) {
      const nested = current.get(lastKey);
      return nested.value;
    }
  }

  return void 0;
};
/**
 * Yields values of an array mapping the yielded value.
 *
 * @generator
 * @param {Array} items An array of items.
 * @param {*} fn The function to call.
 *               The function will receive, in order the nth item,
 *               the index of the item in the array of items and the whole items array
 *               as parameters.
 * @param {*} thisArg Optional this arg of the called function (defaults to undefined).
 * @yields {*} The next yielded mapped item.
 */

function* mapYield(items, fn, thisArg = void 0) {
  items.map();
  const boundFn = fn.bind(thisArg);

  for (let i = 0; i < items.length; i++) {
    yield boundFn(items[i], i, items);
  }
}
/**
 * Compares two arrays deeply.
 *
 * @param {Array} arr1 First array.
 * @param {Array} arr2 Second array.
 * @return {boolean} True if they are equal (same indexes and same values), false otherwise.
 */

function deepArrayCompare(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  const toString = Object.prototype.toString;
  const arrayToStringStr = toString.call([]);

  for (let i = 0; i < arr1.length; i++) {
    if (!(i in arr2)) {
      return false;
    } else if (isPlainObject(arr1[i])) {
      if (!isPlainObject(arr2[i]) || // eslint-disable-next-line @typescript-eslint/no-use-before-define
      !deepObjectCompare(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arrayToStringStr === toString.call(arr1[i])) {
      if (arrayToStringStr !== toString.call(arr2[i]) || !deepArrayCompare(arr1[i], arr2[i])) {
        return false;
      }
    } else {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
  }

  return true;
}
/**
 * Compare two objects deeply.
 *
 * @param {Object} obj1 First object.
 * @param {Object} obj2 Second object.
 * @return {boolean} True if they are equal (same properties and same values), false otherwise.
 */

function deepObjectCompare(obj1, obj2) {
  const toString = Object.prototype.toString;
  const arrayToStringStr = toString.call([]);

  for (const property in obj1) {
    if (!(property in obj2)) {
      // `obj2[property]` does not contain the property of `obj1`.
      return false;
    } else if (isPlainObject(obj1[property])) {
      // `obj1[property]` is an object.
      if (!isPlainObject(obj2[property]) || !deepObjectCompare(obj1[property], obj2[property])) {
        // `obj2[property]` is not an object or the branches are different.
        return false;
      }
    } else if (arrayToStringStr === toString.call(obj1[property])) {
      // `obj1[property]` is an array.
      if (arrayToStringStr !== toString.call(obj2[property]) || !deepArrayCompare(obj1[property], obj2[property])) {
        // `obj2[property]` is not an array or the two objects are different.
        return false;
      }
    } else {
      // `obj1[property]` is not an object and is not an array.
      if (obj1[property] !== obj2[property]) {
        return false;
      }
    }
  } // `obj1` equals `obj2` (has the same properties and the same values).


  return true;
}
/**
 * Nests the properties of an object using an array of props definitions and defaults.
 * Returns the leaf.
 * Example:
 *
 *      var obj = {};
 *      var nest = [{a: {}}, {b: {}}, {c: {}}, {d: {}}, {e: {}}, {f: {}}, {g: {}}, {h: {}} ];
 *      var leaf = nestedObjectConstructValue(obj, nest);
 *      leaf.i = 'i';
 *      leaf.l = { m: "m" };
 *      JSON.stringify(obj); // {"a":{"b":{"c":{"d":{"e":{"f":{"g":{"h":{"i":"i","l":{"m":"m"}}}}}}}}}}
 *      nest = nest.concat([ {n: {}}, {o: {}}, {p: {}} ]);
 *      var pLeaf = nestedObjectConstructValue(obj, nest);
 *      pLeaf.q = 'q';
 *      nest = nest.concat([ {q: {}} ]);
 *      nestedObjectConstructValue(obj, nest); // 'q'
 *
 * @param {Object} root The root object.
 * @param {Array} nestedPropsDef The nexted props definitions.
 * @param {boolean} [isRootArrayIfRootFalsy] True if the root should be an array if the first argument "root" is falsy.
 * @return {*} The leaf.
 */

function nestedObjectConstructValue(root, nestedPropsDef, isRootArrayIfRootFalsy) {
  root = root || (isRootArrayIfRootFalsy ? [] : {});
  let leaf = root;

  for (let i = 0; i < nestedPropsDef.length; i++) {
    const propDef = nestedPropsDef[i];
    const propKey = Object.keys(propDef)[0];
    const propDefault = propDef[propKey];
    leaf[propKey] = leaf[propKey] || propDefault;
    leaf = leaf[propKey];
  }

  return leaf;
}
/**
 * Clones an object deeply using the JSON API.
 *
 * @param {Object} obj The object to clone.
 * @return {Object} The cloned object.
 */

function cloneDeeplyJSON(obj) {
  return JSON.parse(JSON.stringify(obj));
}
/**
 * Tests whether the given value is a reference type or not.
 *
 * @param {*} value Any value which can be an object or a primitive type.
 * @return {boolean} True if the given value is a reference type, false otherwise.
 */

function isReferenceType(value) {
  return new Object(value) === value;
}
/**
 * Tests whether the given value is a primitive type or not.
 *
 * @param {*} value Any value which can be an object or a primitive type.
 * @return {boolean} True if the given value is a primitive type, false otherwise.
 */

function isPrimitiveType(value) {
  return new Object(value) !== value;
}
/**
 * Checks whether an object has a cyclic reference or not.
 *
 * @param {Object} obj The object to check for a cyclic reference.
 * @return {boolean} True if the object has a cyclic reference, false otherwise.
 */

function hasCyclicReference(obj) {
  const stackSet = [];
  let detected = false;

  function detect(obj) {
    if (detected) {
      return;
    }

    if (typeof obj !== "object") {
      return;
    }

    const indexOfObj = stackSet.indexOf(obj);

    if (indexOfObj !== -1) {
      detected = true;
      return;
    }

    stackSet.push(obj);

    for (const k in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, k)) {
        detect(obj[k]);
      }
    }

    stackSet.splice(indexOfObj, 1);
    return;
  }

  detect(obj);
  return detected;
}
/**
 * Converts a type to its string representation.
 *
 * @param {*} type A variable.
 * @return {string} The string representation of "type".
 */

function typeToStr(type) {
  return Object.prototype.toString.call(type);
}
/**
 * Clones an object deeply and returns the clone.
 *
 * @param {Object} object The object to clone.
 * @return {Object} The clone.
 * @throws {Error} If a circular reference if even only one property is of an unkown type
 *                 (this should never happen) or a circular reference is detected.
 */

function cloneObjDeeply(object) {
  const newObject = new object.constructor();

  for (const prop in object) {
    // If the property is defined on the prototype, ignore it. We don't want to assign it for each clone instance.
    if (!Object.prototype.hasOwnProperty.call(object, prop)) {
      continue;
    }

    const property = object[prop];

    if (isPrimitiveType(property)) {
      newObject[prop] = property;
    } else if (isReferenceType(property)) {
      if (!hasCyclicReference(property)) {
        const clone = cloneObjDeeply(property);
        newObject[prop] = clone;
      } else {
        throw new Error("Circular reference detected inside of property '" + prop + "' (" + typeToStr(property) + ") in object (" + typeToStr(object) + ")");
      }
    } else {
      throw new Error("Oops! Unknown type for property '" + prop + "' (" + typeToStr(property) + ") in object (" + typeToStr(object) + ")");
    }
  }

  return newObject;
}
/**
 * Deep object extension implementation.
 * Nothing is returned, but the destination object will be modified and merged with the source object
 * so that properties of the source object which are objects will recursively merge with the corresponding
 * destination property while the other properties with all the other types will replace the properties of the
 * destination object.
 * Note that this method should not be used for inheritance via the Prototypal Combination Inheritance pattern.
 * Also, this method doesn't perform a deep object cloning, it just extends the destinationObject by adding properties
 * it doesn't have in a deep way.
 *
 * @param {Object} destinationObject The destination object which will be modified and merged with the source object.
 * @param {Object} sourceObject The source object which will be used to extend the destination object.
 * @return {undefined}
 */

function deepObjectExtend(destinationObject, sourceObject) {
  for (const property in sourceObject) {
    if (sourceObject[property] && isPlainObject(sourceObject[property])) {
      destinationObject[property] = destinationObject[property] || {};
      deepObjectExtend(destinationObject[property], sourceObject[property]);
    } else {
      destinationObject[property] = sourceObject[property];
    }
  }
}
/**
 * Deep object cloning extension implementation. If the source objects contain a property with a reference type, a clone object
 * of the same type of that property will be created and then merged with the property object of the destination object.
 *
 * @param {Object} destinationObject The destination object which will be modified and merged with the source object.
 * @param {...Object} sourceObject One or more objects which will be used to extend the destination object.
 * @return {undefined}
 */

function deepObjectCloningExtend(...args) {
  const destinationObject = args[0];
  let sourceObject;

  for (let i = 1; args[i]; i++) {
    sourceObject = args[i];

    for (const property in sourceObject) {
      if (sourceObject[property] && isPlainObject(sourceObject[property])) {
        destinationObject[property] = destinationObject[property] || {};
        deepObjectExtend(destinationObject[property], cloneObjDeeply(sourceObject[property]));
      } else {
        destinationObject[property] = sourceObject[property];
      }
    }
  }
}
/**
 * Extends a destination object with the provided source objects.
 *
 * @param {Object} destinationObj The destination object.
 * @param {...Object} sourceObjects The source objects.
 * @return {Object} The destination object "destinationObj" given as parameter after extension.
 */

function extend(destinationObj, ...sourceObjects) {
  for (const sourceObject of sourceObjects) {
    deepObjectExtend(destinationObj, sourceObject);
  }

  return destinationObj;
}
/**
 * Extends a destination object with the provided source objects.
 *
 * @param {Object} destinationObject The destination object.
 * @param {...*} rest The source objects with the last parameter being an array of rules,
 *                    each rule being a tuple array where the first element is an array of "ORed" property names (strings or numbers)
 *                    or regexes matching property names for which the corresponding values should be decorated
 *                    (or a single property name or regex matching a property name if the decoration should only happen on a single property),
 *                    and where the second element is a callback to execute for each value which is a value of a property
 *                    of a source object.
 *                    The callback has the following signature:
 *
 *                        (value: *, prop: string|number, parent: Object) => *|undefined
 *
 *                    The callback will receive the final value after extension, its associated property and the parent object
 *                    where that property is set with that value.
 *                    Its returned value will be used as the final value of the property for that object in "destinationObject".
 *
 *                    If the last parameter is not an array of rules, it will be treated as the last source object to use for the extension
 *                    (the "extend" function will be simply called under the hood without any decoration logic).
 * @return {Object} The destination object "destinationObj" given as parameter after extension and, if the callback is given
 *                  as the last parameter, after applying the given callback.
 */

function extendDecorate(destinationObject, ...rest) {
  const rules = rest[rest.length - 1];

  if (isArray(rules)) {
    rest.pop();
    const sourceObjects = rest;
    const initialRetValue = {};
    const matchedRulesMap = new Map();
    const callbacksMap = new Map();
    const paths = [];

    const mapKeys = (destinationObject, sourceObject, currentStack, currentPath) => {
      for (const key in sourceObject) {
        currentStack.push({
          destinationObject,
          sourceObject,
          property: key,
          path: [...currentPath, key]
        });
      }
    };

    const matchRule = (rule, property) => {
      if (rule instanceof RegExp && typeof property === "string") {
        return property.match(rule);
      } else {
        return rule === property;
      }
    };

    const matchArrayRule = (arrayRule, property) => {
      for (const rule of arrayRule) {
        if (matchRule(rule, property)) {
          return true;
        }
      }

      return false;
    };

    const ruleMatches = (rule, property) => {
      if (isArray(rule)) {
        return matchArrayRule(rule, property);
      } else {
        return matchRule(rule, property);
      }
    };

    const matchRules = property => {
      if (!matchedRulesMap.has(property)) {
        const callbacks = [];

        for (const [rule, callback] of rules) {
          if (ruleMatches(rule, property)) {
            callbacks.push(callback);
          }
        }

        matchedRulesMap.set(property, callbacks);
      }

      return matchedRulesMap.get(property);
    };

    for (const sourceObject of sourceObjects) {
      const currentStack = [];
      const currentPath = [];
      mapKeys(destinationObject, sourceObject, currentStack, currentPath);

      while (currentStack.length) {
        const {
          destinationObject,
          sourceObject,
          property,
          path: currentPath
        } = currentStack.pop();

        if (sourceObject[property] && isPlainObject(sourceObject[property])) {
          // "sourceObject[property]" is an object of class "Object".
          destinationObject[property] = isPlainObject(destinationObject[property]) ? destinationObject[property] : {};
          mapKeys(destinationObject[property], sourceObject[property], currentStack, currentPath);
        } else {
          // "sourceObject[property]" is not an object.
          destinationObject[property] = sourceObject[property];
        }

        const callbacks = matchRules(property);

        if (callbacks && callbacks.length) {
          if (!nestedTreeMapHas(callbacksMap, currentPath)) {
            paths.push([...currentPath]);
          }

          nestedTreeMapSet(callbacksMap, currentPath, callbacks.map(callback => retValue => path => {
            const value = retValue === initialRetValue ? destinationObject[property] : retValue;
            return callback(value, property, destinationObject, path);
          }));
        }
      }
    } // Decorating the final nested values.


    for (let i = paths.length - 1; i >= 0; i--) {
      const path = paths[i];
      const callbacks = nestedTreeMapGet(callbacksMap, path) || [];
      let retValue = initialRetValue;

      for (const callback of callbacks) {
        retValue = callback(retValue)(path);
      }

      if (retValue !== initialRetValue) {
        setNestedPropertyValue(destinationObject, path, retValue);
      }
    }

    return destinationObject;
  } else {
    return extend(destinationObject, ...rest);
  }
}
/**
 * Like "Array.prototype.includes", but with type coercion.
 *
 * @param {Array} array The array.
 * @param {Anything} value The value.
 * @return {boolean} True if the value is included within the array (checking with type coercion`==`).
 */

function includesTypeCoercion(array, value) {
  for (const valueOfArray of array) {
    if (valueOfArray == value) {
      return true;
    }
  }

  return false;
}
/**
 * Tests whether a value is undefined or not.
 *
 * @param {*} value A value
 * @return {boolean} True value is undefined, false otherwise.
 */

function isUndefined(value) {
  return typeof value === "undefined";
}
/**
 * Tests if the given value is an int.
 *
 * @param {*} value The value.
 * @return {boolean} True if value is an int, false otherwise.
 */

function isInt(value) {
  return Number.isInteger(value);
}
/**
 * Tests if the given string is an integer string.
 *
 * @param {*} a The string.
 * @return {boolean} True if the given string is an integer string, false otherwise.
 */

function ctypeDigit(a) {
  return Boolean(a.match(/^[0-9]+$/));
}
/**
 * Tests if the given value is an int or an integer string.
 *
 * @param {*} a The value.
 * @return {boolean} True if the value is an int or an integer string, false otherwise.
 */

function isIntegerOrIntegerStr(a) {
  return Number.isInteger(a) || ctypeDigit(a);
}
/**
 * Finds the index of a value in an array without type juggling
 * (i.e. like "Array.prototype.indexOf", but using "==" for equality comparison).
 *
 * @param {Array} array An array.
 * @param {*} value A value.
 * @return {number} -1 if the value is not in array, otherwise the index of value in array.
 */

function findIndex(array, value) {
  return array.findIndex(el => el == value);
}
/**
 * Returns the first value of the first property of an object.
 *
 * @param {Object} obj The object.
 * @return {*} The value of the first property of the given object.
 */

function firstPropValue(obj) {
  let prop;

  for (prop in obj) {
    break;
  }

  return obj[prop];
}
/**
 * Tests if a value is strictly a boolean "true".
 *
 * @param {*} value A value.
 * @return {boolean} "true" if the value is a boolean "true", "false" otherwise.
 */

function isStrictlyTrue(value) {
  return value === true;
}
/**
 * Tests if a value is truthy or not.
 *
 * @param {*} value The value.
 * @return {boolean} "true" if the value is truthy (evaluates to boolean "true"), "false" otherwise.
 */

function isTruthy(value) {
  return Boolean(value);
}
/**
 * Tests if all the given values are truthy.
 *
 * @param {...*} values The values.
 * @return {boolean} "true" if and only if all the values are truthy.
 */

function allTruthy(...values) {
  return values.every(isTruthy);
}
/**
 * Tests if all the given values are not undefined.
 *
 * @param {...*} values The values.
 * @return {boolean} "true" if and only if all the values are not undefined.
 */

function allNotUndefined(...values) {
  return values.every(value => typeof value !== "undefined");
}
/**
 * Tests if a string is a valid JSON string.
 *
 * @param {string} str A string.
 * @return {boolean} "true" if the string represents a valid JSON string, "false" otherwise.
 */

function isJSONString(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
}
/**
 * No-op function.
 *
 * @return {undefined}
 */
// eslint-disable-next-line @typescript-eslint/no-empty-function

function noOpFn() {}
/**
 * Tests if a partial object is a subset of another object.
 *
 * @param {Object} obj An object.
 * @param {Object} partialObj A partial object which may not have all the keys of "obj"
 *                            or may even have different keys, or keys with different values.
 * @return {boolean} False if "partialObj" has a key which is not in "obj",
 *                   or has at least one key which is also in "obj" but with a different value
 *                   (shallow comparison), true otherwise.
 */

function partialShallowEqual(obj, partialObj) {
  return Object(_compare__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"])(Object.keys(partialObj).reduce((carry, key) => {
    carry[key] = obj[key];
    return carry;
  }, {}), partialObj);
}
/**
 * Returns a shallow object diff, returning an object with two keys "objA" and "objB",
 * each containing an object with all the properties of one of the two objects which are not within
 * the other object, respectively.
 * If a property is on both objects but each object has a different value for that same property
 * (using shallow equality comparison), the returned property will be set on both objects with their
 * respective values.
 *
 * @param {Object} objA First object.
 * @param {Object} objB Second object.
 * @return {Object} An object containing the shallow diff, with two keys "objA" and "objB".
 */

function shallowObjectDiff(objA, objB) {
  const diff = {
    objA: {},
    objB: {}
  };

  if (Object(_compare__WEBPACK_IMPORTED_MODULE_0__["shallowEqual"])(objA, objB)) {
    return diff;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  for (let i = 0; i < keysA.length; i++) {
    const prop = keysA[i];

    if (!Object(_compare__WEBPACK_IMPORTED_MODULE_0__["objectPropEqual"])(objA, objB, prop)) {
      diff.objA[prop] = objA[prop];

      if (hasOwnProperty.call(objB, prop)) {
        diff.objB[prop] = objB[prop];
      }
    }
  }

  for (let i = 0; i < keysB.length; i++) {
    const prop = keysB[i];

    if (!Object(_compare__WEBPACK_IMPORTED_MODULE_0__["objectPropEqual"])(objB, objA, prop)) {
      diff.objB[prop] = objB[prop];

      if (hasOwnProperty.call(objA, prop)) {
        diff.objA[prop] = objA[prop];
      }
    }
  }

  return diff;
}
/**
 * Casts a value to a string.
 *
 * @param {*} v A value.
 * @return {string} The string representation of the value.
 */

function str(v) {
  return "" + v;
}
/**
 * Maps an object, executing a function on each of its properties
 * returning a new mapped object.
 *
 * @param {Object} obj The object to map.
 * @param {Function} fn The function to use for the mapping.
 * @return {Object} The new mapped object.
 */

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value], index) => [key, fn(value, key, index)]));
/**
 * Selects the truthy properties of an object or the properties of an object
 * passing a test specified with a callback function.
 *
 * @param {Object} obj The input object.
 * @param {Function} fn A function which will receive two parameters:
 *
 *                          - value: The current value of the input object for a given property;
 *                          - prop: The name of the current property of the input object.
 *
 *                      The function will have to return a boolean "true" indicating that this value
 *                      and property has to be included in the returned object, or "false" otherwise.
 *
 * @return {Object} An object having only the properties which passed the test
 *                  implemented by the "fn" callback function.
 */

const propSelection = (obj, fn = isTruthy) => Object.keys(obj).reduce((carry, key) => {
  if (fn(obj[key], key)) {
    carry[key] = obj[key];
  }

  return carry;
}, {});
/**
 * Returns all the properties of the given object traversing its prototype chain.
 *
 * @param {Object} obj The object.
 * @param {Object} [options] An object with options.
 * @param {?Object} [options.stopAtPrototype] The prototype in the chain at which to stop the traversing.
 *                                            Defaults to null, in which case the whole prototype chain will be traversed.
 * @param {boolean} [options.stopAtPrototypeInclude] Whether or not to include the properties of the given prototype at which to stop.
 *                                                   Works only if "stopAtPrototype" is set to a valid prototype object in the prototype chain
 *                                                   of "obj".
 *                                                   Defaults to true, in which case the properties of the prototype at which to stop will be included
 *                                                   in the returned array.
 * @return {string[]} An array of containing the names of the properties.
 */

function prototypeChainProperties(obj, {
  stopAtPrototype = null,
  stopAtPrototypeInclude = true
} = {}) {
  let current = obj;
  const map = {};
  let isStopPrototype = false;
  let stop = false;

  while (!stop && current && (!isStopPrototype || stopAtPrototypeInclude)) {
    if (isStopPrototype) {
      stop = true;
    }

    const properties = Object.getOwnPropertyNames(current);
    properties.map(property => map[property] = true);
    current = Object.getPrototypeOf(current);

    if (stopAtPrototype) {
      isStopPrototype = current === stopAtPrototype;
    }
  }

  const properties = Object.keys(map);
  return properties;
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/date.js":
/*!******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/date.js ***!
  \******************************************************/
/*! exports provided: isValidDate, isValidDateTimeStr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDateTimeStr", function() { return isValidDateTimeStr; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Tests if the given value is a valid date.
 *
 * @param {*} value The value to test.
 * @return {boolean} True if it is a valid date, false otherwise.
 */
function isValidDate(value) {
  return Object.prototype.toString.call(value) === "[object Date]" && !isNaN(value.getTime());
}
/**
 * Tests if the given string is a valid datetime string (e.g. in ISO "YYYY-MM-DD HH:ii:ss" format).
 *
 * @param {string} str The given string.
 * @return {boolean} True if it is a valid datetime string, false otherwise.
 */

function isValidDateTimeStr(str) {
  return isValidDate(new Date(str));
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/fn.js":
/*!****************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/fn.js ***!
  \****************************************************/
/*! exports provided: _, proceedCallingFn, curry, POJOCurry, compose, pipe, pick, liftBinaryFn, juxt, converge, execIfPOJOHas, execWithExistentProps, forGen, flatten, flattenDeep, cartesianProduct, identityFn, identityArgsFn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proceedCallingFn", function() { return proceedCallingFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "curry", function() { return curry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POJOCurry", function() { return POJOCurry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liftBinaryFn", function() { return liftBinaryFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "juxt", function() { return juxt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "converge", function() { return converge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execIfPOJOHas", function() { return execIfPOJOHas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execWithExistentProps", function() { return execWithExistentProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forGen", function() { return forGen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenDeep", function() { return flattenDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartesianProduct", function() { return cartesianProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityFn", function() { return identityFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityArgsFn", function() { return identityArgsFn; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/js-utl/dist/es6/modules/array.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions for functional programming.
 */


/**
 * @type {string}
 */

const JSUtlCurryPlaceholderProp = "JSUtlCurryPlaceholderPropRPecoyYmCYqZ2lE";
/**
 * Curry function placeholder.
 *
 * @type {Object}
 */

const _ = {
  [JSUtlCurryPlaceholderProp]: true
};
/**
 * @type {string}
 */

const JSUtlProceedCallingFnProp = "JSUtlProceedCallingFnPropRBmGaAgOCgftF9t";
/**
 * Return value of "onFnCall" to call the curried function and return its value.
 *
 * @type {Object}
 */

const proceedCallingFn = {
  [JSUtlProceedCallingFnProp]: true
};
/**
 * Curries a function.
 *
 * @see https://medium.com/@kj_huang/implementation-of-lodash-curry-function-8b1024d71e3b
 *
 * @param {Function} fn A function to curry in order to return the curried version of the function.
 * @param {Object} [obj] An optional object with further properties to tweak the currying behaviour
 *                       and execute code while collecting the arguments of the curried function.
 * @param {number|undefined} [obj.arity] The arity of the function, i.e. its number of arguments.
 *                                       If omitted, "fn.length" will be used.
 * @param {Function|undefined} [obj.onEffectiveArgAdded] An optional callback to execute whenever a new effective argument
 *                                                       (not a placeholder) is added to the curried function.
 *                                                       The callback will receive an object with the following properties as argument:
 *
 *                                                           - addedArg: The effective argument added;
 *                                                           - args: An array with all the previously arguments collected so far
 *                                                                   without considering "addedArg";
 *                                                           - fn: The function "fn";
 *                                                           - curriedFn: The current curried function;
 *
 *                                                       The return value of the function is ignored.
 * @param {Function|undefined} [obj.onPlaceholder] An optional callback to execute whenever a new placeholder is added to the curried function.
 *                                                 The callback will receive an object with the following properties as argument:
 *
 *                                                     - args: An array with all the previously arguments collected so far
 *                                                             without considering "addedArg";
 *                                                     - fn: The function "fn";
 *                                                     - curriedFn: The current curried function;
 *
 *                                                 The return value of the function is ignored.
 * @param {Function|undefined} [obj.onFnCall] An optional callback to execute just before calling the "fn" function
 *                                            (i.e. when the "fn" function is ready to be called and all its arguments have been collected).
 *
 *                                            The callback will receive an object with the following properties as argument:
 *
 *                                                - args: The array of the effective arguments of the "fn" function;
 *                                                - fn: The function "fn" which was initially passed to "curry";
 *                                                - curriedFn: The current curried function;
 *
 *                                            This way, the code of the callback may decide what to do and may even call the function on its own
 *                                            and prevent the call from the caller side (i.e. within the "curry" function).
 *
 *                                            The callback must explicitly tell "curry" to call the function by returing "proceedCallingFn".
 *                                            If the callback returns any other value, then "fn" will not be called in "curry" and the return value
 *                                            of this callback will be returned.
 * @param {Function|undefined} [obj.onCurriedFnFirstCall] An optional callback to execute only the first time when the first curried function returned by "curry"
 *                                                        is invoked for the very first time with the very first argument or arguments.
 *
 *                                                        The callback will receive an object with the following properties as argument:
 *
 *                                                            - addedArgs: The arguments provided by the caller;
 *                                                            - fn: The "fn" function;
 *                                                            - curriedFn: The current curried function;
 *
 * @param {Function|undefined} [obj.onNewCurriedFn] An optional callback to execute initially and each time a new curried function is going to be returned.
 *
 *                                                  The callback will an object with the following properties as argument:
 *
 *                                                      - curriedFn: The current curried function (same as "newCurriedFn" when this callback is invoked
 *                                                                   for the very first time);
 *                                                      - newCurriedFn: The new curried function (will be the same as "curriedFn" when this callback is invoked
 *                                                                      for the very first time);
 *
 *
 * @return {Function} The curried version of the function.
 */

const curry = (fn, {
  arity = void 0,
  onEffectiveArgAdded = void 0,
  onPlaceholder = void 0,
  onFnCall = void 0,
  onCurriedFnFirstCall = void 0,
  onNewCurriedFn = void 0
} = {}) => {
  let curriedFnFirstCall = true;
  const expectedNumberOfArgs = typeof arity !== "undefined" ? arity : fn.length;
  const nextParameterIndex = 0;
  const placeholdersIndices = [];

  const curriedInner = (expectedNumberOfArgs, nextParameterIndex, placeholdersIndices, ...args) => function curriedFn(...addedArgs) {
    let newExpectedNumberOfArgs = expectedNumberOfArgs;
    let newNextParameterIndex = nextParameterIndex;
    let newPlaceholdersIndices = null;
    let argsRequiredChange = false;
    curriedFnFirstCall && (onCurriedFnFirstCall && onCurriedFnFirstCall({
      addedArgs,
      fn,
      curriedFn
    }) || true) && (curriedFnFirstCall = false);
    let numberOfConsumablePlaceholders = placeholdersIndices.length;

    for (const addedArg of addedArgs) {
      !argsRequiredChange && (args = [...args]);
      argsRequiredChange = true; // "addedArg" may be either a placeholder or an effective argument.

      const isPlaceholder = addedArg ? addedArg[JSUtlCurryPlaceholderProp] === _[JSUtlCurryPlaceholderProp] : false;

      if (numberOfConsumablePlaceholders > 0 && !isPlaceholder) {
        // Argument is an effective argument consuming a previously set placeholder.
        onEffectiveArgAdded && onEffectiveArgAdded({
          addedArg,
          args,
          fn,
          curriedFn
        });
        let argIndex;

        if (newPlaceholdersIndices === null) {
          const [firstIndex, ...rest] = placeholdersIndices;
          argIndex = firstIndex;
          newPlaceholdersIndices = rest;
        } else {
          argIndex = newPlaceholdersIndices.shift();
        }

        args[argIndex] = addedArg;
        numberOfConsumablePlaceholders--;
        newExpectedNumberOfArgs--;
      } else {
        if (isPlaceholder) {
          // Argument is a new placeholder.
          if (newPlaceholdersIndices === null) {
            newPlaceholdersIndices = placeholdersIndices.concat(newNextParameterIndex);
          } else {
            newPlaceholdersIndices.push(newNextParameterIndex);
          }

          onPlaceholder && onPlaceholder({
            args,
            fn,
            curriedFn
          });
        } else {
          // Argument is an effective argument.
          newExpectedNumberOfArgs--;
          onEffectiveArgAdded && onEffectiveArgAdded({
            addedArg,
            args,
            fn,
            curriedFn
          });
        }

        args[newNextParameterIndex] = addedArg;
        newNextParameterIndex++;
      }
    } // eslint-disable-next-line @typescript-eslint/no-use-before-define


    return curried.call(null, curriedFn, newExpectedNumberOfArgs, newNextParameterIndex, newPlaceholdersIndices === null ? [...placeholdersIndices] : newPlaceholdersIndices, ...args);
  };

  const curried = (curriedFn, expectedNumberOfArgs, nextParameterIndex, placeholdersIndices, ...args) => {
    if (expectedNumberOfArgs <= 0) {
      if (onFnCall) {
        const shouldCallCurriedFn = onFnCall({
          args,
          fn,
          curriedFn
        });

        if (shouldCallCurriedFn && shouldCallCurriedFn[JSUtlProceedCallingFnProp] === proceedCallingFn[JSUtlProceedCallingFnProp]) {
          return fn(...args);
        } else {
          return shouldCallCurriedFn;
        }
      } else {
        return fn(...args);
      }
    } else {
      const newCurried = curriedInner(expectedNumberOfArgs, nextParameterIndex, placeholdersIndices, ...args);
      onNewCurriedFn && onNewCurriedFn({
        curriedFn,
        newCurriedFn: newCurried
      });
      return newCurried;
    }
  };

  const newCurried = curriedInner(expectedNumberOfArgs, nextParameterIndex, placeholdersIndices);
  onNewCurriedFn && onNewCurriedFn({
    curriedFn: newCurried,
    newCurriedFn: newCurried
  });
  return newCurried;
};
/**
 * Curries a POJO function, i.e. a function having only a single POJO (Plain Old JavaScript Object)
 * as parameter (a function with named arguments).
 *
 * Each object passed to the returned curried function will be merged with the final object
 * to pass to the function "fn" when finally calling it.
 *
 * @param {Function} fn A function to curry in order to return the curried version of the function.
 * @param {Object} [obj] An optional object with further properties to tweak the currying behaviour
 *                       and execute code while collecting the POJO objects which will construct
 *                       the final POJO object to pass to the curried function after plugging the curried POJO function.
 * @param {string} [obj.plugPropertyName] The name of the property which instructs that it's time to call the function.
 * @param {boolean} [obj.plugPropertyMustBeTruthy] By default, it is enough that the property with "obj.plugPropertyName" name
 *                                                 is set on the object passed to the curried function to instruct it to call
 *                                                 "fn".
 *                                                 If this property is set to "true", the property with "plugPropertyName" name
 *                                                 will also have to be truthy.
 * @param {Function} [obj.onPOJOArgMerged] An optional callback to execute right after merging the next POJO argument with the so far accumulated POJO object.
 *                                         The callback will an object with the following properties as argument:
 *
 *                                             - POJOArg: The given POJO argument;
 *                                             - POJO: the so far merged POJO object merged with the given "POJOArg";
 *                                             - fn: The "fn" function;
 *                                             - curriedFn: The current curried function;
 *
 * @param {Function} [obj.onFnCall] An optional callback to execute just before calling the "fn" function
 *                                  (i.e. when the "fn" function is ready to be called and has been plugged and all
 *                                  of its POJO object argument properties have been collected).
 *
 *                                  The callback will receive an object with the following properties as argument:
 *
 *                                      - POJO: The callback will receive the function "fn" POJO argument (an object) as its first argument;
 *                                      - fn: The "fn" function;
 *                                      - curriedFn: The current curried function;
 *
 *                                  This way, the code of the callback may decide what to do and may even call the function on its own
 *                                  and prevent the call from the caller side (i.e. within the "POJOCurry" function).
 *
 *                                  The callback must explicitly tell "POJOCurry" to call the function by returing "proceedCallingFn"
 *                                  If the callback returns any other value, then "fn" will not be called in "POJOCurry" and the return value
 *                                  of this callback will be returned.
 * @param {Function|undefined} [obj.onCurriedFnFirstCall] An optional callback to execute only the first time when the first curried function returned by "curry"
 *                                                        is invoked for the very first time with the very first POJO argument.
 *
 *                                                        The callback will receive an object with the following properties as argument:
 *
 *                                                            - POJOArg: The given POJO argument yet to merge with the internal final POJO;
 *                                                            - fn: The "fn" function;
 *                                                            - curriedFn: The current curried function;
 *
 * @param {Function|undefined} [obj.onNewCurriedFn] An optional callback to execute initially and each time a new curried function is going to be returned.
 *
 *                                                  The callback will receive an object with the following properties as argument:
 *
 *                                                      - curriedFn: The current curried function (same as "newCurriedFn" when this callback is invoked
 *                                                                   for the very first time);
 *                                                      - newCurriedFn: The new curried function (will be the same as "curriedFn" when this callback is invoked
 *                                                                      for the very first time);
 *
 * @return {Function} The curried version of the function.
 */

const POJOCurry = (fn, {
  plugPropertyName = "plugCurried",
  plugPropertyMustBeTruthy = false,
  onPOJOArgMerged = void 0,
  onFnCall = void 0,
  onCurriedFnFirstCall = void 0,
  onNewCurriedFn = void 0
} = {}) => {
  const POJO = {};
  let curriedFnFirstCall = true;

  const curriedInner = accPOJO => function curriedFn(POJOArg) {
    curriedFnFirstCall && (onCurriedFnFirstCall && onCurriedFnFirstCall({
      POJOArg,
      fn,
      curriedFn
    }) || true) && (curriedFnFirstCall = false);
    let POJO = Object.assign({}, accPOJO, POJOArg || {});

    if (Object.prototype.hasOwnProperty.call(POJO, plugPropertyName) && (!plugPropertyMustBeTruthy || POJO[plugPropertyName])) {
      const {
        [plugPropertyName]: POJOArgIgnoredProperty
      } = POJOArg,
            rest = _objectWithoutProperties(POJOArg, [plugPropertyName].map(_toPropertyKey));

      const {
        [plugPropertyName]: POJOIgnoredProperty
      } = POJO,
            POJORest = _objectWithoutProperties(POJO, [plugPropertyName].map(_toPropertyKey));

      POJO = POJORest;

      if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isObjectEmpty"])(rest)) {
        onPOJOArgMerged && onPOJOArgMerged({
          POJOArg: rest,
          POJO,
          fn,
          curriedFn
        });
      }

      let shouldCallCurriedFn = true;
      let ret = void 0;

      if (onFnCall) {
        ret = onFnCall({
          POJO,
          fn,
          curriedFn
        });
        shouldCallCurriedFn = ret ? ret[JSUtlProceedCallingFnProp] === proceedCallingFn[JSUtlProceedCallingFnProp] : false;
      }

      if (shouldCallCurriedFn) {
        return fn(POJO);
      } else {
        return ret;
      }
    } else {
      onPOJOArgMerged && onPOJOArgMerged({
        POJOArg,
        POJO,
        fn,
        curriedFn
      });
      const newCurried = curriedInner(POJO);
      onNewCurriedFn && onNewCurriedFn({
        curriedFn,
        newCurriedFn: newCurried
      });
      return newCurried;
    }
  };

  const newCurried = curriedInner(POJO);
  onNewCurriedFn && onNewCurriedFn({
    curriedFn: newCurried,
    newCurriedFn: newCurried
  });
  return newCurried;
};
/**
 * A utility function which composes functions or higher order functions.
 *
 * @param {...Function|...Function[]} fns A list of functions or higher order functions or arrays of functions
 *                                        (arrays will be flattened) to compose.
 * @return {Function|undefined} A function composed of all the functions or higher order functions
 *                              used for composition.
 *                              If no functions are given, "undefined" will be returned.
 */

const compose = (...fns) => (...args) => {
  let outerArgs = args;
  let hoFn = void 0;
  fns = fns.flat(1);

  for (let i = fns.length - 1; i >= 0; i--) {
    const fn = fns[i];
    hoFn = fn(...outerArgs);
    outerArgs = [hoFn];
  }

  return hoFn;
};
/**
 * A utility function which pipes functions.
 *
 * @param {...Function|...Function[]} fns A list of functions or arrays of functions (arrays will be flattened)
 *                                        to pipe.
 * @return {Function} A function representing the pipe.
 *                    If not functions are given, "undefined" will be returned.
 */

const pipe = (...functions) => (...args) => {
  functions = functions.flat(1);
  return functions.length ? functions.reduce((arg, fn) => [fn(...arg)], args)[0] : void 0;
};
/**
 * Returns a function which lets picking the properties of an object.
 *
 * @param {...string|...number} props The properties to pick.
 * @return {Function} A function which if called picks the "props" properties from its argument object
 *                    and returns a new object with the picked properties.
 */

const pick = (...props) => o => props.reduce((a, e) => _objectSpread(_objectSpread({}, a), {}, {
  [e]: o[e]
}), {});
/**
 * Lifts two functions using a binary function which takes their results as arguments.
 *
 * @param {Function} binaryFn A binary function (i.e. a function which takes two arguments).
 * @return {Function} A higher order function which has to be called with the first function as argument ("firstFn")
 *                    and returns another higher order function which has to be called with the second function as argument ("secondFn").
 *                    Then, the returned function will take the parameters to pass to the two functions ("firstFn" and "secondFn")
 *                    and return the result of calling "binaryFn" with the result of those functions given as parameters.
 */

const liftBinaryFn = binaryFn => firstFn => secondFn => (...params) => binaryFn(firstFn(...params), secondFn(...params));
/**
 * Applies an array of functions to a list of values.
 *
 * @param {Function[]} fns An array of functions.
 * @return {Function} A function which if called with a list of values, will pass the list to each function of "fns"
 *                    and return an array with the values after applying each of the original "fns" to its parameters.
 */

const juxt = fns => (...values) => fns.map(fn => fn(...values));
/**
 * Converges a multi-arg function.
 *
 * @param {Function} multiArgFn A multi-arg function.
 * @param {Function[]} fns An array of functions to converge.
 *                         Each function will receive the parameter passed to the function returned
 *                         by this higher order function (i.e. "params").
 * @return {Function} A function which, if called, will pass its arguments to each of the functions in "fns"
 *                    and pass each result of those functions to the multi-arg function "multiArgFn",
 *                    returning its result.
 */

const converge = (multiArgFn, fns) => (...params) => multiArgFn(...fns.map(fn => fn(...params)));
/**
 * Executes a callback if a POJO object has a property.
 *
 * @param {Object} POJO A POJO object.
 * @return {(prop: string|number) => (fn: Function) => *} A function which receives the property
 *                                                        and returns and returns a function receiving the callback
 *                                                        function ("fn") to execute.
 */

const execIfPOJOHas = POJO => prop => fn => Object.prototype.hasOwnProperty.call(POJO, prop) && fn(POJO[prop], POJO);
/**
 * Executes a callback with the existent properties of an object.
 *
 * @param {...string|...number} props The properties to check for existence.
 * @return {(o: Object) => (fn: (existentProps: string[]|number[]) => *) => *} A function which receives the POJO object for which to check for the given properties
 *                                                                             and returns a function receiving a callback which will receive the existent properties
 *                                                                             of the object as parameter.
 */

const execWithExistentProps = (...props) => o => fn => fn(props.filter(prop => Object.prototype.hasOwnProperty.call(o, prop)));
/**
 * Loops through the values of a generator and returns an array with its mapped
 * values mapped with the given callback.
 *
 * @param {GeneratorFunction} gen A generator function.
 * @return {(args: ...*) => (fn: (val: *) => *) => Array} A function which takes the arguments for the generator and returns
 *                                                        another function which takes the callback to use to map each
 *                                                        value of the generator returning an array with all the mapped values of the generator.
 */

const forGen = gen => (...args) => fn => {
  const generator = gen(...args);
  const arr = [];

  for (const value of generator) {
    const res = fn(value);
    arr.push(res);
  }

  return arr;
};
/**
 * Flattens an array (its first dimension, at most).
 *
 * @param {Array} arr An array.
 * @return {Array} A new flattened array.
 */

const flatten = arr => Array.prototype.concat.apply([], arr);
/**
 * Flattens an array with any dimension.
 *
 * @param {Array} arr An array.
 * @param {number} dimension The flattening dimension (defaults to 1, but can be greater, even "Infinity").
 * @return {Array} The flattened array.
 */

const flattenDeep = (arr, dimension = 1) => {
  return dimension > 0 ? arr.reduce((acc, val) => acc.concat(Object(_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(val) ? flattenDeep(val, dimension - 1) : val), []) : Object(_array__WEBPACK_IMPORTED_MODULE_1__["arrayOrArrayLike"])(arr);
};
/**
 * Computes the cartesian product of the given sets.
 *
 * @param  {...Array} sets The sets to use to compute the cartesian product.
 * @return {Array} The cartesian product of the given sets.
 */

const cartesianProduct = (...sets) => sets.reduce((acc, set) => flatten(acc.map(x => set.map(y => [...x, y]))), [[]]);
/**
 * Identity function.
 *
 * @see https://en.wikipedia.org/wiki/Identity_function
 *
 * @param {*} value Any value.
 * @return {*} The same passed value.
 */

const identityFn = value => value;
/**
 * Identity function for multiple args returning an array of those args.
 *
 * @param  {...*} args The args.
 * @return {Array} The same args returned in an array.
 */

const identityArgsFn = (...args) => args;
//# sourceMappingURL=fn.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/google.js":
/*!********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/google.js ***!
  \********************************************************/
/*! exports provided: googleMapBestZoomLevelFromBounds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "googleMapBestZoomLevelFromBounds", function() { return googleMapBestZoomLevelFromBounds; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions related to Google.
 */

/**
 * Determines the best zoom level for a Google map.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds.
 * @param {Object} mapDim JS POJO with the properties height and width.
 * @param {number} mapDim.height The height of the map's div.
 * @param {number} mapDim.width The width of the map's div.
 * @return {number} The best zoom level.
 */
function googleMapBestZoomLevelFromBounds(bounds, mapDim) {
  const WORLD_DIM = {
    height: 256,
    width: 256
  };
  const ZOOM_MAX = 21;

  function latRad(lat) {
    const sin = Math.sin(lat * Math.PI / 180);
    const radX2 = Math.log((1 + sin) / (1 - sin)) / 2;
    return Math.max(Math.min(radX2, Math.PI), -Math.PI) / 2;
  }

  function zoom(mapPx, worldPx, fraction) {
    return Math.floor(Math.log(mapPx / worldPx / fraction) / Math.LN2);
  }

  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();
  const latFraction = (latRad(ne.lat()) - latRad(sw.lat())) / Math.PI;
  const lngDiff = ne.lng() - sw.lng();
  const lngFraction = (lngDiff < 0 ? lngDiff + 360 : lngDiff) / 360;
  const latZoom = zoom(mapDim.height, WORLD_DIM.height, latFraction);
  const lngZoom = zoom(mapDim.width, WORLD_DIM.width, lngFraction);
  return Math.min(latZoom, lngZoom, ZOOM_MAX);
}
//# sourceMappingURL=google.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/hash.js":
/*!******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/hash.js ***!
  \******************************************************/
/*! exports provided: stringHashArray, hashString, onePassStringHash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringHashArray", function() { return stringHashArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hashString", function() { return hashString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onePassStringHash", function() { return onePassStringHash; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Hashing-related utility functions.
 */

/**
 * Computes a hash of an array of strings (the order of strings does not matter).
 *
 * NOTE: An array with duplicate values given as parameter to this function
 *       may yield to a hash which would collide with other hashes computed
 *       on different arrays with this same function.
 *       Therefore is on behalf of the caller to be sure that "array" contains
 *       unique strings.
 *
 * @param {string[]} array An array of strings.
 * @return {number} A number representing the hash code of the array.
 */
function stringHashArray(array) {
  let code = 0;

  for (let i = 0; i < array.length; i++) {
    let n = 0;

    for (let j = 0; j < array[i].length; j++) {
      n = n * 251 ^ array[i].charCodeAt(j);
    }

    code ^= n;
  }

  return code;
}
/**
 * Returns the hash of a string.
 *
 * @see https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript#answer-7616484
 *
 * @param {string} str The string.
 * @return {number} The hash code of the string, represented as a number.
 */

const hashString = str => {
  let hash = 0,
      i,
      chr;

  if (str.length === 0) {
    return hash;
  }

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32 bit integer.
  }

  return hash;
};
/**
 * A one-pass algorithm to compute the hash of a series of unique strings incrementally.
 *
 * NOTE: Duplicate values given as parameter to this function
 *       may yield to a hash which would collide with other hashes computed
 *       on different string series with this same function.
 *       Therefore is on behalf of the caller to be sure that the series of strings will be unique
 *       while calling this function incrementally.
 *
 * @param {string} str The string.
 * @param {number} [hash] The previous hash computed with this same function if this call is the continuation
 *                        of the unique string series.
 * @return {number} The next hash.
 */

function onePassStringHash(str, hash = 0) {
  let nextHash = hash;
  let n = 0;

  for (let j = 0; j < str.length; j++) {
    n = n * 251 ^ str.charCodeAt(j);
  }

  nextHash ^= n;
  return nextHash;
}
//# sourceMappingURL=hash.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/iterator.js":
/*!**********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/iterator.js ***!
  \**********************************************************/
/*! exports provided: xrange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xrange", function() { return xrange; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions related to iterators, generators and iterations.
 */

/**
 * Yields all the numbers of the specified range
 * (including "start" and "limit" if they fall in the range while stepping
 * with "step").
 *
 * @generator
 * @param {number} start An int specifying the start of the range.
 * @param {number} limit An int specifying the limit of the range.
 * @param {number} step An int specifying the step to take within each value of the range.
 * @yield {number} The next number of the range.
 */
function* xrange(start, limit, step = 1) {
  if (start < limit) {
    if (step <= 0) {
      throw new RangeError("Step must be a positive int greater than 0.");
    }

    for (let i = start; i <= limit; i += step) {
      yield i;
    }
  } else {
    if (step >= 0) {
      throw new RangeError("Step must be a negative int greater than 0.");
    }

    for (let i = start; i >= limit; i += step) {
      yield i;
    }
  }
}
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/map-coordinates.js":
/*!*****************************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/map-coordinates.js ***!
  \*****************************************************************/
/*! exports provided: clampLat, wrapLng, normalizeLat, normalizeLng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clampLat", function() { return clampLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapLng", function() { return wrapLng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLat", function() { return normalizeLat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeLng", function() { return normalizeLng; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions related to the coordinates of a map.
 */

/**
 * Clamps a latitude value so that it is always between -90 and 90.
 *
 * Latitude ranges between -90 and 90 degrees, inclusive.
 * Values above or below this range will be clamped to the range [-90, 90].
 * This means that if the value specified is less than -90, it will be set to -90.
 * And if the value is greater than 90, it will be set to 90.
 *
 * @param {number|string} lat Latitude. Either a number or a string which can be casted to a number.
 * @return {number} Latitude, clamped.
 */
const clampLat = lat => Number(lat < -90 ? -90 : lat > 90 ? 90 : lat);
/**
 * Wraps a longitude value so that it is always between -180 and 180.
 *
 * Longitude ranges between -180 and 180 degrees, inclusive.
 * Values above or below this range will be wrapped so that they fall within the range.
 * For example, a value of -190 will be converted to 170.
 * A value of 190 will be converted to -170.
 * This reflects the fact that longitudes wrap around the globe.
 *
 * @param {number|string} lng Longitude. Either a number or a string which can be casted to a number.
 * @return {number} lng Longitude, wrapped.
 */

const wrapLng = lng => {
  lng = Number(lng);

  while (lng > 180) {
    lng -= 360;
  }

  while (lng < -180) {
    lng += 360;
  }

  return lng;
};
/**
 * Normalizes a latitude so that it is within the range [0, 180].
 *
 * 1. normalizeLat(90) === 0;
 * 2. normalizeLat(0) === 90;
 * 3. normalizeLat(-90) === 180;
 *
 * @param {number|string} lat Latitude. Either a number or a string which can be casted to a number.
 * @return {number} Latitude, normalized.
 */

const normalizeLat = lat => {
  lat = clampLat(lat);

  if (lat >= 0) {
    // 1. + 2.
    return 90 - lat;
  } else {
    // 3.
    return 90 + Math.abs(lat);
  }
};
/**
 * Normalizes a longitude so that it is within the range [0, 360].
 *
 * 1. normalizeLng(-180) === 0;
 * 2. normalizeLng(0) === 180;
 * 3. normalizeLng(180) === 360;
 *
 * @param {number} lng Longitude. Either a number or a string which can be casted to a number.
 * @return {number} Longitude, normalized.
 */

const normalizeLng = lng => {
  lng = wrapLng(lng);
  return lng + 180;
};
//# sourceMappingURL=map-coordinates.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/math.js":
/*!******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/math.js ***!
  \******************************************************/
/*! exports provided: round, sum, intDiv, isEven, isOdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "round", function() { return round; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return sum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intDiv", function() { return intDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEven", function() { return isEven; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOdd", function() { return isOdd; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Mathematical utility functions.
 */

/**
 * Rounds a number.
 *
 * @param {number} number The number to round.
 * @param {number} precision The decimal precision.
 * @return {number} The rounded number.
 */
function round(number, precision = 0) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}
/**
 * Sums two or more numbers.
 *
 * @param {...number} numbers The numbers to sum.
 * @return {number} The sum.
 */

function sum(...numbers) {
  return numbers.reduce((carry, num) => carry + num);
}
/**
 * Integer division (without decimal part).
 *
 * @param {number} num A number.
 * @param {number} divideBy The number by which to divide "num".
 * @return {number} The result of the integer division.
 */

function intDiv(num, divideBy) {
  return Math.floor(num / divideBy);
}
/**
 * Tests if a number is even.
 *
 * @param {number} num A number.
 * @return {boolean} True if even, false if odd.
 */

function isEven(num) {
  return num % 2 === 0;
}
/**
 * Tests if a number is odd.
 *
 * @param {number} num A number.
 * @return {boolean} True if odd, false if even.
 */

function isOdd(num) {
  return !isEven(num);
}
//# sourceMappingURL=math.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/path.js":
/*!******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/path.js ***!
  \******************************************************/
/*! exports provided: basename, pathinfo, filenameExtension, dirname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basename", function() { return basename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pathinfo", function() { return pathinfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filenameExtension", function() { return filenameExtension; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dirname", function() { return dirname; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions for filenames and paths.
 */

/**
 * Returns the basename of a path.
 *
 * @param {string} path A path.
 * @return {string} The basename of the given path.
 */
function basename(path) {
  return path.split(/[\\/]/).pop();
}
/**
 * Returns info about a path.
 *
 * @param {string} path The path.
 * @param {number} [options] Optioanl options flag.
 */

function pathinfo(path, options) {
  //  discuss at: http://locutus.io/php/pathinfo/
  // original by: Nate
  //  revised by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Brett Zamir (http://brett-zamir.me)
  // improved by: Dmitry Gorelenkov
  //    input by: Timo
  //      note 1: Inspired by actual PHP source: php5-5.2.6/ext/standard/string.c line #1559
  //      note 1: The way the bitwise arguments are handled allows for greater flexibility
  //      note 1: & compatability. We might even standardize this
  //      note 1: code and use a similar approach for
  //      note 1: other bitwise PHP functions
  //      note 1: Locutus tries very hard to stay away from a core.js
  //      note 1: file with global dependencies, because we like
  //      note 1: that you can just take a couple of functions and be on your way.
  //      note 1: But by way we implemented this function,
  //      note 1: if you want you can still declare the PATHINFO_*
  //      note 1: yourself, and then you can use:
  //      note 1: pathinfo('/www/index.html', PATHINFO_BASENAME | PATHINFO_EXTENSION);
  //      note 1: which makes it fully compliant with PHP syntax.
  //   example 1: pathinfo('/www/htdocs/index.html', 1)
  //   returns 1: '/www/htdocs'
  //   example 2: pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME')
  //   returns 2: 'index.html'
  //   example 3: pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION')
  //   returns 3: 'html'
  //   example 4: pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME')
  //   returns 4: 'index'
  //   example 5: pathinfo('/www/htdocs/index.html', 2 | 4)
  //   returns 5: {basename: 'index.html', extension: 'html'}
  //   example 6: pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL')
  //   returns 6: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
  //   example 7: pathinfo('/www/htdocs/index.html')
  //   returns 7: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
  let opt = "";
  let realOpt = "";
  let optName = "";
  let optTemp = 0;
  const tmpArr = {};
  let cnt = 0;
  let i = 0;
  let haveBasename = false;
  let haveExtension = false;
  let haveFilename = false; // Input defaulting & sanitation

  if (!path) {
    return false;
  }

  if (!options) {
    options = "PATHINFO_ALL";
  } // Initialize binary arguments. Both the string & integer (constant) input is
  // allowed


  const OPTS = {
    PATHINFO_DIRNAME: 1,
    PATHINFO_BASENAME: 2,
    PATHINFO_EXTENSION: 4,
    PATHINFO_FILENAME: 8,
    PATHINFO_ALL: 0
  }; // PATHINFO_ALL sums up all previously defined PATHINFOs (could just pre-calculate)

  for (optName in OPTS) {
    if (Object.prototype.hasOwnProperty.call(OPTS, optName)) {
      OPTS.PATHINFO_ALL = OPTS.PATHINFO_ALL | OPTS[optName];
    }
  }

  if (typeof options !== "number") {
    // Allow for a single string or an array of string flags
    options = [].concat(options);

    for (i = 0; i < options.length; i++) {
      // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
      if (OPTS[options[i]]) {
        optTemp = optTemp | OPTS[options[i]];
      }
    }

    options = optTemp;
  } // Internal Functions


  const _getExt = function (path) {
    const str = path + "";
    const dotP = str.lastIndexOf(".") + 1;
    return !dotP ? false : dotP !== str.length ? str.substr(dotP) : "";
  }; // Gather path infos


  if (options & OPTS.PATHINFO_DIRNAME) {
    const dirName = path.replace(/\\/g, "/").replace(/\/[^/]*\/?$/, ""); // dirname

    tmpArr.dirname = dirName === path ? "." : dirName;
  }

  if (options & OPTS.PATHINFO_BASENAME) {
    if (haveBasename === false) {
      haveBasename = basename(path);
    }

    tmpArr.basename = haveBasename;
  }

  if (options & OPTS.PATHINFO_EXTENSION) {
    if (haveBasename === false) {
      haveBasename = basename(path);
    }

    if (haveExtension === false) {
      haveExtension = _getExt(haveBasename);
    }

    if (haveExtension !== false) {
      tmpArr.extension = haveExtension;
    }
  }

  if (options & OPTS.PATHINFO_FILENAME) {
    if (haveBasename === false) {
      haveBasename = basename(path);
    }

    if (haveExtension === false) {
      haveExtension = _getExt(haveBasename);
    }

    if (haveFilename === false) {
      haveFilename = haveBasename.slice(0, haveBasename.length - (haveExtension ? haveExtension.length + 1 : haveExtension === false ? 0 : 1));
    }

    tmpArr.filename = haveFilename;
  } // If array contains only 1 element: return string


  cnt = 0;

  for (opt in tmpArr) {
    if (Object.prototype.hasOwnProperty.call(tmpArr, opt)) {
      cnt++;
      realOpt = opt;
    }
  }

  if (cnt === 1) {
    return tmpArr[realOpt];
  } // Return full-blown array


  return tmpArr;
}
/**
 * Returns the extension of a filename.
 *
 * @param {string} filename The filename.
 * @return {string} The extension of the given filename.
 */

function filenameExtension(filename) {
  const extension = pathinfo(filename, "PATHINFO_EXTENSION");

  if (typeof extension !== "string") {
    return "";
  }

  return extension;
}
/**
 * Returns the dirname of a path.
 *
 * @param {string} path A path.
 * @return {string} The dirname of the given path.
 */

function dirname(path) {
  //  discuss at: http://locutus.io/php/dirname/
  // original by: Ozh
  // improved by: XoraX (http://www.xorax.info)
  //   example 1: dirname('/etc/passwd')
  //   returns 1: '/etc'
  //   example 2: dirname('c:/Temp/x')
  //   returns 2: 'c:/Temp'
  //   example 3: dirname('/dir/test/')
  //   returns 3: '/dir'
  return path.replace(/\\/g, "/").replace(/\/[^/]*\/?$/, "");
}
//# sourceMappingURL=path.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/promise.js":
/*!*********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/promise.js ***!
  \*********************************************************/
/*! exports provided: timeout, minDelayPromise, maxDelayFallbackPromise, applyAsync, composeAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeout", function() { return timeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minDelayPromise", function() { return minDelayPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxDelayFallbackPromise", function() { return maxDelayFallbackPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAsync", function() { return applyAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composeAsync", function() { return composeAsync; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Promise-related utility functions.
 */

/**
 * Creates a new timeout promise which will resolve after the given milliseconds timeout.
 *
 * @param {number} delayMs Delay in milliseconds after which the promise will resolve.
 * @param {*} [value] Optional value to resolve with.
 * @return {Promise} A new promise which resolves right after "delayMs" have elapsed.
 */

function timeout(delayMs, value) {
  return new Promise(resolve => setTimeout(resolve, delayMs, value));
}
/**
 * Creates a new promise with a minimum delay before it is fulfilled.
 *
 * @param {Promise} promise A promise.
 * @param {number} minDelay Minumum delay in milliseconds.
 * @return {Promise} A new promise which resolves with the given value of the given promise
 *                   or rejects with the rejected value of the promise if it rejects.
 */

function minDelayPromise(promise, minDelay) {
  return Promise.all([promise, timeout(minDelay)]).then(([value]) => {
    return value;
  }).catch(e => {
    throw e;
  });
}
/**
 * Resolves a promise with an optional fallback which fires if the promise does not resolve
 * under a certain time constraint.
 *
 * @param {Object} obj An object.
 * @param {Promise} obj.promise A promise.
 * @param {number} obj.maxDelayMs Max delay in milliseconds to wait before executing "onFallback" code if the time elapses.
 * @param {Function} obj.onFallback Function to execute if the given "promise" takes more than "maxDelayMs" to resolve.
 * @param {number} obj.fallbackMinDelayMs Number of milliseconds to wait if the fallback code gets executed before resolving the promise.
 * @return {Promise} A promise which resolves with the value of "promise" or rejects with the error of the given "promise".
 */

function maxDelayFallbackPromise({
  promise,
  maxDelayMs,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onFallback = () => {},
  fallbackMinDelayMs
} = {}) {
  const uniqueIdentifier = Object(_core__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])();
  return Promise.race([promise, timeout(maxDelayMs).then(() => uniqueIdentifier)]).then(value => {
    if (value === uniqueIdentifier) {
      onFallback();
      return minDelayPromise(promise, fallbackMinDelayMs);
    } else {
      return value;
    }
  });
}
/**
 * Applies an async operation to a promise returning a new one.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Composition
 *
 * @param {Promise} acc A promise.
 * @param {Function} onfulfilled Fulfilled callback.
 * @param {Function} onrejected Rejected callback.
 * @return {Promise} A new promise.
 */

const applyAsync = (acc, onfulfilled, onrejected) => {
  return typeof onrejected !== "undefined" ? acc.then(onfulfilled, onrejected) : acc.then(onfulfilled);
};
/**
 * Composes functions which are run subsequently
 * (sequential composition) using promises.
 *
 * This function is useful when a chain of operations is known ahead of time
 * and they must be executed subsequently.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Composition
 *
 * @param {...(Function|Array)} funcs The functions (fulfilled callbacks). An array can be given and it MUST have
 *                                    the fulfilled callback at index 0 and the reject callback at index 1.
 * @return {Function} A new function that accepts an initial value to be passed through the composition pipeline.
 *                    If the returned function is called, it will return a Promise which represents the chain formed
 *                    by the promises composed subsequently.
 */

const composeAsync = (...funcs) => x => {
  return funcs.reduce((acc, func) => {
    let promise;

    if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(func)) {
      // Item at index 0 is the fulfilled callback,
      // while the item at index 1 is the reject callback.
      promise = applyAsync(acc, func[0], func[1]);
    } else {
      promise = applyAsync(acc, func);
    }

    return promise;
  }, Promise.resolve(x));
};
//# sourceMappingURL=promise.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/rand.js":
/*!******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/rand.js ***!
  \******************************************************/
/*! exports provided: randomStr, randomInt, randomDifferentFromValue, uuid, noncanonicalUUID, randomArrayShuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomStr", function() { return randomStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomInt", function() { return randomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDifferentFromValue", function() { return randomDifferentFromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uuid", function() { return uuid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noncanonicalUUID", function() { return noncanonicalUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomArrayShuffle", function() { return randomArrayShuffle; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions providing random functionality.
 */

/**
 * Generates a random string.
 *
 * @param {number} length The length of the string to return.
 * @return {string} The random string.
 */
function randomStr(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}
/**
 * Generates a random int between min and max (both included).
 *
 * @param {number} min Min int value.
 * @param {number} max Max int value.
 * @return {number} A random int between min and max.
 */

function randomInt(min = 0, max = Number.MAX_SAFE_INTEGER) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * Returns a random float (using "Math.random()") not equal to the given value.
 *
 * @param {number} value The given value.
 * @return {number} A random float not equal to value.
 */

function randomDifferentFromValue(value) {
  let ret = Math.random();

  while (value == ret) {
    ret = Math.random();
  }

  return ret;
}
/**
 * @type {Array}
 */

let noncanonicalUUIDCounter = 1;
/**
 * Generates a new UUID.
 *
 * @see https://github.com/tastejs/todomvc/blob/gh-pages/examples/react/js/utils.js
 *
 * @return {string} The UUID.
 */

function uuid() {
  let i, random;
  let uuid = "";

  for (i = 0; i < 32; i++) {
    random = Math.random() * 16 | 0;

    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += "-";
    }

    uuid += (i === 12 ? 4 : i === 16 ? random & 3 | 8 : random).toString(16);
  }

  return uuid;
}
/**
 * Generates a new noncanonical UUID. This noncanonical UUID has a further
 * int prefixed by "-" which is concatenated to a canonical UUID at the end
 * of the canonical UUID before returning this noncanonical UUID.
 * The int starts with 1 and increments every time this function is called.
 *
 * @return {string} A noncanonical UUID.
 */

function noncanonicalUUID() {
  const UUID = uuid();
  return UUID + "-" + noncanonicalUUIDCounter++;
}
/**
 * Shuffles an array randomly modifing the given array.
 *
 * @param {Array} array The input array.
 * @return {Array} A reference to the same array given as input,
 *                 but with its elements randomly shuffled.
 */

const shuffleArrayRandomly = array => {
  let i = array.length,
      temporaryValue,
      randomIndex;

  while (0 !== i) {
    randomIndex = Math.floor(Math.random() * i);
    i--;
    temporaryValue = array[i];
    array[i] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
/**
 * Returns an array with the elements of the given array randomly shuffled.
 *
 * @param {Array} array An array.
 * @return {Array} A new array with the same elements of the input array, but randomly shuffled.
 */


function randomArrayShuffle(array) {
  return shuffleArrayRandomly(Object.keys(array)).map(i => array[i]);
}
//# sourceMappingURL=rand.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/stats.js":
/*!*******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/stats.js ***!
  \*******************************************************/
/*! exports provided: mean, median, minAbsDeviationFromValue, minAbsDeviationFromExcludedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return mean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return median; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minAbsDeviationFromValue", function() { return minAbsDeviationFromValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minAbsDeviationFromExcludedValue", function() { return minAbsDeviationFromExcludedValue; });
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ "./node_modules/js-utl/dist/es6/modules/math.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array */ "./node_modules/js-utl/dist/es6/modules/array.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Statistics-related utility functions.
 */


/**
 * Computes the mean of the given numbers.
 *
 * @param {...number} numbers The numbers.
 * @return {number} The mean.
 */

function mean(...numbers) {
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["sum"])(...numbers) / numbers.length;
}
/**
 * Computes the median of the given numbers.
 *
 * @param {...number} numbers The numbers.
 * @return {number} The median value.
 */

function median(...numbers) {
  const sorted = Object(_array__WEBPACK_IMPORTED_MODULE_1__["sortNums"])(numbers);
  const middleIndex = Object(_math__WEBPACK_IMPORTED_MODULE_0__["intDiv"])(sorted.length, 2);
  return Object(_math__WEBPACK_IMPORTED_MODULE_0__["isOdd"])(sorted.length) ? sorted[middleIndex] : mean(sorted[middleIndex - 1], sorted[middleIndex]);
}
/**
 * Computes the min deviation from a value.
 *
 * @param {number} value A value.
 * @return {(...numbers: number[]) => number} A function receiving the numbers to use to compute the minimum deviation
 *                                            from "value".
 */

const minAbsDeviationFromValue = value => (...numbers) => {
  let minAbsDeviation = Infinity;
  numbers.map(num => {
    const deviation = Math.abs(num - value);

    if (deviation < minAbsDeviation) {
      minAbsDeviation = deviation;
    }
  });
  return minAbsDeviation;
};
/**
 * Computes the min deviation from a value excluding that value from the numbers received.
 *
 * @param {number} value A value.
 * @return {(...numbers: number[]) => number} A function receiving the numbers to use to compute the minimum deviation
 *                                            from "value" exluding "value".
 */

const minAbsDeviationFromExcludedValue = value => (...numbers) => minAbsDeviationFromValue(value)(...numbers.filter(num => num !== value));
//# sourceMappingURL=stats.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/string.js":
/*!********************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/string.js ***!
  \********************************************************/
/*! exports provided: escapeRegExp, trimCharacterMask, trimCharacterRegex, trim, trimLeft, trimRight, concatWithInnerOuterSeparators, optionsValueLabel, startsWith, ucaseFirst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeRegExp", function() { return escapeRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimCharacterMask", function() { return trimCharacterMask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimCharacterRegex", function() { return trimCharacterRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trim", function() { return trim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimLeft", function() { return trimLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimRight", function() { return trimRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatWithInnerOuterSeparators", function() { return concatWithInnerOuterSeparators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsValueLabel", function() { return optionsValueLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ucaseFirst", function() { return ucaseFirst; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Utility functions for working with strings.
 */

/**
 * Escapes special characters for a JS regex.
 *
 * @see https://stackoverflow.com/questions/3115150/how-to-escape-regular-expression-special-characters-using-javascript#answer-9310752
 *
 * @param {string} text The string to escape.
 * @return {string} The same string with special regex characters escaped.
 */

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}
/**
 * Trim characters from the beginning and end of a string.
 *
 * @param {string} str The string.
 * @param {string} characterMask Character mask.
 * @param {Object} options Options.
 * @param {Object.boolean} options.shouldTrimLeft "true" to trim left (defaults to "true" if omitted).
 * @param {Object.boolean} options.shouldTrimRight "true" to trim right (defaults to "true" if omitted).
 * @return {string} The trimmed string.
 */

function trimCharacterMask(str, characterMask, options = {}) {
  if (typeof characterMask === "undefined") {
    characterMask = " ";
  }

  const escapedCharacterMask = escapeRegExp(characterMask);
  const shouldTrimLeft = typeof options.shouldTrimLeft === "undefined" || options.shouldTrimLeft;
  const shouldTrimRight = typeof options.shouldTrimRight === "undefined" || options.shouldTrimRight;
  const regexParts = [];

  if (shouldTrimLeft) {
    regexParts[regexParts.length] = "^[" + escapedCharacterMask + "]+";
  }

  if (shouldTrimRight) {
    regexParts[regexParts.length] = "[" + escapedCharacterMask + "]+$";
  }

  const regex = new RegExp(regexParts.join("|"), "gm");
  return str.replace(regex, "");
}
/**
 * Trim characters from the beginning and end of a string using an array
 * of regex characters.
 *
 * @param {string} str The string.
 * @param {string} regexCharacters Regex characters.
 * @param {string} additionalModifiers Additional regex modifiers.
 * @return {string} The trimmed string.
 */

function trimCharacterRegex(str, regexCharacters, additionalModifiers) {
  if (typeof regexCharacters === "undefined") {
    regexCharacters = ["\\s"];
  }

  additionalModifiers = additionalModifiers || "";
  const regex = new RegExp("(^(" + regexCharacters.join("|") + ")+)|((" + regexCharacters.join("|") + ")+$)", "g" + additionalModifiers);
  return str.replace(regex, "");
}
/**
 * Alias of "trimCharacterMask".
 * Trim characters from the beginning and end of a string.
 *
 * @param {string} str The string.
 * @param {string} characterMask Character mask.
 * @return {string} The trimmed string.
 */

function trim(str, characterMask) {
  return trimCharacterMask(str, characterMask);
}
/**
 * Trim characters from the beginning of a string.
 *
 * @param {string} str The string.
 * @param {string} characterMask Character mask.
 * @return {string} The left-trimmed string.
 */

function trimLeft(str, characterMask) {
  return trimCharacterMask(str, characterMask, {
    shouldTrimLeft: true,
    shouldTrimRight: false
  });
}
/**
 * Trim characters from the end of a string.
 *
 * @param {string} str The string.
 * @param {string} characterMask Character mask.
 * @return {string} The right-trimmed string.
 */

function trimRight(str, characterMask) {
  return trimCharacterMask(str, characterMask, {
    shouldTrimLeft: false,
    shouldTrimRight: true
  });
}
/**
 * Concats the values of an array with an outer separator using an inner separator
 * for first nesting level arrays.
 *
 * E.g.:
 *
 *     concatWithInnerOuterSeparators(["a", "value", ["with", "nested", "value"], "etc"], " # ", " $ ")
 *     // Returns:
 *     "a # value # with $ nested $ value # etc"
 *
 * @param {Array<string>|Array<Array<string>>} arrayToConcat An array of strings or arrays or strings.
 * @param {string} outerSeparator Outer separator.
 * @param {string} innerSeparator Inner separator.
 * @return {string} The concatenated string.
 */

function concatWithInnerOuterSeparators(arrayToConcat, outerSeparator, innerSeparator) {
  const toConcatFinally = [];

  for (const value of arrayToConcat) {
    if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(value)) {
      toConcatFinally[toConcatFinally.length] = trim(value.join(innerSeparator), innerSeparator);
    } else {
      toConcatFinally[toConcatFinally.length] = value;
    }
  }

  const ret = trim(toConcatFinally.join(outerSeparator), outerSeparator);
  return ret;
}
/**
 * Returns an array of options with a value and a label string.
 *
 * @param {Object} obj An object with parameters.
 * @param {Object[]} obj.arrayOfObjects An array of objects.
 * @param {string[]|Array.<string|string[]>} obj.concatObjectProps Properties, keys of each object to use for the label
 *                                                                 and to concat with "outerSeparator".
 *                                                                 A nested array of properties can be used to specify an inner
 *                                                                 part of the label to concat using the "innerSeparator".
 * @param {string} obj.valueProp Name of the property which value has to be used for the value property
 *                               of the returned array of objects.
 * @param {string} obj.outerSeparator Outer separator.
 * @param {string} obj.innerSeparator Inner separator.
 * @return {Object[]} Array of objects, each object with two properties:
 *
 *                        - "value": The value of the object;
 *                        - "label": The label of the object.
 *
 */

function optionsValueLabel({
  arrayOfObjects,
  concatObjectProps,
  valueProp = "id",
  outerSeparator = " ",
  innerSeparator = " "
}) {
  const options = [];

  for (const obj of arrayOfObjects) {
    const arrayToConcat = [];

    for (const prop of concatObjectProps) {
      if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["isArray"])(prop)) {
        arrayToConcat[arrayToConcat.length] = prop.map(propName => obj[propName]);
      } else {
        arrayToConcat[arrayToConcat.length] = obj[prop];
      }
    }

    options[options.length] = {
      value: obj[valueProp],
      label: concatWithInnerOuterSeparators(arrayToConcat, outerSeparator, innerSeparator)
    };
  }

  return options;
}
/**
 * Tests if a string starts with another
 *
 * @param {string} haystack The haystack string.
 * @param {string} needle The needle string.
 * @return {boolean} True if the haystack string starts with needle, false otherwise.
 */

function startsWith(haystack, needle) {
  return haystack.indexOf(needle, 0) === 0;
}
/**
 * Makes the first character of the given string uppercase.
 *
 * @param {string} string A string.
 * @return {string} The string with its first character made uppercase.
 */

function ucaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//# sourceMappingURL=string.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/time.js":
/*!******************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/time.js ***!
  \******************************************************/
/*! exports provided: time, msToTime, millisecToSec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "msToTime", function() { return msToTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "millisecToSec", function() { return millisecToSec; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Time-related utility functions.
 */

/**
 * Returns the current Unix time in seconds.
 *
 * @return {number} Current Unix time in seconds.
 */
function time() {
  const d = new Date();
  const seconds = Math.round(d.getTime() / 1000);
  return seconds;
}
/**
 * Returns the time string approximated to the nearest microsecond
 * corresponding the given Unix timestamp in milliseconds
 * in the format "HH:mm:ss.ms".
 *
 * @param {number} [ms] The time in microseconds to convert into a string.
 *                      If omitted, the current time will be used.
 * @return {string} The time string.
 */

function msToTime(ms) {
  const date = new Date(ms || new Date().getTime());
  const isoDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
  return isoDate.slice(11, -1);
}
/**
 * Converts milliseconds to seconds.
 *
 * @param {number} millisec Number of milliseconds.
 * @return {number} The milliseconds in seconds.
 */

function millisecToSec(millisec) {
  return millisec * 0.001;
}
//# sourceMappingURL=time.js.map

/***/ }),

/***/ "./node_modules/js-utl/dist/es6/modules/web.js":
/*!*****************************************************!*\
  !*** ./node_modules/js-utl/dist/es6/modules/web.js ***!
  \*****************************************************/
/*! exports provided: buildQueryString, formData, xhr, checkNetwork, waitNetwork, setCookie, getCookie, unsetCookie, isInViewport, isScrolledIntoView, hasVerticalScrollbar, hasHorizontalScrollbar, elementUniqueId, getElementComputedStyle, elementInnerDimensions, countTextareaLines, isScrollOnBottom, getVerticalScrollBarWidth, isEllipsisActive, copyTextToClipboard, rAFLooper, nestedRAF, getRawURIFragment, getDecodedURIFragment, appendEncodedJSONFragmentToURI, getDecodedJSONFromFragmentURI, parseQueryStringArgsMultiDim, getQueryStringArgsMultiDim, cursorFocus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryString", function() { return buildQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formData", function() { return formData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xhr", function() { return xhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNetwork", function() { return checkNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waitNetwork", function() { return waitNetwork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsetCookie", function() { return unsetCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrolledIntoView", function() { return isScrolledIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVerticalScrollbar", function() { return hasVerticalScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasHorizontalScrollbar", function() { return hasHorizontalScrollbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementUniqueId", function() { return elementUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElementComputedStyle", function() { return getElementComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementInnerDimensions", function() { return elementInnerDimensions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countTextareaLines", function() { return countTextareaLines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScrollOnBottom", function() { return isScrollOnBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVerticalScrollBarWidth", function() { return getVerticalScrollBarWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEllipsisActive", function() { return isEllipsisActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyTextToClipboard", function() { return copyTextToClipboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rAFLooper", function() { return rAFLooper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nestedRAF", function() { return nestedRAF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRawURIFragment", function() { return getRawURIFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecodedURIFragment", function() { return getDecodedURIFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendEncodedJSONFragmentToURI", function() { return appendEncodedJSONFragmentToURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDecodedJSONFromFragmentURI", function() { return getDecodedJSONFromFragmentURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryStringArgsMultiDim", function() { return parseQueryStringArgsMultiDim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryStringArgsMultiDim", function() { return getQueryStringArgsMultiDim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cursorFocus", function() { return cursorFocus; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./node_modules/js-utl/dist/es6/modules/core/index.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Web application (browser) utility functions.
 */

/**
 * Builds a form data instance or object recursively.
 *
 * @see https://stackoverflow.com/questions/22783108/convert-js-object-to-form-data#answer-42483509
 *
 * @param {FormData|Object} formData Form data instance or JS POJO object.
 * @param {Array|Object} data JS POJO object or array with the form data to use to build the forma data.
 * @param {boolean} [shouldEncodeURIComponent] Optionally instructs the function if the parameters should be encoded
 *                                             (keys and values) using "encodeURIComponent".
 * @param {string} [parentKey] Parent key for nested parameters (used internally for recursion).
 * @return {undefined}
 */

function buildFormData(formData, data, shouldEncodeURIComponent, parentKey) {
  if (data && typeof data === "object" && !(data instanceof Date) && !(data instanceof File)) {
    Object.keys(data).forEach(key => {
      buildFormData(formData, data[key], shouldEncodeURIComponent, parentKey ? `${parentKey}[${key}]` : shouldEncodeURIComponent ? encodeURIComponent(key) : key);
    });
  } else {
    // Leaf value.
    const value = data == null ? "" : shouldEncodeURIComponent ? encodeURIComponent(data) : data;
    formData instanceof FormData ? formData.append(parentKey, value) : formData[parentKey] = value;
  }
}
/**
 * Constructs a query string from the given data.
 * This method works with nested objects/arrays.
 *
 * @param {Array|Object} data The object.
 * @return {string} The query string.
 */


function buildQueryString(data) {
  const formData = {};
  buildFormData(formData, data, true); // "true" instructs the function to encode URI parts (keys and values).

  const parts = [];

  for (const prop in formData) {
    parts.push(prop + "=" + formData[prop]);
  }

  return parts.join("&");
}
/**
 * Converts an object (array or JS POJO object) to a form data instance.
 *
 * @param {Array|Object} data The data (array or POJO object).
 * @return {FormData} A form data instance.
 */

function formData(data) {
  const formData = new FormData();
  buildFormData(formData, data);
  return formData;
}
/**
 * Returns a new XMLHttpRequest or ActiveXObject object.
 *
 * @return {XMLHttpRequest|ActiveXObject}
 */

const xhr = () => window.ActiveXObject && new window.ActiveXObject("Microsoft.XMLHTTP") || new XMLHttpRequest();
/**
 * Checks whether the network is reachable or not.
 *
 * @param {string} URI An eventual URI to use for the request.
 *                     NOTE: If omitted, then "config.checkNetworkURI" will be used,
 *                           or, if "config.checkNetworkURI" is not set,
 *                           the website's hostname will be used.
 *                           Also, in every case, A GET query string with a random parameter
 *                           is always appended to the URI.
 * @return {Promise} A promise which resolves to "true" if the network is reachable and to "false" otherwise.
 *                   Note that the returned promise always resolves to "true" when this code runs on localhost.
 */

function checkNetwork(URI = null) {
  // Handle IE and more capable browsers.
  const xhrObj = xhr();
  return new Promise(resolve => {
    // Issue request and handle response.
    try {
      xhrObj.onreadystatechange = () => {
        if (xhrObj.readyState == 4) {
          resolve(xhrObj.status >= 200 && (xhrObj.status < 300 || xhrObj.status === 304));
        }
      }; // Open new request as a HEAD to the root hostname with a random param to bust the cache.


      xhrObj.open("HEAD", (URI || _core__WEBPACK_IMPORTED_MODULE_0__["config"].checkNetworkURI || "//" + window.location.hostname + (window.location.port != 80 ? ":" + window.location.port : "")) + "?rand=" + Math.floor((1 + Math.random()) * 0x10000), // 0x10000 = 2^16
      true);
      xhrObj.send();
    } catch (error) {
      resolve(false);
    }
  });
}
/**
 * Returns a promise which resolves when the network is available.
 *
 * NOTE: If the network is available, the promise will resolve almost immediately.
 *
 * @param {number} intervalMillisecs An interval in milliseconds to wait before the next network check.
 * @return {Promise} A promise.
 */

function waitNetwork(intervalMillisecs = 3000) {
  return new Promise(resolve => {
    checkNetwork().then(isNetworkReachable => {
      if (isNetworkReachable) {
        resolve();
      } else {
        const interval = setInterval(() => {
          checkNetwork().then(isNetworkReachable => {
            if (isNetworkReachable) {
              clearInterval(interval);
              resolve();
            }
          });
        }, intervalMillisecs);
      }
    });
  });
}
/**
 * Sets a cookie value.
 *
 * @see https://www.w3schools.com/js/js_cookies.asp
 *
 * @param {string} cname The cookie name.
 * @param {string} cvalue The cookie value.
 * @param {number|undefined} exdays Number of days after which the cookie expires,
 *                                  or "undefined" to make the cookie expire at the end of the session.
 * @return {undefined}
 */

function setCookie(cname, cvalue, exdays) {
  let expires = "";

  if (exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    expires = "expires=" + d.toUTCString() + ";";
  }

  document.cookie = cname + "=" + cvalue + ";" + expires + "path=/";
}
/**
 * Gets a cookie value.
 *
 * @see https://www.w3schools.com/js/js_cookies.asp
 *
 * @param {string} cname The cookie name.
 * @return {string|undefined} The cookie value or "undefined", if not set.
 */

function getCookie(cname) {
  const name = cname + "=";
  const ca = document.cookie.split(";");

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }

  return void 0;
}
/**
 * Unsets a cookie.
 *
 * @param {string} cname The cookie name.
 * @return {undefined}
 */

function unsetCookie(cname) {
  setCookie(cname, "", -365);
}
/**
 * Tests whether a DOM element is in viewport or not.
 *
 * @param {Element} elem The DOM element.
 * @return {boolean} True if it is in viewport, false otherwise.
 */

function isInViewport(elem) {
  const bounding = elem.getBoundingClientRect();
  return bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth);
}
/**
 * Tests if a DOM element is scrolled into the scrollable view of its parent scrollable container.
 *
 * @param {Element} elem The DOM element to test.
 * @param {Element} holder The DOM element of the scrollable container of the DOM element to test.
 * @param {number|Function} minPx Minimum number of pixels of the element's height which must be scrolled into the view
 *                                in order to consider the element to be scrolled into view.
 *                                If a function is given, it will receive the element's bounding client rect as the first argument
 *                                as well as the holder element's bounding client rect as the second argument and must return
 *                                the minimum number of pixels.
 * @return {boolean} True if the given element is scrolled into view, false otherwise.
 */

function isScrolledIntoView(el, holder, minPx = 1) {
  const elRect = el.getBoundingClientRect();
  const holderRect = holder.getBoundingClientRect();
  const {
    top,
    bottom,
    height
  } = elRect;

  const minPxNumberFn = () => typeof minPx === "function" ? minPx(elRect, holderRect) : minPx;

  let bottomDiff;
  return top <= holderRect.top ? holderRect.top - top + minPxNumberFn() <= height : (bottomDiff = bottom - holderRect.bottom) < 0 ? true : holderRect.bottom >= top && minPx ? holderRect.bottom - top >= minPxNumberFn() : bottomDiff <= height;
}
/**
 * Tests if a DOM element has a vertical scrollbar.
 *
 * @param {Element} elem The DOM element.
 * @return {boolean} True it has a vertical scrollbar, false otherwise.
 */

function hasVerticalScrollbar(elem) {
  const hasVerticalScrollbar = elem.scrollHeight > elem.clientHeight;
  return hasVerticalScrollbar;
}
/**
 * Tests if a DOM element has a horizontal scrollbar.
 *
 * @param {Element} elem The DOM element.
 * @return {boolean} True it has a horizontal scrollbar, false otherwise.
 */

function hasHorizontalScrollbar(elem) {
  const hasHorizontalScrollbar = elem.scrollWidth > elem.clientWidth;
  return hasHorizontalScrollbar;
}
/**
 * Generates a unique ID which can be used for an element.
 *
 * @param {string|undefined} [elementUniqueIdPrefix] Local unique ID prefix which overrides the prefix
 *                                                   set on the "config" configuration object.
 * @return {string} The element unique ID.
 */

function elementUniqueId(elementUniqueIdPrefix = void 0) {
  const uniqueElementIdSuffix = Object(_core__WEBPACK_IMPORTED_MODULE_0__["uniqueId"])();
  return (elementUniqueIdPrefix || _core__WEBPACK_IMPORTED_MODULE_0__["config"].elementUniqueIdPrefix) + uniqueElementIdSuffix;
}
/**
 * Gets the computed style of an element.
 *
 * @param {Element} element DOM element.
 * @return {CSSStyleDeclaration} The computed style.
 */

function getElementComputedStyle(element) {
  return window.getComputedStyle(element);
}
/**
 * Gets element's inner dimensions (height and width without padding).
 *
 * @param {Element} element An element.
 * @return {Object} An object with "width" and "height" properties.
 */

function elementInnerDimensions(element) {
  const computedStyle = getElementComputedStyle(element);
  let elementHeight = element.clientHeight; // Height with padding.

  let elementWidth = element.clientWidth; // Width with padding

  elementHeight -= parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);
  elementWidth -= parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
  return {
    width: elementWidth,
    height: elementHeight
  };
}
/**
 * @type {HTMLTextAreaElement}
 */

let countTextareaLinesBuffer;
/**
 * Returns the number of lines in a textarea, including wrapped lines.
 *
 * @see https://stackoverflow.com/questions/28905965/textarea-how-to-count-wrapped-lines-rows#answer-45252226
 *
 * @param {HTMLTextAreaElement} textarea A textarea element. Note that the textarea should have an integer line height
 *                                       to avoid rounding errors.
 */

function countTextareaLines(textarea) {
  if (countTextareaLinesBuffer == null) {
    countTextareaLinesBuffer = document.createElement("textarea");
    countTextareaLinesBuffer.style.border = "none";
    countTextareaLinesBuffer.style.height = "0";
    countTextareaLinesBuffer.style.overflow = "hidden";
    countTextareaLinesBuffer.style.padding = "0";
    countTextareaLinesBuffer.style.position = "absolute";
    countTextareaLinesBuffer.style.left = "0";
    countTextareaLinesBuffer.style.top = "0";
    countTextareaLinesBuffer.style.zIndex = "-1";
    document.body.appendChild(countTextareaLinesBuffer);
  }

  const cs = window.getComputedStyle(textarea);
  const pl = parseInt(cs.paddingLeft);
  const pr = parseInt(cs.paddingRight);
  let lh = parseInt(cs.lineHeight); // `cs.lineHeight` may return 'normal', which means line height = font size.

  if (isNaN(lh)) lh = parseInt(cs.fontSize); // Copy content width.

  countTextareaLinesBuffer.style.width = textarea.clientWidth - pl - pr + "px"; // Copy text properties.

  countTextareaLinesBuffer.style.font = cs.font;
  countTextareaLinesBuffer.style.letterSpacing = cs.letterSpacing;
  countTextareaLinesBuffer.style.whiteSpace = cs.whiteSpace;
  countTextareaLinesBuffer.style.wordBreak = cs.wordBreak;
  countTextareaLinesBuffer.style.wordSpacing = cs.wordSpacing;
  countTextareaLinesBuffer.style.wordWrap = cs.wordWrap; // Copy value.

  countTextareaLinesBuffer.value = textarea.value;
  let result = Math.floor(countTextareaLinesBuffer.scrollHeight / lh);

  if (result == 0) {
    result = 1;
  }

  return result;
}
/**
 * Checks if the scroll of an element is on the bottom.
 *
 * @param {Element} DOMNode Element.
 * @return {boolean} True if the scroll is on the bottom, false otherwise.
 */

function isScrollOnBottom(DOMNode) {
  const ret = DOMNode.scrollTop + DOMNode.offsetHeight >= DOMNode.scrollHeight;
  return ret;
}
/**
 * Returns the default browser's vertical scrollbar width.
 *
 * @return {Number} The scrollbar width.
 */

function getVerticalScrollBarWidth() {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "vertical-scrollbar-measure";
  const sheet = document.createElement("style");
  sheet.innerHTML = "div.vertical-scrollbar-measure { width: 100px; height: 100px; overflow: scroll; position: absolute; top: -9999px; }";
  document.body.appendChild(sheet);
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  const sheetParent = sheet.parentNode;
  sheetParent.removeChild(sheet);
  return scrollbarWidth;
}
/**
 * Tests if an element with "text-overflow: ellipsis;" has the ellipsis active
 * and therefore its text is truncated.
 *
 * @param {Element} e The DOM element.
 * @return {boolean} True if ellipsis are present, false otherwise.
 */

function isEllipsisActive(e) {
  return e.offsetWidth < e.scrollWidth;
}
/**
 * A fallback function to copy a text to clipboard.
 *
 * @param {string} text The text to copy.
 * @param {Function} [onSuccess] An optional callback to execute on success.
 * @param {Function} [onFailure] An optional callback to execute on failure.
 * @return {undefined}
 */

function fallbackCopyTextToClipboard(text, onSuccess, onFailure) {
  const bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");

    if (successful) {
      onSuccess && onSuccess();
    } else {
      onFailure && onFailure();
    }
  } catch (err) {
    onFailure && onFailure(err);
  }

  document.body.removeChild(textArea) && document.documentElement.scrollTop && (document.documentElement.scrollTop = bodyScrollTop) || (document.body.scrollTop = bodyScrollTop);
}
/**
 * Copies a text to clipboard.
 *
 * @param {string} text The text to copy.
 * @param {Function} [onSuccess] An optional callback to execute on success.
 * @param {Function} [onFailure] An optional callback to execute on failure.
 * @return {undefined}
 */


function copyTextToClipboard(text, onSuccess, onFailure) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text, onSuccess, onFailure);
    return;
  }

  navigator.clipboard.writeText(text).then(function () {
    onSuccess && onSuccess();
  }, function (err) {
    onFailure && onFailure(err);
  });
}
/**
 * Asynchronously invokes a callback multiple times, each in its own animation frame.
 *
 * @param {number} n The number of times the callback should be invoked.
 * @param {Function} callback The callback to invoke.
 * @return {*} The identifier of the first animation frame or "n" if it is falsy during the outermost call.
 */

const rAFLooper = (n, callback) => n && window.requestAnimationFrame(() => (callback(), rAFLooper(--n, callback)));
/**
 * Requests a predefined number of animation frames and executes a callback after.
 *
 * @param {number} count The number of animation frames to request before executing the callback.
 * @param {Function} callback The callback to execute after "count" animation frames have been requested.
 * @return {number} The identifier of the first animation frame.
 */

const nestedRAF = (count, callback) => {
  let c = count || 1;

  const innerCallback = () => {
    c--;

    if (!c) {
      callback();
      return;
    }

    window.requestAnimationFrame(innerCallback);
  };

  return window.requestAnimationFrame(innerCallback);
};
/**
 * Returns the raw contents of the URI fragment (i.e. everything after the hash ("#") character).
 *
 * @param {string} URIFragment The URI fragment.
 * @return {string} The raw contents of the URI fragment.
 */

function getRawURIFragment(URIFragment) {
  const fragment = (URIFragment || window.location.hash).replace(/^#/, "");
  return fragment;
}
/**
 * Returns the decoded contents of a URI fragment (i.e. everything after the hash ("#") character).
 *
 * @param {string} URIFragment The URI fragment.
 * @return {string} The contents of the URI fragment, decoded.
 */

function getDecodedURIFragment(URIFragment) {
  const fragment = decodeURIComponent(getRawURIFragment(URIFragment));
  return fragment;
}
/**
 * Appends an encoded JSON fragment to a URI.
 *
 * @param {string} URI The URI.
 * @param {*} data Data to encode in JSON format.
 */

function appendEncodedJSONFragmentToURI(URI, data) {
  return URI + "#" + encodeURIComponent(JSON.stringify(data));
}
/**
 * Returnes the decoded JSON data eventually stored in the URI fragment.
 *
 * @param {*} defaultData Default data to return if either the URI fragment is missing or
 *                        the content of the URI fragment is not a valid JSON-encoded string.
 * @return {*} The decoded JSON data or "defaultData".
 */

function getDecodedJSONFromFragmentURI(defaultData = null) {
  const fragment = window.location.hash;

  if (!Object(_core__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(fragment)) {
    const decodedFragment = getDecodedURIFragment(fragment);

    if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["isJSONString"])(decodedFragment)) {
      return JSON.parse(decodedFragment);
    }
  }

  return defaultData;
}
/**
 * Parses a multidimensional query string and returns an object with the parsed args.
 *
 * @see https://stackoverflow.com/questions/8648892/convert-url-parameters-to-a-javascript-object#answer-44713056
 *
 * @param {string} str The query string.
 * @param {Object} [array] The base object to use (or a new object if omitted or falsy).
 * @return {Object} The object with the parsed data.
 */

function parseQueryStringArgsMultiDim(str, array) {
  if (!str) {
    str = window.location.search.substr(1);
  }

  let i, j, ct, p, lastObj, obj, undef, chr, tmp, key, value, postLeftBracketPos, keys, keysLen;

  const strArr = String(str).replace(/^&/, "").replace(/&$/, "").split("&"),
        sal = strArr.length,
        fixStr = function (str) {
    return decodeURIComponent(str.replace(/\+/g, "%20"));
  };

  if (!array) {
    array = {};
  }

  for (i = 0; i < sal; i++) {
    tmp = strArr[i].split("=");
    key = fixStr(tmp[0]);
    value = tmp.length < 2 ? "" : fixStr(tmp[1]);

    while (key.charAt(0) === " ") {
      key = key.slice(1);
    }

    if (key.indexOf("\x00") > -1) {
      key = key.slice(0, key.indexOf("\x00"));
    }

    if (key && key.charAt(0) !== "[") {
      keys = [];
      postLeftBracketPos = 0;

      for (j = 0; j < key.length; j++) {
        if (key.charAt(j) === "[" && !postLeftBracketPos) {
          postLeftBracketPos = j + 1;
        } else if (key.charAt(j) === "]") {
          if (postLeftBracketPos) {
            if (!keys.length) {
              keys.push(key.slice(0, postLeftBracketPos - 1));
            }

            keys.push(key.substr(postLeftBracketPos, j - postLeftBracketPos));
            postLeftBracketPos = 0;

            if (key.charAt(j + 1) !== "[") {
              break;
            }
          }
        }
      }

      if (!keys.length) {
        keys = [key];
      }

      for (j = 0; j < keys[0].length; j++) {
        chr = keys[0].charAt(j);

        if (chr === " " || chr === "." || chr === "[") {
          keys[0] = keys[0].substr(0, j) + "_" + keys[0].substr(j + 1);
        }

        if (chr === "[") {
          break;
        }
      }

      obj = array;

      for (j = 0, keysLen = keys.length; j < keysLen; j++) {
        key = keys[j].replace(/^['"]/, "").replace(/['"]$/, "");
        lastObj = obj;

        if (key !== "" && key !== " " || j === 0) {
          if (obj[key] === undef) {
            obj[key] = {};
          }

          obj = obj[key];
        } else {
          // To insert new dimension
          ct = -1;

          for (p in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, p)) {
              if (+p > ct && p.match(/^\d+$/g)) {
                ct = +p;
              }
            }
          }

          key = ct + 1;
        }
      }

      lastObj[key] = value;
    }
  }
  /* ===== */

  /*
   * This code converts the object properties to arrays if they are objects with consecutive integer keys
   * from 0 to n, where n is the number of properties of that object minus one
   * (i.e. it converts meaningful objects which are to be interpreted as arrays to arrays).
   */


  const fnNormalizeObjToArrayIfPropsAreConsecutiveIntsFrom0 = function (obj) {
    const keys = Object.keys(obj);
    const truthMap = {};

    for (let i = 0; i < keys.length; i++) {
      truthMap[i] = true;
    }

    const array = [];

    for (let i = 0; i < keys.length; i++) {
      const prop = keys[i] + "";

      if (!prop.match(/^[0-9]+$/)) {
        return obj;
      }

      const intProp = Number(prop);

      if (truthMap[intProp]) {
        array[intProp] = obj[prop];
        delete truthMap[intProp];
      } else {
        return obj;
      }
    }

    if (Object.keys(truthMap).length === 0) {
      return array;
    } else {
      return obj;
    }
  };

  const fnNormalizeToArrayIfNeeded = function fnNormalizeToArrayIfNeeded(obj) {
    for (const prop in obj) {
      if (Object(_core__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(obj[prop])) {
        obj[prop] = fnNormalizeObjToArrayIfPropsAreConsecutiveIntsFrom0(obj[prop]);
        fnNormalizeToArrayIfNeeded(obj[prop]);
      }
    }
  };
  /* /===== */


  fnNormalizeToArrayIfNeeded(array);
  return array;
}
/**
 * Gets the query string arguments of the current location in a multidimensional fashion
 * (multidimension-aware).
 *
 * @return {Object} An object representing the query string arguments.
 */

function getQueryStringArgsMultiDim() {
  const obj = {};
  parseQueryStringArgsMultiDim(location.search.substring(1), obj);
  return obj;
}
/**
 * Focuses an input without scrolling.
 *
 * @see https://stackoverflow.com/questions/4963053/focus-to-input-without-scrolling
 *
 * @param {Element} elem The DOM element.
 */

const cursorFocus = function (elem) {
  let x, y; // More sources for scroll x, y offset.

  if (typeof window.pageXOffset !== "undefined") {
    x = window.pageXOffset;
    y = window.pageYOffset;
  } else if (typeof window.scrollX !== "undefined") {
    x = window.scrollX;
    y = window.scrollY;
  } else if (document.documentElement && typeof document.documentElement.scrollLeft !== "undefined") {
    x = document.documentElement.scrollLeft;
    y = document.documentElement.scrollTop;
  } else {
    x = document.body.scrollLeft;
    y = document.body.scrollTop;
  }

  elem.focus();

  if (typeof x !== "undefined") {
    window.scrollTo(x, y);
  }
};
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/advices/Advice.js":
/*!*******************************!*\
  !*** ./src/advices/Advice.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Advice; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Advice = function Advice(fn) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Advice);

  this.fn = fn;
};



/***/ }),

/***/ "./src/advices/AfterAdvice.js":
/*!************************************!*\
  !*** ./src/advices/AfterAdvice.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AfterAdvice; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Advice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Advice */ "./src/advices/Advice.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var AfterAdvice = /*#__PURE__*/function (_Advice) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(AfterAdvice, _Advice);

  var _super = _createSuper(AfterAdvice);

  function AfterAdvice() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AfterAdvice);

    return _super.apply(this, arguments);
  }

  return AfterAdvice;
}(_Advice__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/advices/AroundAdvice.js":
/*!*************************************!*\
  !*** ./src/advices/AroundAdvice.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AroundAdvice; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Advice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Advice */ "./src/advices/Advice.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var AroundAdvice = /*#__PURE__*/function (_Advice) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(AroundAdvice, _Advice);

  var _super = _createSuper(AroundAdvice);

  function AroundAdvice() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AroundAdvice);

    return _super.apply(this, arguments);
  }

  return AroundAdvice;
}(_Advice__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/advices/BeforeAdvice.js":
/*!*************************************!*\
  !*** ./src/advices/BeforeAdvice.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BeforeAdvice; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Advice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Advice */ "./src/advices/Advice.js");





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var BeforeAdvice = /*#__PURE__*/function (_Advice) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(BeforeAdvice, _Advice);

  var _super = _createSuper(BeforeAdvice);

  function BeforeAdvice() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BeforeAdvice);

    return _super.apply(this, arguments);
  }

  return BeforeAdvice;
}(_Advice__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./src/builtin/POJOPromiser.js":
/*!*************************************!*\
  !*** ./src/builtin/POJOPromiser.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return POJOPromiser; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pigretto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pigretto */ "./src/pigretto.js");
/* harmony import */ var _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pointcuts/shorthands/get */ "./src/pointcuts/shorthands/get.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


/**
 * @type {Symbol}
 */

var queueTupleProp = Symbol("queueTupleProp");
/**
 * @type {Symbol}
 */

var dataProp = Symbol("dataProp");
/**
 * @type {Function}
 */

var dummyNoOp = function dummyNoOp() {// Just a dummy no-op function. Required when the Proxy API is polyfilled with proxy-polyfill (https://github.com/GoogleChrome/proxy-polyfill/)
};
/**
 * Builtin function using pigretto's API to create a POJO promiser,
 * i.e. a proxy object with syntactic sugar which lets creating a queue of properties to resolve
 * and resolves to an object with those same properties and their respective resolved values.
 *
 * @see https://gist.github.com/jasuperior/5d339f9c2572b3bb52d487de4086a3b2
 *
 * @param {Object} obj A POJO object where each property refers to a value to use as is or to a promise
 *                     resolving to the value to use for that property.
 * @param {Object} options Options.
 * @param {boolean} [options.mutateTargetOnSettledPromiseQueue] Whether or not to mutate the original given "obj" POJO object
 *                                                              with the resolved values or not (defaults to false,
 *                                                              i.e. it does not mutate the original "obj" POJO object).
 * @return {Proxy} A new proxy object for the given target which supports this builtin feature.
 */


function POJOPromiser(obj) {
  var _that;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$mutateTargetOnSe = _ref.mutateTargetOnSettledPromiseQueue,
      mutateTargetOnSettledPromiseQueue = _ref$mutateTargetOnSe === void 0 ? false : _ref$mutateTargetOnSe;

  var originalTarget = obj; // This is needed because the Proxy API may be polyfilled with proxy-polyfill (https://github.com/GoogleChrome/proxy-polyfill/).
  // Cloning "obj" allows setting properties on the target clone.

  var target = _objectSpread({}, obj);

  var that = (_that = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_that, queueTupleProp, void 0), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_that, dataProp, {}), _that);

  var rules = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "/.?/", Object(_pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_3__["default"])().around(function () {
    var prop = this.property,
        target = this.target;

    if (prop === "then" && that[queueTupleProp]) {
      // If "then" is accessed, and there is something in the queue.
      var _that$queueTupleProp = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(that[queueTupleProp], 2),
          queuedProp = _that$queueTupleProp[0],
          queuedPromise = _that$queueTupleProp[1];

      var _promise = queuedPromise.then(function (data) {
        var obj = that[dataProp]; // Resolved data from last promise.

        obj[queuedProp] = data;
        return new Promise(function (resolve) {
          that[dataProp] = {}; // Erase data.

          that[queueTupleProp] = void 0; // Clear queue.

          resolve(obj); // Resolve promise queue.

          if (obj && mutateTargetOnSettledPromiseQueue) {
            // Assign resolved values to the original target, so that properties which value is a promise will be replaced with the resolved value.
            Object.assign(originalTarget, obj);
          }
        });
      });

      var then = _promise.then.bind(_promise);

      return then;
    }

    var promise;

    if (!(target[prop] instanceof Promise) && prop !== "then") {
      // If the prop is not "then" or a promise, i.e. it is a real value.
      if (that[queueTupleProp]) {
        // If there is a queue.
        var _that$queueTupleProp2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(that[queueTupleProp], 2),
            _queuedProp = _that$queueTupleProp2[0],
            _queuedPromise = _that$queueTupleProp2[1];

        var _obj = that[dataProp];
        promise = _queuedPromise.then(function (data) {
          // Resolve last promise.
          _obj[_queuedProp] = data;
          return Promise.resolve(target[prop]);
        });
      } else {
        // Otherwise, simply create a new promise with value.
        that[dataProp] = {};
        promise = Promise.resolve(target[prop]);
      }
    }

    if (that[queueTupleProp]) {
      // If it is a promise and there is a queue.
      var _that$queueTupleProp3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(that[queueTupleProp], 2),
          _queuedProp2 = _that$queueTupleProp3[0],
          _queuedPromise2 = _that$queueTupleProp3[1];

      var _obj2 = that[dataProp];
      promise = _queuedPromise2.then(function (data) {
        // Resolve last promise.
        _obj2[_queuedProp2] = data;
        return target[prop];
      });
    } else if (!promise) {
      // target[prop] is of course a promise here (invariant).
      that[dataProp] = {};
      promise = target[prop];
    }

    that[queueTupleProp] = [prop, promise]; // Save the promise and the property in the queue.
    // All alternations ensure that no matter what the value, a promise which must be resolved is always given.

    target.then = dummyNoOp;
    var pigrettarget = Object(_pigretto__WEBPACK_IMPORTED_MODULE_2__["default"])(target, rules);
    return pigrettarget;
  }));

  target.then = dummyNoOp;
  var pigrettarget = Object(_pigretto__WEBPACK_IMPORTED_MODULE_2__["default"])(target, rules);
  return pigrettarget;
}

/***/ }),

/***/ "./src/builtin/arrayWithNegativeIndices.js":
/*!*************************************************!*\
  !*** ./src/builtin/arrayWithNegativeIndices.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayWithNegativeIndices; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Builtin function using pigretto's API to create an array which allows the usage of negative indices
 * to retrieve its data, where -1 indicates the last element of the array (same as `array.length - 1`).
 *
 * @param {Array} array An array to use as the target object for this builtin.
 * @param {Object} options Options.
 * @param {boolean} [options.wrap] Whether or not to wrap if the negative index is greater than the length of the array.
 *                                 Defaults to true, in which case an array like `arrayWithNegativeIndices(['a', 'b', 'c'])[-5]`
 *                                 will wrap and return 'b', even though `Math.abs(-5) > ['a', 'b', 'c'].length`.
 *                                 If this option were set to false, then undefined would be returned for `arrayWithNegativeIndices(['a', 'b', 'c'])[-5]`.
 * @return {Proxy} The proxy object for the given array.
 */
function arrayWithNegativeIndices(array) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap;

  return new Proxy(array, {
    get: function get(target, propKey) {
      var numberPropKey = Number(propKey);

      if (!Number.isNaN(numberPropKey) && Number.isInteger(numberPropKey) && numberPropKey < 0) {
        var absNumberPropKey = Math.abs(numberPropKey);

        if (wrap || absNumberPropKey <= target.length) {
          numberPropKey = target.length - absNumberPropKey % target.length;
          propKey = String(numberPropKey === target.length ? 0 : numberPropKey);
        }
      }

      return target[propKey];
    }
  });
}

/***/ }),

/***/ "./src/builtin/lazyObject.js":
/*!***********************************!*\
  !*** ./src/builtin/lazyObject.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lazyObject; });
/* harmony import */ var _pigretto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pigretto */ "./src/pigretto.js");
/* harmony import */ var _pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pointcuts/shorthands/call */ "./src/pointcuts/shorthands/call.js");
/* harmony import */ var _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pointcuts/shorthands/set */ "./src/pointcuts/shorthands/set.js");
/* harmony import */ var _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pointcuts/shorthands/get */ "./src/pointcuts/shorthands/get.js");
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! escape-string-regexp */ "./node_modules/escape-string-regexp/index.js");
/* harmony import */ var escape_string_regexp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(escape_string_regexp__WEBPACK_IMPORTED_MODULE_4__);
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





/**
 * Builtin function using pigretto's API to implement lazy loading for objects.
 *
 * @param {Object} target A target object to lazy load. Lazy loading in this case means deferring an operation on the object
 *                        when it is used for the very first time by the client code.
 * @param {Object} options The options of the lazy loading.
 * @param {Function} onceCallback The callback to execute only once before performing the very first operation on the given "target"
 *                                when the given "target" is used for the very first time.
 *                                This callback is mandatory (otherwise it doesn't make sense to use "lazy()" at all)
 *                                and allows e.g. to perform a heavy initialization operation lazily on the underlying target object.
 * @param {Object} [options.ignoredTypes] The types which prototypes to ignore when going up the prototype chain in order to identify
 *                                        which prototypes to intercept when lazy loading.
 *                                        By default, only the properties set on the "Object" prototype will be ignored.
 *                                        This option can be used e.g. to avoid the performance of a heavy lazy initialization
 *                                        when calling the methods of a parent class of the given "target" object.
 * @param {boolean} [options.interceptConstructor] Whether or not to intercept the getting/setting of the "constructor" property.
 *                                                 Defaults to "false", meaning that when getting/setting "target.constructor",
 *                                                 this operation will not trigger the underlying lazy loading.
 * @param {string[]} [options.propertiesToIgnore] Property names or method names to ignore for lazy loading.
 * @param {Array} [options.pointcuts] Array of pointcut shorthands to use for interception and lazy loading.
 *                                    By default, only "call", "get" and "set" pointcuts will be used.
 *                                    Other pointcut shorthands (e.g. "apply", "construct") will be ignored, if passed.
 * @return {Proxy} A new proxy object for the given target which supports this builtin feature.
 */

function lazyObject(target) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      onceCallback = _ref.onceCallback,
      _ref$ignoredTypes = _ref.ignoredTypes,
      ignoredTypes = _ref$ignoredTypes === void 0 ? [Object] : _ref$ignoredTypes,
      _ref$interceptConstru = _ref.interceptConstructor,
      interceptConstructor = _ref$interceptConstru === void 0 ? false : _ref$interceptConstru,
      _ref$propertiesToIgno = _ref.propertiesToIgnore,
      propertiesToIgnore = _ref$propertiesToIgno === void 0 ? [] : _ref$propertiesToIgno,
      _ref$pointcuts = _ref.pointcuts,
      pointcuts = _ref$pointcuts === void 0 ? [_pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_1__["default"], _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_3__["default"], _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_2__["default"]] : _ref$pointcuts;

  var hasCall = false,
      hasGet = false,
      hasSet = false;
  var rules = [];
  var propertiesMap = {};
  var constructorsToIgnore = ignoredTypes.map(function (Type) {
    return Type.prototype.constructor;
  });
  var current = target;
  var currentIsProto = false;

  while (current) {
    var _constructor = current.constructor;

    if (!currentIsProto || !constructorsToIgnore.includes(_constructor)) {
      var _properties = Reflect.ownKeys(current);

      _properties.map(function (property) {
        return propertiesMap[property] = {
          isMethod: property !== "constructor" && typeof target[property] === "function"
        };
      });
    }

    current = Object.getPrototypeOf(current);
    currentIsProto = true;
  }

  propertiesToIgnore.map(function (propertyToIgnore) {
    return delete propertiesMap[propertyToIgnore];
  });
  !interceptConstructor && delete propertiesMap["constructor"];
  pointcuts.map(function (pointcut) {
    if (pointcut === _pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      hasCall = true;
    } else if (pointcut === _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_3__["default"]) {
      hasGet = true;
    } else if (pointcut === _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      hasSet = true;
    }
  });
  var properties = Object.keys(propertiesMap);
  var firstOperation = true;

  var callback = function callback() {
    if (firstOperation) {
      firstOperation = false;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      onceCallback.apply(this, args);
    }
  };

  var escape = function escape(names) {
    return names.map(escape_string_regexp__WEBPACK_IMPORTED_MODULE_4___default.a);
  };

  var regex = function regex(escapedNames) {
    return new RegExp("^(".concat(escapedNames.join("|"), ")$"));
  };

  var addRule = function addRule(regex) {
    return function (pointcut) {
      return rules.push([regex, pointcut().before(callback)]);
    };
  };

  if (hasCall) {
    var methodNames = properties.filter(function (property) {
      return propertiesMap[property].isMethod;
    });
    var escapedMethodNames = escape(methodNames);
    addRule(regex(escapedMethodNames))(_pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_1__["default"]);
  }

  if (hasGet || hasSet) {
    var propertyNames = properties.filter(function (property) {
      return !propertiesMap[property].isMethod;
    });
    var escapedPropertyNames = escape(propertyNames);
    hasGet && addRule(regex(escapedPropertyNames))(_pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_3__["default"]);
    hasSet && addRule(regex(escapedPropertyNames))(_pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  var pigrettarget = Object(_pigretto__WEBPACK_IMPORTED_MODULE_0__["default"])(target, rules);
  return pigrettarget;
}

/***/ }),

/***/ "./src/builtin/throwErrorForUnknownProperty.js":
/*!*****************************************************!*\
  !*** ./src/builtin/throwErrorForUnknownProperty.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throwErrorForUnknownProperty; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pigretto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pigretto */ "./src/pigretto.js");
/* harmony import */ var _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pointcuts/shorthands/get */ "./src/pointcuts/shorthands/get.js");
/* harmony import */ var _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pointcuts/shorthands/set */ "./src/pointcuts/shorthands/set.js");
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");


/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */




/**
 * Builtin function using pigretto's API to throw an error when an unknown property is accessed on the given target
 * (both for read and write operations).
 *
 * @param {Object} target The target object.
 * @param {Object} options Options.
 * @param {boolean} [options.dynamic] Whether or not to check against the current properties of the target on each property access (dynamic, default).
 *                                    If set to false, then only the properties of the target object at the time this builtin function is called will be
 *                                    treated as known and used for the check when determining if a property is unknown.
 * @param {?Error|Function} [options.errorToThrow] The error to throw or null (default) or a function returning an error instance to throw.
 *                                                 If null, a default error will be thrown when trying to access an unknown property.
 *                                                 If a function is given, the function will receive an object with the following properties as parameter:
 *
 *                                                     - target (Object): The target object;
 *                                                     - propertyName (string): The name of the unknown property;
 *                                                     - targetTypeToStr (string): The type of the target (e.g. "[object Object]");
 *                                                     - defaultErrorMessage (string): A default error message which can be used for the custom error;
 *
 * @param {Object} [options.prototypeChainPropertiesOptions] Further options passed to the "prototypeChainProperties" function of js-utl (used internally).
 *                                                           See the "prototypeChainProperties" function of the js-utl package (https://github.com/tonix-tuft/js-utl)
 *                                                           for the available options.
 * @return {Proxy} A new proxy object for the given target which supports this builtin feature.
 */

function throwErrorForUnknownProperty(target) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$dynamic = _ref.dynamic,
      dynamic = _ref$dynamic === void 0 ? true : _ref$dynamic,
      _ref$errorToThrow = _ref.errorToThrow,
      errorToThrow = _ref$errorToThrow === void 0 ? null : _ref$errorToThrow,
      prototypeChainPropertiesOptions = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["dynamic", "errorToThrow"]);

  var regex = /.?/;
  var map = {};

  var mapProperties = function mapProperties() {
    var props = Object(js_utl__WEBPACK_IMPORTED_MODULE_4__["prototypeChainProperties"])(target, prototypeChainPropertiesOptions);
    map = props.reduce(function (acc, prop) {
      return !(acc[prop] = true) || acc;
    }, {});
  };

  !dynamic && mapProperties();

  var assertFn = function assertFn() {
    var propertyName = this.property;
    var targetTypeToStr = Object(js_utl__WEBPACK_IMPORTED_MODULE_4__["typeToStr"])(target);
    var defaultErrorMessage = "Accessing unknown property \"".concat(propertyName, "\" of object ").concat(targetTypeToStr, ".");
    dynamic && mapProperties();

    if (!map[propertyName]) {
      errorToThrow = errorToThrow ? typeof errorToThrow === "function" ? errorToThrow({
        target: target,
        propertyName: propertyName,
        targetTypeToStr: targetTypeToStr,
        defaultErrorMessage: defaultErrorMessage
      }) : errorToThrow : new Error(defaultErrorMessage);
      throw errorToThrow;
    }
  };

  var pigrettarget = Object(_pigretto__WEBPACK_IMPORTED_MODULE_1__["default"])(target, [[regex, Object(_pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_2__["default"])().before(assertFn)], [regex, Object(_pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_3__["default"])().before(assertFn)]]);
  return pigrettarget;
}

/***/ }),

/***/ "./src/factory/handlerFactory.js":
/*!***************************************!*\
  !*** ./src/factory/handlerFactory.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handlerFactory; });
/* harmony import */ var _trap_trapHandlerForRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trap/trapHandlerForRules */ "./src/trap/trapHandlerForRules.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Factory function to generate a new handler object for the given proxy rules.
 *
 * @param {Object|Array} proxyRules The proxy rules.
 * @return {Object} The handler object for the given proxy rules.
 */

function handlerFactory(proxyRules) {
  var handler = Object(_trap_trapHandlerForRules__WEBPACK_IMPORTED_MODULE_0__["default"])(proxyRules);
  return handler;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, call, get, set, applyRule, apply, constructRule, construct, lazyObject, throwErrorForUnknownProperty, POJOPromiser, arrayWithNegativeIndices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pigretto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pigretto */ "./src/pigretto.js");
/* harmony import */ var _rules_applyRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rules/applyRule */ "./src/rules/applyRule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyRule", function() { return _rules_applyRule__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _rules_constructRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rules/constructRule */ "./src/rules/constructRule.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constructRule", function() { return _rules_constructRule__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pointcuts/shorthands/call */ "./src/pointcuts/shorthands/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pointcuts/shorthands/get */ "./src/pointcuts/shorthands/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pointcuts/shorthands/set */ "./src/pointcuts/shorthands/set.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _pointcuts_shorthands_apply__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pointcuts/shorthands/apply */ "./src/pointcuts/shorthands/apply.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _pointcuts_shorthands_apply__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _pointcuts_shorthands_construct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pointcuts/shorthands/construct */ "./src/pointcuts/shorthands/construct.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "construct", function() { return _pointcuts_shorthands_construct__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _builtin_lazyObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./builtin/lazyObject */ "./src/builtin/lazyObject.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lazyObject", function() { return _builtin_lazyObject__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _builtin_throwErrorForUnknownProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./builtin/throwErrorForUnknownProperty */ "./src/builtin/throwErrorForUnknownProperty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwErrorForUnknownProperty", function() { return _builtin_throwErrorForUnknownProperty__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _builtin_POJOPromiser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./builtin/POJOPromiser */ "./src/builtin/POJOPromiser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "POJOPromiser", function() { return _builtin_POJOPromiser__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _builtin_arrayWithNegativeIndices__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./builtin/arrayWithNegativeIndices */ "./src/builtin/arrayWithNegativeIndices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrayWithNegativeIndices", function() { return _builtin_arrayWithNegativeIndices__WEBPACK_IMPORTED_MODULE_12__["default"]; });



/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */












/*
 * Mapping the API properties to the pigretto function.
 */

_pigretto__WEBPACK_IMPORTED_MODULE_1__["default"].pointcuts = {};
[["call", _pointcuts_shorthands_call__WEBPACK_IMPORTED_MODULE_4__["default"]], ["get", _pointcuts_shorthands_get__WEBPACK_IMPORTED_MODULE_5__["default"]], ["set", _pointcuts_shorthands_set__WEBPACK_IMPORTED_MODULE_6__["default"]], ["applyRule", _rules_applyRule__WEBPACK_IMPORTED_MODULE_2__["default"]], ["apply", _pointcuts_shorthands_apply__WEBPACK_IMPORTED_MODULE_7__["default"]], ["constructRule", _rules_constructRule__WEBPACK_IMPORTED_MODULE_3__["default"]], ["construct", _pointcuts_shorthands_construct__WEBPACK_IMPORTED_MODULE_8__["default"]]].map(function (_ref) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      prop = _ref2[0],
      val = _ref2[1];

  return _pigretto__WEBPACK_IMPORTED_MODULE_1__["default"].pointcuts[prop] = val;
});
_pigretto__WEBPACK_IMPORTED_MODULE_1__["default"].builtin = {};
[["lazyObject", _builtin_lazyObject__WEBPACK_IMPORTED_MODULE_9__["default"]], ["throwErrorForUnknownProperty", _builtin_throwErrorForUnknownProperty__WEBPACK_IMPORTED_MODULE_10__["default"]], ["POJOPromiser", _builtin_POJOPromiser__WEBPACK_IMPORTED_MODULE_11__["default"]], ["arrayWithNegativeIndices", _builtin_arrayWithNegativeIndices__WEBPACK_IMPORTED_MODULE_12__["default"]]].map(function (_ref3) {
  var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 2),
      prop = _ref4[0],
      val = _ref4[1];

  return _pigretto__WEBPACK_IMPORTED_MODULE_1__["default"].builtin[prop] = val;
});
/* harmony default export */ __webpack_exports__["default"] = (_pigretto__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ }),

/***/ "./src/pigretto.js":
/*!*************************!*\
  !*** ./src/pigretto.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pigretto; });
/* harmony import */ var _factory_handlerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory/handlerFactory */ "./src/factory/handlerFactory.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Generates a new pigretto proxy object.
 *
 * A pigretto proxy object lets proxying and advising the following operations:
 *
 *    - Calling a method (`call()` method);
 *    - Getting a property (`get()` method);
 *    - Setting a property (`set()` method);
 *    - Calling a function (`[applyRule]` symbol property with `apply()` method);
 *    - Constructing a new object via the "new" keyword (`[constructRule]` symbol property with `construct()`).
 *
 * @param {*} target A function, a constructor function or an object to proxy.
 * @param {Object|Array} proxyRules The proxy rules.
 *                                  This parameter can be:
 *
 *                                      - An object containing proxy rules as keys and pointcuts with advices as values;
 *
 *                                      - An array of rules, each rule either being an object with proxy rules as keys
 *                                        and advices as values or a tuple of two elements: an array of rules of the same
 *                                        type or a single rule as the first element and a pointcut with advices for those rules or
 *                                        that rule as the second element;
 *
 * @return {Proxy} A new proxy object for the given target.
 */

function pigretto(target, proxyRules) {
  var handler = Object(_factory_handlerFactory__WEBPACK_IMPORTED_MODULE_0__["default"])(proxyRules);
  var proxy = new Proxy(target, handler);
  return proxy;
}

/***/ }),

/***/ "./src/pointcuts/FunctionCallPointcut.js":
/*!***********************************************!*\
  !*** ./src/pointcuts/FunctionCallPointcut.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FunctionCallPointcut; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pointcut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pointcut */ "./src/pointcuts/Pointcut.js");
/* harmony import */ var _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../advices/BeforeAdvice */ "./src/advices/BeforeAdvice.js");
/* harmony import */ var _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advices/AfterAdvice */ "./src/advices/AfterAdvice.js");
/* harmony import */ var _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advices/AroundAdvice */ "./src/advices/AroundAdvice.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





var FunctionCallPointcut = /*#__PURE__*/function (_Pointcut) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(FunctionCallPointcut, _Pointcut);

  var _super = _createSuper(FunctionCallPointcut);

  function FunctionCallPointcut() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FunctionCallPointcut);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FunctionCallPointcut, [{
    key: "before",

    /**
     * Register a before advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A function which receives the parameters
     *                            of the underlying proxied function before calling it.
     * @return {FunctionCallPointcut} This pointcut (fluent interface).
     */
    value: function before(adviceFn) {
      this.advices.push(new _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__["default"](adviceFn));
      return this;
    }
    /**
     * Register an after advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive
     *                            the parameters of the proxied function and MUST return a function
     *                            which will receive the return value of the underlying proxied function
     *                            as parameter.
     * @return {FunctionCallPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "after",
    value: function after(adviceFn) {
      this.advices.push(new _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__["default"](adviceFn));
      return this;
    }
    /**
     * Register an around advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive the "proceed"
     *                            function as parameter and which MUST return a function which will receive the parameters
     *                            of the underlying proxied function.
     *                            If the advice function proceeds, the callback given to "proceed" will receive
     *                            the return value to return to the caller or may return another value
     *                            instead of the current return value.
     * @return {FunctionCallPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "around",
    value: function around(adviceFn) {
      this.advices.push(new _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__["default"](adviceFn));
      return this;
    }
  }]);

  return FunctionCallPointcut;
}(_Pointcut__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/pointcuts/MethodCallPointcut.js":
/*!*********************************************!*\
  !*** ./src/pointcuts/MethodCallPointcut.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MethodCallPointcut; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pointcut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pointcut */ "./src/pointcuts/Pointcut.js");
/* harmony import */ var _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../advices/BeforeAdvice */ "./src/advices/BeforeAdvice.js");
/* harmony import */ var _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advices/AfterAdvice */ "./src/advices/AfterAdvice.js");
/* harmony import */ var _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advices/AroundAdvice */ "./src/advices/AroundAdvice.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





var MethodCallPointcut = /*#__PURE__*/function (_Pointcut) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(MethodCallPointcut, _Pointcut);

  var _super = _createSuper(MethodCallPointcut);

  function MethodCallPointcut() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MethodCallPointcut);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MethodCallPointcut, [{
    key: "before",

    /**
     * Register a before advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A function which receives the parameters
     *                            of the underlying proxied method call.
     * @return {MethodCallPointcut} This pointcut (fluent interface).
     */
    value: function before(adviceFn) {
      this.advices.push(new _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__["default"](adviceFn));
      return this;
    }
    /**
     * Register an after advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive
     *                            the parameters of the proxied method and MUST return a function
     *                            which will receive the return value of the underlying proxied function
     *                            as parameter.
     * @return {MethodCallPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "after",
    value: function after(adviceFn) {
      this.advices.push(new _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__["default"](adviceFn));
      return this;
    }
    /**
     * Register an around advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive the "proceed"
     *                            function as parameter and which MUST return a function which will receive the parameters
     *                            of the underlying proxied method.
     *                            If the advice function proceeds by calling the "proceed" function, the callback given to "proceed" will receive
     *                            the return value to return to the caller or may return another value
     *                            instead of the current return value.
     * @return {MethodCallPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "around",
    value: function around(adviceFn) {
      this.advices.push(new _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__["default"](adviceFn));
      return this;
    }
  }]);

  return MethodCallPointcut;
}(_Pointcut__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/pointcuts/ObjectConstructionPointcut.js":
/*!*****************************************************!*\
  !*** ./src/pointcuts/ObjectConstructionPointcut.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ObjectConstructionPointcut; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pointcut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pointcut */ "./src/pointcuts/Pointcut.js");
/* harmony import */ var _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../advices/BeforeAdvice */ "./src/advices/BeforeAdvice.js");
/* harmony import */ var _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advices/AfterAdvice */ "./src/advices/AfterAdvice.js");
/* harmony import */ var _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advices/AroundAdvice */ "./src/advices/AroundAdvice.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





var ObjectConstructionPointcut = /*#__PURE__*/function (_Pointcut) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ObjectConstructionPointcut, _Pointcut);

  var _super = _createSuper(ObjectConstructionPointcut);

  function ObjectConstructionPointcut() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ObjectConstructionPointcut);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ObjectConstructionPointcut, [{
    key: "before",

    /**
     * Register a before advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A function which receives the constructor parameters
     *                            of the underlying proxied object construction.
     * @return {ObjectConstructionPointcut} This pointcut (fluent interface).
     */
    value: function before(adviceFn) {
      this.advices.push(new _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__["default"](adviceFn));
      return this;
    }
    /**
     * Register an after advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive
     *                            the parameters of the proxied object construction and MUST return a function
     *                            which will receive the instance object created by the underlying proxied
     *                            object construction.
     * @return {ObjectConstructionPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "after",
    value: function after(adviceFn) {
      this.advices.push(new _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__["default"](adviceFn));
      return this;
    }
    /**
     * Register an around advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive the "proceed"
     *                            function as parameter and which MUST return a function which will receive the constructor parameters
     *                            of the underlying object construction.
     *                            If the advice function proceeds, the callback given to "proceed" will receive
     *                            the instance object to return to the caller or may return another instance
     *                            instead of the current one.
     * @return {ObjectConstructionPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "around",
    value: function around(adviceFn) {
      this.advices.push(new _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__["default"](adviceFn));
      return this;
    }
  }]);

  return ObjectConstructionPointcut;
}(_Pointcut__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/pointcuts/Pointcut.js":
/*!***********************************!*\
  !*** ./src/pointcuts/Pointcut.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pointcut; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Pointcut = function Pointcut() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pointcut);

  _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(this, "advices", []);
};



/***/ }),

/***/ "./src/pointcuts/PropertyGettingPointcut.js":
/*!**************************************************!*\
  !*** ./src/pointcuts/PropertyGettingPointcut.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertyGettingPointcut; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pointcut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pointcut */ "./src/pointcuts/Pointcut.js");
/* harmony import */ var _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../advices/BeforeAdvice */ "./src/advices/BeforeAdvice.js");
/* harmony import */ var _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advices/AfterAdvice */ "./src/advices/AfterAdvice.js");
/* harmony import */ var _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advices/AroundAdvice */ "./src/advices/AroundAdvice.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





var PropertyGettingPointcut = /*#__PURE__*/function (_Pointcut) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PropertyGettingPointcut, _Pointcut);

  var _super = _createSuper(PropertyGettingPointcut);

  function PropertyGettingPointcut() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertyGettingPointcut);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertyGettingPointcut, [{
    key: "before",

    /**
     * Register a before advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A function to execute before getting a property.
     * @return {PropertyGettingPointcut} This pointcut (fluent interface).
     */
    value: function before(adviceFn) {
      this.advices.push(new _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__["default"](adviceFn));
      return this;
    }
    /**
     * Register an after advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function.
     *                            A function which will receive the current value of the property.
     * @return {PropertyGettingPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "after",
    value: function after(adviceFn) {
      this.advices.push(new _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__["default"](adviceFn));
      return this;
    }
    /**
     * Register an around advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive the "proceed"
     *                            function as parameter and which MUST return a function to execute before getting a property.
     *                            If the advice function proceeds, the callback given to "proceed" will receive
     *                            the value of the property to return to the caller or may return another value
     *                            to return to the caller instead of the one passed as argument.
     * @return {PropertyGettingPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "around",
    value: function around(adviceFn) {
      this.advices.push(new _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__["default"](adviceFn));
      return this;
    }
  }]);

  return PropertyGettingPointcut;
}(_Pointcut__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/pointcuts/PropertySettingPointcut.js":
/*!**************************************************!*\
  !*** ./src/pointcuts/PropertySettingPointcut.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PropertySettingPointcut; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Pointcut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pointcut */ "./src/pointcuts/Pointcut.js");
/* harmony import */ var _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../advices/BeforeAdvice */ "./src/advices/BeforeAdvice.js");
/* harmony import */ var _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../advices/AfterAdvice */ "./src/advices/AfterAdvice.js");
/* harmony import */ var _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../advices/AroundAdvice */ "./src/advices/AroundAdvice.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





var PropertySettingPointcut = /*#__PURE__*/function (_Pointcut) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(PropertySettingPointcut, _Pointcut);

  var _super = _createSuper(PropertySettingPointcut);

  function PropertySettingPointcut() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, PropertySettingPointcut);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(PropertySettingPointcut, [{
    key: "before",

    /**
     * Register a before advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A function to execute before setting a property
     *                            which will receive the previous property value.
     * @return {PropertySettingPointcut} This pointcut (fluent interface).
     */
    value: function before(adviceFn) {
      this.advices.push(new _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_6__["default"](adviceFn));
      return this;
    }
    /**
     * Register an after advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive
     *                            the previous value of the property and MUST return a new function
     *                            which will receive the new property value set on the object's property.
     * @return {PropertySettingPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "after",
    value: function after(adviceFn) {
      this.advices.push(new _advices_AfterAdvice__WEBPACK_IMPORTED_MODULE_7__["default"](adviceFn));
      return this;
    }
    /**
     * Register an around advice for this pointcut.
     *
     * @param {Function} adviceFn The advice function. A higher-order function which will receive the "proceed"
     *                            function as parameter and which MUST return a function which will receive the previous value of the property.
     *                            If the advice function proceeds, the callback given to "proceed" will receive
     *                            the new value of the property to return in order to set it on the object
     *                            or may return another value to set it on the object's property.
     * @return {PropertySettingPointcut} This pointcut (fluent interface).
     */

  }, {
    key: "around",
    value: function around(adviceFn) {
      this.advices.push(new _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_8__["default"](adviceFn));
      return this;
    }
  }]);

  return PropertySettingPointcut;
}(_Pointcut__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/pointcuts/shorthands/apply.js":
/*!*******************************************!*\
  !*** ./src/pointcuts/shorthands/apply.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return apply; });
/* harmony import */ var _FunctionCallPointcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../FunctionCallPointcut */ "./src/pointcuts/FunctionCallPointcut.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns a new function call pointcut.
 *
 * @return {FunctionCallPointcut} A function call pointcut.
 */

function apply() {
  return new _FunctionCallPointcut__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

/***/ }),

/***/ "./src/pointcuts/shorthands/call.js":
/*!******************************************!*\
  !*** ./src/pointcuts/shorthands/call.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return call; });
/* harmony import */ var _MethodCallPointcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../MethodCallPointcut */ "./src/pointcuts/MethodCallPointcut.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns a new method call pointcut.
 *
 * @return {MethodCallPointcut} A method call pointcut.
 */

function call() {
  return new _MethodCallPointcut__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

/***/ }),

/***/ "./src/pointcuts/shorthands/construct.js":
/*!***********************************************!*\
  !*** ./src/pointcuts/shorthands/construct.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return construct; });
/* harmony import */ var _ObjectConstructionPointcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ObjectConstructionPointcut */ "./src/pointcuts/ObjectConstructionPointcut.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns a new object construction pointcut.
 *
 * @return {ObjectConstructionPointcut} An object construction pointcut.
 */

function construct() {
  return new _ObjectConstructionPointcut__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

/***/ }),

/***/ "./src/pointcuts/shorthands/get.js":
/*!*****************************************!*\
  !*** ./src/pointcuts/shorthands/get.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get; });
/* harmony import */ var _PropertyGettingPointcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PropertyGettingPointcut */ "./src/pointcuts/PropertyGettingPointcut.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns a new property getting pointcut.
 *
 * @return {PropertyGettingPointcut} A property getting pointcut.
 */

function get() {
  return new _PropertyGettingPointcut__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

/***/ }),

/***/ "./src/pointcuts/shorthands/set.js":
/*!*****************************************!*\
  !*** ./src/pointcuts/shorthands/set.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return set; });
/* harmony import */ var _PropertySettingPointcut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PropertySettingPointcut */ "./src/pointcuts/PropertySettingPointcut.js");
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Returns a new property setting pointcut.
 *
 * @return {PropertySettingPointcut} A property setting pointcut.
 */

function set() {
  return new _PropertySettingPointcut__WEBPACK_IMPORTED_MODULE_0__["default"]();
}

/***/ }),

/***/ "./src/rules/ExactRule.js":
/*!********************************!*\
  !*** ./src/rules/ExactRule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExactRule; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var ExactRule = /*#__PURE__*/function (_Rule) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ExactRule, _Rule);

  var _super = _createSuper(ExactRule);

  function ExactRule(property) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ExactRule);

    _this = _super.call(this);
    _this.property = property;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ExactRule, [{
    key: "matches",
    value: function matches(effectiveProperty) {
      return this.property === effectiveProperty;
    }
  }]);

  return ExactRule;
}(_Rule__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/rules/ORedRule.js":
/*!*******************************!*\
  !*** ./src/rules/ORedRule.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ORedRule; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.js");






function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var ORedRule = /*#__PURE__*/function (_Rule) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(ORedRule, _Rule);

  var _super = _createSuper(ORedRule);

  function ORedRule(rules) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ORedRule);

    _this = _super.call(this);
    _this.rules = rules;
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ORedRule, [{
    key: "matches",
    value: function matches(effectivePropertyName) {
      var _iterator = _createForOfIteratorHelper(this.rules),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var rule = _step.value;

          if (rule.matches(effectivePropertyName)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return false;
    }
  }]);

  return ORedRule;
}(_Rule__WEBPACK_IMPORTED_MODULE_5__["default"]);



/***/ }),

/***/ "./src/rules/RegexRule.js":
/*!********************************!*\
  !*** ./src/rules/RegexRule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegexRule; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Rule */ "./src/rules/Rule.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var RegexRule = /*#__PURE__*/function (_Rule) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(RegexRule, _Rule);

  var _super = _createSuper(RegexRule);

  function RegexRule(regex) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RegexRule);

    _this = _super.call(this); // This line prevents interference with the statefulness of the RegExp object.

    _this.regex = new RegExp(regex);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RegexRule, [{
    key: "matches",
    value: function matches(effectivePropertyName) {
      // This line resets the state of the RegExp object.
      this.regex.lastIndex = 0;
      return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(effectivePropertyName) !== "symbol" && this.regex.test(effectivePropertyName);
    }
  }]);

  return RegexRule;
}(_Rule__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/rules/Rule.js":
/*!***************************!*\
  !*** ./src/rules/Rule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rule; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var Rule = function Rule() {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Rule);
};



/***/ }),

/***/ "./src/rules/applyRule.js":
/*!********************************!*\
  !*** ./src/rules/applyRule.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @type {Symbol}
 */
var applyRule = Symbol("applyRule");
/* harmony default export */ __webpack_exports__["default"] = (applyRule);

/***/ }),

/***/ "./src/rules/constructRule.js":
/*!************************************!*\
  !*** ./src/rules/constructRule.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @type {Symbol}
 */
var constructRule = Symbol("constructRule");
/* harmony default export */ __webpack_exports__["default"] = (constructRule);

/***/ }),

/***/ "./src/rules/parser/parseRule.js":
/*!***************************************!*\
  !*** ./src/rules/parser/parseRule.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseRule; });
/* harmony import */ var declarative_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! declarative-factory */ "./node_modules/declarative-factory/src/index.js");
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");
/* harmony import */ var _ORedRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ORedRule */ "./src/rules/ORedRule.js");
/* harmony import */ var _RegexRule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../RegexRule */ "./src/rules/RegexRule.js");
/* harmony import */ var _ExactRule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ExactRule */ "./src/rules/ExactRule.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */





var REGEX_STRING_TOKEN = "/";

var regexRule = function regexRule(regex) {
  return new _RegexRule__WEBPACK_IMPORTED_MODULE_3__["default"](regex);
};

var exactRule = function exactRule(property) {
  return new _ExactRule__WEBPACK_IMPORTED_MODULE_4__["default"](property);
};

var parseSingle = function parseSingle(ruleToParse) {
  var factoryParam = ruleToParse;
  var factory = Object(declarative_factory__WEBPACK_IMPORTED_MODULE_0__["default"])([[function () {
    return ruleToParse instanceof RegExp;
  }, regexRule], [function () {
    if (typeof ruleToParse !== "string") {
      return false;
    }

    var initialRegexStringToken = ruleToParse.indexOf(REGEX_STRING_TOKEN);
    var lastRegexStringToken = ruleToParse.lastIndexOf(REGEX_STRING_TOKEN);

    if (initialRegexStringToken === 0 && lastRegexStringToken > 0) {
      var stringLiteralRegex = ruleToParse.substring(1, lastRegexStringToken);
      var flags = ruleToParse.substring(lastRegexStringToken + 1) || void 0;
      factoryParam = new RegExp(stringLiteralRegex, flags);
      return true;
    }

    return false;
  }, regexRule], exactRule]);
  return factory(factoryParam);
};

var parseMultiple = function parseMultiple(rulesToParse) {
  var rules = [];

  var _iterator = _createForOfIteratorHelper(rulesToParse),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var ruleToParse = _step.value;
      var rule = parseSingle(ruleToParse);
      rules.push(rule);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return new _ORedRule__WEBPACK_IMPORTED_MODULE_2__["default"](rules);
};

function parseRule(rule) {
  var parse = Object(declarative_factory__WEBPACK_IMPORTED_MODULE_0__["default"])([[Object(js_utl__WEBPACK_IMPORTED_MODULE_1__["isArray"])(rule), parseMultiple], parseSingle]);
  return parse(rule);
}

/***/ }),

/***/ "./src/rules/rulesGenerator.js":
/*!*************************************!*\
  !*** ./src/rules/rulesGenerator.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rulesGenerator; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var declarative_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! declarative-factory */ "./node_modules/declarative-factory/src/index.js");
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");



var _marked = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(rulesGenerator);

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



var objectRulesGenerator = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function objectRulesGenerator(proxyRules) {
  var ruleKeys, _iterator, _step, ruleKey, pointcut;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function objectRulesGenerator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          ruleKeys = Reflect.ownKeys(proxyRules);
          _iterator = _createForOfIteratorHelper(ruleKeys);
          _context.prev = 2;

          _iterator.s();

        case 4:
          if ((_step = _iterator.n()).done) {
            _context.next = 11;
            break;
          }

          ruleKey = _step.value;
          pointcut = proxyRules[ruleKey];
          _context.next = 9;
          return {
            rule: ruleKey,
            pointcut: pointcut
          };

        case 9:
          _context.next = 4;
          break;

        case 11:
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](2);

          _iterator.e(_context.t0);

        case 16:
          _context.prev = 16;

          _iterator.f();

          return _context.finish(16);

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, objectRulesGenerator, null, [[2, 13, 16, 19]]);
});

var arrayRulesGenerator = /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function arrayRulesGenerator(proxyRules) {
  var _iterator2, _step2, proxyRule, _proxyRule, rule, pointcut;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function arrayRulesGenerator$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _iterator2 = _createForOfIteratorHelper(proxyRules);
          _context2.prev = 1;

          _iterator2.s();

        case 3:
          if ((_step2 = _iterator2.n()).done) {
            _context2.next = 14;
            break;
          }

          proxyRule = _step2.value;

          if (!Object(js_utl__WEBPACK_IMPORTED_MODULE_3__["isArray"])(proxyRule)) {
            _context2.next = 11;
            break;
          }

          // Tuple.
          _proxyRule = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(proxyRule, 2), rule = _proxyRule[0], pointcut = _proxyRule[1];
          _context2.next = 9;
          return {
            rule: rule,
            pointcut: pointcut
          };

        case 9:
          _context2.next = 12;
          break;

        case 11:
          return _context2.delegateYield(objectRulesGenerator(proxyRule), "t0", 12);

        case 12:
          _context2.next = 3;
          break;

        case 14:
          _context2.next = 19;
          break;

        case 16:
          _context2.prev = 16;
          _context2.t1 = _context2["catch"](1);

          _iterator2.e(_context2.t1);

        case 19:
          _context2.prev = 19;

          _iterator2.f();

          return _context2.finish(19);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, arrayRulesGenerator, null, [[1, 16, 19, 22]]);
});
/**
 * A generator for proxy rules.
 *
 * @param {Object|Array} proxyRules An array of proxy rules or object with rules as keys.
 * @yields {Object} The next rule object, having two keys:
 *
 *                      - rule: The rule, as-is (as given by the client code);
 *                      - pointcut: The pointcut associated with that rule.
 *
 */


function rulesGenerator(proxyRules) {
  var generator;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function rulesGenerator$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          generator = Object(declarative_factory__WEBPACK_IMPORTED_MODULE_2__["default"])([[Object(js_utl__WEBPACK_IMPORTED_MODULE_3__["isArray"])(proxyRules), arrayRulesGenerator], objectRulesGenerator]);
          return _context3.delegateYield(generator(proxyRules), "t0", 2);

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  }, _marked);
}

/***/ }),

/***/ "./src/trap/Trap.js":
/*!**************************!*\
  !*** ./src/trap/Trap.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trap; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var declarative_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! declarative-factory */ "./node_modules/declarative-factory/src/index.js");
/* harmony import */ var _pointcuts_MethodCallPointcut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pointcuts/MethodCallPointcut */ "./src/pointcuts/MethodCallPointcut.js");
/* harmony import */ var _pointcuts_PropertyGettingPointcut__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pointcuts/PropertyGettingPointcut */ "./src/pointcuts/PropertyGettingPointcut.js");
/* harmony import */ var _pointcuts_PropertySettingPointcut__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pointcuts/PropertySettingPointcut */ "./src/pointcuts/PropertySettingPointcut.js");
/* harmony import */ var _pointcuts_FunctionCallPointcut__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pointcuts/FunctionCallPointcut */ "./src/pointcuts/FunctionCallPointcut.js");
/* harmony import */ var _pointcuts_ObjectConstructionPointcut__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pointcuts/ObjectConstructionPointcut */ "./src/pointcuts/ObjectConstructionPointcut.js");
/* harmony import */ var _rules_ExactRule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../rules/ExactRule */ "./src/rules/ExactRule.js");
/* harmony import */ var _rules_applyRule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../rules/applyRule */ "./src/rules/applyRule.js");
/* harmony import */ var _rules_constructRule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../rules/constructRule */ "./src/rules/constructRule.js");
/* harmony import */ var _pointcuts_shorthands_apply__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pointcuts/shorthands/apply */ "./src/pointcuts/shorthands/apply.js");
/* harmony import */ var _pointcuts_shorthands_construct__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pointcuts/shorthands/construct */ "./src/pointcuts/shorthands/construct.js");
/* harmony import */ var _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../advices/BeforeAdvice */ "./src/advices/BeforeAdvice.js");
/* harmony import */ var _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../advices/AroundAdvice */ "./src/advices/AroundAdvice.js");
/* harmony import */ var _executors_CallTrapExecutor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./executors/CallTrapExecutor */ "./src/trap/executors/CallTrapExecutor.js");
/* harmony import */ var _executors_GetTrapExecutor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./executors/GetTrapExecutor */ "./src/trap/executors/GetTrapExecutor.js");
/* harmony import */ var _executors_SetTrapExecutor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./executors/SetTrapExecutor */ "./src/trap/executors/SetTrapExecutor.js");
/* harmony import */ var _executors_ApplyTrapExecutor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./executors/ApplyTrapExecutor */ "./src/trap/executors/ApplyTrapExecutor.js");
/* harmony import */ var _executors_ConstructTrapExecutor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./executors/ConstructTrapExecutor */ "./src/trap/executors/ConstructTrapExecutor.js");
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */




















var Trap = /*#__PURE__*/function () {
  function Trap() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Trap);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "advices", {
      // Requires matching (get trap). Requires distribution.
      call: [],
      // Requires matching (get trap). Requires distribution.
      get: [],
      // Requires matching (set trap). Requires distribution.
      set: [],
      // Does not require matching (apply trap). Requires distribution.
      apply: [],
      // Does not require matching (construct trap). Requires distribution.
      construct: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "distributedAdvices", {
      call: {
        before: void 0,
        around: void 0,
        after: void 0
      },
      get: {
        before: void 0,
        around: void 0,
        after: void 0
      },
      set: {
        before: void 0,
        around: void 0,
        after: void 0
      },
      apply: {
        before: void 0,
        around: void 0,
        after: void 0
      },
      construct: {
        before: void 0,
        around: void 0,
        after: void 0
      }
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "matchedDistributedAdvices", {
      call: new Map(),
      get: new Map(),
      set: new Map()
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "trapExecutors", {
      call: new _executors_CallTrapExecutor__WEBPACK_IMPORTED_MODULE_16__["default"](),
      get: new _executors_GetTrapExecutor__WEBPACK_IMPORTED_MODULE_17__["default"](),
      set: new _executors_SetTrapExecutor__WEBPACK_IMPORTED_MODULE_18__["default"](),
      apply: new _executors_ApplyTrapExecutor__WEBPACK_IMPORTED_MODULE_19__["default"](),
      construct: new _executors_ConstructTrapExecutor__WEBPACK_IMPORTED_MODULE_20__["default"]()
    });
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trap, [{
    key: "hasAtLeastOneAdviceOfPointcutType",

    /**
     * @private
     */
    value: function hasAtLeastOneAdviceOfPointcutType(pointcutType) {
      return !!this.advices[pointcutType].length;
    }
    /**
     * @private
     */

  }, {
    key: "addAdvices",
    value: function addAdvices(pointcutType, rule) {
      var _this = this;

      var advices = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      advices.map(function (advice) {
        return _this.advices[pointcutType].push({
          rule: rule,
          advice: advice
        });
      });
    }
    /**
     * @private
     */

  }, {
    key: "lazilyDistributeAdvices",
    value: function lazilyDistributeAdvices(pointcutType) {
      var _this2 = this;

      if (Object(js_utl__WEBPACK_IMPORTED_MODULE_21__["isUndefined"])(this.distributedAdvices[pointcutType].before)) {
        this.distributedAdvices[pointcutType].before = [];
        this.distributedAdvices[pointcutType].around = [];
        this.distributedAdvices[pointcutType].after = [];

        var _iterator = _createForOfIteratorHelper(this.advices[pointcutType]),
            _step;

        try {
          var _loop = function _loop() {
            var _step$value = _step.value,
                rule = _step$value.rule,
                advice = _step$value.advice;
            var subKey = Object(declarative_factory__WEBPACK_IMPORTED_MODULE_3__["default"])([[function () {
              return advice instanceof _advices_BeforeAdvice__WEBPACK_IMPORTED_MODULE_14__["default"];
            }, "before"], [function () {
              return advice instanceof _advices_AroundAdvice__WEBPACK_IMPORTED_MODULE_15__["default"];
            }, "around"], "after"]);

            _this2.distributedAdvices[pointcutType][subKey].push({
              rule: rule,
              advice: advice
            });
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
    /**
     * For "call", "get" and "set" advices.
     *
     * @private
     */

  }, {
    key: "lazilyMatchAdvices",
    value: function lazilyMatchAdvices(pointcutType, property) {
      this.lazilyDistributeAdvices(pointcutType);
      var map = this.matchedDistributedAdvices[pointcutType];

      if (!map.has(property)) {
        var node = {
          before: [],
          around: [],
          after: []
        };
        map.set(property, node);
        var beforeAdvices = this.distributedAdvices[pointcutType].before;
        var aroundAdvices = this.distributedAdvices[pointcutType].around;
        var afterAdvices = this.distributedAdvices[pointcutType].after;

        var match = function match(advices) {
          return function (key) {
            var _iterator2 = _createForOfIteratorHelper(advices),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _step2$value = _step2.value,
                    rule = _step2$value.rule,
                    advice = _step2$value.advice;
                var matches = rule.matches(property);

                if (matches) {
                  node[key].push({
                    rule: rule,
                    advice: advice
                  });
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          };
        };

        match(beforeAdvices)("before");
        match(aroundAdvices)("around");
        match(afterAdvices)("after");
      }
    }
    /**
     * Adds a pointcut and its associated rule to this trap.
     * If a pointcut is of an unknown type, it will be ignored.
     *
     * @param {Pointcut|Function} pointcut The pointcut or a function (for implicit apply and construct pointcuts).
     * @param {Rule} rule The rule.
     * @return {Trap} This trap object.
     */

  }, {
    key: "addPointcutRule",
    value: function addPointcutRule(pointcut, rule) {
      var isImplicitBeforeAdvice = function isImplicitBeforeAdvice() {
        return typeof pointcut === "function" && rule instanceof _rules_ExactRule__WEBPACK_IMPORTED_MODULE_9__["default"];
      };

      var pointcutType = Object(declarative_factory__WEBPACK_IMPORTED_MODULE_3__["default"])([[function () {
        return pointcut instanceof _pointcuts_MethodCallPointcut__WEBPACK_IMPORTED_MODULE_4__["default"];
      }, "call"], [function () {
        return pointcut instanceof _pointcuts_PropertyGettingPointcut__WEBPACK_IMPORTED_MODULE_5__["default"];
      }, "get"], [function () {
        return pointcut instanceof _pointcuts_PropertySettingPointcut__WEBPACK_IMPORTED_MODULE_6__["default"];
      }, "set"], [function () {
        var isImplicit = isImplicitBeforeAdvice() && rule.property === _rules_applyRule__WEBPACK_IMPORTED_MODULE_10__["default"];

        if (isImplicit || pointcut instanceof _pointcuts_FunctionCallPointcut__WEBPACK_IMPORTED_MODULE_7__["default"]) {
          if (isImplicit) {
            pointcut = Object(_pointcuts_shorthands_apply__WEBPACK_IMPORTED_MODULE_12__["default"])().before(pointcut);
          }

          return true;
        }

        return false;
      }, "apply"], [function () {
        var isImplicit = isImplicitBeforeAdvice() && rule.property === _rules_constructRule__WEBPACK_IMPORTED_MODULE_11__["default"];

        if (isImplicit || pointcut instanceof _pointcuts_ObjectConstructionPointcut__WEBPACK_IMPORTED_MODULE_8__["default"]) {
          if (isImplicit) {
            pointcut = Object(_pointcuts_shorthands_construct__WEBPACK_IMPORTED_MODULE_13__["default"])().before(pointcut);
          }

          return true;
        }

        return false;
      }, "construct"]]);

      if (pointcutType) {
        var _pointcut = pointcut,
            advices = _pointcut.advices;
        this.addAdvices(pointcutType, rule, advices);
      }

      return this;
    }
  }, {
    key: "hasGets",
    value: function hasGets() {
      return this.hasAtLeastOneAdviceOfPointcutType("call") || this.hasAtLeastOneAdviceOfPointcutType("get");
    }
  }, {
    key: "hasSets",
    value: function hasSets() {
      return this.hasAtLeastOneAdviceOfPointcutType("set");
    }
  }, {
    key: "hasApplies",
    value: function hasApplies() {
      return this.hasAtLeastOneAdviceOfPointcutType("apply");
    }
  }, {
    key: "hasConstructs",
    value: function hasConstructs() {
      return this.hasAtLeastOneAdviceOfPointcutType("construct");
    }
  }, {
    key: "get",
    value: function get(target, property, receiver) {
      // Method call and property access (getting) advices.
      this.lazilyMatchAdvices("get", property);
      this.lazilyMatchAdvices("call", property);

      var _this$matchedDistribu = this.matchedDistributedAdvices.get.get(property),
          getBefore = _this$matchedDistribu.before,
          getAround = _this$matchedDistribu.around,
          getAfter = _this$matchedDistribu.after;

      var propertyValue = this.trapExecutors.get.execute([target, property, receiver], getBefore, getAround, getAfter);

      var _this$matchedDistribu2 = this.matchedDistributedAdvices.call.get(property),
          callBefore = _this$matchedDistribu2.before,
          callAround = _this$matchedDistribu2.around,
          callAfter = _this$matchedDistribu2.after;

      var returnValue = this.trapExecutors.call.execute([target, property, receiver, propertyValue], callBefore, callAround, callAfter);
      return returnValue;
    }
  }, {
    key: "set",
    value: function set(target, property, value, receiver) {
      // Property access (setting) advices.
      this.lazilyMatchAdvices("set", property);

      var _this$matchedDistribu3 = this.matchedDistributedAdvices.set.get(property),
          before = _this$matchedDistribu3.before,
          around = _this$matchedDistribu3.around,
          after = _this$matchedDistribu3.after;

      return this.trapExecutors.set.execute([target, property, value, receiver], before, around, after);
    }
  }, {
    key: "apply",
    value: function apply(target, thisArg, argumentsList) {
      // Function call advices.
      this.lazilyDistributeAdvices("apply");
      var _this$distributedAdvi = this.distributedAdvices.apply,
          before = _this$distributedAdvi.before,
          around = _this$distributedAdvi.around,
          after = _this$distributedAdvi.after;
      return this.trapExecutors.apply.execute([target, thisArg, argumentsList], before, around, after);
    }
  }, {
    key: "construct",
    value: function construct(target, argumentsList, newTarget) {
      // Object construction via the "new" keyword advices.
      this.lazilyDistributeAdvices("construct");
      var _this$distributedAdvi2 = this.distributedAdvices.construct,
          before = _this$distributedAdvi2.before,
          around = _this$distributedAdvi2.around,
          after = _this$distributedAdvi2.after;
      return this.trapExecutors.construct.execute([target, argumentsList, newTarget], before, around, after);
    }
  }]);

  return Trap;
}();



/***/ }),

/***/ "./src/trap/executors/ApplyTrapExecutor.js":
/*!*************************************************!*\
  !*** ./src/trap/executors/ApplyTrapExecutor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TrapExecutor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TrapExecutor */ "./src/trap/executors/TrapExecutor.js");
/* harmony import */ var _reflect_reflectApply__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reflect/reflectApply */ "./src/trap/reflect/reflectApply.js");
/* harmony import */ var _behaviours_withFunctionTrapExecutor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviours/withFunctionTrapExecutor */ "./src/trap/executors/behaviours/withFunctionTrapExecutor.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviours_withFunctionTrapExecutor__WEBPACK_IMPORTED_MODULE_9__["withFunctionTrapExecutor"])( /*#__PURE__*/function (_TrapExecutor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ApplyTrapExecutor, _TrapExecutor);

  var _super = _createSuper(ApplyTrapExecutor);

  function ApplyTrapExecutor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ApplyTrapExecutor);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ApplyTrapExecutor, [{
    key: "getTrapArgsArgumentsListIndex",
    value: function getTrapArgsArgumentsListIndex() {
      return 2;
    }
  }, {
    key: "executeBeforeAdvice",
    value: function executeBeforeAdvice(_ref, advice, rule) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 3),
          target = _ref2[0],
          thisArg = _ref2[1],
          argumentsList = _ref2[2];

      var context = {
        target: target,
        thisArg: thisArg,
        rule: rule
      };
      advice.fn.apply(context, argumentsList);
    }
  }, {
    key: "executeAroundAdvice",
    value: function executeAroundAdvice(_ref3, advice, rule, proceed) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 3),
          target = _ref4[0],
          thisArg = _ref4[1],
          argumentsList = _ref4[2];

      var context = {
        target: target,
        thisArg: thisArg,
        rule: rule
      };
      return advice.fn.call(context, proceed).apply(context, argumentsList);
    }
  }, {
    key: "executeAfterAdvice",
    value: function executeAfterAdvice(_ref5, advice, rule, returnValue) {
      var _advice$fn;

      var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 3),
          target = _ref6[0],
          thisArg = _ref6[1],
          argumentsList = _ref6[2];

      var context = {
        target: target,
        thisArg: thisArg,
        rule: rule
      };

      (_advice$fn = advice.fn).call.apply(_advice$fn, [context].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argumentsList))).apply(context, [returnValue]);
    }
  }, {
    key: "performUnderlyingOperation",
    value: function performUnderlyingOperation(_ref7) {
      var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 3),
          target = _ref8[0],
          thisArg = _ref8[1],
          argumentsList = _ref8[2];

      var returnValue = Object(_reflect_reflectApply__WEBPACK_IMPORTED_MODULE_8__["default"])(target, thisArg, argumentsList);
      return returnValue;
    }
  }, {
    key: "executeProceedCallback",
    value: function executeProceedCallback(_ref9, rule, returnValue, callback) {
      var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref9, 3),
          target = _ref10[0],
          thisArg = _ref10[1],
          argumentsList = _ref10[2];

      var context = {
        target: target,
        thisArg: thisArg,
        rule: rule,
        argumentsList: argumentsList
      };
      return callback.apply(context, [returnValue]);
    }
  }]);

  return ApplyTrapExecutor;
}(_TrapExecutor__WEBPACK_IMPORTED_MODULE_7__["default"])));

/***/ }),

/***/ "./src/trap/executors/CallTrapExecutor.js":
/*!************************************************!*\
  !*** ./src/trap/executors/CallTrapExecutor.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TrapExecutor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TrapExecutor */ "./src/trap/executors/TrapExecutor.js");
/* harmony import */ var _behaviours_withFunctionTrapExecutor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviours/withFunctionTrapExecutor */ "./src/trap/executors/behaviours/withFunctionTrapExecutor.js");
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviours_withFunctionTrapExecutor__WEBPACK_IMPORTED_MODULE_9__["withFunctionTrapExecutor"])( /*#__PURE__*/function (_TrapExecutor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CallTrapExecutor, _TrapExecutor);

  var _super = _createSuper(CallTrapExecutor);

  function CallTrapExecutor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CallTrapExecutor);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CallTrapExecutor, [{
    key: "getTrapArgsArgumentsListIndex",
    value: function getTrapArgsArgumentsListIndex() {
      return 4;
    }
  }, {
    key: "execute",
    value: function execute(_ref, before, around, after) {
      var _this = this;

      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 4),
          target = _ref2[0],
          property = _ref2[1],
          receiver = _ref2[2],
          propertyValue = _ref2[3];

      if (typeof propertyValue === "function" && [before, around, after].some(function (advices) {
        return !Object(js_utl__WEBPACK_IMPORTED_MODULE_10__["isEmpty"])(advices);
      })) {
        var superExecute = function superExecute(trapArgs) {
          return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(CallTrapExecutor.prototype), "execute", _this).call(_this, trapArgs, before, around, after);
        };

        var wrapperFn = function wrapperFn() {
          var boundThis;

          if (this !== receiver) {
            boundThis = this;
          } else {
            boundThis = target;
          }

          propertyValue = propertyValue.bind(boundThis);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var trapArgs = [target, property, receiver, propertyValue, args];
          return superExecute(trapArgs);
        };

        return wrapperFn;
      }

      return propertyValue;
    }
  }, {
    key: "executeBeforeAdvice",
    value: function executeBeforeAdvice(_ref3, advice, rule) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 5),
          target = _ref4[0],
          property = _ref4[1],
          receiver = _ref4[2],
          argumentsList = _ref4[4];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };
      advice.fn.apply(context, argumentsList);
    }
  }, {
    key: "executeAroundAdvice",
    value: function executeAroundAdvice(_ref5, advice, rule, proceed) {
      var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 5),
          target = _ref6[0],
          property = _ref6[1],
          receiver = _ref6[2],
          argumentsList = _ref6[4];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };
      return advice.fn.call(context, proceed).apply(context, argumentsList);
    }
  }, {
    key: "executeAfterAdvice",
    value: function executeAfterAdvice(_ref7, advice, rule, returnValue) {
      var _advice$fn;

      var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 5),
          target = _ref8[0],
          property = _ref8[1],
          receiver = _ref8[2],
          argumentsList = _ref8[4];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };

      (_advice$fn = advice.fn).call.apply(_advice$fn, [context].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argumentsList))).apply(context, [returnValue]);
    }
  }, {
    key: "performUnderlyingOperation",
    value: function performUnderlyingOperation(_ref9) {
      var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref9, 5),
          originalFn = _ref10[3],
          argumentsList = _ref10[4];

      var returnValue = originalFn.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argumentsList));
      return returnValue;
    }
  }, {
    key: "executeProceedCallback",
    value: function executeProceedCallback(_ref11, rule, returnValue, callback) {
      var _ref12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref11, 5),
          target = _ref12[0],
          property = _ref12[1],
          receiver = _ref12[2],
          argumentsList = _ref12[4];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule,
        argumentsList: argumentsList
      };
      return callback.apply(context, [returnValue]);
    }
  }]);

  return CallTrapExecutor;
}(_TrapExecutor__WEBPACK_IMPORTED_MODULE_8__["default"])));

/***/ }),

/***/ "./src/trap/executors/ConstructTrapExecutor.js":
/*!*****************************************************!*\
  !*** ./src/trap/executors/ConstructTrapExecutor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _TrapExecutor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TrapExecutor */ "./src/trap/executors/TrapExecutor.js");
/* harmony import */ var _reflect_reflectConstruct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../reflect/reflectConstruct */ "./src/trap/reflect/reflectConstruct.js");
/* harmony import */ var _behaviours_withFunctionTrapExecutor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./behaviours/withFunctionTrapExecutor */ "./src/trap/executors/behaviours/withFunctionTrapExecutor.js");








function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



/* harmony default export */ __webpack_exports__["default"] = (Object(_behaviours_withFunctionTrapExecutor__WEBPACK_IMPORTED_MODULE_9__["withFunctionTrapExecutor"])( /*#__PURE__*/function (_TrapExecutor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(ConstructTrapExecutor, _TrapExecutor);

  var _super = _createSuper(ConstructTrapExecutor);

  function ConstructTrapExecutor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ConstructTrapExecutor);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(ConstructTrapExecutor, [{
    key: "getTrapArgsArgumentsListIndex",
    value: function getTrapArgsArgumentsListIndex() {
      return 1;
    }
  }, {
    key: "executeBeforeAdvice",
    value: function executeBeforeAdvice(_ref, advice, rule) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 3),
          target = _ref2[0],
          argumentsList = _ref2[1],
          newTarget = _ref2[2];

      var context = {
        target: target,
        newTarget: newTarget,
        rule: rule
      };
      advice.fn.apply(context, argumentsList);
    }
  }, {
    key: "executeAroundAdvice",
    value: function executeAroundAdvice(_ref3, advice, rule, proceed) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 3),
          target = _ref4[0],
          argumentsList = _ref4[1],
          newTarget = _ref4[2];

      var context = {
        target: target,
        newTarget: newTarget,
        rule: rule
      };
      return advice.fn.call(context, proceed).apply(context, argumentsList);
    }
  }, {
    key: "executeAfterAdvice",
    value: function executeAfterAdvice(_ref5, advice, rule, instance) {
      var _advice$fn;

      var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 3),
          target = _ref6[0],
          argumentsList = _ref6[1],
          newTarget = _ref6[2];

      var context = {
        target: target,
        newTarget: newTarget,
        rule: rule
      };

      (_advice$fn = advice.fn).call.apply(_advice$fn, [context].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(argumentsList))).apply(context, [instance]);
    }
  }, {
    key: "performUnderlyingOperation",
    value: function performUnderlyingOperation(_ref7) {
      var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 3),
          target = _ref8[0],
          argumentsList = _ref8[1],
          newTarget = _ref8[2];

      var instance = Object(_reflect_reflectConstruct__WEBPACK_IMPORTED_MODULE_8__["default"])(target, argumentsList, newTarget);
      return instance;
    }
  }, {
    key: "executeProceedCallback",
    value: function executeProceedCallback(_ref9, rule, instance, callback) {
      var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref9, 3),
          target = _ref10[0],
          argumentsList = _ref10[1],
          newTarget = _ref10[2];

      var context = {
        target: target,
        newTarget: newTarget,
        rule: rule,
        argumentsList: argumentsList
      };
      return callback.apply(context, [instance]);
    }
  }]);

  return ConstructTrapExecutor;
}(_TrapExecutor__WEBPACK_IMPORTED_MODULE_7__["default"])));

/***/ }),

/***/ "./src/trap/executors/GetTrapExecutor.js":
/*!***********************************************!*\
  !*** ./src/trap/executors/GetTrapExecutor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetTrapExecutor; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TrapExecutor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TrapExecutor */ "./src/trap/executors/TrapExecutor.js");
/* harmony import */ var _reflect_reflectGet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reflect/reflectGet */ "./src/trap/reflect/reflectGet.js");







function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



var GetTrapExecutor = /*#__PURE__*/function (_TrapExecutor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(GetTrapExecutor, _TrapExecutor);

  var _super = _createSuper(GetTrapExecutor);

  function GetTrapExecutor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GetTrapExecutor);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GetTrapExecutor, [{
    key: "executeBeforeAdvice",
    value: function executeBeforeAdvice(_ref, advice, rule) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 3),
          target = _ref2[0],
          property = _ref2[1],
          receiver = _ref2[2];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };
      advice.fn.apply(context);
    }
  }, {
    key: "executeAroundAdvice",
    value: function executeAroundAdvice(_ref3, advice, rule, proceed) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 3),
          target = _ref4[0],
          property = _ref4[1],
          receiver = _ref4[2];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };
      return advice.fn.apply(context, [proceed]);
    }
  }, {
    key: "executeAfterAdvice",
    value: function executeAfterAdvice(_ref5, advice, rule, propertyValue) {
      var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, 3),
          target = _ref6[0],
          property = _ref6[1],
          receiver = _ref6[2];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };
      advice.fn.apply(context, [propertyValue]);
    }
  }, {
    key: "performUnderlyingOperation",
    value: function performUnderlyingOperation(_ref7) {
      var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, 3),
          target = _ref8[0],
          property = _ref8[1],
          receiver = _ref8[2];

      var propertyValue = Object(_reflect_reflectGet__WEBPACK_IMPORTED_MODULE_7__["default"])(target, property, receiver);
      return propertyValue;
    }
  }, {
    key: "executeProceedCallback",
    value: function executeProceedCallback(_ref9, rule, propertyValue, callback) {
      var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref9, 3),
          target = _ref10[0],
          property = _ref10[1],
          receiver = _ref10[2];

      var context = {
        target: target,
        property: property,
        receiver: receiver,
        rule: rule
      };
      return callback.apply(context, [propertyValue]);
    }
  }]);

  return GetTrapExecutor;
}(_TrapExecutor__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./src/trap/executors/SetTrapExecutor.js":
/*!***********************************************!*\
  !*** ./src/trap/executors/SetTrapExecutor.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetTrapExecutor; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _TrapExecutor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TrapExecutor */ "./src/trap/executors/TrapExecutor.js");
/* harmony import */ var _reflect_reflectSet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reflect/reflectSet */ "./src/trap/reflect/reflectSet.js");
/* harmony import */ var _reflect_reflectGet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reflect/reflectGet */ "./src/trap/reflect/reflectGet.js");









function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */




var SetTrapExecutor = /*#__PURE__*/function (_TrapExecutor) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(SetTrapExecutor, _TrapExecutor);

  var _super = _createSuper(SetTrapExecutor);

  function SetTrapExecutor() {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, SetTrapExecutor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "previousPropertyValueMap", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "returnNewPropertyValueMap", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "updateWasSuccessfulMap", {});

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(SetTrapExecutor, [{
    key: "startExecutionContext",
    value: function startExecutionContext(_ref) {
      var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 4),
          target = _ref2[0],
          property = _ref2[1],
          receiver = _ref2[3];

      if (!Object.prototype.hasOwnProperty.call(this.previousPropertyValueMap, this.execContextID)) {
        var previousPropertyValue = Object(_reflect_reflectGet__WEBPACK_IMPORTED_MODULE_10__["default"])(target, property, receiver);
        this.previousPropertyValueMap[this.execContextID] = previousPropertyValue;
        this.returnNewPropertyValueMap[this.execContextID] = void 0;
        this.updateWasSuccessfulMap[this.execContextID] = false;
      }
    }
  }, {
    key: "endExecutionContext",
    value: function endExecutionContext(_ref3) {
      var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 3);

      delete this.previousPropertyValueMap[this.execContextID];
      delete this.returnNewPropertyValueMap[this.execContextID];
      delete this.updateWasSuccessfulMap[this.execContextID];
    }
  }, {
    key: "executeBeforeAdvice",
    value: function executeBeforeAdvice(_ref5, advice, rule) {
      var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, 4),
          target = _ref6[0],
          property = _ref6[1],
          value = _ref6[2],
          receiver = _ref6[3];

      var previousPropertyValue = this.previousPropertyValueMap[this.execContextID];
      var context = {
        target: target,
        property: property,
        value: value,
        receiver: receiver,
        rule: rule
      };
      advice.fn.apply(context, [previousPropertyValue]);
    }
  }, {
    key: "executeAroundAdvice",
    value: function executeAroundAdvice(_ref7, advice, rule, proceed) {
      var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref7, 4),
          target = _ref8[0],
          property = _ref8[1],
          value = _ref8[2],
          receiver = _ref8[3];

      var previousPropertyValue = this.previousPropertyValueMap[this.execContextID];
      var context = {
        target: target,
        property: property,
        value: value,
        receiver: receiver,
        rule: rule
      };
      return advice.fn.call(context, proceed).apply(context, [previousPropertyValue]);
    }
  }, {
    key: "executeAfterAdvice",
    value: function executeAfterAdvice(_ref9, advice, rule, updateWasSuccessful) {
      var _ref10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref9, 4),
          target = _ref10[0],
          property = _ref10[1],
          value = _ref10[2],
          receiver = _ref10[3];

      var previousPropertyValue = this.previousPropertyValueMap[this.execContextID];
      var newPropertyValue = this.returnNewPropertyValueMap[this.execContextID];
      var context = {
        target: target,
        property: property,
        value: value,
        receiver: receiver,
        rule: rule,
        updateWasSuccessful: updateWasSuccessful
      };
      advice.fn.call(context, previousPropertyValue).apply(context, [newPropertyValue]);
    }
  }, {
    key: "performUnderlyingOperation",
    value: function performUnderlyingOperation(_ref11) {
      var _ref12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref11, 4),
          target = _ref12[0],
          property = _ref12[1],
          value = _ref12[2],
          receiver = _ref12[3];

      var updateWasSuccessful = Object(_reflect_reflectSet__WEBPACK_IMPORTED_MODULE_9__["default"])(target, property, value, receiver);
      this.updateWasSuccessfulMap[this.execContextID] = updateWasSuccessful;
      this.returnNewPropertyValueMap[this.execContextID] = value;
      return value;
    }
  }, {
    key: "executeProceedCallback",
    value: function executeProceedCallback(_ref13, rule, newPropertyValue, callback) {
      var _ref14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref13, 4),
          target = _ref14[0],
          property = _ref14[1],
          value = _ref14[2],
          receiver = _ref14[3];

      var context = {
        target: target,
        property: property,
        value: value,
        receiver: receiver,
        rule: rule
      };
      var returnValue = callback.apply(context, [newPropertyValue]);
      return returnValue;
    }
  }, {
    key: "return",
    value: function _return(_ref15, returnValue) {
      var _ref16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref15, 4),
          target = _ref16[0],
          property = _ref16[1],
          receiver = _ref16[3];

      if (returnValue !== this.returnNewPropertyValueMap[this.execContextID]) {
        this.performUnderlyingOperation([target, property, returnValue, receiver]);
      }

      return this.updateWasSuccessfulMap[this.execContextID];
    }
  }]);

  return SetTrapExecutor;
}(_TrapExecutor__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./src/trap/executors/TrapExecutor.js":
/*!********************************************!*\
  !*** ./src/trap/executors/TrapExecutor.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TrapExecutor; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * @type {Symbol}
 */

var noReturnValue = Symbol("noReturnValue");

var TrapExecutor = /*#__PURE__*/function () {
  function TrapExecutor() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, TrapExecutor);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "execContextStack", []);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(this, "execContextID", -1);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(TrapExecutor, [{
    key: "execute",
    value: function execute(trapArgs, before, around, after) {
      this.newExecutionContext();
      this.setUpExecutionContext(before, around);
      this.startExecutionContext(trapArgs);
      this.beforePhase(trapArgs, before);
      this.aroundPhase(trapArgs, around);
      var returnValue = this.proceedPhase(trapArgs);
      this.afterPhase(trapArgs, after, returnValue);
      this.endExecutionContext(trapArgs);
      this.cleanUpExecutionContext();
      return returnValue;
    }
    /**
     * @private
     */

  }, {
    key: "newExecutionContext",
    value: function newExecutionContext() {
      var context = {
        proceeds: [],
        hasAtLeastOneAroundAdvice: false,
        hasAtLeastOneBeforeAdvice: false,
        returnValue: noReturnValue
      };
      this.execContextStack.push(context);
      this.execContextID++;
    }
    /**
     * @private
     */

  }, {
    key: "setUpExecutionContext",
    value: function setUpExecutionContext(before, around) {
      this.execContextStack[this.execContextID].hasAtLeastOneBeforeAdvice = !!before.length;
      this.execContextStack[this.execContextID].hasAtLeastOneAroundAdvice = !!around.length;
    }
    /* eslint-disable no-unused-vars, @typescript-eslint/no-empty-function */

  }, {
    key: "startExecutionContext",
    value: function startExecutionContext(trapArgs) {}
    /* eslint-enable no-unused-vars, @typescript-eslint/no-empty-function */

    /* eslint-disable no-unused-vars, @typescript-eslint/no-empty-function */

  }, {
    key: "endExecutionContext",
    value: function endExecutionContext(trapArgs) {}
    /* eslint-enable no-unused-vars, @typescript-eslint/no-empty-function */

    /**
     * @private
     */

  }, {
    key: "cleanUpExecutionContext",
    value: function cleanUpExecutionContext() {
      this.execContextStack.pop();
      this.execContextID--;
    }
    /**
     * @private
     */

  }, {
    key: "unsupportedMultipleProceeds",
    value: function unsupportedMultipleProceeds(advice, rule) {
      // eslint-disable-next-line no-console
      console.error("pigretto - Multiple proceeds for the same advice are not supported, subsequent proceed has been ignored.", "\n\tadvice: ", advice, "\n\trule: ", rule);
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "executeBeforeAdvice",
    value: function executeBeforeAdvice(trapArgs, advice, rule) {
      throw new Error("pigretto - ".concat(this.constructor.name, " trap executor does not implement \"executeBeforeAdvice\"."));
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "executeAroundAdvice",
    value: function executeAroundAdvice(trapArgs, advice, rule, proceed) {
      throw new Error("pigretto - ".concat(this.constructor.name, " trap executor does not implement \"executeAroundAdvice\"."));
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "executeAfterAdvice",
    value: function executeAfterAdvice(trapArgs, advice, rule, returnValue) {
      throw new Error("pigretto - ".concat(this.constructor.name, " trap executor does not implement \"executeAfterAdvice\"."));
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "performUnderlyingOperation",
    value: function performUnderlyingOperation(trapArgs) {
      throw new Error("pigretto - ".concat(this.constructor.name, " trap executor does not implement \"performUnderlyingOperation\"."));
    } // eslint-disable-next-line no-unused-vars

  }, {
    key: "executeProceedCallback",
    value: function executeProceedCallback(trapArgs, rule, returnValue, callback) {
      throw new Error("pigretto - ".concat(this.constructor.name, " trap executor does not implement \"executeProceedCallback\"."));
    }
    /**
     * @private
     */

  }, {
    key: "beforePhase",
    value: function beforePhase(trapArgs, before) {
      var _iterator = _createForOfIteratorHelper(before),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              rule = _step$value.rule,
              advice = _step$value.advice;
          this.executeBefore(trapArgs, advice, rule);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    /**
     * @private
     */

  }, {
    key: "executeBefore",
    value: function executeBefore(trapArgs, advice, rule) {
      this.executeBeforeAdvice(trapArgs, advice, rule);
    }
    /**
     * @private
     */

  }, {
    key: "aroundPhase",
    value: function aroundPhase(trapArgs, around) {
      var _iterator2 = _createForOfIteratorHelper(around),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _step2.value,
              rule = _step2$value.rule,
              advice = _step2$value.advice;
          this.executeAround(trapArgs, advice, rule);

          if (this.execContextStack[this.execContextID].returnValue !== noReturnValue) {
            break;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * @private
     */

  }, {
    key: "executeAround",
    value: function executeAround(trapArgs, advice, rule) {
      var _this = this;

      var hasProceeded = false;

      var proceed = function proceed() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
        var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;

        if (hasProceeded) {
          _this.unsupportedMultipleProceeds(advice, rule);

          return;
        }

        hasProceeded = true;
        var finalParams = void 0;
        var finalFn = void 0;

        if (Object(js_utl__WEBPACK_IMPORTED_MODULE_3__["isArray"])(params)) {
          finalParams = params;
          finalFn = typeof fn === "function" ? fn : void 0;
        } else if (typeof params === "function") {
          finalFn = params;
        }

        _this.execContextStack[_this.execContextID].proceeds.push({
          params: finalParams,
          fn: finalFn,
          rule: rule
        });
      };

      var returnValue = this.executeAroundAdvice(trapArgs, advice, rule, proceed);

      if (!hasProceeded) {
        this.execContextStack[this.execContextID].returnValue = returnValue;
      }
    }
    /**
     * @private
     */

  }, {
    key: "afterPhase",
    value: function afterPhase(trapArgs, after, returnValue) {
      var _iterator3 = _createForOfIteratorHelper(after),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _step3$value = _step3.value,
              rule = _step3$value.rule,
              advice = _step3$value.advice;
          this.executeAfter(trapArgs, advice, rule, returnValue);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * @private
     */

  }, {
    key: "executeAfter",
    value: function executeAfter(trapArgs, advice, rule, returnValue) {
      this.executeAfterAdvice(trapArgs, advice, rule, returnValue);
    }
    /**
     * @private
     */

  }, {
    key: "proceedPhase",
    value: function proceedPhase(trapArgs) {
      if (this.execContextStack[this.execContextID].returnValue !== noReturnValue) {
        return this["return"](trapArgs, this.execContextStack[this.execContextID].returnValue);
      }

      var returnValue = this.performUnderlyingOperation(trapArgs);

      var _iterator4 = _createForOfIteratorHelper(this.execContextStack[this.execContextID].proceeds),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _step4.value,
              callback = _step4$value.fn,
              rule = _step4$value.rule;

          if (typeof callback === "function") {
            returnValue = this.executeProceedCallback(trapArgs, rule, returnValue, callback);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      return this["return"](trapArgs, returnValue);
    }
  }, {
    key: "return",
    value: function _return(trapArgs, returnValue) {
      return returnValue;
    }
  }]);

  return TrapExecutor;
}();



/***/ }),

/***/ "./src/trap/executors/behaviours/common/throwErrorIfDoesNotImplement.js":
/*!******************************************************************************!*\
  !*** ./src/trap/executors/behaviours/common/throwErrorIfDoesNotImplement.js ***!
  \******************************************************************************/
/*! exports provided: throwErrorIfDoesNotImplement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwErrorIfDoesNotImplement", function() { return throwErrorIfDoesNotImplement; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
var throwErrorIfDoesNotImplement = function throwErrorIfDoesNotImplement(context, methodName, constructorFn) {
  if (typeof context[methodName] !== "function") {
    throw new Error("pigretto - ".concat(constructorFn.name, " trap executor does not implement \"").concat(methodName, "\"."));
  }
};

/***/ }),

/***/ "./src/trap/executors/behaviours/withFunctionTrapExecutor.js":
/*!*******************************************************************!*\
  !*** ./src/trap/executors/behaviours/withFunctionTrapExecutor.js ***!
  \*******************************************************************/
/*! exports provided: withFunctionTrapExecutor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withFunctionTrapExecutor", function() { return withFunctionTrapExecutor; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/get */ "./node_modules/@babel/runtime/helpers/get.js");
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_utl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-utl */ "./node_modules/js-utl/dist/es6/index.js");
/* harmony import */ var _common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/throwErrorIfDoesNotImplement */ "./src/trap/executors/behaviours/common/throwErrorIfDoesNotImplement.js");










function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


var withFunctionTrapExecutor = function withFunctionTrapExecutor(superclass) {
  var _temp;

  var NewClass = (_temp = /*#__PURE__*/function (_superclass) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(NewClass, _superclass);

    var _super = _createSuper(NewClass);

    function NewClass() {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, NewClass);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));

      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "executedAtLeastOnce", false);

      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "lastProceedWithParamsIndexMap", {});

      _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this), "finalTrapArgsMap", {});

      return _this;
    }

    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(NewClass, [{
      key: "startExecutionContext",
      value: function startExecutionContext(trapArgs) {
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(superclass.prototype, "startExecutionContext", superclass);

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(NewClass.prototype), "startExecutionContext", this).call(this, trapArgs);

        if (!this.executedAtLeastOnce && !Object.prototype.hasOwnProperty.call(this, "execContextID")) {
          throw new Error("pigretto - ".concat(superclass.name, " trap executor does not have \"execContextID\" property."));
        }

        this.lastProceedWithParamsIndexMap[this.execContextID] = -1;
        this.finalTrapArgsMap[this.execContextID] = void 0;
      }
    }, {
      key: "endExecutionContext",
      value: function endExecutionContext(trapArgs) {
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(superclass.prototype, "endExecutionContext", superclass);

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(NewClass.prototype), "endExecutionContext", this).call(this, trapArgs);

        this.finalTrapArgsMap[this.execContextID] = void 0;
        this.executedAtLeastOnce = true;
      }
    }, {
      key: "getFinalTrapArgs",
      value: function getFinalTrapArgs(trapArgs) {
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(this, "getTrapArgsArgumentsListIndex", superclass);
        var argumentsListIndex = this.getTrapArgsArgumentsListIndex();

        if (!this.executedAtLeastOnce && !Object.prototype.hasOwnProperty.call(this, "execContextStack")) {
          throw new Error("pigretto - ".concat(superclass.name, " trap executor does not have \"execContextStack\" property."));
        }

        var proceedsL = this.execContextStack[this.execContextID].proceeds.length;

        if (proceedsL) {
          var hasParamsOverride = false;

          for (var i = proceedsL - 1; i > this.lastProceedWithParamsIndexMap[this.execContextID]; i--) {
            var params = this.execContextStack[this.execContextID].proceeds[i].params;

            if (Object(js_utl__WEBPACK_IMPORTED_MODULE_9__["isArray"])(params)) {
              hasParamsOverride = true;
              this.lastProceedWithParamsIndexMap[this.execContextID] = i;
              trapArgs = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(trapArgs);
              trapArgs[argumentsListIndex] = params;
              this.finalTrapArgsMap[this.execContextID] = trapArgs;
              break;
            }
          }

          if (!hasParamsOverride) {
            this.lastProceedWithParamsIndexMap[this.execContextID] = proceedsL - 1;
          }
        }

        if (!Object(js_utl__WEBPACK_IMPORTED_MODULE_9__["isUndefined"])(this.finalTrapArgsMap[this.execContextID])) {
          return this.finalTrapArgsMap[this.execContextID];
        }

        return trapArgs;
      }
    }, {
      key: "executeAroundAdvice",
      value: function executeAroundAdvice(trapArgs, advice, rule, proceed) {
        trapArgs = this.getFinalTrapArgs(trapArgs);
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(superclass.prototype, "executeAroundAdvice", superclass);
        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(NewClass.prototype), "executeAroundAdvice", this).call(this, trapArgs, advice, rule, proceed);
      }
    }, {
      key: "executeAfterAdvice",
      value: function executeAfterAdvice(trapArgs, advice, rule, returnValue) {
        trapArgs = this.getFinalTrapArgs(trapArgs);
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(superclass.prototype, "executeAfterAdvice", superclass);

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(NewClass.prototype), "executeAfterAdvice", this).call(this, trapArgs, advice, rule, returnValue);
      }
    }, {
      key: "performUnderlyingOperation",
      value: function performUnderlyingOperation(trapArgs) {
        trapArgs = this.getFinalTrapArgs(trapArgs);
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(superclass.prototype, "performUnderlyingOperation", superclass);
        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(NewClass.prototype), "performUnderlyingOperation", this).call(this, trapArgs);
      }
    }, {
      key: "executeProceedCallback",
      value: function executeProceedCallback(trapArgs, rule, returnValue, callback) {
        trapArgs = this.getFinalTrapArgs(trapArgs);
        !this.executedAtLeastOnce && Object(_common_throwErrorIfDoesNotImplement__WEBPACK_IMPORTED_MODULE_10__["throwErrorIfDoesNotImplement"])(superclass.prototype, "executeProceedCallback", superclass);
        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_4___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(NewClass.prototype), "executeProceedCallback", this).call(this, trapArgs, rule, returnValue, callback);
      }
    }]);

    return NewClass;
  }(superclass), _temp);
  Object.defineProperty(NewClass, "name", {
    value: "WithFunctionTrapExecutor(".concat(superclass.name, ")"),
    configurable: true
  });
  return NewClass;
};

/***/ }),

/***/ "./src/trap/reflect/reflectApply.js":
/*!******************************************!*\
  !*** ./src/trap/reflect/reflectApply.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reflectApply; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function reflectApply(target, thisArg, argumentsList) {
  return Reflect.apply(target, thisArg, argumentsList);
}

/***/ }),

/***/ "./src/trap/reflect/reflectConstruct.js":
/*!**********************************************!*\
  !*** ./src/trap/reflect/reflectConstruct.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reflectConstruct; });
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");
/* harmony import */ var _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);



/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function reflectConstruct(target, argumentsList, newTarget) {
  return newTarget ? Reflect.construct(target, argumentsList, newTarget) : _babel_runtime_helpers_construct__WEBPACK_IMPORTED_MODULE_0___default()(target, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(argumentsList));
}

/***/ }),

/***/ "./src/trap/reflect/reflectGet.js":
/*!****************************************!*\
  !*** ./src/trap/reflect/reflectGet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reflectGet; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function reflectGet(target, property, receiver) {
  return Reflect.get(target, property, receiver);
}

/***/ }),

/***/ "./src/trap/reflect/reflectSet.js":
/*!****************************************!*\
  !*** ./src/trap/reflect/reflectSet.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return reflectSet; });
/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
function reflectSet(target, property, value, receiver) {
  return Reflect.set(target, property, value, receiver);
}

/***/ }),

/***/ "./src/trap/trapHandlerForRules.js":
/*!*****************************************!*\
  !*** ./src/trap/trapHandlerForRules.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return trapHandlerForRules; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rules_rulesGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rules/rulesGenerator */ "./src/rules/rulesGenerator.js");
/* harmony import */ var _rules_parser_parseRule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rules/parser/parseRule */ "./src/rules/parser/parseRule.js");
/* harmony import */ var _Trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trap */ "./src/trap/Trap.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * Copyright (c) 2020 Anton Bagdatyev (Tonix)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */



/**
 * Generates a new trap handler object for the given rules.
 *
 * @param {Object|Array} proxyRules The proxy rules.
 * @return {Object} The new trap handler object for the given rules.
 */

function trapHandlerForRules(proxyRules) {
  var trap = new _Trap__WEBPACK_IMPORTED_MODULE_3__["default"]();
  var rules = Object(_rules_rulesGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(proxyRules);

  var _iterator = _createForOfIteratorHelper(rules),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _step.value,
          rule = _step$value.rule,
          pointcut = _step$value.pointcut;
      var parsedRule = Object(_rules_parser_parseRule__WEBPACK_IMPORTED_MODULE_2__["default"])(rule);
      trap.addPointcutRule(pointcut, parsedRule);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, trap.hasGets() ? {
    // Trap for property access (getting) and method call.
    get: function get(target, property, receiver) {
      return trap.get(target, property, receiver);
    }
  } : {}), trap.hasSets() ? {
    // Trap for property access (setting).
    set: function set(target, property, value, receiver) {
      var updateWasSuccessful = trap.set(target, property, value, receiver);
      return updateWasSuccessful;
    }
  } : {}), trap.hasApplies() ? {
    // Trap for function call.
    apply: function apply(target, thisArg, argumentsList) {
      return trap.apply(target, thisArg, argumentsList);
    }
  } : {}), trap.hasConstructs() ? {
    // Trap for object construction with the "new" operator.
    construct: function construct(target, argumentsList, newTarget) {
      return trap.construct(target, argumentsList, newTarget);
    }
  } : {});
}

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=pigretto.js.map