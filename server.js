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

/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-08 14:54:33
 */

/**
 * 本文件执行命令： node、nodemon 
 * 本文件执行参数： --experimental-modules
 */
// import fs from 'fs';
// import path from 'path';
var osType = process.platform;
var dev = _config2.default.base.isDev;
var needClearLog = _config2.default.log.needInitCleanLog;

if (dev && needClearLog) {// console.log('inter')
  // //开发模式下，初始化立即删除日志
  // let files = fs.readdirSync(path.join(process.cwd(), 'logs'));
  // console.log(files)
  // files.filter(item => {
  //     console.log(item)
  //     return item.indexOf('DS_Store') == -1
  // }).map(item => {
  //     console.log(item)
  //     console.log(`即将删除文件：${item}`);
  //     fs.unlinkSync(path.join(process.cwd(), 'logs', item))
  // })
}

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
