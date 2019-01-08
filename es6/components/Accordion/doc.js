"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.doc = void 0;

var _reactDesc = require("react-desc");

var _utils = require("../../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var doc = function doc(Accordion) {
  var DocumentedAccordion = (0, _reactDesc.describe)(Accordion).availableAt((0, _utils.getAvailableAtBadge)('Accordion')).description('An accordion containing collapsible panels.').usage("import { Accordion, AccordionPanel } from 'grommet';\n<Accordion>\n  <AccordionPanel label='Panel 1'>...</AccordionPanel>\n  <AccordionPanel label='Panek 2'>...</AccordionPanel>\n</Accordion>");
  DocumentedAccordion.propTypes = _objectSpread({}, _utils.genericProps, {
    activeIndex: _reactDesc.PropTypes.oneOfType([_reactDesc.PropTypes.number, _reactDesc.PropTypes.arrayOf(_reactDesc.PropTypes.number)]).description("Active panel index. If specified, Accordion will be a controlled component. This means that future\npanel changes will not work unless you subscribe to onActive function and update activeIndex\naccordingly.").defaultValue(0),
    animate: _reactDesc.PropTypes.bool.description('Transition content in & out with a slide down animation.').defaultValue(true),
    children: _reactDesc.PropTypes.node.description('Array of AccordionPanels.'),
    onActive: _reactDesc.PropTypes.func.description("Function that will be called when the active index changes.\nIt will always send an array with currently active panel indexes."),
    multiple: _reactDesc.PropTypes.bool.description('Allow multiple panels to be opened at once.').defaultValue(false),
    messages: _reactDesc.PropTypes.shape({
      tabContents: _reactDesc.PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    })
  });
  return DocumentedAccordion;
};

exports.doc = doc;