"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

var _Box = require("../Box");

var _InfiniteScroll = require("../InfiniteScroll");

var _Keyboard = require("../Keyboard");

var _Text = require("../Text");

var _TextInput = require("../TextInput");

var _SelectOption = require("./SelectOption");

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

var ContainerBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "SelectContainer__ContainerBox",
  componentId: "sc-1wi0ul8-0"
})(["max-height:inherit;@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){width:100%;}", ";"], function (props) {
  return props.theme.select.container && props.theme.select.container.extend;
});
var OptionsBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "SelectContainer__OptionsBox",
  componentId: "sc-1wi0ul8-1"
})(["scroll-behavior:smooth;"]);
var OptionBox = (0, _styledComponents.default)(_Box.Box).withConfig({
  displayName: "SelectContainer__OptionBox",
  componentId: "sc-1wi0ul8-2"
})(["", ""], function (props) {
  return props.selected && _utils.selectedStyle;
});

var SelectContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectContainer, _Component);

  function SelectContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionsRef", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "searchRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      search: '',
      activeIndex: -1
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearchChange", function (event) {
      _this.setState({
        search: event.target.value,
        activeIndex: -1
      }, function () {
        var search = _this.state.search;

        _this.onSearch(search);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSearch", (0, _utils.debounce)(function (search) {
      var onSearch = _this.props.onSearch;
      onSearch(search);
    }, (0, _utils.debounceDelay)(_this.props)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectOption", function (option, index) {
      return function () {
        var _this$props = _this.props,
            multiple = _this$props.multiple,
            onChange = _this$props.onChange,
            options = _this$props.options,
            selected = _this$props.selected,
            value = _this$props.value;

        if (onChange) {
          var nextValue = option;
          var nextSelected = index;

          if (multiple) {
            nextValue = [];
            nextSelected = [];
            var removed = false;
            var selectedIndexes = [];

            if (Array.isArray(selected)) {
              selectedIndexes = selected;
            } else if (Array.isArray(value)) {
              selectedIndexes = value.map(function (v) {
                return options.indexOf(v);
              });
            }

            selectedIndexes.forEach(function (selectedIndex) {
              if (selectedIndex === index) {
                removed = true;
              } else {
                nextValue.push(options[selectedIndex]);
                nextSelected.push(selectedIndex);
              }
            });

            if (!removed) {
              nextValue.push(option);
              nextSelected.push(index);
            }
          }

          onChange({
            option: option,
            value: nextValue,
            selected: nextSelected
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "clearKeyboardNavigation", function () {
      clearTimeout(_this.keyboardNavTimer);
      _this.keyboardNavTimer = setTimeout(function () {
        _this.setState({
          keyboardNavigating: false
        });
      }, 100); // 100ms was empirically determined
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNextOption", function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;
      event.preventDefault();
      var nextActiveIndex = activeIndex + 1;

      while (nextActiveIndex < options.length && _this.isDisabled(nextActiveIndex)) {
        nextActiveIndex += 1;
      }

      if (nextActiveIndex !== options.length) {
        _this.setState({
          activeIndex: nextActiveIndex,
          keyboardNavigating: true
        }, function () {
          var buttonNode = _this.optionsRef[nextActiveIndex];
          var selectNode = _this.selectRef.current;

          if (buttonNode && (0, _utils.isNodeAfterScroll)(buttonNode, selectNode) && selectNode.scrollBy) {
            selectNode.scrollBy(0, buttonNode.getBoundingClientRect().height);
          }

          _this.clearKeyboardNavigation();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPreviousOption", function (event) {
      var activeIndex = _this.state.activeIndex;
      event.preventDefault();
      var nextActiveIndex = activeIndex - 1;

      while (nextActiveIndex >= 0 && _this.isDisabled(nextActiveIndex)) {
        nextActiveIndex -= 1;
      }

      if (nextActiveIndex >= 0) {
        _this.setState({
          activeIndex: nextActiveIndex,
          keyboardNavigating: true
        }, function () {
          var buttonNode = _this.optionsRef[nextActiveIndex];
          var selectNode = _this.selectRef.current;

          if (buttonNode && (0, _utils.isNodeBeforeScroll)(buttonNode, selectNode) && selectNode.scrollBy) {
            selectNode.scrollBy(0, -buttonNode.getBoundingClientRect().height);
          }

          _this.clearKeyboardNavigation();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onActiveOption", function (index) {
      return function () {
        var keyboardNavigating = _this.state.keyboardNavigating;

        if (!keyboardNavigating) {
          _this.setState({
            activeIndex: index
          });
        }
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectOption", function (event) {
      var options = _this.props.options;
      var activeIndex = _this.state.activeIndex;

      if (activeIndex >= 0) {
        event.preventDefault(); // prevent submitting forms

        _this.selectOption(options[activeIndex], activeIndex)();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionLabel", function (index) {
      var _this$props2 = _this.props,
          options = _this$props2.options,
          labelKey = _this$props2.labelKey;
      var option = options[index];
      var optionLabel;

      if (labelKey) {
        if (typeof labelKey === 'function') {
          optionLabel = labelKey(option);
        } else {
          optionLabel = option[labelKey];
        }
      } else {
        optionLabel = option;
      }

      return optionLabel;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "optionValue", function (index) {
      var _this$props3 = _this.props,
          options = _this$props3.options,
          valueKey = _this$props3.valueKey;
      var option = options[index];
      var optionValue;

      if (valueKey) {
        if (typeof valueKey === 'function') {
          optionValue = valueKey(option);
        } else {
          optionValue = option[valueKey];
        }
      } else {
        optionValue = option;
      }

      return optionValue;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isDisabled", function (index) {
      var _this$props4 = _this.props,
          disabled = _this$props4.disabled,
          disabledKey = _this$props4.disabledKey,
          options = _this$props4.options;
      var option = options[index];
      var result;

      if (disabledKey) {
        if (typeof disabledKey === 'function') {
          result = disabledKey(option, index);
        } else {
          result = option[disabledKey];
        }
      } else if (Array.isArray(disabled)) {
        if (typeof disabled[0] === 'number') {
          result = disabled.indexOf(index) !== -1;
        } else {
          var optionValue = _this.optionValue(index);

          result = disabled.indexOf(optionValue) !== -1;
        }
      }

      return result;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSelected", function (index) {
      var _this$props5 = _this.props,
          selected = _this$props5.selected,
          value = _this$props5.value,
          valueKey = _this$props5.valueKey;
      var result;

      if (selected) {
        // deprecated in favor of value
        result = selected.indexOf(index) !== -1;
      } else {
        var optionValue = _this.optionValue(index);

        if (Array.isArray(value)) {
          if (value.length === 0) {
            result = false;
          } else if (_typeof(value[0]) !== 'object') {
            result = value.indexOf(optionValue) !== -1;
          } else if (valueKey) {
            result = value.some(function (valueItem) {
              var valueValue = typeof valueKey === 'function' ? valueKey(valueItem) : valueItem[valueKey];
              return valueValue === optionValue;
            });
          }
        } else if (valueKey && _typeof(value) === 'object') {
          var valueValue = typeof valueKey === 'function' ? valueKey(value) : value[valueKey];
          result = valueValue === optionValue;
        } else {
          result = value === optionValue;
        }
      }

      return result;
    });

    return _this;
  }

  _createClass(SelectContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var onSearch = this.props.onSearch;
      var activeIndex = this.state.activeIndex; // timeout need to send the operation through event loop and allow time to the portal
      // to be available

      setTimeout(function () {
        var selectNode = _this2.selectRef.current;

        if (onSearch) {
          var input = _this2.searchRef.current;

          if (input && input.focus) {
            (0, _utils.setFocusWithoutScroll)(input);
          }
        } else if (selectNode) {
          (0, _utils.setFocusWithoutScroll)(selectNode);
        } // scroll to active option if it is below the fold


        if (activeIndex >= 0 && selectNode) {
          var optionNode = _this2.optionsRef[activeIndex];

          var _selectNode$getBoundi = selectNode.getBoundingClientRect(),
              containerBottom = _selectNode$getBoundi.bottom;

          if (optionNode) {
            var _optionNode$getBoundi = optionNode.getBoundingClientRect(),
                optionTop = _optionNode$getBoundi.bottom;

            if (containerBottom < optionTop) {
              optionNode.scrollIntoView();
            }
          }
        }
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props6 = this.props,
          children = _this$props6.children,
          dropHeight = _this$props6.dropHeight,
          emptySearchMessage = _this$props6.emptySearchMessage,
          id = _this$props6.id,
          onKeyDown = _this$props6.onKeyDown,
          onSearch = _this$props6.onSearch,
          options = _this$props6.options,
          searchPlaceholder = _this$props6.searchPlaceholder,
          theme = _this$props6.theme;
      var _this$state = this.state,
          activeIndex = _this$state.activeIndex,
          search = _this$state.search;
      var customSearchInput = theme.select.searchInput;
      var SelectTextInput = customSearchInput || _TextInput.TextInput;
      return _react.default.createElement(_Keyboard.Keyboard, {
        onEnter: this.onSelectOption,
        onUp: this.onPreviousOption,
        onDown: this.onNextOption,
        onKeyDown: onKeyDown
      }, _react.default.createElement(ContainerBox, {
        height: dropHeight,
        id: id ? "".concat(id, "__select-drop") : undefined
      }, onSearch && _react.default.createElement(_Box.Box, {
        pad: !customSearchInput ? 'xsmall' : undefined,
        flex: false
      }, _react.default.createElement(SelectTextInput, {
        focusIndicator: !customSearchInput,
        size: "small",
        ref: this.searchRef,
        type: "search",
        value: search,
        placeholder: searchPlaceholder,
        onChange: this.onSearchChange
      })), _react.default.createElement(OptionsBox, {
        flex: "shrink",
        role: "menubar",
        tabIndex: "-1",
        ref: this.selectRef,
        overflow: "auto"
      }, options.length > 0 ? _react.default.createElement(_InfiniteScroll.InfiniteScroll, {
        items: options,
        step: theme.select.step,
        replace: true
      }, function (option, index) {
        var isDisabled = _this3.isDisabled(index);

        var isSelected = _this3.isSelected(index);

        var isActive = activeIndex === index;
        return _react.default.createElement(_SelectOption.SelectOption, {
          key: "option_".concat(index),
          ref: function ref(_ref) {
            _this3.optionsRef[index] = _ref;
          },
          disabled: isDisabled || undefined,
          active: isActive,
          option: option,
          onMouseOver: !isDisabled ? _this3.onActiveOption(index) : undefined,
          onClick: !isDisabled ? _this3.selectOption(option, index) : undefined
        }, children ? children(option, index, options, {
          active: isActive,
          disabled: isDisabled,
          selected: isSelected
        }) : _react.default.createElement(OptionBox, {
          align: "start",
          pad: "small",
          selected: isSelected
        }, _react.default.createElement(_Text.Text, {
          margin: "none",
          size: "xsmall"
        }, _this3.optionLabel(index))));
      }) : _react.default.createElement(_SelectOption.SelectOption, {
        key: "search_empty",
        disabled: true,
        option: emptySearchMessage
      }, _react.default.createElement(OptionBox, {
        align: "start",
        pad: "small"
      }, _react.default.createElement(_Text.Text, {
        margin: "none"
      }, emptySearchMessage))))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var options = nextProps.options,
          value = nextProps.value,
          onSearch = nextProps.onSearch;

      if (onSearch) {
        if (prevState.activeIndex === -1 && prevState.search === '' && options && value) {
          var optionValue = Array.isArray(value) && value.length ? value[0] : value;
          var activeIndex = options.indexOf(optionValue);
          return {
            activeIndex: activeIndex
          };
        }

        if (prevState.activeIndex === -1 && prevState.search !== '') {
          return {
            activeIndex: 0
          };
        }
      }

      return null;
    }
  }]);

  return SelectContainer;
}(_react.Component);

_defineProperty(SelectContainer, "defaultProps", {
  children: null,
  disabled: undefined,
  emptySearchMessage: 'No matches found',
  id: undefined,
  multiple: false,
  name: undefined,
  onKeyDown: undefined,
  onSearch: undefined,
  options: undefined,
  searchPlaceholder: undefined,
  selected: undefined,
  value: ''
});

Object.setPrototypeOf(SelectContainer.defaultProps, _defaultProps.defaultProps);
var SelectContainerWrapper = (0, _styledComponents.withTheme)(SelectContainer);
exports.SelectContainer = SelectContainerWrapper;