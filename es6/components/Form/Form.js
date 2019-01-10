"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireWildcard(require("react"));

var _defaultProps = require("../../default-props");

var _FormContext = require("./FormContext");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultMessages = {
  invalid: 'invalid',
  required: 'required'
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Form)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      errors: {},
      value: {},
      touched: {}
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "validations", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      var onSubmit = _this.props.onSubmit;
      var _this$state = _this.state,
          errors = _this$state.errors,
          value = _this$state.value; // Don't submit the form via browser form action. We don't want it
      // if the validation fails. And, we assume a javascript action handler
      // otherwise.

      event.preventDefault();

      var nextErrors = _objectSpread({}, errors);

      Object.keys(_this.validations).forEach(function (name) {
        var validate = _this.validations[name];
        var error = validate && validate(value[name], value);

        if (error) {
          nextErrors[name] = error;
        } else {
          delete nextErrors[name];
        }
      });

      if (Object.keys(nextErrors).length === 0 && onSubmit) {
        event.persist(); // extract from React's synthetic event pool

        var adjustedEvent = event;
        adjustedEvent.value = value;
        onSubmit(adjustedEvent);
      } else {
        _this.setState({
          errors: nextErrors
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "update", function (name, data, error) {
      var _this$state2 = _this.state,
          errors = _this$state2.errors,
          touched = _this$state2.touched,
          value = _this$state2.value;

      var nextValue = _objectSpread({}, value);

      nextValue[name] = data;

      var nextTouched = _objectSpread({}, touched);

      nextTouched[name] = true;

      var nextErrors = _objectSpread({}, errors);

      if (errors[name]) {
        var nextError = error || _this.validations[name] && _this.validations[name](data, nextValue);

        if (nextError) {
          nextErrors[name] = nextError;
        } else {
          delete nextErrors[name];
        }
      }

      _this.setState({
        value: nextValue,
        errors: nextErrors,
        touched: nextTouched
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addValidation", function (name, validate) {
      _this.validations[name] = validate;
    });

    return _this;
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      delete rest.messages;
      delete rest.theme;
      delete rest.value;
      var _this$state3 = this.state,
          errors = _this$state3.errors,
          touched = _this$state3.touched,
          value = _this$state3.value,
          messages = _this$state3.messages;
      return _react.default.createElement("form", _extends({}, rest, {
        onSubmit: this.onSubmit
      }), _react.default.createElement(_FormContext.FormContext.Provider, {
        value: {
          addValidation: this.addValidation,
          errors: errors,
          messages: messages,
          touched: touched,
          update: this.update,
          value: value
        }
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var value = nextProps.value,
          errors = nextProps.errors,
          messages = nextProps.messages;
      var stateValue = prevState.value,
          stateErrors = prevState.errors,
          priorValue = prevState.priorValue,
          priorErrors = prevState.priorErrors,
          priorMessages = prevState.priorMessages;

      if (!priorValue || value !== priorValue || errors !== priorErrors || messages !== priorMessages) {
        return {
          value: value !== priorValue ? value : stateValue,
          priorValue: value,
          errors: (errors !== priorErrors ? errors : stateErrors) || {},
          priorErrors: errors,
          messages: _objectSpread({}, defaultMessages, messages),
          priorMessages: messages
        };
      }

      return null;
    }
  }]);

  return Form;
}(_react.Component);

_defineProperty(Form, "defaultProps", {
  messages: defaultMessages,
  value: {}
});

Object.setPrototypeOf(Form.defaultProps, _defaultProps.defaultProps);
var FormDoc;

if (process.env.NODE_ENV !== 'production') {
  FormDoc = require('./doc').doc(Form); // eslint-disable-line global-require
}

var FormWrapper = FormDoc || Form;
exports.Form = FormWrapper;
FormWrapper.displayName = 'Form';