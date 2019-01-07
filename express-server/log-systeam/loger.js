/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:10 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-26 13:03:00
 */

/**
 * 集成Winston日志系统
 * 
 */
import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import 'winston-daily-rotate-file';
import path from 'path';
import config from './../../config/config';
var router = express.Router();
var isDev = config.base.isDev;
var needLoger = config.log.needLoger;
var logFilePrefix = config.log.logFilePrefix;
var needZipLog = config.log.needZipLog;
var perLogSize = config.log.perLogSize;
var maxFilesSize = config.log.maxFilesSize;
var dirname__ = path.join(process.cwd(), 'logs');
var needTailLog = config.log.needTailLog;

var infoLog = function infoLog() {
  //router过滤关键词
  var transport = []; //log输出流配置，

  if (isDev && needTailLog) {
    transport.push(new winston.transports.Console());
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
    // let info = new winston.transports.File({ filename: './info.log', level: "info" });
    // let error = new winston.transports.File({ filename: './error.log', level: "error" });
    //需要进行log日志化http请求
    // console.log(0);
    transport.push(new winston.transports.DailyRotateFile({
      filename: "".concat(logFilePrefix, "-info-%DATE%.log"),
      dirname: dirname__,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: needZipLog,
      maxSize: perLogSize,
      maxFiles: maxFilesSize
    }));
    return expressWinston.logger({
      transports: [].concat(transport),
      fromat: winston.format.combine(winston.format.colorize(), winston.format.json()),
      meta: false,
      level: "info",
      msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
      expressFormat: true // ignoreRoute: ignoreRoute,

    });
  } else {
    //不需要进行log日志化http请求
    return expressWinston.logger({
      slient: true //all logs are suppressed

    });
  }
};

var errorLog = function errorLog() {
  var transport = []; //log输出流配置，

  if (isDev) {
    transport.push(new winston.transports.Console());
  }

  if (needLoger) {
    transport.push(new winston.transports.DailyRotateFile({
      filename: "".concat(logFilePrefix, "-info-%DATE%.log"),
      dirname: dirname__,
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: needZipLog,
      maxSize: perLogSize,
      maxFiles: maxFilesSize
    }));
    return expressWinston.errorLogger({
      transports: [].concat(transport),
      fromat: winston.format.combine(winston.format.colorize(), winston.format.json()),
      meta: true,
      level: "error",
      msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
      expressFormat: true
    });
  } else {
    //不需要进行log日志化http请求
    return expressWinston.logger({
      slient: true //all logs are suppressed

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
export default router;
