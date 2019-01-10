"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(RoutedAnchor) {
  var DocumentedRoutedAnchor = (0, _reactDesc.describe)(RoutedAnchor).availableAt((0, _utils.getAvailableAtBadge)('RoutedAnchor')).description('An Anchor with support for React Router.').usage("import { RoutedAnchor } from 'grommet';\n<RoutedAnchor primary={true} path='/documentation' />").intrinsicElement('a');
  DocumentedRoutedAnchor.propTypes = _objectSpread({}, _utils.ROUTER_PROPS);
  return DocumentedRoutedAnchor;
};

exports.doc = doc;