"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Attraction = require("grommet-icons/es6/icons/Attraction");

var _Car = require("grommet-icons/es6/icons/Car");

var _TreeOption = require("grommet-icons/es6/icons/TreeOption");

var _grommet = require("grommet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleCarousel = function SimpleCarousel() {
  return _react.default.createElement(_grommet.Grommet, null, _react.default.createElement(_grommet.Box, {
    align: "center",
    pad: "large"
  }, _react.default.createElement(_grommet.Carousel, null, _react.default.createElement(_grommet.Box, {
    pad: "xlarge",
    background: "accent-1"
  }, _react.default.createElement(_Attraction.Attraction, {
    size: "xlarge"
  })), _react.default.createElement(_grommet.Box, {
    pad: "xlarge",
    background: "accent-2"
  }, _react.default.createElement(_TreeOption.TreeOption, {
    size: "xlarge"
  })), _react.default.createElement(_grommet.Box, {
    pad: "xlarge",
    background: "accent-3"
  }, _react.default.createElement(_Car.Car, {
    size: "xlarge"
  })))));
};

(0, _react2.storiesOf)('Carousel', module).add('Simple Carousel', function () {
  return _react.default.createElement(SimpleCarousel, null);
});