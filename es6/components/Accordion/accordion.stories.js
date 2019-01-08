"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _Bookmark = require("grommet-icons/es6/icons/Bookmark");

var _CircleInformation = require("grommet-icons/es6/icons/CircleInformation");

var _FormSubtract = require("grommet-icons/es6/icons/FormSubtract");

var _FormAdd = require("grommet-icons/es6/icons/FormAdd");

var _User = require("grommet-icons/es6/icons/User");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var richAccordionTheme = {
  accordion: {
    icons: {
      collapse: _FormSubtract.FormSubtract,
      expand: _FormAdd.FormAdd
    }
  }
};

var SimpleAccordion = function SimpleAccordion(props) {
  var animate = props.animate,
      multiple = props.multiple,
      rest = _objectWithoutProperties(props, ["animate", "multiple"]);

  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Box, rest, _react.default.createElement(_grommet.Accordion, {
    animate: animate,
    multiple: multiple
  }, _react.default.createElement(_grommet.AccordionPanel, {
    label: "Panel 1"
  }, _react.default.createElement(_grommet.Box, {
    background: "light-2",
    style: {
      height: '800px'
    }
  }, "Panel 1 contents")), _react.default.createElement(_grommet.AccordionPanel, {
    label: "Panel 2"
  }, _react.default.createElement(_grommet.Box, {
    background: "light-2",
    style: {
      height: '50px'
    }
  }, "Panel 2 contents")), _react.default.createElement(_grommet.AccordionPanel, {
    label: "Panel 3"
  }, _react.default.createElement(_grommet.Box, {
    background: "light-2",
    style: {
      height: '300px'
    }
  }, "Panel 3 contents")))));
};

var RichPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(RichPanel, _Component);

  function RichPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RichPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RichPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      hovering: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderPanelTitle", function () {
      /* eslint-disable-next-line react/prop-types */
      var _this$props = _this.props,
          icon = _this$props.icon,
          label = _this$props.label;
      var hovering = _this.state.hovering;
      return _react.default.createElement(_grommet.Box, {
        direction: "row",
        align: "center",
        gap: "small",
        pad: {
          horizontal: 'small'
        }
      }, icon, _react.default.createElement(_grommet.Heading, {
        level: 4,
        color: hovering ? 'dark-1' : 'dark-3'
      }, label));
    });

    return _this;
  }

  _createClass(RichPanel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      /* eslint-disable-next-line react/prop-types */
      var children = this.props.children;
      return _react.default.createElement(_grommet.AccordionPanel, {
        label: this.renderPanelTitle(),
        onMouseOver: function onMouseOver() {
          return _this2.setState({
            hovering: true
          });
        },
        onMouseOut: function onMouseOut() {
          return _this2.setState({
            hovering: false
          });
        },
        onFocus: function onFocus() {
          return _this2.setState({
            hovering: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            hovering: false
          });
        }
      }, children);
    }
  }]);

  return RichPanel;
}(_react.Component);

var spinning = _react.default.createElement("svg", {
  version: "1.1",
  viewBox: "0 0 32 32",
  width: "32px",
  height: "32px",
  fill: "#333333"
}, _react.default.createElement("path", {
  opacity: ".25",
  d: "M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"
}), _react.default.createElement("path", {
  d: "M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
}, _react.default.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 16 16",
  to: "360 16 16",
  dur: "0.8s",
  repeatCount: "indefinite"
})));

var loading = _react.default.createElement(_grommet.Box, {
  align: "center",
  justify: "center",
  style: {
    height: '100px'
  }
}, spinning);

var RichAccordion =
/*#__PURE__*/
function (_Component2) {
  _inherits(RichAccordion, _Component2);

  function RichAccordion() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, RichAccordion);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(RichAccordion)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      highlightLoaded: false
    });

    return _this3;
  }

  _createClass(RichAccordion, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var highlightLoaded = this.state.highlightLoaded;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        direction: "row"
      }, _react.default.createElement(_grommet.Box, {
        basis: "medium",
        border: "all"
      }, _react.default.createElement(_grommet.Box, {
        flex: false,
        border: "bottom",
        background: "light-2",
        as: "header",
        pad: {
          horizontal: 'small'
        }
      }, _react.default.createElement(_grommet.Heading, {
        level: 3
      }, _react.default.createElement("strong", null, "About #announcements"))), _react.default.createElement(_grommet.ThemeContext.Extend, {
        value: richAccordionTheme
      }, _react.default.createElement(_grommet.Accordion, {
        multiple: true,
        onActive: function onActive(activeIndexes) {
          if (activeIndexes.includes(1)) {
            // give sometime to emulate an async call
            setTimeout(function () {
              _this4.setState({
                highlightLoaded: true
              });
            }, 1000);
          }
        }
      }, _react.default.createElement(RichPanel, {
        icon: _react.default.createElement(_CircleInformation.CircleInformation, null),
        label: "Channel Details"
      }, _react.default.createElement(_grommet.Box, {
        pad: {
          bottom: 'medium',
          horizontal: 'small',
          top: 'small'
        },
        gap: "medium"
      }, _react.default.createElement(_grommet.Box, {
        gap: "xsmall"
      }, _react.default.createElement(_grommet.Text, {
        color: "dark-3"
      }, _react.default.createElement("strong", null, "Purpose")), _react.default.createElement(_grommet.Text, null, "Used for general announcements like new releases, trainings...")), _react.default.createElement(_grommet.Box, {
        gap: "xsmall"
      }, _react.default.createElement(_grommet.Text, {
        color: "dark-3"
      }, _react.default.createElement("strong", null, "Created")), _react.default.createElement(_grommet.Text, null, "Created by Bryan Jacquot on January 19, 2016")))), _react.default.createElement(RichPanel, {
        icon: _react.default.createElement(_Bookmark.Bookmark, {
          color: "accent-1"
        }),
        label: "Highlights"
      }, highlightLoaded ? _react.default.createElement(_grommet.Box, {
        pad: {
          bottom: 'medium',
          horizontal: 'small',
          top: 'small'
        },
        gap: "medium",
        overflow: "auto",
        style: {
          maxHeight: '400px'
        }
      }, _react.default.createElement(_grommet.Text, {
        color: "dark-3"
      }, "Below is the top message in", _react.default.createElement("strong", null, "#announcements"), "."), _react.default.createElement(_grommet.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), _react.default.createElement(_grommet.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), _react.default.createElement(_grommet.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), _react.default.createElement(_grommet.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), _react.default.createElement(_grommet.Text, null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")) : loading), _react.default.createElement(RichPanel, {
        icon: _react.default.createElement(_User.User, {
          color: "accent-2"
        }),
        label: "2,000 members"
      }, _react.default.createElement(_grommet.Box, {
        pad: {
          bottom: 'medium',
          horizontal: 'small',
          top: 'small'
        },
        gap: "medium"
      }, "Yeah believe me, this channel has 2,000 members.")))))));
    }
  }]);

  return RichAccordion;
}(_react.Component);

var renderPanelHeader = function renderPanelHeader(title, active) {
  return _react.default.createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    pad: "medium",
    gap: "small"
  }, _react.default.createElement("strong", null, _react.default.createElement(_grommet.Text, null, title)), _react.default.createElement(_grommet.Text, {
    color: "brand"
  }, active ? '-' : '+'));
};

var CustomHeaderAccordion =
/*#__PURE__*/
function (_Component3) {
  _inherits(CustomHeaderAccordion, _Component3);

  function CustomHeaderAccordion() {
    var _getPrototypeOf4;

    var _this5;

    _classCallCheck(this, CustomHeaderAccordion);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(CustomHeaderAccordion)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "state", {
      activeIndex: [0]
    });

    return _this5;
  }

  _createClass(CustomHeaderAccordion, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var activeIndex = this.state.activeIndex;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Accordion, {
        activeIndex: activeIndex,
        onActive: function onActive(newActiveIndex) {
          return _this6.setState({
            activeIndex: newActiveIndex
          });
        }
      }, _react.default.createElement(_grommet.AccordionPanel, {
        header: renderPanelHeader('Panel 1', activeIndex.includes(0))
      }, _react.default.createElement(_grommet.Box, {
        pad: "medium",
        background: "light-2",
        style: {
          height: '800px'
        }
      }, _react.default.createElement(_grommet.Text, null, "Panel 1 contents"), _react.default.createElement(_grommet.TextInput, null))), _react.default.createElement(_grommet.AccordionPanel, {
        header: renderPanelHeader('Panel 2', activeIndex.includes(1))
      }, _react.default.createElement(_grommet.Box, {
        pad: "medium",
        background: "light-2",
        style: {
          height: '50px'
        }
      }, _react.default.createElement(_grommet.Text, null, "Panel 2 contents"))), _react.default.createElement(_grommet.AccordionPanel, {
        header: renderPanelHeader('Panel 3', activeIndex.includes(2))
      }, _react.default.createElement(_grommet.Box, {
        pad: "medium",
        background: "light-2",
        style: {
          height: '300px'
        }
      }, _react.default.createElement(_grommet.Text, null, "Panel 3 contents")))));
    }
  }]);

  return CustomHeaderAccordion;
}(_react.Component);

(0, _react2.storiesOf)('Accordion', module).add('Simple', function () {
  return _react.default.createElement(SimpleAccordion, null);
}).add('Dark no animation', function () {
  return _react.default.createElement(SimpleAccordion, {
    animate: false,
    background: "dark-2"
  });
}).add('Multiple', function () {
  return _react.default.createElement(SimpleAccordion, {
    multiple: true
  });
}).add('Rich', function () {
  return _react.default.createElement(RichAccordion, null);
}).add('Custom Header', function () {
  return _react.default.createElement(CustomHeaderAccordion, null);
});