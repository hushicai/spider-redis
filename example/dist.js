module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getList = exports.del = exports.update = exports.read = exports.create = undefined;

var _promise = __webpack_require__(6);

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = __webpack_require__(8);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(7);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var __makeTask = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(key) {
    var result, rule;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return client.get(key);

          case 3:
            result = _context.sent;


            // 转成json格式
            rule = JSON.parse(result);
            return _context.abrupt('return', rule);

          case 8:
            _context.prev = 8;
            _context.t0 = _context['catch'](0);

            console.log(_context.t0);

            return _context.abrupt('return', _context.t0);

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 8]]);
  }));

  return function __makeTask(_x) {
    return _ref.apply(this, arguments);
  };
}();

var create = exports.create = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(rule) {
    var d, key, result;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            d = JSON.parse(rule);
            key = d.id;
            _context2.prev = 2;
            _context2.next = 5;
            return client.set(key, rule);

          case 5:
            result = _context2.sent;
            return _context2.abrupt('return', result);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](2);

            console.log(_context2.t0);
            return _context2.abrupt('return', _context2.t0);

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[2, 9]]);
  }));

  return function create(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var read = exports.read = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(key) {
    var task, rule;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            task = __makeTask(key);
            _context3.prev = 1;
            _context3.next = 4;
            return task;

          case 4:
            rule = _context3.sent;
            return _context3.abrupt('return', rule);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3['catch'](1);

            console.log(_context3.t0);

            return _context3.abrupt('return', _context3.t0);

          case 12:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[1, 8]]);
  }));

  return function read(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

var update = exports.update = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(id, rule) {
    var d, key;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            d = JSON.parse(rule);
            key = d.id;
            _context4.prev = 2;

            if (!(id != key)) {
              _context4.next = 6;
              break;
            }

            _context4.next = 6;
            return client.del(id);

          case 6:
            _context4.next = 8;
            return client.set(key, rule);

          case 8:
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4['catch'](2);

            console.log(_context4.t0);

          case 13:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[2, 10]]);
  }));

  return function update(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();

var del = exports.del = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(key) {
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;

            client.del(key);

            return _context5.abrupt('return', 0);

          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5['catch'](0);

            console.log(_context5.t0);
            return _context5.abrupt('return', 1);

          case 9:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 5]]);
  }));

  return function del(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

var getList = exports.getList = function () {
  var _ref6 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee6() {
    var result, tasks, _result;

    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return client.keys('rule:*');

          case 2:
            result = _context6.sent;
            tasks = result.map(function (key) {
              return __makeTask(key);
            });
            _context6.prev = 4;
            _context6.next = 7;
            return _promise2.default.all(tasks);

          case 7:
            _result = _context6.sent;
            return _context6.abrupt('return', _result);

          case 11:
            _context6.prev = 11;
            _context6.t0 = _context6['catch'](4);

            console.log(_context6.t0);
            return _context6.abrupt('return', _context6.t0);

          case 15:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, this, [[4, 11]]);
  }));

  return function getList() {
    return _ref6.apply(this, arguments);
  };
}();

var _redis = __webpack_require__(3);

var _redis2 = _interopRequireDefault(_redis);

var _createClient = __webpack_require__(2);

var _createClient2 = _interopRequireDefault(_createClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @file rule model
 * @author hushicai(bluthcy@gmail.com)
 */

var client = (0, _createClient2.default)(_redis2.default.rule_redis_db);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rule = __webpack_require__(0);

var rule = _interopRequireWildcard(_rule);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(rule);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createClient;

var _redis = __webpack_require__(9);

var _redis2 = _interopRequireDefault(_redis);

var _spiderUtils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createClient() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var client = _redis2.default.createClient(opts);

  var keys = (0, _spiderUtils.promisify)(client.keys, client);

  // string
  var pdel = (0, _spiderUtils.promisify)(client.del, client);
  var pset = (0, _spiderUtils.promisify)(client.set, client);
  var pget = (0, _spiderUtils.promisify)(client.get, client);

  return {
    get: pget,
    del: pdel,
    set: pset,
    keys: keys
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @file redis配置信息
 * @author hushicai(bluthcy@gmail.com)
 */

function _get(db) {
  return {
    host: 'localhost',
    port: 6379,
    db: db
  };
}

module.exports = {
  rule_redis_db: _get(0),

  url_redis_db: _get(1),

  report_redis_db: _get(2),

  proxy_redis_db: _get(3)
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.promisify = undefined;

var _promisify2 = __webpack_require__(5);

var _promisify3 = _interopRequireDefault(_promisify2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.promisify = _promisify3.default; /**
                                          * @file entry
                                          * @author hushicai(bluthcy@gmail.com)
                                          */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file primisifty
 * @author hushicai(bluthcy@gmail.com)
 */

var promisify = function promisify(fn, receiver) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      fn.apply(receiver, [].concat(args, [function (err) {
        for (var _len2 = arguments.length, res = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          res[_key2 - 1] = arguments[_key2];
        }

        // resolve只能一个参数，所以判断一下
        var v = res.length > 1 ? res : res[0];

        return err ? reject(err) : resolve(v);
      }]));
    });
  };
};

exports.default = promisify;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redis");

/***/ })
/******/ ]);