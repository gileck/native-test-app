'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _editorUiLib = require('editor-ui-lib');

var _editorUiLib2 = _interopRequireDefault(_editorUiLib);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Wix = require('Wix');

var _Wix2 = _interopRequireDefault(_Wix);

var _lodash = require('lodash');

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
//# sourceMappingURL=layout.js.map