"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _next = require("next");

var _next2 = _interopRequireDefault(_next);

var _user = require("./../express-server/router/user");

var _user2 = _interopRequireDefault(_user);

var _loger = require("./../express-server/log-systeam/loger");

var _loger2 = _interopRequireDefault(_loger);

var _monitor = require("./../express-server/monitor/monitor");

var _monitor2 = _interopRequireDefault(_monitor);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _config = require("./../config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _config2.default.base;
var port = base.isDev ? base.devPort : base.proPort;
var dev = base.isDev;
var app = (0, _next2.default)({
  dev: dev
});
var handle = app.getRequestHandler();

var startServer = function startServer() {
  app.prepare().then(function () {
    var server = (0, _express2.default)();
    server.use(_bodyParser2.default.json());
    server.use(_bodyParser2.default.urlencoded({
      extended: true
    }));
    server.use(_loger2.default);
    server.use(_monitor2.default);
    server.use(_user2.default);
    server.get('*', function (req, res, next) {
      return handle(req, res);
    });
    server.listen(port, function (err) {
      if (err) {
        throw err;
      }

      console.log("> Ready on http://localhost:".concat(port));
    });
  });
};

exports.default = startServer;
