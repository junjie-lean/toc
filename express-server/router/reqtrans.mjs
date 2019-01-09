/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:03:02 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-10 00:24:36
 */


/**
 * @description 在next中使用expres.Router()的实例：
 * 
 */

import express from 'express';
import config from '../../config/config';
import request from '../../src/js/request';
const router = express.Router();
const needTranspondApi = config.apiListen.ajaxTranspond;

// router.get('/name/:name', (req, res) => {
//     console.log('query', req.query);
//     console.log('params', req.params);
//     res.send(req.params)
// })

const _transAjax = request.transAjax;
router.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

router.post('*', (req, res, next) => {
    if (needTranspondApi) {
        // console.log(req.app)
        // console.log(req.baseUrl) //挂载点
        // console.log(JSON.parse(req.body.data)) // 1 post data
        // console.log(req.cookies)
        // console.log(req.fresh)
        // console.log(req.hostname) //1
        // console.log(req.ip)
        // console.log(req.ips)
        // console.log(req.method) //1
        // console.log(req.originalUrl) //1 挂载点+path
        // console.log(req.params) 
        // console.log(req.path) //1
        // console.log(req.query) //1  get data
        // console.log(req.xhr) 
        let pr = JSON.parse(req.body.data);
        _transAjax(req.path, pr).then((response) => {
            // console.log('after transpon ajax', response)
            if (response.status == 200 && response.statusText == "OK") {
                return res.json({
                    result: true,
                    status:200,
                    message:'ok',
                    data: response.data
                })
            } else {
                return res.json({
                    result: false,
                    status:200,
                    message:'not ok',
                })
            }
        }).catch((err) => {
            return res.json({
                result: false,
                status:500,
                message:"error",
                err: err
            })
        })
    } else {
        next();
    }
})
export default router