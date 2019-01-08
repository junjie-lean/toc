"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _winston = _interopRequireDefault(require("winston"));

var _expressWinston = _interopRequireDefault(require("express-winston"));

require("winston-daily-rotate-file");

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./../../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var isDev = _config.default.base.isDev;
var needLoger = _config.default.logneedLoger;
var logFilePrefix = _config.default.loglogFilePrefix;
var needZipLog = _config.default.logneedZipLog;
var perLogSize = _config.default.logperLogSize;
var maxFilesSize = _config.default.logmaxFilesSize;

var dirname__ = _path.default.join(process.cwd(), 'logs');

var needTailLog = _config.default.logneedTailLog;

var infoLog = function infoLog() {
  var transport = [];

  if (isDev && needTailLog) {
    transport.push(new _winston.default.transports.Console());
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
    transport.push(new _winston.default.transports.DailyRotateFile({
      filename: "".concat(logFilePrefix, "-info-%DATE%.log"),
      dirname: dirname__,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: needZipLog,
      maxSize: perLogSize,
      maxFiles: maxFilesSize
    }));
    return _expressWinston.default.logger({
      transports: [].concat(transport),
      fromat: _winston.default.format.combine(_winston.default.format.colorize(), _winston.default.format.json()),
      meta: false,
      level: "info",
      msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
      expressFormat: true
    });
  } else {
    return _expressWinston.default.logger({
      slient: true
    });
  }
};

var errorLog = function errorLog() {
  var transport = [];

  if (isDev) {
    transport.push(new _winston.default.transports.Console());
  }

  if (needLoger) {
    transport.push(new _winston.default.transports.DailyRotateFile({
      filename: "".concat(logFilePrefix, "-info-%DATE%.log"),
      dirname: dirname__,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: needZipLog,
      maxSize: perLogSize,
      maxFiles: maxFilesSize
    }));
    return _expressWinston.default.errorLogger({
      transports: [].concat(transport),
      fromat: _winston.default.format.combine(_winston.default.format.colorize(), _winston.default.format.json()),
      meta: true,
      level: "error",
      msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
      expressFormat: true
    });
  } else {
    return _expressWinston.default.logger({
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
var _default = router;
exports.default = _default;
