/*
 * @Author: junjie.lean 
 * @Date: 2019-01-07 21:46:14 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-10 16:59:30
 */

/**
 * @description 对node语法进行降级编译
 */

const path = require('path');
const cp = require('child_process');
const fs = require('fs');
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
                // fs.unlink(filepath, (err) => {
                //     if (err) {
                //         console.log(err)
                //     }
                //     console.log('Delete the file:', path.basename(filepath))
                // })
            }
        }

    })
}

let confirm = () => {
    console.log(chalk.bgRed(" ATTENTION "), chalk.yellow('Need to delete the source files after Babel is compiled?'))
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question(` => y(${chalk.red("yes")}) or n(no):  `, (answer) => {
        if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
            needDelete = true;
            console.log(chalk.bgRed.bold(' Not support Delete source file '))
        }
        rl.close();
        signale.start('start compile ...')
    })
}

let babel = () => {
    // console.log('needDelete:', needDelete)
    let dirList = fs.readdirSync(cwd).filter((item) => {
        return item == "express-server" ||
            item == "next-server" ||
            item == "src" ||
            path.extname(item) == '.mjs'
    });
    dirList.map((item) => {
        // console.log(item)
        let stats = fs.statSync(path.join(cwd, item));
        if (stats.isDirectory()) {
            loop(path.join(cwd, item))
            function loop(_path) {
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
        } else {
            babelFileFun(path.join(cwd, item))
        }
    })
}


//流程控制
async.series([
    (cb) => {
        confirm();
        cb(null);
    },
    (cb) => {
        babel();
        cb(null);
    },
    (cb) => {
        setTimeout(() => {
            // signale.success('compile all mjs file success ...')
            cb(null)
        }, 100)
    }
])
