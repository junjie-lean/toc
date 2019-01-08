/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-08 23:59:00
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
import chalk from 'chalk';
const osType = process.platform;
const dev = config.base.isDev;
const needClearLog = config.log.needInitCleanLog;

async.series([
    (callback) => {
        if (dev && needClearLog) {
            let files = fs.readdirSync(path.join(process.cwd(), 'logs'));
            files.filter(item => {
                let condition = item.indexOf(".json") == -1;
                if (condition) {
                    //拿取文件创建时间    
                    let fileCreateTime = fs.statSync(path.join(process.cwd(), 'logs', item)).birthtimeMs;
                    // console.log(
                    //     new Date(fileCreateTime).toLocaleTimeString(),
                    //     new Date().getTime() - fileCreateTime,
                    //     1000 * 60 * 60
                    //     )
                    condition = condition && (new Date().getTime() - fileCreateTime > 1000 * 60 * 60)
                }
                return condition;
            }).map(item => {
                // console.log(item)
                console.log(`${chalk.bgRed("  Delete  ")}  ${chalk.red(item)}`);
                fs.unlinkSync(path.join(process.cwd(), 'logs', item))
            })
        }

        callback();
    },
    (callback) => {
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