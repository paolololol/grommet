"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Distribution = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = require("../Box");

var _Text = require("../Text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Value = function Value(_ref) {
  var basis = _ref.basis,
      children = _ref.children;
  return _react.default.createElement(_Box.Box, {
    basis: basis,
    flex: "shrink",
    overflow: "hidden"
  }, children);
};

Value.propTypes = {
  basis: _propTypes.default.string.isRequired,
  children: _propTypes.default.node.isRequired
};

var Distribution =
/*#__PURE__*/
function (_Component) {
  _inherits(Distribution, _Component);

  function Distribution() {
    _classCallCheck(this, Distribution);

    return _possibleConstructorReturn(this, _getPrototypeOf(Distribution).apply(this, arguments));
  }

  _createClass(Distribution, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          basis = _this$props.basis,
          children = _this$props.children,
          direction = _this$props.direction,
          fill = _this$props.fill,
          gap = _this$props.gap,
          values = _this$props.values,
          rest = _objectWithoutProperties(_this$props, ["basis", "children", "direction", "fill", "gap", "values"]);

      if (values.length === 1) {
        var value = values[0];
        return _react.default.createElement(Value, {
          value: value,
          basis: basis
        }, children(value));
      }

      if (values.length > 1) {
        // calculate total
        var total = 0;
        values.forEach(function (v) {
          total += v.value;
        }); // figure out how many of the values area needed to represent half of the total

        var subTotal = 0;
        var subIndex;
        values.some(function (v, index) {
          subTotal += v.value;

          if (subTotal >= total * 0.4) {
            subIndex = index + 1;
            return true;
          }

          return false;
        });

        if (subIndex === values.length) {
          var _value = values[0];
          return _react.default.createElement(Value, {
            value: _value,
            basis: basis
          }, children(_value));
        }

        var childBasis;

        if (subTotal > total * 0.7) {
          childBasis = ['3/4', '1/4'];
        } else if (subTotal > total * 0.6) {
          childBasis = ['2/3', '1/3'];
        } else {
          childBasis = ['1/2', '1/2'];
        }

        return _react.default.createElement(_Box.Box, _extends({
          direction: direction,
          basis: basis,
          flex: basis ? 'shrink' : true,
          overflow: "hidden",
          gap: gap,
          fill: fill
        }, rest), _react.default.createElement(Distribution, {
          values: values.slice(0, subIndex),
          basis: childBasis[0],
          direction: direction === 'row' ? 'column' : 'row',
          gap: gap
        }, children), _react.default.createElement(Distribution, {
          values: values.slice(subIndex),
          basis: childBasis[1],
          direction: direction === 'row' ? 'column' : 'row',
          gap: gap
        }, children));
      }

      return null;
    }
  }]);

  return Distribution;
}(_react.Component);

_defineProperty(Distribution, "defaultProps", {
  basis: undefined,
  children: function children(value) {
    return _react.default.createElement(_Box.Box, {
      fill: true,
      border: true
    }, _react.default.createElement(_Text.Text, null, value.value));
  },
  direction: 'row',
  gap: 'xsmall',
  values: []
});

var DistributionDoc;

if (process.env.NODE_ENV !== 'production') {
  DistributionDoc = require('./doc').doc(Distribution); // eslint-disable-line global-require
}

var DistributionWrapper = DistributionDoc || Distribution;
exports.Distribution = DistributionWrapper;