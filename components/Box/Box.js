"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Box = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _hocs = require("../hocs");

var _contexts = require("../../contexts");

var _defaultProps = require("../../default-props");

var _utils = require("../../utils");

var _StyledBox = require("./StyledBox");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var wrapWithHocs = (0, _recompose.compose)(_hocs.withForwardRef, (0, _hocs.withDocs)('Box'));

var BoxImpl =
/*#__PURE__*/
function (_Component) {
  _inherits(BoxImpl, _Component);

  function BoxImpl() {
    _classCallCheck(this, BoxImpl);

    return _possibleConstructorReturn(this, _getPrototypeOf(BoxImpl).apply(this, arguments));
  }

  _createClass(BoxImpl, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          a11yTitle = _this$props.a11yTitle,
          background = _this$props.background,
          children = _this$props.children,
          direction = _this$props.direction,
          elevation = _this$props.elevation,
          fill = _this$props.fill,
          forwardRef = _this$props.forwardRef,
          gap = _this$props.gap,
          overflow = _this$props.overflow,
          responsive = _this$props.responsive,
          tag = _this$props.tag,
          as = _this$props.as,
          wrap = _this$props.wrap,
          width = _this$props.width,
          height = _this$props.height,
          propsTheme = _this$props.theme,
          rest = _objectWithoutProperties(_this$props, ["a11yTitle", "background", "children", "direction", "elevation", "fill", "forwardRef", "gap", "overflow", "responsive", "tag", "as", "wrap", "width", "height", "theme"]);

      var theme = propsTheme || this.context;
      var contents = children;

      if (gap) {
        contents = [];
        var firstIndex;

        _react.Children.forEach(children, function (child, index) {
          if (child) {
            if (firstIndex === undefined) {
              firstIndex = index;
            } else {
              contents.push(_react.default.createElement(_StyledBox.StyledBoxGap, {
                key: index,
                gap: gap,
                directionProp: direction,
                responsive: responsive
              }));
            }
          }

          contents.push(child);
        });
      }

      var content = _react.default.createElement(_StyledBox.StyledBox, _extends({
        as: !as && tag ? tag : as,
        "aria-label": a11yTitle,
        background: background,
        ref: forwardRef,
        directionProp: direction,
        elevationProp: elevation,
        fillProp: fill,
        overflowProp: overflow,
        wrapProp: wrap,
        widthProp: width,
        heightProp: height,
        responsive: responsive
      }, rest), contents);

      if (background) {
        var dark = (0, _utils.backgroundIsDark)(background, theme);

        if (dark !== theme.dark) {
          content = _react.default.createElement(_contexts.ThemeContext.Provider, {
            value: _objectSpread({}, theme, {
              dark: dark
            })
          }, content);
        }
      }

      return content;
    }
  }]);

  return BoxImpl;
}(_react.Component);

_defineProperty(BoxImpl, "contextType", _contexts.ThemeContext);

_defineProperty(BoxImpl, "displayName", 'Box');

_defineProperty(BoxImpl, "defaultProps", {
  direction: 'column',
  margin: 'none',
  pad: 'none',
  responsive: true
});

Object.setPrototypeOf(BoxImpl.defaultProps, _defaultProps.defaultProps);
var Box = wrapWithHocs(BoxImpl);
exports.Box = Box;