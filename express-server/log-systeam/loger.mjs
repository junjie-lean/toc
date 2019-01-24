import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import 'winston-daily-rotate-file';
import path from 'path';
import config from './../../config/config';
const router = express.Router();

let isDev = config.base.isDev;

let needLoger = config.log.needLoger;
let logFilePrefix = config.log.logFilePrefix;
let needZipLog = config.log.needZipLog;
let perLogSize = config.log.perLogSize;
let maxFilesSize = config.log.maxFilesSize
let dirname__ = path.join(process.cwd(), 'logs');
let needTailLog = config.log.needTailLog;

let infoLog = () => {
    //router过滤关键词
    let transport = [];//log输出流配置，
    if (isDev && needTailLog) {
        transport.push(
            new winston.transports.Console()
        )
    }

    let ignoreRoute = (req, propName) => {
        let ignoreKeyWords = ['/webpack-hmr', 'ping?page=', '/favicon.ico', '/styles.chunk.css', '/webpack.js', '/styles.js', '/dll/dll'];
        let ishit = false;
        for (let keywold in ignoreKeyWords) {
            if (req.originalUrl.indexOf(keywold) != -1) {
                ishit = true;
                break;
            }
        }
        return ishit;
    }

    if (needLoger) {
        // let info = new winston.transports.File({ filename: './info.log', level: "info" });
        // let error = new winston.transports.File({ filename: './error.log', level: "error" });
        //需要进行log日志化http请求
        // console.log(0);
        transport.push(
            new (winston.transports.DailyRotateFile)({
                filename: `${logFilePrefix}-info-%DATE%.log`,
                dirname: dirname__,
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: needZipLog,
                maxSize: perLogSize,
                maxFiles: maxFilesSize
            })
        )
        return expressWinston.logger({
            transports: [
                ...transport
            ],
            fromat: winston.format.combine(
                winston.format.colorize(),
                winston.format.json()
            ),
            meta: false,
            level: "info",
            msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
            expressFormat: true,
            // ignoreRoute: ignoreRoute,
        })
    } else {
        //不需要进行log日志化http请求
        return expressWinston.logger({
            slient: true//all logs are suppressed
        })
    }
}

let errorLog = () => {
    let transport = [];//log输出流配置，
    if (isDev) {
        transport.push(
            new winston.transports.Console(),
        )
    }
    if (needLoger) {
        transport.push(
            new (winston.transports.DailyRotateFile)({
                filename: `${logFilePrefix}-info-%DATE%.log`,
                dirname: dirname__,
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: needZipLog,
                maxSize: perLogSize,
                maxFiles: maxFilesSize
            })
        )
        return expressWinston.errorLogger({
            transports: [
                ...transport
            ],
            fromat: winston.format.combine(
                winston.format.colorize(),
                winston.format.json()
            ),
            meta: true,
            level: "error",
            msg: "HTTP method:{{req.method}},url:{{req.url}},statusCode:{{res.statusCode}},resTime:{{res.responseTime}}ms",
            expressFormat: true,
        })
    } else {
        //不需要进行log日志化http请求
        return expressWinston.logger({
            slient: true//all logs are suppressed
        })
    }
}

router.use(infoLog());
router.use(errorLog());


export default router;