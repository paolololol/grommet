"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(Distribution) {
  var DocumentedDistribution = (0, _reactDesc.describe)(Distribution).availableAt((0, _utils.getAvailableAtBadge)('Distribution')).description("Proportionally sized grid of boxes. The proportions are approximate. The\n      area given to each box isn't mathematically precise according to the\n      ratio to the total values. Instead, the boxes are laid out in a\n      manner that makes them more visually easy to scan. For example,\n      two values of 48 and 52 will actually each get 50% of the area.").usage("import { Distribution } from 'grommet';\n<Distribution />").intrinsicElement('div');
  DocumentedDistribution.propTypes = _objectSpread({}, _utils.genericProps, {
    children: _reactDesc.PropTypes.func.description('Function that will be called when each value is rendered.'),
    fill: _reactDesc.PropTypes.bool.description('Whether the distribution expands to fill all of the available width and height.').defaultValue(false),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The amount of spacing between child elements.').defaultValue('xsmall'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      value: _reactDesc.PropTypes.number.isRequired
    })).description("Array of objects containing a value. The array should already be\n      sorted from largest to smallest value. The caller can put other\n      properties in the object. The children function will be called to\n      render the contents of each value.").isRequired
  });
  return DocumentedDistribution;
};

exports.doc = doc;