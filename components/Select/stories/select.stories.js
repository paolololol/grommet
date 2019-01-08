"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react2 = require("@storybook/react");

var _grommetIcons = require("grommet-icons");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

var _utils = require("grommet/utils");

var _theme = require("./theme");

var _SearchInputContext = require("./components/SearchInputContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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

var customRoundedTheme = (0, _utils.deepMerge)(_themes.grommet, {
  global: {
    control: {
      border: {
        radius: '24px'
      }
    },
    input: {
      weight: 400
    },
    font: {
      size: '12px'
    }
  },
  button: {
    extend: function extend(props) {
      console.log(props);
      if (props.menuItem) return "color: pink;";
    }
  },
  text: {
    medium: '13px'
  },
  textInput: {
    extend: 'padding: 0 12px;'
  },
  select: {
    control: {
      extend: 'padding: 3px 6px;'
    }
  }
});

var SimpleSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleSelect, _Component);

  function SimpleSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SimpleSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SimpleSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      options: ['one', 'two'],
      value: ''
    });

    return _this;
  }

  _createClass(SimpleSelect, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var theme = this.props.theme;
      var _this$state = this.state,
          options = _this$state.options,
          value = _this$state.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: theme || _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Select, {
        id: "select",
        name: "select",
        placeholder: "Select",
        value: value,
        options: options,
        onChange: function onChange(_ref) {
          var option = _ref.option;
          return _this2.setState({
            value: option
          });
        }
      })));
    }
  }]);

  return SimpleSelect;
}(_react.Component);

_defineProperty(SimpleSelect, "propTypes", {
  theme: _propTypes.default.shape({})
});

_defineProperty(SimpleSelect, "defaultProps", {
  theme: undefined
});

var defaultOptions = [];
var objectOptions = [];

for (var i = 1; i <= 200; i += 1) {
  defaultOptions.push("option ".concat(i));
  objectOptions.push({
    lab: "option ".concat(i),
    val: i,
    dis: i % 5 === 0,
    sel: i % 13 === 0
  });
}

var SearchSelect =
/*#__PURE__*/
function (_Component2) {
  _inherits(SearchSelect, _Component2);

  function SearchSelect() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, SearchSelect);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(SearchSelect)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {
      options: defaultOptions,
      value: ''
    });

    return _this3;
  }

  _createClass(SearchSelect, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state2 = this.state,
          options = _this$state2.options,
          value = _this$state2.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Select, {
        size: "medium",
        placeholder: "Select",
        value: value,
        options: options,
        onChange: function onChange(_ref2) {
          var option = _ref2.option;
          return _this4.setState({
            value: option
          });
        },
        onClose: function onClose() {
          return _this4.setState({
            options: defaultOptions
          });
        },
        onSearch: function onSearch(text) {
          var exp = new RegExp(text, 'i');

          _this4.setState({
            options: defaultOptions.filter(function (o) {
              return exp.test(o);
            })
          });
        }
      })));
    }
  }]);

  return SearchSelect;
}(_react.Component);

var SimpleMultiSelect =
/*#__PURE__*/
function (_Component3) {
  _inherits(SimpleMultiSelect, _Component3);

  function SimpleMultiSelect() {
    var _getPrototypeOf4;

    var _this5;

    _classCallCheck(this, SimpleMultiSelect);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this5 = _possibleConstructorReturn(this, (_getPrototypeOf4 = _getPrototypeOf(SimpleMultiSelect)).call.apply(_getPrototypeOf4, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this5)), "state", {
      options: defaultOptions,
      value: ''
    });

    return _this5;
  }

  _createClass(SimpleMultiSelect, [{
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state3 = this.state,
          options = _this$state3.options,
          value = _this$state3.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Select, {
        size: "medium",
        placeholder: "Select",
        multiple: true,
        value: value,
        options: options,
        onChange: function onChange(_ref3) {
          var nextValue = _ref3.value;
          return _this6.setState({
            value: nextValue
          });
        },
        onClose: function onClose() {
          return _this6.setState({
            options: defaultOptions
          });
        },
        onSearch: function onSearch(text) {
          var exp = new RegExp(text, 'i');

          _this6.setState({
            options: defaultOptions.filter(function (o) {
              return exp.test(o);
            })
          });
        }
      })));
    }
  }]);

  return SimpleMultiSelect;
}(_react.Component);

var ObjectMultiSelect =
/*#__PURE__*/
function (_Component4) {
  _inherits(ObjectMultiSelect, _Component4);

  function ObjectMultiSelect() {
    var _getPrototypeOf5;

    var _this7;

    _classCallCheck(this, ObjectMultiSelect);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this7 = _possibleConstructorReturn(this, (_getPrototypeOf5 = _getPrototypeOf(ObjectMultiSelect)).call.apply(_getPrototypeOf5, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this7)), "state", {
      options: objectOptions,
      value: ''
    });

    return _this7;
  }

  _createClass(ObjectMultiSelect, [{
    key: "render",
    value: function render() {
      var _this8 = this;

      var _this$state4 = this.state,
          options = _this$state4.options,
          value = _this$state4.value;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Select, {
        size: "medium",
        placeholder: "Select",
        multiple: true,
        disabledKey: "dis",
        labelKey: "lab",
        valueKey: "val",
        value: value,
        options: options,
        onChange: function onChange(_ref4) {
          var nextValue = _ref4.value;
          return _this8.setState({
            value: nextValue
          });
        },
        onClose: function onClose() {
          return _this8.setState({
            options: objectOptions
          });
        },
        onSearch: function onSearch(text) {
          var exp = new RegExp(text, 'i');

          _this8.setState({
            options: objectOptions.filter(function (o) {
              return exp.test(o.lab);
            })
          });
        }
      })));
    }
  }]);

  return ObjectMultiSelect;
}(_react.Component);

var allSeasons = ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'];

var SeasonsSelect =
/*#__PURE__*/
function (_Component5) {
  _inherits(SeasonsSelect, _Component5);

  function SeasonsSelect() {
    var _getPrototypeOf6;

    var _this9;

    _classCallCheck(this, SeasonsSelect);

    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    _this9 = _possibleConstructorReturn(this, (_getPrototypeOf6 = _getPrototypeOf(SeasonsSelect)).call.apply(_getPrototypeOf6, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this9)), "state", {
      selected: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this9)), "onRemoveSeason", function (season) {
      var selected = _this9.state.selected;

      var nextSelected = _toConsumableArray(selected);

      nextSelected.splice(nextSelected.indexOf(allSeasons.indexOf(season)), 1);

      _this9.setState({
        selected: nextSelected
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this9)), "renderSeason", function (season) {
      return _react.default.createElement(_grommet.Button, {
        key: "season_tag_".concat(season),
        href: "#",
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();

          _this9.onRemoveSeason(season);
        },
        onFocus: function onFocus(event) {
          return event.stopPropagation();
        }
      }, _react.default.createElement(_grommet.Box, {
        align: "center",
        direction: "row",
        gap: "xsmall",
        pad: {
          vertical: 'xsmall',
          horizontal: 'small'
        },
        margin: "xsmall",
        background: "accent-1",
        round: "large"
      }, _react.default.createElement(_grommet.Text, {
        size: "small",
        color: "white"
      }, season), _react.default.createElement(_grommet.Box, {
        background: "white",
        round: "full",
        margin: {
          left: 'xsmall'
        }
      }, _react.default.createElement(_grommetIcons.FormClose, {
        color: "accent-1",
        size: "small",
        style: {
          width: '12px',
          height: '12px'
        }
      }))));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this9)), "renderOption", function (option, index, options, state) {
      return _react.default.createElement(_grommet.Box, {
        pad: "small",
        background: state.active ? 'active' : undefined
      }, option);
    });

    return _this9;
  }

  _createClass(SeasonsSelect, [{
    key: "render",
    value: function render() {
      var _this10 = this;

      var selected = this.state.selected;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Select, {
        closeOnChange: false,
        multiple: true,
        value: _react.default.createElement(_grommet.Box, {
          wrap: true,
          direction: "row",
          width: "small"
        }, selected && selected.length ? selected.map(function (index) {
          return _this10.renderSeason(allSeasons[index]);
        }) : _react.default.createElement(_grommet.Box, {
          pad: {
            vertical: 'xsmall',
            horizontal: 'small'
          },
          margin: "xsmall"
        }, "Select Season")),
        options: allSeasons,
        selected: selected,
        disabled: [2, 6],
        onChange: function onChange(_ref5) {
          var nextSelected = _ref5.selected;

          _this10.setState({
            selected: nextSelected.sort()
          });
        }
      }, this.renderOption)));
    }
  }]);

  return SeasonsSelect;
}(_react.Component);

var allContentPartners = [{
  name: 'Test Partner',
  id: '32131232'
}, {
  name: 'Test Partner 1',
  id: '32131232'
}, {
  name: 'Test Partner 2',
  id: '32131242'
}, {
  name: 'Test Partner 3',
  id: '32131252'
}, {
  name: 'Test Partner 4',
  id: '32131262'
}, {
  name: 'Test Partner 5',
  id: '32131272'
}, {
  name: 'Test Partner 6',
  id: '32131231'
}, {
  name: 'Test Partner 7',
  id: '32131234'
}, {
  name: 'Test Partner 8',
  id: '32131245'
}, {
  name: 'Test Partner 9',
  id: '32131256'
}, {
  name: 'Test Partner 10',
  id: '32131269'
}, {
  name: 'Test Partner 11',
  id: '32131244'
}];

var CustomSearchSelect =
/*#__PURE__*/
function (_Component6) {
  _inherits(CustomSearchSelect, _Component6);

  function CustomSearchSelect() {
    var _getPrototypeOf7;

    var _this11;

    _classCallCheck(this, CustomSearchSelect);

    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    _this11 = _possibleConstructorReturn(this, (_getPrototypeOf7 = _getPrototypeOf(CustomSearchSelect)).call.apply(_getPrototypeOf7, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this11)), "state", {
      contentPartners: allContentPartners,
      selectedContentPartners: [],
      searching: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this11)), "selectRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this11)), "clearContentPartners", function () {
      return _this11.setState({
        selectedContentPartners: []
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this11)), "renderOption", function (_ref6) {
      var name = _ref6.name;
      var selectedContentPartners = _this11.state.selectedContentPartners;
      return _react.default.createElement(_grommet.Box, {
        direction: "row",
        align: "center",
        pad: "small",
        flex: false
      }, _react.default.createElement(_grommet.CheckBox, {
        tabIndex: "-1",
        checked: selectedContentPartners.some(function (partner) {
          return partner.name === name;
        }),
        label: _react.default.createElement(_grommet.Text, {
          size: "small"
        }, name),
        onChange: function onChange() {}
      }));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this11)), "renderContentPartners", function () {
      var selectedContentPartners = _this11.state.selectedContentPartners;
      return _react.default.createElement(_grommet.Box, {
        direction: "row",
        gap: "xsmall",
        pad: {
          left: 'small',
          vertical: 'small'
        },
        align: "center",
        flex: true
      }, _react.default.createElement(_grommet.Box, {
        background: "brand",
        round: "medium",
        align: "center",
        justify: "center",
        pad: {
          horizontal: 'xsmall'
        },
        style: {
          minWidth: '21px'
        }
      }, _react.default.createElement(_grommet.Text, {
        size: "small"
      }, selectedContentPartners.length)), _react.default.createElement(_grommet.Box, {
        flex: true
      }, _react.default.createElement(_grommet.Text, {
        size: "small",
        truncate: true
      }, selectedContentPartners.map(function (_ref7) {
        var name = _ref7.name;
        return name;
      }).join(', '))), _react.default.createElement(_grommet.Button, {
        href: "#",
        onFocus: function onFocus(event) {
          return event.stopPropagation();
        },
        onClick: function onClick(event) {
          event.preventDefault();
          event.stopPropagation();

          _this11.clearContentPartners();

          _this11.selectRef.current.focus();
        }
      }, _react.default.createElement(_grommet.Box, {
        background: "gray",
        round: "full"
      }, _react.default.createElement(_grommetIcons.FormClose, {
        style: {
          width: '12px',
          height: '12px'
        }
      }))));
    });

    return _this11;
  }

  _createClass(CustomSearchSelect, [{
    key: "render",
    value: function render() {
      var _this12 = this;

      var _this$state5 = this.state,
          contentPartners = _this$state5.contentPartners,
          searching = _this$state5.searching,
          selectedContentPartners = _this$state5.selectedContentPartners;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _theme.theme
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "center",
        width: "medium"
      }, _react.default.createElement(_SearchInputContext.SearchInputContext.Provider, {
        value: {
          searching: searching
        }
      }, _react.default.createElement(_grommet.Select, {
        ref: this.selectRef,
        closeOnChange: false,
        placeholder: "Select Content Partners",
        searchPlaceholder: "Search Content Partners",
        emptySearchMessage: "No partners found",
        multiple: true,
        value: selectedContentPartners.length ? this.renderContentPartners() : undefined,
        selected: selectedContentPartners.map(function (option) {
          return contentPartners.indexOf(option);
        }),
        options: contentPartners,
        onChange: function onChange(_ref8) {
          var option = _ref8.option;

          var newSelectedPartners = _toConsumableArray(selectedContentPartners);

          var seasonIndex = newSelectedPartners.map(function (_ref9) {
            var name = _ref9.name;
            return name;
          }).indexOf(option.name);

          if (seasonIndex >= 0) {
            newSelectedPartners.splice(seasonIndex, 1);
          } else {
            newSelectedPartners.push(option);
          }

          var selectedPartnerNames = newSelectedPartners.map(function (_ref10) {
            var name = _ref10.name;
            return name;
          });

          _this12.setState({
            selectedContentPartners: newSelectedPartners,
            contentPartners: allContentPartners.sort(function (p1, p2) {
              var p1Exists = selectedPartnerNames.includes(p1.name);
              var p2Exists = selectedPartnerNames.includes(p2.name);

              if (!p1Exists && p2Exists) {
                return 1;
              }

              if (p1Exists && !p2Exists) {
                return -1;
              }

              if (p1.name.toLowerCase() < p2.name.toLowerCase()) {
                return -1;
              }

              return 1;
            })
          });
        },
        onSearch: function onSearch(query) {
          _this12.setState({
            searching: true
          }, function () {
            setTimeout(function () {
              _this12.setState({
                searching: false,
                contentPartners: allContentPartners.filter(function (s) {
                  return s.name.toLowerCase().indexOf(query.toLowerCase()) >= 0;
                })
              });
            }, 500);
          });
        }
      }, this.renderOption))));
    }
  }]);

  return CustomSearchSelect;
}(_react.Component);

var DarkSelect =
/*#__PURE__*/
function (_Component7) {
  _inherits(DarkSelect, _Component7);

  function DarkSelect() {
    var _getPrototypeOf8;

    var _this13;

    _classCallCheck(this, DarkSelect);

    for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      args[_key7] = arguments[_key7];
    }

    _this13 = _possibleConstructorReturn(this, (_getPrototypeOf8 = _getPrototypeOf(DarkSelect)).call.apply(_getPrototypeOf8, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this13)), "state", {
      options: ['one', 'two'],
      value: ''
    });

    return _this13;
  }

  _createClass(DarkSelect, [{
    key: "render",
    value: function render() {
      var _this14 = this;

      var _this$state6 = this.state,
          options = _this$state6.options,
          value = _this$state6.value;
      return _react.default.createElement(_grommet.Grommet, _extends({
        full: true,
        theme: _themes.grommet
      }, this.props), _react.default.createElement(_grommet.Box, {
        fill: true,
        background: "dark-1",
        align: "center",
        justify: "center"
      }, _react.default.createElement(_grommet.Select, {
        placeholder: "Select",
        value: value,
        options: options,
        onChange: function onChange(_ref11) {
          var option = _ref11.option;
          return _this14.setState({
            value: option
          });
        }
      })));
    }
  }]);

  return DarkSelect;
}(_react.Component);

var Option =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Option, _PureComponent);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, _getPrototypeOf(Option).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          value = _this$props.value,
          selected = _this$props.selected;
      return _react.default.createElement(_grommet.Box, {
        direction: "row",
        gap: "small",
        align: "center",
        pad: "xsmall"
      }, _react.default.createElement(_grommet.CheckBox, {
        tabIndex: "-1",
        checked: selected,
        onChange: function onChange() {}
      }), value);
    }
  }]);

  return Option;
}(_react.PureComponent);

var dummyOptions = Array(2000).fill().map(function (_, i) {
  return "option ".concat(i);
}).sort(function (a, b) {
  return a.localeCompare(b, undefined, {
    numeric: true,
    sensitivity: 'base'
  });
});

var ManyOptions =
/*#__PURE__*/
function (_Component8) {
  _inherits(ManyOptions, _Component8);

  function ManyOptions() {
    var _getPrototypeOf9;

    var _this15;

    _classCallCheck(this, ManyOptions);

    for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      args[_key8] = arguments[_key8];
    }

    _this15 = _possibleConstructorReturn(this, (_getPrototypeOf9 = _getPrototypeOf(ManyOptions)).call.apply(_getPrototypeOf9, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this15)), "state", {
      selected: [],
      options: dummyOptions
    });

    return _this15;
  }

  _createClass(ManyOptions, [{
    key: "render",
    value: function render() {
      var _this16 = this;

      var _this$state7 = this.state,
          options = _this$state7.options,
          selected = _this$state7.selected;
      return _react.default.createElement(_grommet.Grommet, {
        full: true,
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, {
        fill: true,
        align: "center",
        justify: "start",
        pad: "large"
      }, _react.default.createElement(_grommet.Select, {
        multiple: true,
        closeOnChange: false,
        placeholder: "select an option...",
        selected: selected,
        options: options,
        dropHeight: "medium",
        onClose: function onClose() {
          return _this16.setState({
            options: options.sort(function (p1, p2) {
              var p1Exists = selected.includes(p1);
              var p2Exists = selected.includes(p2);

              if (!p1Exists && p2Exists) {
                return 1;
              }

              if (p1Exists && !p2Exists) {
                return -1;
              }

              return p1.localeCompare(p2, undefined, {
                numeric: true,
                sensitivity: 'base'
              });
            })
          });
        },
        onChange: function onChange(_ref12) {
          var nextSelected = _ref12.selected;

          _this16.setState({
            selected: nextSelected
          });
        }
      }, function (option, index) {
        return _react.default.createElement(Option, {
          value: option,
          selected: selected.indexOf(index) !== -1
        });
      })));
    }
  }]);

  return ManyOptions;
}(_react.Component);

(0, _react2.storiesOf)('Select', module).add('Simple', function () {
  return _react.default.createElement(SimpleSelect, null);
}).add('Search', function () {
  return _react.default.createElement(SearchSelect, null);
}).add('Simple Multiple', function () {
  return _react.default.createElement(SimpleMultiSelect, null);
}).add('Object Multiple', function () {
  return _react.default.createElement(ObjectMultiSelect, null);
}).add('Seasons', function () {
  return _react.default.createElement(SeasonsSelect, null);
}).add('Custom Search', function () {
  return _react.default.createElement(CustomSearchSelect, null);
}).add('Dark', function () {
  return _react.default.createElement(DarkSelect, null);
}).add('Custom Colors', function () {
  return _react.default.createElement(DarkSelect, {
    theme: {
      global: {
        font: {
          family: 'Arial'
        }
      },
      select: {
        background: '#000000',
        iconColor: '#d3d3d3'
      }
    }
  });
}).add('Custom Rounded', function () {
  return _react.default.createElement(SimpleSelect, {
    theme: customRoundedTheme
  });
}).add('Lots of options', function () {
  return _react.default.createElement(ManyOptions, null);
});