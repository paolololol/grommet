"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _styledComponents = require("styled-components");

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _StyledChart = require("./StyledChart");

var _utils2 = require("./utils");

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderBars = function renderBars(values, bounds, scale, height) {
  return (values || []).map(function (valueArg, index) {
    var label = valueArg.label,
        onHover = valueArg.onHover,
        value = valueArg.value,
        rest = _objectWithoutProperties(valueArg, ["label", "onHover", "value"]);

    var key = "p-".concat(index);
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    var top = value.length === 2 ? value[1] : value[2];

    if (top !== 0) {
      var d = "M ".concat((value[0] - bounds[0][0]) * scale[0], ",") + "".concat(height - (bottom - bounds[1][0]) * scale[1]) + " L ".concat((value[0] - bounds[0][0]) * scale[0], ",") + "".concat(height - (top - bounds[1][0]) * scale[1]);
      var hoverProps;

      if (onHover) {
        hoverProps = {
          onMouseOver: function onMouseOver() {
            return onHover(true);
          },
          onMouseLeave: function onMouseLeave() {
            return onHover(false);
          }
        };
      }

      return _react.default.createElement("g", {
        key: key,
        fill: "none"
      }, _react.default.createElement("title", null, label), _react.default.createElement("path", _extends({
        d: d
      }, hoverProps, rest)));
    }

    return undefined;
  });
};

var renderLine = function renderLine(values, bounds, scale, height, _ref) {
  var onClick = _ref.onClick,
      onHover = _ref.onHover;
  var d = '';
  (values || []).forEach(function (_ref2, index) {
    var value = _ref2.value;
    d += "".concat(index ? ' L' : 'M', " ").concat((value[0] - bounds[0][0]) * scale[0], ",") + "".concat(height - (value[1] - bounds[1][0]) * scale[1]);
  });
  var hoverProps;

  if (onHover) {
    hoverProps = {
      onMouseOver: function onMouseOver() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      }
    };
  }

  var clickProps;

  if (onClick) {
    clickProps = {
      onClick: onClick
    };
  }

  return _react.default.createElement("g", {
    fill: "none"
  }, _react.default.createElement("path", _extends({
    d: d
  }, hoverProps, clickProps)));
};

var renderArea = function renderArea(values, bounds, scale, height, _ref3) {
  var color = _ref3.color,
      onClick = _ref3.onClick,
      onHover = _ref3.onHover,
      theme = _ref3.theme;
  var d = '';
  (values || []).forEach(function (_ref4, index) {
    var value = _ref4.value;
    var top = value.length === 2 ? value[1] : value[2];
    d += "".concat(!index ? 'M' : ' L', " ").concat((value[0] - bounds[0][0]) * scale[0], ",") + "".concat(height - (top - bounds[1][0]) * scale[1]);
  });
  (values || []).reverse().forEach(function (_ref5) {
    var value = _ref5.value;
    var bottom = value.length === 2 ? bounds[1][0] : value[1];
    d += " L ".concat((value[0] - bounds[0][0]) * scale[0], ",") + "".concat(height - (bottom - bounds[1][0]) * scale[1]);
  });

  if (d.length > 0) {
    d += ' Z';
  }

  var hoverProps;

  if (onHover) {
    hoverProps = {
      onMouseOver: function onMouseOver() {
        return onHover(true);
      },
      onMouseLeave: function onMouseLeave() {
        return onHover(false);
      }
    };
  }

  var clickProps;

  if (onClick) {
    clickProps = {
      onClick: onClick
    };
  }

  return _react.default.createElement("g", {
    fill: (0, _utils.normalizeColor)(color.color || color, theme)
  }, _react.default.createElement("path", _extends({
    d: d
  }, hoverProps, clickProps)));
};

var Chart =
/*#__PURE__*/
function (_Component) {
  _inherits(Chart, _Component);

  function Chart() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Chart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "containerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      containerWidth: 0,
      containerHeight: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function () {
      var containerNode = _this.containerRef.current;

      if (containerNode) {
        var parentNode = containerNode.parentNode;

        if (parentNode) {
          var rect = parentNode.getBoundingClientRect();

          _this.setState({
            containerWidth: rect.width,
            containerHeight: rect.height
          });
        }
      }
    });

    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.onResize);
      this.onResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          color = _this$props.color,
          onClick = _this$props.onClick,
          onHover = _this$props.onHover,
          overflow = _this$props.overflow,
          round = _this$props.round,
          size = _this$props.size,
          theme = _this$props.theme,
          thickness = _this$props.thickness,
          type = _this$props.type,
          rest = _objectWithoutProperties(_this$props, ["color", "onClick", "onHover", "overflow", "round", "size", "theme", "thickness", "type"]);

      delete rest.values;
      var _this$state = this.state,
          bounds = _this$state.bounds,
          containerWidth = _this$state.containerWidth,
          containerHeight = _this$state.containerHeight,
          values = _this$state.values;
      var sizeWidth = typeof size === 'string' ? size : size.width || 'medium';
      var sizeHeight = typeof size === 'string' ? size : size.height || 'medium';
      var width = sizeWidth === 'full' ? containerWidth : (0, _utils.parseMetricToNum)(theme.global.size[sizeWidth]);
      var height = sizeHeight === 'full' ? containerHeight : (0, _utils.parseMetricToNum)(theme.global.size[sizeHeight]);
      var strokeWidth = (0, _utils.parseMetricToNum)(theme.global.edgeSize[thickness]);
      var scale = [width / (bounds[0][1] - bounds[0][0]), height / (bounds[1][1] - bounds[1][0])];
      var viewBox = overflow ? "0 0 ".concat(width, " ").concat(height) : "-".concat(strokeWidth / 2, " -").concat(strokeWidth / 2, " ").concat(width + strokeWidth, " ").concat(height + strokeWidth);
      var colorName = _typeof(color) === 'object' ? color.color : color;
      var opacity = color.opacity ? theme.global.opacity[color.opacity] : undefined;
      var contents;

      if (type === 'bar') {
        contents = renderBars(values, bounds, scale, height);
      } else if (type === 'line') {
        contents = renderLine(values, bounds, scale, height, this.props);
      } else if (type === 'area') {
        contents = renderArea(values, bounds, scale, height, this.props);
      }

      return _react.default.createElement(_StyledChart.StyledChart, _extends({
        ref: this.containerRef,
        viewBox: viewBox,
        preserveAspectRatio: "none",
        width: size === 'full' ? '100%' : width,
        height: size === 'full' ? '100%' : height
      }, rest), _react.default.createElement("g", {
        stroke: (0, _utils.normalizeColor)(colorName, theme),
        strokeWidth: strokeWidth,
        strokeLinecap: round ? 'round' : 'butt',
        strokeLinejoin: round ? 'round' : 'miter',
        opacity: opacity
      }, contents));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var bounds = nextProps.bounds,
          values = nextProps.values;
      var stateBounds = prevState.bounds,
          stateValues = prevState.values;

      if (!stateValues || values !== stateValues || bounds !== stateBounds) {
        var nextValues = (0, _utils2.normalizeValues)(values);
        var nextBounds = (0, _utils2.normalizeBounds)(bounds, nextValues);
        return {
          bounds: nextBounds,
          values: nextValues
        };
      }

      return null;
    }
  }]);

  return Chart;
}(_react.Component);

_defineProperty(Chart, "defaultProps", {
  color: 'accent-1',
  overflow: false,
  size: {
    width: 'medium',
    height: 'small'
  },
  thickness: 'medium',
  type: 'bar'
});

Object.setPrototypeOf(Chart.defaultProps, _defaultProps.defaultProps);
var ChartDoc;

if (process.env.NODE_ENV !== 'production') {
  ChartDoc = require('./doc').doc(Chart); // eslint-disable-line global-require
}

var ChartWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(ChartDoc || Chart);
exports.Chart = ChartWrapper;