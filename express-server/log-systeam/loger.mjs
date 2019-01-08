/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:10 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-08 22:31:37
 */

/**
 * @description Winston日志系统集成
 * 
 */


import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import 'winston-daily-rotate-file';
import path from 'path';
import config from './../../config/config';
const router = express.Router();

let isDev = config.base.isDev;

let needLoger =  config.logneedLoger;
let logFilePrefix =  config.loglogFilePrefix;
let needZipLog =  config.logneedZipLog;
let perLogSize =  config.logperLogSize;
let maxFilesSize =  config.logmaxFilesSize
let dirname__ = path.join(process.cwd(), 'logs');
let needTailLog =  config.logneedTailLog;

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

router.post('*', (req, res, next) => {
    return res.json({
        result: true
    })
})

export default router;