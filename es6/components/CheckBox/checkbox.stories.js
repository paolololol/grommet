"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _styledComponents = require("styled-components");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

var _FormCheckmark = require("grommet-icons/es6/icons/FormCheckmark");

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

var SimpleCheckBox =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleCheckBox, _Component);

  function SimpleCheckBox(props) {
    var _this;

    _classCallCheck(this, SimpleCheckBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimpleCheckBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      return _this.setState({
        checked: event.target.checked
      });
    });

    _this.state = {
      checked: !!props.checked
    };
    return _this;
  }

  _createClass(SimpleCheckBox, [{
    key: "render",
    value: function render() {
      var checked = this.state.checked;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.CheckBox, _extends({}, this.props, {
        label: "Choice",
        checked: checked,
        onChange: this.onChange
      }))));
    }
  }]);

  return SimpleCheckBox;
}(_react.Component);

var customCheckBoxTheme = {
  checkBox: {
    border: {
      color: {
        light: 'neutral-1'
      },
      radius: '2px'
    },
    color: {
      light: 'neutral-1'
    },
    check: {
      extend: function extend(_ref) {
        var theme = _ref.theme,
            checked = _ref.checked;
        return "\n        ".concat(checked && "background-color: ".concat((0, _utils.normalizeColor)('neutral-1', theme), ";"), "\n      ");
      }
    },
    hover: {
      border: {
        color: undefined
      }
    },
    icon: {
      size: '18px',
      extend: 'stroke: white;'
    },
    icons: {
      checked: _FormCheckmark.FormCheckmark
    },
    gap: 'xsmall',
    size: '18px',
    extend: "\n      color: #9C9C9C;\n    "
  }
};

var ThemedCheckBox =
/*#__PURE__*/
function (_Component2) {
  _inherits(ThemedCheckBox, _Component2);

  function ThemedCheckBox() {
    var _getPrototypeOf2;

    var _this2;

    _classCallCheck(this, ThemedCheckBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ThemedCheckBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      checked: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onChange", function (event) {
      return _this2.setState({
        checked: event.target.checked
      });
    });

    return _this2;
  }

  _createClass(ThemedCheckBox, [{
    key: "render",
    value: function render() {
      var checked = this.state.checked;
      return _react.default.createElement(_grommet.Grommet, {
        theme: (0, _utils.deepMerge)(_themes.grommet, customCheckBoxTheme)
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.CheckBox, _extends({}, this.props, {
        label: "Choice",
        checked: checked,
        onChange: this.onChange
      }))));
    }
  }]);

  return ThemedCheckBox;
}(_react.Component);

var checkboxCheckStyle = (0, _styledComponents.css)(["background-color:#2196f3;border-color:#2196f3;"]);
var customToggleTheme = {
  global: {
    colors: {
      'toggle-bg': '#757575',
      'toggle-knob': 'white'
    }
  },
  checkBox: {
    border: {
      color: {
        light: 'toggle-bg'
      }
    },
    color: {
      light: 'toggle-knob'
    },
    check: {
      radius: '2px'
    },
    hover: {
      border: {
        color: undefined
      }
    },
    toggle: {
      background: 'toggle-bg',
      color: {
        light: 'toggle-knob'
      },
      size: '36px',
      knob: {
        extend: "\n          top: -4px;\n          box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.12), 0px 2px 2px 0px rgba(0,0,0,0.24);\n        "
      },
      extend: function extend(_ref2) {
        var checked = _ref2.checked;
        return "\n        height: 14px;\n        ".concat(checked && checkboxCheckStyle, "\n      ");
      }
    },
    gap: 'xsmall',
    size: '18px'
  }
};

var ThemedToggle =
/*#__PURE__*/
function (_Component3) {
  _inherits(ThemedToggle, _Component3);

  function ThemedToggle() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, ThemedToggle);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ThemedToggle)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      checked: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onChange", function (event) {
      return _this3.setState({
        checked: event.target.checked
      });
    });

    return _this3;
  }

  _createClass(ThemedToggle, [{
    key: "render",
    value: function render() {
      var checked = this.state.checked;
      return _react.default.createElement(_grommet.Grommet, {
        theme: (0, _utils.deepMerge)(_themes.grommet, customToggleTheme)
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.CheckBox, _extends({}, this.props, {
        label: "Choice",
        checked: checked,
        onChange: this.onChange,
        toggle: true
      }))));
    }
  }]);

  return ThemedToggle;
}(_react.Component);

var CheckBoxInsideButton =
/*#__PURE__*/
function (_Component4) {
  _inherits(CheckBoxInsideButton, _Component4);

  function CheckBoxInsideButton() {
    var _getPrototypeOf4;

    var _this4;

    _classCallCheck(this, CheckBoxInsideButton);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(CheckBoxInsideButton)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "state", {
      checked: false
    });

    return _this4;
  }

  _createClass(CheckBoxInsideButton, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var checked = this.state.checked;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.Button, {
        hoverIndicator: "background",
        onClick: function onClick() {
          _this5.setState({
            checked: !checked
          });
        }
      }, _react.default.createElement(_grommet.CheckBox, {
        tabIndex: "-1",
        checked: checked,
        label: _react.default.createElement(_grommet.Text, null, "Hi"),
        onChange: function onChange() {}
      }))));
    }
  }]);

  return CheckBoxInsideButton;
}(_react.Component);

var IndeterminateCheckBox =
/*#__PURE__*/
function (_Component5) {
  _inherits(IndeterminateCheckBox, _Component5);

  function IndeterminateCheckBox() {
    var _getPrototypeOf5;

    var _this6;

    _classCallCheck(this, IndeterminateCheckBox);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this6 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(IndeterminateCheckBox)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this6)), "state", {
      checked: [],
      checkboxes: ['fruits', 'vegetables', 'olive oil']
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this6)), "onCheckAll", function (event) {
      var checkboxes = _this6.state.checkboxes;

      if (event.target.checked) {
        _this6.setState({
          checked: checkboxes
        });
      } else {
        _this6.setState({
          checked: []
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this6)), "onCheck", function (event, value) {
      var checked = _this6.state.checked;

      if (event.target.checked) {
        checked.push(value);

        _this6.setState({
          checked: checked
        });
      } else {
        _this6.setState({
          checked: checked.filter(function (item) {
            return item !== value;
          })
        });
      }
    });

    return _this6;
  }

  _createClass(IndeterminateCheckBox, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var _this$state = this.state,
          checked = _this$state.checked,
          checkboxes = _this$state.checkboxes;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        direction: "row",
        gap: "medium"
      }, _react.default.createElement(_grommet.CheckBox, {
        checked: checked.length === 3,
        indeterminate: checked.length > 0 && checked.length < 3,
        label: "All",
        onChange: this.onCheckAll
      }), checkboxes.map(function (item) {
        return _react.default.createElement(_grommet.CheckBox, {
          key: item,
          checked: checked.indexOf(item) !== -1,
          label: item,
          onChange: function onChange(e) {
            return _this7.onCheck(e, item);
          }
        });
      }))));
    }
  }]);

  return IndeterminateCheckBox;
}(_react.Component);

(0, _react2.storiesOf)('CheckBox', module).add('Simple', function () {
  return _react.default.createElement(SimpleCheckBox, null);
}).add('Toggle', function () {
  return _react.default.createElement(SimpleCheckBox, {
    toggle: true
  });
}).add('Disabled', function () {
  return _react.default.createElement(SimpleCheckBox, {
    checked: true,
    disabled: true
  });
}).add('Reverse', function () {
  return _react.default.createElement(SimpleCheckBox, {
    reverse: true
  });
}).add('Themed CheckBox', function () {
  return _react.default.createElement(ThemedCheckBox, null);
}).add('Themed Toggle', function () {
  return _react.default.createElement(ThemedToggle, null);
}).add('Inside a Button', function () {
  return _react.default.createElement(CheckBoxInsideButton, null);
}).add('Interminate CheckBox', function () {
  return _react.default.createElement(IndeterminateCheckBox, null);
});