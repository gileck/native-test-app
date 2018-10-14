'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _wixAxiosConfig = require('wix-axios-config');

var _testCommon = require('./test-common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _wixAxiosConfig.wixAxiosConfig)(_axios2.default, { baseURL: _testCommon.baseURL });
//# sourceMappingURL=mocha-setup.js.map