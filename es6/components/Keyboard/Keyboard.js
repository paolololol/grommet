"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Keyboard = void 0;

var _react = require("react");

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

var KEYS = {
  8: 'onBackspace',
  9: 'onTab',
  13: 'onEnter',
  27: 'onEsc',
  32: 'onSpace',
  37: 'onLeft',
  38: 'onUp',
  39: 'onRight',
  40: 'onDown',
  188: 'onComma',
  16: 'onShift'
};

var Keyboard =
/*#__PURE__*/
function (_Component) {
  _inherits(Keyboard, _Component);

  function Keyboard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Keyboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Keyboard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onKeyDown", function (event) {
      /* eslint-disable-next-line react/prop-types */
      var onKeyDown = _this.props.onKeyDown;
      var key = event.keyCode ? event.keyCode : event.which;
      var callbackName = KEYS[key];
      /* eslint-disable react/destructuring-assignment */

      for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        rest[_key2 - 1] = arguments[_key2];
      }

      if (callbackName && _this.props[callbackName]) {
        var _this$props;

        (_this$props = _this.props)[callbackName].apply(_this$props, [event].concat(rest));
      }
      /* eslint-enable react/destructuring-assignment */


      if (onKeyDown) {
        onKeyDown.apply(void 0, [event].concat(rest));
      }
    });

    return _this;
  }

  _createClass(Keyboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* eslint-disable-next-line react/prop-types */
      var target = this.props.target;

      if (target === 'document') {
        document.addEventListener('keydown', this.onKeyDown);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var target = this.props.target;

      if (target === 'document') {
        document.removeEventListener('keydown', this.onKeyDown);
      }
    }
  }, {
    key: "render",
    value: function render() {
      /* eslint-disable-next-line react/prop-types */
      var _this$props2 = this.props,
          children = _this$props2.children,
          target = _this$props2.target;
      return target === 'document' ? children : (0, _react.cloneElement)(_react.Children.only(children), {
        onKeyDown: this.onKeyDown
      });
    }
  }]);

  return Keyboard;
}(_react.Component);

var KeyboardDoc;

if (process.env.NODE_ENV !== 'production') {
  KeyboardDoc = require('./doc').doc(Keyboard); // eslint-disable-line global-require
}

var KeyboardWrapper = KeyboardDoc || Keyboard;
exports.Keyboard = KeyboardWrapper;