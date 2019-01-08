"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.grommet = void 0;

var _styledComponents = require("styled-components");

var _utils = require("../utils");

var grommet = (0, _utils.deepFreeze)({
  global: {
    colors: {
      background: '#ffffff',
      tableHover: 'blue'
    },
    font: {
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",  "Helvetica Neue", Arial, sans-serif,  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
    }
  },
  button: {
    extend: (0, _styledComponents.css)(["", ";"], function (props) {
      return !props.plain && 'font-weight: bold;';
    })
  }
});
exports.grommet = grommet;