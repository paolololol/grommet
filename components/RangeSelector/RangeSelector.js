"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeSelector = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _contexts = require("../../contexts");

var _Box = require("../Box");

var _hocs = require("../hocs");

var _EdgeControl = require("./EdgeControl");

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

var RangeSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(RangeSelector, _Component);

  function RangeSelector() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RangeSelector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RangeSelector)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "containerRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "valueForMouseCoord", function (event) {
      var _this$props = _this.props,
          direction = _this$props.direction,
          max = _this$props.max,
          min = _this$props.min,
          step = _this$props.step;

      var rect = _this.containerRef.current.getBoundingClientRect();

      var value;

      if (direction === 'vertical') {
        var y = event.clientY - (rect.y || 0); // unit test resilience

        var scaleY = rect.height / (max - min + 1) || 1; // unit test resilience

        value = Math.floor(y / scaleY) + min;
      } else {
        var x = event.clientX - (rect.x || 0); // unit test resilience

        var scaleX = rect.width / (max - min + 1) || 1; // unit test resilience

        value = Math.floor(x / scaleX) + min;
      } // align with closest step within [min, max]


      var result = value + value % step;

      if (result < min) {
        return min;
      }

      if (result > max) {
        return max;
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClick", function (event) {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          values = _this$props2.values;
      var lastChange = _this.state.lastChange;

      var value = _this.valueForMouseCoord(event);

      if (value <= values[0] || value < values[1] && lastChange === 'lower') {
        _this.setState({
          lastChange: 'lower'
        }, function () {
          return onChange([value, values[1]]);
        });
      } else if (value >= values[1] || value > values[0] && lastChange === 'upper') {
        _this.setState({
          lastChange: 'upper'
        }, function () {
          return onChange([values[0], value]);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lowerMouseDown", function () {
      _this.setState({
        changing: 'lower'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "upperMouseDown", function () {
      _this.setState({
        changing: 'upper'
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectionMouseDown", function (event) {
      var moveValue = _this.valueForMouseCoord(event);

      _this.setState({
        changing: 'selection',
        moveValue: moveValue
      });

      window.addEventListener('mousemove', _this.mouseMove);
      window.addEventListener('mouseup', _this.mouseUp);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseMove", function (event) {
      var _this$props3 = _this.props,
          max = _this$props3.max,
          min = _this$props3.min,
          onChange = _this$props3.onChange,
          values = _this$props3.values;
      var _this$state = _this.state,
          changing = _this$state.changing,
          moveValue = _this$state.moveValue;

      var value = _this.valueForMouseCoord(event);

      var nextValues;

      if (changing === 'lower' && value <= values[1] && value !== moveValue) {
        nextValues = [value, values[1]];
      } else if (changing === 'upper' && value >= values[0] && value !== moveValue) {
        nextValues = [values[0], value];
      } else if (changing === 'selection' && value !== moveValue) {
        var delta = value - moveValue;

        if (values[0] + delta >= min && values[1] + delta <= max) {
          nextValues = [values[0] + delta, values[1] + delta];
        }
      }

      if (nextValues) {
        _this.setState({
          lastChange: changing,
          moveValue: value
        }, function () {
          onChange(nextValues);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseUp", function () {
      _this.setState({
        changing: undefined
      });

      window.removeEventListener('mousemove', _this.mouseMove);
      window.removeEventListener('mouseup', _this.mouseMove);
    });

    return _this;
  }

  _createClass(RangeSelector, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mousemove', this.mouseMove);
      window.removeEventListener('mouseup', this.mouseMove);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          color = _this$props4.color,
          direction = _this$props4.direction,
          forwardRef = _this$props4.forwardRef,
          invert = _this$props4.invert,
          max = _this$props4.max,
          messages = _this$props4.messages,
          min = _this$props4.min,
          onChange = _this$props4.onChange,
          opacity = _this$props4.opacity,
          round = _this$props4.round,
          size = _this$props4.size,
          step = _this$props4.step,
          values = _this$props4.values,
          propsTheme = _this$props4.theme,
          rest = _objectWithoutProperties(_this$props4, ["color", "direction", "forwardRef", "invert", "max", "messages", "min", "onChange", "opacity", "round", "size", "step", "values", "theme"]);

      var theme = this.context || propsTheme;
      var _this$state2 = this.state,
          nextLower = _this$state2.nextLower,
          nextUpper = _this$state2.nextUpper;
      var lower = nextLower !== undefined ? nextLower : values[0];
      var upper = nextUpper !== undefined ? nextUpper : values[1]; // It needs to be true when vertical, due to how browsers manage height

      var fill = direction === 'vertical' ? true : 'vertical';
      return _react.default.createElement(_Box.Box, _extends({
        ref: this.containerRef,
        direction: direction === 'vertical' ? 'column' : 'row',
        fill: fill
      }, rest, {
        onClick: onChange ? this.onClick : undefined
      }), _react.default.createElement(_Box.Box, {
        style: {
          flex: "".concat(lower - min, " 0 0")
        },
        background: invert ? // preserve existing dark, instead of using darknes of this color
        {
          color: color || 'light-4',
          opacity: opacity,
          dark: theme.dark
        } : undefined,
        fill: fill,
        round: round
      }), _react.default.createElement(_EdgeControl.EdgeControl, {
        a11yTitle: messages.lower,
        tabIndex: 0,
        ref: forwardRef,
        color: color,
        direction: direction,
        edge: "lower",
        onMouseDown: onChange ? this.lowerMouseDown : undefined,
        onDecrease: onChange && lower - step >= min ? function () {
          return onChange([lower - step, upper]);
        } : undefined,
        onIncrease: onChange && lower + step <= upper ? function () {
          return onChange([lower + step, upper]);
        } : undefined
      }), _react.default.createElement(_Box.Box, {
        style: {
          flex: "".concat(upper - lower + 1, " 0 0"),
          cursor: direction === 'vertical' ? 'ns-resize' : 'ew-resize'
        },
        background: invert ? undefined : // preserve existing dark, instead of using darknes of this color
        {
          color: color || 'control',
          opacity: opacity,
          dark: theme.dark
        },
        fill: fill,
        round: round,
        onMouseDown: onChange ? this.selectionMouseDown : undefined
      }), _react.default.createElement(_EdgeControl.EdgeControl, {
        a11yTitle: messages.upper,
        tabIndex: 0,
        color: color,
        direction: direction,
        edge: "upper",
        onMouseDown: onChange ? this.upperMouseDown : undefined,
        onDecrease: onChange && upper - step >= lower ? function () {
          return onChange([lower, upper - step]);
        } : undefined,
        onIncrease: onChange && upper + step <= max ? function () {
          return onChange([lower, upper + step]);
        } : undefined
      }), _react.default.createElement(_Box.Box, {
        style: {
          flex: "".concat(max - upper, " 0 0")
        },
        background: invert ? // preserve existing dark, instead of using darknes of this color
        {
          color: color || 'light-4',
          opacity: opacity,
          dark: theme.dark
        } : undefined,
        fill: fill,
        round: round
      }));
    }
  }]);

  return RangeSelector;
}(_react.Component);

_defineProperty(RangeSelector, "contextType", _contexts.ThemeContext);

_defineProperty(RangeSelector, "defaultProps", {
  direction: 'horizontal',
  max: 100,
  messages: {
    lower: 'Lower Bounds',
    upper: 'Upper Bounds'
  },
  min: 0,
  opacity: 'medium',
  size: 'medium',
  step: 1,
  values: []
});

var RangeSelectorDoc;

if (process.env.NODE_ENV !== 'production') {
  RangeSelectorDoc = require('./doc').doc(RangeSelector); // eslint-disable-line global-require
}

var RangeSelectorWrapper = (0, _recompose.compose)(_hocs.withForwardRef)(RangeSelectorDoc || RangeSelector);
exports.RangeSelector = RangeSelectorWrapper;