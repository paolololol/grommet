"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _base = require("grommet/themes/base");

var _utils = require("grommet/utils");

var _grommetThemeHpe = require("grommet-theme-hpe");

var _grommetThemeAruba = require("grommet-theme-aruba");

var _grommetThemeHp = require("grommet-theme-hp");

var _grommetThemeDxc = require("grommet-theme-dxc");

var _grommetThemeV = require("grommet-theme-v1");

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

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Node = function Node(_ref) {
  var id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["id"]);

  return _react.default.createElement(_grommet.Box, _extends({
    id: id,
    basis: "xxsmall",
    margin: "small",
    pad: "medium",
    round: "small",
    background: "light-4"
  }, rest));
};

var connection = function connection(fromTarget, toTarget) {
  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      color = _ref2.color,
      rest = _objectWithoutProperties(_ref2, ["color"]);

  return _objectSpread({
    fromTarget: fromTarget,
    toTarget: toTarget,
    color: color || 'accent-1',
    thickness: 'xsmall',
    round: true,
    type: 'rectilinear'
  }, rest);
};

var themes = {
  dark: _themes.dark,
  grommet: _themes.grommet,
  hpe: _grommetThemeHpe.hpe,
  aruba: _grommetThemeAruba.aruba,
  hp: _grommetThemeHp.hp,
  dxc: _grommetThemeDxc.dxc,
  v1: _grommetThemeV.v1
};

var Components =
/*#__PURE__*/
function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Components);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Components)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      baseSize: 24,
      checkBox: true,
      radioButton: true,
      rangeSelector: [1, 2],
      themeName: 'grommet'
    });

    return _this;
  }

  _createClass(Components, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          baseSize = _this$state.baseSize,
          checkBox = _this$state.checkBox,
          radioButton = _this$state.radioButton,
          rangeSelector = _this$state.rangeSelector,
          tabIndex = _this$state.tabIndex,
          themeName = _this$state.themeName;
      var theme = (0, _utils.deepMerge)((0, _base.generate)(baseSize), themes[themeName]);
      var content = [_react.default.createElement(_grommet.Box, {
        key: "type",
        align: "start"
      }, _react.default.createElement(_grommet.Heading, {
        margin: {
          top: 'none'
        }
      }, "Heading"), _react.default.createElement(_grommet.Paragraph, null, "Paragraph"), _react.default.createElement(_grommet.Text, null, "Text"), _react.default.createElement(_grommet.Anchor, {
        href: ""
      }, "Anchor"), _react.default.createElement(_grommet.Menu, {
        label: "Menu",
        items: [{
          label: 'One',
          onClick: function onClick() {}
        }, {
          label: 'Two'
        }]
      }), _react.default.createElement(_grommet.Button, {
        label: "Button",
        onClick: function onClick() {}
      })), _react.default.createElement(_grommet.Box, {
        key: "input",
        gap: "small"
      }, _react.default.createElement(_grommet.Select, {
        placeholder: "Select",
        options: ['One', 'Two'],
        onChange: function onChange() {}
      }), _react.default.createElement(_grommet.CheckBox, {
        name: "check",
        checked: checkBox,
        label: "CheckBox",
        onChange: function onChange(event) {
          return _this2.setState({
            checkBox: event.target.checked
          });
        }
      }), _react.default.createElement(_grommet.CheckBox, {
        name: "toggle",
        toggle: true,
        checked: checkBox,
        label: "CheckBox toggle",
        onChange: function onChange(event) {
          return _this2.setState({
            checkBox: event.target.checked
          });
        }
      }), _react.default.createElement(_grommet.RadioButton, {
        name: "radio",
        checked: radioButton,
        label: "RadioButton",
        onChange: function onChange(event) {
          return _this2.setState({
            radioButton: event.target.checked
          });
        }
      }), _react.default.createElement(_grommet.TextInput, {
        placeholder: "TextInput"
      }), _react.default.createElement(_grommet.TextArea, {
        placeholder: "TextArea"
      }), _react.default.createElement(_grommet.RangeInput, {
        value: 24,
        onChange: function onChange() {}
      }), _react.default.createElement(_grommet.Stack, null, _react.default.createElement(_grommet.Box, {
        direction: "row",
        justify: "between"
      }, [0, 1, 2, 3].map(function (value) {
        return _react.default.createElement(_grommet.Box, {
          key: value,
          pad: "small"
        }, _react.default.createElement(_grommet.Text, {
          style: {
            fontFamily: 'monospace'
          }
        }, value));
      })), _react.default.createElement(_grommet.RangeSelector, {
        direction: "horizontal",
        invert: false,
        min: 0,
        max: 3,
        size: "full",
        round: "small",
        values: rangeSelector,
        onChange: function onChange(values) {
          return _this2.setState({
            rangeSelector: values
          });
        }
      })), _react.default.createElement(_grommet.FormField, {
        label: "FormField"
      }, _react.default.createElement(_grommet.TextInput, {
        placeholder: "TextInput"
      }))), _react.default.createElement(_grommet.Box, {
        key: "time",
        gap: "medium"
      }, _react.default.createElement(_grommet.Calendar, {
        size: "small"
      }), _react.default.createElement(_grommet.Clock, {
        type: "digital"
      }), _react.default.createElement(_grommet.Clock, null)), _react.default.createElement(_grommet.Box, {
        key: "measure",
        gap: "medium"
      }, _react.default.createElement(_grommet.Chart, {
        type: "bar",
        round: true,
        size: "small",
        values: [{
          value: [10, 20]
        }, {
          value: [20, 30]
        }, {
          value: [30, 15]
        }]
      }), _react.default.createElement(_grommet.Meter, {
        type: "bar",
        round: true,
        size: "small",
        background: "light-3",
        values: [{
          value: 30
        }]
      })), _react.default.createElement(_grommet.Box, {
        key: "visualize",
        gap: "small"
      }, _react.default.createElement(_grommet.Distribution, {
        basis: "small",
        values: [{
          value: 50,
          color: 'light-3'
        }, {
          value: 30,
          color: 'accent-1'
        }, {
          value: 20,
          color: 'light-4'
        }, {
          value: 10,
          color: 'light-3'
        }, {
          value: 5,
          color: 'light-4'
        }]
      }, function (value) {
        return _react.default.createElement(_grommet.Box, {
          pad: "xsmall",
          background: value.color,
          fill: true
        }, _react.default.createElement(_grommet.Text, {
          size: "large"
        }, value.value));
      }), _react.default.createElement(_grommet.Stack, null, _react.default.createElement(_grommet.Box, null, _react.default.createElement(_grommet.Box, {
        direction: "row"
      }, [1, 2].map(function (id) {
        return _react.default.createElement(Node, {
          key: id,
          id: id
        });
      })), _react.default.createElement(_grommet.Box, {
        direction: "row"
      }, [3, 4].map(function (id) {
        return _react.default.createElement(Node, {
          key: id,
          id: id
        });
      }))), _react.default.createElement(_grommet.Diagram, {
        connections: [connection('1', '4')]
      }))), _react.default.createElement(_grommet.Box, {
        key: "dataTable",
        alignSelf: "start"
      }, _react.default.createElement(_grommet.DataTable, {
        columns: [{
          property: 'name',
          header: 'Name'
        }, {
          property: 'color',
          header: 'Color'
        }],
        data: [{
          name: 'Alan',
          color: 'blue'
        }, {
          name: 'Chris',
          color: 'purple'
        }, {
          name: 'Eric',
          color: 'orange'
        }],
        sortable: true
      })), _react.default.createElement(_grommet.Box, {
        key: "accordion"
      }, _react.default.createElement(_grommet.Accordion, null, _react.default.createElement(_grommet.AccordionPanel, {
        label: "Accordion Panel 1"
      }, _react.default.createElement(_grommet.Box, {
        pad: "small"
      }, _react.default.createElement(_grommet.Text, null, "Accordion panel 1 content"))), _react.default.createElement(_grommet.AccordionPanel, {
        label: "Accordion Panel 2"
      }, _react.default.createElement(_grommet.Box, {
        pad: "small"
      }, _react.default.createElement(_grommet.Text, null, "Accordion panel 2 content"))))), _react.default.createElement(_grommet.Box, {
        key: "tabs"
      }, _react.default.createElement(_grommet.Tabs, {
        activeIndex: tabIndex,
        onActive: function onActive(index) {
          return _this2.setState({
            tabIndex: index
          });
        }
      }, _react.default.createElement(_grommet.Tab, {
        title: "Tab 1"
      }, _react.default.createElement(_grommet.Box, {
        pad: "small"
      }, _react.default.createElement(_grommet.Text, null, "Tab 1 content"))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 2"
      }, _react.default.createElement(_grommet.Box, {
        pad: "small"
      }, _react.default.createElement(_grommet.Text, null, "Tab 2 content"))))), _react.default.createElement(_grommet.Box, {
        key: "video",
        alignSelf: "start"
      }, _react.default.createElement(_grommet.Video, null, _react.default.createElement("source", {
        src: "http://techslides.com/demos/sample-videos/small.webm",
        type: "video/webm"
      }), _react.default.createElement("source", {
        src: "http://techslides.com/demos/sample-videos/small.ogv",
        type: "video/ogg"
      }), _react.default.createElement("source", {
        src: "http://techslides.com/demos/sample-videos/small.mp4",
        type: "video/mp4"
      }), _react.default.createElement("source", {
        src: "http://techslides.com/demos/sample-videos/small.3gp",
        type: "video/3gp"
      })))];
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        direction: "row-responsive",
        gap: "medium",
        justify: "end",
        align: "center",
        margin: "small"
      }, _react.default.createElement(_grommet.Box, {
        basis: "small"
      }, _react.default.createElement(_grommet.Select, {
        plain: true,
        size: "small",
        options: ['grommet', 'dark', 'hpe', 'aruba', 'hp', 'dxc', 'v1'],
        value: themeName,
        onChange: function onChange(event) {
          return _this2.setState({
            themeName: event.option
          });
        }
      })), _react.default.createElement(_grommet.Box, {
        basis: "small"
      }, _react.default.createElement(_grommet.RangeInput, {
        min: 16,
        max: 36,
        step: 2,
        value: baseSize,
        onChange: function onChange(event) {
          return _this2.setState({
            baseSize: parseInt(event.target.value, 10)
          });
        }
      })), _react.default.createElement(_grommet.Text, {
        size: "small"
      }, "".concat(baseSize, "px base spacing")))), _react.default.createElement(_grommet.Grommet, {
        theme: theme
      }, _react.default.createElement(_grommet.Box, {
        pad: "medium",
        background: theme.global.colors.background || theme.global.colors.white,
        overflow: "auto"
      }, _grommet.Grid.available ? _react.default.createElement(_grommet.Grid, {
        columns: "small",
        gap: "medium"
      }, content) : _react.default.createElement(_grommet.Box, {
        direction: "row",
        wrap: true,
        align: "start",
        gap: "large"
      }, content))));
    }
  }]);

  return Components;
}(_react.Component);

(0, _react2.storiesOf)('Components', module).add('All', function () {
  return _react.default.createElement(Components, null);
});