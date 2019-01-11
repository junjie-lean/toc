 
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

let data={"isDev":false,"devPort":3000,"proPort":4000,"virtualServiceURL":"http://localhost:3000/","trueServiceURL":"http://localhost:8080","isCluster":false};

export const G = JSON.parse(data);

window.G = G;
        