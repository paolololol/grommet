"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfiniteScroll = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utils = require("../../utils");

var _Box = require("../Box");

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

var InfiniteScroll =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(InfiniteScroll, _PureComponent);

  function InfiniteScroll() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InfiniteScroll);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfiniteScroll)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "initialScroll", false);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "aboveMarkerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "belowMarkerRef", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "addScrollListener", function () {
      var pageHeight = _this.state.pageHeight;

      if (pageHeight && _this.belowMarkerRef.current && !_this.scrollParents) {
        _this.scrollParents = (0, _utils.findScrollParents)(_this.belowMarkerRef.current);

        _this.scrollParents.forEach(function (scrollParent) {
          return scrollParent.addEventListener('scroll', _this.onScroll);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeScrollListener", function () {
      if (_this.scrollParents) {
        _this.scrollParents.forEach(function (scrollParent) {
          return scrollParent.removeEventListener('scroll', _this.place);
        });

        _this.scrollParents = undefined;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "scrollShow", function () {
      var show = _this.props.show;

      if (show && !_this.initialScroll && _this.showRef) {
        _this.initialScroll = true; // on initial render, scroll to any 'show'

        _this.showRef.scrollIntoView();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPageHeight", function () {
      var pageHeight = _this.state.pageHeight;

      if (_this.firstPageItemRef && _this.lastPageItemRef && !pageHeight) {
        var beginRect = _this.firstPageItemRef.getBoundingClientRect();

        var endRect = _this.lastPageItemRef.getBoundingClientRect();

        var nextPageHeight = endRect.y + endRect.height - beginRect.y; // In case the pageHeight is smaller than the visible area,
        // we call onScroll to set the page boundaries appropriately.

        _this.setState({
          pageHeight: nextPageHeight
        }, _this.onScroll);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", function () {
      var _this$props = _this.props,
          onMore = _this$props.onMore,
          replace = _this$props.replace;
      var _this$state = _this.state,
          beginPage = _this$state.beginPage,
          endPage = _this$state.endPage,
          lastPage = _this$state.lastPage,
          pageHeight = _this$state.pageHeight;

      if (_this.scrollParents && _this.scrollParents[0] && pageHeight) {
        var scrollParent = _this.scrollParents[0]; // Determine the window into the first scroll parent

        var top;
        var height;

        if (scrollParent === document) {
          top = document.documentElement.scrollTop || document.body.scrollTop;
          height = window.innerHeight;
        } else {
          top = scrollParent.scrollTop;
          var rect = scrollParent.getBoundingClientRect();
          height = rect.height;
        } // Figure out which pages we should make visible based on the scroll
        // window.


        var offset = height / 4;
        var nextBeginPage = replace ? Math.min(lastPage, Math.max(0, Math.floor(Math.max(0, top - offset) / pageHeight))) : 0;
        var nextEndPage = Math.min(lastPage, Math.max(!replace && endPage || 0, Math.floor((top + height + offset) / pageHeight)));

        if (nextBeginPage !== beginPage || nextEndPage !== endPage) {
          _this.setState({
            beginPage: nextBeginPage,
            endPage: nextEndPage
          }, function () {
            if (onMore && nextEndPage === lastPage) {
              onMore();
            }
          });
        }
      }
    });

    return _this;
  }

  _createClass(InfiniteScroll, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // ride out any animation, 100ms was chosen empirically
      clearTimeout(this.animationDelayTimer);
      this.animationDelayTimer = setTimeout(function () {
        _this2.setPageHeight();

        _this2.addScrollListener();

        _this2.scrollShow();
      }, 100);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.setPageHeight();
      this.removeScrollListener();
      this.addScrollListener();
      this.scrollShow();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeScrollListener();
      clearTimeout(this.animationDelayTimer);
      clearTimeout(this.scrollTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          items = _this$props2.items,
          onMore = _this$props2.onMore,
          renderMarker = _this$props2.renderMarker,
          replace = _this$props2.replace,
          show = _this$props2.show,
          step = _this$props2.step;
      var _this$state2 = this.state,
          beginPage = _this$state2.beginPage,
          endPage = _this$state2.endPage,
          lastPage = _this$state2.lastPage,
          pageHeight = _this$state2.pageHeight;
      var firstIndex = beginPage * step;
      var lastIndex = (endPage + 1) * step - 1;
      var result = [];

      if (replace && pageHeight && firstIndex) {
        var marker = _react.default.createElement(_Box.Box, {
          key: "above",
          ref: this.aboveMarkerRef,
          flex: false,
          height: "".concat(beginPage * pageHeight, "px")
        });

        if (renderMarker) {
          // need to give it a key
          marker = _react.default.cloneElement(renderMarker(marker), {
            key: 'above'
          });
        }

        result.push(marker);
      }

      items.slice(firstIndex, lastIndex + 1).forEach(function (item, index) {
        var itemsIndex = firstIndex + index;
        var child = children(item, itemsIndex);

        if (!pageHeight && itemsIndex === 0) {
          var _child = child,
              _ref = _child.ref;
          child = _react.default.cloneElement(child, {
            ref: function ref(node) {
              _this3.firstPageItemRef = node;

              if (typeof _ref === 'function') {
                _ref(node);
              }
            }
          });
        } else if (!pageHeight && itemsIndex === step - 1) {
          var _child2 = child,
              _ref2 = _child2.ref;
          child = _react.default.cloneElement(child, {
            ref: function ref(node) {
              _this3.lastPageItemRef = node;

              if (typeof _ref2 === 'function') {
                _ref2(node);
              }
            }
          });
        }

        if (show && show === itemsIndex) {
          var _child3 = child,
              _ref3 = _child3.ref;
          child = _react.default.cloneElement(child, {
            key: 'show',
            ref: function ref(node) {
              _this3.showRef = node;

              if (typeof _ref3 === 'function') {
                _ref3(node);
              }
            }
          });
        }

        result.push(child);
      });

      if (endPage < lastPage || replace || onMore) {
        var _marker = _react.default.createElement(_Box.Box, {
          key: "below",
          ref: this.belowMarkerRef,
          flex: false,
          height: "".concat(replace ? (lastPage - endPage) * pageHeight : 0, "px")
        });

        if (renderMarker) {
          // need to give it a key
          _marker = _react.default.cloneElement(renderMarker(_marker), {
            key: 'below'
          });
        }

        result.push(_marker);
      }

      return result;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var items = nextProps.items,
          show = nextProps.show,
          step = nextProps.step;
      var lastPage = Math.ceil(items.length / step) - 1;

      if (prevState.beginPage === undefined || show && show >= step * (prevState.lastPage + 1) || lastPage !== prevState.lastPage) {
        var endPage = prevState.endPage || 0;

        if (show && show >= step * (endPage + 1)) {
          endPage = Math.floor((show + step) / step) - 1;
        }

        return {
          beginPage: 0,
          endPage: endPage,
          lastPage: lastPage,
          pageHeight: undefined
        };
      }

      return null;
    }
  }]);

  return InfiniteScroll;
}(_react.PureComponent);

_defineProperty(InfiniteScroll, "defaultProps", {
  items: [],
  step: 50
});

var InfiniteScrollDoc;

if (process.env.NODE_ENV !== 'production') {
  InfiniteScrollDoc = require('./doc').doc(InfiniteScroll); // eslint-disable-line global-require
}

var InfiniteScrollWrapper = InfiniteScrollDoc || InfiniteScroll;
exports.InfiniteScroll = InfiniteScrollWrapper;