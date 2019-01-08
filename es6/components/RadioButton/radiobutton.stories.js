"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SimpleRadioButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleRadioButton, _Component);

  function SimpleRadioButton(props) {
    var _this;

    _classCallCheck(this, SimpleRadioButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleRadioButton).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      return _this.setState({
        selected: event.target.value
      });
    });

    _this.state = {
      selected: props.selected
    };
    return _this;
  }

  _createClass(SimpleRadioButton, [{
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large",
        gap: "small"
      }, _react.default.createElement(_grommet.RadioButton, _extends({
        label: "Choice 1",
        name: "radio",
        value: "c1",
        checked: selected === 'c1',
        onChange: this.onChange
      }, this.props)), _react.default.createElement(_grommet.RadioButton, _extends({
        label: "Choice 2",
        name: "radio",
        value: "c2",
        checked: selected === 'c2',
        onChange: this.onChange
      }, this.props))));
    }
  }]);

  return SimpleRadioButton;
}(_react.Component);

var customTheme = (0, _utils.deepMerge)(_themes.grommet, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3'
      }
    },
    check: {
      color: {
        light: 'neutral-1'
      }
    },
    icon: {
      size: '10px'
    }
  }
});

var CustomRadioButton =
/*#__PURE__*/
function (_Component2) {
  _inherits(CustomRadioButton, _Component2);

  function CustomRadioButton() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, CustomRadioButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CustomRadioButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      selected: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onChange", function (event) {
      return _this2.setState({
        selected: event.target.value
      });
    });

    return _this2;
  }

  _createClass(CustomRadioButton, [{
    key: "render",
    value: function render() {
      var selected = this.state.selected;
      return _react.default.createElement(_grommet.Grommet, {
        theme: customTheme
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large",
        gap: "small"
      }, _react.default.createElement(_grommet.RadioButton, {
        label: "Choice 1",
        name: "radio",
        value: "c1",
        checked: selected === 'c1',
        onChange: this.onChange
      }), _react.default.createElement(_grommet.RadioButton, {
        label: "Choice 2",
        name: "radio",
        value: "c2",
        checked: selected === 'c2',
        onChange: this.onChange
      })));
    }
  }]);

  return CustomRadioButton;
}(_react.Component);

var CheckBoxInsideButton =
/*#__PURE__*/
function (_Component3) {
  _inherits(CheckBoxInsideButton, _Component3);

  function CheckBoxInsideButton() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, CheckBoxInsideButton);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(CheckBoxInsideButton)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      selected: undefined
    });

    return _this3;
  }

  _createClass(CheckBoxInsideButton, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var selected = this.state.selected;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.Button, {
        hoverIndicator: "background",
        onClick: function onClick() {
          if (selected) {
            _this4.setState({
              selected: undefined
            });
          } else {
            _this4.setState({
              selected: 'c1'
            });
          }
        }
      }, _react.default.createElement(_grommet.RadioButton, _extends({
        label: "Choice 1",
        name: "radio",
        value: "c1",
        checked: selected === 'c1'
      }, this.props)))));
    }
  }]);

  return CheckBoxInsideButton;
}(_react.Component);

(0, _react2.storiesOf)('RadioButton', module).add('Simple RadioButton', function () {
  return _react.default.createElement(SimpleRadioButton, null);
}).add('Disabled RadioButton', function () {
  return _react.default.createElement(SimpleRadioButton, {
    disabled: true,
    selected: "c2"
  });
}).add('Custom Theme', function () {
  return _react.default.createElement(CustomRadioButton, null);
}).add('Inside a Button Theme', function () {
  return _react.default.createElement(CheckBoxInsideButton, null);
});