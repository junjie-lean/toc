/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:08:16 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2018-12-24 19:12:41
 */

/**
 * 配置信息集合：
 * 介绍：configuration对象包含了基础配置/http日志配置/系统监控配置/请求接口监听配置；
 * 更改此文件时，需要重启系统使配置生效；
 * Warning : 如果对于此文件所表达的描述不清楚，请勿随意更改配置。
 */

const configuration = {
    /* base config */
    base: {
        // { Boolean : * } 当前运行环境是否是开发环境
        isDev: process.env.NODE_ENV == 'development',
        // { Number : 3000 } 开发环境服务端口
        devPort: 3000,
        // { Number : 8080 } 生产环境服务端口,短端口可另外配Nginx做端口代理
        proProt: 8080,
        // { String : "URL" } 中间层接口地址
        virtualServiceURL: 'http://localhost:3000/ajaxTrans/api',
        // { Boolean : false } 是否需要多线程模式启动项目，默认false关闭，开启后可使用多线程模式启动项目，在多核CPU下可显著支持并发数。开发模式不建议启用，windows不支持。
        isCluster: false,
    },
    /**========================================================================================= */
    /* http loger config */
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
        // { Boolean : false } 是否启用滚屏显示http请求
        needTailLog: false,


    },
    /**========================================================================================= */
    /* systeam moniter config */
    systeamMoniter: {
        // { Boolean : true } 是否启用系统监控系统
        needMonitor: true,
        
    },
    /**========================================================================================= */
    /* api call listen config */
    apiListen: {
        // { Boolean : true } 是否启用接口转发模式
        ajaxTransform: true,
    }
}

export default configuration