"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _next = _interopRequireDefault(require("next"));

var _user = _interopRequireDefault(require("./../express-server/router/user"));

var _loger = _interopRequireDefault(require("./../express-server/log-systeam/loger"));

var _monitor = _interopRequireDefault(require("./../express-server/monitor/monitor"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = _config.default.base;
var port = base.isDev ? base.devPort : base.proPort;
var dev = base.isDev;
var app = (0, _next.default)({
  dev: dev
});
var handle = app.getRequestHandler();

var startServer = function startServer() {
  app.prepare().then(function () {
    var server = (0, _express.default)();
    server.use(_bodyParser.default.json());
    server.use(_bodyParser.default.urlencoded({
      extended: true
    }));
    server.use(_loger.default);
    server.use(_monitor.default);
    server.use(_user.default);
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

var _default = startServer;
exports.default = _default;
