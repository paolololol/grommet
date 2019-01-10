"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _DropButton = require("../DropButton");

var _Keyboard = require("../Keyboard");

var _TextInput = require("../TextInput");

var _hocs = require("../hocs");

var _SelectContainer = require("./SelectContainer");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SelectTextInput = (0, _styledComponents.default)(_TextInput.TextInput).withConfig({
  displayName: "Select__SelectTextInput",
  componentId: "sc-17idtfo-0"
})(["cursor:pointer;"]);
var StyledSelectDropButton = (0, _styledComponents.default)(_DropButton.DropButton).withConfig({
  displayName: "Select__StyledSelectDropButton",
  componentId: "sc-17idtfo-1"
})(["", ";", ";"], function (props) {
  return !props.plain && _utils.controlBorderStyle;
}, function (props) {
  return props.theme.select && props.theme.select.control && props.theme.select.control.extend;
});
StyledSelectDropButton.defaultProps = {};
Object.setPrototypeOf(StyledSelectDropButton.defaultProps, _defaultProps.defaultProps);

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpen", function () {
      var onOpen = _this.props.onOpen;

      _this.setState({
        open: true
      }, function () {
        if (onOpen) {
          onOpen();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        open: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          a11yTitle = _this$props.a11yTitle,
          alignSelf = _this$props.alignSelf,
          children = _this$props.children,
          closeOnChange = _this$props.closeOnChange,
          disabled = _this$props.disabled,
          dropAlign = _this$props.dropAlign,
          dropTarget = _this$props.dropTarget,
          forwardRef = _this$props.forwardRef,
          gridArea = _this$props.gridArea,
          id = _this$props.id,
          labelKey = _this$props.labelKey,
          margin = _this$props.margin,
          messages = _this$props.messages,
          onChange = _this$props.onChange,
          onClose = _this$props.onClose,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          plain = _this$props.plain,
          selected = _this$props.selected,
          size = _this$props.size,
          theme = _this$props.theme,
          value = _this$props.value,
          valueLabel = _this$props.valueLabel,
          rest = _objectWithoutProperties(_this$props, ["a11yTitle", "alignSelf", "children", "closeOnChange", "disabled", "dropAlign", "dropTarget", "forwardRef", "gridArea", "id", "labelKey", "margin", "messages", "onChange", "onClose", "options", "placeholder", "plain", "selected", "size", "theme", "value", "valueLabel"]);

      var open = this.state.open;
      delete rest.onSearch;

      var onSelectChange = function onSelectChange(event) {
        if (closeOnChange) {
          _this2.onClose();
        }

        if (onChange) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          onChange.apply(void 0, [_objectSpread({}, event, {
            target: _this2.inputRef.current
          })].concat(args));
        }
      };

      var SelectIcon = theme.select.icons.down;
      var selectValue;
      var inputValue = '';

      if (valueLabel) {
        selectValue = valueLabel;
      } else if (Array.isArray(value)) {
        if (value.length > 1) {
          if (_react.default.isValidElement(value[0])) {
            selectValue = value;
          } else {
            inputValue = messages.multiple;
          }
        } else if (value.length === 1) {
          if (_react.default.isValidElement(value[0])) {
            var _value = _slicedToArray(value, 1);

            selectValue = _value[0];
          } else if (labelKey && _typeof(value[0]) === 'object') {
            if (typeof labelKey === 'function') {
              inputValue = labelKey(value[0]);
            } else {
              inputValue = value[0][labelKey];
            }
          } else {
            var _value2 = _slicedToArray(value, 1);

            inputValue = _value2[0];
          }
        } else {
          inputValue = '';
        }
      } else if (labelKey && _typeof(value) === 'object') {
        if (typeof labelKey === 'function') {
          inputValue = labelKey(value);
        } else {
          inputValue = value[labelKey];
        }
      } else if (_react.default.isValidElement(value)) {
        selectValue = value; // deprecated in favor of valueLabel
      } else if (selected !== undefined) {
        if (Array.isArray(selected)) {
          if (selected.length > 1) {
            inputValue = messages.multiple;
          } else if (selected.length === 1) {
            inputValue = options[selected[0]];
          }
        } else {
          inputValue = options[selected];
        }
      } else {
        inputValue = value;
      } // const dark = theme.select.background ? colorIsDark(theme.select.background) : theme.dark;


      var iconColor = (0, _utils.normalizeColor)(theme.select.icons.color || 'control', theme);
      return _react.default.createElement(_Keyboard.Keyboard, {
        onDown: this.onOpen,
        onUp: this.onOpen
      }, _react.default.createElement(StyledSelectDropButton, {
        ref: forwardRef,
        id: id,
        disabled: disabled === true || undefined,
        dropAlign: dropAlign,
        dropTarget: dropTarget,
        open: open,
        alignSelf: alignSelf,
        gridArea: gridArea,
        margin: margin,
        onOpen: this.onOpen,
        onClose: this.onClose,
        dropContent: _react.default.createElement(_SelectContainer.SelectContainer, _extends({}, this.props, {
          onChange: onSelectChange
        }))
      }, _react.default.createElement(_Box.Box, {
        align: "center",
        direction: "row",
        justify: "between",
        background: theme.select.background,
        plain: plain
      }, _react.default.createElement(_Box.Box, {
        direction: "row",
        flex: true,
        basis: "auto"
      }, selectValue || _react.default.createElement(SelectTextInput, _extends({
        a11yTitle: a11yTitle && "".concat(a11yTitle).concat(typeof value === 'string' ? ", ".concat(value) : ''),
        id: id ? "".concat(id, "__input") : undefined,
        ref: this.inputRef
      }, rest, {
        tabIndex: "-1",
        type: "text",
        placeholder: placeholder,
        plain: true,
        readOnly: true,
        value: inputValue,
        size: size,
        onClick: disabled === true ? undefined : this.onOpen
      }))), _react.default.createElement(_Box.Box, {
        margin: {
          horizontal: 'small'
        },
        flex: false,
        style: {
          minWidth: 'auto'
        }
      }, _react.default.createElement(SelectIcon, {
        color: iconColor,
        size: size
      })))));
    }
  }]);

  return Select;
}(_react.Component);

_defineProperty(Select, "defaultProps", {
  closeOnChange: true,
  dropAlign: {
    top: 'bottom',
    left: 'left'
  },
  messages: {
    multiple: 'multiple'
  }
});

Object.setPrototypeOf(Select.defaultProps, _defaultProps.defaultProps);
var SelectDoc;

if (process.env.NODE_ENV !== 'production') {
  SelectDoc = require('./doc').doc(Select); // eslint-disable-line global-require
}

var SelectWrapper = (0, _recompose.compose)(_styledComponents.withTheme, _hocs.withForwardRef)(SelectDoc || Select);
exports.Select = SelectWrapper;