(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@fortawesome/fontawesome-svg-core'), require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', '@fortawesome/fontawesome-svg-core', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["vue-fontawesome"] = {}, global.FontAwesome, global.vue));
})(this, (function (exports, fontawesomeSvgCore, vue) { 'use strict';

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
    key = _toPropertyKey(key);
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
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
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

  var _excluded = ["class", "style"];

  /**
   * Converts a CSS style into a plain Javascript object.
   * @param {String} style The style to converts into a plain Javascript object.
   * @returns {Object}
   */
  function styleToObject(style) {
    return style.split(';').map(function (s) {
      return s.trim();
    }).filter(function (s) {
      return s;
    }).reduce(function (output, pair) {
      var idx = pair.indexOf(':');
      var prop = humps.camelize(pair.slice(0, idx));
      var value = pair.slice(idx + 1).trim();
      output[prop] = value;
      return output;
    }, {});
  }

  /**
   * Converts a CSS class list into a plain Javascript object.
   * @param {Array<String>} classes The class list to convert.
   * @returns {Object}
   */
  function classToObject(classes) {
    return classes.split(/\s+/).reduce(function (output, className) {
      output[className] = true;
      return output;
    }, {});
  }

  /**
   * Converts a FontAwesome abstract element of an icon into a Vue VNode.
   * @param {AbstractElement | String} abstractElement The element to convert.
   * @param {Object} props The user-defined props.
   * @param {Object} attrs The user-defined native HTML attributes.
   * @returns {VNode}
   */
  function convert(abstractElement) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    // If the abstract element is a string, we'll just return a string render function
    if (typeof abstractElement === 'string') {
      return abstractElement;
    }

    // Converting abstract element children into Vue VNodes
    var children = (abstractElement.children || []).map(function (child) {
      return convert(child);
    });

    // Converting abstract element attributes into valid Vue format
    var mixins = Object.keys(abstractElement.attributes || {}).reduce(function (mixins, key) {
      var value = abstractElement.attributes[key];
      switch (key) {
        case 'class':
          mixins.class = classToObject(value);
          break;
        case 'style':
          mixins.style = styleToObject(value);
          break;
        default:
          mixins.attrs[key] = value;
      }
      return mixins;
    }, {
      attrs: {},
      class: {},
      style: {}
    });

    // Now, we'll return the VNode
    attrs.class;
      var _attrs$style = attrs.style,
      aStyle = _attrs$style === void 0 ? {} : _attrs$style,
      otherAttrs = _objectWithoutProperties(attrs, _excluded);
    return vue.h(abstractElement.tag, _objectSpread2(_objectSpread2(_objectSpread2({}, props), {}, {
      class: mixins.class,
      style: _objectSpread2(_objectSpread2({}, mixins.style), aStyle)
    }, mixins.attrs), otherAttrs), children);
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
      'fa-pulse': props.pulse,
      'fa-fw': props.fixedWidth,
      'fa-border': props.border,
      'fa-li': props.listItem,
      'fa-inverse': props.inverse,
      'fa-flip': props.flip === true,
      'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
      'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
    }, _defineProperty(_classes, "fa-".concat(props.size), props.size !== null), _defineProperty(_classes, "fa-rotate-".concat(props.rotation), props.rotation !== null), _defineProperty(_classes, "fa-pull-".concat(props.pull), props.pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _defineProperty(_classes, 'fa-bounce', props.bounce), _defineProperty(_classes, 'fa-shake', props.shake), _defineProperty(_classes, 'fa-beat', props.beat), _defineProperty(_classes, 'fa-fade', props.fade), _defineProperty(_classes, 'fa-beat-fade', props.beatFade), _defineProperty(_classes, 'fa-flash', props.flash), _defineProperty(_classes, 'fa-spin-pulse', props.spinPulse), _defineProperty(_classes, 'fa-spin-reverse', props.spinReverse), _classes);
    return Object.keys(classes).map(function (key) {
      return classes[key] ? key : null;
    }).filter(function (key) {
      return key;
    });
  }

  function normalizeIconArgs(icon) {
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
  var FontAwesomeIcon = vue.defineComponent({
    name: 'FontAwesomeIcon',
    props: {
      border: {
        type: Boolean,
        default: false
      },
      fixedWidth: {
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
      maskId: {
        type: String,
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
          return [90, 180, 270].indexOf(Number.parseInt(value, 10)) > -1;
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
      titleId: {
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
      beat: {
        type: Boolean,
        default: false
      },
      fade: {
        type: Boolean,
        default: false
      },
      beatFade: {
        type: Boolean,
        default: false
      },
      flash: {
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
      }
    },
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs;
      var icon = vue.computed(function () {
        return normalizeIconArgs(props.icon);
      });
      var classes = vue.computed(function () {
        return objectWithKey('classes', classList(props));
      });
      var transform = vue.computed(function () {
        return objectWithKey('transform', typeof props.transform === 'string' ? fontawesomeSvgCore.parse.transform(props.transform) : props.transform);
      });
      var mask = vue.computed(function () {
        return objectWithKey('mask', normalizeIconArgs(props.mask));
      });
      var renderedIcon = vue.computed(function () {
        return fontawesomeSvgCore.icon(icon.value, _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, classes.value), transform.value), mask.value), {}, {
          symbol: props.symbol,
          title: props.title,
          titleId: props.titleId,
          maskId: props.maskId
        }));
      });
      vue.watch(renderedIcon, function (value) {
        if (!value) {
          return log('Could not find one or more icon(s)', icon.value, mask.value);
        }
      }, {
        immediate: true
      });
      var vnode = vue.computed(function () {
        return renderedIcon.value ? convert(renderedIcon.value.abstract[0], {}, attrs) : null;
      });
      return function () {
        return vnode.value;
      };
    }
  });

  var FontAwesomeLayers = vue.defineComponent({
    name: 'FontAwesomeLayers',
    props: {
      fixedWidth: {
        type: Boolean,
        default: false
      }
    },
    setup: function setup(props, _ref) {
      var slots = _ref.slots;
      var familyPrefix = fontawesomeSvgCore.config.familyPrefix;
      var className = vue.computed(function () {
        return ["".concat(familyPrefix, "-layers")].concat(_toConsumableArray(props.fixedWidth ? ["".concat(familyPrefix, "-fw")] : []));
      });
      return function () {
        return vue.h('div', {
          class: className.value
        }, slots.default ? slots.default() : []);
      };
    }
  });

  var FontAwesomeLayersText = vue.defineComponent({
    name: 'FontAwesomeLayersText',
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
    setup: function setup(props, _ref) {
      var attrs = _ref.attrs;
      var familyPrefix = fontawesomeSvgCore.config.familyPrefix;
      var classes = vue.computed(function () {
        return objectWithKey('classes', [].concat(_toConsumableArray(props.counter ? ["".concat(familyPrefix, "-layers-counter")] : []), _toConsumableArray(props.position ? ["".concat(familyPrefix, "-layers-").concat(props.position)] : [])));
      });
      var transform = vue.computed(function () {
        return objectWithKey('transform', typeof props.transform === 'string' ? fontawesomeSvgCore.parse.transform(props.transform) : props.transform);
      });
      var abstractElement = vue.computed(function () {
        var _text = fontawesomeSvgCore.text(props.value.toString(), _objectSpread2(_objectSpread2({}, transform.value), classes.value)),
          abstract = _text.abstract;
        if (props.counter) {
          abstract[0].attributes.class = abstract[0].attributes.class.replace('fa-layers-text', '');
        }
        return abstract[0];
      });
      var vnode = vue.computed(function () {
        return convert(abstractElement.value, {}, attrs);
      });
      return function () {
        return vnode.value;
      };
    }
  });

  exports.FontAwesomeIcon = FontAwesomeIcon;
  exports.FontAwesomeLayers = FontAwesomeLayers;
  exports.FontAwesomeLayersText = FontAwesomeLayersText;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
