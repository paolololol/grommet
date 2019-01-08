"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Header = require("./Header");

var _Footer = require("./Footer");

var _Body = require("./Body");

var _GroupedBody = require("./GroupedBody");

var _buildState = require("./buildState");

var _StyledDataTable = require("./StyledDataTable");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFiltering", function (property) {
      _this.setState({
        filtering: property
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFilter", function (property, value) {
      /* eslint-disable-next-line react/prop-types */
      var onSearch = _this.props.onSearch;
      var filters = _this.state.filters;

      var nextFilters = _objectSpread({}, filters);

      nextFilters[property] = value;

      _this.setState({
        filters: nextFilters
      }); // Let caller know about search, if interested


      if (onSearch) {
        onSearch(nextFilters);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSort", function (property) {
      return function () {
        var sort = _this.state.sort;
        var ascending = sort && property === sort.property ? !sort.ascending : true;

        _this.setState({
          sort: {
            property: property,
            ascending: ascending
          }
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggleGroup", function (groupValue) {
      return function () {
        var groupState = _this.state.groupState;

        var nextGroupState = _objectSpread({}, groupState);

        nextGroupState[groupValue] = _objectSpread({}, nextGroupState[groupValue], {
          expanded: !nextGroupState[groupValue].expanded
        });

        _this.setState({
          groupState: nextGroupState
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onToggleGroups", function () {
      var groupState = _this.state.groupState;
      var expanded = Object.keys(groupState).filter(function (k) {
        return !groupState[k].expanded;
      }).length === 0;
      var nextGroupState = {};
      Object.keys(groupState).forEach(function (k) {
        nextGroupState[k] = _objectSpread({}, groupState[k], {
          expanded: !expanded
        });
      });

      _this.setState({
        groupState: nextGroupState
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function (property) {
      return function (width) {
        var widths = _this.state.widths;

        var nextWidths = _objectSpread({}, widths || {});

        nextWidths[property] = width;

        _this.setState({
          widths: nextWidths
        });
      };
    });

    return _this;
  }

  _createClass(DataTable, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          propsData = _this$props.data,
          groupBy = _this$props.groupBy,
          onMore = _this$props.onMore,
          resizeable = _this$props.resizeable,
          size = _this$props.size,
          sortable = _this$props.sortable,
          rowClickHandler = _this$props.rowClickHandler,
          onSearch = _this$props.onSearch,
          rest = _objectWithoutProperties(_this$props, ["columns", "data", "groupBy", "onMore", "resizeable", "size", "sortable", "rowClickHandler", "onSearch"]);

      var _this$state = this.state,
          data = _this$state.data,
          filtering = _this$state.filtering,
          filters = _this$state.filters,
          footerValues = _this$state.footerValues,
          groups = _this$state.groups,
          groupState = _this$state.groupState,
          primaryProperty = _this$state.primaryProperty,
          showFooter = _this$state.showFooter,
          sort = _this$state.sort,
          widths = _this$state.widths;

      if (size && resizeable) {
        console.warn('DataTable cannot combine "size" and "resizeble".');
      }

      return _react.default.createElement(_StyledDataTable.StyledDataTable, rest, _react.default.createElement(_Header.Header, {
        columns: columns,
        filtering: filtering,
        filters: filters,
        groups: groups,
        groupState: groupState,
        size: size,
        sort: sort,
        widths: widths,
        onFiltering: this.onFiltering,
        onFilter: this.onFilter,
        onResize: resizeable ? this.onResize : undefined,
        onSort: sortable ? this.onSort : undefined,
        onToggle: this.onToggleGroups
      }), groups ? _react.default.createElement(_GroupedBody.GroupedBody, {
        columns: columns,
        groupBy: groupBy,
        groups: groups,
        groupState: groupState,
        primaryProperty: primaryProperty,
        onToggle: this.onToggleGroup
      }) : _react.default.createElement(_Body.Body, {
        columns: columns,
        data: data,
        onMore: onMore,
        primaryProperty: primaryProperty,
        rowClickHandler: rowClickHandler,
        size: size
      }), showFooter && _react.default.createElement(_Footer.Footer, {
        columns: columns,
        footerValues: footerValues,
        groups: groups,
        size: size
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return (0, _buildState.buildState)(nextProps, prevState);
    }
  }]);

  return DataTable;
}(_react.Component);

_defineProperty(DataTable, "defaultProps", {
  columns: [],
  data: []
});

var DataTableDoc;

if (process.env.NODE_ENV !== 'production') {
  DataTableDoc = require('./doc').doc(DataTable); // eslint-disable-line global-require
}

var DataTableWrapper = DataTableDoc || DataTable;
exports.DataTable = DataTableWrapper;