"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Carousel = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _styledComponents = require("styled-components");

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Button = require("../Button");

var _Keyboard = require("../Keyboard");

var _Stack = require("../Stack");

var _hocs = require("../hocs");

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

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeIndex: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "play", function () {
      var play = _this.props.play;
      clearInterval(_this.timer);
      _this.timer = setInterval(function () {
        var children = _this.props.children;
        var activeIndex = _this.state.activeIndex;
        var lastIndex = _react.Children.count(children) - 1;

        if (activeIndex < lastIndex) {
          _this.setState({
            activeIndex: activeIndex + 1,
            priorActiveIndex: activeIndex
          });
        } else {
          _this.setState({
            activeIndex: 0,
            priorActiveIndex: activeIndex
          });
        }
      }, play);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRight", function () {
      var activeIndex = _this.state.activeIndex;
      clearInterval(_this.timer);

      _this.setState({
        activeIndex: activeIndex + 1,
        priorActiveIndex: activeIndex
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLeft", function () {
      var activeIndex = _this.state.activeIndex;
      clearInterval(_this.timer);

      _this.setState({
        activeIndex: activeIndex - 1,
        priorActiveIndex: activeIndex
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelect", function (index) {
      return function () {
        var activeIndex = _this.state.activeIndex;
        clearInterval(_this.timer);

        _this.setState({
          activeIndex: index,
          priorActiveIndex: activeIndex
        });
      };
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var play = this.props.play;

      if (play) {
        this.play();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var play = this.props.play;

      if (play && (!prevProps.play || play !== prevProps.play)) {
        this.play();
      } else if (!play && prevProps.play) {
        clearInterval(this.timer);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          fill = _this$props.fill,
          focus = _this$props.focus,
          theme = _this$props.theme,
          rest = _objectWithoutProperties(_this$props, ["children", "fill", "focus", "theme"]);

      var _this$state = this.state,
          activeIndex = _this$state.activeIndex,
          priorActiveIndex = _this$state.priorActiveIndex;
      var lastIndex = _react.Children.count(children) - 1;
      var onLeft = activeIndex > 0 ? this.onLeft : undefined;
      var onRight = activeIndex < lastIndex ? this.onRight : undefined;
      var CurrentIcon = theme.carousel.icons.current;
      var iconColor = (0, _utils.normalizeColor)(theme.carousel.icons.color || 'control', theme);
      var selectors = [];

      var wrappedChildren = _react.Children.map(children, function (child, index) {
        selectors.push(_react.default.createElement(_Button.Button // eslint-disable-next-line react/no-array-index-key
        , {
          key: index,
          icon: _react.default.createElement(CurrentIcon, {
            color: activeIndex === index ? iconColor : undefined
          }),
          onClick: _this2.onSelect(index)
        }));
        var animation;

        if (index === activeIndex) {
          if (priorActiveIndex !== undefined) {
            animation = {
              type: priorActiveIndex < activeIndex ? 'slideLeft' : 'slideRight',
              size: 'xlarge'
            };
          }
        } else if (index === priorActiveIndex) {
          animation = {
            type: 'fadeOut'
          };
        } else {
          animation = {
            type: 'fadeOut',
            duration: 0
          };
        }

        return _react.default.createElement(_Box.Box, {
          overflow: "hidden"
        }, _react.default.createElement(_Box.Box, {
          animation: animation
        }, child));
      });

      var NextIcon = theme.carousel.icons.next;
      var PreviousIcon = theme.carousel.icons.previous;
      return _react.default.createElement(_Keyboard.Keyboard, {
        onLeft: onLeft,
        onRight: onRight
      }, _react.default.createElement(_Stack.Stack, _extends({
        guidingChild: activeIndex,
        fill: fill
      }, rest), wrappedChildren, _react.default.createElement(_Box.Box, {
        tabIndex: "0",
        focus: focus,
        fill: true,
        direction: "row",
        justify: "between"
      }, _react.default.createElement(_Box.Box, {
        fill: "vertical"
      }, _react.default.createElement(_Button.Button, {
        fill: true,
        disabled: activeIndex <= 0,
        onClick: onLeft,
        hoverIndicator: true
      }, _react.default.createElement(_Box.Box, {
        justify: "center"
      }, _react.default.createElement(PreviousIcon, null)))), _react.default.createElement(_Box.Box, {
        justify: "end"
      }, _react.default.createElement(_Box.Box, {
        direction: "row",
        justify: "center"
      }, selectors)), _react.default.createElement(_Box.Box, {
        fill: "vertical"
      }, _react.default.createElement(_Button.Button, {
        fill: true,
        disabled: activeIndex >= lastIndex,
        onClick: onRight,
        hoverIndicator: true
      }, _react.default.createElement(_Box.Box, {
        justify: "center"
      }, _react.default.createElement(NextIcon, null)))))));
    }
  }]);

  return Carousel;
}(_react.Component);

Carousel.defaultProps = {};
Object.setPrototypeOf(Carousel.defaultProps, _defaultProps.defaultProps);
var CarouselDoc;

if (process.env.NODE_ENV !== 'production') {
  CarouselDoc = require('./doc').doc(Carousel); // eslint-disable-line global-require
}

var CarouselWrapper = (0, _recompose.compose)(_hocs.withFocus, _styledComponents.withTheme)(CarouselDoc || Carousel);
exports.Carousel = CarouselWrapper;