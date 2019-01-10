"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fixedSizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'];
var sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'full', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', 'flex', 'auto'];
var edgeSizes = ['small', 'medium', 'large', 'none'];

var doc = function doc(Grid) {
  var DocumentedGrid = (0, _reactDesc.describe)(Grid).availableAt((0, _utils.getAvailableAtBadge)('Grid')).description("A grid system for laying out content. To use, define the\nrows and columns, create area names for adjacent cells, and then\nplace Box components inside those areas using the gridArea property.\nSee https://css-tricks.com/snippets/css/complete-guide-grid/.\nThe availability of Grid can be tested via `Grid.available`. Use this\nto create fallback rendering for older browsers, like ie11.").usage("import { Grid } from 'grommet';\n<Grid />").intrinsicElement('div');
  DocumentedGrid.propTypes = _objectSpread({}, _utils.genericProps, {
    align: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description("How to align the individual items inside the grid when there is extra\nspace in the column axis.").defaultValue('stretch'),
    alignContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the column axis.'),
    areas: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.shape({
      name: _reactDesc.PropTypes.string,
      start: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number),
      end: _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)
    })).description('Area names and column,row coordinates.'),
    columns: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(sizes), _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)), _reactDesc.PropTypes.string])), _reactDesc.PropTypes.oneOf(fixedSizes), _reactDesc.PropTypes.shape({
      count: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['fit', 'fill']), _reactDesc.PropTypes.number]),
      size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(fixedSizes), _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description("Column sizes.\n      If an array value is an array, the inner array indicates the\n      minimum and maximum sizes for the column.\n      Specifying a single string will repeat multiple columns\n      of that size, as long as there is room for more.\n      Specifying an object allows indicating how the columns\n      stretch to fit the available space."),
    fill: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['horizontal', 'vertical']), _reactDesc.PropTypes.bool]).description('Whether the width and/or height should fill the container.'),
    gap: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.shape({
      row: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.string]),
      column: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(edgeSizes), _reactDesc.PropTypes.string])
    }), _reactDesc.PropTypes.string]).description('Gap sizes between rows and/or columns.'),
    justify: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'stretch']).description("How to align the individual items inside the grid when there is extra\nspace in the row axis.").defaultValue('stretch'),
    justifyContent: _reactDesc.PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'stretch']).description('How to align the contents along the row axis.'),
    rows: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(sizes), _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.oneOf(sizes)), _reactDesc.PropTypes.string])), _reactDesc.PropTypes.oneOf(fixedSizes), _reactDesc.PropTypes.string]).description("Row sizes.\n      If an array value is an array, the inner array indicates the\n      minimum and maximum sizes for the row.\n      Specifying a single string will cause automatically added rows to be\n      the specified size."),
    tag: _reactDesc.PropTypes.string.description("The DOM tag to use for the element. NOTE: This is deprecated in favor\nof indicating the DOM tag via the 'as' property."),
    as: _reactDesc.PropTypes.string.description('The DOM tag to use for the element.').defaultValue('div')
  });
  return DocumentedGrid;
};

exports.doc = doc;
var themeDoc = {
  'global.edgeSize': {
    description: 'The possible sizes for the grid gap.',
    type: 'object',
    defaultValue: "{\n      edgeSize: {\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n      },\n    }"
  },
  'global.size': {
    description: 'The possible sizes for row and column.',
    type: 'object',
    defaultValue: "{\n      xxsmall: '48px',\n      xsmall: '96px',\n      small: '192px',\n      medium: '384px',\n      large: '768px',\n      xlarge: '1152px',\n      xxlarge: '1536px',\n      full: '100%',\n    }"
  },
  'grid.extend': {
    description: 'Any additional style for the Grid.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;