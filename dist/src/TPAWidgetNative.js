'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TPAWidgetNative = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _santaComponentsInfraProd = require('santa-components/dist/santa-components-infra.prod.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TPAWidgetNative = exports.TPAWidgetNative = function (_React$Component) {
    _inherits(TPAWidgetNative, _React$Component);

    function TPAWidgetNative(props) {
        _classCallCheck(this, TPAWidgetNative);

        var _this = _possibleConstructorReturn(this, (TPAWidgetNative.__proto__ || Object.getPrototypeOf(TPAWidgetNative)).call(this, props));

        _this.state = {
            comp: null
        };
        return _this;
    }

    _createClass(TPAWidgetNative, [{
        key: 'getStyle',
        value: function getStyle(overrides) {
            var _$get = _lodash2.default.get(this.props, 'defaultContentArea', { width: 980, alignment: 0.5 }),
                width = _$get.width,
                alignment = _$get.alignment;

            var marginLeft = { marginLeft: 'calc((100% - ' + width + 'px) * ' + alignment + ')' };
            return _lodash2.default.defaults(this.props.dimensions, marginLeft, overrides);
        }
    }, {
        key: 'getCompName',
        value: function getCompName(compName) {
            return this.isEditor() ? compName + "-Editor" : compName;
        }
    }, {
        key: 'isEditor',
        value: function isEditor() {
            return this.props.viewMode === "editor";
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.createNativeAppComponent(this.getCompName("NativeApp"), this.props, function (comp) {
                _this2.setState({ comp: comp });
            });
            // this.props.appLoadBI && this.props.appLoadBI.loaded();
        }
    }, {
        key: 'getEventHandlers',
        value: function getEventHandlers() {
            var _this3 = this;

            return _lodash2.default.mapValues(this.props.compActions, function (eventInfo) {
                return function () {
                    for (var _len = arguments.length, argsArray = Array(_len), _key = 0; _key < _len; _key++) {
                        argsArray[_key] = arguments[_key];
                    }

                    return _this3.props.handleAction(eventInfo, { payload: JSON.stringify(argsArray) });
                };
            });
        }

        // getCompCss(styleId, styleProps) {
        //     const data = styleProps.getStyleData(styleId);
        //     if (!_.isFunction(_.get(this.state,'comp.getCompCss'))) {
        //         return null;
        //     }
        //     return this.state.comp.getCss(styleId, data);
        // }


    }, {
        key: 'render',
        value: function render() {
            var Comp = _lodash2.default.get(this.state, 'comp.type');
            if (!Comp) {
                return _react2.default.createElement('div', null);
            }
            var compProps = this.state.comp.props;
            var wixCodeProps = compProps.compData.wixCodeProps;
            var eventHandlers = this.getEventHandlers();
            var _props = this.props,
                style = _props.style,
                id = _props.id,
                resizeComponent = _props.resizeComponent,
                deviceType = _props.deviceType,
                viewMode = _props.viewMode,
                isViewerMode = _props.isViewerMode,
                styleId = _props.styleId;

            var dimensions = _lodash2.default.pick(this.props.dimensions, ['width', 'height', 'left', 'top']);
            var wrapperStyle = this.getStyle();
            var mobxObserverWrapperProps = _lodash2.default.get(this.props, 'computedParentDimensions.scope.props.mobxObserverWrapperProps');
            var props = _extends({}, wixCodeProps, eventHandlers, {
                id: id,
                style: style,
                resizeComponent: resizeComponent,
                deviceType: deviceType,
                viewMode: viewMode,
                dimensions: dimensions,
                isViewerMode: isViewerMode,
                mobxObserverWrapperProps: mobxObserverWrapperProps,
                styleId: styleId
            });

            var compCss = Comp.getCss(style);

            return _react2.default.createElement(
                'div',
                { style: wrapperStyle },
                _react2.default.createElement(Comp, props),
                _react2.default.createElement(
                    'style',
                    null,
                    compCss
                )
            );
        }
    }]);

    return TPAWidgetNative;
}(_react2.default.Component);

// const cssTypes = {
//     getStyleData: santaTypeDefinitions.Component.getStyleData
// };
//
// TPAWidgetNative.getCompCss = TPAWidgetNative.prototype.getCompCss;
// TPAWidgetNative.getCompCss.cssTypes = cssTypes;


TPAWidgetNative.displayName = "TPAWidgetNative";
TPAWidgetNative.propTypes = {
    style: _santaComponentsInfraProd.santaTypeDefinitions.NativeComponentSantaTypes.widgetStyle,
    styleId: _santaComponentsInfraProd.santaTypeDefinitions.Component.styleId,
    dimensions: _santaComponentsInfraProd.santaTypeDefinitions.Component.style,
    compActions: _santaComponentsInfraProd.santaTypeDefinitions.Component.compActions,
    compData: _santaComponentsInfraProd.santaTypeDefinitions.Component.compData,
    handleAction: _santaComponentsInfraProd.santaTypeDefinitions.Behaviors.handleAction,
    deviceType: _santaComponentsInfraProd.santaTypeDefinitions.NativeComponentSantaTypes.deviceType,
    viewMode: _santaComponentsInfraProd.santaTypeDefinitions.NativeComponentSantaTypes.viewMode,
    defaultContentArea: _santaComponentsInfraProd.santaTypeDefinitions.Container.defaultContentArea,
    createNativeAppComponent: _santaComponentsInfraProd.santaTypeDefinitions.NativeComponentSantaTypes.createNativeAppComponent,
    getStyleData: _santaComponentsInfraProd.santaTypeDefinitions.Component.getStyleData
};
//# sourceMappingURL=TPAWidgetNative.js.map