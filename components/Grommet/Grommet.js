"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grommet = void 0;

var _react = _interopRequireWildcard(require("react"));

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

var _grommetStyles = require("grommet-styles");

var _contexts = require("../../contexts");

var _utils = require("../../utils");

var _themes = require("../../themes");

var _hocs = require("../hocs");

var _StyledGrommet = require("./StyledGrommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var wrapWithHocs = (0, _hocs.withDocs)('Grommet');

var GrommetImpl =
/*#__PURE__*/
function (_Component) {
  _inherits(GrommetImpl, _Component);

  function GrommetImpl() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GrommetImpl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GrommetImpl)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function () {
      var _this$state = _this.state,
          theme = _this$state.theme,
          responsive = _this$state.responsive;
      var breakpoint = (0, _utils.getBreakpoint)(window.innerWidth, theme);

      if (breakpoint !== responsive) {
        _this.setState({
          responsive: breakpoint
        });
      }
    });

    return _this;
  }

  _createClass(GrommetImpl, [{
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
    key: "deviceResponsive",
    value: function deviceResponsive() {
      var userAgent = this.props.userAgent;
      var theme = this.state.theme;

      if (userAgent) {
        var md = new _mobileDetect.default(userAgent);

        if (md.phone()) {
          return (0, _utils.getDeviceBreakpoint)('phone', theme);
        }

        if (md.tablet()) {
          return (0, _utils.getDeviceBreakpoint)('tablet', theme);
        }

        return (0, _utils.getDeviceBreakpoint)('computer', theme);
      }

      return undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      delete rest.theme;
      var _this$state2 = this.state,
          theme = _this$state2.theme,
          stateResponsive = _this$state2.responsive; // Value from state should be correct once we resize
      // On first render we try to guess otherwise set the default as a tablet

      var responsive = stateResponsive || this.deviceResponsive() || theme.global.deviceBreakpoints.tablet;
      return _react.default.createElement(_contexts.ThemeContext.Provider, {
        value: theme
      }, _react.default.createElement(_contexts.ResponsiveContext.Provider, {
        value: responsive
      }, _react.default.createElement(_StyledGrommet.StyledGrommet, rest, children)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var _nextProps$theme = nextProps.theme,
          theme = _nextProps$theme === void 0 ? {} : _nextProps$theme;
      var stateTheme = prevState.theme,
          themeProp = prevState.themeProp;
      var nextTheme = (0, _utils.deepMerge)(_themes.base, theme);

      if (!stateTheme || theme !== themeProp) {
        if (typeof theme.dark === 'undefined') {
          // calculate if background is dark or not
          // otherwise respect the property passed in the theme
          var colors = nextTheme.global.colors;
          var color = colors.background;
          nextTheme.dark = color ? (0, _grommetStyles.colorIsDark)(color) : false;
        }

        return {
          theme: nextTheme,
          themeProp: theme
        };
      }

      return null;
    }
  }]);

  return GrommetImpl;
}(_react.Component);

_defineProperty(GrommetImpl, "displayName", 'Grommet');

var Grommet = wrapWithHocs(GrommetImpl);
exports.Grommet = Grommet;