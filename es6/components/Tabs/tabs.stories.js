"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _styledComponents = require("styled-components");

var _Attraction = require("grommet-icons/es6/icons/Attraction");

var _Car = require("grommet-icons/es6/icons/Car");

var _CircleInformation = require("grommet-icons/es6/icons/CircleInformation");

var _Currency = require("grommet-icons/es6/icons/Currency");

var _TreeOption = require("grommet-icons/es6/icons/TreeOption");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var UncontrolledTabs = function UncontrolledTabs(_ref) {
  var plain = _ref.plain;
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet,
    full: true
  }, _react.default.createElement(_grommet.Box, {
    fill: true
  }, _react.default.createElement(_grommet.Tabs, {
    flex: true
  }, _react.default.createElement(_grommet.Tab, {
    plain: plain,
    title: "Tab 1"
  }, _react.default.createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-1"
  }, _react.default.createElement(_Attraction.Attraction, {
    size: "xlarge"
  }))), _react.default.createElement(_grommet.Tab, {
    plain: plain,
    title: "Tab 2"
  }, _react.default.createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-2"
  }, _react.default.createElement(_TreeOption.TreeOption, {
    size: "xlarge"
  }))), _react.default.createElement(_grommet.Tab, {
    plain: plain,
    title: "Tab 3"
  }, _react.default.createElement(_grommet.Box, {
    fill: true,
    pad: "large",
    align: "center",
    background: "accent-3"
  }, _react.default.createElement(_Car.Car, {
    size: "xlarge"
  }))))));
};

UncontrolledTabs.defaultProps = {
  plain: false
};
UncontrolledTabs.propTypes = {
  plain: _propTypes.default.bool
};

var ControlledTabs =
/*#__PURE__*/
function (_Component) {
  _inherits(ControlledTabs, _Component);

  function ControlledTabs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ControlledTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onActive", function (index) {
      return _this.setState({
        index: index
      });
    });

    return _this;
  }

  _createClass(ControlledTabs, [{
    key: "render",
    value: function render() {
      var index = this.state.index;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Tabs, {
        activeIndex: index,
        onActive: this.onActive
      }, _react.default.createElement(_grommet.Tab, {
        title: "Tab 1"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 2"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 3"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      })))));
    }
  }]);

  return ControlledTabs;
}(_react.Component);

var ResponsiveTabs =
/*#__PURE__*/
function (_Component2) {
  _inherits(ResponsiveTabs, _Component2);

  function ResponsiveTabs() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, ResponsiveTabs);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ResponsiveTabs)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onActive", function (index) {
      return _this2.setState({
        index: index
      });
    });

    return _this2;
  }

  _createClass(ResponsiveTabs, [{
    key: "render",
    value: function render() {
      var index = this.state.index;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Tabs, {
        activeIndex: index,
        onActive: this.onActive
      }, _react.default.createElement(_grommet.Tab, {
        title: "Tab 1"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 2"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 3"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 4"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 5"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 6"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 7"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 8"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 9"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 10"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 11"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 12"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 13"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 14"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 15"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 16"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 17"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 18"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-2"
      }, _react.default.createElement(_TreeOption.TreeOption, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 19"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-3"
      }, _react.default.createElement(_Car.Car, {
        size: "xlarge"
      }))), _react.default.createElement(_grommet.Tab, {
        title: "Tab 20"
      }, _react.default.createElement(_grommet.Box, {
        margin: "small",
        pad: "large",
        align: "center",
        background: "accent-1"
      }, _react.default.createElement(_Attraction.Attraction, {
        size: "xlarge"
      })))));
    }
  }]);

  return ResponsiveTabs;
}(_react.Component);

var RichTabTitle = function RichTabTitle(_ref2) {
  var icon = _ref2.icon,
      label = _ref2.label;
  return _react.default.createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    gap: "xsmall",
    margin: "xsmall"
  }, icon, _react.default.createElement(_grommet.Text, {
    size: "small"
  }, _react.default.createElement("strong", null, label)));
};

RichTabTitle.propTypes = {
  icon: _propTypes.default.node.isRequired,
  label: _propTypes.default.string.isRequired
};

var RichTabs = function RichTabs() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Tabs, null, _react.default.createElement(_grommet.Tab, {
    title: _react.default.createElement(RichTabTitle, {
      icon: _react.default.createElement(_CircleInformation.CircleInformation, {
        color: "accent-2"
      }),
      label: "Personal Data"
    })
  }, _react.default.createElement(_grommet.FormField, {
    label: "Name"
  }, _react.default.createElement(_grommet.TextInput, {
    placeholder: "Enter your name..."
  }))), _react.default.createElement(_grommet.Tab, {
    title: _react.default.createElement(RichTabTitle, {
      icon: _react.default.createElement(_Currency.Currency, {
        color: "neutral-2"
      }),
      label: "Payment"
    })
  }, _react.default.createElement(_grommet.FormField, {
    label: "Card Number"
  }, _react.default.createElement(_grommet.TextInput, {
    placeholder: "Enter your card number..."
  })))));
};

var customTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    elevation: {
      light: {
        small: '0px 1px 5px rgba(0, 0, 0, 0.50)',
        medium: '0px 3px 8px rgba(0, 0, 0, 0.50)'
      }
    }
  },
  tab: {
    active: {
      background: 'dark-1'
    },
    background: 'dark-3',
    hover: {
      background: 'dark-1'
    },
    border: undefined,
    margin: undefined,
    pad: {
      bottom: undefined,
      horizontal: 'xsmall'
    },
    extend: function extend(_ref3) {
      var theme = _ref3.theme;
      return (0, _styledComponents.css)(["border-radius:", ";box-shadow:", ";"], theme.global.control.border.radius, theme.global.elevation.light.small);
    }
  },
  tabs: {
    background: 'dark-3',
    header: {
      background: 'dark-2',
      extend: function extend(_ref4) {
        var theme = _ref4.theme;
        return (0, _styledComponents.css)(["padding:", ";box-shadow:", ";"], theme.global.edgeSize.small, theme.global.elevation.light.medium);
      }
    },
    gap: 'medium'
  }
});

var CustomTabs = function CustomTabs() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: customTheme
  }, _react.default.createElement(_grommet.Tabs, null, _react.default.createElement(_grommet.Tab, {
    title: _react.default.createElement(RichTabTitle, {
      icon: _react.default.createElement(_CircleInformation.CircleInformation, {
        color: "accent-1"
      }),
      label: "Personal Data"
    })
  }, _react.default.createElement(_grommet.FormField, {
    label: "Name"
  }, _react.default.createElement(_grommet.TextInput, {
    placeholder: "Enter your name..."
  }))), _react.default.createElement(_grommet.Tab, {
    title: _react.default.createElement(RichTabTitle, {
      icon: _react.default.createElement(_Currency.Currency, {
        color: "light-3"
      }),
      label: "Payment"
    })
  }, _react.default.createElement(_grommet.FormField, {
    label: "Card Number"
  }, _react.default.createElement(_grommet.TextInput, {
    placeholder: "Enter your card number..."
  })))));
};

var ScrollableTabs = function ScrollableTabs() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet,
    full: true
  }, _react.default.createElement(_grommet.Box, {
    fill: true
  }, _react.default.createElement(_grommet.Tabs, {
    flex: true
  }, _react.default.createElement(_grommet.Tab, {
    title: "Tab 1"
  }, _react.default.createElement(_grommet.Box, {
    fill: true,
    overflow: "auto",
    pad: "xlarge",
    align: "center",
    background: "accent-1"
  }, _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"), _react.default.createElement(_grommet.Heading, null, "hello!"))), _react.default.createElement(_grommet.Tab, {
    title: "Tab 2"
  }, _react.default.createElement(_grommet.Box, {
    margin: "small",
    pad: "large",
    align: "center",
    background: "accent-2"
  }, _react.default.createElement(_TreeOption.TreeOption, {
    size: "xlarge"
  }))))));
};

(0, _react2.storiesOf)('Tabs', module).add('Uncontrolled Tabs', function () {
  return _react.default.createElement(UncontrolledTabs, null);
}).add('Controlled Tabs', function () {
  return _react.default.createElement(ControlledTabs, null);
}).add('Responsive Tabs', function () {
  return _react.default.createElement(ResponsiveTabs, null);
}).add('Rich Tabs', function () {
  return _react.default.createElement(RichTabs, null);
}).add('CustomTheme', function () {
  return _react.default.createElement(CustomTabs, null);
}).add('Scrollable Tabs', function () {
  return _react.default.createElement(ScrollableTabs, null);
}).add('Plain', function () {
  return _react.default.createElement(UncontrolledTabs, {
    plain: true
  });
});