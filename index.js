(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["vue-fontawesome"] = {}, global.FontAwesome));
})(this, (function (exports, fontawesomeSvgCore) { 'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  var humps$1 = {exports: {}};

  (function (module) {
  (function(global) {

  	  var _processKeys = function(convert, obj, options) {
  	    if(!_isObject(obj) || _isDate(obj) || _isRegExp(obj) || _isBoolean(obj) || _isFunction(obj)) {
  	      return obj;
  	    }

  	    var output,
  	        i = 0,
  	        l = 0;

  	    if(_isArray(obj)) {
  	      output = [];
  	      for(l=obj.length; i<l; i++) {
  	        output.push(_processKeys(convert, obj[i], options));
  	      }
  	    }
  	    else {
  	      output = {};
  	      for(var key in obj) {
  	        if(Object.prototype.hasOwnProperty.call(obj, key)) {
  	          output[convert(key, options)] = _processKeys(convert, obj[key], options);
  	        }
  	      }
  	    }
  	    return output;
  	  };

  	  // String conversion methods

  	  var separateWords = function(string, options) {
  	    options = options || {};
  	    var separator = options.separator || '_';
  	    var split = options.split || /(?=[A-Z])/;

  	    return string.split(split).join(separator);
  	  };

  	  var camelize = function(string) {
  	    if (_isNumerical(string)) {
  	      return string;
  	    }
  	    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
  	      return chr ? chr.toUpperCase() : '';
  	    });
  	    // Ensure 1st char is always lowercase
  	    return string.substr(0, 1).toLowerCase() + string.substr(1);
  	  };

  	  var pascalize = function(string) {
  	    var camelized = camelize(string);
  	    // Ensure 1st char is always uppercase
  	    return camelized.substr(0, 1).toUpperCase() + camelized.substr(1);
  	  };

  	  var decamelize = function(string, options) {
  	    return separateWords(string, options).toLowerCase();
  	  };

  	  // Utilities
  	  // Taken from Underscore.js

  	  var toString = Object.prototype.toString;

  	  var _isFunction = function(obj) {
  	    return typeof(obj) === 'function';
  	  };
  	  var _isObject = function(obj) {
  	    return obj === Object(obj);
  	  };
  	  var _isArray = function(obj) {
  	    return toString.call(obj) == '[object Array]';
  	  };
  	  var _isDate = function(obj) {
  	    return toString.call(obj) == '[object Date]';
  	  };
  	  var _isRegExp = function(obj) {
  	    return toString.call(obj) == '[object RegExp]';
  	  };
  	  var _isBoolean = function(obj) {
  	    return toString.call(obj) == '[object Boolean]';
  	  };

  	  // Performant way to determine if obj coerces to a number
  	  var _isNumerical = function(obj) {
  	    obj = obj - 0;
  	    return obj === obj;
  	  };

  	  // Sets up function which handles processing keys
  	  // allowing the convert function to be modified by a callback
  	  var _processor = function(convert, options) {
  	    var callback = options && 'process' in options ? options.process : options;

  	    if(typeof(callback) !== 'function') {
  	      return convert;
  	    }

  	    return function(string, options) {
  	      return callback(string, convert, options);
  	    }
  	  };

  	  var humps = {
  	    camelize: camelize,
  	    decamelize: decamelize,
  	    pascalize: pascalize,
  	    depascalize: decamelize,
  	    camelizeKeys: function(object, options) {
  	      return _processKeys(_processor(camelize, options), object);
  	    },
  	    decamelizeKeys: function(object, options) {
  	      return _processKeys(_processor(decamelize, options), object, options);
  	    },
  	    pascalizeKeys: function(object, options) {
  	      return _processKeys(_processor(pascalize, options), object);
  	    },
  	    depascalizeKeys: function () {
  	      return this.decamelizeKeys.apply(this, arguments);
  	    }
  	  };

  	  if (module.exports) {
  	    module.exports = humps;
  	  } else {
  	    global.humps = humps;
  	  }

  	})(commonjsGlobal);
  } (humps$1));

  var humps = humps$1.exports;

  var _excluded = ["class", "style", "attrs"];

  function styleToObject(style) {
    return style.split(';').map(function (s) {
      return s.trim();
    }).filter(function (s) {
      return s;
    }).reduce(function (acc, pair) {
      var i = pair.indexOf(':');
      var prop = humps.camelize(pair.slice(0, i));
      var value = pair.slice(i + 1).trim();
      acc[prop] = value;
      return acc;
    }, {});
  }

  function classToObject(cls) {
    return cls.split(/\s+/).reduce(function (acc, c) {
      acc[c] = true;
      return acc;
    }, {});
  }

  function combineClassObjects() {
    for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
      objs[_key] = arguments[_key];
    }

    return objs.reduce(function (acc, obj) {
      if (Array.isArray(obj)) {
        acc = acc.concat(obj);
      } else {
        acc.push(obj);
      }

      return acc;
    }, []);
  }

  function convert(h, element) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    var children = (element.children || []).map(convert.bind(null, h));
    var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
      var val = element.attributes[key];

      switch (key) {
        case 'class':
          acc['class'] = classToObject(val);
          break;

        case 'style':
          acc['style'] = styleToObject(val);
          break;

        default:
          acc.attrs[key] = val;
      }

      return acc;
    }, {
      'class': {},
      style: {},
      attrs: {}
    });

    var _data$class = data.class,
        dClass = _data$class === void 0 ? {} : _data$class,
        _data$style = data.style,
        dStyle = _data$style === void 0 ? {} : _data$style,
        _data$attrs = data.attrs,
        dAttrs = _data$attrs === void 0 ? {} : _data$attrs,
        remainingData = _objectWithoutProperties(data, _excluded);

    if (typeof element === 'string') {
      return element;
    } else {
      return h(element.tag, _objectSpread2(_objectSpread2({
        class: combineClassObjects(mixins.class, dClass),
        style: _objectSpread2(_objectSpread2({}, mixins.style), dStyle),
        attrs: _objectSpread2(_objectSpread2({}, mixins.attrs), dAttrs)
      }, remainingData), {}, {
        props: props
      }), children);
    }
  }

  var PRODUCTION = false;

  try {
    PRODUCTION = process.env.NODE_ENV === 'production';
  } catch (e) {}

  function log () {
    if (!PRODUCTION && console && typeof console.error === 'function') {
      var _console;

      (_console = console).error.apply(_console, arguments);
    }
  }

  function objectWithKey(key, value) {
    return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
  }
  function classList(props) {
    var _classes;

    var classes = (_classes = {
      'fa-spin': props.spin,
      'fa-spin-pulse': props.spinPulse,
      'fa-spin-reverse': props.spinReverse,
      'fa-pulse': props.pulse,
      'fa-beat': props.beat,
      'fa-fade': props.fade,
      'fa-flash': props.flash,
      'fa-fw': props.fixedWidth,
      'fa-border': props.border,
      'fa-li': props.listItem,
      'fa-inverse': props.inverse,
      'fa-flip': props.flip === true,
      'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
      'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
    }, _defineProperty(_classes, "fa-".concat(props.size), props.size !== null), _defineProperty(_classes, "fa-rotate-".concat(props.rotation), props.rotation !== null), _defineProperty(_classes, "fa-pull-".concat(props.pull), props.pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _defineProperty(_classes, 'fa-bounce', props.bounce), _defineProperty(_classes, 'fa-shake', props.shake), _defineProperty(_classes, 'fa-beat-fade', props.beatFade), _classes);
    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  }
  function addStaticClass(to, what) {
    var val = (to || '').length === 0 ? [] : [to];
    return val.concat(what).join(' ');
  }

  function normalizeIconArgs(icon) {
    // this has everything that it needs to be rendered which means it was probably imported
    // directly from an icon svg package
    if (icon && _typeof(icon) === 'object' && icon.prefix && icon.iconName && icon.icon) {
      return icon;
    }

    if (fontawesomeSvgCore.parse.icon) {
      return fontawesomeSvgCore.parse.icon(icon);
    }

    if (icon === null) {
      return null;
    }

    if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
      return icon;
    }

    if (Array.isArray(icon) && icon.length === 2) {
      return {
        prefix: icon[0],
        iconName: icon[1]
      };
    }

    if (typeof icon === 'string') {
      return {
        prefix: 'fas',
        iconName: icon
      };
    }
  }

  var FontAwesomeIcon = {
    name: 'FontAwesomeIcon',
    functional: true,
    props: {
      beat: {
        type: Boolean,
        default: false
      },
      border: {
        type: Boolean,
        default: false
      },
      fade: {
        type: Boolean,
        default: false
      },
      fixedWidth: {
        type: Boolean,
        default: false
      },
      flash: {
        type: Boolean,
        default: false
      },
      flip: {
        type: [Boolean, String],
        default: false,
        validator: function validator(value) {
          return [true, false, 'horizontal', 'vertical', 'both'].indexOf(value) > -1;
        }
      },
      icon: {
        type: [Object, Array, String],
        required: true
      },
      mask: {
        type: [Object, Array, String],
        default: null
      },
      listItem: {
        type: Boolean,
        default: false
      },
      pull: {
        type: String,
        default: null,
        validator: function validator(value) {
          return ['right', 'left'].indexOf(value) > -1;
        }
      },
      pulse: {
        type: Boolean,
        default: false
      },
      rotation: {
        type: [String, Number],
        default: null,
        validator: function validator(value) {
          return [90, 180, 270].indexOf(parseInt(value, 10)) > -1;
        }
      },
      swapOpacity: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: null,
        validator: function validator(value) {
          return ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
        }
      },
      spin: {
        type: Boolean,
        default: false
      },
      spinPulse: {
        type: Boolean,
        default: false
      },
      spinReverse: {
        type: Boolean,
        default: false
      },
      transform: {
        type: [String, Object],
        default: null
      },
      symbol: {
        type: [Boolean, String],
        default: false
      },
      title: {
        type: String,
        default: null
      },
      inverse: {
        type: Boolean,
        default: false
      },
      bounce: {
        type: Boolean,
        default: false
      },
      shake: {
        type: Boolean,
        default: false
      },
      beatFade: {
        type: Boolean,
        default: false
      }
    },
    render: function render(createElement, context) {
      var props = context.props;
      var iconArgs = props.icon,
          maskArgs = props.mask,
          symbol = props.symbol,
          title = props.title;
      var icon = normalizeIconArgs(iconArgs);
      var classes = objectWithKey('classes', classList(props));
      var transform = objectWithKey('transform', typeof props.transform === 'string' ? fontawesomeSvgCore.parse.transform(props.transform) : props.transform);
      var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
      var renderedIcon = fontawesomeSvgCore.icon(icon, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes), transform), mask), {}, {
        symbol: symbol,
        title: title
      }));

      if (!renderedIcon) {
        return log('Could not find one or more icon(s)', icon, mask);
      }

      var abstract = renderedIcon.abstract;
      var convertCurry = convert.bind(null, createElement);
      return convertCurry(abstract[0], {}, context.data);
    }
  };

  var FontAwesomeLayers = {
    name: 'FontAwesomeLayers',
    functional: true,
    props: {
      fixedWidth: {
        type: Boolean,
        default: false
      }
    },
    render: function render(createElement, context) {
      var familyPrefix = fontawesomeSvgCore.config.familyPrefix;
      var staticClass = context.data.staticClass;
      var classes = ["".concat(familyPrefix, "-layers")].concat(_toConsumableArray(context.props.fixedWidth ? ["".concat(familyPrefix, "-fw")] : []));
      return createElement('div', _objectSpread2(_objectSpread2({}, context.data), {}, {
        staticClass: addStaticClass(staticClass, classes)
      }), context.children);
    }
  };

  var FontAwesomeLayersText = {
    name: 'FontAwesomeLayersText',
    functional: true,
    props: {
      value: {
        type: [String, Number],
        default: ''
      },
      transform: {
        type: [String, Object],
        default: null
      },
      counter: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: null,
        validator: function validator(value) {
          return ['bottom-left', 'bottom-right', 'top-left', 'top-right'].indexOf(value) > -1;
        }
      }
    },
    render: function render(createElement, context) {
      var familyPrefix = fontawesomeSvgCore.config.familyPrefix;
      var props = context.props;
      var classes = objectWithKey('classes', [].concat(_toConsumableArray(props.counter ? ["".concat(familyPrefix, "-layers-counter")] : []), _toConsumableArray(props.position ? ["".concat(familyPrefix, "-layers-").concat(props.position)] : [])));
      var transform = objectWithKey('transform', typeof props.transform === 'string' ? fontawesomeSvgCore.parse.transform(props.transform) : props.transform);
      var renderedText = fontawesomeSvgCore.text(props.value.toString(), _objectSpread2(_objectSpread2({}, transform), classes));
      var abstract = renderedText.abstract;

      if (props.counter) {
        abstract[0].attributes.class = abstract[0].attributes.class.replace('fa-layers-text', '');
      }

      var convertCurry = convert.bind(null, createElement);
      return convertCurry(abstract[0], {}, context.data);
    }
  };

  exports.FontAwesomeIcon = FontAwesomeIcon;
  exports.FontAwesomeLayers = FontAwesomeLayers;
  exports.FontAwesomeLayersText = FontAwesomeLayersText;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
