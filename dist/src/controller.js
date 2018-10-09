'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {getThings} from './initialState';
var _require = require('./initialState'),
    getThings = _require.getThings;

module.exports = function () {
    var pageReady = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(updateControllerData) {
            var things;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return getThings();

                        case 2:
                            things = _context.sent;

                            $w.updateControllerData({ things: things });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function pageReady(_x) {
            return _ref2.apply(this, arguments);
        };
    }();

    var createApiClass = function createApiClass(Element) {
        return function (_Element) {
            _inherits(API, _Element);

            function API($w, superArgs) {
                var _ref;

                _classCallCheck(this, API);

                var _this = _possibleConstructorReturn(this, (_ref = API.__proto__ || Object.getPrototypeOf(API)).call.apply(_ref, [this].concat(_toConsumableArray(superArgs))));

                _this.$w = $w;
                return _this;
            }

            _createClass(API, [{
                key: 'things',
                set: function set(newThings) {
                    this.$w.updateControllerData({ newThings: newThings });
                },
                get: function get() {
                    return [1, 2, 3, 4, 5];
                }
            }]);

            return API;
        }(Element);
    };

    function controller(controllerConfig) {
        return {
            pageReady: pageReady,
            apiClass: createApiClass
        };
    }

    return {
        controller: controller
    };
}();