"use strict";

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _nextServer = _interopRequireDefault(require("./next/next-server"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var osType = process.platform;
var dev = _config.default.base.isDev;
var needClearLog = _config.default.log.needInitCleanLog;

if (dev && needClearLog) {}

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
