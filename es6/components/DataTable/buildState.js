"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildState = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sumReducer = function sumReducer(accumulated, next) {
  return accumulated + next;
};

var minReducer = function minReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.min(accumulated, next);
};

var maxReducer = function maxReducer(accumulated, next) {
  return accumulated === undefined ? next : Math.max(accumulated, next);
};

var reducers = {
  max: maxReducer,
  min: minReducer,
  sum: sumReducer
};

var aggregateColumn = function aggregateColumn(column, data) {
  var value;

  if (column.aggregate === 'avg') {
    value = data.map(function (d) {
      return d[column.property];
    }).reduce(sumReducer);
    value /= data.length;
  } else {
    value = data.map(function (d) {
      return d[column.property];
    }).reduce(reducers[column.aggregate], 0);
  }

  return value;
};

var findPrimary = function findPrimary(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var primaryProperty;
  columns.forEach(function (column) {
    // remember the first key property
    if (column.primary && !primaryProperty) {
      primaryProperty = column.property;
    }
  });

  if (!primaryProperty && columns.length > 0) {
    primaryProperty = columns[0].property;
  }

  return _objectSpread({}, nextState, {
    primaryProperty: primaryProperty
  });
};

var filter = function filter(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      onSearch = nextProps.onSearch;
  var data = nextState.data,
      filters = nextState.filters;
  var nextFilters;
  var regexps;
  columns.forEach(function (column) {
    if (column.search) {
      if (!nextFilters) {
        nextFilters = {};
        regexps = {};
      }

      nextFilters[column.property] = filters ? filters[column.property] || '' : ''; // don't do filtering if the caller has supplied onSearch

      if (nextFilters[column.property] && column.search && !onSearch) {
        regexps[column.property] = new RegExp(nextFilters[column.property], 'i');
      }
    }
  });
  var nextData = data;

  if (nextFilters) {
    nextData = data.filter(function (datum) {
      return !Object.keys(regexps).some(function (property) {
        return !regexps[property].test(datum[property]);
      });
    });
  }

  return _objectSpread({}, nextState, {
    filters: nextFilters,
    data: nextData
  });
};

var aggregate = function aggregate(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var data = nextState.data;
  var aggregateValues = {};
  columns.forEach(function (column) {
    if (column.aggregate) {
      aggregateValues[column.property] = aggregateColumn(column, data);
    }
  });
  return _objectSpread({}, nextState, {
    aggregateValues: aggregateValues
  });
};

var buildFooterValues = function buildFooterValues(nextProps, prevState, nextState) {
  var columns = nextProps.columns;
  var aggregateValues = nextState.aggregateValues;
  var showFooter;
  var footerValues = {};
  columns.forEach(function (column) {
    if (column.footer) {
      showFooter = true;

      if (typeof column.footer === 'string') {
        footerValues[column.property] = column.footer;
      } else if (column.footer.aggregate) {
        footerValues[column.property] = aggregateValues[column.property];
      }
    }
  });
  return _objectSpread({}, nextState, {
    footerValues: footerValues,
    showFooter: showFooter
  });
};

var sortData = function sortData(nextProps, prevState, nextState) {
  var sort = prevState.sort;
  var data = nextState.data;
  var nextData = data;

  if (sort) {
    var property = sort.property,
        ascending = sort.ascending;
    nextData = _toConsumableArray(data);
    var before = ascending ? 1 : -1;
    var after = ascending ? -1 : 1;
    nextData.sort(function (d1, d2) {
      if (d1[property] > d2[property]) return before;
      if (d1[property] < d2[property]) return after;
      return 0;
    });
  }

  return _objectSpread({}, nextState, {
    data: nextData
  });
};

var groupData = function groupData(nextProps, prevState, nextState) {
  var columns = nextProps.columns,
      groupBy = nextProps.groupBy;
  var data = nextState.data;
  var groups;
  var groupState;

  if (groupBy) {
    groups = [];
    groupState = {};
    var groupMap = {};
    data.forEach(function (datum) {
      var groupValue = datum[groupBy];

      if (!groupMap[groupValue]) {
        var group = {
          data: [],
          datum: {},
          key: groupValue
        };
        group.datum[groupBy] = groupValue;
        groups.push(group);
        groupState[groupValue] = {
          expanded: prevState.groupState && prevState.groupState[groupValue] ? prevState.groupState[groupValue].expanded : false
        };
        groupMap[groupValue] = group;
      }

      groupMap[groupValue].data.push(datum);
    }); // calculate any aggregates

    columns.forEach(function (column) {
      if (column.aggregate) {
        groups.forEach(function (group) {
          group.datum[column.property] = aggregateColumn(column, group.data); // eslint-disable-line
        });
      }
    });
  }

  return _objectSpread({}, nextState, {
    groups: groups,
    groupState: groupState
  });
};

var buildState = function buildState(nextProps, prevState) {
  var data = nextProps.data;
  var filters = prevState.filters,
      sort = prevState.sort,
      widths = prevState.widths;
  var nextState = {
    data: data,
    filters: filters,
    sort: sort,
    widths: widths
  };
  nextState = findPrimary(nextProps, prevState, nextState);
  nextState = filter(nextProps, prevState, nextState);
  nextState = aggregate(nextProps, prevState, nextState);
  nextState = buildFooterValues(nextProps, prevState, nextState);
  nextState = sortData(nextProps, prevState, nextState);
  nextState = groupData(nextProps, prevState, nextState);
  return nextState;
};

exports.buildState = buildState;