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

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ value: event.target.value });
        }
    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.props.onSubmit(1, 2, this.state.value.split(" "));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                newThings = _props.newThings,
                things = _props.things;

            return _react2.default.createElement(
                'div',
                { className: 'root' },
                _react2.default.createElement('input', { type: 'text', placeholder: 'Enter new things', onChange: function onChange(e) {
                        return _this2.handleChange(e);
                    } }),
                _react2.default.createElement(
                    'button',
                    { style: { color: 'gray' }, onClick: function onClick() {
                            return _this2.handleClick();
                        } },
                    'UPDATE'
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'Things from controller: ',
                    things,
                    ' '
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    'Things from Wix Code: ',
                    newThings,
                    ' '
                )
            );
        }
    }], [{
        key: 'css',
        value: function css(_ref) {
            var styleId = _ref.styleId,
                styleData = _ref.styleData,
                layout = _ref.layout;
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

App.displayName = "App";


var toCssString = function toCssString(_ref2) {
    var styleId = _ref2.styleId,
        backgroundColor = _ref2.backgroundColor,
        color = _ref2.color,
        width = _ref2.width,
        height = _ref2.height;
    return '.root {\n            background: ' + backgroundColor + '; \n            color: ' + color + ';\n            font-size: 20px;\n            width: 100%; \n            height: 100%;\n        } ';
};

exports.default = {
    component: App

    // export const NativePropsBuilder = (WrappedComponent) => {
    //     return class extends React.Component {
    //         constructor(props) {
    //             super(props);
    //             this.props.appLoadBI && this.props.appLoadBI.startLoading();
    //         }
    //
    //         static propTypes = {
    //             style: santaTypesDefinitions.NativeComponentSantaTypes.widgetStyle,
    //             resizeComponent: santaTypesDefinitions.NativeComponentSantaTypes.resizeComponent,
    //             dimensions: santaTypesDefinitions.Component.style,
    //             compActions: santaTypesDefinitions.Component.compActions,
    //             compData: santaTypesDefinitions.Component.compData,
    //             handleAction: santaTypesDefinitions.Behaviors.handleAction,
    //             formFactor: santaTypesDefinitions.NativeComponentSantaTypes.deviceType,
    //             viewMode: santaTypesDefinitions.NativeComponentSantaTypes.viewMode,
    //             defaultContentArea: santaTypesDefinitions.Container.defaultContentArea,
    //             appLoadBI: santaTypesDefinitions.NativeComponentSantaTypes.appLoadBI
    //         };
    //
    //         componentDidMount() {
    //             this.props.appLoadBI && this.props.appLoadBI.loaded();
    //         }
    //
    //         getEventHandlers() {
    //             return _.mapValues(this.props.compActions, eventInfo => (...argsArray) => this.props.handleAction(eventInfo, {payload: JSON.stringify(argsArray)}));
    //         }
    //
    //         getMarginLeftStyle() {
    //             const {width, alignment} = _.get(this.props, 'defaultContentArea', {width: 980, alignment: 0.5});
    //             return {
    //                 marginLeft: `calc((100% - ${width}px) * ${alignment})`
    //             }
    //         }
    //
    //         render() {
    //             const eventHandlers = this.getEventHandlers();
    //             console.log({eventHandlers});
    //             const wixCodeProps = _.get(this.props, 'compData.wixCodeProps');
    //             const {style, id, resizeComponent, formFactor, viewMode} = this.props;
    //             const dimensions = _.pick(this.props.dimensions, ['width', 'height', 'left', 'top']);
    //             const props = {
    //                 ...wixCodeProps,
    //                 ...eventHandlers,
    //                 id,
    //                 style,
    //                 resizeComponent,
    //                 formFactor,
    //                 viewMode,
    //                 dimensions
    //             };
    //
    //             const wrapperStyle = _.defaults(this.getMarginLeftStyle(), this.props.dimensions);
    //             return <div style={wrapperStyle}>
    //                 <WrappedComponent {...props}/>
    //             </div>
    //         }
    //     };
    // };

};
//# sourceMappingURL=things.js.map