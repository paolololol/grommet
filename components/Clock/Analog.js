"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Analog = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _styledComponents = require("styled-components");

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _StyledClock = require("./StyledClock");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

// this will serve both minutes and hours (360 / 6)
var ANGLE_UNIT = 6; // 360 / 12

var HOUR_ANGLE_UNIT = 30;

var getClockDimensions = function getClockDimensions(theme) {
  return {
    size: (0, _utils.parseMetricToNum)(theme.clock.analog.size.medium),
    secondSize: (0, _utils.parseMetricToNum)(theme.clock.analog.second.size),
    minuteSize: (0, _utils.parseMetricToNum)(theme.clock.analog.minute.size),
    hourSize: (0, _utils.parseMetricToNum)(theme.clock.analog.hour.size)
  };
};

var getClockState = function getClockState(_ref) {
  var hours = _ref.hours,
      minutes = _ref.minutes,
      seconds = _ref.seconds;
  var hour12 = hours > 12 ? hours - 12 : hours;
  var minuteAngle = minutes * ANGLE_UNIT;
  return {
    // offset hour angle by half of the minute angle so that it gets closer to the next hour
    hourAngle: hour12 * HOUR_ANGLE_UNIT + minutes / 2,
    minuteAngle: minuteAngle,
    secondAngle: seconds * ANGLE_UNIT
  };
};

var Analog =
/*#__PURE__*/
function (_Component) {
  _inherits(Analog, _Component);

  function Analog() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Analog);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Analog)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Analog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          precision = _this$props.precision,
          theme = _this$props.theme,
          rest = _objectWithoutProperties(_this$props, ["precision", "theme"]);

      var _this$state = this.state,
          hourAngle = _this$state.hourAngle,
          minuteAngle = _this$state.minuteAngle,
          secondAngle = _this$state.secondAngle;

      var _getClockDimensions = getClockDimensions(theme),
          size = _getClockDimensions.size,
          secondSize = _getClockDimensions.secondSize,
          minuteSize = _getClockDimensions.minuteSize,
          hourSize = _getClockDimensions.hourSize;

      var halfSize = size / 2;
      var secondHand;

      if (precision === 'seconds') {
        secondHand = _react.default.createElement(_StyledClock.StyledSecond, {
          x1: halfSize,
          y1: halfSize,
          x2: halfSize,
          y2: secondSize,
          stroke: "#000000",
          strokeLinecap: theme.clock.analog.second.shape,
          style: {
            transform: "rotate(".concat(secondAngle, "deg)"),
            transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px")
          }
        });
      }

      var minuteHand;

      if (precision === 'seconds' || precision === 'minutes') {
        minuteHand = _react.default.createElement(_StyledClock.StyledMinute, {
          x1: halfSize,
          y1: halfSize,
          x2: halfSize,
          y2: minuteSize,
          stroke: "#000000",
          strokeLinecap: theme.clock.analog.minute.shape,
          style: {
            transform: "rotate(".concat(minuteAngle, "deg)"),
            transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px")
          }
        });
      }

      return _react.default.createElement(_StyledClock.StyledAnalog, _extends({
        version: "1.1",
        width: size,
        height: size,
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "0 0 ".concat(size, " ").concat(size)
      }, rest), secondHand, minuteHand, _react.default.createElement(_StyledClock.StyledHour, {
        x1: halfSize,
        y1: halfSize,
        x2: halfSize,
        y2: hourSize,
        stroke: "#000000",
        strokeLinecap: theme.clock.analog.hour.shape,
        style: {
          transform: "rotate(".concat(hourAngle, "deg)"),
          transformOrigin: "".concat(halfSize, "px ").concat(halfSize, "px")
        }
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var elements = nextProps.elements;
      var nextState = getClockState(elements);

      if (prevState.hourAngle === undefined || Object.keys(nextState).some(function (k) {
        return prevState[k] !== nextState[k];
      })) {
        return nextState;
      }

      return null;
    }
  }]);

  return Analog;
}(_react.Component);

_defineProperty(Analog, "defaultProps", {
  size: 'medium'
});

Object.setPrototypeOf(Analog.defaultProps, _defaultProps.defaultProps);
var AnalogWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Analog);
exports.Analog = AnalogWrapper;