"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var customTheme = {
  global: {
    colors: {
      custom: '#ff00ff',
      brand: '#00ff00'
    }
  }
};

var DropContent = function DropContent(_ref) {
  var onClose = _ref.onClose;
  return _react.default.createElement(_grommet.Box, {
    pad: "small"
  }, _react.default.createElement(_grommet.Box, {
    direction: "row",
    justify: "between",
    align: "center"
  }, _react.default.createElement(_grommet.Heading, {
    color: "custom",
    level: 3,
    margin: "small"
  }, "Heading"), _react.default.createElement(_grommet.Button, {
    icon: _react.default.createElement(_grommetIcons.Close, null),
    onClick: onClose
  })), _react.default.createElement(_grommet.Text, null, "Content"));
};

DropContent.propTypes = {
  onClose: _propTypes.default.func.isRequired
};

var SimpleDropButton =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleDropButton, _Component);

  function SimpleDropButton() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SimpleDropButton);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SimpleDropButton)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      _this.setState({
        open: false
      });

      setTimeout(function () {
        return _this.setState({
          open: undefined
        });
      }, 1);
    });

    return _this;
  }

  _createClass(SimpleDropButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var open = this.state.open;
      return _react.default.createElement(_grommet.Grommet, {
        theme: customTheme
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.DropButton, {
        label: "Open",
        open: open,
        onClose: function onClose() {
          return _this2.setState({
            open: undefined
          });
        },
        dropContent: _react.default.createElement(DropContent, {
          onClose: this.onClose
        })
      })));
    }
  }]);

  return SimpleDropButton;
}(_react.Component);

var CalendarDropButton =
/*#__PURE__*/
function (_Component2) {
  _inherits(CalendarDropButton, _Component2);

  function CalendarDropButton() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, CalendarDropButton);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(CalendarDropButton)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      date: undefined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onClose", function () {
      _this3.setState({
        open: false
      });

      setTimeout(function () {
        return _this3.setState({
          open: undefined
        });
      }, 1);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onSelect", function (date) {
      return _this3.setState({
        date: date,
        open: false
      });
    });

    return _this3;
  }

  _createClass(CalendarDropButton, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          date = _this$state.date,
          open = _this$state.open;
      return _react.default.createElement(_grommet.Grommet, {
        theme: customTheme
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        pad: "large"
      }, _react.default.createElement(_grommet.DropButton, {
        open: open,
        onClose: function onClose() {
          return _this4.setState({
            open: false
          });
        },
        onOpen: function onOpen() {
          return _this4.setState({
            open: true
          });
        },
        dropContent: _react.default.createElement(_grommet.Calendar, {
          date: date,
          onSelect: this.onSelect
        })
      }, _react.default.createElement(_grommet.Box, {
        direction: "row",
        gap: "medium",
        align: "center",
        pad: "small"
      }, _react.default.createElement(_grommet.Text, null, date ? new Date(date).toLocaleDateString() : 'Select date'), _react.default.createElement(_grommetIcons.FormDown, {
        color: "brand"
      })))));
    }
  }]);

  return CalendarDropButton;
}(_react.Component);

var UserMenuDropButton =
/*#__PURE__*/
function (_Component3) {
  _inherits(UserMenuDropButton, _Component3);

  function UserMenuDropButton() {
    var _getPrototypeOf4;

    var _this5;

    _classCallCheck(this, UserMenuDropButton);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(UserMenuDropButton)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "renderItems", function () {
      return _react.default.createElement(_grommet.Box, null, _react.default.createElement("span", null, "hi"), _react.default.createElement("span", null, "hi"), _react.default.createElement("span", null, "hi"), _react.default.createElement("span", null, "hi"), _react.default.createElement("span", null, "hi"));
    });

    return _this5;
  }

  _createClass(UserMenuDropButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true
      }, _react.default.createElement(_grommet.Box, {
        fill: "vertical",
        width: "60px",
        background: "dark-2"
      }, _react.default.createElement(_grommet.Box, {
        flex: true
      }), _react.default.createElement(_grommet.DropButton, {
        alignSelf: "center",
        margin: {
          vertical: 'small'
        },
        dropContent: this.renderItems(),
        dropAlign: {
          bottom: 'top'
        }
      }, _react.default.createElement(_grommet.Box, {
        height: "36px",
        width: "36px",
        round: "full",
        background: "url(//s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80)"
      })))));
    }
  }]);

  return UserMenuDropButton;
}(_react.Component);

(0, _react2.storiesOf)('DropButton', module).add('Simple', function () {
  return _react.default.createElement(SimpleDropButton, null);
}).add('Calendar', function () {
  return _react.default.createElement(CalendarDropButton, null);
}).add('UserMenu', function () {
  return _react.default.createElement(UserMenuDropButton, null);
});