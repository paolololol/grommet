"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultColor = exports.strokeProps = void 0;

var _utils = require("../../utils");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var strokeProps = function strokeProps(color, theme) {
  var result = {};

  if (color) {
    if (_typeof(color) === 'object') {
      result.stroke = (0, _utils.normalizeColor)(color.color, theme);

      if (color.opacity) {
        result.strokeOpacity = "".concat(color.opacity === true ? theme.global.opacity.medium : theme.global.opacity[color.opacity]);
      }
    } else {
      result.stroke = (0, _utils.normalizeColor)(color, theme);
    }
  }

  return result;
};

exports.strokeProps = strokeProps;
var neutralExp = /^neutral-\d+/;

var defaultColor = function defaultColor(index, theme) {
  var neutralColors = Object.keys(theme.global.colors).filter(function (k) {
    return neutralExp.test(k);
  });
  return neutralColors[index % neutralColors.length];
};

exports.defaultColor = defaultColor;