/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-08 23:10:00
 */


/**
 * 本文件执行命令： node、nodemon 
 * 本文件执行参数： --experimental-modules
 */

import cluster from 'cluster';
import os from 'os';
import startServer from './next/next-server';
import fs from 'fs';
import path from 'path';
import config from './config/config';
import async from 'async';
const osType = process.platform;
const dev = config.base.isDev;
const needClearLog = 1 && config.log.needInitCleanLog;

// if (dev && needClearLog) {
//     console.log('inter')
//     //开发模式下，初始化立即删除日志
//     let files = fs.readdirSync(path.join(process.cwd(), 'logs'));
//     console.log(files)
//     files.filter(item => {
//         console.log(item)
//         return item.indexOf('DS_Store') == -1
//     }).map(item => {
//         console.log(item)
//         console.log(`即将删除文件：${item}`);
//         fs.unlinkSync(path.join(process.cwd(), 'logs', item))
//     })
// }

// if (!dev && osType != 'win32' && config.base.isCluster) {
//     if (cluster.isMaster) {
//         for (let i = 0; i < os.cpus().length; i++) {
//             cluster.fork();
//         }
//     } else {
//         startServer()
//     }
// } else {
//     startServer()
// }



async.series([
    (callback) => {
        console.log(1)
        if (dev && needClearLog) {
            // console.log('inter')
            //开发模式下，初始化立即删除日志
            let files = fs.readdirSync(path.join(process.cwd(), 'logs'));
            // console.log(files)
            files.filter(item => {
                console.log(item)
                return item.indexOf('DS_Store') == -1 || item.indexOf(".json") == -1
            }).map(item => {
                // console.log(item)
                console.log(`即将删除文件：${item}`);
                fs.unlinkSync(path.join(process.cwd(), 'logs', item))
            })
        }
        console.log(1.5)
        callback();
    },
    (callback) => {
        console.log(2)
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
        callback();
    }
])