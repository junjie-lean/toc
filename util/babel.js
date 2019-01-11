/*
 * @Author: junjie.lean 
 * @Date: 2019-01-07 21:46:14 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-11 12:33:27
 */

/**
 * @description 对node语法进行降级编译
 */

const path = require('path');
const cp = require('child_process');
const fs = require('fs');
const readlineSync = require('readline-sync');
const readline = require('readline');
const chalk = require('chalk');
const async = require('async');
const signale = require('signale');

let cwd = process.cwd(); // ==> out path
let NEED_BABEL_DIR = []
let needDelete = false;
let babelFileFun = (filepath) => {
    if (!filepath || !path.isAbsolute(filepath) || path.extname(filepath) == ".js") {
        return false
    }
    let item = path.basename(filepath)
    let arr = [
        'babel',
        '--plugins',
        '@babel/plugin-transform-modules-commonjs',
        filepath,
        '-o',
        path.join(path.dirname(filepath), path.basename(item, '.mjs') + '.js')]

    // let babelFile = cp.spawnSync('npx', arr, { shell: process.platform == "win32" })
    let babelFile = cp.spawn('npx', arr, { shell: process.platform == "win32" })
    babelFile.stdout.on('data', (data) => {
        console.log(data.toString())
    })
    babelFile.stderr.on('data', (err) => {
        console.log(err.toString())
    })
    babelFile.on('close', (code) => {
        if (code != 0) {
            //进程异常退出
            console.log(code)
        } else {
            if (needDelete) {
                fs.unlinkSync(filepath, (err) => {
                    if (err) {
                        console.log(err)
                    }
                })
                console.log('Delete the file:', path.basename(filepath))
            }
        }

    })
}

let loop = (_path) => {
    let o = fs.statSync(_path)
    if (o.isDirectory()) {
        let thisChildPath = fs.readdirSync(_path);
        thisChildPath.map((item) => {
            // console.log(path.join(_path,item))
            loop(path.join(_path, item))
        })
    } else {
        if (path.extname(_path) == '.mjs') {
            babelFileFun(_path);
        }
    }
}

let confirm = () => {
    let answer = readlineSync.keyInYN(`${chalk.bgRed(' Need to delete the source files after Babel is compiled? ')}`);
    if (answer) {
        needDelete = true;
    } else {

    }
}

let babel = () => {
    let dirList = fs.readdirSync(cwd).filter((item) => {
        return item == "express-server" ||
            item == "next-server" ||
            item == "src" ||
            path.extname(item) == '.mjs'
    });
    async.each(dirList, (item) => {
        let stats = fs.statSync(path.join(cwd, item));
        if (stats.isDirectory()) {
            loop(path.join(cwd, item))
        } else {
            babelFileFun(path.join(cwd, item))
        }
    })

}


async.series([
    (cb) => {
        confirm();
        console.log(1);
        cb(null);
    },
    (cb) => {
        console.log(2);
        cb();
    },
    (cb) => {
        babel();
        console.log(3);
        cb(null);
    },
    (cb) => {
        console.log(4)
        signale.success('compile success')
        cb();
    }
])
