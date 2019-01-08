"use strict";

var _react = _interopRequireWildcard(require("react"));

require("jest-styled-components");

var _reactTestingLibrary = require("react-testing-library");

var _portal = require("../../../utils/portal");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
    drop: {
      shadowSize: 'large'
    }
  }
};

var TestInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TestInput, _Component);

  function TestInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TestInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TestInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showDrop: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "inputRef", _react.default.createRef());

    return _this;
  }

  _createClass(TestInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        showDrop: true
      }); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          theme = _this$props.theme,
          elevation = _this$props.elevation,
          rest = _objectWithoutProperties(_this$props, ["inputProps", "theme", "elevation"]);

      var showDrop = this.state.showDrop;
      var drop;

      if (showDrop) {
        drop = _react.default.createElement(_.Drop, _extends({
          id: "drop-node",
          elevation: elevation,
          target: this.inputRef.current
        }, rest), "this is a test");
      }

      return _react.default.createElement(_Grommet.Grommet, {
        theme: theme
      }, _react.default.createElement("input", _extends({
        ref: this.inputRef
      }, inputProps)), drop);
    }
  }]);

  return TestInput;
}(_react.Component);

describe('Drop', function () {
  afterEach(_reactTestingLibrary.cleanup);
  test('basic', function () {
    window.scrollTo = jest.fn();
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align left right top bottom', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        left: 'right',
        top: 'bottom'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right bottom top', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        right: 'right',
        bottom: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align left random', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        left: 'random',
        bottom: 'bottom'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right left top top', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        right: 'left',
        top: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right right bottom top', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        right: 'right',
        bottom: 'top'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('align right random', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        right: 'random'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('invalid align', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      align: {
        whatever: 'right'
      }
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('no stretch', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      stretch: false
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('close', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _reactTestingLibrary.cleanup)();
    expect(document.getElementById('drop-node')).toBeNull();
  });
  test('invoke onClickOutside', function () {
    var onClickOutside = jest.fn();
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      onClickOutside: onClickOutside
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _reactTestingLibrary.fireEvent)(document, new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true
    }));
    expect(onClickOutside).toBeCalled();
  });
  test('resize', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, null));
    global.window.innerWidth = 1000;
    global.window.innerHeight = 1000;
    (0, _reactTestingLibrary.fireEvent)(window, new Event('resize', {
      bubbles: true,
      cancelable: true
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('restrict focus', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      restrictFocus: true
    }));
    expect(document.activeElement).toMatchSnapshot();
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
    (0, _reactTestingLibrary.cleanup)();
    expect(document.activeElement).toMatchSnapshot();
  });
  test('default elevation renders', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, null));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('theme elevation renders', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      theme: customTheme
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('props elevation renders', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      theme: customTheme,
      elevation: "medium"
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
  test('plain renders', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(TestInput, {
      plain: true
    }));
    (0, _portal.expectPortal)('drop-node').toMatchSnapshot();
  });
});