/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:46 
 * @Last Modified by: lean
 * @Last Modified time: 2018-12-21 23:49:58
 */

/**
 * next服务，主要负责服务端渲染的实现
 */

import express from 'express';
import next from 'next';
import userRouter from './../express-server/router/user';
import winston from 'winston';
import expressWinston from 'express-winston';
import logger from './../express-server/log-systeam/loger';

const port = parseInt(process.env.PORT, 10) || 8081;

const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev
})
const handle = app.getRequestHandler()



let startServer = () => {
    app.prepare().then(() => {
        const server = express();
        server.use(userRouter);
        // server.use(logger());
        // server.use()
        server.use(logger);
        server.get('*', (req, res, next) => {
            // switch (pathname) {
            //     case "": {
            //     }
            //     default: {
            //     }
            // }
            return handle(req, res)
        });
        server.listen(port, err => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        });
    })
}

export default startServer;