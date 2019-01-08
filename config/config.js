/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:08:16 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-08 16:22:59
 */

/**
 * 配置信息集合：
 * 介绍：configuration对象包含了基础配置/http日志配置/系统监控配置/请求接口监听配置；
 * 更改此文件时，需要重启系统使配置生效；
 * Warning : 如果不清楚此文件所描述的具体意义项，请勿随意更改配置。
 */

module.exports = {
    /* base config */
    base: {
        /**
         * warning：
         * 此对象仅能做基础配置，
         * 此配置将暴露给前端，
         * 不可在此对象内填写服务器相关配置；
         * warning end;
        */
        // { Boolean : * } 当前运行环境是否是开发环境
        isDev: process.env.NODE_ENV == 'development',
        // { Number : 3000 } 开发环境服务端口
        devPort: 3000,
        // { Number : 8080 } 生产环境服务端口,短端口可另外配Nginx做端口代理
        proPort: 8080,
        // { String : "URL" } 中间层接口地址
        virtualServiceURL: 'http://localhost:3000/',
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
        // { Boolean : false } 是否需要初始化清除log,仅dev模式有效
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
        ajaxTransform: true,
    }
    /**========================================================================================= */

}

