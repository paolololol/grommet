"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Accordion = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = require("../Box");

var _AccordionContext = require("./AccordionContext");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var activeAsArray = function activeAsArray(active) {
  return typeof active === 'number' ? [active] : active;
};

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Accordion)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      activeIndexes: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPanelChange", function (index) {
      var activeIndexes = _this.state.activeIndexes;

      var nextActiveIndexes = _toConsumableArray(activeIndexes || []);

      var _this$props = _this.props,
          onActive = _this$props.onActive,
          multiple = _this$props.multiple;
      var activeIndex = nextActiveIndexes.indexOf(index);

      if (activeIndex > -1) {
        nextActiveIndexes.splice(activeIndex, 1);
      } else if (multiple) {
        nextActiveIndexes.push(index);
      } else {
        nextActiveIndexes = [index];
      }

      _this.setState({
        activeIndexes: nextActiveIndexes
      }, function () {
        if (onActive) {
          onActive(nextActiveIndexes);
        }
      });
    });

    return _this;
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          animate = _this$props2.animate,
          children = _this$props2.children,
          messages = _this$props2.messages,
          rest = _objectWithoutProperties(_this$props2, ["animate", "children", "messages"]);

      var activeIndexes = this.state.activeIndexes;
      delete rest.onActive;
      return _react.default.createElement(_Box.Box, _extends({
        role: "tablist"
      }, rest, {
        overflow: "auto"
      }), _react.Children.toArray(children).map(function (panel, index) {
        return _react.default.createElement(_AccordionContext.AccordionContext.Provider, {
          key: "accordion-panel_".concat(index + 0),
          value: {
            active: activeIndexes.indexOf(index) > -1,
            animate: animate,
            messages: messages,
            onPanelChange: function onPanelChange() {
              return _this2.onPanelChange(index);
            }
          }
        }, panel);
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var activeIndex = nextProps.activeIndex;
      var stateActiveIndexes = prevState.activeIndexes,
          stateActiveIndex = prevState.activeIndex;
      var activeIndexes = activeAsArray(activeIndex) || [];

      if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) && activeIndexes.join() !== stateActiveIndexes.join()) {
        return {
          activeIndexes: activeIndexes,
          activeIndex: activeIndex
        };
      }

      return null;
    }
  }]);

  return Accordion;
}(_react.Component);

_defineProperty(Accordion, "defaultProps", {
  animate: true,
  messages: {
    tabContents: 'Tab Contents'
  }
});

var AccordionDoc;

if (process.env.NODE_ENV !== 'production') {
  AccordionDoc = require('./doc').doc(Accordion); // eslint-disable-line global-require
}

var AccordionWrapper = AccordionDoc || Accordion;
exports.Accordion = AccordionWrapper;