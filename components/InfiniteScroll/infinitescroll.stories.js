"use strict";

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("@storybook/react");

var _grommet = require("grommet");

var _themes = require("grommet/themes");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var allItems = Array(2000).fill().map(function (_, i) {
  return "item ".concat(i + 1);
});

var SimpleInfiniteScroll = function SimpleInfiniteScroll(props) {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Box, null, _react.default.createElement(_grommet.InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return _react.default.createElement(_grommet.Box, {
      key: item,
      pad: "medium",
      border: {
        side: 'bottom'
      },
      align: "center"
    }, _react.default.createElement(_grommet.Text, null, item));
  })));
};
/* eslint-disable react/prefer-stateless-function */


var MyItem =
/*#__PURE__*/
function (_Component) {
  _inherits(MyItem, _Component);

  function MyItem() {
    _classCallCheck(this, MyItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyItem).apply(this, arguments));
  }

  _createClass(MyItem, [{
    key: "render",
    value: function render() {
      var item = this.props.item;
      return _react.default.createElement(_grommet.Box, {
        pad: "medium",
        border: {
          side: 'bottom'
        },
        align: "center"
      }, _react.default.createElement(_grommet.Text, null, item));
    }
  }]);

  return MyItem;
}(_react.Component);
/* eslint-enable react/prefer-stateless-function */


var ClassChildrenInfiniteScroll = function ClassChildrenInfiniteScroll(props) {
  return _react.default.createElement(_grommet.Grommet, {
    theme: _themes.grommet
  }, _react.default.createElement(_grommet.Box, null, _react.default.createElement(_grommet.InfiniteScroll, _extends({
    items: allItems
  }, props), function (item) {
    return _react.default.createElement(MyItem, {
      key: item,
      item: item
    });
  })));
};

var LazyInfiniteScroll =
/*#__PURE__*/
function (_Component2) {
  _inherits(LazyInfiniteScroll, _Component2);

  function LazyInfiniteScroll() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LazyInfiniteScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LazyInfiniteScroll)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      items: allItems.slice(0, 200)
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMore", function () {
      setTimeout(function () {
        var items = _this.state.items;

        _this.setState({
          items: allItems.slice(0, items.length + 200)
        });
      }, 1000);
    });

    return _this;
  }

  _createClass(LazyInfiniteScroll, [{
    key: "render",
    value: function render() {
      var items = this.state.items;
      return _react.default.createElement(_grommet.Grommet, {
        theme: _themes.grommet
      }, _react.default.createElement(_grommet.Box, null, _react.default.createElement(_grommet.InfiniteScroll, {
        items: items,
        onMore: this.onMore
      }, function (item) {
        return _react.default.createElement(_grommet.Box, {
          key: item,
          pad: "medium",
          border: {
            side: 'bottom'
          },
          align: "center"
        }, _react.default.createElement(_grommet.Text, null, item));
      })));
    }
  }]);

  return LazyInfiniteScroll;
}(_react.Component);

(0, _react2.storiesOf)('InfiniteScroll', module).add('Simple', function () {
  return _react.default.createElement(SimpleInfiniteScroll, null);
}).add('Show 118th item', function () {
  return _react.default.createElement(SimpleInfiniteScroll, {
    show: 117
  });
}).add('Marker', function () {
  return _react.default.createElement(SimpleInfiniteScroll, {
    renderMarker: function renderMarker(marker) {
      return _react.default.createElement(_grommet.Box, {
        pad: "medium",
        background: "accent-1"
      }, marker);
    }
  });
}).add('Replace', function () {
  return _react.default.createElement(SimpleInfiniteScroll, {
    replace: true
  });
}).add('onMore', function () {
  return _react.default.createElement(LazyInfiniteScroll, null);
}).add('Class Children', function () {
  return _react.default.createElement(ClassChildrenInfiniteScroll, null);
});