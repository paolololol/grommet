"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _styledComponents = require("styled-components");

var _object = require("../../utils/object");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _hocs = require("../hocs");

var _StyledCheckBox = require("./StyledCheckBox");

var _utils = require("../../utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var stopLabelClick = function stopLabelClick(event) {
  // prevents clicking on the label trigging the event twice
  // https://stackoverflow.com/questions/24501497/why-the-onclick-element-will-trigger-twice-for-label-element
  if (event.target.type !== 'checkbox') {
    event.stopPropagation();
  }
};

var CheckBox =
/*#__PURE__*/
function (_Component) {
  _inherits(CheckBox, _Component);

  function CheckBox(props) {
    var _this;

    _classCallCheck(this, CheckBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckBox).call(this, props));
    var checked = props.checked,
        indeterminate = props.indeterminate,
        toggle = props.toggle;

    if (checked && indeterminate) {
      console.warn('Checkbox cannot be "checked" and "indeterminate" at the same time.');
    }

    if (toggle && indeterminate) {
      console.warn('Checkbox of type toggle does not have "indeterminate" state.');
    }

    return _this;
  }

  _createClass(CheckBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          checked = _this$props.checked,
          disabled = _this$props.disabled,
          focus = _this$props.focus,
          forwardRef = _this$props.forwardRef,
          id = _this$props.id,
          label = _this$props.label,
          name = _this$props.name,
          onChange = _this$props.onChange,
          reverse = _this$props.reverse,
          theme = _this$props.theme,
          toggle = _this$props.toggle,
          indeterminate = _this$props.indeterminate,
          rest = _objectWithoutProperties(_this$props, ["checked", "disabled", "focus", "forwardRef", "id", "label", "name", "onChange", "reverse", "theme", "toggle", "indeterminate"]);

      var themeableProps = {
        checked: checked,
        disabled: disabled,
        focus: focus,
        reverse: reverse,
        toggle: toggle,
        indeterminate: indeterminate
      };
      var hidden;

      if (disabled && checked) {
        hidden = _react.default.createElement("input", {
          name: name,
          type: "hidden",
          value: "true"
        });
      }

      var _theme$checkBox$icons = theme.checkBox.icons,
          CheckedIcon = _theme$checkBox$icons.checked,
          IndeterminateIcon = _theme$checkBox$icons.indeterminate;
      var borderColor = (0, _utils.normalizeColor)(theme.checkBox.border.color, theme);

      if (checked) {
        borderColor = (0, _utils.normalizeColor)(theme.checkBox.color || 'control', theme);
      }

      var visual = toggle ? _react.default.createElement(_StyledCheckBox.StyledCheckBoxToggle, themeableProps, _react.default.createElement(_StyledCheckBox.StyledCheckBoxKnob, themeableProps)) : _react.default.createElement(_StyledCheckBox.StyledCheckBoxBox, _extends({
        as: _Box.Box,
        align: "center",
        justify: "center",
        width: theme.checkBox.size,
        height: theme.checkBox.size,
        border: {
          size: theme.checkBox.border.width,
          color: borderColor
        },
        round: theme.checkBox.check.radius
      }, themeableProps), !indeterminate && checked && (CheckedIcon ? _react.default.createElement(CheckedIcon, {
        theme: theme,
        as: _StyledCheckBox.StyledCheckBoxIcon
      }) : _react.default.createElement(_StyledCheckBox.StyledCheckBoxIcon, _extends({
        theme: theme,
        viewBox: "0 0 24 24",
        preserveAspectRatio: "xMidYMid meet"
      }, themeableProps), _react.default.createElement("path", {
        fill: "none",
        d: "M6,11.3 L10.3,16 L18,6.2"
      }))), !checked && indeterminate && (IndeterminateIcon ? _react.default.createElement(IndeterminateIcon, {
        theme: theme,
        as: _StyledCheckBox.StyledCheckBoxIcon
      }) : _react.default.createElement(_StyledCheckBox.StyledCheckBoxIcon, _extends({
        theme: theme,
        viewBox: "0 0 24 24",
        preserveAspectRatio: "xMidYMid meet"
      }, themeableProps), _react.default.createElement("path", {
        fill: "none",
        d: "M6,12 L18,12"
      }))));
      var side = reverse ? 'left' : 'right';

      var checkBoxNode = _react.default.createElement(_StyledCheckBox.StyledCheckBox, _extends({
        as: _Box.Box,
        align: "center",
        justify: "center",
        margin: _defineProperty({}, side, theme.checkBox.gap || 'small')
      }, themeableProps), _react.default.createElement(_StyledCheckBox.StyledCheckBoxInput, _extends({}, rest, {
        ref: forwardRef,
        type: "checkbox"
      }, (0, _object.removeUndefined)({
        id: id,
        name: name,
        checked: checked,
        disabled: disabled,
        onChange: onChange
      }), themeableProps)), visual, hidden);

      var normalizedLabel = typeof label === 'string' ? _react.default.createElement("span", null, label) : label;
      var first = reverse ? normalizedLabel : checkBoxNode;
      var second = reverse ? checkBoxNode : normalizedLabel;
      return _react.default.createElement(_StyledCheckBox.StyledCheckBoxContainer, _extends({
        reverse: reverse
      }, (0, _object.removeUndefined)({
        htmlFor: id,
        disabled: disabled
      }), {
        checked: checked,
        onClick: stopLabelClick
      }, themeableProps), first, second);
    }
  }]);

  return CheckBox;
}(_react.Component);

CheckBox.defaultProps = {};
Object.setPrototypeOf(CheckBox.defaultProps, _defaultProps.defaultProps);
var CheckBoxDoc;

if (process.env.NODE_ENV !== 'production') {
  CheckBoxDoc = require('./doc').doc(CheckBox); // eslint-disable-line global-require
}

var CheckBoxWrapper = (0, _recompose.compose)(_hocs.withFocus, _styledComponents.withTheme, _hocs.withForwardRef)(CheckBoxDoc || CheckBox);
exports.CheckBox = CheckBoxWrapper;