"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _expressStatusMonitor = require("express-status-monitor");

var _expressStatusMonitor2 = _interopRequireDefault(_expressStatusMonitor);

var _config = require("./../../config/config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: junjie.lean
 * @Date: 2018-12-24 17:08:57
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-24 19:41:14
 */

/**
 * server-monitor Middleware
 */
var router = _express2.default.Router();

var option = {
  title: _config2.default.systeamMonitor.pageTitle,
  theme: 'default.css',
  // Default styles
  path: _config2.default.systeamMonitor.pagePath,
  spans: [{
    interval: 1,
    // Every second
    retention: 60 // Keep 60 datapoints in memory

  }, {
    interval: 5,
    // Every 5 seconds
    retention: 60
  }, {
    interval: 15,
    // Every 15 seconds
    retention: 60
  }, {
    interval: 60,
    retention: 60
  }],
  chartVisibility: {
    cpu: _config2.default.systeamMonitor.cpu,
    mem: _config2.default.systeamMonitor.mem,
    load: _config2.default.systeamMonitor.load,
    responseTime: _config2.default.systeamMonitor.responseTime,
    rps: _config2.default.systeamMonitor.rps,
    statusCodes: _config2.default.systeamMonitor.statusCodes
  }
};

if (_config2.default.systeamMonitor) {
  router.use((0, _expressStatusMonitor2.default)(option));
}

exports.default = router;
