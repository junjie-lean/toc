"use strict";

var _cluster = _interopRequireDefault(require("cluster"));

var _os = _interopRequireDefault(require("os"));

var _nextServer = _interopRequireDefault(require("./next/next-server.mjs"));

var _config = _interopRequireDefault(require("./config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-26 16:16:25
 */

/**
 * 本文件执行命令： node、nodemon 
 * 本文件执行参数： --experimental-modules
 */
// import fs from 'fs';
// import path from 'path';
var osType = process.platform;
var dev = _config.default.base.isDev;
var needClearLog = _config.default.log.needInitCleanLog;

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
