"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _styledComponents.withTheme;
  }
});
exports.withAnnounce = exports.withForwardRef = exports.withFocus = exports.withDocs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _getDisplayName = _interopRequireDefault(require("recompose/getDisplayName"));

var _hoistNonReactStatics = _interopRequireDefault(require("hoist-non-react-statics"));

var _styledComponents = require("styled-components");

var _contexts = require("../contexts");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var doc = function doc() {
  return function (x) {
    return x;
  };
}; // Do not use the documentation wrapper in production.


if (process.env.NODE_ENV !== 'production') {
  doc = function doc(component) {
    return require("./".concat(component, "/doc")).doc;
  }; // eslint-disable-line

}

var withDocs = doc;
exports.withDocs = withDocs;

var withFocus = function withFocus(WrappedComponent) {
  var FocusableComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(FocusableComponent, _Component);

    function FocusableComponent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, FocusableComponent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FocusableComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "mouseActive", false);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
        focus: false,
        wrappedRef: _react.default.createRef()
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
        var wrappedRef = _this.state.wrappedRef;
        window.addEventListener('mousedown', _this.handleActiveMouse); // we could be using onFocus in the wrapper node itself
        // but react does not invoke it if you programically
        // call wrapperNode.focus() inside componentWillUnmount
        // see Drop "this.originalFocusedElement.focus();" for reference

        var wrapperNode = wrappedRef.current;

        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.addEventListener('focus', _this.setFocus);
        }
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
        var wrappedRef = _this.state.wrappedRef;
        window.removeEventListener('mousedown', _this.handleActiveMouse);
        var wrapperNode = wrappedRef.current;

        if (wrapperNode && wrapperNode.addEventListener) {
          wrapperNode.removeEventListener('focus', _this.setFocus);
        }

        clearTimeout(_this.focusTimer);
        clearTimeout(_this.mouseTimer);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleActiveMouse", function () {
        // from https://marcysutton.com/button-focus-hell/
        _this.mouseActive = true; // this avoids showing focus when clicking around

        clearTimeout(_this.mouseTimer); // empirical number to reset mouseActive after
        // some time has passed without mousedown

        _this.mouseTimer = setTimeout(function () {
          _this.mouseActive = false;
        }, 150);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setFocus", function () {
        // delay setting focus to avoid interupting events,
        // 1ms was chosen empirically based on ie11 using Select and TextInput
        // with and without a FormField.
        clearTimeout(_this.focusTimer);
        _this.focusTimer = setTimeout(function () {
          var focus = _this.state.focus;

          if (!focus && !_this.mouseActive) {
            _this.setState({
              focus: true
            });
          }
        }, 1);
      });

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "resetFocus", function () {
        clearTimeout(_this.focusTimer);
        _this.focusTimer = setTimeout(function () {
          var focus = _this.state.focus;

          if (focus) {
            _this.setState({
              focus: false
            });
          }
        }, 1);
      });

      return _this;
    }

    _createClass(FocusableComponent, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            _onFocus = _this$props.onFocus,
            _onBlur = _this$props.onBlur,
            withFocusRef = _this$props.withFocusRef,
            rest = _objectWithoutProperties(_this$props, ["onFocus", "onBlur", "withFocusRef"]);

        var _this$state = this.state,
            focus = _this$state.focus,
            wrappedRef = _this$state.wrappedRef;
        return _react.default.createElement(WrappedComponent, _extends({
          ref: wrappedRef,
          focus: focus
        }, rest, {
          onFocus: function onFocus(event) {
            _this2.setFocus();

            if (_onFocus) {
              _onFocus(event);
            }
          },
          onBlur: function onBlur(event) {
            _this2.resetFocus();

            if (_onBlur) {
              _onBlur(event);
            }
          }
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(nextProps, prevState) {
        var withFocusRef = nextProps.withFocusRef;
        var wrappedRef = prevState.wrappedRef;
        var nextWrappedRef = withFocusRef || wrappedRef;

        if (nextWrappedRef !== wrappedRef) {
          return {
            wrappedRef: nextWrappedRef
          };
        }

        return null;
      }
    }]);

    return FocusableComponent;
  }(_react.Component);

  var ForwardRef = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(FocusableComponent, _extends({}, props, {
      withFocusRef: ref
    }));
  });

  ForwardRef.displayName = (0, _getDisplayName.default)(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;
  ForwardRef.defaultProps = WrappedComponent.defaultProps;
  (0, _hoistNonReactStatics.default)(ForwardRef, WrappedComponent);
  return ForwardRef;
};

exports.withFocus = withFocus;

var withForwardRef = function withForwardRef(WrappedComponent) {
  var ForwardRefComponent = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(WrappedComponent, _extends({
      forwardRef: ref
    }, props));
  });

  ForwardRefComponent.displayName = (0, _getDisplayName.default)(WrappedComponent);
  ForwardRefComponent.name = ForwardRefComponent.displayName;
  ForwardRefComponent.defaultProps = WrappedComponent.defaultProps;
  (0, _hoistNonReactStatics.default)(ForwardRefComponent, WrappedComponent);
  return ForwardRefComponent;
};

exports.withForwardRef = withForwardRef;

var withAnnounce = function withAnnounce(WrappedComponent) {
  var ForwardRef = _react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_contexts.AnnounceContext.Consumer, null, function (announce) {
      return _react.default.createElement(WrappedComponent, _extends({}, props, {
        announce: announce,
        ref: ref
      }));
    });
  });

  ForwardRef.displayName = (0, _getDisplayName.default)(WrappedComponent);
  ForwardRef.name = ForwardRef.displayName;
  ForwardRef.defaultProps = WrappedComponent.defaultProps;
  (0, _hoistNonReactStatics.default)(ForwardRef, WrappedComponent);
  return ForwardRef;
};

exports.withAnnounce = withAnnounce;