"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(Meter) {
  var DocumentedMeter = (0, _reactDesc.describe)(Meter).availableAt((0, _utils.getAvailableAtBadge)('Meter')).description('A graphical meter.').usage("import { Meter } from 'grommet';\n<Meter />").intrinsicElement('svg');
  DocumentedMeter.propTypes = _objectSpread({}, _utils.genericProps, {
    background: _utils.backgroundPropType.defaultValue({
      color: 'light-2',
      opacity: 'medium'
    }),
    round: _reactDesc.PropTypes.bool.description('Whether to round the line ends').defaultValue(false),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'full']), _reactDesc.PropTypes.string]).description('The size of the Meter.').defaultValue('medium'),
    thickness: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the Meter.').defaultValue('medium'),
    type: _reactDesc.PropTypes.oneOf(['bar', 'circle']).description('The visual type of meter.').defaultValue('bar'),
    values: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      highlight: _reactDesc.PropTypes.bool,
      label: _reactDesc.PropTypes.string.isRequired,
      // for accessibility
      onClick: _reactDesc.PropTypes.func,
      onHover: _reactDesc.PropTypes.func,
      value: _reactDesc.PropTypes.number.isRequired
    })).description("Array of value objects describing the data.\n      'value' is the actual numeric value.\n      'label' is a text string describing it.\n      'color' indicates the color name to use. If not specified a default one\n      will be chosen.\n      'onClick' will be called when the user clicks on it.\n      Set 'highlight' to call attention to it.\n      'onHover' will be called with a boolean argument indicating when the\n      user hovers onto or away from it.")
  });
  return DocumentedMeter;
};

exports.doc = doc;