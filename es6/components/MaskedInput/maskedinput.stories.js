"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

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

var TimeMaskedInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeMaskedInput, _Component);

  function TimeMaskedInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimeMaskedInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimeMaskedInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    return _this;
  }

  _createClass(TimeMaskedInput, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        width: "medium"
      }, _react.default.createElement(_grommet.MaskedInput, {
        mask: [{
          length: [1, 2],
          options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          regexp: /^1[1-2]$|^[0-9]$/,
          placeholder: 'hh'
        }, {
          fixed: ':'
        }, {
          length: 2,
          options: ['00', '15', '30', '45'],
          regexp: /^[0-5][0-9]$|^[0-9]$/,
          placeholder: 'mm'
        }, {
          fixed: ' '
        }, {
          length: 2,
          options: ['am', 'pm'],
          regexp: /^[ap]m$|^[AP]M$|^[aApP]$/,
          placeholder: 'ap'
        }],
        value: value,
        onChange: this.onChange
      }))));
    }
  }]);

  return TimeMaskedInput;
}(_react.Component);

var PhoneMaskedInput =
/*#__PURE__*/
function (_Component2) {
  _inherits(PhoneMaskedInput, _Component2);

  function PhoneMaskedInput() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, PhoneMaskedInput);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(PhoneMaskedInput)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onChange", function (event) {
      _this2.setState({
        value: event.target.value
      });
    });

    return _this2;
  }

  _createClass(PhoneMaskedInput, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        width: "medium"
      }, _react.default.createElement(_grommet.MaskedInput, {
        mask: [{
          fixed: '('
        }, {
          length: 3,
          regexp: /^[0-9]{1,3}$/,
          placeholder: 'xxx'
        }, {
          fixed: ')'
        }, {
          fixed: ' '
        }, {
          length: 3,
          regexp: /^[0-9]{1,3}$/,
          placeholder: 'xxx'
        }, {
          fixed: '-'
        }, {
          length: 4,
          regexp: /^[0-9]{1,4}$/,
          placeholder: 'xxxx'
        }],
        value: value,
        onChange: this.onChange
      }))));
    }
  }]);

  return PhoneMaskedInput;
}(_react.Component);

var EmailMaskedInput =
/*#__PURE__*/
function (_Component3) {
  _inherits(EmailMaskedInput, _Component3);

  function EmailMaskedInput() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, EmailMaskedInput);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(EmailMaskedInput)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onChange", function (event) {
      _this3.setState({
        value: event.target.value
      });
    });

    return _this3;
  }

  _createClass(EmailMaskedInput, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        width: "medium"
      }, _react.default.createElement(_grommet.MaskedInput, {
        mask: [{
          regexp: /^[\w\-_.]+$/,
          placeholder: 'example'
        }, {
          fixed: '@'
        }, {
          regexp: /^[\w]+$/,
          placeholder: 'my'
        }, {
          fixed: '.'
        }, {
          regexp: /^[\w]+$/,
          placeholder: 'com'
        }],
        value: value,
        onChange: this.onChange
      }))));
    }
  }]);

  return EmailMaskedInput;
}(_react.Component);

var IPv4ElementExp = /^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$/;

var IPv4MaskedInput =
/*#__PURE__*/
function (_Component4) {
  _inherits(IPv4MaskedInput, _Component4);

  function IPv4MaskedInput() {
    var _getPrototypeOf5;

    var _this4;

    _classCallCheck(this, IPv4MaskedInput);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(IPv4MaskedInput)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "onChange", function (event) {
      _this4.setState({
        value: event.target.value
      });
    });

    return _this4;
  }

  _createClass(IPv4MaskedInput, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        width: "medium"
      }, _react.default.createElement(_grommet.MaskedInput, {
        mask: [{
          length: [1, 3],
          regexp: IPv4ElementExp,
          placeholder: 'xxx'
        }, {
          fixed: '.'
        }, {
          length: [1, 3],
          regexp: IPv4ElementExp,
          placeholder: 'xxx'
        }, {
          fixed: '.'
        }, {
          length: [1, 3],
          regexp: IPv4ElementExp,
          placeholder: 'xxx'
        }, {
          fixed: '.'
        }, {
          length: [1, 3],
          regexp: IPv4ElementExp,
          placeholder: 'xxx'
        }],
        value: value,
        onChange: this.onChange
      }))));
    }
  }]);

  return IPv4MaskedInput;
}(_react.Component);

(0, _react2.storiesOf)('MaskedInput', module).add('Time', function () {
  return _react.default.createElement(TimeMaskedInput, null);
}).add('Phone', function () {
  return _react.default.createElement(PhoneMaskedInput, null);
}).add('Email', function () {
  return _react.default.createElement(EmailMaskedInput, null);
}).add('IPv4 Address', function () {
  return _react.default.createElement(IPv4MaskedInput, null);
});