"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateDateRange = exports.withinDates = exports.betweenDates = exports.daysApart = exports.sameDayOrBefore = exports.sameDayOrAfter = exports.sameDay = exports.endOfMonth = exports.startOfMonth = exports.subtractMonths = exports.addMonths = exports.subtractDays = exports.addDays = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// Utility functions for the Calendar.
// Just what's needed to avoid having to include a dependency like momentjs.
var DAY_MILLISECONDS = 24 * 60 * 60 * 1000;

var addDays = function addDays(date, days) {
  var result = new Date(date.getTime() + DAY_MILLISECONDS * days); // Deal with crossing the daylight savings time boundary,
  // where adding a day's worth when the time is midnight results in
  // being a day off.

  var hourDelta = result.getHours() - date.getHours(); // At this point, hourDelta is typically 1 or 23, depending on which
  // side of the switch we are on. Convert so that hourDelta is either +1 or -1.

  if (hourDelta > 12) {
    hourDelta -= 24;
  }

  result.setHours(result.getHours() - hourDelta);
  return result;
};

exports.addDays = addDays;

var subtractDays = function subtractDays(date, days) {
  return addDays(date, -days);
};

exports.subtractDays = subtractDays;

var addMonths = function addMonths(date, months) {
  var result = new Date(date);
  var years = Math.floor((date.getMonth() + months) / 12);
  result.setFullYear(date.getFullYear() + years);
  var targetMonth = (date.getMonth() + months) % 12;
  result.setMonth(targetMonth < 0 ? 12 + targetMonth : targetMonth);
  return result;
};

exports.addMonths = addMonths;

var subtractMonths = function subtractMonths(date, months) {
  return addMonths(date, -months);
};

exports.subtractMonths = subtractMonths;

var startOfMonth = function startOfMonth(date) {
  var result = new Date(date);
  result.setDate(1);
  return result;
};

exports.startOfMonth = startOfMonth;

var endOfMonth = function endOfMonth(date) {
  var result = addMonths(date, 1);
  result.setDate(0);
  return result;
};

exports.endOfMonth = endOfMonth;

var sameDay = function sameDay(date1, date2) {
  return date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
};

exports.sameDay = sameDay;

var sameDayOrAfter = function sameDayOrAfter(date1, date2) {
  return date1.getFullYear() > date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() > date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() >= date2.getDate());
};

exports.sameDayOrAfter = sameDayOrAfter;

var sameDayOrBefore = function sameDayOrBefore(date1, date2) {
  return date1.getFullYear() < date2.getFullYear() || date1.getFullYear() === date2.getFullYear() && (date1.getMonth() < date2.getMonth() || date1.getMonth() === date2.getMonth() && date1.getDate() <= date2.getDate());
};

exports.sameDayOrBefore = sameDayOrBefore;

var daysApart = function daysApart(date1, date2) {
  return Math.floor((date1.getTime() - date2.getTime()) / DAY_MILLISECONDS);
}; // betweenDates takes and array of two elements and checks if the
// supplied date lies between them, inclusive.
// returns 2 if exact match to one end, 1 if between, undefined otherwise


exports.daysApart = daysApart;

var betweenDates = function betweenDates(date, dates) {
  var result;

  if (dates) {
    var _dates$map = dates.map(function (d) {
      return new Date(d);
    }),
        _dates$map2 = _slicedToArray(_dates$map, 2),
        from = _dates$map2[0],
        to = _dates$map2[1];

    if (sameDay(date, from) || sameDay(date, to)) {
      result = 2;
    } else if (sameDayOrAfter(date, from) && sameDayOrBefore(date, to)) {
      result = 1;
    }
  } else {
    result = 1;
  }

  return result;
}; // withinDates takes and array of string dates or 2 element arrays and
// checks whether the supplied date matches any string or is between
// any dates in arrays.
// returns 2 if exact match, 1 if between, undefined otherwise


exports.betweenDates = betweenDates;

var withinDates = function withinDates(date, dates) {
  var result;

  if (dates) {
    if (Array.isArray(dates)) {
      dates.some(function (d) {
        if (typeof d === 'string') {
          if (sameDay(date, new Date(d))) {
            result = 2;
          }
        } else {
          result = betweenDates(date, d);
        }

        return result;
      });
    } else if (sameDay(date, new Date(dates))) {
      result = 2;
    }
  }

  return result;
};

exports.withinDates = withinDates;

var updateDateRange = function updateDateRange(selectedDate, _ref) {
  var date = _ref.date,
      dates = _ref.dates,
      previousSelectedDate = _ref.previousSelectedDate;
  var result = {
    previousSelectedDate: selectedDate
  };

  if (!dates) {
    if (!date) {
      result.date = selectedDate;
    } else {
      var priorDate = new Date(date);
      var nextDate = new Date(selectedDate);

      if (priorDate.getTime() < nextDate.getTime()) {
        result.date = undefined;
        result.dates = [[date, selectedDate]];
      } else if (priorDate.getTime() > nextDate.getTime()) {
        result.date = undefined;
        result.dates = [[selectedDate, date]];
      } else {
        result.date = undefined;
      }
    }
  } else {
    var priorDates = dates[0].map(function (d) {
      return new Date(d);
    });
    var previousDate = new Date(previousSelectedDate);

    var _nextDate = new Date(selectedDate);

    if (_nextDate.getTime() === priorDates[0].getTime()) {
      result.dates = undefined;

      var _dates = _slicedToArray(dates, 1);

      var _dates$ = _slicedToArray(_dates[0], 2);

      result.date = _dates$[1];
    } else if (_nextDate.getTime() === priorDates[1].getTime()) {
      result.dates = undefined;

      var _dates2 = _slicedToArray(dates, 1);

      var _dates2$ = _slicedToArray(_dates2[0], 1);

      result.date = _dates2$[0];
    } else if (_nextDate.getTime() < previousDate.getTime()) {
      if (_nextDate.getTime() < priorDates[0].getTime()) {
        result.dates = [[selectedDate, dates[0][1]]];
      } else if (_nextDate.getTime() > priorDates[0].getTime()) {
        result.dates = [[dates[0][0], selectedDate]];
      }
    } else if (_nextDate.getTime() > previousDate.getTime()) {
      if (_nextDate.getTime() > priorDates[1].getTime()) {
        result.dates = [[dates[0][0], selectedDate]];
      } else if (_nextDate.getTime() < priorDates[1].getTime()) {
        result.dates = [[selectedDate, dates[0][1]]];
      }
    }
  }

  return result;
};

exports.updateDateRange = updateDateRange;