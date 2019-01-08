"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

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

var SimpleTextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleTextInput, _Component);

  function SimpleTextInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SimpleTextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SimpleTextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", _react.default.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      return _this.setState({
        value: event.target.value
      });
    });

    return _this;
  }

  _createClass(SimpleTextInput, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        width: "medium"
      }, _react.default.createElement(_grommet.TextInput, {
        ref: this.ref,
        value: value,
        onChange: this.onChange
      }))));
    }
  }]);

  return SimpleTextInput;
}(_react.Component);

var suggestions = Array(100).fill().map(function (_, i) {
  return "suggestion ".concat(i + 1);
});

var SuggestionsTextInput =
/*#__PURE__*/
function (_Component2) {
  _inherits(SuggestionsTextInput, _Component2);

  function SuggestionsTextInput() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, SuggestionsTextInput);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SuggestionsTextInput)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      value: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onChange", function (event) {
      return _this2.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onSelect", function (event) {
      return _this2.setState({
        value: event.suggestion
      });
    });

    return _this2;
  }

  _createClass(SuggestionsTextInput, [{
    key: "render",
    value: function render() {
      var value = this.state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Box, {
        width: "medium"
      }, _react.default.createElement(_grommet.TextInput, {
        value: value,
        onChange: this.onChange,
        onSelect: this.onSelect,
        suggestions: suggestions
      }))));
    }
  }]);

  return SuggestionsTextInput;
}(_react.Component);

var myCustomTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    drop: {
      background: '#444444',
      shadowSize: 'medium',
      extend: "\n        border-bottom-left-radius: 12px;\n        border-bottom-right-radius: 12px;\n\n        overflow: hidden;\n      "
    },
    elevation: {
      dark: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      },
      light: {
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '14px'
    }
  }
});
var folks = [{
  name: 'Alan Souza',
  imageUrl: 'https://s.gravatar.com/avatar/b226da5c619b18b44eb95c30be393953?s=80'
}, {
  name: 'Bryan Jacquot',
  imageUrl: 'https://s.gravatar.com/avatar/10d15019166606cfed23846a7f902660?s=80'
}, {
  name: 'Chris Carlozzi',
  imageUrl: 'https://s.gravatar.com/avatar/56ea1e2ecd0d3cc85479b2d09e31d071?s=80'
}, {
  name: 'Eric Soderberg',
  imageUrl: 'https://s.gravatar.com/avatar/99020cae7ff399a4fbea19c0634f77c3?s=80'
}, {
  name: 'Marlon Parizzotto',
  imageUrl: 'https://s.gravatar.com/avatar/e6684969375a4dcc0aa99f0bfae544c3?s=80'
}, {
  name: 'Tales Chaves',
  imageUrl: 'https://s.gravatar.com/avatar/1f80adca55d9f5d97932ff97f631a4e8?s=80'
}, {
  name: 'Tracy Barmore',
  imageUrl: 'https://s.gravatar.com/avatar/4ec9c3a91da89f278e4482811caad7f3?s=80'
}];

var CustomSuggestionsTextInput =
/*#__PURE__*/
function (_Component3) {
  _inherits(CustomSuggestionsTextInput, _Component3);

  function CustomSuggestionsTextInput() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, CustomSuggestionsTextInput);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(CustomSuggestionsTextInput)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      value: '',
      suggestionOpen: false,
      suggestedFolks: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "boxRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onChange", function (event) {
      return _this3.setState({
        value: event.target.value
      }, function () {
        var value = _this3.state.value;

        if (!value.trim()) {
          _this3.setState({
            suggestedFolks: []
          });
        } else {
          // simulate an async call to the backend
          setTimeout(function () {
            return _this3.setState({
              suggestedFolks: folks
            });
          }, 300);
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onSelect", function (event) {
      return _this3.setState({
        value: event.suggestion.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "renderSuggestions", function () {
      var _this3$state = _this3.state,
          value = _this3$state.value,
          suggestedFolks = _this3$state.suggestedFolks;
      return suggestedFolks.filter(function (_ref) {
        var name = _ref.name;
        return name.toLowerCase().indexOf(value.toLowerCase()) >= 0;
      }).map(function (_ref2, index, list) {
        var name = _ref2.name,
            imageUrl = _ref2.imageUrl;
        return {
          label: _react.default.createElement(_grommet.Box, {
            direction: "row",
            align: "center",
            gap: "small",
            border: index < list.length - 1 ? 'bottom' : undefined,
            pad: "small"
          }, _react.default.createElement(_grommet.Image, {
            width: "48px",
            src: imageUrl,
            style: {
              borderRadius: '100%'
            }
          }), _react.default.createElement(_grommet.Text, null, _react.default.createElement("strong", null, name))),
          value: name
        };
      });
    });

    return _this3;
  }

  _createClass(CustomSuggestionsTextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state = this.state,
          suggestionOpen = _this$state.suggestionOpen,
          value = _this$state.value;
      return _react.default.createElement(_grommet.Grommet, {
        theme: myCustomTheme,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        background: "dark-1",
        fill: true,
        align: "center",
        pad: {
          top: 'large'
        }
      }, _react.default.createElement(_grommet.Box, {
        ref: this.boxRef,
        width: "large",
        direction: "row",
        align: "center",
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        round: "small",
        elevation: suggestionOpen ? 'medium' : undefined,
        border: {
          side: 'all',
          color: suggestionOpen ? 'transparent' : 'border'
        },
        style: suggestionOpen ? {
          borderBottomLeftRadius: '0px',
          borderBottomRightRadius: '0px'
        } : undefined
      }, _react.default.createElement(_grommetIcons.Search, {
        color: "brand"
      }), _react.default.createElement(_grommet.TextInput, {
        type: "search",
        dropTarget: this.boxRef.current,
        plain: true,
        value: value,
        onChange: this.onChange,
        onSelect: this.onSelect,
        suggestions: this.renderSuggestions(),
        placeholder: "Enter your name...",
        onSuggestionsOpen: function onSuggestionsOpen() {
          return _this4.setState({
            suggestionOpen: true
          });
        },
        onSuggestionsClose: function onSuggestionsClose() {
          return _this4.setState({
            suggestionOpen: false
          });
        }
      }))));
    }
  }]);

  return CustomSuggestionsTextInput;
}(_react.Component);

(0, _react2.storiesOf)('TextInput', module).add('Simple TextInput', function () {
  return _react.default.createElement(SimpleTextInput, null);
}).add('Suggestions TextInput', function () {
  return _react.default.createElement(SuggestionsTextInput, null);
}).add('Custom Suggestions', function () {
  return _react.default.createElement(CustomSuggestionsTextInput, null);
});