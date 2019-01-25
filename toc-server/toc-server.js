/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:46 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-25 10:00:48
 */

/**
 * @description next服务，负责服务端渲染的服务实现
 */


const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const config = require('../config/config');
const reqtrans = require('./../express-server/router/reqtrans');
const logger = require('./../express-server/log-systeam/loger');
const monitor = require('./../express-server/monitor/monitor');
const nextConfig = require('../next.config');

const base = config.base;
const port = base.isDev ? base.devPort : base.proPort;
const dev = base.isDev;
const app = next({
    dev,
    conf: nextConfig
});
const handle = app.getRequestHandler();

let startServer = () => {
    app.prepare().then(() => {
        const server = express();
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({ extended: true }));

        //日志中间件
        server.use(logger);
        //monitor中间件
        server.use(monitor);
        //请求转发中间件
        server.use(reqtrans);

        server.get('*', (req, res, next) => {
            return handle(req, res);
        });
        server.listen(port, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on http://localhost:${port}`)
        });
    })
}

module.exports = startServer;