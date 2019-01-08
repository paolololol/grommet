"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Searcher = void 0;

var _react = _interopRequireWildcard(require("react"));

var _recompose = require("recompose");

var _styledComponents = require("styled-components");

var _grommetIcons = require("grommet-icons");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _Button = require("../Button");

var _Keyboard = require("../Keyboard");

var _Text = require("../Text");

var _TextInput = require("../TextInput");

var _utils = require("../../utils");

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

var Searcher =
/*#__PURE__*/
function (_Component) {
  _inherits(Searcher, _Component);

  function Searcher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Searcher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Searcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", _react.default.createRef());

    return _this;
  }

  _createClass(Searcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* eslint-disable-next-line react/prop-types */
      var _this$props = this.props,
          filtering = _this$props.filtering,
          property = _this$props.property;

      if (this.inputRef.current && filtering === property) {
        this.inputRef.current.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          filtering = _this$props2.filtering,
          filters = _this$props2.filters,
          onFilter = _this$props2.onFilter,
          onFiltering = _this$props2.onFiltering,
          property = _this$props2.property,
          theme = _this$props2.theme;

      if (filtering === property) {
        return _react.default.createElement(_Keyboard.Keyboard, {
          onEsc: function onEsc() {
            return onFiltering(undefined);
          }
        }, _react.default.createElement(_Box.Box, {
          flex: true,
          pad: {
            horizontal: 'small'
          }
        }, _react.default.createElement(_TextInput.TextInput, {
          ref: this.inputRef,
          value: filters[property],
          onChange: function onChange(event) {
            return onFilter(property, event.target.value);
          },
          onBlur: function onBlur() {
            return onFiltering(undefined);
          }
        })));
      }

      return _react.default.createElement(_react.Fragment, null, filters[property] ? _react.default.createElement(_Box.Box, {
        flex: false,
        pad: {
          horizontal: 'small'
        }
      }, _react.default.createElement(_Text.Text, null, filters[property])) : null, _react.default.createElement(_Button.Button, {
        icon: _react.default.createElement(_grommetIcons.FormSearch, {
          color: (0, _utils.normalizeColor)(filtering === property ? 'brand' : 'border', theme)
        }),
        hoverIndicator: true,
        onClick: function onClick() {
          return onFiltering(filtering === property ? undefined : property);
        }
      }));
    }
  }]);

  return Searcher;
}(_react.Component);

Searcher.defaultProps = {};
Object.setPrototypeOf(Searcher.defaultProps, _defaultProps.defaultProps);
var SearcherWrapper = (0, _recompose.compose)(_styledComponents.withTheme)(Searcher);
exports.Searcher = SearcherWrapper;