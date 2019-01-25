"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("./../../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
