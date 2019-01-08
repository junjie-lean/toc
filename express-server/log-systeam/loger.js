"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _winston = require("winston");

var _winston2 = _interopRequireDefault(_winston);

var _expressWinston = require("express-winston");

var _expressWinston2 = _interopRequireDefault(_expressWinston);

require("winston-daily-rotate-file");

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _config = require("./../../config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var isDev = _config2.default.base.isDev;
var needLoger = _config2.default.log.needLoger;
var logFilePrefix = _config2.default.log.logFilePrefix;
var needZipLog = _config2.default.log.needZipLog;
var perLogSize = _config2.default.log.perLogSize;
var maxFilesSize = _config2.default.log.maxFilesSize;

var dirname__ = _path2.default.join(process.cwd(), 'logs');

var needTailLog = _config2.default.log.needTailLog;

var infoLog = function infoLog() {
  var transport = [];

  if (isDev && needTailLog) {
    transport.push(new _winston2.default.transports.Console());
  }

  var ignoreRoute = function ignoreRoute(req, propName) {
    var ignoreKeyWords = ['/webpack-hmr', 'ping?page=', '/favicon.ico', '/styles.chunk.css', '/webpack.js', '/styles.js', '/dll/dll'];
    var ishit = false;

    for (var keywold in ignoreKeyWords) {
      if (req.originalUrl.indexOf(keywold) != -1) {
        ishit = true;
        break;
      }
    }

    return ishit;
  };

  if (needLoger) {
    transport.push(new _winston2.default.transports.DailyRotateFile({
      filename: "".concat(logFilePrefix, "-info-%DATE%.log"),
      dirname: dirname__,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: needZipLog,
      maxSize: perLogSize,
      maxFiles: maxFilesSize
    }));
    return _expressWinston2.default.logger({
      transports: [].concat(transport),
      fromat: _winston2.default.format.combine(_winston2.default.format.colorize(), _winston2.default.format.json()),
      meta: false,
      level: "info",
      msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
      expressFormat: true
    });
  } else {
    return _expressWinston2.default.logger({
      slient: true
    });
  }
};

var errorLog = function errorLog() {
  var transport = [];

  if (isDev) {
    transport.push(new _winston2.default.transports.Console());
  }

  if (needLoger) {
    transport.push(new _winston2.default.transports.DailyRotateFile({
      filename: "".concat(logFilePrefix, "-info-%DATE%.log"),
      dirname: dirname__,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: needZipLog,
      maxSize: perLogSize,
      maxFiles: maxFilesSize
    }));
    return _expressWinston2.default.errorLogger({
      transports: [].concat(transport),
      fromat: _winston2.default.format.combine(_winston2.default.format.colorize(), _winston2.default.format.json()),
      meta: true,
      level: "error",
      msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
      expressFormat: true
    });
  } else {
    return _expressWinston2.default.logger({
      slient: true
    });
  }
};

router.use(infoLog());
router.use(errorLog());
router.post('*', function (req, res, next) {
  return res.json({
    result: true
  });
});
exports.default = router;
