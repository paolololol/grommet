"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = exports.themeDoc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var themeDoc = {
  'image.extend': {
    description: 'Any additional style for the Image.',
    type: 'string | (props) => {}',
    defaultValue: undefined
  }
};
exports.themeDoc = themeDoc;

var doc = function doc(Image) {
  var DocumentedImage = (0, _reactDesc.describe)(Image).availableAt((0, _utils.getAvailableAtBadge)('Image')).description('An image.').usage("import { Image } from 'grommet';\n<Image/>").intrinsicElement('img');
  DocumentedImage.propTypes = _objectSpread({}, _utils.genericProps, {
    fit: _reactDesc.PropTypes.oneOf(['cover', 'contain']).description('How the image fills its container.')
  });
  return DocumentedImage;
};

exports.doc = doc;