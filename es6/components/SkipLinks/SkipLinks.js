"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkipLinks = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = require("../Box");

var _Heading = require("../Heading");

var _Layer = require("../Layer");

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

var SkipLinks =
/*#__PURE__*/
function (_Component) {
  _inherits(SkipLinks, _Component);

  function SkipLinks() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SkipLinks);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SkipLinks)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showLayer: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "layerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      // timeout needed so it gives enough time for activeElement to be updated
      setTimeout(function () {
        var layerNode = _this.layerRef.current;

        if (layerNode && layerNode.layerContainer.contains && !layerNode.layerContainer.contains(document.activeElement)) {
          _this.removeLayer();
        }
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      _this.setState({
        showLayer: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeLayer", function () {
      _this.setState({
        showLayer: false
      });
    });

    return _this;
  }

  _createClass(SkipLinks, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      /* eslint-disable-next-line react/prop-types */
      var _this$props = this.props,
          children = _this$props.children,
          id = _this$props.id,
          messages = _this$props.messages;
      var showLayer = this.state.showLayer;
      return _react.default.createElement(_Layer.Layer, {
        id: id,
        position: showLayer ? 'top' : 'hidden',
        ref: this.layerRef,
        onFocus: this.onFocus,
        onBlur: this.onBlur
      }, _react.default.createElement(_Box.Box, {
        pad: {
          horizontal: 'medium'
        }
      }, _react.default.createElement(_Heading.Heading, {
        level: 2
      }, messages.skipTo, ":"), _react.default.createElement(_Box.Box, {
        direction: "row",
        align: "center",
        pad: {
          bottom: 'medium'
        }
      }, children.map(function (element, index) {
        return (0, _react.cloneElement)(element, {
          key: "skip-link-".concat(index),
          onClick: _this2.removeLayer
        });
      }))));
    }
  }]);

  return SkipLinks;
}(_react.Component);

_defineProperty(SkipLinks, "defaultProps", {
  messages: {
    skipTo: 'Skip To'
  }
});

var SkipLinksDoc;

if (process.env.NODE_ENV !== 'production') {
  SkipLinksDoc = require('./doc').doc(SkipLinks); // eslint-disable-line global-require
}

var SkipLinksWrapper = SkipLinksDoc || SkipLinks;
exports.SkipLinks = SkipLinksWrapper;