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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/zh_CN");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "antd/lib/locale-provider/style/css"
var css_ = __webpack_require__(12);

// EXTERNAL MODULE: external "antd/lib/locale-provider"
var locale_provider_ = __webpack_require__(3);
var locale_provider_default = /*#__PURE__*/__webpack_require__.n(locale_provider_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(4);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/components/head.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';
var defaultTitle = "前端基础框架";

var head_Head = function (_React$Component) {
  _inherits(Head, _React$Component);

  function Head(props) {
    _classCallCheck(this, Head);

    return _possibleConstructorReturn(this, _getPrototypeOf(Head).call(this, props));
  }

  _createClass(Head, [{
    key: "render",
    value: function render() {
      var props = this.props;
      return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
        charSet: "UTF-8"
      }), external_react_default.a.createElement("title", null, "\u524D\u7AEF\u57FA\u7840\u6846\u67B6"), external_react_default.a.createElement("meta", {
        name: "description",
        content: props.description || defaultDescription
      }), external_react_default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), external_react_default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.ico"
      }));
    }
  }]);

  return Head;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(1);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(5);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(6);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(7);

// EXTERNAL MODULE: external "antd/lib/locale-provider/zh_CN"
var zh_CN_ = __webpack_require__(8);
var zh_CN_default = /*#__PURE__*/__webpack_require__.n(zh_CN_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);

// CONCATENATED MODULE: ./src/redux/lean.redux.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initState = {};
var PLACE_CHANGE = "PLACE_CHANGE";
var HeaderReducer = function HeaderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case PLACE_CHANGE:
      return _objectSpread({}, state, action.data);

    default:
      return _objectSpread({}, state);
      break;
  }
};
var placeChange = function placeChange(buildingId) {
  return function (dispatch) {
    dispatch({
      type: PLACE_CHANGE,
      data: {}
    });
  };
};
// CONCATENATED MODULE: ./src/redux/reducers.js


var allReducer = Object(external_redux_["combineReducers"])({
  HeaderReducer: HeaderReducer
});
// CONCATENATED MODULE: ./src/components/container.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return container_Container; });



function container_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { container_typeof = function _typeof(obj) { return typeof obj; }; } else { container_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return container_typeof(obj); }

function container_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function container_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function container_createClass(Constructor, protoProps, staticProps) { if (protoProps) container_defineProperties(Constructor.prototype, protoProps); if (staticProps) container_defineProperties(Constructor, staticProps); return Constructor; }

function container_possibleConstructorReturn(self, call) { if (call && (container_typeof(call) === "object" || typeof call === "function")) { return call; } return container_assertThisInitialized(self); }

function container_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function container_getPrototypeOf(o) { container_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return container_getPrototypeOf(o); }

function container_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) container_setPrototypeOf(subClass, superClass); }

function container_setPrototypeOf(o, p) { container_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return container_setPrototypeOf(o, p); }









var store = Object(external_redux_["createStore"])(allReducer, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)));

var container_Container = function (_React$Component) {
  container_inherits(Container, _React$Component);

  function Container() {
    container_classCallCheck(this, Container);

    return container_possibleConstructorReturn(this, container_getPrototypeOf(Container).apply(this, arguments));
  }

  container_createClass(Container, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(locale_provider_default.a, {
        locale: zh_CN_default.a
      }, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: store
      }, external_react_default.a.createElement(head_Head, null), this.props.children));
    }
  }]);

  return Container;
}(external_react_default.a.Component);



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/style/css");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__(11));

var _axios = _interopRequireDefault(__webpack_require__(10));

var _config = _interopRequireDefault(__webpack_require__(20));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var log = process.send ? process.send : console.log;
var base = _config.default.base;
var NEED_TRANSPOND_AJAX = _config.default.apiListen.ajaxTranspond;
var BASEURL = NEED_TRANSPOND_AJAX ? "".concat(base.virtualServiceURL) : "".concat(base.trueServiceURL);
_axios.default.defaults.baseURL = BASEURL;
_axios.default.defaults.headers = {
  'Content-Type': "application/x-www-form-urlencoded",
  headers: {}
};

var getQueryString = function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

  if (window) {
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  } else {
    throw new Error('调用错误：不能在服务端调用客户端方法！');
  }
};

var createParamInServer = function createParamInServer() {
  var pr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var req = arguments.length > 1 ? arguments[1] : undefined;
  var token, orgcode;

  if (req) {
    token = req.query.token;
    orgcode = req.query.orgcode;
  } else {
    throw new Error('参数错误：必须传入express的req参数');
  }

  var postData = {
    data: pr,
    certification: {
      tokenID: token,
      orgcode: orgcode
    }
  };
  return 'data=' + JSON.stringify(postData);
};

var createParamInClient = function createParamInClient() {
  var pr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var token = getQueryString('token') || sessionStorage.token;
  var orgcode = getQueryString('orgcode') || sessionStorage.orgcode;
  var postData = {
    data: pr,
    certification: {
      tokenID: token,
      orgcode: orgcode
    }
  };
  return 'data=' + JSON.stringify(postData);
};

var fetchData = function () {
  var _ref = _asyncToGenerator(_regenerator.default.mark(function _callee() {
    var method,
        pr,
        req,
        scb,
        ucb,
        fcb,
        data,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _args.length > 0 && _args[0] !== undefined ? _args[0] : '/api';
            pr = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            req = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            scb = _args.length > 3 && _args[3] !== undefined ? _args[3] : function (req) {};
            ucb = _args.length > 4 && _args[4] !== undefined ? _args[4] : function () {};
            fcb = _args.length > 5 && _args[5] !== undefined ? _args[5] : function (code) {};

            if (!req) {
              _context.next = 12;
              break;
            }

            _context.next = 9;
            return _axios.default.post(method, createParamInServer(pr, req), {
              headers: {
                proxy: "next"
              }
            });

          case 9:
            data = _context.sent;
            _context.next = 15;
            break;

          case 12:
            _context.next = 14;
            return _axios.default.post(method, createParamInClient(pr), {});

          case 14:
            data = _context.sent;

          case 15:
            if (data.status == 200 && data.statusText == 'OK') {
              if (data.data.result) {
                scb(data.data);
              } else {
                ucb();
              }
            } else {
              fcb(data.status);
            }

            return _context.abrupt("return", data.data);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchData() {
    return _ref.apply(this, arguments);
  };
}();

var SPECIAL_fetchData = function () {
  var _ref2 = _asyncToGenerator(_regenerator.default.mark(function _callee2() {
    var method,
        pr,
        req,
        scb,
        ucb,
        fcb,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            method = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : '/api';
            pr = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : {};
            req = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : false;
            scb = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : function (req) {};
            ucb = _args2.length > 4 && _args2[4] !== undefined ? _args2[4] : function () {};
            fcb = _args2.length > 5 && _args2[5] !== undefined ? _args2[5] : function (code) {};

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function SPECIAL_fetchData() {
    return _ref2.apply(this, arguments);
  };
}();

var transAjax = function () {
  var _ref3 = _asyncToGenerator(_regenerator.default.mark(function _callee3(method, pr) {
    var data;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('before transpond ajax');
            _context3.next = 3;
            return _axios.default.post(method, pr, {
              baseURL: base.trueServiceURL + "/api"
            });

          case 3:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function transAjax(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

var _default = {
  getQueryString: getQueryString,
  createParamInServer: createParamInServer,
  createParamInClient: createParamInClient,
  fetchData: fetchData,
  SPECIAL_fetchData: SPECIAL_fetchData,
  transAjax: transAjax
};
exports.default = _default;

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var fs = __webpack_require__(21);

var path = __webpack_require__(22);

module.exports = {
  base: {
    isDev: "production" == 'development',
    devPort: 3000,
    proPort: 4000,
    virtualServiceURL: 'http://localhost:3000/',
    trueServiceURL: 'http://localhost:8080',
    isCluster: false
  },
  log: {
    needLoger: true,
    logFilePrefix: 'app',
    needZipLog: true,
    perLogSize: '20M',
    maxFilesSize: '7d',
    needTailLog: false,
    needInitCleanLog: true
  },
  systeamMonitor: {
    needMonitor: true,
    pageTitle: "服务器性能监控",
    pagePath: "/performance",
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: false,
    statusCodes: true
  },
  apiListen: {
    ajaxTranspond: true
  },
  createGlobalFile: function createGlobalFile(pr) {
    var data = " \n/*\n* @Author: junjie.lean\n* @Date: 2018-12-22 00:08:05\n* @Last Modified by: lean\n* @Last Modified time: 2019-01-08 22:14:23\n*/\n\n/**\n* @description \u9488\u5BF9\u524D\u7AEF\u7684\u5168\u5C40\u4E34\u65F6\u53D8\u91CF,\u6B64\u6587\u4EF6\u52A8\u6001\u751F\u6210\uFF0C\n* @description \u5BF9\u6B64\u6587\u4EF6\u7684\u4FEE\u6539\u91CD\u542F\u540E\u4F1A\u88AB\u8986\u76D6\uFF0C\n* @description \u53EF\u4FEE\u6539\"./../../config/config.js\"\u7684base\u5C5E\u6027\n*/\n\nlet data=".concat(JSON.stringify(pr), ";\n\nexport const G = JSON.parse(data);\n\nwindow.G = G;\n        ");
    fs.writeFileSync(path.join(process.cwd(), 'src', 'js', 'g.js'), data, {
      encoding: 'utf8',
      flag: 'w+'
    });
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(11);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./src/components/container.jsx + 3 modules
var container = __webpack_require__(9);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(13);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/Lifecycle.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Lifecycle_Lifecycle = function (_React$Component) {
  _inherits(Lifecycle, _React$Component);

  function Lifecycle(props) {
    var _this;

    _classCallCheck(this, Lifecycle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Lifecycle).call(this, props));
    _this.state = _objectSpread({}, props);
    return _this;
  }

  _createClass(Lifecycle, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, "lifycycle:", this.state.name);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      return _objectSpread({}, props);
    }
  }]);

  return Lifecycle;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./src/scss/index.scss
var scss = __webpack_require__(19);

// CONCATENATED MODULE: ./src/view/index.jsx
function view_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { view_typeof = function _typeof(obj) { return typeof obj; }; } else { view_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return view_typeof(obj); }

function view_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { view_defineProperty(target, key, source[key]); }); } return target; }

function view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function view_createClass(Constructor, protoProps, staticProps) { if (protoProps) view_defineProperties(Constructor.prototype, protoProps); if (staticProps) view_defineProperties(Constructor, staticProps); return Constructor; }

function view_possibleConstructorReturn(self, call) { if (call && (view_typeof(call) === "object" || typeof call === "function")) { return call; } return view_assertThisInitialized(self); }

function view_getPrototypeOf(o) { view_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return view_getPrototypeOf(o); }

function view_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) view_setPrototypeOf(subClass, superClass); }

function view_setPrototypeOf(o, p) { view_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return view_setPrototypeOf(o, p); }

function view_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function view_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var view_Index = function (_React$Component) {
  view_inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    view_classCallCheck(this, Index);

    _this = view_possibleConstructorReturn(this, view_getPrototypeOf(Index).call(this, props));

    view_defineProperty(view_assertThisInitialized(view_assertThisInitialized(_this)), "addOne", function () {
      _this.setState({
        name: _this.state.name + 1
      });
    });

    _this.state = view_objectSpread({}, props, {
      name: 1
    });
    return _this;
  }

  view_createClass(Index, [{
    key: "clickHandle",
    value: function clickHandle() {
      router_default.a.push('/lean');
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      return external_react_default.a.createElement(container["a" /* default */], null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "hero"
      }, external_react_default.a.createElement("h1", {
        className: "title",
        onClick: this.addOne
      }, "Welcome to ", props.falseworkName, "!"), external_react_default.a.createElement("p", {
        className: "description"
      }, "To get started, edit ", external_react_default.a.createElement("code", null, "pages/index.js"), " and save to reload."), external_react_default.a.createElement("br", null), external_react_default.a.createElement(Lifecycle_Lifecycle, {
        name: this.state.name
      }))));
    }
  }]);

  return Index;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./src/js/request.js
var request = __webpack_require__(14);
var request_default = /*#__PURE__*/__webpack_require__.n(request);

// CONCATENATED MODULE: ./pages/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_IndexPage; });


function pages_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { pages_typeof = function _typeof(obj) { return typeof obj; }; } else { pages_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return pages_typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function pages_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages_possibleConstructorReturn(self, call) { if (call && (pages_typeof(call) === "object" || typeof call === "function")) { return call; } return pages_assertThisInitialized(self); }

function pages_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function pages_getPrototypeOf(o) { pages_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return pages_getPrototypeOf(o); }

function pages_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function pages_createClass(Constructor, protoProps, staticProps) { if (protoProps) pages_defineProperties(Constructor.prototype, protoProps); if (staticProps) pages_defineProperties(Constructor, staticProps); return Constructor; }

function pages_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) pages_setPrototypeOf(subClass, superClass); }

function pages_setPrototypeOf(o, p) { pages_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return pages_setPrototypeOf(o, p); }





var fetchData = request_default.a.fetchData;

var pages_IndexPage = function (_React$Component) {
  pages_inherits(IndexPage, _React$Component);

  pages_createClass(IndexPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(regenerator_default.a.mark(function _callee(_ref) {
        var req;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = _ref.req;
                return _context.abrupt("return", {});

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function IndexPage(props) {
    pages_classCallCheck(this, IndexPage);

    return pages_possibleConstructorReturn(this, pages_getPrototypeOf(IndexPage).call(this, props));
  }

  pages_createClass(IndexPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      sessionStorage.token = 123;
      sessionStorage.orgcode = 456;
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(view_Index, _extends({}, this.props, {
        falseworkName: "falsework of SSR"
      })), external_react_default.a.createElement(link_default.a, {
        href: "/helloWorld"
      }, external_react_default.a.createElement("a", null, "go to hello")));
    }
  }]);

  return IndexPage;
}(external_react_default.a.Component);



/***/ })
/******/ ]);