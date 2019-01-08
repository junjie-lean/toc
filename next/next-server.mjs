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
import config from './../config/config';


// console.log(config);
const base = config.base;
const port = base.isDev ? base.devPort : base.proPort;
const dev = base.isDev;
const app = next({
    dev
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

        //业务路由
        server.use(userRouter);
        server.get('*', (req, res, next) => {
            // switch (pathname) {
            //     case "": {
            //     }
            //     default: {
            //     }
            // }
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

export default startServer;