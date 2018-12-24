/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:10 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-24 10:49:46
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


const router = express.Router();


let isDev = process.env.NODE_ENV == "development";
let needLoger = true;
let logFilePrefix = '';
let needZipLog = true;
let perLogSize = '20M';
let maxFilesSize = '10d';
let dirname__ = path.join(process.cwd(), 'logs');

let infoLog = () => {
    let transport = [];//log输出流配置，
    if (isDev) {
        transport.push(
            // new winston.transports.Console(),
        )
    }
    let ignoreRoute = (req, res) => {
        // console.log(req.query)
        // console.log(req[key])
        // for (let key in req) {
        //     console.log(key)
        // }
        // let { log } = console;
        // log("ip", req.ip);
        // log('query', req.query);
        // log("path", req.path);
        // log("hostname", req.hostname);
        // log("ips", req.ips);
        // log("headers", req.headers);
        // log("xhr", req.xhr);
    }
    if (needLoger) {
        // let info = new winston.transports.File({ filename: './info.log', level: "info" });
        // let error = new winston.transports.File({ filename: './error.log', level: "error" });
        //需要进行log日志化http请求
        transport.push(
            new (winston.transports.DailyRotateFile)({
                filename: 'info-%DATE%.log',
                dirname: dirname__,
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: true,
                maxSize: '10m',
                maxFiles: '7d'
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
            msg: "HTTP {{req.method}} {{req.url}}",
            expressFormat: true,
            colorize: true,
            ignoreRoute: ignoreRoute
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
                filename: 'error-%DATE%.log',
                dirname: dirname__,
                datePattern: 'YYYY-MM-DD-HH',
                zippedArchive: true,
                maxSize: '10m',
                maxFiles: '7d'
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
            meta: false,
            level: "error",
            msg: "HTTP {{req.method}} {{req.url}}",
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