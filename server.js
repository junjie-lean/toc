"use strict";

var _cluster = require("cluster");

var _cluster2 = _interopRequireDefault(_cluster);

var _os = require("os");

var _os2 = _interopRequireDefault(_os);

var _nextServer = require("./next/next-server");

var _nextServer2 = _interopRequireDefault(_nextServer);

var _config = require("./config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var osType = process.platform;
var dev = _config2.default.base.isDev;
var needClearLog = _config2.default.log.needInitCleanLog;

if (dev && needClearLog) {}

if (!dev && osType != 'win32' && _config2.default.base.isCluster) {
  if (_cluster2.default.isMaster) {
    for (var i = 0; i < _os2.default.cpus().length; i++) {
      _cluster2.default.fork();
    }
  } else {
    (0, _nextServer2.default)();
  }
} else {
  (0, _nextServer2.default)();
}
