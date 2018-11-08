'use strict';

var _chai = require('chai');

var _e2eCommon = require('./e2e-common');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

describe('React application', function () {
  describe('open page', function () {
    it('should display title', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var page;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return browser.newPage();

            case 2:
              page = _context.sent;
              _context.next = 5;
              return page.goto(_e2eCommon.baseURL);

            case 5:
              _context.next = 7;
              return page.waitForSelector('h2', { timeout: 1000 });

            case 7:
              _context.t0 = _chai.expect;
              _context.next = 10;
              return page.$eval('h2', function (e) {
                return e.innerText;
              });

            case 10:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1).to.equal('Hello World!');

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    })));
  });
});