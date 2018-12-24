/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-24 19:09:43
 */


/**
 * 本文件执行命令： node、nodemon 
 * 本文件执行参数： --experimental-modules
 */

import cluster from 'cluster';
import os from 'os';
import startServer from './next/next-server.mjs';
import fs from 'fs';
import path from 'path';
import config from './config/config';

const osType = process.platform;
const dev = config.base.isDev;
const needClearLog = !true;

if (dev && needClearLog) {
    //开发模式下，初始化立即删除日志
    let files = fs.readdirSync(path.join(process.cwd(), 'logs'));
    files.filter(item => {
        return item.indexOf('DS_Store') == -1
    }).map(item => {
        console.log(`即将删除文件：${item}`);
        fs.unlinkSync(path.join(process.cwd(), 'logs', item))
    })
}

if (!dev && osType != 'win32' && config.base.isCluster) {
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