/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:46 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-04 11:16:06
 */

/**
 * next服务，负责服务端渲染的服务实现
 */
import express from 'express';
import next from 'next';
import userRouter from './../express-server/router/user';
import logger from './../express-server/log-systeam/loger';
import monitor from './../express-server/monitor/monitor';
import bodyParser from 'body-parser';
import config from './../config/config'; // console.log(config);

var base = config.base;
var port = base.isDev ? base.devPort : base.proPort;
var dev = base.isDev;
var app = next({
  dev: dev
});
var handle = app.getRequestHandler();

var startServer = function startServer() {
  app.prepare().then(function () {
    var server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({
      extended: true
    })); //日志中间件

    server.use(logger); //monitor中间件

    server.use(monitor); //业务路由

    server.use(userRouter);
    server.get('*', function (req, res, next) {
      // switch (pathname) {
      //     case "": {
      //     }
      //     default: {
      //     }
      // }
      return handle(req, res);
    });
    server.listen(port, function (err) {
      if (err) {
        throw err;
      }

      console.log("> Ready on http://localhost:".concat(port));
    });
  });
};

export default startServer;
