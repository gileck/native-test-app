'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseURL = undefined;

var _puppeteer = require('puppeteer');

var _puppeteer2 = _interopRequireDefault(_puppeteer);

var _server = require('../dev/server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

before(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _server.start)(3100);

        case 2:
          _context.next = 4;
          return _puppeteer2.default.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
          });

        case 4:
          global.browser = _context.sent;

        case 5:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
})));

after(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return global.browser.close();

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, undefined);
})));

var baseURL = exports.baseURL = 'http://localhost:3100';