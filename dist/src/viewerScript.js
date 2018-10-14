'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

/**
 *
 * @param $w (String) => Element
 * @param wixSDK - {window, user, stores, site, pay, location, crm}
 * @returns {Promise<WarmupData>}
 */
var pageReady = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee($w, wixSDK) {
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

                        $w.props({
                            city: city,
                            weather: weather,
                            onCityChanged: function onCityChanged(newCity) {
                                getWeather(newCity).then(function (newWeather) {
                                    return $w.props({
                                        city: newCity,
                                        weather: newWeather
                                    });
                                });
                            }
                        });

                        // return {city, weather}

                    case 5:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function pageReady(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

/**
 * pageReady: ($w, wixSDK) => Promise<warmupData>
 * exprots: (RMI, $w) => Object - The controller's public API.
 */


exports.setSDK = setSDK;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/*** wix-sdk.js*/
var WixSDK = exports.WixSDK = null;
function setSDK(sdk) {
    exports.WixSDK = WixSDK = sdk;
}

/*** file.js */

var WEATHER_WIDGET_ID = "6fa1ef51-0aaf-40bb-9d46-d2b4b5ea7e99";
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
};var weatherController = function weatherController() {
    return {
        pageReady: pageReady,
        exports: function exports(RMI, $w) {
            return {
                setWeather: function setWeather() {}
            };
        }
    };
};

var controllerByType = _defineProperty({}, WEATHER_WIDGET_ID, weatherController);

/**
 * @param controllerConfigs: controllerConfig[]
 * @returns Controller[] | Promise<Controller>[]
 */
function createControllers(controllerConfigs) {
    return controllerConfigs.map(function (config) {
        return controllerByType[config.type](config);
    });
}

module.exports = {
    createControllers: createControllers
};
//# sourceMappingURL=viewerScript.js.map