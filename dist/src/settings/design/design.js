'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editorUiLib = require('editor-ui-lib');

var _editorUiLib2 = _interopRequireDefault(_editorUiLib);

var _react = require('react');

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
//# sourceMappingURL=design.js.map