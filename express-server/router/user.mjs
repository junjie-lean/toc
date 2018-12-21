/**
 * 在next中使用expres.Router()的实例：
 */

import express from 'express';
const router = express.Router();

router.get('/name/:name', (req, res) => {
    console.log('query', req.query);
    console.log('params', req.params);
    res.send(req.params)
})

export default router