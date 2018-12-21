/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:11:10 
 * @Last Modified by: lean
 * @Last Modified time: 2018-12-22 00:02:44
 */

 /**
  * 集成Winston日志系统
  * 
  */


import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';

const router = express.Router();

let logger = (error) => {
    return expressWinston.logger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: './info.log', level: "info" }),
            new winston.transports.File({ filename: './error.log', level: "error" }),
        ],
        fromat: winston.format.combine(
            winston.format.colorize(),
            winston.format.json()
        ),
        meta: false,
        msg: "HTTP {{req.method}} {{req.url}}",
        expressFormat: true,
        colorize: true,
        ignoreRoute: function (req, res) { return false; }
    })
}

router.use(logger());
router.post('*', (req, res, next) => {
    return res.json({
        result: true
    })
})

export default router;