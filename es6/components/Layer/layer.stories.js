"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _Add = require("grommet-icons/es6/icons/Add");

var _Close = require("grommet-icons/es6/icons/Close");

var _FormClose = require("grommet-icons/es6/icons/FormClose");

var _StatusGood = require("grommet-icons/es6/icons/StatusGood");

var _Trash = require("grommet-icons/es6/icons/Trash");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var CenterLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(CenterLayer, _Component);

  function CenterLayer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CenterLayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CenterLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpen", function () {
      return _this.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function () {
      return _this.setState({
        open: undefined
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onOpen2", function () {
      return _this.setState({
        open2: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose2", function () {
      return _this.setState({
        open2: undefined
      });
    });

    return _this;
  }

  _createClass(CenterLayer, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          open = _this$state.open,
          open2 = _this$state.open2;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        icon: _react.default.createElement(_Trash.Trash, null),
        label: _react.default.createElement(_grommet.Text, null, _react.default.createElement("strong", null, "Remove")),
        onClick: this.onOpen,
        plain: true
      })), open && _react.default.createElement(_grommet.Layer, {
        position: "center",
        modal: true,
        onClickOutside: this.onClose,
        onEsc: this.onClose
      }, _react.default.createElement(_grommet.Box, {
        pad: "medium",
        gap: "small",
        width: "medium"
      }, _react.default.createElement(_grommet.Heading, {
        level: 3,
        margin: "none"
      }, "Confirm"), _react.default.createElement(_grommet.Text, null, "Are you sure you want to delete?"), _react.default.createElement(_grommet.Box, {
        as: "footer",
        gap: "small",
        direction: "row",
        align: "center",
        justify: "end",
        pad: {
          top: 'medium',
          bottom: 'small'
        }
      }, _react.default.createElement(_grommet.Button, {
        label: "Open 2",
        onClick: this.onOpen2,
        color: "dark-3"
      }), _react.default.createElement(_grommet.Button, {
        label: _react.default.createElement(_grommet.Text, {
          color: "white"
        }, _react.default.createElement("strong", null, "Delete")),
        onClick: this.onClose,
        primary: true,
        color: "status-critical"
      })))), open2 && _react.default.createElement(_grommet.Layer, {
        position: "top",
        modal: true,
        onClickOutside: this.onClose2,
        onEsc: this.onClose2
      }, _react.default.createElement(_grommet.Box, {
        pad: "medium",
        gap: "small",
        width: "medium"
      }, _react.default.createElement(_grommet.Heading, {
        level: 3,
        margin: "none"
      }, "Confirm 2"), _react.default.createElement(_grommet.Select, {
        options: ['one', 'two', 'three']
      }), _react.default.createElement(_grommet.Box, {
        as: "footer",
        gap: "small",
        direction: "row",
        align: "center",
        justify: "end",
        pad: {
          top: 'medium',
          bottom: 'small'
        }
      }, _react.default.createElement(_grommet.Button, {
        label: "Close",
        onClick: this.onClose2,
        color: "dark-3"
      })))));
    }
  }]);

  return CenterLayer;
}(_react.Component);

var CornerLayer =
/*#__PURE__*/
function (_Component2) {
  _inherits(CornerLayer, _Component2);

  function CornerLayer() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, CornerLayer);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(CornerLayer)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onOpen", function () {
      return _this2.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "onClose", function () {
      return _this2.setState({
        open: undefined
      });
    });

    return _this2;
  }

  _createClass(CornerLayer, [{
    key: "render",
    value: function render() {
      var open = this.state.open;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        icon: _react.default.createElement(_Add.Add, {
          color: "brand"
        }),
        label: _react.default.createElement(_grommet.Text, null, _react.default.createElement("strong", null, "Add Corner Layer")),
        onClick: this.onOpen,
        plain: true
      })), open && _react.default.createElement(_grommet.Layer, {
        position: "top-right"
      }, _react.default.createElement(_grommet.Box, {
        height: "small",
        overflow: "auto"
      }, _react.default.createElement(_grommet.Box, {
        pad: "xlarge"
      }, "Corner top-right position"))));
    }
  }]);

  return CornerLayer;
}(_react.Component);

var FormLayer =
/*#__PURE__*/
function (_Component3) {
  _inherits(FormLayer, _Component3);

  function FormLayer() {
    var _getPrototypeOf4;

    var _this3;

    _classCallCheck(this, FormLayer);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(FormLayer)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      open: false,
      select: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onOpen", function () {
      return _this3.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "onClose", function () {
      _this3.setState({
        open: undefined
      });
    });

    return _this3;
  }

  _createClass(FormLayer, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          open = _this$state2.open,
          select = _this$state2.select;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        icon: _react.default.createElement(_Add.Add, null),
        label: "Add",
        onClick: this.onOpen
      }), open && _react.default.createElement(_grommet.Layer, {
        position: "right",
        full: "vertical",
        modal: true,
        onClickOutside: this.onClose,
        onEsc: this.onClose
      }, _react.default.createElement(_grommet.Box, {
        as: "form",
        fill: "vertical",
        overflow: "auto",
        width: "medium",
        pad: "medium",
        onSubmit: this.onClose
      }, _react.default.createElement(_grommet.Box, {
        flex: false,
        direction: "row",
        justify: "between"
      }, _react.default.createElement(_grommet.Heading, {
        level: 2,
        margin: "none"
      }, "Add"), _react.default.createElement(_grommet.Button, {
        icon: _react.default.createElement(_Close.Close, null),
        onClick: this.onClose
      })), _react.default.createElement(_grommet.Box, {
        flex: "grow",
        overflow: "auto",
        pad: {
          vertical: 'medium'
        }
      }, _react.default.createElement(_grommet.FormField, {
        label: "First"
      }, _react.default.createElement(_grommet.TextInput, null)), _react.default.createElement(_grommet.FormField, {
        label: "Second"
      }, _react.default.createElement(_grommet.Select, {
        options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
        value: select,
        onSearch: function onSearch() {},
        onChange: function onChange(_ref) {
          var option = _ref.option;
          return _this4.setState({
            select: option
          });
        }
      })), _react.default.createElement(_grommet.FormField, {
        label: "Third"
      }, _react.default.createElement(_grommet.TextArea, null))), _react.default.createElement(_grommet.Box, {
        flex: false,
        as: "footer",
        align: "start"
      }, _react.default.createElement(_grommet.Button, {
        type: "submit",
        label: "Submit",
        onClick: this.onClose,
        primary: true
      }))))));
    }
  }]);

  return FormLayer;
}(_react.Component);

var NotificationLayer =
/*#__PURE__*/
function (_Component4) {
  _inherits(NotificationLayer, _Component4);

  function NotificationLayer() {
    var _getPrototypeOf5;

    var _this5;

    _classCallCheck(this, NotificationLayer);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(NotificationLayer)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "onOpen", function () {
      return _this5.setState({
        open: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "onClose", function () {
      return _this5.setState({
        open: undefined
      });
    });

    return _this5;
  }

  _createClass(NotificationLayer, [{
    key: "render",
    value: function render() {
      var open = this.state.open;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        icon: _react.default.createElement(_Add.Add, {
          color: "brand"
        }),
        label: _react.default.createElement(_grommet.Text, null, _react.default.createElement("strong", null, "Add")),
        onClick: this.onOpen,
        plain: true
      })), open && _react.default.createElement(_grommet.Layer, {
        position: "bottom",
        full: "horizontal",
        modal: false,
        responsive: false,
        onEsc: this.onClose
      }, _react.default.createElement(_grommet.Box, {
        align: "start",
        pad: {
          vertical: 'medium',
          horizontal: 'small'
        }
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        direction: "row",
        gap: "small",
        round: "medium",
        elevation: "medium",
        pad: {
          vertical: 'xsmall',
          horizontal: 'small'
        },
        background: "status-ok"
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        direction: "row",
        gap: "xsmall"
      }, _react.default.createElement(_StatusGood.StatusGood, null), _react.default.createElement(_grommet.Text, null, "A new virtual machine has been successfully added")), _react.default.createElement(_grommet.Button, {
        icon: _react.default.createElement(_FormClose.FormClose, null),
        onClick: this.onClose,
        plain: true
      })))));
    }
  }]);

  return NotificationLayer;
}(_react.Component);

var MarginLayer = function MarginLayer(_ref2) {
  var margin = _ref2.margin,
      rest = _objectWithoutProperties(_ref2, ["margin"]);

  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Layer, _extends({
    margin: margin || {
      left: '40px',
      top: '50px',
      right: '30px',
      bottom: '10px'
    }
  }, rest), _react.default.createElement(_grommet.Box, {
    height: "small",
    overflow: "auto"
  }, _react.default.createElement(_grommet.Box, {
    pad: "xlarge"
  }, "text"), _react.default.createElement(_grommet.Box, {
    pad: "xlarge"
  }, "text"), _react.default.createElement(_grommet.Box, {
    pad: "xlarge"
  }, "text"), _react.default.createElement(_grommet.Box, {
    pad: "xlarge"
  }, "text"), _react.default.createElement(_grommet.Box, {
    pad: "xlarge"
  }, "text"), _react.default.createElement(_grommet.Box, {
    pad: "xlarge"
  }, "text"))));
};

var PlainLayer = function PlainLayer() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet,
    full: true
  }, _react.default.createElement(_grommet.Box, {
    fill: true,
    background: "dark-3"
  }, _react.default.createElement(_grommet.Layer, {
    margin: "medium",
    plain: true
  }, _react.default.createElement(_grommet.Box, {
    pad: "large",
    border: {
      color: 'accent-1',
      size: 'large'
    }
  }, _react.default.createElement(_grommet.Text, {
    color: "accent-2"
  }, "Text")))));
};

var FullLayer =
/*#__PURE__*/
function (_Component5) {
  _inherits(FullLayer, _Component5);

  function FullLayer() {
    var _getPrototypeOf6;

    var _this6;

    _classCallCheck(this, FullLayer);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this6 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(FullLayer)).call.apply(_getPrototypeOf6, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this6)), "state", {
      showLayer: false
    });

    return _this6;
  }

  _createClass(FullLayer, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      var showLayer = this.state.showLayer;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        pad: "small",
        fill: true,
        background: "dark-3",
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        primary: true,
        color: "accent-3",
        label: "Show",
        onClick: function onClick() {
          return _this7.setState({
            showLayer: true
          });
        }
      }), showLayer && _react.default.createElement(_grommet.Layer, {
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        background: "light-4",
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        primary: true,
        label: "Close",
        onClick: function onClick() {
          return _this7.setState({
            showLayer: false
          });
        }
      })))));
    }
  }]);

  return FullLayer;
}(_react.Component);

var ScrollBodyLayer = function ScrollBodyLayer() {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Layer, {
    full: "vertical",
    position: "right"
  }, _react.default.createElement(_grommet.Box, {
    fill: true,
    style: {
      minWidth: '378px'
    }
  }, _react.default.createElement(_grommet.Box, {
    direction: "row",
    align: "center",
    as: "header",
    elevation: "small",
    justify: "between"
  }, _react.default.createElement(_grommet.Text, {
    margin: {
      left: 'small'
    }
  }, "Header"), _react.default.createElement(_grommet.Button, {
    icon: _react.default.createElement(_FormClose.FormClose, null)
  })), _react.default.createElement(_grommet.Box, {
    flex: true,
    overflow: "auto",
    pad: "xsmall"
  }, _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body"), _react.default.createElement("span", null, "body")), _react.default.createElement(_grommet.Box, {
    as: "footer",
    border: {
      side: 'top'
    },
    pad: "small",
    justify: "end",
    direction: "row",
    align: "center"
  }, _react.default.createElement(_grommet.Button, {
    primary: true,
    label: "Save"
  })))));
};

(0, _react2.storiesOf)('Layer', module).add('Center', function () {
  return _react.default.createElement(CenterLayer, null);
}).add('CornerLayer', function () {
  return _react.default.createElement(CornerLayer, null);
}).add('Form', function () {
  return _react.default.createElement(FormLayer, null);
}).add('Notification', function () {
  return _react.default.createElement(NotificationLayer, null);
}).add('Margin', function () {
  return _react.default.createElement(MarginLayer, {
    full: true
  });
}).add('Margin (Center)', function () {
  return _react.default.createElement(MarginLayer, {
    margin: "large"
  });
}).add('Margin Top (Center)', function () {
  return _react.default.createElement(MarginLayer, {
    margin: {
      top: 'large'
    },
    position: "top"
  });
}).add('Plain', function () {
  return _react.default.createElement(PlainLayer, null);
}).add('Full', function () {
  return _react.default.createElement(FullLayer, null);
}).add('Fixed Header, Scroll Body', function () {
  return _react.default.createElement(ScrollBodyLayer, null);
});