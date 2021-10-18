(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('@fortawesome/fontawesome-svg-core')) :
	typeof define === 'function' && define.amd ? define(['exports', 'vue', '@fortawesome/fontawesome-svg-core'], factory) :
	(factory((global['vue-fontawesome'] = {}),global.vue,global.FontAwesome));
}(this, (function (exports,vue,fontawesomeSvgCore) { 'use strict';

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var humps = createCommonjsModule(function (module) {
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

	  if (typeof undefined === 'function' && undefined.amd) {
	    undefined(humps);
	  } else if ('object' !== 'undefined' && module.exports) {
	    module.exports = humps;
	  } else {
	    global.humps = humps;
	  }

	})(commonjsGlobal);
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};

	var defineProperty = function (obj, key, value) {
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
	};

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];

	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }

	  return target;
	};

	var objectWithoutProperties = function (obj, keys) {
	  var target = {};

	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }

	  return target;
	};

	var toConsumableArray = function (arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

	    return arr2;
	  } else {
	    return Array.from(arr);
	  }
	};

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

	  var _attrs$class = attrs.class,
	      _attrs$style = attrs.style,
	      aStyle = _attrs$style === undefined ? {} : _attrs$style,
	      otherAttrs = objectWithoutProperties(attrs, ['class', 'style']);

	  return vue.h(abstractElement.tag, _extends({}, props, {
	    class: mixins.class,
	    style: _extends({}, mixins.style, aStyle)
	  }, mixins.attrs, otherAttrs), children);
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
	  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? defineProperty({}, key, value) : {};
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
	    'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
	    'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
	  }, defineProperty(_classes, 'fa-' + props.size, props.size !== null), defineProperty(_classes, 'fa-rotate-' + props.rotation, props.rotation !== null), defineProperty(_classes, 'fa-pull-' + props.pull, props.pull !== null), defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes);

	  return Object.keys(classes).map(function (key) {
	    return classes[key] ? key : null;
	  }).filter(function (key) {
	    return key;
	  });
	}

	function normalizeIconArgs(icon) {
	  if (icon === null) {
	    return null;
	  }

	  if ((typeof icon === 'undefined' ? 'undefined' : _typeof(icon)) === 'object' && icon.prefix && icon.iconName) {
	    return icon;
	  }

	  if (Array.isArray(icon) && icon.length === 2) {
	    return { prefix: icon[0], iconName: icon[1] };
	  }

	  if (typeof icon === 'string') {
	    return { prefix: 'fas', iconName: icon };
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
	      type: String,
	      default: null,
	      validator: function validator(value) {
	        return ['horizontal', 'vertical', 'both'].indexOf(value) > -1;
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
	        return ['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x'].indexOf(value) > -1;
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
	    inverse: {
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
	      return fontawesomeSvgCore.icon(icon.value, _extends({}, classes.value, transform.value, mask.value, {
	        symbol: props.symbol,
	        title: props.title
	      }));
	    });

	    vue.watch(renderedIcon, function (value) {
	      if (!value) {
	        return log('Could not find one or more icon(s)', icon.value, mask.value);
	      }
	    }, { immediate: true });

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
	      return [familyPrefix + '-layers'].concat(toConsumableArray(props.fixedWidth ? [familyPrefix + '-fw'] : []));
	    });

	    return function () {
	      return vue.h('div', { class: className.value }, slots.default ? slots.default() : []);
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
	      return objectWithKey('classes', [].concat(toConsumableArray(props.counter ? [familyPrefix + '-layers-counter'] : []), toConsumableArray(props.position ? [familyPrefix + '-layers-' + props.position] : [])));
	    });
	    var transform = vue.computed(function () {
	      return objectWithKey('transform', typeof props.transform === 'string' ? fontawesomeSvgCore.parse.transform(props.transform) : props.transform);
	    });
	    var abstractElement = vue.computed(function () {
	      var _text = fontawesomeSvgCore.text(props.value.toString(), _extends({}, transform.value, classes.value)),
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

})));
