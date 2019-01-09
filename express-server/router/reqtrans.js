"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../../config/config"));

var _request = _interopRequireDefault(require("../../src/js/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

var needTranspondApi = _config.default.apiListen.ajaxTranspond;
var _transAjax = _request.default.transAjax;
router.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
router.post('*', function (req, res, next) {
  if (needTranspondApi) {
    var pr = JSON.parse(req.body.data);

    _transAjax(req.path, pr).then(function (response) {
      if (response.status == 200 && response.statusText == "OK") {
        return res.json({
          result: true,
          status: 200,
          message: 'ok',
          data: response.data
        });
      } else {
        return res.json({
          result: false,
          status: 200,
          message: 'not ok'
        });
      }
    }).catch(function (err) {
      return res.json({
        result: false,
        status: 500,
        message: "error",
        err: err
      });
    });
  } else {
    next();
  }
});
var _default = router;
exports.default = _default;
