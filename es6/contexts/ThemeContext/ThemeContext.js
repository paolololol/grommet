"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ThemeContext", {
  enumerable: true,
  get: function get() {
    return _styledComponents.ThemeContext;
  }
});

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_styledComponents.ThemeContext.Extend = function (_ref) {
  var children = _ref.children,
      value = _ref.value;
  return _react.default.createElement(_styledComponents.ThemeContext.Consumer, null, function (theme) {
    return _react.default.createElement(_styledComponents.ThemeContext.Provider, {
      value: (0, _utils.deepMerge)(theme, value)
    }, children);
  });
};

_styledComponents.ThemeContext.Extend.propTypes = {
  children: _propTypes.default.node.isRequired,
  value: _propTypes.default.shape({}).isRequired
};