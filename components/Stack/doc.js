"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(Stack) {
  var DocumentedStack = (0, _reactDesc.describe)(Stack).availableAt((0, _utils.getAvailableAtBadge)('Stack')).description("A container that stacks contents on top of each other. One child is\n      designated as the `guidingChild` which determines the size. All\n      other children are placed within that size, either above or below\n      based on their order. Stack is typically used to decorate Meter, Chart,\n      or icons.").usage("import { Stack } from 'grommet';\n<Stack />").intrinsicElement('div');
  DocumentedStack.propTypes = _objectSpread({}, _utils.genericProps, {
    anchor: _reactDesc.PropTypes.oneOf(['center', 'left', 'right', 'top', 'bottom', 'top-left', 'bottom-left', 'top-right', 'bottom-right']).description("Where to anchor children from. If not specified, children\n      fill the guiding child's area."),
    fill: _reactDesc.PropTypes.bool.description("Whether to expand to fill\n      all of the available width and height in the parent container.").defaultValue(false),
    guidingChild: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.oneOf(['first', 'last'])]).description("Which child to guide layout from. All other children\n      will be positioned within that area. Defaults to 'first'.").defaultValue('first')
  });
  return DocumentedStack;
};

exports.doc = doc;
var themeDoc = {
  'stack.extend': {
    description: 'Any additional style for the control of the Stack component.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;