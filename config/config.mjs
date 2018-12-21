/*
 * @Author: junjie.lean 
 * @Date: 2018-12-21 23:08:16 
 * @Last Modified by: lean
 * @Last Modified time: 2018-12-22 00:02:22
 */

/**
 * 配置信息集合：
 * 介绍：configuration对象包含了基础配置/日志配置/系统监控配置/请求接口监听配置
 * Warning : 如果对于此文件所表达的描述不清楚，请勿随意更改配置。
 */

const configuration = {
    /* base config */
    // { Number : 3000 } 开发环境服务端口
    devPort: 3000,
    // { Number : 8080 } 生产环境服务端口,短端口可另外配Nginx做端口代理
    proProt: 8080,
    // { Boolean : true } 是否启用接口转发模式
    ajaxTransform: true,
    // { String : URL } 中间层接口地址
    virtualServiceURL: 'http://localhost:3000/ajaxTrans/api',
    // { Boolean : false } 是否需要多线程模式启动项目，默认false关闭，开启后可使用多线程模式启动项目，在多核CPU下可显著支持并发数。开发模式不建议启用，windows不支持。
    isCluster: false,

    /**========================================================================================= */
    /* loger config */
    //格式 日子级别 日志地址 日志打包逻辑等


    /**========================================================================================= */
    /* systeam moniter config */



    /**========================================================================================= */
    /* router listen config */

}

export default configuration