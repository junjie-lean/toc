/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-21 16:44:36
 */


/**
 * 本文件执行命令： node、nodemon 
 * 本文件执行参数： --experimental-modules
 */

import cluster from 'cluster';
import os from 'os';
import startServer from './next/next-server.mjs';
const dev = process.env.NODE_ENV !== 'production';
const osType = process.platform;

if (!dev && osType != 'win32') {
    if (cluster.isMaster) {
        for (let i = 0; i < os.cpus().length; i++) {
            cluster.fork();
        }
    } else {
        startServer()
    }
} else {
    startServer()
}