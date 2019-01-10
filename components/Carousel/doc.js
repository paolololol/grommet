"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(Carousel) {
  var DocumentedCarousel = (0, _reactDesc.describe)(Carousel).availableAt((0, _utils.getAvailableAtBadge)('Carousel')).description("A carousel that cycles through children. Child components\n      would typically be Images. It is the caller's responsibility to ensure\n      that all children are the same size.").usage("import { Carousel } from 'grommet';\n<Carousel />").intrinsicElement('div');
  DocumentedCarousel.propTypes = _objectSpread({}, _utils.genericProps, {
    fill: _reactDesc.PropTypes.bool.description("Whether to expand to fill\n      all of the available width and height in the parent container."),
    play: _reactDesc.PropTypes.number.description("If specified, the number of\n      milliseconds between automatically transitioning to the next child. It\n      will loop through all children indefinitely.")
  });
  return DocumentedCarousel;
};

exports.doc = doc;
var themeDoc = {
  'carousel.icons.next': {
    description: 'The icon to use for the next image navigation control.',
    type: 'element',
    defaultValue: '<Next />'
  },
  'carousel.icons.previous': {
    description: 'The icon to use for the previous image navigation control.',
    type: 'element',
    defaultValue: '<Previous />'
  },
  'carousel.icons.current': {
    description: 'The icon to use on the middle navigation control. One icon per carousel image.',
    type: 'element',
    defaultValue: '<Next />'
  },
  'carousel.icons.color': {
    description: 'The color used for Carousel icons.',
    type: 'string',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;