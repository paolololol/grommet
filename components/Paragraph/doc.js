"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeDoc = exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(Paragraph) {
  var DocumentedParagraph = (0, _reactDesc.describe)(Paragraph).availableAt((0, _utils.getAvailableAtBadge)('Paragraph')).description('A paragraph of text.').usage("import { Paragraph } from 'grommet';\n<Paragraph />").intrinsicElement('p');
  DocumentedParagraph.propTypes = _objectSpread({}, _utils.genericProps, {
    color: _utils.colorPropType.description('A color identifier to use for the text color.'),
    responsive: _reactDesc.PropTypes.bool.description("Whether margin should be scaled for mobile environments.").defaultValue(true),
    size: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']), _reactDesc.PropTypes.string]).description('The size of the Paragraph text.').defaultValue('medium'),
    textAlign: _reactDesc.PropTypes.oneOf(['start', 'center', 'end']).description('How to align the text inside the paragraph.').defaultValue('start')
  });
  return DocumentedParagraph;
};

exports.doc = doc;
var themeDoc = {
  'global.colors.text': {
    description: 'The text color used inside the Paragraph.',
    type: 'string | { dark: string, light: string }',
    defaultValue: "{ dark: '#f8f8f8', light: '#444444' }"
  },
  'global.edgeSize': {
    description: 'The possible sizes for margin.',
    type: 'object',
    defaultValue: "{\n        none: '0px',\n        hair: '1px',\n        xxsmall: '3px',\n        xsmall: '6px',\n        small: '12px',\n        medium: '24px',\n        large: '48px',\n        xlarge: '96px',\n        responsiveBreakpoint: 'small',\n    }"
  },
  paragraph: {
    description: "The possible sizes of the paragraph in terms of its max-width, font-size and line-height.",
    type: 'object',
    defaultValue: "{\n      small: {\n        size: '14px',\n        height: '20px',\n        maxWidth: '336px',\n       },\n      medium: {\n        size: '18px',\n        height: '24px',\n        maxWidth: '432px',\n      },\n      large: {\n        size: '22px',\n        height: '28px',\n        maxWidth: '528px',\n      },\n      xlarge: {\n        size: '26px',\n        height: '32px',\n        maxWidth: '624px',\n      },\n      xxlarge: {\n        size: '34px',\n        height: '40px',\n        maxWidth: '816px',\n      },\n    }"
  },
  'paragraph.textAlign': {
    description: "How to align the text inside the Paragraph.",
    type: 'string',
    defaultValue: 'start'
  },
  'paragraph.extend': {
    description: 'Any additional style for the Paragraph.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;