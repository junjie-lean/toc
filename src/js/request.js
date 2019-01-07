/*
 * @Author: junjie.lean 
 * @Date: 2019-01-07 16:32:26 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-07 19:02:08
 */

/**
 * 请求方式，包含浏览器端的请求方式和服务端中间层的请求方式
 * 可以走中间层转发，也可以直接请求后端真实接口
 */

import axios from 'axios';

// const baseURL = "http://10.10.1.231:12120";
const baseURL = "http://localhost:3000";
axios.defaults.baseURL = baseURL;
axios.defaults.headers = {
    'Content-Type': "application/x-www-form-urlencoded",
    headers: {
        // whereifrom: "client"
    }
}

const log = process.send ? process.send : console.log;

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
 * @description 生成next服务端请求参数体 返回值就是服务端的请求体 根据后端需求可以调整
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
 * @description 生成n客户端请求参数体 返回值就是客户端的请求体 根据后端需求可以调整
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
 * @param { String } method 接口地址
 * @param { Object } pr  请求参数
 * @param { Object } req express请求对象 
 * @param { Function } scb 成功回调
 * @param { Function } ucb 异常回调
 * @param { Function } fcb 失败回调
 * @description 
 * 
 */
const fetchData = async (
    method = '/api',
    pr = {},
    req = null,
    scb = (req) => {
        log(req)
    },
    ucb = () => {
        log('请求结果200但是result为false')
    },
    fcb = (code) => {
        log(code, '请求结果非200')
    },
) => {
    let data;
    if (req) {
        data = await axios.post(method, createParamInServer(pr, req), {
            headers: {
                proxy: "next"
            }
        });
    } else {
        data = await axios.post(method, createParamInClient(pr), {
            // headers: {
            // proxy: "client"
            // }
        });
    }
    log(data.data)
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

export default {
    getQueryString,
    createParamInServer,
    createParamInClient,
    fetchData
}

