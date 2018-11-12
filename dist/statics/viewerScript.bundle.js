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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/*!*************************!*\
  !*** ./viewerScript.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controllerByType;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var WEATHER_WIDGET_ID = "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99";
var WEATHER_WIDGET_ID_2 = "c919ae45-6189-44ed-9ddc-1f85e85a89f8";

var citiesWeather = {
    'Tel Aviv': 30,
    'London': 20,
    'Paris': 10
};
var getWeather = function getWeather(city) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(citiesWeather[city]);
        }, 1000);
    });
};

/**
 * pageReady: ($w, wixSDK) => Promise<warmupData>
 * exprots: (RMI, $w) => Object - The controller's public API.
 */
var weatherController = function weatherController(_ref) {
    var setProps = _ref.setProps;

    return {
        pageReady: function pageReady() {
            var _this = this;

            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var city, weather;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                city = 'Tel Aviv';
                                _context.next = 3;
                                return getWeather(city);

                            case 3:
                                weather = _context.sent;

                                console.log({ weather: weather });
                                setProps({
                                    city: city,
                                    weather: weather,
                                    actions: {
                                        actions1: function actions1() {
                                            return setProps({ actions: { data: 'action1' } });
                                        },
                                        actions2: function actions2() {
                                            return setProps({ actions: { data: 'action2' } });
                                        },
                                        actions3: function actions3() {
                                            return setProps({ actions: { data: 'action3' } });
                                        },
                                        data: 'defaultAction'
                                    },
                                    onCityChanged: function onCityChanged(newCity) {
                                        getWeather(newCity).then(function (newWeather) {
                                            return setProps({
                                                city: newCity,
                                                weather: newWeather
                                            });
                                        });
                                    }
                                });

                                // return {city, weather}

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },

        exports: function exports(RMI, $w) {
            return {
                setWeather: function setWeather() {}
            };
        }
    };
};

var controllerByType = (_controllerByType = {}, _defineProperty(_controllerByType, WEATHER_WIDGET_ID, weatherController), _defineProperty(_controllerByType, WEATHER_WIDGET_ID_2, weatherController), _controllerByType);

/**
 * @param controllerConfigs: controllerConfig[]
 * @returns Controller[] | Promise<Controller>[]
 */
function createControllers(controllerConfigs) {
    console.log({ controllerConfigs: controllerConfigs });
    return controllerConfigs.map(function (config) {
        return controllerByType[config.type](config);
    });
}

module.exports = {
    createControllers: createControllers
};

/***/ })

/******/ });
});
//# sourceMappingURL=viewerScript.bundle.js.map