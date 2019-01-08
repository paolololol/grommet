"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("jest-styled-components");

var _reactTestingLibrary = require("react-testing-library");

var _domTestingLibrary = require("dom-testing-library");

var _portal = require("../../../utils/portal");

var _ = require("../..");

var _LayerContainer = require("../LayerContainer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var FakeLayer =
/*#__PURE__*/
function (_Component) {
  _inherits(FakeLayer, _Component);

  function FakeLayer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, FakeLayer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(FakeLayer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showLayer: false
    });

    return _this;
  }

  _createClass(FakeLayer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        showLayer: true
      }); // eslint-disable-line
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      var showLayer = this.state.showLayer;
      var layer;

      if (showLayer) {
        layer = _react.default.createElement(_.Layer, {
          onEsc: function onEsc() {
            return _this2.setState({
              showLayer: false
            });
          }
        }, _react.default.createElement("div", rest, "This is a layer", _react.default.createElement("input", {
          "data-testid": "test-input"
        })));
      }

      return _react.default.createElement(_.Grommet, null, layer, children);
    }
  }]);

  return FakeLayer;
}(_react.Component);

_defineProperty(FakeLayer, "propTypes", {
  children: _propTypes.default.node.isRequired
});

describe('Layer', function () {
  beforeEach(_portal.createPortal);
  afterEach(_reactTestingLibrary.cleanup);
  ['top', 'bottom', 'left', 'right', 'center'].forEach(function (position) {
    return test("position ".concat(position), function () {
      (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
        id: "position-test",
        position: position
      }, "This is a layer")));
      (0, _portal.expectPortal)('position-test').toMatchSnapshot();
    });
  });
  [true, false, 'horizontal', 'vertical'].forEach(function (full) {
    return test("full ".concat(full), function () {
      (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
        id: "full-test",
        full: full
      }, "This is a layer")));
      (0, _portal.expectPortal)('full-test').toMatchSnapshot();
    });
  });
  ['none', 'xsmall', 'small', 'medium', 'large'].forEach(function (margin) {
    return test("margin ".concat(margin), function () {
      (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
        id: "margin-test",
        margin: margin
      }, "This is a layer")));
      (0, _portal.expectPortal)('margin-test').toMatchSnapshot();
    });
  });
  test("custom margin", function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
      id: "margin-test",
      margin: {
        top: '50px',
        bottom: '40px',
        left: '30px',
        right: '20px'
      }
    }, "This is a layer")));
    (0, _portal.expectPortal)('margin-test').toMatchSnapshot();
  });
  test('hidden', function () {
    var _render = (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
      id: "hidden-test",
      position: "hidden"
    }, "This is a layer"))),
        rerender = _render.rerender;

    (0, _portal.expectPortal)('hidden-test').toMatchSnapshot();
    rerender(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
      id: "hidden-test",
      position: "center"
    }, "This is a layer")));
    (0, _portal.expectPortal)('hidden-test').toMatchSnapshot();
  });
  test('plain', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
      id: "plain-test",
      plain: true
    }, "This is a plain layer")));
    (0, _portal.expectPortal)('plain-test').toMatchSnapshot();
  });
  test('non-modal', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Layer, {
      id: "non-modal-test",
      modal: false
    }, "This is a non-modal layer")));
    (0, _portal.expectPortal)('non-modal-test').toMatchSnapshot();
  });
  test('dark context', function () {
    (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_.Box, {
      background: "dark-1"
    }, _react.default.createElement(_.Layer, {
      id: "non-modal-test",
      modal: false
    }, "This is a non-modal layer"))));
    (0, _portal.expectPortal)('non-modal-test').toMatchSnapshot();
  });
  test('invokes onEsc', function () {
    var onEsc = jest.fn();
    (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(_LayerContainer.LayerContainer, {
      onEsc: onEsc
    }, _react.default.createElement("input", {
      "data-testid": "test-input"
    }))));
    var inputNode = (0, _domTestingLibrary.getByTestId)(document, 'test-input');

    _reactTestingLibrary.fireEvent.keyDown(inputNode, {
      key: 'Esc',
      keyCode: 27,
      which: 27
    });

    expect(onEsc).toBeCalled();
  });
  test('is accessible', function () {
    /* eslint-disable jsx-a11y/tabindex-no-positive */
    (0, _reactTestingLibrary.render)(_react.default.createElement(_.Grommet, null, _react.default.createElement(FakeLayer, {
      "data-testid": "test-layer-node"
    }, _react.default.createElement("div", {
      "data-testid": "test-body-node"
    }, _react.default.createElement("input", null), _react.default.createElement("input", {
      tabIndex: "10"
    })))));
    /* eslint-enable jsx-a11y/tabindex-no-positive */

    var bodyNode = (0, _domTestingLibrary.getByTestId)(document, 'test-body-node');
    var layerNode = (0, _domTestingLibrary.getByTestId)(document, 'test-layer-node');
    var inputNode = (0, _domTestingLibrary.getByTestId)(document, 'test-input');
    expect(bodyNode).toMatchSnapshot();
    expect(layerNode).toMatchSnapshot();

    _reactTestingLibrary.fireEvent.keyDown(inputNode, {
      key: 'Esc',
      keyCode: 27,
      which: 27
    });

    bodyNode = (0, _domTestingLibrary.getByTestId)(document, 'test-body-node');
    expect(bodyNode).toMatchSnapshot();
    expect((0, _domTestingLibrary.queryByTestId)(document, 'test-layer-node')).toBeNull();
  });
});