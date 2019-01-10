"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base = exports.generate = void 0;

var _polished = require("polished");

var _styledComponents = require("styled-components");

var _Actions = require("grommet-icons/es6/icons/Actions");

var _ClosedCaption = require("grommet-icons/es6/icons/ClosedCaption");

var _Expand = require("grommet-icons/es6/icons/Expand");

var _FormDown = require("grommet-icons/es6/icons/FormDown");

var _FormNext = require("grommet-icons/es6/icons/FormNext");

var _FormPrevious = require("grommet-icons/es6/icons/FormPrevious");

var _FormUp = require("grommet-icons/es6/icons/FormUp");

var _Next = require("grommet-icons/es6/icons/Next");

var _Pause = require("grommet-icons/es6/icons/Pause");

var _Play = require("grommet-icons/es6/icons/Play");

var _Previous = require("grommet-icons/es6/icons/Previous");

var _Subtract = require("grommet-icons/es6/icons/Subtract");

var _Volume = require("grommet-icons/es6/icons/Volume");

var _VolumeLow = require("grommet-icons/es6/icons/VolumeLow");

var _base = require("grommet-icons/es6/themes/base");

var _utils = require("../utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var brandColor = '#7D4CDB';
var accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
var neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
var statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC'
};
var darkColors = ['#333333', '#555555', '#777777', '#999999', '#999999', '#999999'];
var lightColors = ['#F8F8F8', '#F2F2F2', '#EDEDED', '#DADADA', '#DADADA', '#DADADA'];
var focusColor = accentColors[0];
var colors = {
  active: (0, _polished.rgba)(221, 221, 221, 0.5),
  black: '#000000',
  border: {
    dark: (0, _polished.rgba)(255, 255, 255, 0.33),
    light: (0, _polished.rgba)(0, 0, 0, 0.33)
  },
  brand: brandColor,
  control: {
    dark: 'accent-1',
    light: 'brand'
  },
  focus: focusColor,
  placeholder: '#AAAAAA',
  selected: 'brand',
  text: {
    dark: '#f8f8f8',
    light: '#444444'
  },
  icon: {
    dark: '#f8f8f8',
    light: '#666666'
  },
  white: '#FFFFFF'
};

var colorArray = function colorArray(array, prefix) {
  return array.forEach(function (color, index) {
    colors["".concat(prefix, "-").concat(index + 1)] = color;
  });
};

colorArray(accentColors, 'accent');
colorArray(darkColors, 'dark');
colorArray(lightColors, 'light');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach(function (color) {
  colors["status-".concat(color)] = statusColors[color];
});

var generate = function generate() {
  var baseSpacing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
  var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  // 24
  var baseFontSize = baseSpacing * 0.75; // 18

  var fontScale = baseSpacing / scale; // 4

  var fontSizing = function fontSizing(factor) {
    return {
      size: "".concat(baseFontSize + factor * fontScale, "px"),
      height: "".concat(baseSpacing + factor * fontScale, "px"),
      // maxWidth chosen to be ~50 characters wide
      // see: https://ux.stackexchange.com/a/34125
      maxWidth: "".concat(baseSpacing * (baseFontSize + factor * fontScale), "px")
    };
  };

  var borderWidth = 2;
  var result = (0, _utils.deepMerge)(_base.base, {
    global: {
      animation: {
        duration: '1s',
        jiggle: {
          duration: '0.1s'
        }
      },
      borderSize: {
        xsmall: '1px',
        small: '2px',
        medium: "".concat(baseSpacing / 6, "px"),
        // 4
        large: "".concat(baseSpacing / 2, "px"),
        // 12
        xlarge: "".concat(baseSpacing, "px") // 24

      },
      breakpoints: {
        small: {
          value: baseSpacing * 32,
          // 768
          borderSize: {
            xsmall: '1px',
            small: '2px',
            medium: "".concat(baseSpacing / 6, "px"),
            // 4
            large: "".concat(baseSpacing / 4, "px"),
            // 6
            xlarge: "".concat(baseSpacing / 2, "px") // 12

          },
          edgeSize: {
            none: '0px',
            hair: '1px',
            // for Chart
            xxsmall: '2px',
            xsmall: "".concat(baseSpacing / 8, "px"),
            // 3
            small: "".concat(baseSpacing / 4, "px"),
            // 6
            medium: "".concat(baseSpacing / 2, "px"),
            // 12
            large: "".concat(baseSpacing, "px"),
            // 24
            xlarge: "".concat(baseSpacing * 2, "px") // 48

          },
          size: {
            xxsmall: "".concat(baseSpacing, "px"),
            // 24
            xsmall: "".concat(baseSpacing * 2, "px"),
            // 48
            small: "".concat(baseSpacing * 4, "px"),
            // 96
            medium: "".concat(baseSpacing * 8, "px"),
            // 192
            large: "".concat(baseSpacing * 16, "px"),
            // 384
            xlarge: "".concat(baseSpacing * 32, "px"),
            // 768
            full: '100%'
          }
        },
        medium: {
          value: baseSpacing * 64 // 1536

        },
        large: {} // anything above 'medium'

      },
      // Breakpoints used at Server Side Rendering for the initial rendering
      // These values correspond to the theme breakpoints
      deviceBreakpoints: {
        phone: 'small',
        tablet: 'medium',
        computer: 'large'
      },
      colors: colors,
      control: {
        border: {
          width: '1px',
          radius: '4px',
          color: 'border'
        }
      },
      debounceDelay: 300,
      // The time to wait after the user stopped typing, measured in ms.
      drop: {
        background: '#ffffff',
        border: {
          width: '0px',
          radius: '0px'
        },
        shadowSize: 'small',
        zIndex: '20'
      },
      edgeSize: {
        none: '0px',
        hair: '1px',
        // for Chart
        xxsmall: "".concat(baseSpacing / 8, "px"),
        // 3
        xsmall: "".concat(baseSpacing / 4, "px"),
        // 6
        small: "".concat(baseSpacing / 2, "px"),
        // 12
        medium: "".concat(baseSpacing, "px"),
        // 24
        large: "".concat(baseSpacing * 2, "px"),
        // 48
        xlarge: "".concat(baseSpacing * 4, "px"),
        // 96
        responsiveBreakpoint: 'small'
      },
      elevation: {
        light: {
          none: 'none',
          xsmall: '0px 1px 2px rgba(0, 0, 0, 0.20)',
          small: '0px 2px 4px rgba(0, 0, 0, 0.20)',
          medium: '0px 4px 8px rgba(0, 0, 0, 0.20)',
          large: '0px 8px 16px rgba(0, 0, 0, 0.20)',
          xlarge: '0px 12px 24px rgba(0, 0, 0, 0.20)'
        },
        dark: {
          none: 'none',
          xsmall: '0px 2px 2px rgba(255, 255, 255, 0.40)',
          small: '0px 4px 4px rgba(255, 255, 255, 0.40)',
          medium: '0px 6px 8px rgba(255, 255, 255, 0.40)',
          large: '0px 8px 16px rgba(255, 255, 255, 0.40)',
          xlarge: '0px 12px 24px rgba(255, 255, 255, 0.40)'
        }
      },
      focus: {
        border: {
          color: 'focus'
        }
      },
      font: _objectSpread({}, fontSizing(0)),
      hover: {
        background: {
          dark: {
            color: 'active',
            opacity: 'medium'
          },
          light: {
            color: 'active',
            opacity: 'medium'
          }
        },
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      input: {
        padding: "".concat(baseSpacing / 2, "px"),
        weight: 600
      },
      opacity: {
        strong: 0.8,
        medium: 0.4,
        weak: 0.1
      },
      selected: {
        background: 'selected',
        color: 'white'
      },
      spacing: "".concat(baseSpacing, "px"),
      size: {
        xxsmall: "".concat(baseSpacing * 2, "px"),
        // 48
        xsmall: "".concat(baseSpacing * 4, "px"),
        // 96
        small: "".concat(baseSpacing * 8, "px"),
        // 192
        medium: "".concat(baseSpacing * 16, "px"),
        // 384
        large: "".concat(baseSpacing * 32, "px"),
        // 768
        xlarge: "".concat(baseSpacing * 48, "px"),
        // 1152
        xxlarge: "".concat(baseSpacing * 64, "px"),
        // 1536
        full: '100%'
      }
    },
    accordion: {
      icons: {
        collapse: _FormUp.FormUp,
        expand: _FormDown.FormDown // color: { dark: undefined, light: undefined },

      }
    },
    anchor: {
      textDecoration: 'none',
      fontWeight: 600,
      color: {
        dark: 'accent-1',
        light: 'brand'
      },
      hover: {
        textDecoration: 'underline' // fontWeight: undefined,
        // extend: undefined,

      } // extend: undefined,

    },
    box: {
      responsiveBreakpoint: 'small' // when we switch rows to columns
      // extend: undefined,

    },
    button: {
      border: {
        // color: { dark: undefined, light: undefined }
        width: "".concat(borderWidth, "px"),
        radius: "".concat(baseSpacing * 0.75, "px")
      },
      // color: { dark: undefined, light: undefined }
      primary: {// color: { dark: undefined, light: undefined }
      },
      disabled: {
        opacity: 0.3
      },
      minWidth: "".concat(baseSpacing * 4, "px"),
      maxWidth: "".concat(baseSpacing * 16, "px"),
      padding: {
        vertical: "".concat(baseSpacing / 4 - borderWidth, "px"),
        horizontal: "".concat(baseSpacing - borderWidth, "px")
      }
    },
    calendar: {
      // daySize must align with global.size
      small: {
        fontSize: "".concat(baseFontSize - fontScale, "px"),
        lineHeight: 1.375,
        daySize: "".concat(baseSpacing * 8 / 7, "px"),
        slideDuration: '0.2s'
      },
      medium: {
        fontSize: "".concat(baseFontSize, "px"),
        lineHeight: 1.45,
        daySize: "".concat(baseSpacing * 16 / 7, "px"),
        slideDuration: '0.5s'
      },
      large: {
        fontSize: "".concat(baseFontSize + 3 * fontScale, "px"),
        lineHeight: 1.11,
        daySize: "".concat(baseSpacing * 32 / 7, "px"),
        slideDuration: '0.8s'
      },
      icons: {
        previous: _Previous.Previous,
        next: _Next.Next,
        small: {
          previous: _FormPrevious.FormPrevious,
          next: _FormNext.FormNext
        }
      }
    },
    carousel: {
      icons: {
        current: _Subtract.Subtract,
        next: _Next.Next,
        previous: _Previous.Previous // color: undefined,

      }
    },
    checkBox: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '4px',
        thickness: '4px' // extend: undefined,

      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// checked: undefined,
        // indeterminate: undefined,
      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      size: "".concat(baseSpacing, "px"),
      // color: { dark: undefined, light: undefined },
      toggle: {
        color: {
          dark: '#d9d9d9',
          light: '#d9d9d9'
        },
        radius: "".concat(baseSpacing, "px"),
        size: "".concat(baseSpacing * 2, "px"),
        // extend: undefined,
        knob: {// extend: undefined,
        }
      } // extend: undefined,

    },
    clock: {
      analog: {
        hour: {
          color: {
            dark: 'light-2',
            light: 'dark-3'
          },
          width: "".concat(baseSpacing / 3, "px"),
          size: "".concat(baseSpacing, "px"),
          shape: 'round'
        },
        minute: {
          color: {
            dark: 'light-4',
            light: 'dark-3'
          },
          width: "".concat(baseSpacing / 6, "px"),
          size: "".concat(Math.round(baseSpacing / 2), "px"),
          shape: 'round'
        },
        second: {
          color: {
            dark: 'accent-1',
            light: 'accent-1'
          },
          width: "".concat(baseSpacing / 8, "px"),
          size: "".concat(Math.round(baseSpacing / 2.666), "px"),
          shape: 'round'
        },
        size: {
          small: "".concat(baseSpacing * 3, "px"),
          medium: "".concat(baseSpacing * 4, "px"),
          large: "".concat(baseSpacing * 6, "px"),
          xlarge: "".concat(baseSpacing * 9, "px"),
          huge: "".concat(baseSpacing * 12, "px")
        }
      },
      digital: {
        text: {
          xsmall: {
            size: "".concat(baseFontSize - 2 * fontScale, "px"),
            height: 1.5
          },
          small: {
            size: "".concat(baseFontSize - fontScale, "px"),
            height: 1.43
          },
          medium: {
            size: "".concat(baseFontSize, "px"),
            height: 1.375
          },
          large: {
            size: "".concat(baseFontSize + fontScale, "px"),
            height: 1.167
          },
          xlarge: {
            size: "".concat(baseFontSize + 2 * fontScale, "px"),
            height: 1.1875
          },
          xxlarge: {
            size: "".concat(baseFontSize + 4 * fontScale, "px"),
            height: 1.125
          }
        }
      }
    },
    collapsible: {
      minSpeed: 200,
      baseline: 500
    },
    dataTable: {
      header: {},
      groupHeader: {
        border: {
          side: 'bottom',
          size: 'xsmall'
        },
        fill: 'vertical',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        background: {
          dark: 'dark-2',
          light: 'light-2'
        }
      },
      icons: {
        ascending: _FormDown.FormDown,
        contract: _FormUp.FormUp,
        descending: _FormUp.FormUp,
        expand: _FormDown.FormDown
      },
      resize: {
        border: {
          side: 'right',
          color: 'border'
        }
      },
      primary: {
        weight: 'bold'
      }
    },
    // drop: {
    //   maxHeight: undefined,
    // },
    formField: {
      border: {
        color: 'border',
        position: 'inner',
        side: 'bottom',
        error: {
          color: {
            dark: 'white',
            light: 'status-critical'
          }
        }
      },
      error: {
        color: {
          dark: 'status-critical',
          light: 'status-critical'
        }
      },
      help: {
        color: {
          dark: 'dark-3',
          light: 'dark-3'
        }
      },
      label: {}
    },
    grommet: {},
    heading: {
      font: {// family: undefined
      },
      level: {
        1: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _objectSpread({}, fontSizing(4)),
          medium: _objectSpread({}, fontSizing(8)),
          large: _objectSpread({}, fontSizing(16)),
          xlarge: _objectSpread({}, fontSizing(24))
        },
        2: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _objectSpread({}, fontSizing(2)),
          medium: _objectSpread({}, fontSizing(4)),
          large: _objectSpread({}, fontSizing(8)),
          xlarge: _objectSpread({}, fontSizing(12))
        },
        3: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _objectSpread({}, fontSizing(1)),
          medium: _objectSpread({}, fontSizing(2)),
          large: _objectSpread({}, fontSizing(4)),
          xlarge: _objectSpread({}, fontSizing(6))
        },
        4: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _objectSpread({}, fontSizing(0)),
          medium: _objectSpread({}, fontSizing(0)),
          large: _objectSpread({}, fontSizing(0)),
          xlarge: _objectSpread({}, fontSizing(0))
        },
        5: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _objectSpread({}, fontSizing(-0.5)),
          medium: _objectSpread({}, fontSizing(-0.5)),
          large: _objectSpread({}, fontSizing(-0.5)),
          xlarge: _objectSpread({}, fontSizing(-0.5))
        },
        6: {
          font: {// family: undefined,
            // weight: undefined,
          },
          small: _objectSpread({}, fontSizing(-1)),
          medium: _objectSpread({}, fontSizing(-1)),
          large: _objectSpread({}, fontSizing(-1)),
          xlarge: _objectSpread({}, fontSizing(-1))
        }
      },
      responsiveBreakpoint: 'small',
      // when we scale the font size down
      weight: 600
    },
    layer: {
      background: 'white',
      border: {
        radius: '4px'
      },
      container: {
        zIndex: '15'
      },
      overlay: {
        background: 'rgba(0, 0, 0, 0.5)'
      },
      responsiveBreakpoint: 'small',
      // when Layer takes over the full screen
      zIndex: '10'
    },
    menu: {
      // background: undefined,
      // extend: undefined,
      icons: {
        down: _FormDown.FormDown
      }
    },
    paragraph: {
      small: _objectSpread({}, fontSizing(-1)),
      medium: _objectSpread({}, fontSizing(0)),
      large: _objectSpread({}, fontSizing(1)),
      xlarge: _objectSpread({}, fontSizing(2)),
      xxlarge: _objectSpread({}, fontSizing(4))
    },
    radioButton: {
      border: {
        color: {
          dark: 'rgba(255, 255, 255, 0.5)',
          light: 'rgba(0, 0, 0, 0.15)'
        },
        width: '2px'
      },
      check: {
        radius: '100%' // color: { dark: undefined, light: undefined },
        // extend: undefined,

      },
      hover: {
        border: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      icon: {// size: undefined,
        // extend: undefined,
      },
      icons: {// circle: undefined,
      },
      gap: 'small',
      size: "".concat(baseSpacing, "px")
    },
    rangeInput: {
      track: {
        height: '4px',
        color: (0, _styledComponents.css)(["", ";"], function (props) {
          return (0, _polished.rgba)((0, _utils.normalizeColor)('border', props.theme), 0.2);
        })
      },
      thumb: {// color: { dark: undefined, light: undefined },
      }
    },
    select: {
      // background: undefined,
      container: {// extend: undefined,
      },
      control: {// extend: undefined,
      },
      icons: {
        // color: { dark: undefined, light: undefined },
        down: _FormDown.FormDown
      },
      // searchInput: undefined,
      step: 20
    },
    tab: {
      active: {
        color: 'text' // background: undefined,

      },
      // background: undefined,
      border: {
        side: 'bottom',
        size: 'small',
        color: {
          dark: 'accent-1',
          light: 'brand'
        },
        active: {
          color: {
            dark: 'white',
            light: 'black'
          }
        },
        hover: {
          color: {
            dark: 'white',
            light: 'black'
          }
        }
      },
      color: 'control',
      // extend: undefined,
      hover: {
        // background: undefined,
        // extend: undefined,
        color: {
          dark: 'white',
          light: 'black'
        }
      },
      margin: {
        vertical: 'xxsmall',
        horizontal: 'small'
      },
      pad: {
        bottom: 'xsmall'
      }
    },
    tabs: {
      // background: undefined,
      // extend: undefined,
      header: {// background: undefined,
        // extend: undefined,
      },
      panel: {// extend: undefined,
      } // gap: undefined,

    },
    table: {
      header: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'bottom',
        verticalAlign: 'bottom',
        fill: 'vertical' // background: undefined,
        // extend: undefined,

      },
      body: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        } // border: undefined,
        // extend: undefined,

      },
      footer: {
        align: 'start',
        pad: {
          horizontal: 'small',
          vertical: 'xsmall'
        },
        border: 'top',
        verticalAlign: 'top',
        fill: 'vertical' // extend: undefined,

      }
    },
    text: {
      xsmall: _objectSpread({}, fontSizing(-1.5)),
      small: _objectSpread({}, fontSizing(-1)),
      medium: _objectSpread({}, fontSizing(0)),
      large: _objectSpread({}, fontSizing(1)),
      xlarge: _objectSpread({}, fontSizing(2)),
      xxlarge: _objectSpread({}, fontSizing(4))
    },
    // textInput: {
    //   extend: undefined,
    // },
    video: {
      captions: {
        background: 'rgba(0, 0, 0, 0.7)'
      },
      // controls: { background: undefined },
      icons: {
        closedCaption: _ClosedCaption.ClosedCaption,
        configure: _Actions.Actions,
        fullScreen: _Expand.Expand,
        pause: _Pause.Pause,
        play: _Play.Play,
        reduceVolume: _VolumeLow.VolumeLow,
        volume: _Volume.Volume // color: { dark: undefined, light: undefined },

      } // scrubber: { track: { color: undefined } },

    },
    worldMap: {
      color: 'light-3',
      continent: {
        active: '8px',
        base: '6px'
      },
      hover: {
        color: 'light-4'
      },
      place: {
        active: '20px',
        base: '8px'
      }
    }
  });
  return (0, _utils.deepFreeze)(result);
};

exports.generate = generate;
var base = generate(24);
exports.base = base;