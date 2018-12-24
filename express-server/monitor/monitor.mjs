/*
 * @Author: junjie.lean
 * @Date: 2018-12-24 17:08:57
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-24 19:10:34
 */

/**
 * server-monitor Middleware
 */

import express from 'express';
import expressStatusMonitor from 'express-status-monitor';
import config from './../../config/config';

const router = express.Router();
let option = {
    title: "服务器性能监控",
    theme: 'default.css',     // Default styles
    path: '/performance',
    spans: [{
        interval: 1,            // Every second
        retention: 60           // Keep 60 datapoints in memory
    }, {
        interval: 5,            // Every 5 seconds
        retention: 60
    }, {
        interval: 15,           // Every 15 seconds
        retention: 60
    }, {
        interval: 60,
        retention: 60
    }],
    chartVisibility: {
        cpu: true,
        mem: true,
        load: true,
        responseTime: true,
        rps: true,
        statusCodes: true
    },
}
router.use(expressStatusMonitor(option))
export default router