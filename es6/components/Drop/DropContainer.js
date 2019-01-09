"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _defaultProps = require("../../default-props");

var _contexts = require("../../contexts");

var _FocusedContainer = require("../FocusedContainer");

var _utils = require("../../utils");

var _Box = require("../Box");

var _Keyboard = require("../Keyboard");

var _StyledDrop = require("./StyledDrop");

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// using react synthetic event to be able to stop propagation that
// would otherwise close the layer on ESC.
var preventLayerClose = function preventLayerClose(event) {
  var key = event.keyCode ? event.keyCode : event.which;

  if (key === 27) {
    event.stopPropagation();
  }
};

var DropContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(DropContainer, _Component);

  function DropContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dropRef", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addScrollListener", function () {
      var dropTarget = _this.props.dropTarget;
      _this.scrollParents = (0, _utils.findScrollParents)(dropTarget);

      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.addEventListener('scroll', _this.place);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeScrollListener", function () {
      _this.scrollParents.forEach(function (scrollParent) {
        return scrollParent.removeEventListener('scroll', _this.place);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickDocument", function (event) {
      var _this$props = _this.props,
          dropTarget = _this$props.dropTarget,
          onClickOutside = _this$props.onClickOutside;
      var dropTargetNode = dropTarget;
      var dropNode = _this.dropRef.current;

      if (onClickOutside && dropNode && // need this for ie11
      !dropTargetNode.contains(event.target) && !dropNode.contains(event.target)) {
        onClickOutside();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function () {
      _this.removeScrollListener();

      _this.addScrollListener();

      _this.place(false);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "place", function (preserveHeight) {
      var _this$props2 = _this.props,
          align = _this$props2.align,
          dropTarget = _this$props2.dropTarget,
          responsive = _this$props2.responsive,
          stretch = _this$props2.stretch,
          theme = _this$props2.theme;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var target = dropTarget;
      var container = _this.dropRef.current;

      if (container && target) {
        // clear prior styling
        container.style.left = '';
        container.style.top = '';
        container.style.bottom = '';
        container.style.width = '';

        if (!preserveHeight) {
          container.style.maxHeight = '';
        } // get bounds


        var targetRect = (0, _utils.findVisibleParent)(target).getBoundingClientRect();
        var containerRect = container.getBoundingClientRect(); // determine width

        var width = Math.min(stretch ? Math.max(targetRect.width, containerRect.width) : containerRect.width, windowWidth); // set left position

        var left;

        if (align.left) {
          if (align.left === 'left') {
            left = targetRect.left;
          } else if (align.left === 'right') {
            left = targetRect.left + targetRect.width;
          }
        } else if (align.right) {
          if (align.right === 'left') {
            left = targetRect.left - width;
          } else if (align.right === 'right') {
            left = targetRect.left + targetRect.width - width;
          }
        } else {
          left = targetRect.left + targetRect.width / 2 - width / 2;
        }

        if (left + width > windowWidth) {
          left -= left + width - windowWidth;
        } else if (left < 0) {
          left = 0;
        } // set top or bottom position


        var top;
        var bottom;
        var maxHeight = containerRect.height;

        if (align.top) {
          if (align.top === 'top') {
            top = targetRect.top;
          } else {
            top = targetRect.bottom;
          }

          maxHeight = windowHeight - top;
        } else if (align.bottom) {
          if (align.bottom === 'bottom') {
            bottom = targetRect.bottom;
          } else {
            bottom = targetRect.top;
          }

          maxHeight = bottom;
        } else {
          // center
          top = targetRect.top + targetRect.height / 2 - containerRect.height / 2;
          maxHeight = windowHeight - top;
        } // if we can't fit it all, or we're rather close,
        // see if there's more room the other direction


        if (responsive && (containerRect.height > maxHeight || maxHeight < windowHeight / 10)) {
          // We need more room than we have.
          if (align.top && top > windowHeight / 2) {
            // We put it below, but there's more room above, put it above
            top = '';

            if (align.top === 'bottom') {
              // top = Math.max(targetRect.top - containerRect.height, 0);
              // maxHeight = targetRect.top - top;
              bottom = targetRect.top;
            } else {
              // top = Math.max(targetRect.bottom - containerRect.height, 0);
              // maxHeight = targetRect.bottom - top;
              bottom = targetRect.bottom;
            }

            maxHeight = bottom;
          } else if (align.bottom && maxHeight < windowHeight / 2) {
            // We put it above but there's more room below, put it below
            bottom = '';

            if (align.bottom === 'bottom') {
              top = targetRect.top;
            } else {
              top = targetRect.bottom;
            }

            maxHeight = windowHeight - top;
          }
        }

        container.style.left = "".concat(left, "px");

        if (stretch) {
          // offset width by 0.1 to avoid a bug in ie11 that
          // unnecessarily wraps the text if width is the same
          // NOTE: turned off for now
          container.style.width = "".concat(width + 0.1, "px");
        } // the (position:absolute + scrollTop)
        // is presenting issues with desktop scroll flickering


        if (top !== '') {
          container.style.top = "".concat(top, "px");
        }

        if (bottom !== '') {
          container.style.bottom = "".concat(windowHeight - bottom, "px");
        }

        if (!preserveHeight) {
          if (theme.drop && theme.drop.maxHeight) {
            maxHeight = Math.min(maxHeight, (0, _utils.parseMetricToNum)(theme.drop.maxHeight));
          }

          container.style.maxHeight = "".concat(maxHeight, "px");
        }
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onEsc", function (event) {
      var onEsc = _this.props.onEsc;
      event.stopPropagation();

      if (onEsc) {
        onEsc(event);
      }
    });

    return _this;
  }

  _createClass(DropContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var restrictFocus = this.props.restrictFocus;
      this.addScrollListener();
      window.addEventListener('resize', this.onResize);
      document.addEventListener('mousedown', this.onClickDocument);
      this.place(false);

      if (restrictFocus) {
        this.dropRef.current.focus();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.place(true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeScrollListener();
      window.removeEventListener('resize', this.onResize);
      document.removeEventListener('mousedown', this.onClickDocument);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          alignProp = _this$props3.align,
          children = _this$props3.children,
          onClickOutside = _this$props3.onClickOutside,
          onEsc = _this$props3.onEsc,
          onKeyDown = _this$props3.onKeyDown,
          elevation = _this$props3.elevation,
          plain = _this$props3.plain,
          propsTheme = _this$props3.theme,
          rest = _objectWithoutProperties(_this$props3, ["align", "children", "onClickOutside", "onEsc", "onKeyDown", "elevation", "plain", "theme"]);

      var theme = this.context || propsTheme;

      var content = _react.default.createElement(_StyledDrop.StyledDrop, _extends({
        as: _Box.Box,
        plain: plain,
        elevation: !plain ? elevation || theme.global.drop.shadowSize || 'small' : undefined,
        tabIndex: "-1",
        ref: this.dropRef,
        alignProp: alignProp
      }, rest), children);

      if (theme.global.drop.background) {
        var dark = (0, _utils.backgroundIsDark)(theme.global.drop.background, theme);

        if (dark !== theme.dark) {
          content = _react.default.createElement(_contexts.ThemeContext.Provider, {
            value: _objectSpread({}, theme, {
              dark: dark
            })
          }, content);
        }
      }

      return _react.default.createElement(_FocusedContainer.FocusedContainer, {
        onKeyDown: onEsc && preventLayerClose
      }, _react.default.createElement(_Keyboard.Keyboard, {
        onEsc: onEsc && this.onEsc,
        onKeyDown: onKeyDown,
        target: "document"
      }, content));
    }
  }]);

  return DropContainer;
}(_react.Component);

exports.DropContainer = DropContainer;

_defineProperty(DropContainer, "contextType", _contexts.ThemeContext);

_defineProperty(DropContainer, "defaultProps", {
  align: {
    top: 'top',
    left: 'left'
  },
  stretch: 'width'
});

Object.setPrototypeOf(DropContainer.defaultProps, _defaultProps.defaultProps);