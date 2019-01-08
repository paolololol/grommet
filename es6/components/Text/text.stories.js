"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizes = ['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall', '77px'];

var All = function All() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, sizes.map(function (size) {
    return _react.default.createElement(_grommet.Box, {
      key: size,
      margin: "small"
    }, _react.default.createElement(_grommet.Text, {
      size: size
    }, "Text ".concat(size)));
  }));
};

var Color = function Color() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Text, {
    color: "accent-1"
  }, "Colored Text"));
};

(0, _react2.storiesOf)('Text', module).add('All', function () {
  return _react.default.createElement(All, null);
}).add('Color', function () {
  return _react.default.createElement(Color, null);
});