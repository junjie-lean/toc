"use strict";

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _nextServer = _interopRequireDefault(require("./next-server/next-server"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _config = _interopRequireDefault(require("./config/config"));

var _async = _interopRequireDefault(require("async"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var osType = process.platform;
var dev = _config.default.base.isDev;
var needClearLog = _config.default.log.needInitCleanLog;

var cleanLog = function cleanLog() {
  if (dev && needClearLog) {
    var files = _fs.default.readdirSync(_path.default.join(process.cwd(), 'logs'));

    files.filter(function (item) {
      var condition = item.indexOf(".json") == -1;

      if (condition) {
        var fileCreateTime = _fs.default.statSync(_path.default.join(process.cwd(), 'logs', item)).birthtimeMs;

        condition = condition && new Date().getTime() - fileCreateTime > 1000 * 60 * 60;
      }

      return condition;
    }).map(function (item) {
      console.log("".concat(_chalk.default.bgRed("  Delete  "), "  ").concat(_chalk.default.red(item)));

      _fs.default.unlinkSync(_path.default.join(process.cwd(), 'logs', item));
    });
  }
};

var startCluster = function startCluster() {
  if (!dev && osType != 'win32' && _config.default.base.isCluster) {
    if (_cluster.default.isMaster) {
      for (var i = 0; i < _os.default.cpus().length; i++) {
        _cluster.default.fork();
      }
    } else {
      (0, _nextServer.default)();
    }
  } else {
    (0, _nextServer.default)();
  }
};

_async.default.series([function (callback) {
  _config.default.createGlobalFile(_config.default.base);

  callback();
}, function (callback) {
  cleanLog();
  callback();
}, function (callback) {
  startCluster();
  callback();
}, function (callback) {
  callback();
}]);
