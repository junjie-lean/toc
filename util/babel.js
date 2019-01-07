/*
 * @Author: junjie.lean 
 * @Date: 2019-01-07 21:46:14 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-08 00:02:45
 */

/**
 * 对实验性的node语法进行编译
 */

const path = require('path');
const cp = require('child_process');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk');
const async = require('async');
let cwd = process.cwd(); // ==> out path

let needDelete = false;
let babelFileFun = (filepath) => {
    if (!filepath || !path.isAbsolute(filepath) || path.extname(filepath) == ".js") {
        return false
    }
    let item = path.basename(filepath)
    let arr = ['babel', filepath,
        '-o',
        path.join(path.dirname(filepath), path.basename(item, '.mjs') + '.js')]

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
        }
        console.log(code)
        if (needDelete) {
            fs.unlink(filepath)
        }
    })

}

let confirm = (callback) => {
    console.log(chalk.yellow('Need to delete the source files after Babel is compiled?'))
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question(`=>y(${chalk.red("to YES")}) or n(to NO):  `, (answer) => {
        if (answer.toLowerCase() == "yes" || answer.toLowerCase() == "y") {
            needDelete = true;
        }
        rl.close();
        callback(null,1)
    })
   
}

let babel = (callback) => {
    console.log('babel')
    let dirList = fs.readdirSync(cwd);
    dirList.filter((item) => {
        return item == "express-server" ||
            item == "next" ||
            path.extname(item) == '.mjs'
    }).map((item) => {
        // console.log(item)
        fs.stat(path.join(cwd, item), (err, stats) => {
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
                        // console.log(_path)
                        // console.log(path.basename(_path))
                        if (path.extname(_path) == '.mjs') {
                            babelFileFun(_path);
                         
                        }
                    }
                }

            } else {
                babelFileFun(path.join(cwd, item))
            }
        })
        callback(null,2)
    })
}

async.series([confirm,babel]);
