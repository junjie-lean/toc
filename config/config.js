"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configuration = {
  base: {
    isDev: process.env.NODE_ENV == 'development',
    devPort: 3000,
    proPort: 8080,
    virtualServiceURL: 'http://localhost:3000/',
    isCluster: false
  },
  log: {
    needLoger: true,
    logFilePrefix: 'app',
    needZipLog: true,
    perLogSize: '20M',
    maxFilesSize: '7d',
    needTailLog: false,
    needInitCleanLog: true
  },
  systeamMonitor: {
    needMonitor: true,
    pageTitle: "服务器性能监控",
    pagePath: "/performance",
    cpu: true,
    mem: true,
    load: true,
    responseTime: true,
    rps: false,
    statusCodes: true
  },
  apiListen: {
    ajaxTransform: true
  }
};
exports.default = configuration;
