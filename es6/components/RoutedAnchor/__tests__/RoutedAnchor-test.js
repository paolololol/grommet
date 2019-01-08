"use strict";

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _utils = require("../../../utils");

var _Grommet = require("../../Grommet");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FakeRouter =
/*#__PURE__*/
function (_Component) {
  _inherits(FakeRouter, _Component);

  function FakeRouter() {
    _classCallCheck(this, FakeRouter);

    return _possibleConstructorReturn(this, _getPrototypeOf(FakeRouter).apply(this, arguments));
  }

  _createClass(FakeRouter, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this$props = this.props,
          push = _this$props.push,
          replace = _this$props.replace;
      return {
        router: {
          history: {
            push: push,
            replace: replace
          }
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("div", null, children);
    }
  }]);

  return FakeRouter;
}(_react.Component);

_defineProperty(FakeRouter, "propTypes", {
  children: _propTypes.default.node.isRequired,
  push: _propTypes.default.func.isRequired,
  replace: _propTypes.default.func.isRequired
});

_defineProperty(FakeRouter, "childContextTypes", {
  router: _propTypes.default.shape({}).isRequired
});

describe('RoutedAnchor', function () {
  test('renders', function () {
    var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(FakeRouter, null, _react.default.createElement(_.RoutedAnchor, {
      label: "Test",
      path: "/"
    }))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('is clickable', function () {
    var preventDefault = jest.fn();
    var push = jest.fn();
    var onClick = jest.fn();

    var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(FakeRouter, {
      push: push
    }, _react.default.createElement(_.RoutedAnchor, {
      label: "Test",
      onClick: onClick
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(onClick).toBeCalled();
    expect(push).toBeCalled();
    expect(preventDefault).toBeCalled();
  });
  test('skips onClick if right clicked', function () {
    var onClick = jest.fn();

    var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(FakeRouter, null, _react.default.createElement(_.RoutedAnchor, {
      label: "Test",
      onClick: onClick
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      ctrlKey: true
    });
    anchor[0].props.onClick({
      metaKey: true
    });
    expect(onClick).not.toBeCalled();
  });
  test('calls router context push', function () {
    var preventDefault = jest.fn();
    var push = jest.fn();

    var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(FakeRouter, {
      push: push
    }, _react.default.createElement(_.RoutedAnchor, {
      label: "Test",
      path: "/"
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
    expect(push).toBeCalledWith('/');
  });
  test('calls router context replace', function () {
    var preventDefault = jest.fn();
    var replace = jest.fn();

    var component = _reactTestRenderer.default.create(_react.default.createElement(_Grommet.Grommet, null, _react.default.createElement(FakeRouter, {
      replace: replace
    }, _react.default.createElement(_.RoutedAnchor, {
      label: "Test",
      path: "/",
      method: "replace"
    }))));

    var tree = component.toJSON();
    var anchor = (0, _utils.findAllByType)(tree, 'a');
    anchor[0].props.onClick({
      preventDefault: preventDefault
    });
    expect(preventDefault).toBeCalled();
    expect(replace).toBeCalledWith('/');
  });
});