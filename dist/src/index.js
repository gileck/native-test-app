'use strict';

require('regenerator-runtime/runtime');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./App/app');

var _app2 = _interopRequireDefault(_app);

var _nativeComponentsInfra = require('native-components-infra');

var _viewerScript = require('./viewerScript');

var _viewerScript2 = _interopRequireDefault(_viewerScript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WrapperComponent = (0, _nativeComponentsInfra.ViewerScriptWrapper)(_app2.default.component, {
    viewerScript: _viewerScript2.default,
    widgetConfig: {
        dataKeys: [{ key: 'Teams', scope: 'COMPONENT' }],
        widgetId: "153dd52f-493b-2ae5-2506-08a492a3b838"
    },
    Wix: window.Wix
});
_reactDom2.default.render(_react2.default.createElement(WrapperComponent, null), document.getElementById('root'));