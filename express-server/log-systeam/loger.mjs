import express from 'express';
import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';

const router = express.Router();

let logger = () => {
    return expressWinston.logger({
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: , level: "info" }),
            new winston.transports.File({ filename: '../../', level: "error" }),
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