"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Clock = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Analog = require("./Analog");

var _Digital = require("./Digital");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TIME_REGEXP = /T([0-9]{2}):([0-9]{2})(?::([0-9.,]{2,}))?/;
var DURATION_REGEXP = /^(-|\+)?P.*T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?$/;

var parseTime = function parseTime(time, hourLimit) {
  var result = {};

  if (time) {
    var match = DURATION_REGEXP.exec(time);

    if (match) {
      result.hours = parseFloat(match[2]);

      if (hourLimit === 12) {
        result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
      }

      result.minutes = parseFloat(match[3]) || 0;
      result.seconds = parseFloat(match[4]) || 0;
      result.duration = true;
    } else {
      match = TIME_REGEXP.exec(time);

      if (match) {
        result.hours = parseFloat(match[1]);

        if (hourLimit === 12) {
          result.hours12 = result.hours > 12 ? result.hours - 12 : result.hours;
        }

        result.minutes = parseFloat(match[2]) || 0;
        result.seconds = parseFloat(match[3]) || 0;
      } else {
        console.error("Grommet Clock cannot parse '".concat(time, "'"));
      }
    }
  } else {
    var date = new Date();
    result.hours = date.getHours();
    result.minutes = date.getMinutes();
    result.seconds = date.getSeconds();
  }

  return result;
};

var Clock =
/*#__PURE__*/
function (_Component) {
  _inherits(Clock, _Component);

  function Clock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Clock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Clock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Clock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var run = this.props.run;

      if (run) {
        this.run();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var run = this.props.run;

      if (run && !prevProps.run) {
        this.run();
      } else if (!run && prevProps.run) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      var _this$props = this.props,
          hourLimit = _this$props.hourLimit,
          onChange = _this$props.onChange,
          precision = _this$props.precision,
          run = _this$props.run;
      var elements = this.state.elements; // set the interval time based on the precision

      var interval = 1000;
      var increment = 'seconds';

      if (precision !== 'seconds' && elements.seconds === 0) {
        interval *= 60;
        increment = 'minutes';

        if (precision !== 'minutes' && elements.minutes === 0) {
          interval *= 60;
          increment = 'hours';
        }
      }

      clearInterval(this.timer);
      this.timer = setInterval(function () {
        var previousElements = _this2.state.elements;

        var nextElements = _objectSpread({}, previousElements); // adjust time based on precision


        if (increment === 'seconds') {
          if (run === 'backward') {
            nextElements.seconds -= 1;
          } else {
            nextElements.seconds += 1;
          }
        } else if (increment === 'minutes') {
          if (run === 'backward') {
            nextElements.minutes -= 1;
          } else {
            nextElements.minutes += 1;
          }
        } else if (increment === 'hours') {
          if (run === 'backward') {
            nextElements.hours -= 1;
          } else {
            nextElements.hours += 1;
          }
        } // deal with overflows


        if (nextElements.seconds >= 60) {
          nextElements.minutes += Math.floor(nextElements.seconds / 60);
          nextElements.seconds = 0;
        } else if (nextElements.seconds < 0) {
          nextElements.minutes += Math.floor(nextElements.seconds / 60);
          nextElements.seconds = 59;
        }

        if (nextElements.minutes >= 60) {
          nextElements.hours += Math.floor(nextElements.minutes / 60);
          nextElements.minutes = 0;
        } else if (nextElements.minutes < 0) {
          nextElements.hours += Math.floor(nextElements.minutes / 60);
          nextElements.minutes = 59;
        }

        if (nextElements.hours >= 24 || nextElements.hours < 0) {
          nextElements.hours = 0;
        }

        if (hourLimit === 12) {
          nextElements.hours12 = nextElements.hours > 12 ? nextElements.hours - 12 : nextElements.hours;
        }

        _this2.setState({
          elements: nextElements
        }, function () {
          if (onChange) {
            if (elements.duration) {
              onChange("P".concat(elements.hours, "H").concat(elements.minutes, "M").concat(elements.seconds, "S"));
            } else {
              onChange("T".concat(elements.hours, ":").concat(elements.minutes, ":").concat(elements.seconds));
            }
          }
        });
      }, interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          type = _this$props2.type,
          rest = _objectWithoutProperties(_this$props2, ["type"]);

      var elements = this.state.elements;
      var content;

      if (type === 'analog') {
        content = _react.default.createElement(_Analog.Analog, _extends({
          elements: elements
        }, rest));
      } else if (type === 'digital') {
        content = _react.default.createElement(_Digital.Digital, _extends({
          elements: elements
        }, rest));
      }

      return content;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var hourLimit = nextProps.hourLimit,
          time = nextProps.time;
      var elements = prevState.elements;

      if (!elements || time) {
        var nextElements = parseTime(time, hourLimit);

        if (!elements) {
          return {
            elements: nextElements
          };
        }

        if (Object.keys(nextElements).some(function (k) {
          return elements[k] !== nextElements[k];
        })) {
          return {
            elements: nextElements
          };
        }
      }

      return null;
    }
  }]);

  return Clock;
}(_react.Component);

_defineProperty(Clock, "defaultProps", {
  hourLimit: 24,
  precision: 'seconds',
  run: 'forward',
  size: 'medium',
  type: 'analog'
});

var ClockDoc;

if (process.env.NODE_ENV !== 'production') {
  ClockDoc = require('./doc').doc(Clock); // eslint-disable-line global-require
}

var ClockWrapper = ClockDoc || Clock;
exports.Clock = ClockWrapper;