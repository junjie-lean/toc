/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-25 10:21:20
 */


/**
 * 本文件执行命令： node、nodemon 
 * 本文件执行参数： --experimental-modules
 */

const cluster = require('cluster');
const path = require('path');
const os = require('os');
const fs = require('fs');
const chalk = require('chalk');
const async = require('async');
const startServer = require('./toc-server/toc-server');
const config = require('./config/config');

const osType = process.platform;
const dev = config.base.isDev;
const needClearLog = config.log.needInitCleanLog;

let cleanLog = () => {
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

}

let startCluster = () => {
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
}

async.series([
    (callback) => {
        //g.js写入操作
        config.createGlobalFile(config.base);
        callback();
    },
    (callback) => {
        cleanLog();
        callback();
    },
    (callback) => {
        startCluster();
        callback();
    },
    (callback) => {
        callback();
    }
])