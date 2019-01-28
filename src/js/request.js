/*
 * @Author: junjie.lean 
 * @Date: 2019-01-07 16:32:26 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-28 10:11:11
 */

/**
 * 请求方式，包含浏览器端的请求方式和服务端中间层的请求方式
 * 可以走中间层转发，也可以直接请求后端真实接口
 */

const axios = require('axios');
const config = require('./../../config/config');
const log = process.send ? process.send : console.log;
const base = config.base;
/**
 * @description 根据配置设置后端接口地址
 * @description 开启转发模式时，地址为中间层转发地址
 * @description 关闭时，地址为真实后端地址
 */

const NEED_TRANSPOND_AJAX = config.apiListen.ajaxTranspond;
const BASEURL = NEED_TRANSPOND_AJAX ? `${base.virtualServiceURL}` : `${base.trueServiceURL}`;
axios.defaults.baseURL = BASEURL;
axios.defaults.headers = {
    'Content-Type': "application/x-www-form-urlencoded",
    headers: {
        // whereifrom: "client"
    }
}

/**
 * 
 * @param { String } name 
 * @description 根据给定的key获取URL中对应的参数 （“？”后面的）
 * @description 只能在客户端调用，不需要初始化实例axios对象
 */
const getQueryString = (name) => {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    if (window) {
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
    } else {
        throw new Error('调用错误：不能在服务端调用客户端方法！');
    }
}

/**
 * 
 * @param { Object } pr 
 * @param { Object } req 
 * @returns { String } 请求体
 * @description 生成next服务端请求参数体 返回值就是服务端的请求体 
 * @description 根据后端需求可以调整
 */
const createParamInServer = (pr = {}, req) => {
    let token, orgcode;
    if (req) {
        token = req.query.token;
        orgcode = req.query.orgcode;
    } else {
        throw new Error('参数错误：必须传入express的req参数');
    }
    let postData = {
        data: pr,
        certification: {
            tokenID: token,
            orgcode: orgcode
        }
    }
    return 'data=' + JSON.stringify(postData);
}

/**
 * 
 * @param { Object } pr 
 * @returns { String } 请求体
 * @description 生成n客户端请求参数体 返回值就是客户端的请求体
 * @description 根据后端需求可以调整
 */
const createParamInClient = (pr = {}) => {
    let token = getQueryString('token') || sessionStorage.token;
    let orgcode = getQueryString('orgcode') || sessionStorage.orgcode;
    let postData = {
        data: pr,
        certification: {
            tokenID: token,
            orgcode: orgcode
        }
    }
    return 'data=' + JSON.stringify(postData);
}



/**
 * 
 * @param { String } method 接口地址 默认"/api"
 * @param { Object } pr  请求参数 默认 {}
 * @param { Object } req express请求对象 
 * @param { Function } scb 成功回调
 * @param { Function } ucb 异常回调
 * @param { Function } fcb 失败回调
 * @description 服务端、客户端统一获取数据的async函数，
 * @description 根据参数req来判断当前执行栈是在服务端还是在客户端;
 * @description 如果是客户端，不需要传或者传null;
 * @description 如果是服务端，则必须传递getInitialProps函数的形参：req对象;
 * 
 */
const fetchData = async (
    method = '/api',
    pr = {},
    req = false,
    scb = (req) => {
        // log(req)
    },
    ucb = () => {
        // log('请求结果200但是result为false')
    },
    fcb = (code) => {
        // log(code, '请求结果非200')
    },
) => {
    let data;
    if (req) {
        //server side
        data = await axios.post(method, createParamInServer(pr, req), {
            headers: {
                proxy: "next"
            }
        });
    } else {
        //client side
        data = await axios.post(method, createParamInClient(pr), {
            // headers: {
            // proxy: "client"
            // }
        });
    }
    // log(data.data)
    if (data.status == 200 && data.statusText == 'OK') {
        if (data.data.result) {
            scb(data.data);
        } else {
            ucb();
        }
    } else {
        fcb(data.status);
    }
    // return JSON.parse(data.data)
    return data.data
}


/**
 * @description fetchData的特殊请求方式：
 * @description 使请求在开启中间层转发的情况下依旧能绕过该机制,
 * @description 直接访问真实接口，也用于某些特别的情况； 
 * @description 该方法等同于关闭了中间层转发情况下的fetch_data； 
 * @param { String } method 接口地址 默认"/api"
 * @param { Object } pr  请求参数 默认 {}
 * @param { Object } req express请求对象 
 * @param { Function } scb 成功回调
 * @param { Function } ucb 异常回调
 * @param { Function } fcb 失败回调
 */
const SPECIAL_fetchData = async (
    method = '/api',
    pr = {},
    req = false,
    scb = (req) => {
        // log(req)
    },
    ucb = () => {
        // log('请求结果200但是result为false')
    },
    fcb = (code) => {
        // log(code, '请求结果非200')
    },
) => {
    //...
}

/**
 * 
 * @param { Object } pr 
 * @description ajax转发函数 
 * @description 转发方向 中间层 => 真实后端
 */
const transAjax = async (method, pr) => {
    console.log('before transpond ajax')
    let data = await axios.post(method, pr, {
        baseURL: base.trueServiceURL + "/api"
    });
    return data
}

module.exports = {
    getQueryString,
    createParamInServer,
    createParamInClient,
    fetchData,
    SPECIAL_fetchData,
    transAjax
}