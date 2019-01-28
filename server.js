/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 09:25:32 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-28 10:16:07
 */


const cluster = require('cluster');
const os = require('os');
const fs = require('fs');
const path = require('path');
const async = require('async');
const chalk = require('chalk');
const config = require('./config/config');
const startServer = require('./express-server/next/next-server');
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
startServer()
// async.series([
//     (callback) => {
//         cleanLog();
//         callback();
//     },
//     (callback) => {
//         startCluster();
//         callback();
//     }
// ])