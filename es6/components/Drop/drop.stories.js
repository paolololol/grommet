"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _contexts = require("grommet/contexts");

var _styledComponents = require("styled-components");

var _utils = require("../../utils");

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

var customTheme = {
  global: {
    colors: {
      custom: '#ff00ff'
    }
  }
};

var SimpleDrop =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleDrop, _Component);

  function SimpleDrop() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SimpleDrop);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SimpleDrop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "targetRef", (0, _react.createRef)());

    return _this;
  }

  _createClass(SimpleDrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_grommet.Grommet, {
        theme: customTheme,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Box, {
        background: "dark-3",
        pad: "medium",
        align: "center",
        justify: "start",
        ref: this.targetRef
      }, "Target"), this.targetRef.current && _react.default.createElement(_grommet.Drop, {
        align: {
          top: 'bottom',
          left: 'left'
        },
        target: this.targetRef.current
      }, _react.default.createElement(_grommet.Box, {
        pad: "large"
      }, _react.default.createElement(_grommet.Text, {
        color: "custom"
      }, "Drop Contents")), _react.default.createElement(Coso, null))));
    }
  }]);

  return SimpleDrop;
}(_react.Component);

var Coso = (0, _styledComponents.withTheme)(function (props) {
  console.log(props.theme.global.colors);
  return null;
});

var OneDrop = function OneDrop(_ref) {
  var align = _ref.align,
      target = _ref.target;
  return _react.default.createElement(_grommet.Drop, {
    align: align,
    target: target,
    stretch: false
  }, _react.default.createElement(_grommet.Box, {
    pad: "small"
  }));
};

OneDrop.propTypes = {
  align: _propTypes.default.shape({}).isRequired,
  target: _propTypes.default.shape({}).isRequired
};

var Set =
/*#__PURE__*/
function (_Component2) {
  _inherits(Set, _Component2);

  function Set() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, Set);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(Set)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "targetRef", (0, _react.createRef)());

    return _this2;
  }

  _createClass(Set, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          aligns = _this$props.aligns,
          label = _this$props.label;
      return _react.default.createElement(_grommet.Box, {
        border: true,
        pad: "small"
      }, _react.default.createElement(_grommet.Text, null, label), _react.default.createElement(_grommet.Box, {
        margin: "xlarge",
        background: "dark-3",
        pad: {
          horizontal: 'large',
          vertical: 'medium'
        },
        align: "center",
        justify: "center",
        ref: this.targetRef
      }, "\xA0"), this.targetRef.current && _react.default.createElement(_react.Fragment, null, aligns.map(function (align, index) {
        return _react.default.createElement(OneDrop, {
          key: "".concat(index + 0),
          align: align,
          target: _this3.targetRef.current
        });
      })));
    }
  }]);

  return Set;
}(_react.Component);

Set.propTypes = {
  aligns: _propTypes.default.arrayOf(_propTypes.default.shape({})).isRequired,
  label: _propTypes.default.string.isRequired
};

var AllDrops =
/*#__PURE__*/
function (_Component3) {
  _inherits(AllDrops, _Component3);

  function AllDrops() {
    var _getPrototypeOf4;

    var _this4;

    _classCallCheck(this, AllDrops);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(AllDrops)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this4)), "targetRef", (0, _react.createRef)());

    return _this4;
  }

  _createClass(AllDrops, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_contexts.ThemeContext.Extend, {
        value: {
          global: {
            drop: {
              background: {
                color: 'white',
                opacity: 'medium'
              }
            }
          }
        }
      }, _react.default.createElement(_grommet.Box, {
        direction: "row",
        wrap: true,
        pad: "large",
        align: "center",
        justify: "center"
      }, _react.default.createElement(Set, {
        label: "left: left",
        aligns: [{
          top: 'top',
          left: 'left'
        }, {
          top: 'bottom',
          left: 'left'
        }, {
          bottom: 'top',
          left: 'left'
        }, {
          bottom: 'bottom',
          left: 'left'
        }]
      }), _react.default.createElement(Set, {
        label: "left: right",
        aligns: [{
          top: 'top',
          left: 'right'
        }, {
          top: 'bottom',
          left: 'right'
        }, {
          bottom: 'top',
          left: 'right'
        }, {
          bottom: 'bottom',
          left: 'right'
        }]
      }), _react.default.createElement(Set, {
        label: "(center horizontal)",
        aligns: [{
          top: 'top'
        }, {
          top: 'bottom'
        }, {
          bottom: 'top'
        }, {
          bottom: 'bottom'
        }]
      }), _react.default.createElement(Set, {
        label: "right: left",
        aligns: [{
          top: 'top',
          right: 'left'
        }, {
          top: 'bottom',
          right: 'left'
        }, {
          bottom: 'top',
          right: 'left'
        }, {
          bottom: 'bottom',
          right: 'left'
        }]
      }), _react.default.createElement(Set, {
        label: "right: right",
        aligns: [{
          top: 'top',
          right: 'right'
        }, {
          top: 'bottom',
          right: 'right'
        }, {
          bottom: 'top',
          right: 'right'
        }, {
          bottom: 'bottom',
          right: 'right'
        }]
      }), _react.default.createElement(Set, {
        label: "top: top",
        aligns: [{
          left: 'left',
          top: 'top'
        }, {
          left: 'right',
          top: 'top'
        }, {
          right: 'left',
          top: 'top'
        }, {
          right: 'right',
          top: 'top'
        }]
      }), _react.default.createElement(Set, {
        label: "top: bottom",
        aligns: [{
          left: 'left',
          top: 'bottom'
        }, {
          left: 'right',
          top: 'bottom'
        }, {
          right: 'left',
          top: 'bottom'
        }, {
          right: 'right',
          top: 'bottom'
        }]
      }), _react.default.createElement(Set, {
        label: "(center vertical)",
        aligns: [{
          left: 'left'
        }, {
          left: 'right'
        }, {
          right: 'left'
        }, {
          right: 'right'
        }]
      }), _react.default.createElement(Set, {
        label: "bottom: top",
        aligns: [{
          left: 'left',
          bottom: 'top'
        }, {
          left: 'right',
          bottom: 'top'
        }, {
          right: 'left',
          bottom: 'top'
        }, {
          right: 'right',
          bottom: 'top'
        }]
      }), _react.default.createElement(Set, {
        label: "bottom: bottom",
        aligns: [{
          left: 'left',
          bottom: 'bottom'
        }, {
          left: 'right',
          bottom: 'bottom'
        }, {
          right: 'left',
          bottom: 'bottom'
        }, {
          right: 'right',
          bottom: 'bottom'
        }]
      }), _react.default.createElement(Set, {
        label: "(center vertical and horizontal)",
        aligns: [{}]
      }))));
    }
  }]);

  return AllDrops;
}(_react.Component);

var ProgressiveDrop =
/*#__PURE__*/
function (_Component4) {
  _inherits(ProgressiveDrop, _Component4);

  function ProgressiveDrop() {
    var _getPrototypeOf5;

    var _this5;

    _classCallCheck(this, ProgressiveDrop);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(ProgressiveDrop)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "boxRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "state", {
      openDrop: false,
      openInnerDrop: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "onCloseDrop", function () {
      return _this5.setState({
        openDrop: false,
        openInnerDrop: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "onOpenDrop", function () {
      return _this5.setState({
        openDrop: true,
        openInnerDrop: false
      });
    });

    return _this5;
  }

  _createClass(ProgressiveDrop, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state = this.state,
          openDrop = _this$state.openDrop,
          openInnerDrop = _this$state.openInnerDrop;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Button, {
        ref: this.boxRef,
        primary: true,
        label: "Click me",
        onClick: this.onOpenDrop
      }), openDrop && _react.default.createElement(_grommet.Drop, {
        target: this.boxRef.current,
        onClickOutside: this.onCloseDrop,
        onEsc: this.onCloseDrop
      }, !openInnerDrop && _react.default.createElement(_grommet.Box, {
        pad: "large"
      }, _react.default.createElement(_grommet.Button, {
        primary: true,
        label: "Click me again",
        onClick: function onClick() {
          return _this6.setState({
            openInnerDrop: true
          });
        }
      })), openInnerDrop && _react.default.createElement(_grommet.Box, {
        pad: "large"
      }, "You can click outside now"))));
    }
  }]);

  return ProgressiveDrop;
}(_react.Component);

var lazyTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    drop: {
      background: 'rgba(255, 255, 255, 0.7)'
    }
  }
});
var finalLazyPad = 'xlarge';

var LazyDrop =
/*#__PURE__*/
function (_Component5) {
  _inherits(LazyDrop, _Component5);

  function LazyDrop() {
    var _getPrototypeOf6;

    var _this7;

    _classCallCheck(this, LazyDrop);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this7 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(LazyDrop)).call.apply(_getPrototypeOf6, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "state", {
      pad: 'small'
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "topLeftTargetRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "topRightTargetRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "bottomLeftTargetRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "bottomRightTargetRef", (0, _react.createRef)());

    return _this7;
  }

  _createClass(LazyDrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this8 = this;

      this.forceUpdate();
      setTimeout(function () {
        return _this8.setState({
          pad: finalLazyPad
        });
      }, 2000);
    }
  }, {
    key: "render",
    value: function render() {
      var pad = this.state.pad;
      return _react.default.createElement(_grommet.Grommet, {
        theme: lazyTheme,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        justify: "between",
        pad: "large",
        gap: "small"
      }, _react.default.createElement(_grommet.Box, {
        direction: "row",
        justify: "between",
        pad: {
          horizontal: 'small'
        }
      }, _react.default.createElement(_grommet.Box, {
        background: "dark-3",
        pad: "medium",
        align: "center",
        ref: this.topLeftTargetRef
      }, "Target"), this.topLeftTargetRef.current && _react.default.createElement(_grommet.Drop, {
        align: {
          top: 'bottom',
          left: 'left'
        },
        target: this.topLeftTargetRef.current,
        responsive: true
      }, _react.default.createElement(_grommet.Box, {
        height: pad === 'small' ? 'xsmall' : undefined,
        pad: {
          horizontal: 'xlarge',
          vertical: pad
        }
      }, "align top to bottom")), _react.default.createElement(_grommet.Box, {
        background: "dark-3",
        pad: "medium",
        align: "center",
        ref: this.topRightTargetRef
      }, "Target"), this.topRightTargetRef.current && _react.default.createElement(_grommet.Drop, {
        align: {
          bottom: 'top',
          right: 'right'
        },
        target: this.topRightTargetRef.current,
        responsive: true
      }, _react.default.createElement(_grommet.Box, {
        height: pad === 'small' ? 'xsmall' : undefined,
        pad: {
          horizontal: 'xlarge',
          vertical: pad
        }
      }, "align bottom to top"))), _react.default.createElement(_grommet.Box, {
        direction: "row",
        justify: "between"
      }, _react.default.createElement(_grommet.Box, {
        background: "dark-3",
        pad: "medium",
        ref: this.bottomLeftTargetRef
      }, "Target"), this.bottomLeftTargetRef.current && _react.default.createElement(_grommet.Drop, {
        align: {
          bottom: 'top',
          left: 'left'
        },
        target: this.bottomLeftTargetRef.current,
        responsive: true
      }, _react.default.createElement(_grommet.Box, {
        height: pad === 'small' ? 'xsmall' : undefined,
        pad: {
          horizontal: 'xlarge',
          vertical: pad
        }
      }, "align bottom to top")), _react.default.createElement(_grommet.Box, {
        background: "dark-3",
        pad: "medium",
        ref: this.bottomRightTargetRef
      }, "Target"), this.bottomRightTargetRef.current && _react.default.createElement(_grommet.Drop, {
        align: {
          top: 'bottom',
          right: 'right'
        },
        target: this.bottomRightTargetRef.current,
        responsive: true
      }, _react.default.createElement(_grommet.Box, {
        height: pad === 'small' ? 'xsmall' : undefined,
        pad: {
          horizontal: 'xlarge',
          vertical: pad
        }
      }, "align top to bottom")))));
    }
  }]);

  return LazyDrop;
}(_react.Component);

var PlainDrop =
/*#__PURE__*/
function (_Component6) {
  _inherits(PlainDrop, _Component6);

  function PlainDrop() {
    var _getPrototypeOf7;

    var _this9;

    _classCallCheck(this, PlainDrop);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this9 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(PlainDrop)).call.apply(_getPrototypeOf7, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this9)), "targetRef", (0, _react.createRef)());

    return _this9;
  }

  _createClass(PlainDrop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet,
        full: true
      }, _react.default.createElement(_grommet.Box, {
        background: "brand",
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Box, {
        background: "dark-3",
        pad: "medium",
        align: "center",
        justify: "start",
        ref: this.targetRef
      }, "Target"), this.targetRef.current && _react.default.createElement(_grommet.Drop, {
        plain: true,
        align: {
          top: 'bottom',
          left: 'left'
        },
        target: this.targetRef.current
      }, _react.default.createElement(_grommet.Box, {
        pad: "large"
      }, "No background no shadow"))));
    }
  }]);

  return PlainDrop;
}(_react.Component);

(0, _react2.storiesOf)('Drop', module).add('Simple', function () {
  return _react.default.createElement(SimpleDrop, null);
}).add('All not stretch', function () {
  return _react.default.createElement(AllDrops, null);
}).add('Progressive', function () {
  return _react.default.createElement(ProgressiveDrop, null);
}).add('Lazy', function () {
  return _react.default.createElement(LazyDrop, null);
}).add('Plain', function () {
  return _react.default.createElement(PlainDrop, null);
});