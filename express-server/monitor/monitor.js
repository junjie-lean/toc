"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressStatusMonitor = _interopRequireDefault(require("express-status-monitor"));

var _config = _interopRequireDefault(require("./../../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var option = {
  title: _config.default.systeamMonitor.pageTitle,
  theme: 'default.css',
  path: _config.default.systeamMonitor.pagePath,
  spans: [{
    interval: 1,
    retention: 60
  }, {
    interval: 5,
    retention: 60
  }, {
    interval: 15,
    retention: 60
  }, {
    interval: 60,
    retention: 60
  }],
  chartVisibility: {
    cpu: _config.default.systeamMonitor.cpu,
    mem: _config.default.systeamMonitor.mem,
    load: _config.default.systeamMonitor.load,
    responseTime: _config.default.systeamMonitor.responseTime,
    rps: _config.default.systeamMonitor.rps,
    statusCodes: _config.default.systeamMonitor.statusCodes
  }
};

if (_config.default.systeamMonitor.needMonitor) {
  router.use((0, _expressStatusMonitor.default)(option));
}

var _default = router;
exports.default = _default;
