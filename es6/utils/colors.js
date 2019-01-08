"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRGBA = exports.colorIsDark = exports.normalizeColor = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var normalizeColor = function normalizeColor(color, theme, required) {
  var colorSpec = theme.global.colors[color] || color; // If the color has a light or dark object, use that

  var result = colorSpec;

  if (colorSpec) {
    if (theme.dark && colorSpec.dark) {
      result = colorSpec.dark;
    } else if (!theme.dark && colorSpec.light) {
      result = colorSpec.light;
    }
  } // allow one level of indirection in color names


  if (result && theme.global.colors[result]) {
    result = normalizeColor(result, theme);
  }

  return required && result === color ? 'inherit' : result;
};

exports.normalizeColor = normalizeColor;

var parseHexToRGB = function parseHexToRGB(color) {
  return color.length === 4 ? color.match(/[A-Za-z0-9]{1}/g).map(function (v) {
    return parseInt(v, 16);
  }) : // https://stackoverflow.com/a/42429333
  color.match(/[A-Za-z0-9]{2}/g).map(function (v) {
    return parseInt(v, 16);
  });
};

var canExtractRGBArray = function canExtractRGBArray(color) {
  return /^#/.test(color) || /^rgb/.test(color);
};

var getRGBArray = function getRGBArray(color) {
  if (/^#/.test(color)) {
    return parseHexToRGB(color);
  }

  if (/^rgb/.test(color)) {
    return color.match(/rgba?\((\s?[0-9]*\s?),(\s?[0-9]*\s?),(\s?[0-9]*\s?).*?\)/).splice(1);
  }

  return color;
};

var colorIsDark = function colorIsDark(color) {
  var _getRGBArray = getRGBArray(color),
      _getRGBArray2 = _slicedToArray(_getRGBArray, 3),
      red = _getRGBArray2[0],
      green = _getRGBArray2[1],
      blue = _getRGBArray2[2]; // http://www.had2know.com/technology/
  //  color-contrast-calculator-web-design.html


  var brightness = (299 * red + 587 * green + 114 * blue) / 1000;
  return brightness < 125;
};

exports.colorIsDark = colorIsDark;

var getRGBA = function getRGBA(color, opacity) {
  if (color && canExtractRGBArray(color)) {
    var _getRGBArray3 = getRGBArray(color),
        _getRGBArray4 = _slicedToArray(_getRGBArray3, 3),
        red = _getRGBArray4[0],
        green = _getRGBArray4[1],
        blue = _getRGBArray4[2];

    return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(opacity || 1, ")");
  }

  return undefined;
};

exports.getRGBA = getRGBA;