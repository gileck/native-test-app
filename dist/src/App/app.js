'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import 'regenerator-runtime/runtime';
// import santaTypesDefinitions from 'santa-components/src/definitions/santaTypesDefinitions';

var toCssString = function toCssString(_ref) {
    var styleId = _ref.styleId,
        backgroundColor = _ref.backgroundColor,
        color = _ref.color,
        width = _ref.width,
        height = _ref.height;

    return '.root {\n            background: ' + backgroundColor + '; \n            color: ' + color + ';\n            font-size: 20px;\n            width: 100%; \n            height: 100%;\n            padding: 10px;\n        } ';
};

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'handleClick',
        value: function handleClick(city) {
            this.props.onCityChanged(city);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                weather = _props.weather,
                city = _props.city;


            return _react2.default.createElement(
                'div',
                { className: 'root' },
                _react2.default.createElement(
                    'div',
                    null,
                    'City: ',
                    city,
                    ' '
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'Weather: ',
                    weather,
                    ' '
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#', style: { color: 'white' }, onClick: function onClick() {
                                return _this2.handleClick('Tel Aviv');
                            } },
                        'Tel Aviv'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#', style: { color: 'white' }, onClick: function onClick() {
                                return _this2.handleClick('London');
                            } },
                        'London'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'a',
                        { href: '#', style: { color: 'white' }, onClick: function onClick() {
                                return _this2.handleClick('Paris');
                            } },
                        'Paris'
                    )
                ),
                _react2.default.createElement('style', null)
            );
        }
    }], [{
        key: 'css',
        value: function css(_ref2) {
            var styleId = _ref2.styleId,
                styleData = _ref2.styleData,
                layout = _ref2.layout;
            var width = layout.width,
                height = layout.height;

            var styleParams = styleData.styleParams;
            var backgroundColor = _.get(styleParams, 'colors._backgroundColor.value');
            var color = _.get(styleParams, 'colors._titleColor.value');
            return toCssString({ styleId: styleId, backgroundColor: backgroundColor, color: color, width: width, height: height });
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = {
    component: App
};
//# sourceMappingURL=app.js.map