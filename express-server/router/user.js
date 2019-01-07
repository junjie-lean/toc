function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 * @Author: junjie.lean 
 * @Date: 2018-12-22 00:03:02 
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2019-01-07 18:56:07
 */

/**
 * 在next中使用expres.Router()的实例：
 * 
 */
import express from 'express';
var router = express.Router();
router.get('/name/:name', function (req, res) {
  console.log('query', req.query);
  console.log('params', req.params);
  res.send(req.params);
});
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
router.post('/systeam/module/get', function (req, res) {
  res.json({
    result: true,
    data: _objectSpread({}, process.env)
  });
});
export default router;
