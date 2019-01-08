"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _Button = require("../Button");

var _Drop = require("../Drop");

var _hocs = require("../hocs");

var _utils = require("../../utils");

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

var DropButton =
/*#__PURE__*/
function (_Component) {
  _inherits(DropButton, _Component);

  function DropButton(props) {
    var _this;

    _classCallCheck(this, DropButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DropButton).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "buttonRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onDropClose", function () {
      var onClose = _this.props.onClose;

      _this.setState({
        show: false
      }, function () {
        if (onClose) {
          onClose();
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggle", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          onOpen = _this$props.onOpen;
      var show = _this.state.show;

      _this.setState({
        show: !show
      }, function () {
        return show ? onClose && onClose() : onOpen && onOpen();
      });
    });

    _this.state = {
      show: props.open || false
    };
    return _this;
  }

  _createClass(DropButton, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var open = this.props.open;

      if (open) {
        this.forceUpdate();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var forwardRef = this.props.forwardRef;
      var show = this.state.show;

      if (!show && prevState.show) {
        // focus on the button if the drop is closed
        (0, _utils.setFocusWithoutScroll)((forwardRef || this.buttonRef).current);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          dropAlign = _this$props2.dropAlign,
          forwardRef = _this$props2.forwardRef,
          dropContent = _this$props2.dropContent,
          dropTarget = _this$props2.dropTarget,
          id = _this$props2.id,
          open = _this$props2.open,
          rest = _objectWithoutProperties(_this$props2, ["disabled", "dropAlign", "forwardRef", "dropContent", "dropTarget", "id", "open"]);

      var show = this.state.show;
      delete rest.onClose;
      delete rest.onOpen;
      var drop;

      if (show && (forwardRef || this.buttonRef).current) {
        drop = _react.default.createElement(_Drop.Drop, {
          id: id ? "".concat(id, "__drop") : undefined,
          restrictFocus: true,
          align: dropAlign,
          target: dropTarget || (forwardRef || this.buttonRef).current,
          onClickOutside: this.onDropClose,
          onEsc: this.onDropClose
        }, dropContent);
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Button.Button, _extends({
        id: id,
        ref: forwardRef || this.buttonRef,
        disabled: disabled,
        onClick: this.onToggle
      }, rest)), drop);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var show = prevState.show;
      var open = nextProps.open;

      if (open !== undefined && open !== show) {
        return {
          show: open
        };
      }

      return null;
    }
  }]);

  return DropButton;
}(_react.Component);

_defineProperty(DropButton, "defaultProps", {
  a11yTitle: 'Open Drop',
  dropAlign: {
    top: 'top',
    left: 'left'
  }
});

var DropButtonDoc;

if (process.env.NODE_ENV !== 'production') {
  DropButtonDoc = require('./doc').doc(DropButton); // eslint-disable-line global-require
}

var DropButtonWrapper = (0, _recompose.compose)(_hocs.withForwardRef)(DropButtonDoc || DropButton);
exports.DropButton = DropButtonWrapper;