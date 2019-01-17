import express from 'express';
import next from 'next';
import reqtrans from './../express-server/router/reqtrans';
import logger from './../express-server/log-systeam/loger';
import monitor from './../express-server/monitor/monitor';
import bodyParser from 'body-parser';
import config from '../config/config';


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
        //请求转发中间件
        server.use(reqtrans);

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