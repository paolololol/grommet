"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VERTICAL_ALIGN_OPTIONS = ['top', 'bottom'];
var HORIZONTAL_ALIGN_OPTIONS = ['right', 'left'];

var doc = function doc(Menu) {
  var DocumentedMenu = (0, _reactDesc.describe)(Menu).availableAt((0, _utils.getAvailableAtBadge)('Menu')).description("A control that opens a Drop containing plain Buttons. The labels\n      and behavior of the contained Buttons are described via the `items`\n      property.").usage("import { Menu } from 'grommet';\n<Menu />").intrinsicElement('button');
  DocumentedMenu.propTypes = _objectSpread({}, _utils.genericProps, {
    disabled: _reactDesc.PropTypes.bool.description('Whether the menu should be disabled.').defaultValue(false),
    dropAlign: _reactDesc.PropTypes.shape({
      top: _reactDesc.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      bottom: _reactDesc.PropTypes.oneOf(VERTICAL_ALIGN_OPTIONS),
      left: _reactDesc.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS),
      right: _reactDesc.PropTypes.oneOf(HORIZONTAL_ALIGN_OPTIONS)
    }).description("Where to place the drop down. The keys correspond to a side of the drop down.\nThe values correspond to a side of the control. For instance,\n{left: 'left', top: 'bottom'} would align the left edges and the top of\nthe drop down to the bottom of the control. At most one of left or right and\none of top or bottom should be specified.").defaultValue({
      top: 'top',
      left: 'left'
    }),
    dropBackground: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.shape({
      color: _reactDesc.PropTypes.string,
      opacity: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['weak', 'medium', 'strong']), _reactDesc.PropTypes.bool])
    })]).description('Background color when drop is active'),
    dropTarget: _reactDesc.PropTypes.object.description("Target where the drop will be aligned to. This should be\n      a React reference. Typically, this is not required as the drop will be\n      aligned to the Menu itself by default."),
    icon: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.bool, _reactDesc.PropTypes.node]).description('Indicates the icon shown as a control to open it.'),
    items: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.object).description("Menu items to be placed inside the drop down.\nThe object values can be any Button prop, for example: label and onClick.").isRequired,
    label: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.string, _reactDesc.PropTypes.node]).description('Indicates the label shown as a control to open it.'),
    messages: _reactDesc.PropTypes.shape({
      closeMenu: _reactDesc.PropTypes.string,
      openMenu: _reactDesc.PropTypes.string
    }).description('Custom messages. Used for accessibility by screen readers.').defaultValue({
      openMenu: 'Open Menu',
      closeMenu: 'Close Menu'
    }),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']), _reactDesc.PropTypes.string]).description('The size of the menu.').defaultValue('medium')
  });
  return DocumentedMenu;
};

exports.doc = doc;
var themeDoc = {
  'global.colors.control': {
    description: 'The color to use for the icon.',
    type: 'string | { dark: string, light: string }',
    defaultValue: undefined
  },
  'menu.background': {
    description: 'The color for the background of the menu Drop when it is open.',
    type: 'string',
    defaultValue: undefined
  },
  'menu.extend': {
    description: 'Any additional style for the Menu.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  },
  'menu.icons.down': {
    description: 'The icon to show to the right of the label.',
    type: 'React.element',
    defaultValue: '<FormDown />'
  }
};
exports.themeDoc = themeDoc;