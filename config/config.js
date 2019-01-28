const fs = require('fs');
const path = require('path');

module.exports = {
    /* base config */
    base: {
        /**
         * !!! warning
         * 此对象仅能做基础配置，
         * 此配置将暴露给前端，
         * 不可在此对象内填写服务器相关配置；
         * warning end;
        */
        // { Boolean : * } 当前运行环境是否是开发环境
        isDev: process.env.NODE_ENV == 'development',
        // { Number : 3000 } 开发环境服务端口
        devPort: 3000,
        // { Number : 4000 } 生产环境服务端口,短端口可另外配Nginx做端口代理
        proPort: 4000,
        // { String : "URL" } 中间层接口地址，默认本服务
        virtualServiceURL: 'http://localhost:3000/',
        // { String : "URL" } 后端接口地址
        trueServiceURL: 'http://localhost:8080',
        // { Boolean : false } 是否需要多线程模式启动项目，默认false关闭，开启后可使用多线程模式启动项目，在多核CPU下可显著支持并发数。开发模式不建议启用，windows不支持。
        isCluster: false,
    },
    /**========================================================================================= */
    //格式 日志级别 日志地址 日志打包逻辑等
    log: {
        // { Boolean : true } 是否启用日志系统
        needLoger: true,
        // { String : "app" } 日志前缀
        logFilePrefix: 'app',
        // { Boolean : true } 是否启用日志打包
        needZipLog: true,
        // { String : "20m" } 单个日志文件最大文件大小,单位（兆）
        perLogSize: '20M',
        // { String : "7d" } 需要保存最近几天的日志文件，超期将会被删除，单位（天）
        maxFilesSize: '7d',
        // { Boolean : true } 是否启用滚屏显示http请求,仅dev模式有效
        needTailLog: false,
        // { Boolean : false } 是否需要初始化清除一小时以前创建的log,仅dev模式有效
        needInitCleanLog: true

    },
    /**========================================================================================= */
    /* systeam moniter config */
    systeamMonitor: {
        // { Boolean : true } 是否启用系统监控系统
        needMonitor: true,
        // { String : "性能监控" } 
        pageTitle: "服务器性能监控",
        // { String : "pathname" }  pathname
        pagePath: "/performance",
        // { Boolean : true } 是否启用对应项监控
        cpu: true,
        mem: true,
        load: true,
        responseTime: true,
        rps: false,
        statusCodes: true
    },
    /**========================================================================================= */
    /* api call listen config */
    apiListen: {
        // { Boolean : true } 是否启用接口转发模式
        ajaxTranspond: true,
    },
    /**========================================================================================= */
    /* create G.js */
    createGlobalFile: (pr) => {
        // console.log(pr);
        let data = ` 
/*
* @Author: junjie.lean
* @Date: 2018-12-22 00:08:05
* @Last Modified by: lean
* @Last Modified time: 2019-01-08 22:14:23
*/

/**
* @description 针对前端的全局临时变量,此文件动态生成，
* @description 对此文件的修改重启后会被覆盖，
* @description 可修改"./../../config/config.js"的base属性
*/

let data=${JSON.stringify(pr)};

export const G = JSON.parse(data);

window.G = G;
        `;
<<<<<<< HEAD
        // fs.writeFileSync(path.join(process.cwd(), 'src', 'js', 'g.js'), data, { encoding: 'utf8', flag: 'w+' })
=======
        // fs.writeFileSync(path.join('..', 'src', 'js', 'g.js'), data, { encoding: 'utf8', flag: 'w+' })
>>>>>>> fe682e2add9db6edd0d2536041e9c47e5bcbe3a4
    }
}

