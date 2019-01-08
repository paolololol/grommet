"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledText = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../utils");

var _defaultProps = require("../../default-props");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var marginStyle = function marginStyle(props) {
  if (typeof props.margin === 'string') {
    var margin = props.theme.global.edgeSize[props.margin];
    return "\n      margin-top: ".concat(margin, ";\n      margin-bottom: ").concat(margin, ";\n      margin-left: ").concat(margin, ";\n      margin-right: ").concat(margin, ";\n    ");
  }

  if (props.margin.vertical) {
    return "\n      margin-top: ".concat(props.theme.global.edgeSize[props.margin.vertical], ";\n      margin-bottom: ").concat(props.theme.global.edgeSize[props.margin.vertical], ";\n    ");
  }

  if (props.margin.horizontal) {
    return "\n      margin-left: ".concat(props.theme.global.edgeSize[props.margin.horizontal], ";\n      margin-right: ").concat(props.theme.global.edgeSize[props.margin.horizontal], ";\n    ");
  }

  if (props.margin.top) {
    return "margin-top: ".concat(props.theme.global.edgeSize[props.margin.top], ";");
  }

  if (props.margin.bottom) {
    return "margin-bottom: ".concat(props.theme.global.edgeSize[props.margin.bottom], ";");
  }

  if (props.margin.left) {
    return "margin-left: ".concat(props.theme.global.edgeSize[props.margin.left], ";");
  }

  if (props.margin.right) {
    return "margin-right: ".concat(props.theme.global.edgeSize[props.margin.right], ";");
  }

  return '';
};

var sizeStyle = function sizeStyle(props) {
  var size = props.size || 'medium';
  var data = props.theme.text[size];

  if (data) {
    return (0, _styledComponents.css)(["font-size:", ";line-height:", ";"], data.size, data.height);
  }

  return (0, _styledComponents.css)(["font-size:", ";line-height:normal;"], size);
};

var TEXT_ALIGN_MAP = {
  center: 'center',
  end: 'right',
  start: 'left'
};
var textAlignStyle = (0, _styledComponents.css)(["text-align:", ";"], function (props) {
  return TEXT_ALIGN_MAP[props.textAlign];
});
var truncateStyle = "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n";
var colorStyle = (0, _styledComponents.css)(["color:", ";"], function (props) {
  return (0, _utils.normalizeColor)(props.colorProp, props.theme);
});
var weightStyle = (0, _styledComponents.css)(["font-weight:", ";"], function (props) {
  return props.weight;
});

var StyledText = _styledComponents.default.span.withConfig({
  displayName: "StyledText",
  componentId: "sc-1sadyjn-0"
})(["", " ", " ", " ", " ", " ", " ", " ", ""], _utils.genericStyles, function (props) {
  return sizeStyle(props);
}, function (props) {
  return props.margin && marginStyle(props);
}, function (props) {
  return props.textAlign && textAlignStyle;
}, function (props) {
  return props.truncate && truncateStyle;
}, function (props) {
  return props.colorProp && colorStyle;
}, function (props) {
  return props.weight && weightStyle;
}, function (props) {
  return props.theme.text && props.theme.text.extend;
});

exports.StyledText = StyledText;
StyledText.defaultProps = {};
Object.setPrototypeOf(StyledText.defaultProps, _defaultProps.defaultProps);