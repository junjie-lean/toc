/*
 * @Author: junjie.lean
 * @Date: 2018-12-24 17:08:57
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-24 19:41:14
 */

/**
 * server-monitor Middleware
 */
import express from 'express';
import expressStatusMonitor from 'express-status-monitor';
import config from './../../config/config';
var router = express.Router();
var option = {
  title: config.systeamMonitor.pageTitle,
  theme: 'default.css',
  // Default styles
  path: config.systeamMonitor.pagePath,
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
    cpu: config.systeamMonitor.cpu,
    mem: config.systeamMonitor.mem,
    load: config.systeamMonitor.load,
    responseTime: config.systeamMonitor.responseTime,
    rps: config.systeamMonitor.rps,
    statusCodes: config.systeamMonitor.statusCodes
  }
};

if (config.systeamMonitor) {
  router.use(expressStatusMonitor(option));
}

export default router;
