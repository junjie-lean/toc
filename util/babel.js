/*
 * @Author: junjie.lean 
 * @Date: 2019-01-07 21:46:14 
 * @Last Modified by: lean
 * @Last Modified time: 2019-01-07 22:55:39
 */

/**
 * 对实验性的node语法进行编译
 */

const path = require('path');
const cp = require('child_process');
const fs = require('fs');
const async = require('async');

let cwd = process.cwd(); // ==> out path


let babelFileFun = (filepath) => {
    if (!filepath && path.isAbsolute(filepath)) {
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
    })

}

let dirList = fs.readdirSync(cwd);
dirList.filter((item) => {
    return item == "express-server" ||
        item == "next" ||
        path.extname(item) == '.mjs'
}).map((item) => {
    // console.log(item)
    fs.stat(path.join(cwd, item), (err, stats) => {
        if (stats.isDirectory()) {
            let thisPath = path.join(cwd, item);
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
                    babelFileFun(_path);
                }
            }
            loop(thisPath)
        } else {
            babelFileFun(path.join(cwd, item))
        }
    })
})

// console.log(dir);