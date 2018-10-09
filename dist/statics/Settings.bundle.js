(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("UI"), require("react-dom"), require("Wix"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "UI", "reactDOM", "Wix", "lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("UI"), require("react-dom"), require("Wix"), require("lodash")) : factory(root["React"], root["UI"], root["ReactDOM"], root["Wix"], root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************************************************************!*\
  !*** external {"amd":"react","umd":"react","commonjs":"react","commonjs2":"react","root":"React"} ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */,
/* 2 */
/*!*************************************************************************************!*\
  !*** external {"amd":"UI","umd":"UI","commonjs":"UI","commonjs2":"UI","root":"UI"} ***!
  \*************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/*!*************************!*\
  !*** ./settings/App.js ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ 6);

var _settings = __webpack_require__(/*! ./settings.js */ 7);

__webpack_require__(/*! ./settings.scss */ 12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_settings.Settings, null), document.getElementById('root'));

/***/ }),
/* 6 */
/*!**********************************************************************************************************************!*\
  !*** external {"amd":"reactDOM","umd":"react-dom","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} ***!
  \**********************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/*!******************************!*\
  !*** ./settings/settings.js ***!
  \******************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Settings = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editorUiLib = __webpack_require__(/*! editor-ui-lib */ 2);

var _editorUiLib2 = _interopRequireDefault(_editorUiLib);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(/*! ./layout/layout */ 8);

var _layout2 = _interopRequireDefault(_layout);

var _design = __webpack_require__(/*! ./design/design */ 11);

var _design2 = _interopRequireDefault(_design);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = exports.Settings = function (_React$Component) {
    _inherits(Settings, _React$Component);

    function Settings() {
        _classCallCheck(this, Settings);

        return _possibleConstructorReturn(this, (Settings.__proto__ || Object.getPrototypeOf(Settings)).apply(this, arguments));
    }

    _createClass(Settings, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _editorUiLib2.default.appSettings,
                null,
                _react2.default.createElement(
                    _editorUiLib2.default.panelTabs,
                    { defaultTabIndex: 0 },
                    _react2.default.createElement(_layout2.default, { tab: 'Layout' }),
                    _react2.default.createElement(_design2.default, { tab: 'Design' }),
                    _react2.default.createElement('hr', { className: 'divider-short' })
                )
            );
        }
    }]);

    return Settings;
}(_react2.default.Component);

/***/ }),
/* 8 */
/*!***********************************!*\
  !*** ./settings/layout/layout.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editorUiLib = __webpack_require__(/*! editor-ui-lib */ 2);

var _editorUiLib2 = _interopRequireDefault(_editorUiLib);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _Wix = __webpack_require__(/*! Wix */ 9);

var _Wix2 = _interopRequireDefault(_Wix);

var _lodash = __webpack_require__(/*! lodash */ 10);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var teamNames = ["Russia", "Saudi Arabia", "Egypt", "Uruguay", "Portugal", "Spain", "Morocco", "Iran", "France", "Australia", "Peru", "Denmark", "Argentina", "Iceland", "Croatia", "Nigeria", "Brazil", "Switzerland", "Costa Rica", "Serbia", "Germany", "Mexico", "Sweden", "South Korea", "Belgium", "Panama", "Tunisia", "England", "Poland", "Senegal", "Colombia", "Japan"];

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this));

        _this.state = {
            teamsToShow: [],
            selectedTeams: []
        };
        return _this;
    }

    _createClass(Layout, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            _Wix2.default.Data.Public.get('Teams', { scope: _Wix2.default.Data.SCOPE.COMPONENT }, function (data) {
                console.log(data);
                _this2.setState({
                    selectedTeams: JSON.parse(data.Teams)
                });
            });
        }
    }, {
        key: 'onTeamChange',
        value: function onTeamChange(newVal, team) {
            var teams = this.state.selectedTeams;
            if (newVal) {
                if (!teams.includes(team)) teams.push(team);
            } else {
                teams = _lodash2.default.reject(teams, function (item) {
                    return item === team;
                });
            }
            this.setState({
                selectedTeams: teams,
                teamsToShow: []
            });
            _Wix2.default.Data.Public.set('Teams', JSON.stringify(teams), { scope: 'COMPONENT' });
        }
    }, {
        key: 'updateTeams',
        value: function updateTeams(value) {
            if (!value) {
                this.setState({
                    teamsToShow: []
                });
                return;
            }
            this.setState({
                teamsToShow: teamNames.filter(function (team) {
                    return _lodash2.default.startsWith(team.toLowerCase(), value.toLowerCase());
                })
            });
        }
    }, {
        key: 'isTeamSelected',
        value: function isTeamSelected(team) {
            return this.state.selectedTeams.includes(team);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(_editorUiLib2.default.sectionDividerLabeled, { label: 'How does this feed look?' }),
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(_editorUiLib2.default.slider, {
                    title: 'Columns',
                    min: 1,
                    max: 10,
                    defaultValue: 4,
                    onChange: function onChange(newVal) {
                        _Wix2.default.Data.Public.set('Columns', newVal, { scope: 'COMPONENT' });
                    } }),
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(_editorUiLib2.default.textInput, {
                    title: 'Select Teams',
                    placeholder: 'Type a team',
                    onChange: function onChange(value) {
                        return _this3.updateTeams(value);
                    } }),
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.teamsToShow.map(function (team) {
                        return _react2.default.createElement(_editorUiLib2.default.checkbox, {
                            label: team,
                            defaultValue: _this3.isTeamSelected(team),
                            onChange: function onChange(newVal) {
                                return _this3.onTeamChange(newVal, team);
                            } });
                    })
                ),
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(
                    'div',
                    null,
                    this.state.selectedTeams.map(function (team) {
                        return _react2.default.createElement(_editorUiLib2.default.checkbox, {
                            label: team,
                            defaultValue: true,
                            onChange: function onChange(newVal) {
                                return _this3.onTeamChange(newVal, team);
                            } });
                    })
                )
            );
        }
    }]);

    return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 9 */
/*!******************************************************************************************!*\
  !*** external {"amd":"Wix","umd":"Wix","commonjs":"Wix","commonjs2":"Wix","root":"Wix"} ***!
  \******************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/*!****************************************************************************************************!*\
  !*** external {"amd":"lodash","umd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \****************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/*!***********************************!*\
  !*** ./settings/design/design.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editorUiLib = __webpack_require__(/*! editor-ui-lib */ 2);

var _editorUiLib2 = _interopRequireDefault(_editorUiLib);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Design = function (_React$Component) {
    _inherits(Design, _React$Component);

    function Design() {
        _classCallCheck(this, Design);

        return _possibleConstructorReturn(this, (Design.__proto__ || Object.getPrototypeOf(Design)).apply(this, arguments));
    }

    _createClass(Design, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(_editorUiLib2.default.sectionDividerLabeled, { label: 'Text & Background' }),
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(_editorUiLib2.default.fontAndColorPicker, {
                    title: 'Title font and color',
                    'wix-param-font': '_titleFont',
                    'wix-param-color': '_titleColor',
                    startWithColor: 'color-5',
                    startWithTheme: 'font_4' }),
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement('hr', { className: 'divider-long' }),
                _react2.default.createElement(_editorUiLib2.default.colorPickerSlider, {
                    title: 'Background Color',
                    'wix-param': '_backgroundColor',
                    startWithColor: 'color-1',
                    startWithOpacity: 1 }),
                _react2.default.createElement('hr', { className: 'divider-long' })
            );
        }
    }]);

    return Design;
}(_react2.default.Component);

exports.default = Design;

/***/ }),
/* 12 */
/*!********************************!*\
  !*** ./settings/settings.scss ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"root":"settings-settings__root__tvaZY"};

/***/ })
/******/ ]);
});
//# sourceMappingURL=Settings.bundle.js.map