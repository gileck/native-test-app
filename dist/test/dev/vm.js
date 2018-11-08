'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderVM = renderVM;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _velocity = require('velocity');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadData(file) {
  try {
    return JSON.parse(_fs2.default.readFileSync(file, 'utf-8').toString());
  } catch (ex) {
    throw ex;
  }
}

function renderVM(template, data) {
  var engine = new _velocity.Engine({ template: template });
  var velocityData = loadData('./velocity.data.json');
  var velocityDataPrivate = loadData('./velocity.private.data.json');

  return engine.render(Object.assign({}, velocityData, velocityDataPrivate, data));
}