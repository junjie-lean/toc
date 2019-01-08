/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:03:02 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-07 18:56:07
 */


/**
 * 在next中使用expres.Router()的实例：
 * 
 */

import express from 'express';
const router = express.Router();

router.get('/name/:name', (req, res) => {
    console.log('query', req.query);
    console.log('params', req.params);
    res.send(req.params)
})
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

router.post('/systeam/module/get', (req, res) => {
    res.json({
        result: true,
        data: {
            ...process.env
        }
    })
})
export default router