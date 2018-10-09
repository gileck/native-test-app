(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*************************!*\
  !*** ./initialState.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getThings = exports.getThings = function getThings(a, b, c) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var things = [1, 2, 3, 4, 5];
            resolve(things);
        }, 1000);
    });
};

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/*!*************************!*\
  !*** ./viewerScript.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import {getThings} from './initialState';

module.exports = function () {
    var pageReady = function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee($w) {
            var things;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return getThings();

                        case 2:
                            things = _context.sent;

                            $w.props({
                                things: things,

                                onSubmit: function onSubmit(a, b, newThings) {
                                    $w.props({
                                        things: newThings,
                                        a: a,
                                        b: b
                                    });
                                }
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        return function pageReady(_x) {
            return _ref4.apply(this, arguments);
        };
    }();

    var _require = __webpack_require__(/*! ./initialState */ 1),
        getThings = _require.getThings;

    var pubsub = void 0,
        updateCompProps = void 0;

    function initAppForPage(initAppParam, _ref, scopedGlobalSdkApis) {
        var pubSub = _ref.pubSub,
            nativeApi = _ref.nativeApi;

        pubsub = pubSub;
        return Promise.resolve();
    }

    function emptyController() {
        return {
            pageReady: function pageReady() {},
            exports: {}
        };
    }

    function isViewer() {
        return false;
    }

    function subscribeToWixCode() {
        if (pubsub) {
            pubsub.unsubscribe('add_to_cart_wix_code', id);
            id = pubsub.subscribe('add_to_cart_wix_code', function (_ref2) {
                var data = _ref2.data;


                $w('@this').props = { newThings: data.things };
            }, isFirstTime);
            //wix code run before this code only when the page is loaded in the first time
            isFirstTime = false;
        }
    }

    // async function pageReady($w) {
    //     const things = await getThings();
    //     const native = $w('@this');
    //     native.props = {things};
    //     if (isIframe()) {
    //         subscribeToWixCode()
    //     }
    // }

    var createApiClass = function createApiClass(Element) {
        return function (_Element) {
            _inherits(API, _Element);

            function API($w, superArgs) {
                var _ref3;

                _classCallCheck(this, API);

                var _this = _possibleConstructorReturn(this, (_ref3 = API.__proto__ || Object.getPrototypeOf(API)).call.apply(_ref3, [this].concat(_toConsumableArray(superArgs))));

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

    function controller() {
        return {
            pageReady: pageReady,
            // apiClass: createApiClass


            exports: function exports(RMI, $w) {
                return {
                    setThings: function setThings(things) {
                        $w.props({
                            newThings: things
                        });
                    }
                };
            }
            //     return {
            //         openChat: function (things) {
            //             if (nativeCompIsIframe()) {
            //                 pubsub.publish('add_to_cart_wix_code', {things}, true);
            //             }
            //             $w('@this').props = {newThings: things};
            //         }
            //     }
            // }
        };
    }

    var controllerByType = {
        "153dd52f-493b-2ae5-2506-08a492a3b838": controller,
        "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99": controller

    };

    function createControllers(controllerConfigs) {
        return controllerConfigs.map(function (_ref5) {
            var type = _ref5.type;

            return Promise.resolve(controllerByType[type] ? controllerByType[type]() : emptyController());
        });
    }

    function isIframe() {
        return false;
    }

    function nativeCompIsIframe() {
        return false;
    }

    return {
        initAppForPage: initAppForPage,
        createControllers: createControllers
        // exports: {
        //     openChat: function (things) {  }
        // }
    };
}();

/***/ })
/******/ ]);
});
//# sourceMappingURL=viewerScript.bundle.js.map