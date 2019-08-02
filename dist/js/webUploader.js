/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js!./node_modules/_webuploader@0.1.8@webuploader/css/webuploader.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js!./node_modules/_webuploader@0.1.8@webuploader/css/webuploader.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../_css-loader@2.1.1@css-loader/dist/runtime/api.js */ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".webuploader-container {\n\tposition: relative;\n}\n.webuploader-element-invisible {\n\tposition: absolute !important;\n\tclip: rect(1px 1px 1px 1px); /* IE6, IE7 */\n    clip: rect(1px,1px,1px,1px);\n}\n.webuploader-pick {\n\tposition: relative;\n\tdisplay: inline-block;\n\tcursor: pointer;\n\tbackground: #00b7ee;\n\tpadding: 10px 15px;\n\tcolor: #fff;\n\ttext-align: center;\n\tborder-radius: 3px;\n\toverflow: hidden;\n}\n.webuploader-pick-hover {\n\tbackground: #00a2d4;\n}\n\n.webuploader-pick-disable {\n\topacity: 0.6;\n\tpointer-events:none;\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@2.1.1@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/_jquery@3.4.1@jquery/dist/jquery.js":
/*!**********************************************************!*\
  !*** ./node_modules/_jquery@3.4.1@jquery/dist/jquery.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.4.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2019-05-01T21:04Z
 */
(function (global, factory) {
  "use strict";

  if ( true && typeof module.exports === "object") {
    // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function (w) {
      if (!w.document) {
        throw new Error("jQuery requires a window with a document");
      }

      return factory(w);
    };
  } else {
    factory(global);
  } // Pass this if window is not defined yet

})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
  // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
  // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
  // enough that all such attempts are guarded in a try block.
  "use strict";

  var arr = [];
  var document = window.document;
  var getProto = Object.getPrototypeOf;
  var slice = arr.slice;
  var concat = arr.concat;
  var push = arr.push;
  var indexOf = arr.indexOf;
  var class2type = {};
  var toString = class2type.toString;
  var hasOwn = class2type.hasOwnProperty;
  var fnToString = hasOwn.toString;
  var ObjectFunctionString = fnToString.call(Object);
  var support = {};

  var isFunction = function isFunction(obj) {
    // Support: Chrome <=57, Firefox <=52
    // In some browsers, typeof returns "function" for HTML <object> elements
    // (i.e., `typeof document.createElement( "object" ) === "function"`).
    // We don't want to classify *any* DOM node as a function.
    return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

  var isWindow = function isWindow(obj) {
    return obj != null && obj === obj.window;
  };

  var preservedScriptAttributes = {
    type: true,
    src: true,
    nonce: true,
    noModule: true
  };

  function DOMEval(code, node, doc) {
    doc = doc || document;
    var i,
        val,
        script = doc.createElement("script");
    script.text = code;

    if (node) {
      for (i in preservedScriptAttributes) {
        // Support: Firefox 64+, Edge 18+
        // Some browsers don't support the "nonce" property on scripts.
        // On the other hand, just using `getAttribute` is not enough as
        // the `nonce` attribute is reset to an empty string whenever it
        // becomes browsing-context connected.
        // See https://github.com/whatwg/html/issues/2369
        // See https://html.spec.whatwg.org/#nonce-attributes
        // The `node.getAttribute` check was added for the sake of
        // `jQuery.globalEval` so that it can fake a nonce-containing node
        // via an object.
        val = node[i] || node.getAttribute && node.getAttribute(i);

        if (val) {
          script.setAttribute(i, val);
        }
      }
    }

    doc.head.appendChild(script).parentNode.removeChild(script);
  }

  function toType(obj) {
    if (obj == null) {
      return obj + "";
    } // Support: Android <=2.3 only (functionish RegExp)


    return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
  }
  /* global Symbol */
  // Defining this global in .eslintrc.json would create a danger of using the global
  // unguarded in another place, it seems safer to define global only for this module


  var version = "3.4.1",
      // Define a local copy of jQuery
  jQuery = function (selector, context) {
    // The jQuery object is actually just the init constructor 'enhanced'
    // Need init if jQuery is called (just allow error to be thrown if not included)
    return new jQuery.fn.init(selector, context);
  },
      // Support: Android <=4.0 only
  // Make sure we trim BOM and NBSP
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,
    constructor: jQuery,
    // The default length of a jQuery object is 0
    length: 0,
    toArray: function () {
      return slice.call(this);
    },
    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num) {
      // Return all the elements in a clean array
      if (num == null) {
        return slice.call(this);
      } // Return just the one element from the set


      return num < 0 ? this[num + this.length] : this[num];
    },
    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function (elems) {
      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems); // Add the old object onto the stack (as a reference)

      ret.prevObject = this; // Return the newly-formed element set

      return ret;
    },
    // Execute a callback for every element in the matched set.
    each: function (callback) {
      return jQuery.each(this, callback);
    },
    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    slice: function () {
      return this.pushStack(slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (i) {
      var len = this.length,
          j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: arr.sort,
    splice: arr.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var options,
        name,
        src,
        copy,
        copyIsArray,
        clone,
        target = arguments[0] || {},
        i = 1,
        length = arguments.length,
        deep = false; // Handle a deep copy situation

    if (typeof target === "boolean") {
      deep = target; // Skip the boolean and the target

      target = arguments[i] || {};
      i++;
    } // Handle case when target is a string or something (possible in deep copy)


    if (typeof target !== "object" && !isFunction(target)) {
      target = {};
    } // Extend jQuery itself if only one argument is passed


    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          copy = options[name]; // Prevent Object.prototype pollution
          // Prevent never-ending loop

          if (name === "__proto__" || target === copy) {
            continue;
          } // Recurse if we're merging plain objects or arrays


          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
            src = target[name]; // Ensure proper type for the source value

            if (copyIsArray && !Array.isArray(src)) {
              clone = [];
            } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
              clone = {};
            } else {
              clone = src;
            }

            copyIsArray = false; // Never move original objects, clone them

            target[name] = jQuery.extend(deep, clone, copy); // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    } // Return the modified object


    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
    // Assume jQuery is ready without the ready module
    isReady: true,
    error: function (msg) {
      throw new Error(msg);
    },
    noop: function () {},
    isPlainObject: function (obj) {
      var proto, Ctor; // Detect obvious negatives
      // Use toString instead of jQuery.type to catch host objects

      if (!obj || toString.call(obj) !== "[object Object]") {
        return false;
      }

      proto = getProto(obj); // Objects with no prototype (e.g., `Object.create( null )`) are plain

      if (!proto) {
        return true;
      } // Objects with prototype are plain iff they were constructed by a global Object function


      Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
      return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
    },
    isEmptyObject: function (obj) {
      var name;

      for (name in obj) {
        return false;
      }

      return true;
    },
    // Evaluates a script in a global context
    globalEval: function (code, options) {
      DOMEval(code, {
        nonce: options && options.nonce
      });
    },
    each: function (obj, callback) {
      var length,
          i = 0;

      if (isArrayLike(obj)) {
        length = obj.length;

        for (; i < length; i++) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      } else {
        for (i in obj) {
          if (callback.call(obj[i], i, obj[i]) === false) {
            break;
          }
        }
      }

      return obj;
    },
    // Support: Android <=4.0 only
    trim: function (text) {
      return text == null ? "" : (text + "").replace(rtrim, "");
    },
    // results is for internal usage only
    makeArray: function (arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArrayLike(Object(arr))) {
          jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },
    inArray: function (elem, arr, i) {
      return arr == null ? -1 : indexOf.call(arr, elem, i);
    },
    // Support: Android <=4.0 only, PhantomJS 1 only
    // push.apply(_, arraylike) throws on ancient WebKit
    merge: function (first, second) {
      var len = +second.length,
          j = 0,
          i = first.length;

      for (; j < len; j++) {
        first[i++] = second[j];
      }

      first.length = i;
      return first;
    },
    grep: function (elems, callback, invert) {
      var callbackInverse,
          matches = [],
          i = 0,
          length = elems.length,
          callbackExpect = !invert; // Go through the array, only saving the items
      // that pass the validator function

      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);

        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },
    // arg is for internal usage only
    map: function (elems, callback, arg) {
      var length,
          value,
          i = 0,
          ret = []; // Go through the array, translating each of the items to their new values

      if (isArrayLike(elems)) {
        length = elems.length;

        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        } // Go through every key on the object,

      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      } // Flatten any nested arrays


      return concat.apply([], ret);
    },
    // A global GUID counter for objects
    guid: 1,
    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

  if (typeof Symbol === "function") {
    jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
  } // Populate the class2type map


  jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArrayLike(obj) {
    // Support: real iOS 8.2 only (not reproducible in simulator)
    // `in` check used to prevent JIT error (gh-2145)
    // hasOwn isn't used here due to false negatives
    // regarding Nodelist length in IE
    var length = !!obj && "length" in obj && obj.length,
        type = toType(obj);

    if (isFunction(obj) || isWindow(obj)) {
      return false;
    }

    return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
  }

  var Sizzle =
  /*!
   * Sizzle CSS Selector Engine v2.3.4
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://js.foundation/
   *
   * Date: 2019-04-08
   */
  function (window) {
    var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,
        // Local document vars
    setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,
        // Instance-specific data
    expando = "sizzle" + 1 * new Date(),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        nonnativeSelectorCache = createCache(),
        sortOrder = function (a, b) {
      if (a === b) {
        hasDuplicate = true;
      }

      return 0;
    },
        // Instance methods
    hasOwn = {}.hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf as it's faster than native
    // https://jsperf.com/thor-indexof-vs-for/5
    indexOf = function (list, elem) {
      var i = 0,
          len = list.length;

      for (; i < len; i++) {
        if (list[i] === elem) {
          return i;
        }
      }

      return -1;
    },
        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        // Regular expressions
    // http://www.w3.org/TR/css3-selectors/#whitespace
    whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
    identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
    attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
    "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
        pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
    // 1. quoted (capture 3; capture 4 or capture 5)
    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
    ".*" + ")\\)|)",
        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
    rwhitespace = new RegExp(whitespace + "+", "g"),
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
        rdescend = new RegExp(whitespace + "|>"),
        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),
        matchExpr = {
      "ID": new RegExp("^#(" + identifier + ")"),
      "CLASS": new RegExp("^\\.(" + identifier + ")"),
      "TAG": new RegExp("^(" + identifier + "|[*])"),
      "ATTR": new RegExp("^" + attributes),
      "PSEUDO": new RegExp("^" + pseudos),
      "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
      "bool": new RegExp("^(?:" + booleans + ")$", "i"),
      // For use in libraries implementing .is()
      // We use this for POS matching in `select`
      "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
    },
        rhtml = /HTML$/i,
        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,
        rnative = /^[^{]+\{\s*\[native \w/,
        // Easily-parseable/retrievable ID or TAG or CLASS selectors
    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        rsibling = /[+~]/,
        // CSS escapes
    // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function (_, escaped, escapedWhitespace) {
      var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
      // Support: Firefox<24
      // Workaround erroneous numeric interpretation of +"0x"

      return high !== high || escapedWhitespace ? escaped : high < 0 ? // BMP codepoint
      String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
      String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
    },
        // CSS string/identifier serialization
    // https://drafts.csswg.org/cssom/#common-serializing-idioms
    rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        fcssescape = function (ch, asCodePoint) {
      if (asCodePoint) {
        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
        if (ch === "\0") {
          return "\uFFFD";
        } // Control characters and (dependent upon position) numbers get escaped as code points


        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      } // Other potentially-special ASCII characters get backslash-escaped


      return "\\" + ch;
    },
        // Used for iframes
    // See setDocument()
    // Removing the function wrapper causes a "Permission Denied"
    // error in IE
    unloadHandler = function () {
      setDocument();
    },
        inDisabledFieldset = addCombinator(function (elem) {
      return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
    }, {
      dir: "parentNode",
      next: "legend"
    }); // Optimize for push.apply( _, NodeList )


    try {
      push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes); // Support: Android<4.0
      // Detect silently failing push.apply

      arr[preferredDoc.childNodes.length].nodeType;
    } catch (e) {
      push = {
        apply: arr.length ? // Leverage slice if possible
        function (target, els) {
          push_native.apply(target, slice.call(els));
        } : // Support: IE<9
        // Otherwise append directly
        function (target, els) {
          var j = target.length,
              i = 0; // Can't trust NodeList.length

          while (target[j++] = els[i++]) {}

          target.length = j - 1;
        }
      };
    }

    function Sizzle(selector, context, results, seed) {
      var m,
          i,
          elem,
          nid,
          match,
          groups,
          newSelector,
          newContext = context && context.ownerDocument,
          // nodeType defaults to 9, since context defaults to document
      nodeType = context ? context.nodeType : 9;
      results = results || []; // Return early from calls with invalid selector or context

      if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
        return results;
      } // Try to shortcut find operations (as opposed to filters) in HTML documents


      if (!seed) {
        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;

        if (documentIsHTML) {
          // If the selector is sufficiently simple, try using a "get*By*" DOM method
          // (excepting DocumentFragment context, where the methods don't exist)
          if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
            // ID selector
            if (m = match[1]) {
              // Document context
              if (nodeType === 9) {
                if (elem = context.getElementById(m)) {
                  // Support: IE, Opera, Webkit
                  // TODO: identify versions
                  // getElementById can match elements by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                } // Element context

              } else {
                // Support: IE, Opera, Webkit
                // TODO: identify versions
                // getElementById can match elements by name instead of ID
                if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } // Type selector

            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results; // Class selector
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          } // Take advantage of querySelectorAll


          if (support.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && ( // Support: IE 8 only
          // Exclude object elements
          nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
            newSelector = selector;
            newContext = context; // qSA considers elements outside a scoping root when evaluating child or
            // descendant combinators, which is not what we want.
            // In such cases, we work around the behavior by prefixing every selector in the
            // list with an ID selector referencing the scope context.
            // Thanks to Andrew Dupont for this technique.

            if (nodeType === 1 && rdescend.test(selector)) {
              // Capture the context ID, setting it first if necessary
              if (nid = context.getAttribute("id")) {
                nid = nid.replace(rcssescape, fcssescape);
              } else {
                context.setAttribute("id", nid = expando);
              } // Prefix every selector in the list


              groups = tokenize(selector);
              i = groups.length;

              while (i--) {
                groups[i] = "#" + nid + " " + toSelector(groups[i]);
              }

              newSelector = groups.join(","); // Expand context for sibling selectors

              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
            }

            try {
              push.apply(results, newContext.querySelectorAll(newSelector));
              return results;
            } catch (qsaError) {
              nonnativeSelectorCache(selector, true);
            } finally {
              if (nid === expando) {
                context.removeAttribute("id");
              }
            }
          }
        }
      } // All others


      return select(selector.replace(rtrim, "$1"), context, results, seed);
    }
    /**
     * Create key-value caches of limited size
     * @returns {function(string, object)} Returns the Object data after storing it on itself with
     *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
     *	deleting the oldest entry
     */


    function createCache() {
      var keys = [];

      function cache(key, value) {
        // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
        if (keys.push(key + " ") > Expr.cacheLength) {
          // Only keep the most recent entries
          delete cache[keys.shift()];
        }

        return cache[key + " "] = value;
      }

      return cache;
    }
    /**
     * Mark a function for special use by Sizzle
     * @param {Function} fn The function to mark
     */


    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    /**
     * Support testing using an element
     * @param {Function} fn Passed the created element and returns a boolean result
     */


    function assert(fn) {
      var el = document.createElement("fieldset");

      try {
        return !!fn(el);
      } catch (e) {
        return false;
      } finally {
        // Remove from its parent by default
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        } // release memory in IE


        el = null;
      }
    }
    /**
     * Adds the same handler for all of the specified attrs
     * @param {String} attrs Pipe-separated list of attributes
     * @param {Function} handler The method that will be applied
     */


    function addHandle(attrs, handler) {
      var arr = attrs.split("|"),
          i = arr.length;

      while (i--) {
        Expr.attrHandle[arr[i]] = handler;
      }
    }
    /**
     * Checks document order of two siblings
     * @param {Element} a
     * @param {Element} b
     * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
     */


    function siblingCheck(a, b) {
      var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex; // Use IE sourceIndex if available on both nodes

      if (diff) {
        return diff;
      } // Check if b follows a


      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }

      return a ? 1 : -1;
    }
    /**
     * Returns a function to use in pseudos for input types
     * @param {String} type
     */


    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === "input" && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for buttons
     * @param {String} type
     */


    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === "input" || name === "button") && elem.type === type;
      };
    }
    /**
     * Returns a function to use in pseudos for :enabled/:disabled
     * @param {Boolean} disabled true for :disabled; false for :enabled
     */


    function createDisabledPseudo(disabled) {
      // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
      return function (elem) {
        // Only certain elements can match :enabled or :disabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
        // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
        if ("form" in elem) {
          // Check for inherited disabledness on relevant non-disabled elements:
          // * listed form-associated elements in a disabled fieldset
          //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
          // * option elements in a disabled optgroup
          //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
          // All such elements have a "form" property.
          if (elem.parentNode && elem.disabled === false) {
            // Option elements defer to a parent optgroup if present
            if ("label" in elem) {
              if ("label" in elem.parentNode) {
                return elem.parentNode.disabled === disabled;
              } else {
                return elem.disabled === disabled;
              }
            } // Support: IE 6 - 11
            // Use the isDisabled shortcut property to check for disabled fieldset ancestors


            return elem.isDisabled === disabled || // Where there is no isDisabled, check manually

            /* jshint -W018 */
            elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
          }

          return elem.disabled === disabled; // Try to winnow out elements that can't be disabled before trusting the disabled property.
          // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
          // even exist on them, let alone have a boolean value.
        } else if ("label" in elem) {
          return elem.disabled === disabled;
        } // Remaining elements are neither :enabled nor :disabled


        return false;
      };
    }
    /**
     * Returns a function to use in pseudos for positionals
     * @param {Function} fn
     */


    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length; // Match elements found at the specified indexes

          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    /**
     * Checks a node for validity as a Sizzle context
     * @param {Element|Object=} context
     * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
     */


    function testContext(context) {
      return context && typeof context.getElementsByTagName !== "undefined" && context;
    } // Expose support vars for convenience


    support = Sizzle.support = {};
    /**
     * Detects XML nodes
     * @param {Element|Object} elem An element or a document
     * @returns {Boolean} True iff elem is a non-HTML XML node
     */

    isXML = Sizzle.isXML = function (elem) {
      var namespace = elem.namespaceURI,
          docElem = (elem.ownerDocument || elem).documentElement; // Support: IE <=8
      // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
      // https://bugs.jquery.com/ticket/4833

      return !rhtml.test(namespace || docElem && docElem.nodeName || "HTML");
    };
    /**
     * Sets document-related variables once based on the current document
     * @param {Element|Object} [doc] An element or document object to use to set the document
     * @returns {Object} Returns the current document
     */


    setDocument = Sizzle.setDocument = function (node) {
      var hasCompare,
          subWindow,
          doc = node ? node.ownerDocument || node : preferredDoc; // Return early if doc is invalid or already selected

      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      } // Update global variables


      document = doc;
      docElem = document.documentElement;
      documentIsHTML = !isXML(document); // Support: IE 9-11, Edge
      // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)

      if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {
        // Support: IE 11, Edge
        if (subWindow.addEventListener) {
          subWindow.addEventListener("unload", unloadHandler, false); // Support: IE 9 - 10 only
        } else if (subWindow.attachEvent) {
          subWindow.attachEvent("onunload", unloadHandler);
        }
      }
      /* Attributes
      ---------------------------------------------------------------------- */
      // Support: IE<8
      // Verify that getAttribute really returns attributes and not properties
      // (excepting IE8 booleans)


      support.attributes = assert(function (el) {
        el.className = "i";
        return !el.getAttribute("className");
      });
      /* getElement(s)By*
      ---------------------------------------------------------------------- */
      // Check if getElementsByTagName("*") returns only elements

      support.getElementsByTagName = assert(function (el) {
        el.appendChild(document.createComment(""));
        return !el.getElementsByTagName("*").length;
      }); // Support: IE<9

      support.getElementsByClassName = rnative.test(document.getElementsByClassName); // Support: IE<10
      // Check if getElementById returns elements by name
      // The broken getElementById methods don't pick up programmatically-set names,
      // so use a roundabout getElementsByName test

      support.getById = assert(function (el) {
        docElem.appendChild(el).id = expando;
        return !document.getElementsByName || !document.getElementsByName(expando).length;
      }); // ID filter and find

      if (support.getById) {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute("id") === attrId;
          };
        };

        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var elem = context.getElementById(id);
            return elem ? [elem] : [];
          }
        };
      } else {
        Expr.filter["ID"] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
            return node && node.value === attrId;
          };
        }; // Support: IE 6 - 7 only
        // getElementById is not reliable as a find shortcut


        Expr.find["ID"] = function (id, context) {
          if (typeof context.getElementById !== "undefined" && documentIsHTML) {
            var node,
                i,
                elems,
                elem = context.getElementById(id);

            if (elem) {
              // Verify the id attribute
              node = elem.getAttributeNode("id");

              if (node && node.value === id) {
                return [elem];
              } // Fall back on getElementsByName


              elems = context.getElementsByName(id);
              i = 0;

              while (elem = elems[i++]) {
                node = elem.getAttributeNode("id");

                if (node && node.value === id) {
                  return [elem];
                }
              }
            }

            return [];
          }
        };
      } // Tag


      Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
        if (typeof context.getElementsByTagName !== "undefined") {
          return context.getElementsByTagName(tag); // DocumentFragment nodes don't have gEBTN
        } else if (support.qsa) {
          return context.querySelectorAll(tag);
        }
      } : function (tag, context) {
        var elem,
            tmp = [],
            i = 0,
            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
        results = context.getElementsByTagName(tag); // Filter out possible comments

        if (tag === "*") {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }

          return tmp;
        }

        return results;
      }; // Class

      Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
          return context.getElementsByClassName(className);
        }
      };
      /* QSA/matchesSelector
      ---------------------------------------------------------------------- */
      // QSA and matchesSelector support
      // matchesSelector(:active) reports false when true (IE9/Opera 11.5)


      rbuggyMatches = []; // qSa(:focus) reports false when true (Chrome 21)
      // We allow this because of a bug in IE8/9 that throws an error
      // whenever `document.activeElement` is accessed on an iframe
      // So, we allow :focus to pass through QSA all the time to avoid the IE error
      // See https://bugs.jquery.com/ticket/13378

      rbuggyQSA = [];

      if (support.qsa = rnative.test(document.querySelectorAll)) {
        // Build QSA regex
        // Regex strategy adopted from Diego Perini
        assert(function (el) {
          // Select is set to empty string on purpose
          // This is to test IE's treatment of not explicitly
          // setting a boolean content attribute,
          // since its presence should be enough
          // https://bugs.jquery.com/ticket/12359
          docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>"; // Support: IE8, Opera 11-12.16
          // Nothing should be selected when empty strings follow ^= or $= or *=
          // The test attribute must be unknown in Opera but "safe" for WinRT
          // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section

          if (el.querySelectorAll("[msallowcapture^='']").length) {
            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
          } // Support: IE8
          // Boolean attributes and "value" are not treated correctly


          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          } // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+


          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          } // Webkit/Opera - :checked should return selected option elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          // IE8 throws error here and will not see later tests


          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          } // Support: Safari 8+, iOS 8+
          // https://bugs.webkit.org/show_bug.cgi?id=136851
          // In-page `selector#id sibling-combinator selector` fails


          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
        });
        assert(function (el) {
          el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>"; // Support: Windows 8 Native Apps
          // The type and name attributes are restricted during .innerHTML assignment

          var input = document.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D"); // Support: IE8
          // Enforce case-sensitivity of name attribute

          if (el.querySelectorAll("[name=d]").length) {
            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
          } // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
          // IE8 throws error here and will not see later tests


          if (el.querySelectorAll(":enabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Support: IE9-11+
          // IE's :disabled selector does not pick up the children of disabled fieldsets


          docElem.appendChild(el).disabled = true;

          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          } // Opera 10-11 does not throw on post-comma invalid pseudos


          el.querySelectorAll("*,:x");
          rbuggyQSA.push(",.*:");
        });
      }

      if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (el) {
          // Check to see if it's possible to do matchesSelector
          // on a disconnected node (IE 9)
          support.disconnectedMatch = matches.call(el, "*"); // This should fail with an exception
          // Gecko does not error, returns false instead

          matches.call(el, "[s!='']:x");
          rbuggyMatches.push("!=", pseudos);
        });
      }

      rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
      rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
      /* Contains
      ---------------------------------------------------------------------- */

      hasCompare = rnative.test(docElem.compareDocumentPosition); // Element contains another
      // Purposefully self-exclusive
      // As in, an element does not contain itself

      contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a,
            bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }

        return false;
      };
      /* Sorting
      ---------------------------------------------------------------------- */
      // Document order sorting

      sortOrder = hasCompare ? function (a, b) {
        // Flag for duplicate removal
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } // Sort on method existence if only one input has compareDocumentPosition


        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;

        if (compare) {
          return compare;
        } // Calculate position if both inputs belong to the same document


        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
        1; // Disconnected nodes

        if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
          // Choose the first element that is related to our preferred document
          if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
            return -1;
          }

          if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
            return 1;
          } // Maintain original order


          return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
        }

        return compare & 4 ? -1 : 1;
      } : function (a, b) {
        // Exit early if the nodes are identical
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }

        var cur,
            i = 0,
            aup = a.parentNode,
            bup = b.parentNode,
            ap = [a],
            bp = [b]; // Parentless nodes are either documents or disconnected

        if (!aup || !bup) {
          return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0; // If the nodes are siblings, we can do a quick check
        } else if (aup === bup) {
          return siblingCheck(a, b);
        } // Otherwise we need full lists of their ancestors for comparison


        cur = a;

        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }

        cur = b;

        while (cur = cur.parentNode) {
          bp.unshift(cur);
        } // Walk down the tree looking for a discrepancy


        while (ap[i] === bp[i]) {
          i++;
        }

        return i ? // Do a sibling check if the nodes have a common ancestor
        siblingCheck(ap[i], bp[i]) : // Otherwise nodes in our document sort first
        ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      return document;
    };

    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };

    Sizzle.matchesSelector = function (elem, expr) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      if (support.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
        try {
          var ret = matches.call(elem, expr); // IE 9's matchesSelector returns false on disconnected nodes

          if (ret || support.disconnectedMatch || // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
          nonnativeSelectorCache(expr, true);
        }
      }

      return Sizzle(expr, document, null, [elem]).length > 0;
    };

    Sizzle.contains = function (context, elem) {
      // Set document vars if needed
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }

      return contains(context, elem);
    };

    Sizzle.attr = function (elem, name) {
      // Set document vars if needed
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }

      var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
      val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
      return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
    };

    Sizzle.escape = function (sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };

    Sizzle.error = function (msg) {
      throw new Error("Syntax error, unrecognized expression: " + msg);
    };
    /**
     * Document sorting and removing duplicates
     * @param {ArrayLike} results
     */


    Sizzle.uniqueSort = function (results) {
      var elem,
          duplicates = [],
          j = 0,
          i = 0; // Unless we *know* we can detect duplicates, assume their presence

      hasDuplicate = !support.detectDuplicates;
      sortInput = !support.sortStable && results.slice(0);
      results.sort(sortOrder);

      if (hasDuplicate) {
        while (elem = results[i++]) {
          if (elem === results[i]) {
            j = duplicates.push(i);
          }
        }

        while (j--) {
          results.splice(duplicates[j], 1);
        }
      } // Clear input after sorting to release objects
      // See https://github.com/jquery/sizzle/pull/225


      sortInput = null;
      return results;
    };
    /**
     * Utility function for retrieving the text value of an array of DOM nodes
     * @param {Array|Element} elem
     */


    getText = Sizzle.getText = function (elem) {
      var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

      if (!nodeType) {
        // If no nodeType, this is expected to be an array
        while (node = elem[i++]) {
          // Do not traverse comment nodes
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        // Use textContent for elements
        // innerText usage removed for consistency of new lines (jQuery #11153)
        if (typeof elem.textContent === "string") {
          return elem.textContent;
        } else {
          // Traverse its children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      } // Do not include comment or processing instruction nodes


      return ret;
    };

    Expr = Sizzle.selectors = {
      // Can be adjusted by the user
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: true
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: true
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        "ATTR": function (match) {
          match[1] = match[1].replace(runescape, funescape); // Move the given value to match[3] whether quoted or unquoted

          match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

          if (match[2] === "~=") {
            match[3] = " " + match[3] + " ";
          }

          return match.slice(0, 4);
        },
        "CHILD": function (match) {
          /* matches from matchExpr["CHILD"]
          	1 type (only|nth|...)
          	2 what (child|of-type)
          	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
          	4 xn-component of xn+y argument ([+-]?\d*n|)
          	5 sign of xn-component
          	6 x of xn-component
          	7 sign of y-component
          	8 y of y-component
          */
          match[1] = match[1].toLowerCase();

          if (match[1].slice(0, 3) === "nth") {
            // nth-* requires argument
            if (!match[3]) {
              Sizzle.error(match[0]);
            } // numeric x and y parameters for Expr.filter.CHILD
            // remember that false/true cast respectively to 0/1


            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
            match[5] = +(match[7] + match[8] || match[3] === "odd"); // other types prohibit arguments
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }

          return match;
        },
        "PSEUDO": function (match) {
          var excess,
              unquoted = !match[6] && match[2];

          if (matchExpr["CHILD"].test(match[0])) {
            return null;
          } // Accept quoted arguments as-is


          if (match[3]) {
            match[2] = match[4] || match[5] || ""; // Strip excess characters from unquoted arguments
          } else if (unquoted && rpseudo.test(unquoted) && ( // Get excess from tokenize (recursively)
          excess = tokenize(unquoted, true)) && ( // advance to the next closing parenthesis
          excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
            // excess is a negative index
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          } // Return only captures needed by the pseudo filter method (type and argument)


          return match.slice(0, 3);
        }
      },
      filter: {
        "TAG": function (nodeNameSelector) {
          var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
          return nodeNameSelector === "*" ? function () {
            return true;
          } : function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        "CLASS": function (className) {
          var pattern = classCache[className + " "];
          return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
            return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
          });
        },
        "ATTR": function (name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);

            if (result == null) {
              return operator === "!=";
            }

            if (!operator) {
              return true;
            }

            result += "";
            return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
          };
        },
        "CHILD": function (type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";
          return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
          function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache,
                uniqueCache,
                outerCache,
                node,
                nodeIndex,
                start,
                dir = simple !== forward ? "nextSibling" : "previousSibling",
                parent = elem.parentNode,
                name = ofType && elem.nodeName.toLowerCase(),
                useCache = !xml && !ofType,
                diff = false;

            if (parent) {
              // :(first|last|only)-(child|of-type)
              if (simple) {
                while (dir) {
                  node = elem;

                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  } // Reverse direction for :only-* (if we haven't yet done so)


                  start = dir = type === "only" && !start && "nextSibling";
                }

                return true;
              }

              start = [forward ? parent.firstChild : parent.lastChild]; // non-xml :nth-child(...) stores cache data on `parent`

              if (forward && useCache) {
                // Seek `elem` from a previously-cached index
                // ...in a gzip-friendly way
                node = parent;
                outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                // Defend against cloned attroperties (jQuery gh-1709)

                uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                cache = uniqueCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = nodeIndex && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];

                while (node = ++nodeIndex && node && node[dir] || ( // Fallback to seeking `elem` from the start
                diff = nodeIndex = 0) || start.pop()) {
                  // When found, cache indexes on `parent` and break
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    uniqueCache[type] = [dirruns, nodeIndex, diff];
                    break;
                  }
                }
              } else {
                // Use previously-cached element index if available
                if (useCache) {
                  // ...in a gzip-friendly way
                  node = elem;
                  outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                  // Defend against cloned attroperties (jQuery gh-1709)

                  uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                  cache = uniqueCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex;
                } // xml :nth-child(...)
                // or :nth-last-child(...) or :nth(-last)?-of-type(...)


                if (diff === false) {
                  // Use the same loop as above to seek `elem` from the start
                  while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                    if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                      // Cache the index of each encountered element
                      if (useCache) {
                        outerCache = node[expando] || (node[expando] = {}); // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)

                        uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});
                        uniqueCache[type] = [dirruns, diff];
                      }

                      if (node === elem) {
                        break;
                      }
                    }
                  }
                }
              } // Incorporate the offset, then check against cycle size


              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        "PSEUDO": function (pseudo, argument) {
          // pseudo-class names are case-insensitive
          // http://www.w3.org/TR/selectors/#pseudo-classes
          // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
          // Remember that setFilters inherits from pseudos
          var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo); // The user may use createPseudo to indicate that
          // arguments are needed to create the filter function
          // just as Sizzle does

          if (fn[expando]) {
            return fn(argument);
          } // But maintain support for old signatures


          if (fn.length > 1) {
            args = [pseudo, pseudo, "", argument];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx,
                  matched = fn(seed, argument),
                  i = matched.length;

              while (i--) {
                idx = indexOf(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }

          return fn;
        }
      },
      pseudos: {
        // Potentially complex pseudos
        "not": markFunction(function (selector) {
          // Trim the selector passed to compile
          // to avoid treating leading and trailing
          // spaces as combinators
          var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem,
                unmatched = matcher(seed, null, xml, []),
                i = seed.length; // Match elements unmatched by `matcher`

            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results); // Don't keep the element (issue #299)

            input[0] = null;
            return !results.pop();
          };
        }),
        "has": markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        "contains": markFunction(function (text) {
          text = text.replace(runescape, funescape);
          return function (elem) {
            return (elem.textContent || getText(elem)).indexOf(text) > -1;
          };
        }),
        // "Whether an element is represented by a :lang() selector
        // is based solely on the element's language value
        // being equal to the identifier C,
        // or beginning with the identifier C immediately followed by "-".
        // The matching of C against the element's language value is performed case-insensitively.
        // The identifier C does not have to be a valid language name."
        // http://www.w3.org/TR/selectors/#lang-pseudo
        "lang": markFunction(function (lang) {
          // lang value must be a valid identifier
          if (!ridentifier.test(lang || "")) {
            Sizzle.error("unsupported lang: " + lang);
          }

          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;

            do {
              if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);

            return false;
          };
        }),
        // Miscellaneous
        "target": function (elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        "root": function (elem) {
          return elem === docElem;
        },
        "focus": function (elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        // Boolean properties
        "enabled": createDisabledPseudo(false),
        "disabled": createDisabledPseudo(true),
        "checked": function (elem) {
          // In CSS3, :checked should return both checked and selected elements
          // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
        },
        "selected": function (elem) {
          // Accessing this property makes selected-by-default
          // options in Safari work properly
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }

          return elem.selected === true;
        },
        // Contents
        "empty": function (elem) {
          // http://www.w3.org/TR/selectors/#empty-pseudo
          // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
          //   but not by others (comment: 8; processing instruction: 7; etc.)
          // nodeType < 6 works because attributes (2) do not appear as children
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeType < 6) {
              return false;
            }
          }

          return true;
        },
        "parent": function (elem) {
          return !Expr.pseudos["empty"](elem);
        },
        // Element/input types
        "header": function (elem) {
          return rheader.test(elem.nodeName);
        },
        "input": function (elem) {
          return rinputs.test(elem.nodeName);
        },
        "button": function (elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === "button" || name === "button";
        },
        "text": function (elem) {
          var attr;
          return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ( // Support: IE<8
          // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
          (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
        },
        // Position-in-collection
        "first": createPositionalPseudo(function () {
          return [0];
        }),
        "last": createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        "even": createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "odd": createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;

          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument > length ? length : argument;

          for (; --i >= 0;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        }),
        "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;

          for (; ++i < length;) {
            matchIndexes.push(i);
          }

          return matchIndexes;
        })
      }
    };
    Expr.pseudos["nth"] = Expr.pseudos["eq"]; // Add button/input type pseudos

    for (i in {
      radio: true,
      checkbox: true,
      file: true,
      password: true,
      image: true
    }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }

    for (i in {
      submit: true,
      reset: true
    }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    } // Easy API for creating new setFilters


    function setFilters() {}

    setFilters.prototype = Expr.filters = Expr.pseudos;
    Expr.setFilters = new setFilters();

    tokenize = Sizzle.tokenize = function (selector, parseOnly) {
      var matched,
          match,
          tokens,
          type,
          soFar,
          groups,
          preFilters,
          cached = tokenCache[selector + " "];

      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }

      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;

      while (soFar) {
        // Comma and first run
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            // Don't consume trailing commas as valid
            soFar = soFar.slice(match[0].length) || soFar;
          }

          groups.push(tokens = []);
        }

        matched = false; // Combinators

        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            // Cast descendant combinators to space
            type: match[0].replace(rtrim, " ")
          });
          soFar = soFar.slice(matched.length);
        } // Filters


        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }

        if (!matched) {
          break;
        }
      } // Return the length of the invalid excess
      // if we're just parsing
      // Otherwise, throw an error or return tokens


      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : // Cache the tokens
      tokenCache(selector, groups).slice(0);
    };

    function toSelector(tokens) {
      var i = 0,
          len = tokens.length,
          selector = "";

      for (; i < len; i++) {
        selector += tokens[i].value;
      }

      return selector;
    }

    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir,
          skip = combinator.next,
          key = skip || dir,
          checkNonElements = base && key === "parentNode",
          doneName = done++;
      return combinator.first ? // Check against closest ancestor/preceding element
      function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }

        return false;
      } : // Check against all ancestor/preceding elements
      function (elem, context, xml) {
        var oldCache,
            uniqueCache,
            outerCache,
            newCache = [dirruns, doneName]; // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching

        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {}); // Support: IE <9 only
              // Defend against cloned attroperties (jQuery gh-1709)

              uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

              if (skip && skip === elem.nodeName.toLowerCase()) {
                elem = elem[dir] || elem;
              } else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                // Assign to newCache so results back-propagate to previous elements
                return newCache[2] = oldCache[2];
              } else {
                // Reuse newcache so results back-propagate to previous elements
                uniqueCache[key] = newCache; // A match means we're done; a fail means we have to keep checking

                if (newCache[2] = matcher(elem, context, xml)) {
                  return true;
                }
              }
            }
          }
        }

        return false;
      };
    }

    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;

        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }

        return true;
      } : matchers[0];
    }

    function multipleContexts(selector, contexts, results) {
      var i = 0,
          len = contexts.length;

      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }

      return results;
    }

    function condense(unmatched, map, filter, context, xml) {
      var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);

            if (mapped) {
              map.push(i);
            }
          }
        }
      }

      return newUnmatched;
    }

    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }

      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }

      return markFunction(function (seed, results, context, xml) {
        var temp,
            i,
            elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,
            // Get initial elements from seed or context
        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
            // Prefilter to get matcher input, preserving a map for seed-results synchronization
        matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
            matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
        [] : // ...otherwise use results directly
        results : matcherIn; // Find primary matches

        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        } // Apply postFilter


        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml); // Un-match failing elements by moving them back to matcherIn

          i = temp.length;

          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }

        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              // Get the final matcherOut by condensing this intermediate into postFinder contexts
              temp = [];
              i = matcherOut.length;

              while (i--) {
                if (elem = matcherOut[i]) {
                  // Restore matcherIn since elem is not yet a final match
                  temp.push(matcherIn[i] = elem);
                }
              }

              postFinder(null, matcherOut = [], temp, xml);
            } // Move matched elements from seed to results to keep them synchronized


            i = matcherOut.length;

            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          } // Add elements to results, through postFinder if defined

        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);

          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }

    function matcherFromTokens(tokens) {
      var checkContext,
          matcher,
          j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,
          // The foundational matcher ensures that elements are reachable from top-level context(s)
      matchContext = addCombinator(function (elem) {
        return elem === checkContext;
      }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
        return indexOf(checkContext, elem) > -1;
      }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
        var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml)); // Avoid hanging onto element (issue #299)

        checkContext = null;
        return ret;
      }];

      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches); // Return special upon seeing a positional matcher

          if (matcher[expando]) {
            // Find the next relative operator (if any) for proper handling
            j = ++i;

            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }

            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector( // If the preceding token was a descendant combinator, insert an implicit any-element `*`
            tokens.slice(0, i - 1).concat({
              value: tokens[i - 2].type === " " ? "*" : ""
            })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }

          matchers.push(matcher);
        }
      }

      return elementMatcher(matchers);
    }

    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function (seed, context, xml, results, outermost) {
        var elem,
            j,
            matcher,
            matchedCount = 0,
            i = "0",
            unmatched = seed && [],
            setMatched = [],
            contextBackup = outermostContext,
            // We must always have either seed elements or outermost context
        elems = seed || byElement && Expr.find["TAG"]("*", outermost),
            // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
            len = elems.length;

        if (outermost) {
          outermostContext = context === document || context || outermost;
        } // Add elements passing elementMatchers directly to results
        // Support: IE<9, Safari
        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id


        for (; i !== len && (elem = elems[i]) != null; i++) {
          if (byElement && elem) {
            j = 0;

            if (!context && elem.ownerDocument !== document) {
              setDocument(elem);
              xml = !documentIsHTML;
            }

            while (matcher = elementMatchers[j++]) {
              if (matcher(elem, context || document, xml)) {
                results.push(elem);
                break;
              }
            }

            if (outermost) {
              dirruns = dirrunsUnique;
            }
          } // Track unmatched elements for set filters


          if (bySet) {
            // They will have gone through all possible matchers
            if (elem = !matcher && elem) {
              matchedCount--;
            } // Lengthen the array for every element, matched or not


            if (seed) {
              unmatched.push(elem);
            }
          }
        } // `i` is now the count of elements visited above, and adding it to `matchedCount`
        // makes the latter nonnegative.


        matchedCount += i; // Apply set filters to unmatched elements
        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
        // no element matchers and no seed.
        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
        // numerically zero.

        if (bySet && i !== matchedCount) {
          j = 0;

          while (matcher = setMatchers[j++]) {
            matcher(unmatched, setMatched, context, xml);
          }

          if (seed) {
            // Reintegrate element matches to eliminate the need for sorting
            if (matchedCount > 0) {
              while (i--) {
                if (!(unmatched[i] || setMatched[i])) {
                  setMatched[i] = pop.call(results);
                }
              }
            } // Discard index placeholder values to get only actual matches


            setMatched = condense(setMatched);
          } // Add matches to results


          push.apply(results, setMatched); // Seedless set matches succeeding multiple successful matchers stipulate sorting

          if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
            Sizzle.uniqueSort(results);
          }
        } // Override manipulation of globals by nested matchers


        if (outermost) {
          dirruns = dirrunsUnique;
          outermostContext = contextBackup;
        }

        return unmatched;
      };

      return bySet ? markFunction(superMatcher) : superMatcher;
    }

    compile = Sizzle.compile = function (selector, match
    /* Internal Use Only */
    ) {
      var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

      if (!cached) {
        // Generate a function of recursive functions that can be used to check each element
        if (!match) {
          match = tokenize(selector);
        }

        i = match.length;

        while (i--) {
          cached = matcherFromTokens(match[i]);

          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        } // Cache the compiled function


        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers)); // Save selector and tokenization

        cached.selector = selector;
      }

      return cached;
    };
    /**
     * A low-level selection function that works with Sizzle's compiled
     *  selector functions
     * @param {String|Function} selector A selector or a pre-compiled
     *  selector function built with Sizzle.compile
     * @param {Element} context
     * @param {Array} [results]
     * @param {Array} [seed] A set of elements to match against
     */


    select = Sizzle.select = function (selector, context, results, seed) {
      var i,
          tokens,
          token,
          type,
          find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize(selector = compiled.selector || selector);
      results = results || []; // Try to minimize operations if there is only one selector in the list and no seed
      // (the latter of which guarantees us context)

      if (match.length === 1) {
        // Reduce context if the leading compound selector is an ID
        tokens = match[0] = match[0].slice(0);

        if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
          context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];

          if (!context) {
            return results; // Precompiled matchers will still verify ancestry, so step up a level
          } else if (compiled) {
            context = context.parentNode;
          }

          selector = selector.slice(tokens.shift().value.length);
        } // Fetch a seed set for right-to-left matching


        i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;

        while (i--) {
          token = tokens[i]; // Abort if we hit a combinator

          if (Expr.relative[type = token.type]) {
            break;
          }

          if (find = Expr.find[type]) {
            // Search, expanding context for leading sibling combinators
            if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
              // If seed is empty or no tokens remain, we can return early
              tokens.splice(i, 1);
              selector = seed.length && toSelector(tokens);

              if (!selector) {
                push.apply(results, seed);
                return results;
              }

              break;
            }
          }
        }
      } // Compile and execute a filtering function if one is not provided
      // Provide `match` to avoid retokenization if we modified the selector above


      (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
      return results;
    }; // One-time assignments
    // Sort stability


    support.sortStable = expando.split("").sort(sortOrder).join("") === expando; // Support: Chrome 14-35+
    // Always assume duplicates if they aren't passed to the comparison function

    support.detectDuplicates = !!hasDuplicate; // Initialize against the default document

    setDocument(); // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
    // Detached nodes confoundingly follow *each other*

    support.sortDetached = assert(function (el) {
      // Should return 1, but returns 4 (following)
      return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
    }); // Support: IE<8
    // Prevent attribute/property "interpolation"
    // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx

    if (!assert(function (el) {
      el.innerHTML = "<a href='#'></a>";
      return el.firstChild.getAttribute("href") === "#";
    })) {
      addHandle("type|href|height|width", function (elem, name, isXML) {
        if (!isXML) {
          return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        }
      });
    } // Support: IE<9
    // Use defaultValue in place of getAttribute("value")


    if (!support.attributes || !assert(function (el) {
      el.innerHTML = "<input/>";
      el.firstChild.setAttribute("value", "");
      return el.firstChild.getAttribute("value") === "";
    })) {
      addHandle("value", function (elem, name, isXML) {
        if (!isXML && elem.nodeName.toLowerCase() === "input") {
          return elem.defaultValue;
        }
      });
    } // Support: IE<9
    // Use getAttributeNode to fetch booleans when getAttribute lies


    if (!assert(function (el) {
      return el.getAttribute("disabled") == null;
    })) {
      addHandle(booleans, function (elem, name, isXML) {
        var val;

        if (!isXML) {
          return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        }
      });
    }

    return Sizzle;
  }(window);

  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors; // Deprecated

  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;
  jQuery.escapeSelector = Sizzle.escape;

  var dir = function (elem, dir, until) {
    var matched = [],
        truncate = until !== undefined;

    while ((elem = elem[dir]) && elem.nodeType !== 9) {
      if (elem.nodeType === 1) {
        if (truncate && jQuery(elem).is(until)) {
          break;
        }

        matched.push(elem);
      }
    }

    return matched;
  };

  var siblings = function (n, elem) {
    var matched = [];

    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        matched.push(n);
      }
    }

    return matched;
  };

  var rneedsContext = jQuery.expr.match.needsContext;

  function nodeName(elem, name) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  }

  ;
  var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i; // Implement the identical functionality for filter and not

  function winnow(elements, qualifier, not) {
    if (isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        return !!qualifier.call(elem, i, elem) !== not;
      });
    } // Single element


    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier !== not;
      });
    } // Arraylike of elements (jQuery, arguments, Array)


    if (typeof qualifier !== "string") {
      return jQuery.grep(elements, function (elem) {
        return indexOf.call(qualifier, elem) > -1 !== not;
      });
    } // Filtered directly for both simple and complex selectors


    return jQuery.filter(qualifier, elements, not);
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    if (elems.length === 1 && elem.nodeType === 1) {
      return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
    }

    return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
      return elem.nodeType === 1;
    }));
  };

  jQuery.fn.extend({
    find: function (selector) {
      var i,
          ret,
          len = this.length,
          self = this;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      ret = this.pushStack([]);

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      return len > 1 ? jQuery.uniqueSort(ret) : ret;
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function (selector) {
      return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
      // so $("p:first").is("p:last") won't return true for a doc with two "p".
      typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
    }
  }); // Initialize a jQuery object
  // A central reference to the root jQuery(document)

  var rootjQuery,
      // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  // Shortcut simple #id case for speed
  rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      init = jQuery.fn.init = function (selector, context, root) {
    var match, elem; // HANDLE: $(""), $(null), $(undefined), $(false)

    if (!selector) {
      return this;
    } // Method init() accepts an alternate rootjQuery
    // so migrate can support jQuery.sub (gh-2101)


    root = root || rootjQuery; // Handle HTML strings

    if (typeof selector === "string") {
      if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [null, selector, null];
      } else {
        match = rquickExpr.exec(selector);
      } // Match html or make sure no context is specified for #id


      if (match && (match[1] || !context)) {
        // HANDLE: $(html) -> $(array)
        if (match[1]) {
          context = context instanceof jQuery ? context[0] : context; // Option to run scripts is true for back-compat
          // Intentionally let the error be thrown if parseHTML is not present

          jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true)); // HANDLE: $(html, props)

          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
            for (match in context) {
              // Properties of context are called as methods if possible
              if (isFunction(this[match])) {
                this[match](context[match]); // ...and otherwise set as attributes
              } else {
                this.attr(match, context[match]);
              }
            }
          }

          return this; // HANDLE: $(#id)
        } else {
          elem = document.getElementById(match[2]);

          if (elem) {
            // Inject the element directly into the jQuery object
            this[0] = elem;
            this.length = 1;
          }

          return this;
        } // HANDLE: $(expr, $(...))

      } else if (!context || context.jquery) {
        return (context || root).find(selector); // HANDLE: $(expr, context)
        // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor(context).find(selector);
      } // HANDLE: $(DOMElement)

    } else if (selector.nodeType) {
      this[0] = selector;
      this.length = 1;
      return this; // HANDLE: $(function)
      // Shortcut for document ready
    } else if (isFunction(selector)) {
      return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
      selector(jQuery);
    }

    return jQuery.makeArray(selector, this);
  }; // Give the init function the jQuery prototype for later instantiation


  init.prototype = jQuery.fn; // Initialize central reference

  rootjQuery = jQuery(document);
  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      // Methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };
  jQuery.fn.extend({
    has: function (target) {
      var targets = jQuery(target, this),
          l = targets.length;
      return this.filter(function () {
        var i = 0;

        for (; i < l; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    closest: function (selectors, context) {
      var cur,
          i = 0,
          l = this.length,
          matched = [],
          targets = typeof selectors !== "string" && jQuery(selectors); // Positional selectors never match, since there's no _selection_ context

      if (!rneedsContext.test(selectors)) {
        for (; i < l; i++) {
          for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
            // Always skip document fragments
            if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
            cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
              matched.push(cur);
              break;
            }
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
    },
    // Determine the position of an element within the set
    index: function (elem) {
      // No argument, return index in parent
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      } // Index in selector


      if (typeof elem === "string") {
        return indexOf.call(jQuery(elem), this[0]);
      } // Locate the position of the desired element


      return indexOf.call(this, // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem);
    },
    add: function (selector, context) {
      return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
    },
    addBack: function (selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });

  function sibling(cur, dir) {
    while ((cur = cur[dir]) && cur.nodeType !== 1) {}

    return cur;
  }

  jQuery.each({
    parent: function (elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return dir(elem, "parentNode");
    },
    parentsUntil: function (elem, i, until) {
      return dir(elem, "parentNode", until);
    },
    next: function (elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function (elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function (elem) {
      return dir(elem, "nextSibling");
    },
    prevAll: function (elem) {
      return dir(elem, "previousSibling");
    },
    nextUntil: function (elem, i, until) {
      return dir(elem, "nextSibling", until);
    },
    prevUntil: function (elem, i, until) {
      return dir(elem, "previousSibling", until);
    },
    siblings: function (elem) {
      return siblings((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return siblings(elem.firstChild);
    },
    contents: function (elem) {
      if (typeof elem.contentDocument !== "undefined") {
        return elem.contentDocument;
      } // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
      // Treat the template element as a regular one in browsers that
      // don't support it.


      if (nodeName(elem, "template")) {
        elem = elem.content || elem;
      }

      return jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var matched = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        matched = jQuery.filter(selector, matched);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          jQuery.uniqueSort(matched);
        } // Reverse order for parents* and prev-derivatives


        if (rparentsprev.test(name)) {
          matched.reverse();
        }
      }

      return this.pushStack(matched);
    };
  });
  var rnothtmlwhite = /[^\x20\t\r\n\f]+/g; // Convert String-formatted options into Object-formatted ones

  function createOptions(options) {
    var object = {};
    jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  /*
   * Create a callback list using the following parameters:
   *
   *	options: an optional list of space-separated options that will change how
   *			the callback list behaves or a more traditional option object
   *
   * By default a callback list will act like an event callback list and can be
   * "fired" multiple times.
   *
   * Possible options:
   *
   *	once:			will ensure the callback list can only be fired once (like a Deferred)
   *
   *	memory:			will keep track of previous values and will call any callback added
   *					after the list has been fired right away with the latest "memorized"
   *					values (like a Deferred)
   *
   *	unique:			will ensure a callback can only be added once (no duplicate in the list)
   *
   *	stopOnFalse:	interrupt callings when a callback returns false
   *
   */


  jQuery.Callbacks = function (options) {
    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

    var // Flag to know if list is currently firing
    firing,
        // Last fire value for non-forgettable lists
    memory,
        // Flag to know if list was already fired
    fired,
        // Flag to prevent firing
    locked,
        // Actual callback list
    list = [],
        // Queue of execution data for repeatable lists
    queue = [],
        // Index of currently firing callback (modified by add/remove as needed)
    firingIndex = -1,
        // Fire callbacks
    fire = function () {
      // Enforce single-firing
      locked = locked || options.once; // Execute callbacks for all pending executions,
      // respecting firingIndex overrides and runtime changes

      fired = firing = true;

      for (; queue.length; firingIndex = -1) {
        memory = queue.shift();

        while (++firingIndex < list.length) {
          // Run callback and check for early termination
          if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
            // Jump to end and forget the data so .add doesn't re-fire
            firingIndex = list.length;
            memory = false;
          }
        }
      } // Forget the data if we're done with it


      if (!options.memory) {
        memory = false;
      }

      firing = false; // Clean up if we're done firing for good

      if (locked) {
        // Keep an empty list if we have data for future add calls
        if (memory) {
          list = []; // Otherwise, this object is spent
        } else {
          list = "";
        }
      }
    },
        // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function () {
        if (list) {
          // If we have memory from a past run, we should fire after adding
          if (memory && !firing) {
            firingIndex = list.length - 1;
            queue.push(memory);
          }

          (function add(args) {
            jQuery.each(args, function (_, arg) {
              if (isFunction(arg)) {
                if (!options.unique || !self.has(arg)) {
                  list.push(arg);
                }
              } else if (arg && arg.length && toType(arg) !== "string") {
                // Inspect recursively
                add(arg);
              }
            });
          })(arguments);

          if (memory && !firing) {
            fire();
          }
        }

        return this;
      },
      // Remove a callback from the list
      remove: function () {
        jQuery.each(arguments, function (_, arg) {
          var index;

          while ((index = jQuery.inArray(arg, list, index)) > -1) {
            list.splice(index, 1); // Handle firing indexes

            if (index <= firingIndex) {
              firingIndex--;
            }
          }
        });
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function (fn) {
        return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
      },
      // Remove all callbacks from the list
      empty: function () {
        if (list) {
          list = [];
        }

        return this;
      },
      // Disable .fire and .add
      // Abort any current/pending executions
      // Clear all callbacks and values
      disable: function () {
        locked = queue = [];
        list = memory = "";
        return this;
      },
      disabled: function () {
        return !list;
      },
      // Disable .fire
      // Also disable .add unless we have memory (since it would have no effect)
      // Abort any pending executions
      lock: function () {
        locked = queue = [];

        if (!memory && !firing) {
          list = memory = "";
        }

        return this;
      },
      locked: function () {
        return !!locked;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function (context, args) {
        if (!locked) {
          args = args || [];
          args = [context, args.slice ? args.slice() : args];
          queue.push(args);

          if (!firing) {
            fire();
          }
        }

        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function () {
        self.fireWith(this, arguments);
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function () {
        return !!fired;
      }
    };

    return self;
  };

  function Identity(v) {
    return v;
  }

  function Thrower(ex) {
    throw ex;
  }

  function adoptValue(value, resolve, reject, noValue) {
    var method;

    try {
      // Check for promise aspect first to privilege synchronous behavior
      if (value && isFunction(method = value.promise)) {
        method.call(value).done(resolve).fail(reject); // Other thenables
      } else if (value && isFunction(method = value.then)) {
        method.call(value, resolve, reject); // Other non-thenables
      } else {
        // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
        // * false: [ value ].slice( 0 ) => resolve( value )
        // * true: [ value ].slice( 1 ) => resolve()
        resolve.apply(undefined, [value].slice(noValue));
      } // For Promises/A+, convert exceptions into rejections
      // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
      // Deferred#then to conditionally suppress rejection.

    } catch (value) {
      // Support: Android 4.0 only
      // Strict mode functions invoked without .call/.apply get global-object context
      reject.apply(undefined, [value]);
    }
  }

  jQuery.extend({
    Deferred: function (func) {
      var tuples = [// action, add listener, callbacks,
      // ... .then handlers, argument index, [final state]
      ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
          state = "pending",
          promise = {
        state: function () {
          return state;
        },
        always: function () {
          deferred.done(arguments).fail(arguments);
          return this;
        },
        "catch": function (fn) {
          return promise.then(null, fn);
        },
        // Keep pipe for back-compat
        pipe: function ()
        /* fnDone, fnFail, fnProgress */
        {
          var fns = arguments;
          return jQuery.Deferred(function (newDefer) {
            jQuery.each(tuples, function (i, tuple) {
              // Map tuples (progress, done, fail) to arguments (done, fail, progress)
              var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]; // deferred.progress(function() { bind to newDefer or newDefer.notify })
              // deferred.done(function() { bind to newDefer or newDefer.resolve })
              // deferred.fail(function() { bind to newDefer or newDefer.reject })

              deferred[tuple[1]](function () {
                var returned = fn && fn.apply(this, arguments);

                if (returned && isFunction(returned.promise)) {
                  returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                } else {
                  newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
                }
              });
            });
            fns = null;
          }).promise();
        },
        then: function (onFulfilled, onRejected, onProgress) {
          var maxDepth = 0;

          function resolve(depth, deferred, handler, special) {
            return function () {
              var that = this,
                  args = arguments,
                  mightThrow = function () {
                var returned, then; // Support: Promises/A+ section 2.3.3.3.3
                // https://promisesaplus.com/#point-59
                // Ignore double-resolution attempts

                if (depth < maxDepth) {
                  return;
                }

                returned = handler.apply(that, args); // Support: Promises/A+ section 2.3.1
                // https://promisesaplus.com/#point-48

                if (returned === deferred.promise()) {
                  throw new TypeError("Thenable self-resolution");
                } // Support: Promises/A+ sections 2.3.3.1, 3.5
                // https://promisesaplus.com/#point-54
                // https://promisesaplus.com/#point-75
                // Retrieve `then` only once


                then = returned && ( // Support: Promises/A+ section 2.3.4
                // https://promisesaplus.com/#point-64
                // Only check objects and functions for thenability
                typeof returned === "object" || typeof returned === "function") && returned.then; // Handle a returned thenable

                if (isFunction(then)) {
                  // Special processors (notify) just wait for resolution
                  if (special) {
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special)); // Normal processors (resolve) also hook into progress
                  } else {
                    // ...and disregard older resolution values
                    maxDepth++;
                    then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                  } // Handle all other returned values

                } else {
                  // Only substitute handlers pass on context
                  // and multiple values (non-spec behavior)
                  if (handler !== Identity) {
                    that = undefined;
                    args = [returned];
                  } // Process the value(s)
                  // Default process is resolve


                  (special || deferred.resolveWith)(that, args);
                }
              },
                  // Only normal processors (resolve) catch and reject exceptions
              process = special ? mightThrow : function () {
                try {
                  mightThrow();
                } catch (e) {
                  if (jQuery.Deferred.exceptionHook) {
                    jQuery.Deferred.exceptionHook(e, process.stackTrace);
                  } // Support: Promises/A+ section 2.3.3.3.4.1
                  // https://promisesaplus.com/#point-61
                  // Ignore post-resolution exceptions


                  if (depth + 1 >= maxDepth) {
                    // Only substitute handlers pass on context
                    // and multiple values (non-spec behavior)
                    if (handler !== Thrower) {
                      that = undefined;
                      args = [e];
                    }

                    deferred.rejectWith(that, args);
                  }
                }
              }; // Support: Promises/A+ section 2.3.3.3.1
              // https://promisesaplus.com/#point-57
              // Re-resolve promises immediately to dodge false rejection from
              // subsequent errors


              if (depth) {
                process();
              } else {
                // Call an optional hook to record the stack, in case of exception
                // since it's otherwise lost when execution goes async
                if (jQuery.Deferred.getStackHook) {
                  process.stackTrace = jQuery.Deferred.getStackHook();
                }

                window.setTimeout(process);
              }
            };
          }

          return jQuery.Deferred(function (newDefer) {
            // progress_handlers.add( ... )
            tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith)); // fulfilled_handlers.add( ... )

            tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity)); // rejected_handlers.add( ... )

            tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function (obj) {
          return obj != null ? jQuery.extend(obj, promise) : promise;
        }
      },
          deferred = {}; // Add list-specific methods

      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
            stateString = tuple[5]; // promise.progress = list.add
        // promise.done = list.add
        // promise.fail = list.add

        promise[tuple[1]] = list.add; // Handle state

        if (stateString) {
          list.add(function () {
            // state = "resolved" (i.e., fulfilled)
            // state = "rejected"
            state = stateString;
          }, // rejected_callbacks.disable
          // fulfilled_callbacks.disable
          tuples[3 - i][2].disable, // rejected_handlers.disable
          // fulfilled_handlers.disable
          tuples[3 - i][3].disable, // progress_callbacks.lock
          tuples[0][2].lock, // progress_handlers.lock
          tuples[0][3].lock);
        } // progress_handlers.fire
        // fulfilled_handlers.fire
        // rejected_handlers.fire


        list.add(tuple[3].fire); // deferred.notify = function() { deferred.notifyWith(...) }
        // deferred.resolve = function() { deferred.resolveWith(...) }
        // deferred.reject = function() { deferred.rejectWith(...) }

        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
          return this;
        }; // deferred.notifyWith = list.fireWith
        // deferred.resolveWith = list.fireWith
        // deferred.rejectWith = list.fireWith


        deferred[tuple[0] + "With"] = list.fireWith;
      }); // Make the deferred a promise

      promise.promise(deferred); // Call given func if any

      if (func) {
        func.call(deferred, deferred);
      } // All done!


      return deferred;
    },
    // Deferred helper
    when: function (singleValue) {
      var // count of uncompleted subordinates
      remaining = arguments.length,
          // count of unprocessed arguments
      i = remaining,
          // subordinate fulfillment data
      resolveContexts = Array(i),
          resolveValues = slice.call(arguments),
          // the master Deferred
      master = jQuery.Deferred(),
          // subordinate callback factory
      updateFunc = function (i) {
        return function (value) {
          resolveContexts[i] = this;
          resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;

          if (! --remaining) {
            master.resolveWith(resolveContexts, resolveValues);
          }
        };
      }; // Single- and empty arguments are adopted like Promise.resolve


      if (remaining <= 1) {
        adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining); // Use .then() to unwrap secondary thenables (cf. gh-3000)

        if (master.state() === "pending" || isFunction(resolveValues[i] && resolveValues[i].then)) {
          return master.then();
        }
      } // Multiple arguments are aggregated like Promise.all array elements


      while (i--) {
        adoptValue(resolveValues[i], updateFunc(i), master.reject);
      }

      return master.promise();
    }
  }); // These usually indicate a programmer mistake during development,
  // warn about them ASAP rather than swallowing them by default.

  var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

  jQuery.Deferred.exceptionHook = function (error, stack) {
    // Support: IE 8 - 9 only
    // Console exists when dev tools are open, which can happen at any time
    if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
      window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    }
  };

  jQuery.readyException = function (error) {
    window.setTimeout(function () {
      throw error;
    });
  }; // The deferred used on DOM ready


  var readyList = jQuery.Deferred();

  jQuery.fn.ready = function (fn) {
    readyList.then(fn) // Wrap jQuery.readyException in a function so that the lookup
    // happens at the time of error handling instead of callback
    // registration.
    .catch(function (error) {
      jQuery.readyException(error);
    });
    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,
    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,
    // Handle when the DOM is ready
    ready: function (wait) {
      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      } // Remember that the DOM is ready


      jQuery.isReady = true; // If a normal DOM Ready event fired, decrement, and wait if need be

      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      } // If there are functions bound, to execute


      readyList.resolveWith(document, [jQuery]);
    }
  });
  jQuery.ready.then = readyList.then; // The ready event handler and self cleanup method

  function completed() {
    document.removeEventListener("DOMContentLoaded", completed);
    window.removeEventListener("load", completed);
    jQuery.ready();
  } // Catch cases where $(document).ready() is called
  // after the browser event has already occurred.
  // Support: IE <=9 - 10 only
  // Older IE sometimes signals "interactive" too soon


  if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
    // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
  } else {
    // Use the handy event callback
    document.addEventListener("DOMContentLoaded", completed); // A fallback to window.onload, that will always work

    window.addEventListener("load", completed);
  } // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function


  var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
        len = elems.length,
        bulk = key == null; // Sets many values

    if (toType(key) === "object") {
      chainable = true;

      for (i in key) {
        access(elems, fn, i, key[i], true, emptyGet, raw);
      } // Sets one value

    } else if (value !== undefined) {
      chainable = true;

      if (!isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null; // ...except when executing function values
        } else {
          bulk = fn;

          fn = function (elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < len; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    if (chainable) {
      return elems;
    } // Gets


    if (bulk) {
      return fn.call(elems);
    }

    return len ? fn(elems[0], key) : emptyGet;
  }; // Matches dashed string for camelizing


  var rmsPrefix = /^-ms-/,
      rdashAlpha = /-([a-z])/g; // Used by camelCase as callback to replace()

  function fcamelCase(all, letter) {
    return letter.toUpperCase();
  } // Convert dashed to camelCase; used by the css and data modules
  // Support: IE <=9 - 11, Edge 12 - 15
  // Microsoft forgot to hump their vendor prefix (#9572)


  function camelCase(string) {
    return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
  }

  var acceptData = function (owner) {
    // Accepts only:
    //  - Node
    //    - Node.ELEMENT_NODE
    //    - Node.DOCUMENT_NODE
    //  - Object
    //    - Any
    return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
  };

  function Data() {
    this.expando = jQuery.expando + Data.uid++;
  }

  Data.uid = 1;
  Data.prototype = {
    cache: function (owner) {
      // Check if the owner object already has a cache
      var value = owner[this.expando]; // If not, create one

      if (!value) {
        value = {}; // We can accept data for non-element nodes in modern browsers,
        // but we should not, see #8335.
        // Always return an empty object.

        if (acceptData(owner)) {
          // If it is a node unlikely to be stringify-ed or looped over
          // use plain assignment
          if (owner.nodeType) {
            owner[this.expando] = value; // Otherwise secure it in a non-enumerable property
            // configurable must be true to allow the property to be
            // deleted when data is removed
          } else {
            Object.defineProperty(owner, this.expando, {
              value: value,
              configurable: true
            });
          }
        }
      }

      return value;
    },
    set: function (owner, data, value) {
      var prop,
          cache = this.cache(owner); // Handle: [ owner, key, value ] args
      // Always use camelCase key (gh-2257)

      if (typeof data === "string") {
        cache[camelCase(data)] = value; // Handle: [ owner, { properties } ] args
      } else {
        // Copy the properties one-by-one to the cache object
        for (prop in data) {
          cache[camelCase(prop)] = data[prop];
        }
      }

      return cache;
    },
    get: function (owner, key) {
      return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
      owner[this.expando] && owner[this.expando][camelCase(key)];
    },
    access: function (owner, key, value) {
      // In cases where either:
      //
      //   1. No key was specified
      //   2. A string key was specified, but no value provided
      //
      // Take the "read" path and allow the get method to determine
      // which value to return, respectively either:
      //
      //   1. The entire cache object
      //   2. The data stored at the key
      //
      if (key === undefined || key && typeof key === "string" && value === undefined) {
        return this.get(owner, key);
      } // When the key is not a string, or both a key and value
      // are specified, set or extend (existing objects) with either:
      //
      //   1. An object of properties
      //   2. A key and value
      //


      this.set(owner, key, value); // Since the "set" path can have two possible entry points
      // return the expected data based on which path was taken[*]

      return value !== undefined ? value : key;
    },
    remove: function (owner, key) {
      var i,
          cache = owner[this.expando];

      if (cache === undefined) {
        return;
      }

      if (key !== undefined) {
        // Support array or space separated string of keys
        if (Array.isArray(key)) {
          // If key is an array of keys...
          // We always set camelCase keys, so remove that.
          key = key.map(camelCase);
        } else {
          key = camelCase(key); // If a key with the spaces exists, use it.
          // Otherwise, create an array by matching non-whitespace

          key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
        }

        i = key.length;

        while (i--) {
          delete cache[key[i]];
        }
      } // Remove the expando if there's no more data


      if (key === undefined || jQuery.isEmptyObject(cache)) {
        // Support: Chrome <=35 - 45
        // Webkit & Blink performance suffers when deleting properties
        // from DOM nodes, so set to undefined instead
        // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
        if (owner.nodeType) {
          owner[this.expando] = undefined;
        } else {
          delete owner[this.expando];
        }
      }
    },
    hasData: function (owner) {
      var cache = owner[this.expando];
      return cache !== undefined && !jQuery.isEmptyObject(cache);
    }
  };
  var dataPriv = new Data();
  var dataUser = new Data(); //	Implementation Summary
  //
  //	1. Enforce API surface and semantic compatibility with 1.9.x branch
  //	2. Improve the module's maintainability by reducing the storage
  //		paths to a single mechanism.
  //	3. Use the same single mechanism to support "private" and "user" data.
  //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
  //	5. Avoid exposing implementation details on user objects (eg. expando properties)
  //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /[A-Z]/g;

  function getData(data) {
    if (data === "true") {
      return true;
    }

    if (data === "false") {
      return false;
    }

    if (data === "null") {
      return null;
    } // Only convert to a number if it doesn't change the string


    if (data === +data + "") {
      return +data;
    }

    if (rbrace.test(data)) {
      return JSON.parse(data);
    }

    return data;
  }

  function dataAttr(elem, key, data) {
    var name; // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute

    if (data === undefined && elem.nodeType === 1) {
      name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = getData(data);
        } catch (e) {} // Make sure we set the data so it isn't changed later


        dataUser.set(elem, key, data);
      } else {
        data = undefined;
      }
    }

    return data;
  }

  jQuery.extend({
    hasData: function (elem) {
      return dataUser.hasData(elem) || dataPriv.hasData(elem);
    },
    data: function (elem, name, data) {
      return dataUser.access(elem, name, data);
    },
    removeData: function (elem, name) {
      dataUser.remove(elem, name);
    },
    // TODO: Now that all calls to _data and _removeData have been replaced
    // with direct calls to dataPriv methods, these can be deprecated.
    _data: function (elem, name, data) {
      return dataPriv.access(elem, name, data);
    },
    _removeData: function (elem, name) {
      dataPriv.remove(elem, name);
    }
  });
  jQuery.fn.extend({
    data: function (key, value) {
      var i,
          name,
          data,
          elem = this[0],
          attrs = elem && elem.attributes; // Gets all values

      if (key === undefined) {
        if (this.length) {
          data = dataUser.get(elem);

          if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
            i = attrs.length;

            while (i--) {
              // Support: IE 11 only
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;

                if (name.indexOf("data-") === 0) {
                  name = camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }

            dataPriv.set(elem, "hasDataAttrs", true);
          }
        }

        return data;
      } // Sets multiple values


      if (typeof key === "object") {
        return this.each(function () {
          dataUser.set(this, key);
        });
      }

      return access(this, function (value) {
        var data; // The calling jQuery object (element matches) is not empty
        // (and therefore has an element appears at this[ 0 ]) and the
        // `value` parameter was not undefined. An empty jQuery object
        // will result in `undefined` for elem = this[ 0 ] which will
        // throw an exception if an attempt to read a data cache is made.

        if (elem && value === undefined) {
          // Attempt to get data from the cache
          // The key will always be camelCased in Data
          data = dataUser.get(elem, key);

          if (data !== undefined) {
            return data;
          } // Attempt to "discover" the data in
          // HTML5 custom data-* attrs


          data = dataAttr(elem, key);

          if (data !== undefined) {
            return data;
          } // We tried really hard, but the data doesn't exist.


          return;
        } // Set the data...


        this.each(function () {
          // We always store the camelCased key
          dataUser.set(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function (key) {
      return this.each(function () {
        dataUser.remove(this, key);
      });
    }
  });
  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = dataPriv.get(elem, type); // Speed up dequeue by getting out quickly if this is just a lookup

        if (data) {
          if (!queue || Array.isArray(data)) {
            queue = dataPriv.access(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }

        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
          startLength = queue.length,
          fn = queue.shift(),
          hooks = jQuery._queueHooks(elem, type),
          next = function () {
        jQuery.dequeue(elem, type);
      }; // If the fx queue is dequeued, always remove the progress sentinel


      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {
        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        } // Clear up the last queue stop function


        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    // Not public - generate a queueHooks object, or return the current one
    _queueHooks: function (elem, type) {
      var key = type + "queueHooks";
      return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          dataPriv.remove(elem, [type + "queue", key]);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data); // Ensure a hooks for this queue

        jQuery._queueHooks(this, type);

        if (type === "fx" && queue[0] !== "inprogress") {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function (type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      var tmp,
          count = 1,
          defer = jQuery.Deferred(),
          elements = this,
          i = this.length,
          resolve = function () {
        if (! --count) {
          defer.resolveWith(elements, [elements]);
        }
      };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }

      type = type || "fx";

      while (i--) {
        tmp = dataPriv.get(elements[i], type + "queueHooks");

        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }

      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
  var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
  var cssExpand = ["Top", "Right", "Bottom", "Left"];
  var documentElement = document.documentElement;

  var isAttached = function (elem) {
    return jQuery.contains(elem.ownerDocument, elem);
  },
      composed = {
    composed: true
  }; // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
  // Check attachment across shadow DOM boundaries when possible (gh-3504)
  // Support: iOS 10.0-10.2 only
  // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
  // leading to errors. We need to check for `getRootNode`.


  if (documentElement.getRootNode) {
    isAttached = function (elem) {
      return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
  }

  var isHiddenWithinTree = function (elem, el) {
    // isHiddenWithinTree might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem; // Inline style trumps all

    return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
    // Support: Firefox <=43 - 45
    // Disconnected elements can have computed display: none, so first confirm that elem is
    // in the document.
    isAttached(elem) && jQuery.css(elem, "display") === "none";
  };

  var swap = function (elem, options, callback, args) {
    var ret,
        name,
        old = {}; // Remember the old values, and insert the new ones

    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []); // Revert the old values

    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };

  function adjustCSS(elem, prop, valueParts, tween) {
    var adjusted,
        scale,
        maxIterations = 20,
        currentValue = tween ? function () {
      return tween.cur();
    } : function () {
      return jQuery.css(elem, prop, "");
    },
        initial = currentValue(),
        unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
        // Starting value computation is required for potential unit mismatches
    initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

    if (initialInUnit && initialInUnit[3] !== unit) {
      // Support: Firefox <=54
      // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
      initial = initial / 2; // Trust units reported by jQuery.css

      unit = unit || initialInUnit[3]; // Iteratively approximate from a nonzero starting point

      initialInUnit = +initial || 1;

      while (maxIterations--) {
        // Evaluate and update our best guess (doubling guesses that zero out).
        // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
        jQuery.style(elem, prop, initialInUnit + unit);

        if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
          maxIterations = 0;
        }

        initialInUnit = initialInUnit / scale;
      }

      initialInUnit = initialInUnit * 2;
      jQuery.style(elem, prop, initialInUnit + unit); // Make sure we update the tween properties later on

      valueParts = valueParts || [];
    }

    if (valueParts) {
      initialInUnit = +initialInUnit || +initial || 0; // Apply relative offset (+=/-=) if specified

      adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];

      if (tween) {
        tween.unit = unit;
        tween.start = initialInUnit;
        tween.end = adjusted;
      }
    }

    return adjusted;
  }

  var defaultDisplayMap = {};

  function getDefaultDisplay(elem) {
    var temp,
        doc = elem.ownerDocument,
        nodeName = elem.nodeName,
        display = defaultDisplayMap[nodeName];

    if (display) {
      return display;
    }

    temp = doc.body.appendChild(doc.createElement(nodeName));
    display = jQuery.css(temp, "display");
    temp.parentNode.removeChild(temp);

    if (display === "none") {
      display = "block";
    }

    defaultDisplayMap[nodeName] = display;
    return display;
  }

  function showHide(elements, show) {
    var display,
        elem,
        values = [],
        index = 0,
        length = elements.length; // Determine new display value for elements that need to change

    for (; index < length; index++) {
      elem = elements[index];

      if (!elem.style) {
        continue;
      }

      display = elem.style.display;

      if (show) {
        // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
        // check is required in this first loop unless we have a nonempty display value (either
        // inline or about-to-be-restored)
        if (display === "none") {
          values[index] = dataPriv.get(elem, "display") || null;

          if (!values[index]) {
            elem.style.display = "";
          }
        }

        if (elem.style.display === "" && isHiddenWithinTree(elem)) {
          values[index] = getDefaultDisplay(elem);
        }
      } else {
        if (display !== "none") {
          values[index] = "none"; // Remember what we're overwriting

          dataPriv.set(elem, "display", display);
        }
      }
    } // Set the display of the elements in a second loop to avoid constant reflow


    for (index = 0; index < length; index++) {
      if (values[index] != null) {
        elements[index].style.display = values[index];
      }
    }

    return elements;
  }

  jQuery.fn.extend({
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHiddenWithinTree(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  var rcheckableType = /^(?:checkbox|radio)$/i;
  var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
  var rscriptType = /^$|^module$|\/(?:java|ecma)script/i; // We have to close these tags to support XHTML (#13200)

  var wrapMap = {
    // Support: IE <=9 only
    option: [1, "<select multiple='multiple'>", "</select>"],
    // XHTML parsers do not magically insert elements in the
    // same way that tag soup parsers do. So we cannot shorten
    // this by omitting <tbody> or other required elements.
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  }; // Support: IE <=9 only

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    // Support: IE <=9 - 11 only
    // Use typeof to avoid zero-argument method invocation on host objects (#15151)
    var ret;

    if (typeof context.getElementsByTagName !== "undefined") {
      ret = context.getElementsByTagName(tag || "*");
    } else if (typeof context.querySelectorAll !== "undefined") {
      ret = context.querySelectorAll(tag || "*");
    } else {
      ret = [];
    }

    if (tag === undefined || tag && nodeName(context, tag)) {
      return jQuery.merge([context], ret);
    }

    return ret;
  } // Mark scripts as having already been evaluated


  function setGlobalEval(elems, refElements) {
    var i = 0,
        l = elems.length;

    for (; i < l; i++) {
      dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
    }
  }

  var rhtml = /<|&#?\w+;/;

  function buildFragment(elems, context, scripts, selection, ignored) {
    var elem,
        tmp,
        tag,
        wrap,
        attached,
        j,
        fragment = context.createDocumentFragment(),
        nodes = [],
        i = 0,
        l = elems.length;

    for (; i < l; i++) {
      elem = elems[i];

      if (elem || elem === 0) {
        // Add nodes directly
        if (toType(elem) === "object") {
          // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit
          jQuery.merge(nodes, elem.nodeType ? [elem] : elem); // Convert non-html into a text node
        } else if (!rhtml.test(elem)) {
          nodes.push(context.createTextNode(elem)); // Convert html into DOM nodes
        } else {
          tmp = tmp || fragment.appendChild(context.createElement("div")); // Deserialize a standard representation

          tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
          wrap = wrapMap[tag] || wrapMap._default;
          tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]; // Descend through wrappers to the right content

          j = wrap[0];

          while (j--) {
            tmp = tmp.lastChild;
          } // Support: Android <=4.0 only, PhantomJS 1 only
          // push.apply(_, arraylike) throws on ancient WebKit


          jQuery.merge(nodes, tmp.childNodes); // Remember the top-level container

          tmp = fragment.firstChild; // Ensure the created nodes are orphaned (#12392)

          tmp.textContent = "";
        }
      }
    } // Remove wrapper from fragment


    fragment.textContent = "";
    i = 0;

    while (elem = nodes[i++]) {
      // Skip elements already in the context collection (trac-4087)
      if (selection && jQuery.inArray(elem, selection) > -1) {
        if (ignored) {
          ignored.push(elem);
        }

        continue;
      }

      attached = isAttached(elem); // Append to fragment

      tmp = getAll(fragment.appendChild(elem), "script"); // Preserve script evaluation history

      if (attached) {
        setGlobalEval(tmp);
      } // Capture executables


      if (scripts) {
        j = 0;

        while (elem = tmp[j++]) {
          if (rscriptType.test(elem.type || "")) {
            scripts.push(elem);
          }
        }
      }
    }

    return fragment;
  }

  (function () {
    var fragment = document.createDocumentFragment(),
        div = fragment.appendChild(document.createElement("div")),
        input = document.createElement("input"); // Support: Android 4.0 - 4.3 only
    // Check state lost if the name is set (#11217)
    // Support: Windows Web Apps (WWA)
    // `name` and `type` must use .setAttribute for WWA (#14901)

    input.setAttribute("type", "radio");
    input.setAttribute("checked", "checked");
    input.setAttribute("name", "t");
    div.appendChild(input); // Support: Android <=4.1 only
    // Older WebKit doesn't clone checked state correctly in fragments

    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked; // Support: IE <=11 only
    // Make sure textarea (and checkbox) defaultValue is properly cloned

    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
  })();

  var rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  } // Support: IE <=9 - 11+
  // focus() and blur() are asynchronous, except when they are no-op.
  // So expect focus to be synchronous when the element is already active,
  // and blur to be synchronous when the element is not already active.
  // (focus and blur are always synchronous in other supported browsers,
  // this just defines when we can count on it).


  function expectSync(elem, type) {
    return elem === safeActiveElement() === (type === "focus");
  } // Support: IE <=9 only
  // Accessing document.activeElement can throw unexpectedly
  // https://bugs.jquery.com/ticket/13393


  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {}
  }

  function on(elem, types, selector, data, fn, one) {
    var origFn, type; // Types can be a map of types/handlers

    if (typeof types === "object") {
      // ( types-Object, selector, data )
      if (typeof selector !== "string") {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }

      for (type in types) {
        on(elem, type, selector, data, types[type], one);
      }

      return elem;
    }

    if (data == null && fn == null) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if (fn == null) {
      if (typeof selector === "string") {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }

    if (fn === false) {
      fn = returnFalse;
    } else if (!fn) {
      return elem;
    }

    if (one === 1) {
      origFn = fn;

      fn = function (event) {
        // Can use an empty set, since event contains the info
        jQuery().off(event);
        return origFn.apply(this, arguments);
      }; // Use same guid so caller can remove using origFn


      fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
    }

    return elem.each(function () {
      jQuery.event.add(this, types, fn, data, selector);
    });
  }
  /*
   * Helper functions for managing events -- not part of the public interface.
   * Props to Dean Edwards' addEvent library for many of the ideas.
   */


  jQuery.event = {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var handleObjIn,
          eventHandle,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.get(elem); // Don't attach events to noData or text/comment nodes (but allow plain objects)

      if (!elemData) {
        return;
      } // Caller can pass in an object of custom data in lieu of the handler


      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      } // Ensure that invalid selectors throw exceptions at attach time
      // Evaluate against documentElement in case elem is a non-element node (e.g., document)


      if (selector) {
        jQuery.find.matchesSelector(documentElement, selector);
      } // Make sure that the handler has a unique ID, used to find/remove it later


      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      } // Init the element's event structure and main handler, if this is the first


      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }

      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
        };
      } // Handle multiple events separated by a space


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // There *must* be a type, no attaching namespace-only handlers

        if (!type) {
          continue;
        } // If event changes its type, use the special event handlers for the changed type


        special = jQuery.event.special[type] || {}; // If selector defined, determine special event api type, otherwise given type

        type = (selector ? special.delegateType : special.bindType) || type; // Update special based on newly reset type

        special = jQuery.event.special[type] || {}; // handleObj is passed to all event handlers

        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn); // Init the event handler queue if we're the first

        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0; // Only use addEventListener if the special events handler returns false

          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        } // Add to the element's handler list, delegates in front


        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        } // Keep track of which events have ever been used, for event optimization


        jQuery.event.global[type] = true;
      }
    },
    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j,
          origCount,
          tmp,
          events,
          t,
          handleObj,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      } // Once for each type.namespace in types; type may be omitted


      types = (types || "").match(rnothtmlwhite) || [""];
      t = types.length;

      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort(); // Unbind all events (on this namespace, if provided) for the element

        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }

          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"); // Remove matching events

        origCount = j = handlers.length;

        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }

            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        } // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)


        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      } // Remove data and the expando if it's no longer used


      if (jQuery.isEmptyObject(events)) {
        dataPriv.remove(elem, "handle events");
      }
    },
    dispatch: function (nativeEvent) {
      // Make a writable jQuery.Event from the native event object
      var event = jQuery.event.fix(nativeEvent);
      var i,
          j,
          ret,
          matched,
          handleObj,
          handlerQueue,
          args = new Array(arguments.length),
          handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {}; // Use the fix-ed jQuery.Event rather than the (read-only) native event

      args[0] = event;

      for (i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      event.delegateTarget = this; // Call the preDispatch hook for the mapped type, and let it bail if desired

      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      } // Determine handlers


      handlerQueue = jQuery.event.handlers.call(this, event, handlers); // Run delegates first; they may want to stop propagation beneath us

      i = 0;

      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;

        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          // If the event is namespaced, then each handler is only invoked if it is
          // specially universal or its namespaces are a superset of the event's.
          if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      } // Call the postDispatch hook for the mapped type


      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },
    handlers: function (event, handlers) {
      var i,
          handleObj,
          sel,
          matchedHandlers,
          matchedSelectors,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target; // Find delegate handlers

      if (delegateCount && // Support: IE <=9
      // Black-hole SVG <use> instance trees (trac-13180)
      cur.nodeType && // Support: Firefox <=42
      // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
      // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
      // Support: IE 11 only
      // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
      !(event.type === "click" && event.button >= 1)) {
        for (; cur !== this; cur = cur.parentNode || this) {
          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
            matchedHandlers = [];
            matchedSelectors = {};

            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i]; // Don't conflict with Object.prototype properties (#13203)

              sel = handleObj.selector + " ";

              if (matchedSelectors[sel] === undefined) {
                matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
              }

              if (matchedSelectors[sel]) {
                matchedHandlers.push(handleObj);
              }
            }

            if (matchedHandlers.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matchedHandlers
              });
            }
          }
        }
      } // Add the remaining (directly-bound) handlers


      cur = this;

      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: cur,
          handlers: handlers.slice(delegateCount)
        });
      }

      return handlerQueue;
    },
    addProp: function (name, hook) {
      Object.defineProperty(jQuery.Event.prototype, name, {
        enumerable: true,
        configurable: true,
        get: isFunction(hook) ? function () {
          if (this.originalEvent) {
            return hook(this.originalEvent);
          }
        } : function () {
          if (this.originalEvent) {
            return this.originalEvent[name];
          }
        },
        set: function (value) {
          Object.defineProperty(this, name, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          });
        }
      });
    },
    fix: function (originalEvent) {
      return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
    },
    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      click: {
        // Utilize native event to ensure correct state for checkable inputs
        setup: function (data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Claim the first handler

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            // dataPriv.set( el, "click", ... )
            leverageNative(el, "click", returnTrue);
          } // Return false to allow normal processing in the caller


          return false;
        },
        trigger: function (data) {
          // For mutual compressibility with _default, replace `this` access with a local var.
          // `|| data` is dead code meant only to preserve the variable through minification.
          var el = this || data; // Force setup before triggering a click

          if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
            leverageNative(el, "click");
          } // Return non-false to allow normal event-path propagation


          return true;
        },
        // For cross-browser consistency, suppress native .click() on links
        // Also prevent it if we're currently inside a leveraged native-event stack
        _default: function (event) {
          var target = event.target;
          return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
        }
      },
      beforeunload: {
        postDispatch: function (event) {
          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    }
  }; // Ensure the presence of an event listener that handles manually-triggered
  // synthetic events by interrupting progress until reinvoked in response to
  // *native* events that it fires directly, ensuring that state changes have
  // already occurred before other listeners are invoked.

  function leverageNative(el, type, expectSync) {
    // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
    if (!expectSync) {
      if (dataPriv.get(el, type) === undefined) {
        jQuery.event.add(el, type, returnTrue);
      }

      return;
    } // Register the controller as a special universal handler for all event namespaces


    dataPriv.set(el, type, false);
    jQuery.event.add(el, type, {
      namespace: false,
      handler: function (event) {
        var notAsync,
            result,
            saved = dataPriv.get(this, type);

        if (event.isTrigger & 1 && this[type]) {
          // Interrupt processing of the outer synthetic .trigger()ed event
          // Saved data should be false in such cases, but might be a leftover capture object
          // from an async native handler (gh-4350)
          if (!saved.length) {
            // Store arguments for use when handling the inner native event
            // There will always be at least one argument (an event object), so this array
            // will not be confused with a leftover capture object.
            saved = slice.call(arguments);
            dataPriv.set(this, type, saved); // Trigger the native event and capture its result
            // Support: IE <=9 - 11+
            // focus() and blur() are asynchronous

            notAsync = expectSync(this, type);
            this[type]();
            result = dataPriv.get(this, type);

            if (saved !== result || notAsync) {
              dataPriv.set(this, type, false);
            } else {
              result = {};
            }

            if (saved !== result) {
              // Cancel the outer synthetic event
              event.stopImmediatePropagation();
              event.preventDefault();
              return result.value;
            } // If this is an inner synthetic event for an event with a bubbling surrogate
            // (focus or blur), assume that the surrogate already propagated from triggering the
            // native event and prevent that from happening again here.
            // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
            // bubbling surrogate propagates *after* the non-bubbling base), but that seems
            // less bad than duplication.

          } else if ((jQuery.event.special[type] || {}).delegateType) {
            event.stopPropagation();
          } // If this is a native event triggered above, everything is now in order
          // Fire an inner synthetic event with the original arguments

        } else if (saved.length) {
          // ...and capture the result
          dataPriv.set(this, type, {
            value: jQuery.event.trigger( // Support: IE <=9 - 11+
            // Extend with the prototype to reset the above stopImmediatePropagation()
            jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
          }); // Abort handling of the native event

          event.stopImmediatePropagation();
        }
      }
    });
  }

  jQuery.removeEvent = function (elem, type, handle) {
    // This "if" is needed for plain objects
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle);
    }
  };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    } // Event object


    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type; // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.

      this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
      src.returnValue === false ? returnTrue : returnFalse; // Create target properties
      // Support: Safari <=6 - 7 only
      // Target should not be a text node (#504, #13143)

      this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
      this.currentTarget = src.currentTarget;
      this.relatedTarget = src.relatedTarget; // Event type
    } else {
      this.type = src;
    } // Put explicitly provided properties onto the event object


    if (props) {
      jQuery.extend(this, props);
    } // Create a timestamp if incoming event doesn't have one


    this.timeStamp = src && src.timeStamp || Date.now(); // Mark it as fixed

    this[jQuery.expando] = true;
  }; // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html


  jQuery.Event.prototype = {
    constructor: jQuery.Event,
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    isSimulated: false,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;

      if (e && !this.isSimulated) {
        e.preventDefault();
      }
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopPropagation();
      }
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = returnTrue;

      if (e && !this.isSimulated) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  }; // Includes all common event props including KeyEvent and MouseEvent specific props

  jQuery.each({
    altKey: true,
    bubbles: true,
    cancelable: true,
    changedTouches: true,
    ctrlKey: true,
    detail: true,
    eventPhase: true,
    metaKey: true,
    pageX: true,
    pageY: true,
    shiftKey: true,
    view: true,
    "char": true,
    code: true,
    charCode: true,
    key: true,
    keyCode: true,
    button: true,
    buttons: true,
    clientX: true,
    clientY: true,
    offsetX: true,
    offsetY: true,
    pointerId: true,
    pointerType: true,
    screenX: true,
    screenY: true,
    targetTouches: true,
    toElement: true,
    touches: true,
    which: function (event) {
      var button = event.button; // Add which for key events

      if (event.which == null && rkeyEvent.test(event.type)) {
        return event.charCode != null ? event.charCode : event.keyCode;
      } // Add which for click: 1 === left; 2 === middle; 3 === right


      if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
        if (button & 1) {
          return 1;
        }

        if (button & 2) {
          return 3;
        }

        if (button & 4) {
          return 2;
        }

        return 0;
      }

      return event.which;
    }
  }, jQuery.event.addProp);
  jQuery.each({
    focus: "focusin",
    blur: "focusout"
  }, function (type, delegateType) {
    jQuery.event.special[type] = {
      // Utilize native event if possible so blur/focus sequence is correct
      setup: function () {
        // Claim the first handler
        // dataPriv.set( this, "focus", ... )
        // dataPriv.set( this, "blur", ... )
        leverageNative(this, type, expectSync); // Return false to allow normal processing in the caller

        return false;
      },
      trigger: function () {
        // Force setup before trigger
        leverageNative(this, type); // Return non-false to allow normal event-path propagation

        return true;
      },
      delegateType: delegateType
    };
  }); // Create mouseenter/leave events using mouseover/out and event-time checks
  // so that event delegation works in jQuery.
  // Do the same for pointerenter/pointerleave and pointerover/pointerout
  //
  // Support: Safari 7 only
  // Safari sends mouseenter too often; see:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
  // for the description of the bug (it existed in older Chrome versions as well).

  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function (event) {
        var ret,
            target = this,
            related = event.relatedTarget,
            handleObj = event.handleObj; // For mouseenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window

        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }

        return ret;
      }
    };
  });
  jQuery.fn.extend({
    on: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn);
    },
    one: function (types, selector, data, fn) {
      return on(this, types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;

      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }

      if (typeof types === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }

        return this;
      }

      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }

      if (fn === false) {
        fn = returnFalse;
      }

      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    }
  });
  var
  /* eslint-disable max-len */
  // See https://github.com/eslint/eslint/issues/3229
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

  /* eslint-enable */
  // Support: IE <=10 - 11, Edge 12 - 13 only
  // In IE/Edge using regex groups here causes severe slowdowns.
  // See https://connect.microsoft.com/IE/feedback/details/1736512/
  rnoInnerhtml = /<script|<style|<link/i,
      // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g; // Prefer a tbody over its parent table for containing new rows

  function manipulationTarget(elem, content) {
    if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
      return jQuery(elem).children("tbody")[0] || elem;
    }

    return elem;
  } // Replace/restore the type attribute of script elements for safe DOM manipulation


  function disableScript(elem) {
    elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    if ((elem.type || "").slice(0, 5) === "true/") {
      elem.type = elem.type.slice(5);
    } else {
      elem.removeAttribute("type");
    }

    return elem;
  }

  function cloneCopyEvent(src, dest) {
    var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

    if (dest.nodeType !== 1) {
      return;
    } // 1. Copy private data: events, handlers, etc.


    if (dataPriv.hasData(src)) {
      pdataOld = dataPriv.access(src);
      pdataCur = dataPriv.set(dest, pdataOld);
      events = pdataOld.events;

      if (events) {
        delete pdataCur.handle;
        pdataCur.events = {};

        for (type in events) {
          for (i = 0, l = events[type].length; i < l; i++) {
            jQuery.event.add(dest, type, events[type][i]);
          }
        }
      }
    } // 2. Copy user data


    if (dataUser.hasData(src)) {
      udataOld = dataUser.access(src);
      udataCur = jQuery.extend({}, udataOld);
      dataUser.set(dest, udataCur);
    }
  } // Fix IE bugs, see support tests


  function fixInput(src, dest) {
    var nodeName = dest.nodeName.toLowerCase(); // Fails to persist the checked state of a cloned checkbox or radio button.

    if (nodeName === "input" && rcheckableType.test(src.type)) {
      dest.checked = src.checked; // Fails to return the selected option to the default selected state when cloning options
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  function domManip(collection, args, callback, ignored) {
    // Flatten any nested arrays
    args = concat.apply([], args);
    var fragment,
        first,
        scripts,
        hasScripts,
        node,
        doc,
        i = 0,
        l = collection.length,
        iNoClone = l - 1,
        value = args[0],
        valueIsFunction = isFunction(value); // We can't cloneNode fragments that contain checked, in WebKit

    if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
      return collection.each(function (index) {
        var self = collection.eq(index);

        if (valueIsFunction) {
          args[0] = value.call(this, index, self.html());
        }

        domManip(self, args, callback, ignored);
      });
    }

    if (l) {
      fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
      first = fragment.firstChild;

      if (fragment.childNodes.length === 1) {
        fragment = first;
      } // Require either new content or an interest in ignored elements to invoke the callback


      if (first || ignored) {
        scripts = jQuery.map(getAll(fragment, "script"), disableScript);
        hasScripts = scripts.length; // Use the original fragment for the last item
        // instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).

        for (; i < l; i++) {
          node = fragment;

          if (i !== iNoClone) {
            node = jQuery.clone(node, true, true); // Keep references to cloned scripts for later restoration

            if (hasScripts) {
              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              jQuery.merge(scripts, getAll(node, "script"));
            }
          }

          callback.call(collection[i], node, i);
        }

        if (hasScripts) {
          doc = scripts[scripts.length - 1].ownerDocument; // Reenable scripts

          jQuery.map(scripts, restoreScript); // Evaluate executable scripts on first document insertion

          for (i = 0; i < hasScripts; i++) {
            node = scripts[i];

            if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
              if (node.src && (node.type || "").toLowerCase() !== "module") {
                // Optional AJAX dependency, but won't run scripts if not present
                if (jQuery._evalUrl && !node.noModule) {
                  jQuery._evalUrl(node.src, {
                    nonce: node.nonce || node.getAttribute("nonce")
                  });
                }
              } else {
                DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
              }
            }
          }
        }
      }
    }

    return collection;
  }

  function remove(elem, selector, keepData) {
    var node,
        nodes = selector ? jQuery.filter(selector, elem) : elem,
        i = 0;

    for (; (node = nodes[i]) != null; i++) {
      if (!keepData && node.nodeType === 1) {
        jQuery.cleanData(getAll(node));
      }

      if (node.parentNode) {
        if (keepData && isAttached(node)) {
          setGlobalEval(getAll(node, "script"));
        }

        node.parentNode.removeChild(node);
      }
    }

    return elem;
  }

  jQuery.extend({
    htmlPrefilter: function (html) {
      return html.replace(rxhtmlTag, "<$1></$2>");
    },
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var i,
          l,
          srcElements,
          destElements,
          clone = elem.cloneNode(true),
          inPage = isAttached(elem); // Fix IE cloning issues

      if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        for (i = 0, l = srcElements.length; i < l; i++) {
          fixInput(srcElements[i], destElements[i]);
        }
      } // Copy the events from the original to the clone


      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0, l = srcElements.length; i < l; i++) {
            cloneCopyEvent(srcElements[i], destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      } // Preserve script evaluation history


      destElements = getAll(clone, "script");

      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      } // Return the cloned set


      return clone;
    },
    cleanData: function (elems) {
      var data,
          elem,
          type,
          special = jQuery.event.special,
          i = 0;

      for (; (elem = elems[i]) !== undefined; i++) {
        if (acceptData(elem)) {
          if (data = elem[dataPriv.expando]) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type); // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            } // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove


            elem[dataPriv.expando] = undefined;
          }

          if (elem[dataUser.expando]) {
            // Support: Chrome <=35 - 45+
            // Assign undefined instead of using delete, see Data#remove
            elem[dataUser.expando] = undefined;
          }
        }
      }
    }
  });
  jQuery.fn.extend({
    detach: function (selector) {
      return remove(this, selector, true);
    },
    remove: function (selector) {
      return remove(this, selector);
    },
    text: function (value) {
      return access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().each(function () {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            this.textContent = value;
          }
        });
      }, null, value, arguments.length);
    },
    append: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },
    prepend: function () {
      return domManip(this, arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },
    before: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      return domManip(this, arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    empty: function () {
      var elem,
          i = 0;

      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          // Prevent memory leaks
          jQuery.cleanData(getAll(elem, false)); // Remove any remaining nodes

          elem.textContent = "";
        }
      }

      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      return access(this, function (value) {
        var elem = this[0] || {},
            i = 0,
            l = this.length;

        if (value === undefined && elem.nodeType === 1) {
          return elem.innerHTML;
        } // See if we can take a shortcut and just use innerHTML


        if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {
          value = jQuery.htmlPrefilter(value);

          try {
            for (; i < l; i++) {
              elem = this[i] || {}; // Remove element nodes and prevent memory leaks

              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0; // If using innerHTML throws an exception, use the fallback method
          } catch (e) {}
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function () {
      var ignored = []; // Make the changes, replacing each non-ignored context element with the new content

      return domManip(this, arguments, function (elem) {
        var parent = this.parentNode;

        if (jQuery.inArray(this, ignored) < 0) {
          jQuery.cleanData(getAll(this));

          if (parent) {
            parent.replaceChild(elem, this);
          }
        } // Force callback invocation

      }, ignored);
    }
  });
  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
          ret = [],
          insert = jQuery(selector),
          last = insert.length - 1,
          i = 0;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems); // Support: Android <=4.0 only, PhantomJS 1 only
        // .get() because push.apply(_, arraylike) throws on ancient WebKit

        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });
  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

  var getStyles = function (elem) {
    // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
    // IE throws on elements created in popups
    // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
    var view = elem.ownerDocument.defaultView;

    if (!view || !view.opener) {
      view = window;
    }

    return view.getComputedStyle(elem);
  };

  var rboxStyle = new RegExp(cssExpand.join("|"), "i");

  (function () {
    // Executing both pixelPosition & boxSizingReliable tests require only one layout
    // so they're executed at the same time to save the second computation.
    function computeStyleTests() {
      // This is a singleton, we need to execute it only once
      if (!div) {
        return;
      }

      container.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
      div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
      documentElement.appendChild(container).appendChild(div);
      var divStyle = window.getComputedStyle(div);
      pixelPositionVal = divStyle.top !== "1%"; // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44

      reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12; // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
      // Some styles come back with percentage values, even though they shouldn't

      div.style.right = "60%";
      pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36; // Support: IE 9 - 11 only
      // Detect misreporting of content dimensions for box-sizing:border-box elements

      boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36; // Support: IE 9 only
      // Detect overflow:scroll screwiness (gh-3699)
      // Support: Chrome <=64
      // Don't get tricked when zoom affects offsetWidth (gh-4029)

      div.style.position = "absolute";
      scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
      documentElement.removeChild(container); // Nullify the div so it wouldn't be stored in the memory and
      // it will also be a sign that checks already performed

      div = null;
    }

    function roundPixelMeasures(measure) {
      return Math.round(parseFloat(measure));
    }

    var pixelPositionVal,
        boxSizingReliableVal,
        scrollboxSizeVal,
        pixelBoxStylesVal,
        reliableMarginLeftVal,
        container = document.createElement("div"),
        div = document.createElement("div"); // Finish early in limited (non-browser) environments

    if (!div.style) {
      return;
    } // Support: IE <=9 - 11 only
    // Style of cloned element affects source element cloned (#8908)


    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";
    jQuery.extend(support, {
      boxSizingReliable: function () {
        computeStyleTests();
        return boxSizingReliableVal;
      },
      pixelBoxStyles: function () {
        computeStyleTests();
        return pixelBoxStylesVal;
      },
      pixelPosition: function () {
        computeStyleTests();
        return pixelPositionVal;
      },
      reliableMarginLeft: function () {
        computeStyleTests();
        return reliableMarginLeftVal;
      },
      scrollboxSize: function () {
        computeStyleTests();
        return scrollboxSizeVal;
      }
    });
  })();

  function curCSS(elem, name, computed) {
    var width,
        minWidth,
        maxWidth,
        ret,
        // Support: Firefox 51+
    // Retrieving style before computed somehow
    // fixes an issue with getting wrong values
    // on detached elements
    style = elem.style;
    computed = computed || getStyles(elem); // getPropertyValue is needed for:
    //   .css('filter') (IE 9 only, #12537)
    //   .css('--customProperty) (#3144)

    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];

      if (ret === "" && !isAttached(elem)) {
        ret = jQuery.style(elem, name);
      } // A tribute to the "awesome hack by Dean Edwards"
      // Android Browser returns percentage for some values,
      // but width seems to be reliably pixels.
      // This is against the CSSOM draft spec:
      // https://drafts.csswg.org/cssom/#resolved-values


      if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth; // Put in the new values to get a computed value out

        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width; // Revert the changed values

        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret !== undefined ? // Support: IE <=9 - 11 only
    // IE returns zIndex value as an integer.
    ret + "" : ret;
  }

  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function () {
        if (conditionFn()) {
          // Hook not needed (or it's not possible to use it due
          // to missing dependency), remove it.
          delete this.get;
          return;
        } // Hook needed; redefine it so that the support test is not executed again.


        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }

  var cssPrefixes = ["Webkit", "Moz", "ms"],
      emptyStyle = document.createElement("div").style,
      vendorProps = {}; // Return a vendor-prefixed property or undefined

  function vendorPropName(name) {
    // Check for vendor prefixed names
    var capName = name[0].toUpperCase() + name.slice(1),
        i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;

      if (name in emptyStyle) {
        return name;
      }
    }
  } // Return a potentially-mapped jQuery.cssProps or vendor prefixed property


  function finalPropName(name) {
    var final = jQuery.cssProps[name] || vendorProps[name];

    if (final) {
      return final;
    }

    if (name in emptyStyle) {
      return name;
    }

    return vendorProps[name] = vendorPropName(name) || name;
  }

  var // Swappable if display is none or starts with table
  // except "table", "table-cell", or "table-caption"
  // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rcustomProp = /^--/,
      cssShow = {
    position: "absolute",
    visibility: "hidden",
    display: "block"
  },
      cssNormalTransform = {
    letterSpacing: "0",
    fontWeight: "400"
  };

  function setPositiveNumber(elem, value, subtract) {
    // Any relative (+/-) values have already been
    // normalized at this point
    var matches = rcssNum.exec(value);
    return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
  }

  function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
    var i = dimension === "width" ? 1 : 0,
        extra = 0,
        delta = 0; // Adjustment may not be necessary

    if (box === (isBorderBox ? "border" : "content")) {
      return 0;
    }

    for (; i < 4; i += 2) {
      // Both box models exclude margin
      if (box === "margin") {
        delta += jQuery.css(elem, box + cssExpand[i], true, styles);
      } // If we get here with a content-box, we're seeking "padding" or "border" or "margin"


      if (!isBorderBox) {
        // Add padding
        delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles); // For "border" or "margin", add border

        if (box !== "padding") {
          delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles); // But still keep track of it otherwise
        } else {
          extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        } // If we get here with a border-box (content + padding + border), we're seeking "content" or
        // "padding" or "margin"

      } else {
        // For "content", subtract padding
        if (box === "content") {
          delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        } // For "content" or "padding", subtract border


        if (box !== "margin") {
          delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    } // Account for positive content-box scroll gutter when requested by providing computedVal


    if (!isBorderBox && computedVal >= 0) {
      // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
      // Assuming integer scroll gutter, subtract the rest and round down
      delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5 // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
      // Use an explicit zero to avoid NaN (gh-3964)
      )) || 0;
    }

    return delta;
  }

  function getWidthOrHeight(elem, dimension, extra) {
    // Start with computed style
    var styles = getStyles(elem),
        // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
    // Fake content-box until we know it's needed to know the true value.
    boxSizingNeeded = !support.boxSizingReliable() || extra,
        isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
        valueIsBorderBox = isBorderBox,
        val = curCSS(elem, dimension, styles),
        offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1); // Support: Firefox <=54
    // Return a confounding non-pixel value or feign ignorance, as appropriate.

    if (rnumnonpx.test(val)) {
      if (!extra) {
        return val;
      }

      val = "auto";
    } // Fall back to offsetWidth/offsetHeight when value is "auto"
    // This happens for inline elements with no explicit setting (gh-3571)
    // Support: Android <=4.1 - 4.3 only
    // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
    // Support: IE 9-11 only
    // Also use offsetWidth/offsetHeight for when box sizing is unreliable
    // We use getClientRects() to check for hidden/disconnected.
    // In those cases, the computed value can be trusted to be border-box


    if ((!support.boxSizingReliable() && isBorderBox || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
      isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box"; // Where available, offsetWidth/offsetHeight approximate border box dimensions.
      // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
      // retrieved value as a content box dimension.

      valueIsBorderBox = offsetProp in elem;

      if (valueIsBorderBox) {
        val = elem[offsetProp];
      }
    } // Normalize "" and auto


    val = parseFloat(val) || 0; // Adjust for the element's box model

    return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
    val) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },
    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "animationIterationCount": true,
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "gridArea": true,
      "gridColumn": true,
      "gridColumnEnd": true,
      "gridColumnStart": true,
      "gridRow": true,
      "gridRowEnd": true,
      "gridRowStart": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },
    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {},
    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      } // Make sure that we're working with the right name


      var ret,
          type,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name),
          style = elem.style; // Make sure that we're working with the right name. We don't
      // want to query the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Gets hook for the prefixed version, then unprefixed version


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // Check if we're setting a value

      if (value !== undefined) {
        type = typeof value; // Convert "+=" or "-=" to relative numbers (#7345)

        if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
          value = adjustCSS(elem, name, ret); // Fixes bug #9237

          type = "number";
        } // Make sure that null and NaN values aren't set (#7116)


        if (value == null || value !== value) {
          return;
        } // If a number was passed in, add the unit (except for certain CSS properties)
        // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
        // "px" to a few hardcoded values.


        if (type === "number" && !isCustomProp) {
          value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
        } // background-* props affect original clone's values


        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        } // If a hook was provided, use that value, otherwise just set the specified value


        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          if (isCustomProp) {
            style.setProperty(name, value);
          } else {
            style[name] = value;
          }
        }
      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        } // Otherwise just get the value from the style object


        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      var val,
          num,
          hooks,
          origName = camelCase(name),
          isCustomProp = rcustomProp.test(name); // Make sure that we're working with the right name. We don't
      // want to modify the value if it is a CSS custom property
      // since they are user-defined.

      if (!isCustomProp) {
        name = finalPropName(origName);
      } // Try prefixed name followed by the unprefixed name


      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]; // If a hook was provided get the computed value from there

      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      } // Otherwise, if a way to get the computed value exists, use that


      if (val === undefined) {
        val = curCSS(elem, name, styles);
      } // Convert "normal" to computed value


      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      } // Make numeric if forced or a qualifier was provided and val looks numeric


      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || isFinite(num) ? num || 0 : val;
      }

      return val;
    }
  });
  jQuery.each(["height", "width"], function (i, dimension) {
    jQuery.cssHooks[dimension] = {
      get: function (elem, computed, extra) {
        if (computed) {
          // Certain elements can have dimension info if we invisibly show them
          // but it must have a current display style that would benefit
          return rdisplayswap.test(jQuery.css(elem, "display")) && ( // Support: Safari 8+
          // Table columns in Safari have non-zero offsetWidth & zero
          // getBoundingClientRect().width unless display is changed.
          // Support: IE <=11 only
          // Running getBoundingClientRect on a disconnected node
          // in IE throws an error.
          !elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, dimension, extra);
          }) : getWidthOrHeight(elem, dimension, extra);
        }
      },
      set: function (elem, value, extra) {
        var matches,
            styles = getStyles(elem),
            // Only read styles.position if the test has a chance to fail
        // to avoid forcing a reflow.
        scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute",
            // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
        boxSizingNeeded = scrollboxSizeBuggy || extra,
            isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0; // Account for unreliable border-box dimensions by comparing offset* to computed and
        // faking a content-box to get border and padding (gh-3699)

        if (isBorderBox && scrollboxSizeBuggy) {
          subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
        } // Convert to pixels if value adjustment is needed


        if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
          elem.style[dimension] = value;
          value = jQuery.css(elem, dimension);
        }

        return setPositiveNumber(elem, value, subtract);
      }
    };
  });
  jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
    if (computed) {
      return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
        marginLeft: 0
      }, function () {
        return elem.getBoundingClientRect().left;
      })) + "px";
    }
  }); // These hooks are used by animate to expand properties

  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        var i = 0,
            expanded = {},
            // Assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (prefix !== "margin") {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  jQuery.fn.extend({
    css: function (name, value) {
      return access(this, function (elem, name, value) {
        var styles,
            len,
            map = {},
            i = 0;

        if (Array.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    }
  });

  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || jQuery.easing._default;
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function () {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased,
          hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }

      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }

      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (tween) {
        var result; // Use a property on the element directly when it is not a DOM element,
        // or when there is no matching style property that exists.

        if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
          return tween.elem[tween.prop];
        } // Passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails.
        // Simple values such as "10px" are parsed to Float;
        // complex values such as "rotate(1rad)" are returned as-is.


        result = jQuery.css(tween.elem, tween.prop, ""); // Empty strings, null, undefined and "auto" are converted to 0.

        return !result || result === "auto" ? 0 : result;
      },
      set: function (tween) {
        // Use step hook for back compat.
        // Use cssHook if its there.
        // Use .style if available and use plain properties where available.
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  }; // Support: IE <=9 only
  // Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.easing = {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    },
    _default: "swing"
  };
  jQuery.fx = Tween.prototype.init; // Back compat <1.8 extension point

  jQuery.fx.step = {};
  var fxNow,
      inProgress,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rrun = /queueHooks$/;

  function schedule() {
    if (inProgress) {
      if (document.hidden === false && window.requestAnimationFrame) {
        window.requestAnimationFrame(schedule);
      } else {
        window.setTimeout(schedule, jQuery.fx.interval);
      }

      jQuery.fx.tick();
    }
  } // Animations created synchronously will run synchronously


  function createFxNow() {
    window.setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = Date.now();
  } // Generate parameters to create a standard animation


  function genFx(type, includeWidth) {
    var which,
        i = 0,
        attrs = {
      height: type
    }; // If we include width, step value is 1 to do all cssExpand values,
    // otherwise step value is 2 to skip over Left and Right

    includeWidth = includeWidth ? 1 : 0;

    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
        collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
        index = 0,
        length = collection.length;

    for (; index < length; index++) {
      if (tween = collection[index].call(animation, prop, value)) {
        // We're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    var prop,
        value,
        toggle,
        hooks,
        oldfire,
        propTween,
        restoreDisplay,
        display,
        isBox = "width" in props || "height" in props,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHiddenWithinTree(elem),
        dataShow = dataPriv.get(elem, "fxshow"); // Queue-skipping animations hijack the fx hooks

    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");

      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;

        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }

      hooks.unqueued++;
      anim.always(function () {
        // Ensure the complete handler is called before this completes
        anim.always(function () {
          hooks.unqueued--;

          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    } // Detect show/hide animations


    for (prop in props) {
      value = props[prop];

      if (rfxtypes.test(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";

        if (value === (hidden ? "hide" : "show")) {
          // Pretend to be hidden if this is a "show" and
          // there is still data from a stopped show/hide
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true; // Ignore all other no-op show/hide data
          } else {
            continue;
          }
        }

        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
      }
    } // Bail out if this is a no-op like .hide().hide()


    propTween = !jQuery.isEmptyObject(props);

    if (!propTween && jQuery.isEmptyObject(orig)) {
      return;
    } // Restrict "overflow" and "display" styles during box animations


    if (isBox && elem.nodeType === 1) {
      // Support: IE <=9 - 11, Edge 12 - 15
      // Record all 3 overflow attributes because IE does not infer the shorthand
      // from identically-valued overflowX and overflowY and Edge just mirrors
      // the overflowX value there.
      opts.overflow = [style.overflow, style.overflowX, style.overflowY]; // Identify a display type, preferring old show/hide data over the CSS cascade

      restoreDisplay = dataShow && dataShow.display;

      if (restoreDisplay == null) {
        restoreDisplay = dataPriv.get(elem, "display");
      }

      display = jQuery.css(elem, "display");

      if (display === "none") {
        if (restoreDisplay) {
          display = restoreDisplay;
        } else {
          // Get nonempty value(s) by temporarily forcing visibility
          showHide([elem], true);
          restoreDisplay = elem.style.display || restoreDisplay;
          display = jQuery.css(elem, "display");
          showHide([elem]);
        }
      } // Animate inline elements as inline-block


      if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
        if (jQuery.css(elem, "float") === "none") {
          // Restore the original display value at the end of pure show/hide animations
          if (!propTween) {
            anim.done(function () {
              style.display = restoreDisplay;
            });

            if (restoreDisplay == null) {
              display = style.display;
              restoreDisplay = display === "none" ? "" : display;
            }
          }

          style.display = "inline-block";
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      anim.always(function () {
        style.overflow = opts.overflow[0];
        style.overflowX = opts.overflow[1];
        style.overflowY = opts.overflow[2];
      });
    } // Implement show/hide animations


    propTween = false;

    for (prop in orig) {
      // General show/hide setup for this element animation
      if (!propTween) {
        if (dataShow) {
          if ("hidden" in dataShow) {
            hidden = dataShow.hidden;
          }
        } else {
          dataShow = dataPriv.access(elem, "fxshow", {
            display: restoreDisplay
          });
        } // Store hidden/visible for toggle so `.stop().toggle()` "reverses"


        if (toggle) {
          dataShow.hidden = !hidden;
        } // Show elements before animating them


        if (hidden) {
          showHide([elem], true);
        }
        /* eslint-disable no-loop-func */


        anim.done(function () {
          /* eslint-enable no-loop-func */
          // The final step of a "hide" animation is actually hiding the element
          if (!hidden) {
            showHide([elem]);
          }

          dataPriv.remove(elem, "fxshow");

          for (prop in orig) {
            jQuery.style(elem, prop, orig[prop]);
          }
        });
      } // Per-property setup


      propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

      if (!(prop in dataShow)) {
        dataShow[prop] = propTween.start;

        if (hidden) {
          propTween.end = propTween.start;
          propTween.start = 0;
        }
      }
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks; // camelCase, specialEasing and expand cssHook pass

    for (index in props) {
      name = camelCase(index);
      easing = specialEasing[name];
      value = props[index];

      if (Array.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];

      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name]; // Not quite $.extend, this won't overwrite existing keys.
        // Reusing 'index' because we have the correct "name"

        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
        stopped,
        index = 0,
        length = Animation.prefilters.length,
        deferred = jQuery.Deferred().always(function () {
      // Don't match elem in the :animated selector
      delete tick.elem;
    }),
        tick = function () {
      if (stopped) {
        return false;
      }

      var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // Support: Android 2.3 only
      // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
      temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

      for (; index < length; index++) {
        animation.tweens[index].run(percent);
      }

      deferred.notifyWith(elem, [animation, percent, remaining]); // If there's more to do, yield

      if (percent < 1 && length) {
        return remaining;
      } // If this was an empty animation, synthesize a final progress notification


      if (!length) {
        deferred.notifyWith(elem, [animation, 1, 0]);
      } // Resolve the animation and report its conclusion


      deferred.resolveWith(elem, [animation]);
      return false;
    },
        animation = deferred.promise({
      elem: elem,
      props: jQuery.extend({}, properties),
      opts: jQuery.extend(true, {
        specialEasing: {},
        easing: jQuery.easing._default
      }, options),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function (prop, end) {
        var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
        animation.tweens.push(tween);
        return tween;
      },
      stop: function (gotoEnd) {
        var index = 0,
            // If we are going to the end, we want to run all the tweens
        // otherwise we skip this part
        length = gotoEnd ? animation.tweens.length : 0;

        if (stopped) {
          return this;
        }

        stopped = true;

        for (; index < length; index++) {
          animation.tweens[index].run(1);
        } // Resolve when we played the last frame; otherwise, reject


        if (gotoEnd) {
          deferred.notifyWith(elem, [animation, 1, 0]);
          deferred.resolveWith(elem, [animation, gotoEnd]);
        } else {
          deferred.rejectWith(elem, [animation, gotoEnd]);
        }

        return this;
      }
    }),
        props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = Animation.prefilters[index].call(animation, elem, props, animation.opts);

      if (result) {
        if (isFunction(result.stop)) {
          jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
        }

        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    } // Attach callbacks from options


    animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation;
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweeners: {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value);
        adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
        return tween;
      }]
    },
    tweener: function (props, callback) {
      if (isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.match(rnothtmlwhite);
      }

      var prop,
          index = 0,
          length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        Animation.tweeners[prop] = Animation.tweeners[prop] || [];
        Animation.tweeners[prop].unshift(callback);
      }
    },
    prefilters: [defaultPrefilter],
    prefilter: function (callback, prepend) {
      if (prepend) {
        Animation.prefilters.unshift(callback);
      } else {
        Animation.prefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing || isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !isFunction(easing) && easing
    }; // Go to the end state if fx are off

    if (jQuery.fx.off) {
      opt.duration = 0;
    } else {
      if (typeof opt.duration !== "number") {
        if (opt.duration in jQuery.fx.speeds) {
          opt.duration = jQuery.fx.speeds[opt.duration];
        } else {
          opt.duration = jQuery.fx.speeds._default;
        }
      }
    } // Normalize opt.queue - true/undefined/null -> "fx"


    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    } // Queueing


    opt.old = opt.complete;

    opt.complete = function () {
      if (isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      // Show any hidden elements after setting opacity to 0
      return this.filter(isHiddenWithinTree).css("opacity", 0).show() // Animate to the value specified
      .end().animate({
        opacity: to
      }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
          optall = jQuery.speed(speed, easing, callback),
          doAnimation = function () {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation(this, jQuery.extend({}, prop), optall); // Empty animations, or finishing resolves immediately

        if (empty || dataPriv.get(this, "finish")) {
          anim.stop(true);
        }
      };

      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }

      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
            index = type != null && type + "queueHooks",
            timers = jQuery.timers,
            data = dataPriv.get(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        } // Start the next in the queue if the last step wasn't forced.
        // Timers currently will call their complete callbacks, which
        // will dequeue but only if they were gotoEnd.


        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = type || "fx";
      }

      return this.each(function () {
        var index,
            data = dataPriv.get(this),
            queue = data[type + "queue"],
            hooks = data[type + "queueHooks"],
            timers = jQuery.timers,
            length = queue ? queue.length : 0; // Enable finishing flag on private data

        data.finish = true; // Empty the queue first

        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        } // Look for any active animations, and finish them


        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        } // Look for any animations in the old queue and finish them


        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        } // Turn off finishing flag


        delete data.finish;
      });
    }
  });
  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];

    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  }); // Generate shortcuts for custom animations

  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {
      opacity: "show"
    },
    fadeOut: {
      opacity: "hide"
    },
    fadeToggle: {
      opacity: "toggle"
    }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.timers = [];

  jQuery.fx.tick = function () {
    var timer,
        i = 0,
        timers = jQuery.timers;
    fxNow = Date.now();

    for (; i < timers.length; i++) {
      timer = timers[i]; // Run the timer and safely remove it when done (allowing for external removal)

      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }

    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    jQuery.fx.start();
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (inProgress) {
      return;
    }

    inProgress = true;
    schedule();
  };

  jQuery.fx.stop = function () {
    inProgress = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  }; // Based off of the plugin by Clint Helfers, with permission.
  // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/

  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";
    return this.queue(type, function (next, hooks) {
      var timeout = window.setTimeout(next, time);

      hooks.stop = function () {
        window.clearTimeout(timeout);
      };
    });
  };

  (function () {
    var input = document.createElement("input"),
        select = document.createElement("select"),
        opt = select.appendChild(document.createElement("option"));
    input.type = "checkbox"; // Support: Android <=4.3 only
    // Default value for a checkbox should be "on"

    support.checkOn = input.value !== ""; // Support: IE <=11 only
    // Must access selectedIndex to make default options select

    support.optSelected = opt.selected; // Support: IE <=11 only
    // An input loses its value after becoming a radio

    input = document.createElement("input");
    input.value = "t";
    input.type = "radio";
    support.radioValue = input.value === "t";
  })();

  var boolHook,
      attrHandle = jQuery.expr.attrHandle;
  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });
  jQuery.extend({
    attr: function (elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set attributes on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      } // Fallback to prop when attributes are not supported


      if (typeof elem.getAttribute === "undefined") {
        return jQuery.prop(elem, name, value);
      } // Attribute hooks are determined by the lowercase version
      // Grab necessary hook if one is defined


      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
      }

      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
          return;
        }

        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        elem.setAttribute(name, value + "");
        return value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      ret = jQuery.find.attr(elem, name); // Non-existent attributes return null, we normalize to undefined

      return ret == null ? undefined : ret;
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
            var val = elem.value;
            elem.setAttribute("type", value);

            if (val) {
              elem.value = val;
            }

            return value;
          }
        }
      }
    },
    removeAttr: function (elem, value) {
      var name,
          i = 0,
          // Attribute names can contain non-HTML whitespace characters
      // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
      attrNames = value && value.match(rnothtmlwhite);

      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          elem.removeAttribute(name);
        }
      }
    }
  }); // Hooks for boolean attributes

  boolHook = {
    set: function (elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else {
        elem.setAttribute(name, name);
      }

      return name;
    }
  };
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = function (elem, name, isXML) {
      var ret,
          handle,
          lowercaseName = name.toLowerCase();

      if (!isXML) {
        // Avoid an infinite loop by temporarily removing this function from the getter
        handle = attrHandle[lowercaseName];
        attrHandle[lowercaseName] = ret;
        ret = getter(elem, name, isXML) != null ? lowercaseName : null;
        attrHandle[lowercaseName] = handle;
      }

      return ret;
    };
  });
  var rfocusable = /^(?:input|select|textarea|button)$/i,
      rclickable = /^(?:a|area)$/i;
  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      return this.each(function () {
        delete this[jQuery.propFix[name] || name];
      });
    }
  });
  jQuery.extend({
    prop: function (elem, name, value) {
      var ret,
          hooks,
          nType = elem.nodeType; // Don't get/set properties on text, comment and attribute nodes

      if (nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        }

        return elem[name] = value;
      }

      if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      }

      return elem[name];
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          // Support: IE <=9 - 11 only
          // elem.tabIndex doesn't always return the
          // correct value when it hasn't been explicitly set
          // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          if (tabindex) {
            return parseInt(tabindex, 10);
          }

          if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
            return 0;
          }

          return -1;
        }
      }
    },
    propFix: {
      "for": "htmlFor",
      "class": "className"
    }
  }); // Support: IE <=11 only
  // Accessing the selectedIndex property
  // forces the browser to respect setting selected
  // on the option
  // The getter ensures a default option is selected
  // when in an optgroup
  // eslint rule "no-unused-expressions" is disabled for this code
  // since it considers such accessions noop

  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent && parent.parentNode) {
          parent.parentNode.selectedIndex;
        }

        return null;
      },
      set: function (elem) {
        /* eslint no-unused-expressions: "off" */
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
      }
    };
  }

  jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  }); // Strip and collapse whitespace according to HTML spec
  // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace

  function stripAndCollapse(value) {
    var tokens = value.match(rnothtmlwhite) || [];
    return tokens.join(" ");
  }

  function getClass(elem) {
    return elem.getAttribute && elem.getAttribute("class") || "";
  }

  function classesToArray(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value.match(rnothtmlwhite) || [];
    }

    return [];
  }

  jQuery.fn.extend({
    addClass: function (value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, getClass(this)));
        });
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem);
          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    removeClass: function (value) {
      var classes,
          elem,
          cur,
          curValue,
          clazz,
          j,
          finalValue,
          i = 0;

      if (isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, getClass(this)));
        });
      }

      if (!arguments.length) {
        return this.attr("class", "");
      }

      classes = classesToArray(value);

      if (classes.length) {
        while (elem = this[i++]) {
          curValue = getClass(elem); // This expression is here for better compressibility (see addClass)

          cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

          if (cur) {
            j = 0;

            while (clazz = classes[j++]) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") > -1) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            } // Only assign if different to avoid unneeded rendering.


            finalValue = stripAndCollapse(cur);

            if (curValue !== finalValue) {
              elem.setAttribute("class", finalValue);
            }
          }
        }
      }

      return this;
    },
    toggleClass: function (value, stateVal) {
      var type = typeof value,
          isValidValue = type === "string" || Array.isArray(value);

      if (typeof stateVal === "boolean" && isValidValue) {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
        });
      }

      return this.each(function () {
        var className, i, self, classNames;

        if (isValidValue) {
          // Toggle individual class names
          i = 0;
          self = jQuery(this);
          classNames = classesToArray(value);

          while (className = classNames[i++]) {
            // Check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          } // Toggle whole class name

        } else if (value === undefined || type === "boolean") {
          className = getClass(this);

          if (className) {
            // Store className if set
            dataPriv.set(this, "__className__", className);
          } // If the element has a class name or if we're passed `false`,
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.


          if (this.setAttribute) {
            this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
          }
        }
      });
    },
    hasClass: function (selector) {
      var className,
          elem,
          i = 0;
      className = " " + selector + " ";

      while (elem = this[i++]) {
        if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
          return true;
        }
      }

      return false;
    }
  });
  var rreturn = /\r/g;
  jQuery.fn.extend({
    val: function (value) {
      var hooks,
          ret,
          valueIsFunction,
          elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value; // Handle most common string cases

          if (typeof ret === "string") {
            return ret.replace(rreturn, "");
          } // Handle cases where value is null/undef or number


          return ret == null ? "" : ret;
        }

        return;
      }

      valueIsFunction = isFunction(value);
      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (valueIsFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        } // Treat null/undefined as ""; convert numbers to string


        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (Array.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()]; // If set returns undefined, fall back to normal setting

        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ? val : // Support: IE <=10 - 11 only
          // option.text throws exceptions (#14686, #14858)
          // Strip and collapse whitespace
          // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
          stripAndCollapse(jQuery.text(elem));
        }
      },
      select: {
        get: function (elem) {
          var value,
              option,
              i,
              options = elem.options,
              index = elem.selectedIndex,
              one = elem.type === "select-one",
              values = one ? null : [],
              max = one ? index + 1 : options.length;

          if (index < 0) {
            i = max;
          } else {
            i = one ? index : 0;
          } // Loop through all the selected options


          for (; i < max; i++) {
            option = options[i]; // Support: IE <=9 only
            // IE8-9 doesn't update selected after form reset (#2551)

            if ((option.selected || i === index) && // Don't return options that are disabled or in a disabled optgroup
            !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
              // Get the specific value for the option
              value = jQuery(option).val(); // We don't need an array for one selects

              if (one) {
                return value;
              } // Multi-Selects return an array


              values.push(value);
            }
          }

          return values;
        },
        set: function (elem, value) {
          var optionSet,
              option,
              options = elem.options,
              values = jQuery.makeArray(value),
              i = options.length;

          while (i--) {
            option = options[i];
            /* eslint-disable no-cond-assign */

            if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
              optionSet = true;
            }
            /* eslint-enable no-cond-assign */

          } // Force browsers to behave consistently when non-matching value is set


          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return values;
        }
      }
    }
  }); // Radios and checkboxes getter/setter

  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        if (Array.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
        }
      }
    };

    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  }); // Return jQuery for attributes-only inclusion

  support.focusin = "onfocusin" in window;

  var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      stopPropagationCallback = function (e) {
    e.stopPropagation();
  };

  jQuery.extend(jQuery.event, {
    trigger: function (event, data, elem, onlyHandlers) {
      var i,
          cur,
          tmp,
          bubbleType,
          ontype,
          handle,
          special,
          lastElement,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
      cur = lastElement = tmp = elem = elem || document; // Don't do events on text and comment nodes

      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      } // focus/blur morphs to focusin/out; ensure we're not firing them right now


      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") > -1) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }

      ontype = type.indexOf(":") < 0 && "on" + type; // Caller can pass in a jQuery.Event object, Object, or just an event type string

      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event); // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)

      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null; // Clean up the event in case it is being reused

      event.result = undefined;

      if (!event.target) {
        event.target = elem;
      } // Clone any incoming data and prepend the event, creating the handler arg list


      data = data == null ? [event] : jQuery.makeArray(data, [event]); // Allow special events to draw outside the lines

      special = jQuery.event.special[type] || {};

      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      } // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)


      if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
        bubbleType = special.delegateType || type;

        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }

        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        } // Only add window if we got to document (e.g., not plain obj or detached DOM)


        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      } // Fire handlers on the event path


      i = 0;

      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        lastElement = cur;
        event.type = i > 1 ? bubbleType : special.bindType || type; // jQuery handler

        handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");

        if (handle) {
          handle.apply(cur, data);
        } // Native handler


        handle = ontype && cur[ontype];

        if (handle && handle.apply && acceptData(cur)) {
          event.result = handle.apply(cur, data);

          if (event.result === false) {
            event.preventDefault();
          }
        }
      }

      event.type = type; // If nobody prevented the default action, do it now

      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
          // Call a native DOM method on the target with the same name as the event.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            } // Prevent re-triggering of the same event, since we already bubbled it above


            jQuery.event.triggered = type;

            if (event.isPropagationStopped()) {
              lastElement.addEventListener(type, stopPropagationCallback);
            }

            elem[type]();

            if (event.isPropagationStopped()) {
              lastElement.removeEventListener(type, stopPropagationCallback);
            }

            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },
    // Piggyback on a donor event to simulate a different one
    // Used only for `focus(in | out)` events
    simulate: function (type, elem, event) {
      var e = jQuery.extend(new jQuery.Event(), event, {
        type: type,
        isSimulated: true
      });
      jQuery.event.trigger(e, null, elem);
    }
  });
  jQuery.fn.extend({
    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = this[0];

      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  }); // Support: Firefox <=44
  // Firefox doesn't have focus(in | out) events
  // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
  //
  // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
  // focus(in | out) events fire after focus & blur events,
  // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
  // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857

  if (!support.focusin) {
    jQuery.each({
      focus: "focusin",
      blur: "focusout"
    }, function (orig, fix) {
      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
      };

      jQuery.event.special[fix] = {
        setup: function () {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }

          dataPriv.access(doc, fix, (attaches || 0) + 1);
        },
        teardown: function () {
          var doc = this.ownerDocument || this,
              attaches = dataPriv.access(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            dataPriv.remove(doc, fix);
          } else {
            dataPriv.access(doc, fix, attaches);
          }
        }
      };
    });
  }

  var location = window.location;
  var nonce = Date.now();
  var rquery = /\?/; // Cross-browser xml parsing

  jQuery.parseXML = function (data) {
    var xml;

    if (!data || typeof data !== "string") {
      return null;
    } // Support: IE 9 - 11 only
    // IE throws on parseFromString with invalid input.


    try {
      xml = new window.DOMParser().parseFromString(data, "text/xml");
    } catch (e) {
      xml = undefined;
    }

    if (!xml || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }

    return xml;
  };

  var rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (Array.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);
        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]", v, traditional, add);
        }
      });
    } else if (!traditional && toType(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }
    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  } // Serialize an array of form elements or a set of
  // key/values into a query string


  jQuery.param = function (a, traditional) {
    var prefix,
        s = [],
        add = function (key, valueOrFunction) {
      // If value is a function, invoke it and use its return value
      var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
      s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
    };

    if (a == null) {
      return "";
    } // If an array was passed in, assume that it is an array of form elements.


    if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    } // Return the resulting serialization


    return s.join("&");
  };

  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type; // Use .is( ":disabled" ) so that fieldset[disabled] works

        return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();

        if (val == null) {
          return null;
        }

        if (Array.isArray(val)) {
          return jQuery.map(val, function (val) {
            return {
              name: elem.name,
              value: val.replace(rCRLF, "\r\n")
            };
          });
        }

        return {
          name: elem.name,
          value: val.replace(rCRLF, "\r\n")
        };
      }).get();
    }
  });
  var r20 = /%20/g,
      rhash = /#.*$/,
      rantiCache = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
      // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},
      // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*"),
      // Anchor tag for parsing the document origin
  originAnchor = document.createElement("a");
  originAnchor.href = location.href; // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport

  function addToPrefiltersOrTransports(structure) {
    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

      if (isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while (dataType = dataTypes[i++]) {
          // Prepend if requested
          if (dataType[0] === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func); // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  } // Base inspection function for prefilters and transports


  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {},
        seekingTransport = structure === transports;

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);

        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  } // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887


  function ajaxExtend(target, src) {
    var key,
        deep,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }

    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }
  /* Handles responses to an ajax request:
   * - finds the right dataType (mediates between content-type and expected dataType)
   * - returns the corresponding response
   */


  function ajaxHandleResponses(s, jqXHR, responses) {
    var ct,
        type,
        finalDataType,
        firstDataType,
        contents = s.contents,
        dataTypes = s.dataTypes; // Remove auto dataType and get content-type in the process

    while (dataTypes[0] === "*") {
      dataTypes.shift();

      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    } // Check if we're dealing with a known content-type


    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    } // Check to see if we have a response for the expected dataType


    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }

        if (!firstDataType) {
          firstDataType = type;
        }
      } // Or just use first one


      finalDataType = finalDataType || firstDataType;
    } // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response


    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }

      return responses[finalDataType];
    }
  }
  /* Chain conversions given the request and the original response
   * Also sets the responseXXX fields on the jqXHR instance
   */


  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(); // Create converters map with lowercased keys

    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift(); // Convert to each sequential dataType

    while (current) {
      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      } // Apply the dataFilter if provided


      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {
        // There's only work to do if current dataType is non-auto
        if (current === "*") {
          current = prev; // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {
          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current]; // If none found, seek a pair

          if (!conv) {
            for (conv2 in converters) {
              // If conv2 outputs current
              tmp = conv2.split(" ");

              if (tmp[1] === current) {
                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];

                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2]; // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }

                  break;
                }
              }
            }
          } // Apply converter (if not an equivalence)


          if (conv !== true) {
            // Unless errors are allowed to bubble, catch and return them
            if (conv && s.throws) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: conv ? e : "No conversion from " + prev + " to " + current
                };
              }
            }
          }
        }
      }
    }

    return {
      state: "success",
      data: response
    };
  }

  jQuery.extend({
    // Counter for holding the number of active queries
    active: 0,
    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: location.href,
      type: "GET",
      isLocal: rlocalProtocol.test(location.protocol),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",

      /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */
      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /\bxml\b/,
        html: /\bhtml/,
        json: /\bjson\b/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {
        // Convert anything to text
        "* text": String,
        // Text to html (true = no transformation)
        "text html": true,
        // Evaluate text as a json expression
        "text json": JSON.parse,
        // Parse text as xml
        "text xml": jQuery.parseXML
      },
      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },
    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
      return settings ? // Building a settings object
      ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
      ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    // Main method
    ajax: function (url, options) {
      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object") {
        options = url;
        url = undefined;
      } // Force options to be an object


      options = options || {};
      var transport,
          // URL without anti-cache param
      cacheURL,
          // Response headers
      responseHeadersString,
          responseHeaders,
          // timeout handle
      timeoutTimer,
          // Url cleanup var
      urlAnchor,
          // Request state (becomes false upon send and true upon completion)
      completed,
          // To know if global events are to be dispatched
      fireGlobals,
          // Loop variable
      i,
          // uncached part of the url
      uncached,
          // Create the final options object
      s = jQuery.ajaxSetup({}, options),
          // Callbacks context
      callbackContext = s.context || s,
          // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
          // Deferreds
      deferred = jQuery.Deferred(),
          completeDeferred = jQuery.Callbacks("once memory"),
          // Status-dependent callbacks
      statusCode = s.statusCode || {},
          // Headers (they are sent all at once)
      requestHeaders = {},
          requestHeadersNames = {},
          // Default abort message
      strAbort = "canceled",
          // Fake xhr
      jqXHR = {
        readyState: 0,
        // Builds headers hashtable if needed
        getResponseHeader: function (key) {
          var match;

          if (completed) {
            if (!responseHeaders) {
              responseHeaders = {};

              while (match = rheaders.exec(responseHeadersString)) {
                responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
              }
            }

            match = responseHeaders[key.toLowerCase() + " "];
          }

          return match == null ? null : match.join(", ");
        },
        // Raw string
        getAllResponseHeaders: function () {
          return completed ? responseHeadersString : null;
        },
        // Caches the header
        setRequestHeader: function (name, value) {
          if (completed == null) {
            name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
            requestHeaders[name] = value;
          }

          return this;
        },
        // Overrides response content-type header
        overrideMimeType: function (type) {
          if (completed == null) {
            s.mimeType = type;
          }

          return this;
        },
        // Status-dependent callbacks
        statusCode: function (map) {
          var code;

          if (map) {
            if (completed) {
              // Execute the appropriate callbacks
              jqXHR.always(map[jqXHR.status]);
            } else {
              // Lazy-add the new callbacks in a way that preserves old ones
              for (code in map) {
                statusCode[code] = [statusCode[code], map[code]];
              }
            }
          }

          return this;
        },
        // Cancel the request
        abort: function (statusText) {
          var finalText = statusText || strAbort;

          if (transport) {
            transport.abort(finalText);
          }

          done(0, finalText);
          return this;
        }
      }; // Attach deferreds

      deferred.promise(jqXHR); // Add protocol if not provided (prefilters might expect it)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available

      s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//"); // Alias method option to type as per ticket #12004

      s.type = options.method || options.type || s.method || s.type; // Extract dataTypes list

      s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""]; // A cross-domain request is in order when the origin doesn't match the current origin.

      if (s.crossDomain == null) {
        urlAnchor = document.createElement("a"); // Support: IE <=8 - 11, Edge 12 - 15
        // IE throws exception on accessing the href property if url is malformed,
        // e.g. http://example.com:80x/

        try {
          urlAnchor.href = s.url; // Support: IE <=8 - 11 only
          // Anchor's host property isn't correctly set when s.url is relative

          urlAnchor.href = urlAnchor.href;
          s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
        } catch (e) {
          // If there is an error parsing the URL, assume it is crossDomain,
          // it can be rejected by the transport if it is invalid
          s.crossDomain = true;
        }
      } // Convert data if not already a string


      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      } // Apply prefilters


      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR); // If request was aborted inside a prefilter, stop there

      if (completed) {
        return jqXHR;
      } // We can fire global events as of now if asked to
      // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)


      fireGlobals = jQuery.event && s.global; // Watch for a new set of requests

      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      } // Uppercase the type


      s.type = s.type.toUpperCase(); // Determine if request has content

      s.hasContent = !rnoContent.test(s.type); // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      // Remove hash to simplify url manipulation

      cacheURL = s.url.replace(rhash, ""); // More options handling for requests with no content

      if (!s.hasContent) {
        // Remember the hash so we can put it back
        uncached = s.url.slice(cacheURL.length); // If data is available and should be processed, append data to url

        if (s.data && (s.processData || typeof s.data === "string")) {
          cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data; // #9682: remove data so that it's not used in an eventual retry

          delete s.data;
        } // Add or update anti-cache param if needed


        if (s.cache === false) {
          cacheURL = cacheURL.replace(rantiCache, "$1");
          uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
        } // Put hash and anti-cache on the URL that will be requested (gh-1732)


        s.url = cacheURL + uncached; // Change '%20' to '+' if this is encoded form body content (gh-2658)
      } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
        s.data = s.data.replace(r20, "+");
      } // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.


      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }

        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      } // Set the correct header, if data is being sent


      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      } // Set the Accepts header for the server, depending on the dataType


      jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]); // Check for headers option

      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      } // Allow custom headers/mimetypes and early abort


      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {
        // Abort if not done already and return
        return jqXHR.abort();
      } // Aborting is no longer a cancellation


      strAbort = "abort"; // Install callbacks on deferreds

      completeDeferred.add(s.complete);
      jqXHR.done(s.success);
      jqXHR.fail(s.error); // Get transport

      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR); // If no transport, we auto-abort

      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1; // Send global event

        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        } // If request was aborted inside ajaxSend, stop there


        if (completed) {
          return jqXHR;
        } // Timeout


        if (s.async && s.timeout > 0) {
          timeoutTimer = window.setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          completed = false;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Rethrow post-completion exceptions
          if (completed) {
            throw e;
          } // Propagate others as results


          done(-1, e);
        }
      } // Callback for when everything is done


      function done(status, nativeStatusText, responses, headers) {
        var isSuccess,
            success,
            error,
            response,
            modified,
            statusText = nativeStatusText; // Ignore repeat invocations

        if (completed) {
          return;
        }

        completed = true; // Clear timeout if it exists

        if (timeoutTimer) {
          window.clearTimeout(timeoutTimer);
        } // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)


        transport = undefined; // Cache response headers

        responseHeadersString = headers || ""; // Set readyState

        jqXHR.readyState = status > 0 ? 4 : 0; // Determine if successful

        isSuccess = status >= 200 && status < 300 || status === 304; // Get response data

        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        } // Convert no matter what (that way responseXXX fields are always set)


        response = ajaxConvert(s, response, jqXHR, isSuccess); // If successful, handle type chaining

        if (isSuccess) {
          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");

            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }

            modified = jqXHR.getResponseHeader("etag");

            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          } // if no content


          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent"; // if not modified
          } else if (status === 304) {
            statusText = "notmodified"; // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // Extract error from statusText and normalize for non-aborts
          error = statusText;

          if (status || !statusText) {
            statusText = "error";

            if (status < 0) {
              status = 0;
            }
          }
        } // Set data for the fake xhr object


        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + ""; // Success/Error

        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        } // Status-dependent callbacks


        jqXHR.statusCode(statusCode);
        statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
        } // Complete


        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]); // Handle the global AJAX counter

          if (! --jQuery.active) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },
    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },
    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });
  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // Shift arguments if data argument was omitted
      if (isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      } // The url can be an options object (which then must have .url)


      return jQuery.ajax(jQuery.extend({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      }, jQuery.isPlainObject(url) && url));
    };
  });

  jQuery._evalUrl = function (url, options) {
    return jQuery.ajax({
      url: url,
      // Make this explicit, since user can override this through ajaxSetup (#11264)
      type: "GET",
      dataType: "script",
      cache: true,
      async: false,
      global: false,
      // Only evaluate the response if it is successful (gh-4126)
      // dataFilter is not invoked for failure responses, so using it instead
      // of the default converter is kludgy but it works.
      converters: {
        "text script": function () {}
      },
      dataFilter: function (response) {
        jQuery.globalEval(response, options);
      }
    });
  };

  jQuery.fn.extend({
    wrapAll: function (html) {
      var wrap;

      if (this[0]) {
        if (isFunction(html)) {
          html = html.call(this[0]);
        } // The elements to wrap the target around


        wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstElementChild) {
            elem = elem.firstElementChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },
    wrapInner: function (html) {
      if (isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
            contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      var htmlIsFunction = isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function (selector) {
      this.parent(selector).not("body").each(function () {
        jQuery(this).replaceWith(this.childNodes);
      });
      return this;
    }
  });

  jQuery.expr.pseudos.hidden = function (elem) {
    return !jQuery.expr.pseudos.visible(elem);
  };

  jQuery.expr.pseudos.visible = function (elem) {
    return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
  };

  jQuery.ajaxSettings.xhr = function () {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {}
  };

  var xhrSuccessStatus = {
    // File protocol always yields status code 0, assume 200
    0: 200,
    // Support: IE <=9 only
    // #1450: sometimes IE returns 1223 when it should be 204
    1223: 204
  },
      xhrSupported = jQuery.ajaxSettings.xhr();
  support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
  support.ajax = xhrSupported = !!xhrSupported;
  jQuery.ajaxTransport(function (options) {
    var callback, errorCallback; // Cross domain only allowed if supported through XMLHttpRequest

    if (support.cors || xhrSupported && !options.crossDomain) {
      return {
        send: function (headers, complete) {
          var i,
              xhr = options.xhr();
          xhr.open(options.type, options.url, options.async, options.username, options.password); // Apply custom fields if provided

          if (options.xhrFields) {
            for (i in options.xhrFields) {
              xhr[i] = options.xhrFields[i];
            }
          } // Override mime type if needed


          if (options.mimeType && xhr.overrideMimeType) {
            xhr.overrideMimeType(options.mimeType);
          } // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.


          if (!options.crossDomain && !headers["X-Requested-With"]) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          } // Set headers


          for (i in headers) {
            xhr.setRequestHeader(i, headers[i]);
          } // Callback


          callback = function (type) {
            return function () {
              if (callback) {
                callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;

                if (type === "abort") {
                  xhr.abort();
                } else if (type === "error") {
                  // Support: IE <=9 only
                  // On a manual native abort, IE9 throws
                  // errors on any property access that is not readyState
                  if (typeof xhr.status !== "number") {
                    complete(0, "error");
                  } else {
                    complete( // File: protocol always yields status 0; see #8605, #14207
                    xhr.status, xhr.statusText);
                  }
                } else {
                  complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                  // IE9 has no XHR2 but throws on binary (trac-11426)
                  // For XHR2 non-text, let the caller handle it (gh-2498)
                  (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                    binary: xhr.response
                  } : {
                    text: xhr.responseText
                  }, xhr.getAllResponseHeaders());
                }
              }
            };
          }; // Listen to events


          xhr.onload = callback();
          errorCallback = xhr.onerror = xhr.ontimeout = callback("error"); // Support: IE 9 only
          // Use onreadystatechange to replace onabort
          // to handle uncaught aborts

          if (xhr.onabort !== undefined) {
            xhr.onabort = errorCallback;
          } else {
            xhr.onreadystatechange = function () {
              // Check readyState before timeout as it changes
              if (xhr.readyState === 4) {
                // Allow onerror to be called first,
                // but that will not handle a native abort
                // Also, save errorCallback to a variable
                // as xhr.onerror cannot be accessed
                window.setTimeout(function () {
                  if (callback) {
                    errorCallback();
                  }
                });
              }
            };
          } // Create the abort callback


          callback = callback("abort");

          try {
            // Do send the request (this may raise an exception)
            xhr.send(options.hasContent && options.data || null);
          } catch (e) {
            // #14683: Only rethrow if this hasn't been notified as an error yet
            if (callback) {
              throw e;
            }
          }
        },
        abort: function () {
          if (callback) {
            callback();
          }
        }
      };
    }
  }); // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)

  jQuery.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  }); // Install script dataType

  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /\b(?:java|ecma)script\b/
    },
    converters: {
      "text script": function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  }); // Handle cache's special case and crossDomain

  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }

    if (s.crossDomain) {
      s.type = "GET";
    }
  }); // Bind script tag hack transport

  jQuery.ajaxTransport("script", function (s) {
    // This transport only deals with cross domain or forced-by-attrs requests
    if (s.crossDomain || s.scriptAttrs) {
      var script, callback;
      return {
        send: function (_, complete) {
          script = jQuery("<script>").attr(s.scriptAttrs || {}).prop({
            charset: s.scriptCharset,
            src: s.url
          }).on("load error", callback = function (evt) {
            script.remove();
            callback = null;

            if (evt) {
              complete(evt.type === "error" ? 404 : 200, evt.type);
            }
          }); // Use native DOM manipulation to avoid our domManip AJAX trickery

          document.head.appendChild(script[0]);
        },
        abort: function () {
          if (callback) {
            callback();
          }
        }
      };
    }
  });
  var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/; // Default jsonp settings

  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
      this[callback] = true;
      return callback;
    }
  }); // Detect, normalize options and install callbacks for jsonp requests

  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
    var callbackName,
        overwritten,
        responseContainer,
        jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data"); // Handle iff the expected data type is "jsonp" or we have a parameter to set

    if (jsonProp || s.dataTypes[0] === "jsonp") {
      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback; // Insert callback into url or form data

      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      } // Use data converter to retrieve json after script execution


      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }

        return responseContainer[0];
      }; // Force json dataType


      s.dataTypes[0] = "json"; // Install callback

      overwritten = window[callbackName];

      window[callbackName] = function () {
        responseContainer = arguments;
      }; // Clean-up function (fires after converters)


      jqXHR.always(function () {
        // If previous value didn't exist - remove it
        if (overwritten === undefined) {
          jQuery(window).removeProp(callbackName); // Otherwise restore preexisting value
        } else {
          window[callbackName] = overwritten;
        } // Save back as free


        if (s[callbackName]) {
          // Make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback; // Save the callback name for future use

          oldCallbacks.push(callbackName);
        } // Call if it was a function and we have a response


        if (responseContainer && isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      }); // Delegate to script

      return "script";
    }
  }); // Support: Safari 8 only
  // In Safari 8 documents created via document.implementation.createHTMLDocument
  // collapse sibling forms: the second one becomes a child of the first one.
  // Because of that, this security measure has to be disabled in Safari 8.
  // https://bugs.webkit.org/show_bug.cgi?id=137337

  support.createHTMLDocument = function () {
    var body = document.implementation.createHTMLDocument("").body;
    body.innerHTML = "<form></form><form></form>";
    return body.childNodes.length === 2;
  }(); // Argument "data" should be string of html
  // context (optional): If specified, the fragment will be created in this context,
  // defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string


  jQuery.parseHTML = function (data, context, keepScripts) {
    if (typeof data !== "string") {
      return [];
    }

    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }

    var base, parsed, scripts;

    if (!context) {
      // Stop scripts or inline event handlers from being executed immediately
      // by using document.implementation
      if (support.createHTMLDocument) {
        context = document.implementation.createHTMLDocument(""); // Set the base href for the created document
        // so any parsed elements with URLs
        // are based on the document's URL (gh-2965)

        base = context.createElement("base");
        base.href = document.location.href;
        context.head.appendChild(base);
      } else {
        context = document;
      }
    }

    parsed = rsingleTag.exec(data);
    scripts = !keepScripts && []; // Single tag

    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };
  /**
   * Load a url into a page
   */


  jQuery.fn.load = function (url, params, callback) {
    var selector,
        type,
        response,
        self = this,
        off = url.indexOf(" ");

    if (off > -1) {
      selector = stripAndCollapse(url.slice(off));
      url = url.slice(0, off);
    } // If it's a function


    if (isFunction(params)) {
      // We assume that it's the callback
      callback = params;
      params = undefined; // Otherwise, build a param string
    } else if (params && typeof params === "object") {
      type = "POST";
    } // If we have elements to modify, make the request


    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        // If "type" variable is undefined, then "GET" method will be used.
        // Make value of this field explicit since
        // user can override it through ajaxSetup method
        type: type || "GET",
        dataType: "html",
        data: params
      }).done(function (responseText) {
        // Save response for use in complete callback
        response = arguments;
        self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
        responseText); // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
      }).always(callback && function (jqXHR, status) {
        self.each(function () {
          callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
        });
      });
    }

    return this;
  }; // Attach a bunch of functions for handling common AJAX events


  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });

  jQuery.expr.pseudos.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };

  jQuery.offset = {
    setOffset: function (elem, options, i) {
      var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {}; // Set position first, in-case top/left are set even on static elem

      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1; // Need to be able to calculate position if either
      // top or left is auto and position is either absolute or fixed

      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (isFunction(options)) {
        // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
        options = options.call(elem, i, jQuery.extend({}, curOffset));
      }

      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }

      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    // offset() relates an element's border box to the document origin
    offset: function (options) {
      // Preserve chaining for setter
      if (arguments.length) {
        return options === undefined ? this : this.each(function (i) {
          jQuery.offset.setOffset(this, options, i);
        });
      }

      var rect,
          win,
          elem = this[0];

      if (!elem) {
        return;
      } // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
      // Support: IE <=11 only
      // Running getBoundingClientRect on a
      // disconnected node in IE throws an error


      if (!elem.getClientRects().length) {
        return {
          top: 0,
          left: 0
        };
      } // Get document-relative position by adding viewport scroll to viewport-relative gBCR


      rect = elem.getBoundingClientRect();
      win = elem.ownerDocument.defaultView;
      return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
      };
    },
    // position() relates an element's margin box to its offset parent's padding box
    // This corresponds to the behavior of CSS absolute positioning
    position: function () {
      if (!this[0]) {
        return;
      }

      var offsetParent,
          offset,
          doc,
          elem = this[0],
          parentOffset = {
        top: 0,
        left: 0
      }; // position:fixed elements are offset from the viewport, which itself always has zero offset

      if (jQuery.css(elem, "position") === "fixed") {
        // Assume position:fixed implies availability of getBoundingClientRect
        offset = elem.getBoundingClientRect();
      } else {
        offset = this.offset(); // Account for the *real* offset parent, which can be the document or its root element
        // when a statically positioned element is identified

        doc = elem.ownerDocument;
        offsetParent = elem.offsetParent || doc.documentElement;

        while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.parentNode;
        }

        if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
          // Incorporate borders into its offset, since they are outside its content origin
          parentOffset = jQuery(offsetParent).offset();
          parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
          parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
        }
      } // Subtract parent offsets and element margins


      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },
    // This method will return documentElement in the following cases:
    // 1) For the element inside the iframe without offsetParent, this method will return
    //    documentElement of the parent window
    // 2) For the hidden or detached element
    // 3) For body or html element, i.e. in case of the html node - it will return itself
    //
    // but those exceptions were never presented as a real life use-cases
    // and might be considered as more preferable results.
    //
    // This logic, however, is not guaranteed and can change at any point in the future
    offsetParent: function () {
      return this.map(function () {
        var offsetParent = this.offsetParent;

        while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
          offsetParent = offsetParent.offsetParent;
        }

        return offsetParent || documentElement;
      });
    }
  }); // Create scrollLeft and scrollTop methods

  jQuery.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function (method, prop) {
    var top = "pageYOffset" === prop;

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        // Coalesce documents and windows
        var win;

        if (isWindow(elem)) {
          win = elem;
        } else if (elem.nodeType === 9) {
          win = elem.defaultView;
        }

        if (val === undefined) {
          return win ? win[prop] : elem[method];
        }

        if (win) {
          win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length);
    };
  }); // Support: Safari <=7 - 9.1, Chrome <=37 - 49
  // Add the top/left cssHooks using jQuery.fn.position
  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
  // getComputedStyle returns percent when specified for top/left/bottom/right;
  // rather than make the css module depend on the offset module, just check for it here

  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
      if (computed) {
        computed = curCSS(elem, prop); // If curCSS returns percentage, fallback to offset

        return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
      }
    });
  }); // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods

  jQuery.each({
    Height: "height",
    Width: "width"
  }, function (name, type) {
    jQuery.each({
      padding: "inner" + name,
      content: type,
      "": "outer" + name
    }, function (defaultExtra, funcName) {
      // Margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
            extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
        return access(this, function (elem, type, value) {
          var doc;

          if (isWindow(elem)) {
            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
            return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
          } // Get document width or height


          if (elem.nodeType === 9) {
            doc = elem.documentElement; // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
            // whichever is greatest

            return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
          }

          return value === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css(elem, type, extra) : // Set width or height on the element
          jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable);
      };
    });
  });
  jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {
    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.extend({
    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    }
  });
  jQuery.fn.extend({
    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  }); // Bind a function to a context, optionally partially applying any
  // arguments.
  // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
  // However, it is not slated for removal any time soon

  jQuery.proxy = function (fn, context) {
    var tmp, args, proxy;

    if (typeof context === "string") {
      tmp = fn[context];
      context = fn;
      fn = tmp;
    } // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.


    if (!isFunction(fn)) {
      return undefined;
    } // Simulated bind


    args = slice.call(arguments, 2);

    proxy = function () {
      return fn.apply(context || this, args.concat(slice.call(arguments)));
    }; // Set the guid of unique handler to the same of original handler, so it can be removed


    proxy.guid = fn.guid = fn.guid || jQuery.guid++;
    return proxy;
  };

  jQuery.holdReady = function (hold) {
    if (hold) {
      jQuery.readyWait++;
    } else {
      jQuery.ready(true);
    }
  };

  jQuery.isArray = Array.isArray;
  jQuery.parseJSON = JSON.parse;
  jQuery.nodeName = nodeName;
  jQuery.isFunction = isFunction;
  jQuery.isWindow = isWindow;
  jQuery.camelCase = camelCase;
  jQuery.type = toType;
  jQuery.now = Date.now;

  jQuery.isNumeric = function (obj) {
    // As of jQuery 3.0, isNumeric is limited to
    // strings and numbers (primitives or objects)
    // that can be coerced to finite numbers (gh-2662)
    var type = jQuery.type(obj);
    return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    !isNaN(obj - parseFloat(obj));
  }; // Register as a named AMD module, since jQuery can be concatenated with other
  // files that may use define, but not via a proper concatenation script that
  // understands anonymous AMD modules. A named AMD is safest and most robust
  // way to register. Lowercase jquery is used because AMD module names are
  // derived from file names, and jQuery is normally delivered in a lowercase
  // file name. Do this after creating the global so that if an AMD module wants
  // to call noConflict to hide this version of jQuery, it will work.
  // Note that for maximum portability, libraries that are not jQuery should
  // declare themselves as anonymous modules, and avoid setting a global if an
  // AMD loader is present. jQuery is a special case. For more information, see
  // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon


  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return jQuery;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  var // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,
      // Map over the $ in case of overwrite
  _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  }; // Expose jQuery and $ identifiers, even in AMD
  // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
  // and CommonJS for browser emulators (#13566)


  if (!noGlobal) {
    window.jQuery = window.$ = jQuery;
  }

  return jQuery;
});

/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader/lib/urls.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/_webuploader@0.1.8@webuploader/css/webuploader.css":
/*!*************************************************************************!*\
  !*** ./node_modules/_webuploader@0.1.8@webuploader/css/webuploader.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../_css-loader@2.1.1@css-loader/dist/cjs.js!./webuploader.css */ "./node_modules/_css-loader@2.1.1@css-loader/dist/cjs.js!./node_modules/_webuploader@0.1.8@webuploader/css/webuploader.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/_webuploader@0.1.8@webuploader/dist/webuploader.fis.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_webuploader@0.1.8@webuploader/dist/webuploader.fis.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! WebUploader 0.1.6 */
var jQuery = __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.4.1@jquery/dist/jquery.js");

module.exports = function (root, factory) {
  var modules = {},
      // 内部require, 简单不完全实现。
  // https://github.com/amdjs/amdjs-api/wiki/require
  _require = function (deps, callback) {
    var args, len, i; // 如果deps不是数组，则直接返回指定module

    if (typeof deps === 'string') {
      return getModule(deps);
    } else {
      args = [];

      for (len = deps.length, i = 0; i < len; i++) {
        args.push(getModule(deps[i]));
      }

      return callback.apply(null, args);
    }
  },
      // 内部define，暂时不支持不指定id.
  _define = function (id, deps, factory) {
    if (arguments.length === 2) {
      factory = deps;
      deps = null;
    }

    _require(deps || [], function () {
      setModule(id, factory, arguments);
    });
  },
      // 设置module, 兼容CommonJs写法。
  setModule = function (id, factory, args) {
    var module = {
      exports: factory
    },
        returned;

    if (typeof factory === 'function') {
      args.length || (args = [_require, module.exports, module]);
      returned = factory.apply(null, args);
      returned !== undefined && (module.exports = returned);
    }

    modules[id] = module.exports;
  },
      // 根据id获取module
  getModule = function (id) {
    var module = modules[id] || root[id];

    if (!module) {
      throw new Error('`' + id + '` is undefined');
    }

    return module;
  },
      // 将所有modules，将路径ids装换成对象。
  exportsTo = function (obj) {
    var key, host, parts, part, last, ucFirst; // make the first character upper case.

    ucFirst = function (str) {
      return str && str.charAt(0).toUpperCase() + str.substr(1);
    };

    for (key in modules) {
      host = obj;

      if (!modules.hasOwnProperty(key)) {
        continue;
      }

      parts = key.split('/');
      last = ucFirst(parts.pop());

      while (part = ucFirst(parts.shift())) {
        host[part] = host[part] || {};
        host = host[part];
      }

      host[last] = modules[key];
    }

    return obj;
  },
      makeExport = function (dollar) {
    root.__dollar = dollar; // exports every module.

    return exportsTo(factory(root, _define, _require));
  };

  return makeExport(jQuery);
}(window, function (window, define, require) {
  /**
   * @fileOverview jQuery or Zepto
   */
  define('dollar-third', [], function () {
    var req = window.require;
    var $ = window.__dollar || window.jQuery || window.Zepto || req('jquery') || req('zepto');

    if (!$) {
      throw new Error('jQuery or Zepto not found!');
    }

    return $;
  });
  /**
   * @fileOverview Dom 操作相关
   */

  define('dollar', ['dollar-third'], function (_) {
    return _;
  });
  /**
   * @fileOverview 使用jQuery的Promise
   */

  define('promise-third', ['dollar'], function ($) {
    return {
      Deferred: $.Deferred,
      when: $.when,
      isPromise: function (anything) {
        return anything && typeof anything.then === 'function';
      }
    };
  });
  /**
   * @fileOverview Promise/A+
   */

  define('promise', ['promise-third'], function (_) {
    return _;
  });
  /**
   * @fileOverview 基础类方法。
   */

  /**
   * Web Uploader内部类的详细说明，以下提及的功能类，都可以在`WebUploader`这个变量中访问到。
   *
   * As you know, Web Uploader的每个文件都是用过[AMD](https://github.com/amdjs/amdjs-api/wiki/AMD)规范中的`define`组织起来的, 每个Module都会有个module id.
   * 默认module id为该文件的路径，而此路径将会转化成名字空间存放在WebUploader中。如：
   *
   * * module `base`：WebUploader.Base
   * * module `file`: WebUploader.File
   * * module `lib/dnd`: WebUploader.Lib.Dnd
   * * module `runtime/html5/dnd`: WebUploader.Runtime.Html5.Dnd
   *
   *
   * 以下文档中对类的使用可能省略掉了`WebUploader`前缀。
   * @module WebUploader
   * @title WebUploader API文档
   */

  define('base', ['dollar', 'promise'], function ($, promise) {
    var noop = function () {},
        call = Function.call; // http://jsperf.com/uncurrythis
    // 反科里化


    function uncurryThis(fn) {
      return function () {
        return call.apply(fn, arguments);
      };
    }

    function bindFn(fn, context) {
      return function () {
        return fn.apply(context, arguments);
      };
    }

    function createObject(proto) {
      var f;

      if (Object.create) {
        return Object.create(proto);
      } else {
        f = function () {};

        f.prototype = proto;
        return new f();
      }
    }
    /**
     * 基础类，提供一些简单常用的方法。
     * @class Base
     */


    return {
      /**
       * @property {String} version 当前版本号。
       */
      version: '0.1.6',

      /**
       * @property {jQuery|Zepto} $ 引用依赖的jQuery或者Zepto对象。
       */
      $: $,
      Deferred: promise.Deferred,
      isPromise: promise.isPromise,
      when: promise.when,

      /**
       * @description  简单的浏览器检查结果。
       *
       * * `webkit`  webkit版本号，如果浏览器为非webkit内核，此属性为`undefined`。
       * * `chrome`  chrome浏览器版本号，如果浏览器为chrome，此属性为`undefined`。
       * * `ie`  ie浏览器版本号，如果浏览器为非ie，此属性为`undefined`。**暂不支持ie10+**
       * * `firefox`  firefox浏览器版本号，如果浏览器为非firefox，此属性为`undefined`。
       * * `safari`  safari浏览器版本号，如果浏览器为非safari，此属性为`undefined`。
       * * `opera`  opera浏览器版本号，如果浏览器为非opera，此属性为`undefined`。
       *
       * @property {Object} [browser]
       */
      browser: function (ua) {
        var ret = {},
            webkit = ua.match(/WebKit\/([\d.]+)/),
            chrome = ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/),
            ie = ua.match(/MSIE\s([\d\.]+)/) || ua.match(/(?:trident)(?:.*rv:([\w.]+))?/i),
            firefox = ua.match(/Firefox\/([\d.]+)/),
            safari = ua.match(/Safari\/([\d.]+)/),
            opera = ua.match(/OPR\/([\d.]+)/);
        webkit && (ret.webkit = parseFloat(webkit[1]));
        chrome && (ret.chrome = parseFloat(chrome[1]));
        ie && (ret.ie = parseFloat(ie[1]));
        firefox && (ret.firefox = parseFloat(firefox[1]));
        safari && (ret.safari = parseFloat(safari[1]));
        opera && (ret.opera = parseFloat(opera[1]));
        return ret;
      }(navigator.userAgent),

      /**
       * @description  操作系统检查结果。
       *
       * * `android`  如果在android浏览器环境下，此值为对应的android版本号，否则为`undefined`。
       * * `ios` 如果在ios浏览器环境下，此值为对应的ios版本号，否则为`undefined`。
       * @property {Object} [os]
       */
      os: function (ua) {
        var ret = {},
            // osx = !!ua.match( /\(Macintosh\; Intel / ),
        android = ua.match(/(?:Android);?[\s\/]+([\d.]+)?/),
            ios = ua.match(/(?:iPad|iPod|iPhone).*OS\s([\d_]+)/); // osx && (ret.osx = true);

        android && (ret.android = parseFloat(android[1]));
        ios && (ret.ios = parseFloat(ios[1].replace(/_/g, '.')));
        return ret;
      }(navigator.userAgent),

      /**
       * 实现类与类之间的继承。
       * @method inherits
       * @grammar Base.inherits( super ) => child
       * @grammar Base.inherits( super, protos ) => child
       * @grammar Base.inherits( super, protos, statics ) => child
       * @param  {Class} super 父类
       * @param  {Object | Function} [protos] 子类或者对象。如果对象中包含constructor，子类将是用此属性值。
       * @param  {Function} [protos.constructor] 子类构造器，不指定的话将创建个临时的直接执行父类构造器的方法。
       * @param  {Object} [statics] 静态属性或方法。
       * @return {Class} 返回子类。
       * @example
       * function Person() {
       *     console.log( 'Super' );
       * }
       * Person.prototype.hello = function() {
       *     console.log( 'hello' );
       * };
       *
       * var Manager = Base.inherits( Person, {
       *     world: function() {
       *         console.log( 'World' );
       *     }
       * });
       *
       * // 因为没有指定构造器，父类的构造器将会执行。
       * var instance = new Manager();    // => Super
       *
       * // 继承子父类的方法
       * instance.hello();    // => hello
       * instance.world();    // => World
       *
       * // 子类的__super__属性指向父类
       * console.log( Manager.__super__ === Person );    // => true
       */
      inherits: function (Super, protos, staticProtos) {
        var child;

        if (typeof protos === 'function') {
          child = protos;
          protos = null;
        } else if (protos && protos.hasOwnProperty('constructor')) {
          child = protos.constructor;
        } else {
          child = function () {
            return Super.apply(this, arguments);
          };
        } // 复制静态方法


        $.extend(true, child, Super, staticProtos || {});
        /* jshint camelcase: false */
        // 让子类的__super__属性指向父类。

        child.__super__ = Super.prototype; // 构建原型，添加原型方法或属性。
        // 暂时用Object.create实现。

        child.prototype = createObject(Super.prototype);
        protos && $.extend(true, child.prototype, protos);
        return child;
      },

      /**
       * 一个不做任何事情的方法。可以用来赋值给默认的callback.
       * @method noop
       */
      noop: noop,

      /**
       * 返回一个新的方法，此方法将已指定的`context`来执行。
       * @grammar Base.bindFn( fn, context ) => Function
       * @method bindFn
       * @example
       * var doSomething = function() {
       *         console.log( this.name );
       *     },
       *     obj = {
       *         name: 'Object Name'
       *     },
       *     aliasFn = Base.bind( doSomething, obj );
       *
       *  aliasFn();    // => Object Name
       *
       */
      bindFn: bindFn,

      /**
       * 引用Console.log如果存在的话，否则引用一个[空函数noop](#WebUploader:Base.noop)。
       * @grammar Base.log( args... ) => undefined
       * @method log
       */
      log: function () {
        if (window.console) {
          return bindFn(console.log, console);
        }

        return noop;
      }(),
      nextTick: function () {
        return function (cb) {
          setTimeout(cb, 1);
        }; // @bug 当浏览器不在当前窗口时就停了。
        // var next = window.requestAnimationFrame ||
        //     window.webkitRequestAnimationFrame ||
        //     window.mozRequestAnimationFrame ||
        //     function( cb ) {
        //         window.setTimeout( cb, 1000 / 60 );
        //     };
        // // fix: Uncaught TypeError: Illegal invocation
        // return bindFn( next, window );
      }(),

      /**
       * 被[uncurrythis](http://www.2ality.com/2011/11/uncurrying-this.html)的数组slice方法。
       * 将用来将非数组对象转化成数组对象。
       * @grammar Base.slice( target, start[, end] ) => Array
       * @method slice
       * @example
       * function doSomthing() {
       *     var args = Base.slice( arguments, 1 );
       *     console.log( args );
       * }
       *
       * doSomthing( 'ignored', 'arg2', 'arg3' );    // => Array ["arg2", "arg3"]
       */
      slice: uncurryThis([].slice),

      /**
       * 生成唯一的ID
       * @method guid
       * @grammar Base.guid() => String
       * @grammar Base.guid( prefx ) => String
       */
      guid: function () {
        var counter = 0;
        return function (prefix) {
          var guid = (+new Date()).toString(32),
              i = 0;

          for (; i < 5; i++) {
            guid += Math.floor(Math.random() * 65535).toString(32);
          }

          return (prefix || 'wu_') + guid + (counter++).toString(32);
        };
      }(),

      /**
       * 格式化文件大小, 输出成带单位的字符串
       * @method formatSize
       * @grammar Base.formatSize( size ) => String
       * @grammar Base.formatSize( size, pointLength ) => String
       * @grammar Base.formatSize( size, pointLength, units ) => String
       * @param {Number} size 文件大小
       * @param {Number} [pointLength=2] 精确到的小数点数。
       * @param {Array} [units=[ 'B', 'K', 'M', 'G', 'TB' ]] 单位数组。从字节，到千字节，一直往上指定。如果单位数组里面只指定了到了K(千字节)，同时文件大小大于M, 此方法的输出将还是显示成多少K.
       * @example
       * console.log( Base.formatSize( 100 ) );    // => 100B
       * console.log( Base.formatSize( 1024 ) );    // => 1.00K
       * console.log( Base.formatSize( 1024, 0 ) );    // => 1K
       * console.log( Base.formatSize( 1024 * 1024 ) );    // => 1.00M
       * console.log( Base.formatSize( 1024 * 1024 * 1024 ) );    // => 1.00G
       * console.log( Base.formatSize( 1024 * 1024 * 1024, 0, ['B', 'KB', 'MB'] ) );    // => 1024MB
       */
      formatSize: function (size, pointLength, units) {
        var unit;
        units = units || ['B', 'K', 'M', 'G', 'TB'];

        while ((unit = units.shift()) && size > 1024) {
          size = size / 1024;
        }

        return (unit === 'B' ? size : size.toFixed(pointLength || 2)) + unit;
      }
    };
  });
  /**
   * 事件处理类，可以独立使用，也可以扩展给对象使用。
   * @fileOverview Mediator
   */

  define('mediator', ['base'], function (Base) {
    var $ = Base.$,
        slice = [].slice,
        separator = /\s+/,
        protos; // 根据条件过滤出事件handlers.

    function findHandlers(arr, name, callback, context) {
      return $.grep(arr, function (handler) {
        return handler && (!name || handler.e === name) && (!callback || handler.cb === callback || handler.cb._cb === callback) && (!context || handler.ctx === context);
      });
    }

    function eachEvent(events, callback, iterator) {
      // 不支持对象，只支持多个event用空格隔开
      $.each((events || '').split(separator), function (_, key) {
        iterator(key, callback);
      });
    }

    function triggerHanders(events, args) {
      var stoped = false,
          i = -1,
          len = events.length,
          handler;

      while (++i < len) {
        handler = events[i];

        if (handler.cb.apply(handler.ctx2, args) === false) {
          stoped = true;
          break;
        }
      }

      return !stoped;
    }

    protos = {
      /**
       * 绑定事件。
       *
       * `callback`方法在执行时，arguments将会来源于trigger的时候携带的参数。如
       * ```javascript
       * var obj = {};
       *
       * // 使得obj有事件行为
       * Mediator.installTo( obj );
       *
       * obj.on( 'testa', function( arg1, arg2 ) {
       *     console.log( arg1, arg2 ); // => 'arg1', 'arg2'
       * });
       *
       * obj.trigger( 'testa', 'arg1', 'arg2' );
       * ```
       *
       * 如果`callback`中，某一个方法`return false`了，则后续的其他`callback`都不会被执行到。
       * 切会影响到`trigger`方法的返回值，为`false`。
       *
       * `on`还可以用来添加一个特殊事件`all`, 这样所有的事件触发都会响应到。同时此类`callback`中的arguments有一个不同处，
       * 就是第一个参数为`type`，记录当前是什么事件在触发。此类`callback`的优先级比脚低，会再正常`callback`执行完后触发。
       * ```javascript
       * obj.on( 'all', function( type, arg1, arg2 ) {
       *     console.log( type, arg1, arg2 ); // => 'testa', 'arg1', 'arg2'
       * });
       * ```
       *
       * @method on
       * @grammar on( name, callback[, context] ) => self
       * @param  {String}   name     事件名，支持多个事件用空格隔开
       * @param  {Function} callback 事件处理器
       * @param  {Object}   [context]  事件处理器的上下文。
       * @return {self} 返回自身，方便链式
       * @chainable
       * @class Mediator
       */
      on: function (name, callback, context) {
        var me = this,
            set;

        if (!callback) {
          return this;
        }

        set = this._events || (this._events = []);
        eachEvent(name, callback, function (name, callback) {
          var handler = {
            e: name
          };
          handler.cb = callback;
          handler.ctx = context;
          handler.ctx2 = context || me;
          handler.id = set.length;
          set.push(handler);
        });
        return this;
      },

      /**
       * 绑定事件，且当handler执行完后，自动解除绑定。
       * @method once
       * @grammar once( name, callback[, context] ) => self
       * @param  {String}   name     事件名
       * @param  {Function} callback 事件处理器
       * @param  {Object}   [context]  事件处理器的上下文。
       * @return {self} 返回自身，方便链式
       * @chainable
       */
      once: function (name, callback, context) {
        var me = this;

        if (!callback) {
          return me;
        }

        eachEvent(name, callback, function (name, callback) {
          var once = function () {
            me.off(name, once);
            return callback.apply(context || me, arguments);
          };

          once._cb = callback;
          me.on(name, once, context);
        });
        return me;
      },

      /**
       * 解除事件绑定
       * @method off
       * @grammar off( [name[, callback[, context] ] ] ) => self
       * @param  {String}   [name]     事件名
       * @param  {Function} [callback] 事件处理器
       * @param  {Object}   [context]  事件处理器的上下文。
       * @return {self} 返回自身，方便链式
       * @chainable
       */
      off: function (name, cb, ctx) {
        var events = this._events;

        if (!events) {
          return this;
        }

        if (!name && !cb && !ctx) {
          this._events = [];
          return this;
        }

        eachEvent(name, cb, function (name, cb) {
          $.each(findHandlers(events, name, cb, ctx), function () {
            delete events[this.id];
          });
        });
        return this;
      },

      /**
       * 触发事件
       * @method trigger
       * @grammar trigger( name[, args...] ) => self
       * @param  {String}   type     事件名
       * @param  {*} [...] 任意参数
       * @return {Boolean} 如果handler中return false了，则返回false, 否则返回true
       */
      trigger: function (type) {
        var args, events, allEvents;

        if (!this._events || !type) {
          return this;
        }

        args = slice.call(arguments, 1);
        events = findHandlers(this._events, type);
        allEvents = findHandlers(this._events, 'all');
        return triggerHanders(events, args) && triggerHanders(allEvents, arguments);
      }
    };
    /**
     * 中介者，它本身是个单例，但可以通过[installTo](#WebUploader:Mediator:installTo)方法，使任何对象具备事件行为。
     * 主要目的是负责模块与模块之间的合作，降低耦合度。
     *
     * @class Mediator
     */

    return $.extend({
      /**
       * 可以通过这个接口，使任何对象具备事件功能。
       * @method installTo
       * @param  {Object} obj 需要具备事件行为的对象。
       * @return {Object} 返回obj.
       */
      installTo: function (obj) {
        return $.extend(obj, protos);
      }
    }, protos);
  });
  /**
   * @fileOverview Uploader上传类
   */

  define('uploader', ['base', 'mediator'], function (Base, Mediator) {
    var $ = Base.$;
    /**
     * 上传入口类。
     * @class Uploader
     * @constructor
     * @grammar new Uploader( opts ) => Uploader
     * @example
     * var uploader = WebUploader.Uploader({
     *     swf: 'path_of_swf/Uploader.swf',
     *
     *     // 开起分片上传。
     *     chunked: true
     * });
     */

    function Uploader(opts) {
      this.options = $.extend(true, {}, Uploader.options, opts);

      this._init(this.options);
    } // default Options
    // widgets中有相应扩展


    Uploader.options = {};
    Mediator.installTo(Uploader.prototype); // 批量添加纯命令式方法。

    $.each({
      upload: 'start-upload',
      stop: 'stop-upload',
      getFile: 'get-file',
      getFiles: 'get-files',
      addFile: 'add-file',
      addFiles: 'add-file',
      sort: 'sort-files',
      removeFile: 'remove-file',
      cancelFile: 'cancel-file',
      skipFile: 'skip-file',
      retry: 'retry',
      isInProgress: 'is-in-progress',
      makeThumb: 'make-thumb',
      md5File: 'md5-file',
      getDimension: 'get-dimension',
      addButton: 'add-btn',
      predictRuntimeType: 'predict-runtime-type',
      refresh: 'refresh',
      disable: 'disable',
      enable: 'enable',
      reset: 'reset'
    }, function (fn, command) {
      Uploader.prototype[fn] = function () {
        return this.request(command, arguments);
      };
    });
    $.extend(Uploader.prototype, {
      state: 'pending',
      _init: function (opts) {
        var me = this;
        me.request('init', opts, function () {
          me.state = 'ready';
          me.trigger('ready');
        });
      },

      /**
       * 获取或者设置Uploader配置项。
       * @method option
       * @grammar option( key ) => *
       * @grammar option( key, val ) => self
       * @example
       *
       * // 初始状态图片上传前不会压缩
       * var uploader = new WebUploader.Uploader({
       *     compress: null;
       * });
       *
       * // 修改后图片上传前，尝试将图片压缩到1600 * 1600
       * uploader.option( 'compress', {
       *     width: 1600,
       *     height: 1600
       * });
       */
      option: function (key, val) {
        var opts = this.options; // setter

        if (arguments.length > 1) {
          if ($.isPlainObject(val) && $.isPlainObject(opts[key])) {
            $.extend(opts[key], val);
          } else {
            opts[key] = val;
          }
        } else {
          // getter
          return key ? opts[key] : opts;
        }
      },

      /**
       * 获取文件统计信息。返回一个包含一下信息的对象。
       * * `successNum` 上传成功的文件数
       * * `progressNum` 上传中的文件数
       * * `cancelNum` 被删除的文件数
       * * `invalidNum` 无效的文件数
       * * `uploadFailNum` 上传失败的文件数
       * * `queueNum` 还在队列中的文件数
       * * `interruptNum` 被暂停的文件数
       * @method getStats
       * @grammar getStats() => Object
       */
      getStats: function () {
        // return this._mgr.getStats.apply( this._mgr, arguments );
        var stats = this.request('get-stats');
        return stats ? {
          successNum: stats.numOfSuccess,
          progressNum: stats.numOfProgress,
          // who care?
          // queueFailNum: 0,
          cancelNum: stats.numOfCancel,
          invalidNum: stats.numOfInvalid,
          uploadFailNum: stats.numOfUploadFailed,
          queueNum: stats.numOfQueue,
          interruptNum: stats.numofInterrupt
        } : {};
      },
      // 需要重写此方法来来支持opts.onEvent和instance.onEvent的处理器
      trigger: function (type
      /*, args...*/
      ) {
        var args = [].slice.call(arguments, 1),
            opts = this.options,
            name = 'on' + type.substring(0, 1).toUpperCase() + type.substring(1);

        if ( // 调用通过on方法注册的handler.
        Mediator.trigger.apply(this, arguments) === false || // 调用opts.onEvent
        $.isFunction(opts[name]) && opts[name].apply(this, args) === false || // 调用this.onEvent
        $.isFunction(this[name]) && this[name].apply(this, args) === false || // 广播所有uploader的事件。
        Mediator.trigger.apply(Mediator, [this, type].concat(args)) === false) {
          return false;
        }

        return true;
      },

      /**
       * 销毁 webuploader 实例
       * @method destroy
       * @grammar destroy() => undefined
       */
      destroy: function () {
        this.request('destroy', arguments);
        this.off();
      },
      // widgets/widget.js将补充此方法的详细文档。
      request: Base.noop
    });
    /**
     * 创建Uploader实例，等同于new Uploader( opts );
     * @method create
     * @class Base
     * @static
     * @grammar Base.create( opts ) => Uploader
     */

    Base.create = Uploader.create = function (opts) {
      return new Uploader(opts);
    }; // 暴露Uploader，可以通过它来扩展业务逻辑。


    Base.Uploader = Uploader;
    return Uploader;
  });
  /**
   * @fileOverview Runtime管理器，负责Runtime的选择, 连接
   */

  define('runtime/runtime', ['base', 'mediator'], function (Base, Mediator) {
    var $ = Base.$,
        factories = {},
        // 获取对象的第一个key
    getFirstKey = function (obj) {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          return key;
        }
      }

      return null;
    }; // 接口类。


    function Runtime(options) {
      this.options = $.extend({
        container: document.body
      }, options);
      this.uid = Base.guid('rt_');
    }

    $.extend(Runtime.prototype, {
      getContainer: function () {
        var opts = this.options,
            parent,
            container;

        if (this._container) {
          return this._container;
        }

        parent = $(opts.container || document.body);
        container = $(document.createElement('div'));
        container.attr('id', 'rt_' + this.uid);
        container.css({
          position: 'absolute',
          top: '0px',
          left: '0px',
          width: '1px',
          height: '1px',
          overflow: 'hidden'
        });
        parent.append(container);
        parent.addClass('webuploader-container');
        this._container = container;
        this._parent = parent;
        return container;
      },
      init: Base.noop,
      exec: Base.noop,
      destroy: function () {
        this._container && this._container.remove();
        this._parent && this._parent.removeClass('webuploader-container');
        this.off();
      }
    });
    Runtime.orders = 'html5,flash';
    /**
     * 添加Runtime实现。
     * @param {String} type    类型
     * @param {Runtime} factory 具体Runtime实现。
     */

    Runtime.addRuntime = function (type, factory) {
      factories[type] = factory;
    };

    Runtime.hasRuntime = function (type) {
      return !!(type ? factories[type] : getFirstKey(factories));
    };

    Runtime.create = function (opts, orders) {
      var type, runtime;
      orders = orders || Runtime.orders;
      $.each(orders.split(/\s*,\s*/g), function () {
        if (factories[this]) {
          type = this;
          return false;
        }
      });
      type = type || getFirstKey(factories);

      if (!type) {
        throw new Error('Runtime Error');
      }

      runtime = new factories[type](opts);
      return runtime;
    };

    Mediator.installTo(Runtime.prototype);
    return Runtime;
  });
  /**
   * @fileOverview Runtime管理器，负责Runtime的选择, 连接
   */

  define('runtime/client', ['base', 'mediator', 'runtime/runtime'], function (Base, Mediator, Runtime) {
    var cache;

    cache = function () {
      var obj = {};
      return {
        add: function (runtime) {
          obj[runtime.uid] = runtime;
        },
        get: function (ruid, standalone) {
          var i;

          if (ruid) {
            return obj[ruid];
          }

          for (i in obj) {
            // 有些类型不能重用，比如filepicker.
            if (standalone && obj[i].__standalone) {
              continue;
            }

            return obj[i];
          }

          return null;
        },
        remove: function (runtime) {
          delete obj[runtime.uid];
        }
      };
    }();

    function RuntimeClient(component, standalone) {
      var deferred = Base.Deferred(),
          runtime;
      this.uid = Base.guid('client_'); // 允许runtime没有初始化之前，注册一些方法在初始化后执行。

      this.runtimeReady = function (cb) {
        return deferred.done(cb);
      };

      this.connectRuntime = function (opts, cb) {
        // already connected.
        if (runtime) {
          throw new Error('already connected!');
        }

        deferred.done(cb);

        if (typeof opts === 'string' && cache.get(opts)) {
          runtime = cache.get(opts);
        } // 像filePicker只能独立存在，不能公用。


        runtime = runtime || cache.get(null, standalone); // 需要创建

        if (!runtime) {
          runtime = Runtime.create(opts, opts.runtimeOrder);
          runtime.__promise = deferred.promise();
          runtime.once('ready', deferred.resolve);
          runtime.init();
          cache.add(runtime);
          runtime.__client = 1;
        } else {
          // 来自cache
          Base.$.extend(runtime.options, opts);

          runtime.__promise.then(deferred.resolve);

          runtime.__client++;
        }

        standalone && (runtime.__standalone = standalone);
        return runtime;
      };

      this.getRuntime = function () {
        return runtime;
      };

      this.disconnectRuntime = function () {
        if (!runtime) {
          return;
        }

        runtime.__client--;

        if (runtime.__client <= 0) {
          cache.remove(runtime);
          delete runtime.__promise;
          runtime.destroy();
        }

        runtime = null;
      };

      this.exec = function () {
        if (!runtime) {
          return;
        }

        var args = Base.slice(arguments);
        component && args.unshift(component);
        return runtime.exec.apply(this, args);
      };

      this.getRuid = function () {
        return runtime && runtime.uid;
      };

      this.destroy = function (destroy) {
        return function () {
          destroy && destroy.apply(this, arguments);
          this.trigger('destroy');
          this.off();
          this.exec('destroy');
          this.disconnectRuntime();
        };
      }(this.destroy);
    }

    Mediator.installTo(RuntimeClient.prototype);
    return RuntimeClient;
  });
  /**
   * @fileOverview 错误信息
   */

  define('lib/dnd', ['base', 'mediator', 'runtime/client'], function (Base, Mediator, RuntimeClent) {
    var $ = Base.$;

    function DragAndDrop(opts) {
      opts = this.options = $.extend({}, DragAndDrop.options, opts);
      opts.container = $(opts.container);

      if (!opts.container.length) {
        return;
      }

      RuntimeClent.call(this, 'DragAndDrop');
    }

    DragAndDrop.options = {
      accept: null,
      disableGlobalDnd: false
    };
    Base.inherits(RuntimeClent, {
      constructor: DragAndDrop,
      init: function () {
        var me = this;
        me.connectRuntime(me.options, function () {
          me.exec('init');
          me.trigger('ready');
        });
      }
    });
    Mediator.installTo(DragAndDrop.prototype);
    return DragAndDrop;
  });
  /**
   * @fileOverview 组件基类。
   */

  define('widgets/widget', ['base', 'uploader'], function (Base, Uploader) {
    var $ = Base.$,
        _init = Uploader.prototype._init,
        _destroy = Uploader.prototype.destroy,
        IGNORE = {},
        widgetClass = [];

    function isArrayLike(obj) {
      if (!obj) {
        return false;
      }

      var length = obj.length,
          type = $.type(obj);

      if (obj.nodeType === 1 && length) {
        return true;
      }

      return type === 'array' || type !== 'function' && type !== 'string' && (length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj);
    }

    function Widget(uploader) {
      this.owner = uploader;
      this.options = uploader.options;
    }

    $.extend(Widget.prototype, {
      init: Base.noop,
      // 类Backbone的事件监听声明，监听uploader实例上的事件
      // widget直接无法监听事件，事件只能通过uploader来传递
      invoke: function (apiName, args) {
        /*
            {
                'make-thumb': 'makeThumb'
            }
         */
        var map = this.responseMap; // 如果无API响应声明则忽略

        if (!map || !(apiName in map) || !(map[apiName] in this) || !$.isFunction(this[map[apiName]])) {
          return IGNORE;
        }

        return this[map[apiName]].apply(this, args);
      },

      /**
       * 发送命令。当传入`callback`或者`handler`中返回`promise`时。返回一个当所有`handler`中的promise都完成后完成的新`promise`。
       * @method request
       * @grammar request( command, args ) => * | Promise
       * @grammar request( command, args, callback ) => Promise
       * @for  Uploader
       */
      request: function () {
        return this.owner.request.apply(this.owner, arguments);
      }
    }); // 扩展Uploader.

    $.extend(Uploader.prototype, {
      /**
       * @property {String | Array} [disableWidgets=undefined]
       * @namespace options
       * @for Uploader
       * @description 默认所有 Uploader.register 了的 widget 都会被加载，如果禁用某一部分，请通过此 option 指定黑名单。
       */
      // 覆写_init用来初始化widgets
      _init: function () {
        var me = this,
            widgets = me._widgets = [],
            deactives = me.options.disableWidgets || '';
        $.each(widgetClass, function (_, klass) {
          (!deactives || !~deactives.indexOf(klass._name)) && widgets.push(new klass(me));
        });
        return _init.apply(me, arguments);
      },
      request: function (apiName, args, callback) {
        var i = 0,
            widgets = this._widgets,
            len = widgets && widgets.length,
            rlts = [],
            dfds = [],
            widget,
            rlt,
            promise,
            key;
        args = isArrayLike(args) ? args : [args];

        for (; i < len; i++) {
          widget = widgets[i];
          rlt = widget.invoke(apiName, args);

          if (rlt !== IGNORE) {
            // Deferred对象
            if (Base.isPromise(rlt)) {
              dfds.push(rlt);
            } else {
              rlts.push(rlt);
            }
          }
        } // 如果有callback，则用异步方式。


        if (callback || dfds.length) {
          promise = Base.when.apply(Base, dfds);
          key = promise.pipe ? 'pipe' : 'then'; // 很重要不能删除。删除了会死循环。
          // 保证执行顺序。让callback总是在下一个 tick 中执行。

          return promise[key](function () {
            var deferred = Base.Deferred(),
                args = arguments;

            if (args.length === 1) {
              args = args[0];
            }

            setTimeout(function () {
              deferred.resolve(args);
            }, 1);
            return deferred.promise();
          })[callback ? key : 'done'](callback || Base.noop);
        } else {
          return rlts[0];
        }
      },
      destroy: function () {
        _destroy.apply(this, arguments);

        this._widgets = null;
      }
    });
    /**
     * 添加组件
     * @grammar Uploader.register(proto);
     * @grammar Uploader.register(map, proto);
     * @param  {object} responseMap API 名称与函数实现的映射
     * @param  {object} proto 组件原型，构造函数通过 constructor 属性定义
     * @method Uploader.register
     * @for Uploader
     * @example
     * Uploader.register({
     *     'make-thumb': 'makeThumb'
     * }, {
     *     init: function( options ) {},
     *     makeThumb: function() {}
     * });
     *
     * Uploader.register({
     *     'make-thumb': function() {
     *
     *     }
     * });
     */

    Uploader.register = Widget.register = function (responseMap, widgetProto) {
      var map = {
        init: 'init',
        destroy: 'destroy',
        name: 'anonymous'
      },
          klass;

      if (arguments.length === 1) {
        widgetProto = responseMap; // 自动生成 map 表。

        $.each(widgetProto, function (key) {
          if (key[0] === '_' || key === 'name') {
            key === 'name' && (map.name = widgetProto.name);
            return;
          }

          map[key.replace(/[A-Z]/g, '-$&').toLowerCase()] = key;
        });
      } else {
        map = $.extend(map, responseMap);
      }

      widgetProto.responseMap = map;
      klass = Base.inherits(Widget, widgetProto);
      klass._name = map.name;
      widgetClass.push(klass);
      return klass;
    };
    /**
     * 删除插件，只有在注册时指定了名字的才能被删除。
     * @grammar Uploader.unRegister(name);
     * @param  {string} name 组件名字
     * @method Uploader.unRegister
     * @for Uploader
     * @example
     *
     * Uploader.register({
     *     name: 'custom',
     *
     *     'make-thumb': function() {
     *
     *     }
     * });
     *
     * Uploader.unRegister('custom');
     */


    Uploader.unRegister = Widget.unRegister = function (name) {
      if (!name || name === 'anonymous') {
        return;
      } // 删除指定的插件。


      for (var i = widgetClass.length; i--;) {
        if (widgetClass[i]._name === name) {
          widgetClass.splice(i, 1);
        }
      }
    };

    return Widget;
  });
  /**
   * @fileOverview DragAndDrop Widget。
   */

  define('widgets/filednd', ['base', 'uploader', 'lib/dnd', 'widgets/widget'], function (Base, Uploader, Dnd) {
    var $ = Base.$;
    Uploader.options.dnd = '';
    /**
     * @property {Selector} [dnd=undefined]  指定Drag And Drop拖拽的容器，如果不指定，则不启动。
     * @namespace options
     * @for Uploader
     */

    /**
     * @property {Selector} [disableGlobalDnd=false]  是否禁掉整个页面的拖拽功能，如果不禁用，图片拖进来的时候会默认被浏览器打开。
     * @namespace options
     * @for Uploader
     */

    /**
     * @event dndAccept
     * @param {DataTransferItemList} items DataTransferItem
     * @description 阻止此事件可以拒绝某些类型的文件拖入进来。目前只有 chrome 提供这样的 API，且只能通过 mime-type 验证。
     * @for  Uploader
     */

    return Uploader.register({
      name: 'dnd',
      init: function (opts) {
        if (!opts.dnd || this.request('predict-runtime-type') !== 'html5') {
          return;
        }

        var me = this,
            deferred = Base.Deferred(),
            options = $.extend({}, {
          disableGlobalDnd: opts.disableGlobalDnd,
          container: opts.dnd,
          accept: opts.accept
        }),
            dnd;
        this.dnd = dnd = new Dnd(options);
        dnd.once('ready', deferred.resolve);
        dnd.on('drop', function (files) {
          me.request('add-file', [files]);
        }); // 检测文件是否全部允许添加。

        dnd.on('accept', function (items) {
          return me.owner.trigger('dndAccept', items);
        });
        dnd.init();
        return deferred.promise();
      },
      destroy: function () {
        this.dnd && this.dnd.destroy();
      }
    });
  });
  /**
   * @fileOverview 错误信息
   */

  define('lib/filepaste', ['base', 'mediator', 'runtime/client'], function (Base, Mediator, RuntimeClent) {
    var $ = Base.$;

    function FilePaste(opts) {
      opts = this.options = $.extend({}, opts);
      opts.container = $(opts.container || document.body);
      RuntimeClent.call(this, 'FilePaste');
    }

    Base.inherits(RuntimeClent, {
      constructor: FilePaste,
      init: function () {
        var me = this;
        me.connectRuntime(me.options, function () {
          me.exec('init');
          me.trigger('ready');
        });
      }
    });
    Mediator.installTo(FilePaste.prototype);
    return FilePaste;
  });
  /**
   * @fileOverview 组件基类。
   */

  define('widgets/filepaste', ['base', 'uploader', 'lib/filepaste', 'widgets/widget'], function (Base, Uploader, FilePaste) {
    var $ = Base.$;
    /**
     * @property {Selector} [paste=undefined]  指定监听paste事件的容器，如果不指定，不启用此功能。此功能为通过粘贴来添加截屏的图片。建议设置为`document.body`.
     * @namespace options
     * @for Uploader
     */

    return Uploader.register({
      name: 'paste',
      init: function (opts) {
        if (!opts.paste || this.request('predict-runtime-type') !== 'html5') {
          return;
        }

        var me = this,
            deferred = Base.Deferred(),
            options = $.extend({}, {
          container: opts.paste,
          accept: opts.accept
        }),
            paste;
        this.paste = paste = new FilePaste(options);
        paste.once('ready', deferred.resolve);
        paste.on('paste', function (files) {
          me.owner.request('add-file', [files]);
        });
        paste.init();
        return deferred.promise();
      },
      destroy: function () {
        this.paste && this.paste.destroy();
      }
    });
  });
  /**
   * @fileOverview Blob
   */

  define('lib/blob', ['base', 'runtime/client'], function (Base, RuntimeClient) {
    function Blob(ruid, source) {
      var me = this;
      me.source = source;
      me.ruid = ruid;
      this.size = source.size || 0; // 如果没有指定 mimetype, 但是知道文件后缀。

      if (!source.type && this.ext && ~'jpg,jpeg,png,gif,bmp'.indexOf(this.ext)) {
        this.type = 'image/' + (this.ext === 'jpg' ? 'jpeg' : this.ext);
      } else {
        this.type = source.type || 'application/octet-stream';
      }

      RuntimeClient.call(me, 'Blob');
      this.uid = source.uid || this.uid;

      if (ruid) {
        me.connectRuntime(ruid);
      }
    }

    Base.inherits(RuntimeClient, {
      constructor: Blob,
      slice: function (start, end) {
        return this.exec('slice', start, end);
      },
      getSource: function () {
        return this.source;
      }
    });
    return Blob;
  });
  /**
   * 为了统一化Flash的File和HTML5的File而存在。
   * 以至于要调用Flash里面的File，也可以像调用HTML5版本的File一下。
   * @fileOverview File
   */

  define('lib/file', ['base', 'lib/blob'], function (Base, Blob) {
    var uid = 1,
        rExt = /\.([^.]+)$/;

    function File(ruid, file) {
      var ext;
      this.name = file.name || 'untitled' + uid++;
      ext = rExt.exec(file.name) ? RegExp.$1.toLowerCase() : ''; // todo 支持其他类型文件的转换。
      // 如果有 mimetype, 但是文件名里面没有找出后缀规律

      if (!ext && file.type) {
        ext = /\/(jpg|jpeg|png|gif|bmp)$/i.exec(file.type) ? RegExp.$1.toLowerCase() : '';
        this.name += '.' + ext;
      }

      this.ext = ext;
      this.lastModifiedDate = file.lastModifiedDate || new Date().toLocaleString();
      Blob.apply(this, arguments);
    }

    return Base.inherits(Blob, File);
  });
  /**
   * @fileOverview 错误信息
   */

  define('lib/filepicker', ['base', 'runtime/client', 'lib/file'], function (Base, RuntimeClient, File) {
    var $ = Base.$;

    function FilePicker(opts) {
      opts = this.options = $.extend({}, FilePicker.options, opts);
      opts.container = $(opts.id);

      if (!opts.container.length) {
        throw new Error('按钮指定错误');
      }

      opts.innerHTML = opts.innerHTML || opts.label || opts.container.html() || '';
      opts.button = $(opts.button || document.createElement('div'));
      opts.button.html(opts.innerHTML);
      opts.container.html(opts.button);
      RuntimeClient.call(this, 'FilePicker', true);
    }

    FilePicker.options = {
      button: null,
      container: null,
      label: null,
      innerHTML: null,
      multiple: true,
      accept: null,
      name: 'file',
      style: 'webuploader-pick' //pick element class attribute, default is "webuploader-pick"

    };
    Base.inherits(RuntimeClient, {
      constructor: FilePicker,
      init: function () {
        var me = this,
            opts = me.options,
            button = opts.button,
            style = opts.style;
        if (style) button.addClass('webuploader-pick');
        me.on('all', function (type) {
          var files;

          switch (type) {
            case 'mouseenter':
              if (style) button.addClass('webuploader-pick-hover');
              break;

            case 'mouseleave':
              if (style) button.removeClass('webuploader-pick-hover');
              break;

            case 'change':
              files = me.exec('getFiles');
              me.trigger('select', $.map(files, function (file) {
                file = new File(me.getRuid(), file); // 记录来源。

                file._refer = opts.container;
                return file;
              }), opts.container);
              break;
          }
        });
        me.connectRuntime(opts, function () {
          me.refresh();
          me.exec('init', opts);
          me.trigger('ready');
        });
        this._resizeHandler = Base.bindFn(this.refresh, this);
        $(window).on('resize', this._resizeHandler);
      },
      refresh: function () {
        var shimContainer = this.getRuntime().getContainer(),
            button = this.options.button,
            width = button.outerWidth ? button.outerWidth() : button.width(),
            height = button.outerHeight ? button.outerHeight() : button.height(),
            pos = button.offset();
        width && height && shimContainer.css({
          bottom: 'auto',
          right: 'auto',
          width: width + 'px',
          height: height + 'px'
        }).offset(pos);
      },
      enable: function () {
        var btn = this.options.button;
        btn.removeClass('webuploader-pick-disable');
        this.refresh();
      },
      disable: function () {
        var btn = this.options.button;
        this.getRuntime().getContainer().css({
          top: '-99999px'
        });
        btn.addClass('webuploader-pick-disable');
      },
      destroy: function () {
        var btn = this.options.button;
        $(window).off('resize', this._resizeHandler);
        btn.removeClass('webuploader-pick-disable webuploader-pick-hover ' + 'webuploader-pick');
      }
    });
    return FilePicker;
  });
  /**
   * @fileOverview 文件选择相关
   */

  define('widgets/filepicker', ['base', 'uploader', 'lib/filepicker', 'widgets/widget'], function (Base, Uploader, FilePicker) {
    var $ = Base.$;
    $.extend(Uploader.options, {
      /**
       * @property {Selector | Object} [pick=undefined]
       * @namespace options
       * @for Uploader
       * @description 指定选择文件的按钮容器，不指定则不创建按钮。
       *
       * * `id` {Seletor|dom} 指定选择文件的按钮容器，不指定则不创建按钮。**注意** 这里虽然写的是 id, 但是不是只支持 id, 还支持 class, 或者 dom 节点。
       * * `label` {String} 请采用 `innerHTML` 代替
       * * `innerHTML` {String} 指定按钮文字。不指定时优先从指定的容器中看是否自带文字。
       * * `multiple` {Boolean} 是否开起同时选择多个文件能力。
       */
      pick: null,

      /**
       * @property {Arroy} [accept=null]
       * @namespace options
       * @for Uploader
       * @description 指定接受哪些类型的文件。 由于目前还有ext转mimeType表，所以这里需要分开指定。
       *
       * * `title` {String} 文字描述
       * * `extensions` {String} 允许的文件后缀，不带点，多个用逗号分割。
       * * `mimeTypes` {String} 多个用逗号分割。
       *
       * 如：
       *
       * ```
       * {
       *     title: 'Images',
       *     extensions: 'gif,jpg,jpeg,bmp,png',
       *     mimeTypes: 'image/*'
       * }
       * ```
       */
      accept: null
      /*{
      title: 'Images',
      extensions: 'gif,jpg,jpeg,bmp,png',
      mimeTypes: 'image/*'
      }*/

    });
    return Uploader.register({
      name: 'picker',
      init: function (opts) {
        this.pickers = [];
        return opts.pick && this.addBtn(opts.pick);
      },
      refresh: function () {
        $.each(this.pickers, function () {
          this.refresh();
        });
      },

      /**
       * @method addBtn
       * @for Uploader
       * @grammar addBtn( pick ) => Promise
       * @description
       * 添加文件选择按钮，如果一个按钮不够，需要调用此方法来添加。参数跟[options.pick](#WebUploader:Uploader:options)一致。
       * @example
       * uploader.addBtn({
       *     id: '#btnContainer',
       *     innerHTML: '选择文件'
       * });
       */
      addBtn: function (pick) {
        var me = this,
            opts = me.options,
            accept = opts.accept,
            promises = [];

        if (!pick) {
          return;
        }

        $.isPlainObject(pick) || (pick = {
          id: pick
        });
        $(pick.id).each(function () {
          var options, picker, deferred;
          deferred = Base.Deferred();
          options = $.extend({}, pick, {
            accept: $.isPlainObject(accept) ? [accept] : accept,
            swf: opts.swf,
            runtimeOrder: opts.runtimeOrder,
            id: this
          });
          picker = new FilePicker(options);
          picker.once('ready', deferred.resolve);
          picker.on('select', function (files) {
            me.owner.request('add-file', [files]);
          });
          picker.on('dialogopen', function () {
            me.owner.trigger('dialogOpen', picker.button);
          });
          picker.init();
          me.pickers.push(picker);
          promises.push(deferred.promise());
        });
        return Base.when.apply(Base, promises);
      },
      disable: function () {
        $.each(this.pickers, function () {
          this.disable();
        });
      },
      enable: function () {
        $.each(this.pickers, function () {
          this.enable();
        });
      },
      destroy: function () {
        $.each(this.pickers, function () {
          this.destroy();
        });
        this.pickers = null;
      }
    });
  });
  /**
   * @fileOverview Image
   */

  define('lib/image', ['base', 'runtime/client', 'lib/blob'], function (Base, RuntimeClient, Blob) {
    var $ = Base.$; // 构造器。

    function Image(opts) {
      this.options = $.extend({}, Image.options, opts);
      RuntimeClient.call(this, 'Image');
      this.on('load', function () {
        this._info = this.exec('info');
        this._meta = this.exec('meta');
      });
    } // 默认选项。


    Image.options = {
      // 默认的图片处理质量
      quality: 90,
      // 是否裁剪
      crop: false,
      // 是否保留头部信息
      preserveHeaders: false,
      // 是否允许放大。
      allowMagnify: false
    }; // 继承RuntimeClient.

    Base.inherits(RuntimeClient, {
      constructor: Image,
      info: function (val) {
        // setter
        if (val) {
          this._info = val;
          return this;
        } // getter


        return this._info;
      },
      meta: function (val) {
        // setter
        if (val) {
          this._meta = val;
          return this;
        } // getter


        return this._meta;
      },
      loadFromBlob: function (blob) {
        var me = this,
            ruid = blob.getRuid();
        this.connectRuntime(ruid, function () {
          me.exec('init', me.options);
          me.exec('loadFromBlob', blob);
        });
      },
      resize: function () {
        var args = Base.slice(arguments);
        return this.exec.apply(this, ['resize'].concat(args));
      },
      crop: function () {
        var args = Base.slice(arguments);
        return this.exec.apply(this, ['crop'].concat(args));
      },
      getAsDataUrl: function (type) {
        return this.exec('getAsDataUrl', type);
      },
      getAsBlob: function (type) {
        var blob = this.exec('getAsBlob', type);
        return new Blob(this.getRuid(), blob);
      }
    });
    return Image;
  });
  /**
   * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
   */

  define('widgets/image', ['base', 'uploader', 'lib/image', 'widgets/widget'], function (Base, Uploader, Image) {
    var $ = Base.$,
        throttle; // 根据要处理的文件大小来节流，一次不能处理太多，会卡。

    throttle = function (max) {
      var occupied = 0,
          waiting = [],
          tick = function () {
        var item;

        while (waiting.length && occupied < max) {
          item = waiting.shift();
          occupied += item[0];
          item[1]();
        }
      };

      return function (emiter, size, cb) {
        waiting.push([size, cb]);
        emiter.once('destroy', function () {
          occupied -= size;
          setTimeout(tick, 1);
        });
        setTimeout(tick, 1);
      };
    }(5 * 1024 * 1024);

    $.extend(Uploader.options, {
      /**
       * @property {Object} [thumb]
       * @namespace options
       * @for Uploader
       * @description 配置生成缩略图的选项。
       *
       * 默认为：
       *
       * ```javascript
       * {
       *     width: 110,
       *     height: 110,
       *
       *     // 图片质量，只有type为`image/jpeg`的时候才有效。
       *     quality: 70,
       *
       *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
       *     allowMagnify: true,
       *
       *     // 是否允许裁剪。
       *     crop: true,
       *
       *     // 为空的话则保留原有图片格式。
       *     // 否则强制转换成指定的类型。
       *     type: 'image/jpeg'
       * }
       * ```
       */
      thumb: {
        width: 110,
        height: 110,
        quality: 70,
        allowMagnify: true,
        crop: true,
        preserveHeaders: false,
        // 为空的话则保留原有图片格式。
        // 否则强制转换成指定的类型。
        // IE 8下面 base64 大小不能超过 32K 否则预览失败，而非 jpeg 编码的图片很可
        // 能会超过 32k, 所以这里设置成预览的时候都是 image/jpeg
        type: 'image/jpeg'
      },

      /**
       * @property {Object} [compress]
       * @namespace options
       * @for Uploader
       * @description 配置压缩的图片的选项。如果此选项为`false`, 则图片在上传前不进行压缩。
       *
       * 默认为：
       *
       * ```javascript
       * {
       *     width: 1600,
       *     height: 1600,
       *
       *     // 图片质量，只有type为`image/jpeg`的时候才有效。
       *     quality: 90,
       *
       *     // 是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
       *     allowMagnify: false,
       *
       *     // 是否允许裁剪。
       *     crop: false,
       *
       *     // 是否保留头部meta信息。
       *     preserveHeaders: true,
       *
       *     // 如果发现压缩后文件大小比原来还大，则使用原来图片
       *     // 此属性可能会影响图片自动纠正功能
       *     noCompressIfLarger: false,
       *
       *     // 单位字节，如果图片大小小于此值，不会采用压缩。
       *     compressSize: 0
       * }
       * ```
       */
      compress: {
        width: 1600,
        height: 1600,
        quality: 90,
        allowMagnify: false,
        crop: false,
        preserveHeaders: true
      }
    });
    return Uploader.register({
      name: 'image',

      /**
       * 生成缩略图，此过程为异步，所以需要传入`callback`。
       * 通常情况在图片加入队里后调用此方法来生成预览图以增强交互效果。
       *
       * 当 width 或者 height 的值介于 0 - 1 时，被当成百分比使用。
       *
       * `callback`中可以接收到两个参数。
       * * 第一个为error，如果生成缩略图有错误，此error将为真。
       * * 第二个为ret, 缩略图的Data URL值。
       *
       * **注意**
       * Date URL在IE6/7中不支持，所以不用调用此方法了，直接显示一张暂不支持预览图片好了。
       * 也可以借助服务端，将 base64 数据传给服务端，生成一个临时文件供预览。
       *
       * @method makeThumb
       * @grammar makeThumb( file, callback ) => undefined
       * @grammar makeThumb( file, callback, width, height ) => undefined
       * @for Uploader
       * @example
       *
       * uploader.on( 'fileQueued', function( file ) {
       *     var $li = ...;
       *
       *     uploader.makeThumb( file, function( error, ret ) {
       *         if ( error ) {
       *             $li.text('预览错误');
       *         } else {
       *             $li.append('<img alt="" src="' + ret + '" />');
       *         }
       *     });
       *
       * });
       */
      makeThumb: function (file, cb, width, height) {
        var opts, image;
        file = this.request('get-file', file); // 只预览图片格式。

        if (!file.type.match(/^image/)) {
          cb(true);
          return;
        }

        opts = $.extend({}, this.options.thumb); // 如果传入的是object.

        if ($.isPlainObject(width)) {
          opts = $.extend(opts, width);
          width = null;
        }

        width = width || opts.width;
        height = height || opts.height;
        image = new Image(opts);
        image.once('load', function () {
          file._info = file._info || image.info();
          file._meta = file._meta || image.meta(); // 如果 width 的值介于 0 - 1
          // 说明设置的是百分比。

          if (width <= 1 && width > 0) {
            width = file._info.width * width;
          } // 同样的规则应用于 height


          if (height <= 1 && height > 0) {
            height = file._info.height * height;
          }

          image.resize(width, height);
        }); // 当 resize 完后

        image.once('complete', function () {
          cb(false, image.getAsDataUrl(opts.type));
          image.destroy();
        });
        image.once('error', function (reason) {
          cb(reason || true);
          image.destroy();
        });
        throttle(image, file.source.size, function () {
          file._info && image.info(file._info);
          file._meta && image.meta(file._meta);
          image.loadFromBlob(file.source);
        });
      },
      beforeSendFile: function (file) {
        var opts = this.options.compress || this.options.resize,
            compressSize = opts && opts.compressSize || 0,
            noCompressIfLarger = opts && opts.noCompressIfLarger || false,
            image,
            deferred;
        file = this.request('get-file', file); // 只压缩 jpeg 图片格式。
        // gif 可能会丢失针
        // bmp png 基本上尺寸都不大，且压缩比比较小。

        if (!opts || !~'image/jpeg,image/jpg'.indexOf(file.type) || file.size < compressSize || file._compressed) {
          return;
        }

        opts = $.extend({}, opts);
        deferred = Base.Deferred();
        image = new Image(opts);
        deferred.always(function () {
          image.destroy();
          image = null;
        });
        image.once('error', deferred.reject);
        image.once('load', function () {
          var width = opts.width,
              height = opts.height;
          file._info = file._info || image.info();
          file._meta = file._meta || image.meta(); // 如果 width 的值介于 0 - 1
          // 说明设置的是百分比。

          if (width <= 1 && width > 0) {
            width = file._info.width * width;
          } // 同样的规则应用于 height


          if (height <= 1 && height > 0) {
            height = file._info.height * height;
          }

          image.resize(width, height);
        });
        image.once('complete', function () {
          var blob, size; // 移动端 UC / qq 浏览器的无图模式下
          // ctx.getImageData 处理大图的时候会报 Exception
          // INDEX_SIZE_ERR: DOM Exception 1

          try {
            blob = image.getAsBlob(opts.type);
            size = file.size; // 如果压缩后，比原来还大则不用压缩后的。

            if (!noCompressIfLarger || blob.size < size) {
              // file.source.destroy && file.source.destroy();
              file.source = blob;
              file.size = blob.size;
              file.trigger('resize', blob.size, size);
            } // 标记，避免重复压缩。


            file._compressed = true;
            deferred.resolve();
          } catch (e) {
            // 出错了直接继续，让其上传原始图片
            deferred.resolve();
          }
        });
        file._info && image.info(file._info);
        file._meta && image.meta(file._meta);
        image.loadFromBlob(file.source);
        return deferred.promise();
      }
    });
  });
  /**
   * @fileOverview 文件属性封装
   */

  define('file', ['base', 'mediator'], function (Base, Mediator) {
    var $ = Base.$,
        idPrefix = 'WU_FILE_',
        idSuffix = 0,
        rExt = /\.([^.]+)$/,
        statusMap = {};

    function gid() {
      return idPrefix + idSuffix++;
    }
    /**
     * 文件类
     * @class File
     * @constructor 构造函数
     * @grammar new File( source ) => File
     * @param {Lib.File} source [lib.File](#Lib.File)实例, 此source对象是带有Runtime信息的。
     */


    function WUFile(source) {
      /**
       * 文件名，包括扩展名（后缀）
       * @property name
       * @type {string}
       */
      this.name = source.name || 'Untitled';
      /**
       * 文件体积（字节）
       * @property size
       * @type {uint}
       * @default 0
       */

      this.size = source.size || 0;
      /**
       * 文件MIMETYPE类型，与文件类型的对应关系请参考[http://t.cn/z8ZnFny](http://t.cn/z8ZnFny)
       * @property type
       * @type {string}
       * @default 'application/octet-stream'
       */

      this.type = source.type || 'application/octet-stream';
      /**
       * 文件最后修改日期
       * @property lastModifiedDate
       * @type {int}
       * @default 当前时间戳
       */

      this.lastModifiedDate = source.lastModifiedDate || new Date() * 1;
      /**
       * 文件ID，每个对象具有唯一ID，与文件名无关
       * @property id
       * @type {string}
       */

      this.id = gid();
      /**
       * 文件扩展名，通过文件名获取，例如test.png的扩展名为png
       * @property ext
       * @type {string}
       */

      this.ext = rExt.exec(this.name) ? RegExp.$1 : '';
      /**
       * 状态文字说明。在不同的status语境下有不同的用途。
       * @property statusText
       * @type {string}
       */

      this.statusText = ''; // 存储文件状态，防止通过属性直接修改

      statusMap[this.id] = WUFile.Status.INITED;
      this.source = source;
      this.loaded = 0;
      this.on('error', function (msg) {
        this.setStatus(WUFile.Status.ERROR, msg);
      });
    }

    $.extend(WUFile.prototype, {
      /**
       * 设置状态，状态变化时会触发`change`事件。
       * @method setStatus
       * @grammar setStatus( status[, statusText] );
       * @param {File.Status|String} status [文件状态值](#WebUploader:File:File.Status)
       * @param {String} [statusText=''] 状态说明，常在error时使用，用http, abort,server等来标记是由于什么原因导致文件错误。
       */
      setStatus: function (status, text) {
        var prevStatus = statusMap[this.id];
        typeof text !== 'undefined' && (this.statusText = text);

        if (status !== prevStatus) {
          statusMap[this.id] = status;
          /**
           * 文件状态变化
           * @event statuschange
           */

          this.trigger('statuschange', status, prevStatus);
        }
      },

      /**
       * 获取文件状态
       * @return {File.Status}
       * @example
               文件状态具体包括以下几种类型：
               {
                   // 初始化
                  INITED:     0,
                  // 已入队列
                  QUEUED:     1,
                  // 正在上传
                  PROGRESS:     2,
                  // 上传出错
                  ERROR:         3,
                  // 上传成功
                  COMPLETE:     4,
                  // 上传取消
                  CANCELLED:     5
              }
       */
      getStatus: function () {
        return statusMap[this.id];
      },

      /**
       * 获取文件原始信息。
       * @return {*}
       */
      getSource: function () {
        return this.source;
      },
      destroy: function () {
        this.off();
        delete statusMap[this.id];
      }
    });
    Mediator.installTo(WUFile.prototype);
    /**
     * 文件状态值，具体包括以下几种类型：
     * * `inited` 初始状态
     * * `queued` 已经进入队列, 等待上传
     * * `progress` 上传中
     * * `complete` 上传完成。
     * * `error` 上传出错，可重试
     * * `interrupt` 上传中断，可续传。
     * * `invalid` 文件不合格，不能重试上传。会自动从队列中移除。
     * * `cancelled` 文件被移除。
     * @property {Object} Status
     * @namespace File
     * @class File
     * @static
     */

    WUFile.Status = {
      INITED: 'inited',
      // 初始状态
      QUEUED: 'queued',
      // 已经进入队列, 等待上传
      PROGRESS: 'progress',
      // 上传中
      ERROR: 'error',
      // 上传出错，可重试
      COMPLETE: 'complete',
      // 上传完成。
      CANCELLED: 'cancelled',
      // 上传取消。
      INTERRUPT: 'interrupt',
      // 上传中断，可续传。
      INVALID: 'invalid' // 文件不合格，不能重试上传。

    };
    return WUFile;
  });
  /**
   * @fileOverview 文件队列
   */

  define('queue', ['base', 'mediator', 'file'], function (Base, Mediator, WUFile) {
    var $ = Base.$,
        STATUS = WUFile.Status;
    /**
     * 文件队列, 用来存储各个状态中的文件。
     * @class Queue
     * @extends Mediator
     */

    function Queue() {
      /**
       * 统计文件数。
       * * `numOfQueue` 队列中的文件数。
       * * `numOfSuccess` 上传成功的文件数
       * * `numOfCancel` 被取消的文件数
       * * `numOfProgress` 正在上传中的文件数
       * * `numOfUploadFailed` 上传错误的文件数。
       * * `numOfInvalid` 无效的文件数。
       * * `numofDeleted` 被移除的文件数。
       * @property {Object} stats
       */
      this.stats = {
        numOfQueue: 0,
        numOfSuccess: 0,
        numOfCancel: 0,
        numOfProgress: 0,
        numOfUploadFailed: 0,
        numOfInvalid: 0,
        numofDeleted: 0,
        numofInterrupt: 0
      }; // 上传队列，仅包括等待上传的文件

      this._queue = []; // 存储所有文件

      this._map = {};
    }

    $.extend(Queue.prototype, {
      /**
       * 将新文件加入对队列尾部
       *
       * @method append
       * @param  {File} file   文件对象
       */
      append: function (file) {
        this._queue.push(file);

        this._fileAdded(file);

        return this;
      },

      /**
       * 将新文件加入对队列头部
       *
       * @method prepend
       * @param  {File} file   文件对象
       */
      prepend: function (file) {
        this._queue.unshift(file);

        this._fileAdded(file);

        return this;
      },

      /**
       * 获取文件对象
       *
       * @method getFile
       * @param  {String} fileId   文件ID
       * @return {File}
       */
      getFile: function (fileId) {
        if (typeof fileId !== 'string') {
          return fileId;
        }

        return this._map[fileId];
      },

      /**
       * 从队列中取出一个指定状态的文件。
       * @grammar fetch( status ) => File
       * @method fetch
       * @param {String} status [文件状态值](#WebUploader:File:File.Status)
       * @return {File} [File](#WebUploader:File)
       */
      fetch: function (status) {
        var len = this._queue.length,
            i,
            file;
        status = status || STATUS.QUEUED;

        for (i = 0; i < len; i++) {
          file = this._queue[i];

          if (status === file.getStatus()) {
            return file;
          }
        }

        return null;
      },

      /**
       * 对队列进行排序，能够控制文件上传顺序。
       * @grammar sort( fn ) => undefined
       * @method sort
       * @param {Function} fn 排序方法
       */
      sort: function (fn) {
        if (typeof fn === 'function') {
          this._queue.sort(fn);
        }
      },

      /**
       * 获取指定类型的文件列表, 列表中每一个成员为[File](#WebUploader:File)对象。
       * @grammar getFiles( [status1[, status2 ...]] ) => Array
       * @method getFiles
       * @param {String} [status] [文件状态值](#WebUploader:File:File.Status)
       */
      getFiles: function () {
        var sts = [].slice.call(arguments, 0),
            ret = [],
            i = 0,
            len = this._queue.length,
            file;

        for (; i < len; i++) {
          file = this._queue[i];

          if (sts.length && !~$.inArray(file.getStatus(), sts)) {
            continue;
          }

          ret.push(file);
        }

        return ret;
      },

      /**
       * 在队列中删除文件。
       * @grammar removeFile( file ) => Array
       * @method removeFile
       * @param {File} 文件对象。
       */
      removeFile: function (file) {
        var me = this,
            existing = this._map[file.id];

        if (existing) {
          delete this._map[file.id];
          file.destroy();
          this.stats.numofDeleted++;
        }
      },
      _fileAdded: function (file) {
        var me = this,
            existing = this._map[file.id];

        if (!existing) {
          this._map[file.id] = file;
          file.on('statuschange', function (cur, pre) {
            me._onFileStatusChange(cur, pre);
          });
        }
      },
      _onFileStatusChange: function (curStatus, preStatus) {
        var stats = this.stats;

        switch (preStatus) {
          case STATUS.PROGRESS:
            stats.numOfProgress--;
            break;

          case STATUS.QUEUED:
            stats.numOfQueue--;
            break;

          case STATUS.ERROR:
            stats.numOfUploadFailed--;
            break;

          case STATUS.INVALID:
            stats.numOfInvalid--;
            break;

          case STATUS.INTERRUPT:
            stats.numofInterrupt--;
            break;
        }

        switch (curStatus) {
          case STATUS.QUEUED:
            stats.numOfQueue++;
            break;

          case STATUS.PROGRESS:
            stats.numOfProgress++;
            break;

          case STATUS.ERROR:
            stats.numOfUploadFailed++;
            break;

          case STATUS.COMPLETE:
            stats.numOfSuccess++;
            break;

          case STATUS.CANCELLED:
            stats.numOfCancel++;
            break;

          case STATUS.INVALID:
            stats.numOfInvalid++;
            break;

          case STATUS.INTERRUPT:
            stats.numofInterrupt++;
            break;
        }
      }
    });
    Mediator.installTo(Queue.prototype);
    return Queue;
  });
  /**
   * @fileOverview 队列
   */

  define('widgets/queue', ['base', 'uploader', 'queue', 'file', 'lib/file', 'runtime/client', 'widgets/widget'], function (Base, Uploader, Queue, WUFile, File, RuntimeClient) {
    var $ = Base.$,
        rExt = /\.\w+$/,
        Status = WUFile.Status;
    return Uploader.register({
      name: 'queue',
      init: function (opts) {
        var me = this,
            deferred,
            len,
            i,
            item,
            arr,
            accept,
            runtime;

        if ($.isPlainObject(opts.accept)) {
          opts.accept = [opts.accept];
        } // accept中的中生成匹配正则。


        if (opts.accept) {
          arr = [];

          for (i = 0, len = opts.accept.length; i < len; i++) {
            item = opts.accept[i].extensions;
            item && arr.push(item);
          }

          if (arr.length) {
            accept = '\\.' + arr.join(',').replace(/,/g, '$|\\.').replace(/\*/g, '.*') + '$';
          }

          me.accept = new RegExp(accept, 'i');
        }

        me.queue = new Queue();
        me.stats = me.queue.stats; // 如果当前不是html5运行时，那就算了。
        // 不执行后续操作

        if (this.request('predict-runtime-type') !== 'html5') {
          return;
        } // 创建一个 html5 运行时的 placeholder
        // 以至于外部添加原生 File 对象的时候能正确包裹一下供 webuploader 使用。


        deferred = Base.Deferred();
        this.placeholder = runtime = new RuntimeClient('Placeholder');
        runtime.connectRuntime({
          runtimeOrder: 'html5'
        }, function () {
          me._ruid = runtime.getRuid();
          deferred.resolve();
        });
        return deferred.promise();
      },
      // 为了支持外部直接添加一个原生File对象。
      _wrapFile: function (file) {
        if (!(file instanceof WUFile)) {
          if (!(file instanceof File)) {
            if (!this._ruid) {
              throw new Error('Can\'t add external files.');
            }

            file = new File(this._ruid, file);
          }

          file = new WUFile(file);
        }

        return file;
      },
      // 判断文件是否可以被加入队列
      acceptFile: function (file) {
        var invalid = !file || !file.size || this.accept && // 如果名字中有后缀，才做后缀白名单处理。
        rExt.exec(file.name) && !this.accept.test(file.name);
        return !invalid;
      },

      /**
       * @event beforeFileQueued
       * @param {File} file File对象
       * @description 当文件被加入队列之前触发，此事件的handler返回值为`false`，则此文件不会被添加进入队列。
       * @for  Uploader
       */

      /**
       * @event fileQueued
       * @param {File} file File对象
       * @description 当文件被加入队列以后触发。
       * @for  Uploader
       */
      _addFile: function (file) {
        var me = this;
        file = me._wrapFile(file); // 不过类型判断允许不允许，先派送 `beforeFileQueued`

        if (!me.owner.trigger('beforeFileQueued', file)) {
          return;
        } // 类型不匹配，则派送错误事件，并返回。


        if (!me.acceptFile(file)) {
          me.owner.trigger('error', 'Q_TYPE_DENIED', file);
          return;
        }

        me.queue.append(file);
        me.owner.trigger('fileQueued', file);
        return file;
      },
      getFile: function (fileId) {
        return this.queue.getFile(fileId);
      },

      /**
       * @event filesQueued
       * @param {File} files 数组，内容为原始File(lib/File）对象。
       * @description 当一批文件添加进队列以后触发。
       * @for  Uploader
       */

      /**
       * @property {Boolean} [auto=false]
       * @namespace options
       * @for Uploader
       * @description 设置为 true 后，不需要手动调用上传，有文件选择即开始上传。
       *
       */

      /**
       * @method addFiles
       * @grammar addFiles( file ) => undefined
       * @grammar addFiles( [file1, file2 ...] ) => undefined
       * @param {Array of File or File} [files] Files 对象 数组
       * @description 添加文件到队列
       * @for  Uploader
       */
      addFile: function (files) {
        var me = this;

        if (!files.length) {
          files = [files];
        }

        files = $.map(files, function (file) {
          return me._addFile(file);
        });

        if (files.length) {
          me.owner.trigger('filesQueued', files);

          if (me.options.auto) {
            setTimeout(function () {
              me.request('start-upload');
            }, 20);
          }
        }
      },
      getStats: function () {
        return this.stats;
      },

      /**
       * @event fileDequeued
       * @param {File} file File对象
       * @description 当文件被移除队列后触发。
       * @for  Uploader
       */

      /**
      * @method removeFile
      * @grammar removeFile( file ) => undefined
      * @grammar removeFile( id ) => undefined
      * @grammar removeFile( file, true ) => undefined
      * @grammar removeFile( id, true ) => undefined
      * @param {File|id} file File对象或这File对象的id
      * @description 移除某一文件, 默认只会标记文件状态为已取消，如果第二个参数为 `true` 则会从 queue 中移除。
      * @for  Uploader
      * @example
      *
      * $li.on('click', '.remove-this', function() {
      *     uploader.removeFile( file );
      * })
      */
      removeFile: function (file, remove) {
        var me = this;
        file = file.id ? file : me.queue.getFile(file);
        this.request('cancel-file', file);

        if (remove) {
          this.queue.removeFile(file);
        }
      },

      /**
       * @method getFiles
       * @grammar getFiles() => Array
       * @grammar getFiles( status1, status2, status... ) => Array
       * @description 返回指定状态的文件集合，不传参数将返回所有状态的文件。
       * @for  Uploader
       * @example
       * console.log( uploader.getFiles() );    // => all files
       * console.log( uploader.getFiles('error') )    // => all error files.
       */
      getFiles: function () {
        return this.queue.getFiles.apply(this.queue, arguments);
      },
      fetchFile: function () {
        return this.queue.fetch.apply(this.queue, arguments);
      },

      /**
       * @method retry
       * @grammar retry() => undefined
       * @grammar retry( file ) => undefined
       * @description 重试上传，重试指定文件，或者从出错的文件开始重新上传。
       * @for  Uploader
       * @example
       * function retry() {
       *     uploader.retry();
       * }
       */
      retry: function (file, noForceStart) {
        var me = this,
            files,
            i,
            len;

        if (file) {
          file = file.id ? file : me.queue.getFile(file);
          file.setStatus(Status.QUEUED);
          noForceStart || me.request('start-upload');
          return;
        }

        files = me.queue.getFiles(Status.ERROR);
        i = 0;
        len = files.length;

        for (; i < len; i++) {
          file = files[i];
          file.setStatus(Status.QUEUED);
        }

        me.request('start-upload');
      },

      /**
       * @method sort
       * @grammar sort( fn ) => undefined
       * @description 排序队列中的文件，在上传之前调整可以控制上传顺序。
       * @for  Uploader
       */
      sortFiles: function () {
        return this.queue.sort.apply(this.queue, arguments);
      },

      /**
       * @event reset
       * @description 当 uploader 被重置的时候触发。
       * @for  Uploader
       */

      /**
       * @method reset
       * @grammar reset() => undefined
       * @description 重置uploader。目前只重置了队列。
       * @for  Uploader
       * @example
       * uploader.reset();
       */
      reset: function () {
        this.owner.trigger('reset');
        this.queue = new Queue();
        this.stats = this.queue.stats;
      },
      destroy: function () {
        this.reset();
        this.placeholder && this.placeholder.destroy();
      }
    });
  });
  /**
   * @fileOverview 添加获取Runtime相关信息的方法。
   */

  define('widgets/runtime', ['uploader', 'runtime/runtime', 'widgets/widget'], function (Uploader, Runtime) {
    Uploader.support = function () {
      return Runtime.hasRuntime.apply(Runtime, arguments);
    };
    /**
     * @property {Object} [runtimeOrder=html5,flash]
     * @namespace options
     * @for Uploader
     * @description 指定运行时启动顺序。默认会想尝试 html5 是否支持，如果支持则使用 html5, 否则则使用 flash.
     *
     * 可以将此值设置成 `flash`，来强制使用 flash 运行时。
     */


    return Uploader.register({
      name: 'runtime',
      init: function () {
        if (!this.predictRuntimeType()) {
          throw Error('Runtime Error');
        }
      },

      /**
       * 预测Uploader将采用哪个`Runtime`
       * @grammar predictRuntimeType() => String
       * @method predictRuntimeType
       * @for  Uploader
       */
      predictRuntimeType: function () {
        var orders = this.options.runtimeOrder || Runtime.orders,
            type = this.type,
            i,
            len;

        if (!type) {
          orders = orders.split(/\s*,\s*/g);

          for (i = 0, len = orders.length; i < len; i++) {
            if (Runtime.hasRuntime(orders[i])) {
              this.type = type = orders[i];
              break;
            }
          }
        }

        return type;
      }
    });
  });
  /**
   * @fileOverview Transport
   */

  define('lib/transport', ['base', 'runtime/client', 'mediator'], function (Base, RuntimeClient, Mediator) {
    var $ = Base.$;

    function Transport(opts) {
      var me = this;
      opts = me.options = $.extend(true, {}, Transport.options, opts || {});
      RuntimeClient.call(this, 'Transport');
      this._blob = null;
      this._formData = opts.formData || {};
      this._headers = opts.headers || {};
      this.on('progress', this._timeout);
      this.on('load error', function () {
        me.trigger('progress', 1);
        clearTimeout(me._timer);
      });
    }

    Transport.options = {
      server: '',
      method: 'POST',
      // 跨域时，是否允许携带cookie, 只有html5 runtime才有效
      withCredentials: false,
      fileVal: 'file',
      timeout: 2 * 60 * 1000,
      // 2分钟
      formData: {},
      headers: {},
      sendAsBinary: false
    };
    $.extend(Transport.prototype, {
      // 添加Blob, 只能添加一次，最后一次有效。
      appendBlob: function (key, blob, filename) {
        var me = this,
            opts = me.options;

        if (me.getRuid()) {
          me.disconnectRuntime();
        } // 连接到blob归属的同一个runtime.


        me.connectRuntime(blob.ruid, function () {
          me.exec('init');
        });
        me._blob = blob;
        opts.fileVal = key || opts.fileVal;
        opts.filename = filename || opts.filename;
      },
      // 添加其他字段
      append: function (key, value) {
        if (typeof key === 'object') {
          $.extend(this._formData, key);
        } else {
          this._formData[key] = value;
        }
      },
      setRequestHeader: function (key, value) {
        if (typeof key === 'object') {
          $.extend(this._headers, key);
        } else {
          this._headers[key] = value;
        }
      },
      send: function (method) {
        this.exec('send', method);

        this._timeout();
      },
      abort: function () {
        clearTimeout(this._timer);
        return this.exec('abort');
      },
      destroy: function () {
        this.trigger('destroy');
        this.off();
        this.exec('destroy');
        this.disconnectRuntime();
      },
      getResponse: function () {
        return this.exec('getResponse');
      },
      getResponseAsJson: function () {
        return this.exec('getResponseAsJson');
      },
      getStatus: function () {
        return this.exec('getStatus');
      },
      _timeout: function () {
        var me = this,
            duration = me.options.timeout;

        if (!duration) {
          return;
        }

        clearTimeout(me._timer);
        me._timer = setTimeout(function () {
          me.abort();
          me.trigger('error', 'timeout');
        }, duration);
      }
    }); // 让Transport具备事件功能。

    Mediator.installTo(Transport.prototype);
    return Transport;
  });
  /**
   * @fileOverview 负责文件上传相关。
   */

  define('widgets/upload', ['base', 'uploader', 'file', 'lib/transport', 'widgets/widget'], function (Base, Uploader, WUFile, Transport) {
    var $ = Base.$,
        isPromise = Base.isPromise,
        Status = WUFile.Status; // 添加默认配置项

    $.extend(Uploader.options, {
      /**
       * @property {Boolean} [prepareNextFile=false]
       * @namespace options
       * @for Uploader
       * @description 是否允许在文件传输时提前把下一个文件准备好。
       * 对于一个文件的准备工作比较耗时，比如图片压缩，md5序列化。
       * 如果能提前在当前文件传输期处理，可以节省总体耗时。
       */
      prepareNextFile: false,

      /**
       * @property {Boolean} [chunked=false]
       * @namespace options
       * @for Uploader
       * @description 是否要分片处理大文件上传。
       */
      chunked: false,

      /**
       * @property {Boolean} [chunkSize=5242880]
       * @namespace options
       * @for Uploader
       * @description 如果要分片，分多大一片？ 默认大小为5M.
       */
      chunkSize: 5 * 1024 * 1024,

      /**
       * @property {Boolean} [chunkRetry=2]
       * @namespace options
       * @for Uploader
       * @description 如果某个分片由于网络问题出错，允许自动重传多少次？
       */
      chunkRetry: 2,

      /**
       * @property {Boolean} [threads=3]
       * @namespace options
       * @for Uploader
       * @description 上传并发数。允许同时最大上传进程数。
       */
      threads: 3,

      /**
       * @property {Object} [formData={}]
       * @namespace options
       * @for Uploader
       * @description 文件上传请求的参数表，每次发送都会发送此对象中的参数。
       */
      formData: {}
      /**
       * @property {Object} [fileVal='file']
       * @namespace options
       * @for Uploader
       * @description 设置文件上传域的name。
       */

      /**
       * @property {Object} [sendAsBinary=false]
       * @namespace options
       * @for Uploader
       * @description 是否已二进制的流的方式发送文件，这样整个上传内容`php://input`都为文件内容，
       * 其他参数在$_GET数组中。
       */

    }); // 负责将文件切片。

    function CuteFile(file, chunkSize) {
      var pending = [],
          blob = file.source,
          total = blob.size,
          chunks = chunkSize ? Math.ceil(total / chunkSize) : 1,
          start = 0,
          index = 0,
          len,
          api;
      api = {
        file: file,
        has: function () {
          return !!pending.length;
        },
        shift: function () {
          return pending.shift();
        },
        unshift: function (block) {
          pending.unshift(block);
        }
      };

      while (index < chunks) {
        len = Math.min(chunkSize, total - start);
        pending.push({
          file: file,
          start: start,
          end: chunkSize ? start + len : total,
          total: total,
          chunks: chunks,
          chunk: index++,
          cuted: api
        });
        start += len;
      }

      file.blocks = pending.concat();
      file.remaning = pending.length;
      return api;
    }

    Uploader.register({
      name: 'upload',
      init: function () {
        var owner = this.owner,
            me = this;
        this.runing = false;
        this.progress = false;
        owner.on('startUpload', function () {
          me.progress = true;
        }).on('uploadFinished', function () {
          me.progress = false;
        }); // 记录当前正在传的数据，跟threads相关

        this.pool = []; // 缓存分好片的文件。

        this.stack = []; // 缓存即将上传的文件。

        this.pending = []; // 跟踪还有多少分片在上传中但是没有完成上传。

        this.remaning = 0;
        this.__tick = Base.bindFn(this._tick, this); // 销毁上传相关的属性。

        owner.on('uploadComplete', function (file) {
          // 把其他块取消了。
          file.blocks && $.each(file.blocks, function (_, v) {
            v.transport && (v.transport.abort(), v.transport.destroy());
            delete v.transport;
          });
          delete file.blocks;
          delete file.remaning;
        });
      },
      reset: function () {
        this.request('stop-upload', true);
        this.runing = false;
        this.pool = [];
        this.stack = [];
        this.pending = [];
        this.remaning = 0;
        this._trigged = false;
        this._promise = null;
      },

      /**
       * @event startUpload
       * @description 当开始上传流程时触发。
       * @for  Uploader
       */

      /**
       * 开始上传。此方法可以从初始状态调用开始上传流程，也可以从暂停状态调用，继续上传流程。
       *
       * 可以指定开始某一个文件。
       * @grammar upload() => undefined
       * @grammar upload( file | fileId) => undefined
       * @method upload
       * @for  Uploader
       */
      startUpload: function (file) {
        var me = this; // 移出invalid的文件

        $.each(me.request('get-files', Status.INVALID), function () {
          me.request('remove-file', this);
        }); // 如果指定了开始某个文件，则只开始指定的文件。

        if (file) {
          file = file.id ? file : me.request('get-file', file);

          if (file.getStatus() === Status.INTERRUPT) {
            file.setStatus(Status.QUEUED);
            $.each(me.pool, function (_, v) {
              // 之前暂停过。
              if (v.file !== file) {
                return;
              }

              v.transport && v.transport.send();
              file.setStatus(Status.PROGRESS);
            });
          } else if (file.getStatus() !== Status.PROGRESS) {
            file.setStatus(Status.QUEUED);
          }
        } else {
          $.each(me.request('get-files', [Status.INITED]), function () {
            this.setStatus(Status.QUEUED);
          });
        }

        if (me.runing) {
          return Base.nextTick(me.__tick);
        }

        me.runing = true;
        var files = []; // 如果有暂停的，则续传

        file || $.each(me.pool, function (_, v) {
          var file = v.file;

          if (file.getStatus() === Status.INTERRUPT) {
            me._trigged = false;
            files.push(file);
            v.transport && v.transport.send();
          }
        });
        $.each(files, function () {
          this.setStatus(Status.PROGRESS);
        });
        file || $.each(me.request('get-files', Status.INTERRUPT), function () {
          this.setStatus(Status.PROGRESS);
        });
        me._trigged = false;
        Base.nextTick(me.__tick);
        me.owner.trigger('startUpload');
      },

      /**
       * @event stopUpload
       * @description 当开始上传流程暂停时触发。
       * @for  Uploader
       */

      /**
       * 暂停上传。第一个参数为是否中断上传当前正在上传的文件。
       *
       * 如果第一个参数是文件，则只暂停指定文件。
       * @grammar stop() => undefined
       * @grammar stop( true ) => undefined
       * @grammar stop( file ) => undefined
       * @method stop
       * @for  Uploader
       */
      stopUpload: function (file, interrupt) {
        var me = this,
            block;

        if (file === true) {
          interrupt = file;
          file = null;
        }

        if (me.runing === false) {
          return;
        } // 如果只是暂停某个文件。


        if (file) {
          file = file.id ? file : me.request('get-file', file);

          if (file.getStatus() !== Status.PROGRESS && file.getStatus() !== Status.QUEUED) {
            return;
          }

          file.setStatus(Status.INTERRUPT);
          $.each(me.pool, function (_, v) {
            // 只 abort 指定的文件。
            if (v.file === file) {
              block = v;
              return false;
            }
          });
          block.transport && block.transport.abort();

          if (interrupt) {
            me._putback(block);

            me._popBlock(block);
          }

          return Base.nextTick(me.__tick);
        }

        me.runing = false; // 正在准备中的文件。

        if (this._promise && this._promise.file) {
          this._promise.file.setStatus(Status.INTERRUPT);
        }

        interrupt && $.each(me.pool, function (_, v) {
          v.transport && v.transport.abort();
          v.file.setStatus(Status.INTERRUPT);
        });
        me.owner.trigger('stopUpload');
      },

      /**
       * @method cancelFile
       * @grammar cancelFile( file ) => undefined
       * @grammar cancelFile( id ) => undefined
       * @param {File|id} file File对象或这File对象的id
       * @description 标记文件状态为已取消, 同时将中断文件传输。
       * @for  Uploader
       * @example
       *
       * $li.on('click', '.remove-this', function() {
       *     uploader.cancelFile( file );
       * })
       */
      cancelFile: function (file) {
        file = file.id ? file : this.request('get-file', file); // 如果正在上传。

        file.blocks && $.each(file.blocks, function (_, v) {
          var _tr = v.transport;

          if (_tr) {
            _tr.abort();

            _tr.destroy();

            delete v.transport;
          }
        });
        file.setStatus(Status.CANCELLED);
        this.owner.trigger('fileDequeued', file);
      },

      /**
       * 判断`Uplaode`r是否正在上传中。
       * @grammar isInProgress() => Boolean
       * @method isInProgress
       * @for  Uploader
       */
      isInProgress: function () {
        return !!this.progress;
      },
      _getStats: function () {
        return this.request('get-stats');
      },

      /**
       * 掉过一个文件上传，直接标记指定文件为已上传状态。
       * @grammar skipFile( file ) => undefined
       * @method skipFile
       * @for  Uploader
       */
      skipFile: function (file, status) {
        file = file.id ? file : this.request('get-file', file);
        file.setStatus(status || Status.COMPLETE);
        file.skipped = true; // 如果正在上传。

        file.blocks && $.each(file.blocks, function (_, v) {
          var _tr = v.transport;

          if (_tr) {
            _tr.abort();

            _tr.destroy();

            delete v.transport;
          }
        });
        this.owner.trigger('uploadSkip', file);
      },

      /**
       * @event uploadFinished
       * @description 当所有文件上传结束时触发。
       * @for  Uploader
       */
      _tick: function () {
        var me = this,
            opts = me.options,
            fn,
            val; // 上一个promise还没有结束，则等待完成后再执行。

        if (me._promise) {
          return me._promise.always(me.__tick);
        } // 还有位置，且还有文件要处理的话。


        if (me.pool.length < opts.threads && (val = me._nextBlock())) {
          me._trigged = false;

          fn = function (val) {
            me._promise = null; // 有可能是reject过来的，所以要检测val的类型。

            val && val.file && me._startSend(val);
            Base.nextTick(me.__tick);
          };

          me._promise = isPromise(val) ? val.always(fn) : fn(val); // 没有要上传的了，且没有正在传输的了。
        } else if (!me.remaning && !me._getStats().numOfQueue && !me._getStats().numofInterrupt) {
          me.runing = false;
          me._trigged || Base.nextTick(function () {
            me.owner.trigger('uploadFinished');
          });
          me._trigged = true;
        }
      },
      _putback: function (block) {
        var idx;
        block.cuted.unshift(block);
        idx = this.stack.indexOf(block.cuted);

        if (!~idx) {
          this.stack.unshift(block.cuted);
        }
      },
      _getStack: function () {
        var i = 0,
            act;

        while (act = this.stack[i++]) {
          if (act.has() && act.file.getStatus() === Status.PROGRESS) {
            return act;
          } else if (!act.has() || act.file.getStatus() !== Status.PROGRESS && act.file.getStatus() !== Status.INTERRUPT) {
            // 把已经处理完了的，或者，状态为非 progress（上传中）、
            // interupt（暂停中） 的移除。
            this.stack.splice(--i, 1);
          }
        }

        return null;
      },
      _nextBlock: function () {
        var me = this,
            opts = me.options,
            act,
            next,
            done,
            preparing; // 如果当前文件还有没有需要传输的，则直接返回剩下的。

        if (act = this._getStack()) {
          // 是否提前准备下一个文件
          if (opts.prepareNextFile && !me.pending.length) {
            me._prepareNextFile();
          }

          return act.shift(); // 否则，如果正在运行，则准备下一个文件，并等待完成后返回下个分片。
        } else if (me.runing) {
          // 如果缓存中有，则直接在缓存中取，没有则去queue中取。
          if (!me.pending.length && me._getStats().numOfQueue) {
            me._prepareNextFile();
          }

          next = me.pending.shift();

          done = function (file) {
            if (!file) {
              return null;
            }

            act = CuteFile(file, opts.chunked ? opts.chunkSize : 0);
            me.stack.push(act);
            return act.shift();
          }; // 文件可能还在prepare中，也有可能已经完全准备好了。


          if (isPromise(next)) {
            preparing = next.file;
            next = next[next.pipe ? 'pipe' : 'then'](done);
            next.file = preparing;
            return next;
          }

          return done(next);
        }
      },

      /**
       * @event uploadStart
       * @param {File} file File对象
       * @description 某个文件开始上传前触发，一个文件只会触发一次。
       * @for  Uploader
       */
      _prepareNextFile: function () {
        var me = this,
            file = me.request('fetch-file'),
            pending = me.pending,
            promise;

        if (file) {
          promise = me.request('before-send-file', file, function () {
            // 有可能文件被skip掉了。文件被skip掉后，状态坑定不是Queued.
            if (file.getStatus() === Status.PROGRESS || file.getStatus() === Status.INTERRUPT) {
              return file;
            }

            return me._finishFile(file);
          });
          me.owner.trigger('uploadStart', file);
          file.setStatus(Status.PROGRESS);
          promise.file = file; // 如果还在pending中，则替换成文件本身。

          promise.done(function () {
            var idx = $.inArray(promise, pending);
            ~idx && pending.splice(idx, 1, file);
          }); // befeore-send-file的钩子就有错误发生。

          promise.fail(function (reason) {
            file.setStatus(Status.ERROR, reason);
            me.owner.trigger('uploadError', file, reason);
            me.owner.trigger('uploadComplete', file);
          });
          pending.push(promise);
        }
      },
      // 让出位置了，可以让其他分片开始上传
      _popBlock: function (block) {
        var idx = $.inArray(block, this.pool);
        this.pool.splice(idx, 1);
        block.file.remaning--;
        this.remaning--;
      },
      // 开始上传，可以被掉过。如果promise被reject了，则表示跳过此分片。
      _startSend: function (block) {
        var me = this,
            file = block.file,
            promise; // 有可能在 before-send-file 的 promise 期间改变了文件状态。
        // 如：暂停，取消
        // 我们不能中断 promise, 但是可以在 promise 完后，不做上传操作。

        if (file.getStatus() !== Status.PROGRESS) {
          // 如果是中断，则还需要放回去。
          if (file.getStatus() === Status.INTERRUPT) {
            me._putback(block);
          }

          return;
        }

        me.pool.push(block);
        me.remaning++; // 如果没有分片，则直接使用原始的。
        // 不会丢失content-type信息。

        block.blob = block.chunks === 1 ? file.source : file.source.slice(block.start, block.end); // hook, 每个分片发送之前可能要做些异步的事情。

        promise = me.request('before-send', block, function () {
          // 有可能文件已经上传出错了，所以不需要再传输了。
          if (file.getStatus() === Status.PROGRESS) {
            me._doSend(block);
          } else {
            me._popBlock(block);

            Base.nextTick(me.__tick);
          }
        }); // 如果为fail了，则跳过此分片。

        promise.fail(function () {
          if (file.remaning === 1) {
            me._finishFile(file).always(function () {
              block.percentage = 1;

              me._popBlock(block);

              me.owner.trigger('uploadComplete', file);
              Base.nextTick(me.__tick);
            });
          } else {
            block.percentage = 1;
            me.updateFileProgress(file);

            me._popBlock(block);

            Base.nextTick(me.__tick);
          }
        });
      },

      /**
       * @event uploadBeforeSend
       * @param {Object} object
       * @param {Object} data 默认的上传参数，可以扩展此对象来控制上传参数。
       * @param {Object} headers 可以扩展此对象来控制上传头部。
       * @description 当某个文件的分块在发送前触发，主要用来询问是否要添加附带参数，大文件在开起分片上传的前提下此事件可能会触发多次。
       * @for  Uploader
       */

      /**
       * @event uploadAccept
       * @param {Object} object
       * @param {Object} ret 服务端的返回数据，json格式，如果服务端不是json格式，从ret._raw中取数据，自行解析。
       * @description 当某个文件上传到服务端响应后，会派送此事件来询问服务端响应是否有效。如果此事件handler返回值为`false`, 则此文件将派送`server`类型的`uploadError`事件。
       * @for  Uploader
       */

      /**
       * @event uploadProgress
       * @param {File} file File对象
       * @param {Number} percentage 上传进度
       * @description 上传过程中触发，携带上传进度。
       * @for  Uploader
       */

      /**
       * @event uploadError
       * @param {File} file File对象
       * @param {String} reason 出错的code
       * @description 当文件上传出错时触发。
       * @for  Uploader
       */

      /**
       * @event uploadSuccess
       * @param {File} file File对象
       * @param {Object} response 服务端返回的数据
       * @description 当文件上传成功时触发。
       * @for  Uploader
       */

      /**
       * @event uploadComplete
       * @param {File} [file] File对象
       * @description 不管成功或者失败，文件上传完成时触发。
       * @for  Uploader
       */
      // 做上传操作。
      _doSend: function (block) {
        var me = this,
            owner = me.owner,
            opts = me.options,
            file = block.file,
            tr = new Transport(opts),
            data = $.extend({}, opts.formData),
            headers = $.extend({}, opts.headers),
            requestAccept,
            ret;
        block.transport = tr;
        tr.on('destroy', function () {
          delete block.transport;

          me._popBlock(block);

          Base.nextTick(me.__tick);
        }); // 广播上传进度。以文件为单位。

        tr.on('progress', function (percentage) {
          block.percentage = percentage;
          me.updateFileProgress(file);
        }); // 用来询问，是否返回的结果是有错误的。

        requestAccept = function (reject) {
          var fn;
          ret = tr.getResponseAsJson() || {};
          ret._raw = tr.getResponse();

          fn = function (value) {
            reject = value;
          }; // 服务端响应了，不代表成功了，询问是否响应正确。


          if (!owner.trigger('uploadAccept', block, ret, fn)) {
            reject = reject || 'server';
          }

          return reject;
        }; // 尝试重试，然后广播文件上传出错。


        tr.on('error', function (type, flag) {
          block.retried = block.retried || 0; // 自动重试

          if (block.chunks > 1 && ~'http,abort'.indexOf(type) && block.retried < opts.chunkRetry) {
            block.retried++;
            tr.send();
          } else {
            // http status 500 ~ 600
            if (!flag && type === 'server') {
              type = requestAccept(type);
            }

            file.setStatus(Status.ERROR, type);
            owner.trigger('uploadError', file, type);
            owner.trigger('uploadComplete', file);
          }
        }); // 上传成功

        tr.on('load', function () {
          var reason; // 如果非预期，转向上传出错。

          if (reason = requestAccept()) {
            tr.trigger('error', reason, true);
            return;
          } // 全部上传完成。


          if (file.remaning === 1) {
            me._finishFile(file, ret);
          } else {
            tr.destroy();
          }
        }); // 配置默认的上传字段。

        data = $.extend(data, {
          id: file.id,
          name: file.name,
          type: file.type,
          lastModifiedDate: file.lastModifiedDate,
          size: file.size
        });
        block.chunks > 1 && $.extend(data, {
          chunks: block.chunks,
          chunk: block.chunk
        }); // 在发送之间可以添加字段什么的。。。
        // 如果默认的字段不够使用，可以通过监听此事件来扩展

        owner.trigger('uploadBeforeSend', block, data, headers); // 开始发送。

        tr.appendBlob(opts.fileVal, block.blob, file.name);
        tr.append(data);
        tr.setRequestHeader(headers);
        tr.send();
      },
      // 完成上传。
      _finishFile: function (file, ret, hds) {
        var owner = this.owner;
        return owner.request('after-send-file', arguments, function () {
          file.setStatus(Status.COMPLETE);
          owner.trigger('uploadSuccess', file, ret, hds);
        }).fail(function (reason) {
          // 如果外部已经标记为invalid什么的，不再改状态。
          if (file.getStatus() === Status.PROGRESS) {
            file.setStatus(Status.ERROR, reason);
          }

          owner.trigger('uploadError', file, reason);
        }).always(function () {
          owner.trigger('uploadComplete', file);
        });
      },
      updateFileProgress: function (file) {
        var totalPercent = 0,
            uploaded = 0;

        if (!file.blocks) {
          return;
        }

        $.each(file.blocks, function (_, v) {
          uploaded += (v.percentage || 0) * (v.end - v.start);
        });
        totalPercent = uploaded / file.size;
        this.owner.trigger('uploadProgress', file, totalPercent || 0);
      }
    });
  });
  /**
   * @fileOverview 各种验证，包括文件总大小是否超出、单文件是否超出和文件是否重复。
   */

  define('widgets/validator', ['base', 'uploader', 'file', 'widgets/widget'], function (Base, Uploader, WUFile) {
    var $ = Base.$,
        validators = {},
        api;
    /**
     * @event error
     * @param {String} type 错误类型。
     * @description 当validate不通过时，会以派送错误事件的形式通知调用者。通过`upload.on('error', handler)`可以捕获到此类错误，目前有以下错误会在特定的情况下派送错来。
     *
     * * `Q_EXCEED_NUM_LIMIT` 在设置了`fileNumLimit`且尝试给`uploader`添加的文件数量超出这个值时派送。
     * * `Q_EXCEED_SIZE_LIMIT` 在设置了`Q_EXCEED_SIZE_LIMIT`且尝试给`uploader`添加的文件总大小超出这个值时派送。
     * * `Q_TYPE_DENIED` 当文件类型不满足时触发。。
     * @for  Uploader
     */
    // 暴露给外面的api

    api = {
      // 添加验证器
      addValidator: function (type, cb) {
        validators[type] = cb;
      },
      // 移除验证器
      removeValidator: function (type) {
        delete validators[type];
      }
    }; // 在Uploader初始化的时候启动Validators的初始化

    Uploader.register({
      name: 'validator',
      init: function () {
        var me = this;
        Base.nextTick(function () {
          $.each(validators, function () {
            this.call(me.owner);
          });
        });
      }
    });
    /**
     * @property {int} [fileNumLimit=undefined]
     * @namespace options
     * @for Uploader
     * @description 验证文件总数量, 超出则不允许加入队列。
     */

    api.addValidator('fileNumLimit', function () {
      var uploader = this,
          opts = uploader.options,
          count = 0,
          max = parseInt(opts.fileNumLimit, 10),
          flag = true;

      if (!max) {
        return;
      }

      uploader.on('beforeFileQueued', function (file) {
        if (count >= max && flag) {
          flag = false;
          this.trigger('error', 'Q_EXCEED_NUM_LIMIT', max, file);
          setTimeout(function () {
            flag = true;
          }, 1);
        }

        return count >= max ? false : true;
      });
      uploader.on('fileQueued', function () {
        count++;
      });
      uploader.on('fileDequeued', function () {
        count--;
      });
      uploader.on('reset', function () {
        count = 0;
      });
    });
    /**
     * @property {int} [fileSizeLimit=undefined]
     * @namespace options
     * @for Uploader
     * @description 验证文件总大小是否超出限制, 超出则不允许加入队列。
     */

    api.addValidator('fileSizeLimit', function () {
      var uploader = this,
          opts = uploader.options,
          count = 0,
          max = parseInt(opts.fileSizeLimit, 10),
          flag = true;

      if (!max) {
        return;
      }

      uploader.on('beforeFileQueued', function (file) {
        var invalid = count + file.size > max;

        if (invalid && flag) {
          flag = false;
          this.trigger('error', 'Q_EXCEED_SIZE_LIMIT', max, file);
          setTimeout(function () {
            flag = true;
          }, 1);
        }

        return invalid ? false : true;
      });
      uploader.on('fileQueued', function (file) {
        count += file.size;
      });
      uploader.on('fileDequeued', function (file) {
        count -= file.size;
      });
      uploader.on('reset', function () {
        count = 0;
      });
    });
    /**
     * @property {int} [fileSingleSizeLimit=undefined]
     * @namespace options
     * @for Uploader
     * @description 验证单个文件大小是否超出限制, 超出则不允许加入队列。
     */

    api.addValidator('fileSingleSizeLimit', function () {
      var uploader = this,
          opts = uploader.options,
          max = opts.fileSingleSizeLimit;

      if (!max) {
        return;
      }

      uploader.on('beforeFileQueued', function (file) {
        if (file.size > max) {
          file.setStatus(WUFile.Status.INVALID, 'exceed_size');
          this.trigger('error', 'F_EXCEED_SIZE', max, file);
          return false;
        }
      });
    });
    /**
     * @property {Boolean} [duplicate=undefined]
     * @namespace options
     * @for Uploader
     * @description 去重， 根据文件名字、文件大小和最后修改时间来生成hash Key.
     */

    api.addValidator('duplicate', function () {
      var uploader = this,
          opts = uploader.options,
          mapping = {};

      if (opts.duplicate) {
        return;
      }

      function hashString(str) {
        var hash = 0,
            i = 0,
            len = str.length,
            _char;

        for (; i < len; i++) {
          _char = str.charCodeAt(i);
          hash = _char + (hash << 6) + (hash << 16) - hash;
        }

        return hash;
      }

      uploader.on('beforeFileQueued', function (file) {
        var hash = file.__hash || (file.__hash = hashString(file.name + file.size + file.lastModifiedDate)); // 已经重复了

        if (mapping[hash]) {
          this.trigger('error', 'F_DUPLICATE', file);
          return false;
        }
      });
      uploader.on('fileQueued', function (file) {
        var hash = file.__hash;
        hash && (mapping[hash] = true);
      });
      uploader.on('fileDequeued', function (file) {
        var hash = file.__hash;
        hash && delete mapping[hash];
      });
      uploader.on('reset', function () {
        mapping = {};
      });
    });
    return api;
  });
  /**
   * @fileOverview Md5
   */

  define('lib/md5', ['runtime/client', 'mediator'], function (RuntimeClient, Mediator) {
    function Md5() {
      RuntimeClient.call(this, 'Md5');
    } // 让 Md5 具备事件功能。


    Mediator.installTo(Md5.prototype);

    Md5.prototype.loadFromBlob = function (blob) {
      var me = this;

      if (me.getRuid()) {
        me.disconnectRuntime();
      } // 连接到blob归属的同一个runtime.


      me.connectRuntime(blob.ruid, function () {
        me.exec('init');
        me.exec('loadFromBlob', blob);
      });
    };

    Md5.prototype.getResult = function () {
      return this.exec('getResult');
    };

    return Md5;
  });
  /**
   * @fileOverview 图片操作, 负责预览图片和上传前压缩图片
   */

  define('widgets/md5', ['base', 'uploader', 'lib/md5', 'lib/blob', 'widgets/widget'], function (Base, Uploader, Md5, Blob) {
    return Uploader.register({
      name: 'md5',

      /**
       * 计算文件 md5 值，返回一个 promise 对象，可以监听 progress 进度。
       *
       *
       * @method md5File
       * @grammar md5File( file[, start[, end]] ) => promise
       * @for Uploader
       * @example
       *
       * uploader.on( 'fileQueued', function( file ) {
       *     var $li = ...;
       *
       *     uploader.md5File( file )
       *
       *         // 及时显示进度
       *         .progress(function(percentage) {
       *             console.log('Percentage:', percentage);
       *         })
       *
       *         // 完成
       *         .then(function(val) {
       *             console.log('md5 result:', val);
       *         });
       *
       * });
       */
      md5File: function (file, start, end) {
        var md5 = new Md5(),
            deferred = Base.Deferred(),
            blob = file instanceof Blob ? file : this.request('get-file', file).source;
        md5.on('progress load', function (e) {
          e = e || {};
          deferred.notify(e.total ? e.loaded / e.total : 1);
        });
        md5.on('complete', function () {
          deferred.resolve(md5.getResult());
        });
        md5.on('error', function (reason) {
          deferred.reject(reason);
        });

        if (arguments.length > 1) {
          start = start || 0;
          end = end || 0;
          start < 0 && (start = blob.size + start);
          end < 0 && (end = blob.size + end);
          end = Math.min(end, blob.size);
          blob = blob.slice(start, end);
        }

        md5.loadFromBlob(blob);
        return deferred.promise();
      }
    });
  });
  /**
   * @fileOverview Runtime管理器，负责Runtime的选择, 连接
   */

  define('runtime/compbase', [], function () {
    function CompBase(owner, runtime) {
      this.owner = owner;
      this.options = owner.options;

      this.getRuntime = function () {
        return runtime;
      };

      this.getRuid = function () {
        return runtime.uid;
      };

      this.trigger = function () {
        return owner.trigger.apply(owner, arguments);
      };
    }

    return CompBase;
  });
  /**
   * @fileOverview Html5Runtime
   */

  define('runtime/html5/runtime', ['base', 'runtime/runtime', 'runtime/compbase'], function (Base, Runtime, CompBase) {
    var type = 'html5',
        components = {};

    function Html5Runtime() {
      var pool = {},
          me = this,
          destroy = this.destroy;
      Runtime.apply(me, arguments);
      me.type = type; // 这个方法的调用者，实际上是RuntimeClient

      me.exec = function (comp, fn
      /*, args...*/
      ) {
        var client = this,
            uid = client.uid,
            args = Base.slice(arguments, 2),
            instance;

        if (components[comp]) {
          instance = pool[uid] = pool[uid] || new components[comp](client, me);

          if (instance[fn]) {
            return instance[fn].apply(instance, args);
          }
        }
      };

      me.destroy = function () {
        // @todo 删除池子中的所有实例
        return destroy && destroy.apply(this, arguments);
      };
    }

    Base.inherits(Runtime, {
      constructor: Html5Runtime,
      // 不需要连接其他程序，直接执行callback
      init: function () {
        var me = this;
        setTimeout(function () {
          me.trigger('ready');
        }, 1);
      }
    }); // 注册Components

    Html5Runtime.register = function (name, component) {
      var klass = components[name] = Base.inherits(CompBase, component);
      return klass;
    }; // 注册html5运行时。
    // 只有在支持的前提下注册。


    if (window.Blob && window.FileReader && window.DataView) {
      Runtime.addRuntime(type, Html5Runtime);
    }

    return Html5Runtime;
  });
  /**
   * @fileOverview Blob Html实现
   */

  define('runtime/html5/blob', ['runtime/html5/runtime', 'lib/blob'], function (Html5Runtime, Blob) {
    return Html5Runtime.register('Blob', {
      slice: function (start, end) {
        var blob = this.owner.source,
            slice = blob.slice || blob.webkitSlice || blob.mozSlice;
        blob = slice.call(blob, start, end);
        return new Blob(this.getRuid(), blob);
      }
    });
  });
  /**
   * @fileOverview FilePaste
   */

  define('runtime/html5/dnd', ['base', 'runtime/html5/runtime', 'lib/file'], function (Base, Html5Runtime, File) {
    var $ = Base.$,
        prefix = 'webuploader-dnd-';
    return Html5Runtime.register('DragAndDrop', {
      init: function () {
        var elem = this.elem = this.options.container;
        this.dragEnterHandler = Base.bindFn(this._dragEnterHandler, this);
        this.dragOverHandler = Base.bindFn(this._dragOverHandler, this);
        this.dragLeaveHandler = Base.bindFn(this._dragLeaveHandler, this);
        this.dropHandler = Base.bindFn(this._dropHandler, this);
        this.dndOver = false;
        elem.on('dragenter', this.dragEnterHandler);
        elem.on('dragover', this.dragOverHandler);
        elem.on('dragleave', this.dragLeaveHandler);
        elem.on('drop', this.dropHandler);

        if (this.options.disableGlobalDnd) {
          $(document).on('dragover', this.dragOverHandler);
          $(document).on('drop', this.dropHandler);
        }
      },
      _dragEnterHandler: function (e) {
        var me = this,
            denied = me._denied || false,
            items;
        e = e.originalEvent || e;

        if (!me.dndOver) {
          me.dndOver = true; // 注意只有 chrome 支持。

          items = e.dataTransfer.items;

          if (items && items.length) {
            me._denied = denied = !me.trigger('accept', items);
          }

          me.elem.addClass(prefix + 'over');
          me.elem[denied ? 'addClass' : 'removeClass'](prefix + 'denied');
        }

        e.dataTransfer.dropEffect = denied ? 'none' : 'copy';
        return false;
      },
      _dragOverHandler: function (e) {
        // 只处理框内的。
        var parentElem = this.elem.parent().get(0);

        if (parentElem && !$.contains(parentElem, e.currentTarget)) {
          return false;
        }

        clearTimeout(this._leaveTimer);

        this._dragEnterHandler.call(this, e);

        return false;
      },
      _dragLeaveHandler: function () {
        var me = this,
            handler;

        handler = function () {
          me.dndOver = false;
          me.elem.removeClass(prefix + 'over ' + prefix + 'denied');
        };

        clearTimeout(me._leaveTimer);
        me._leaveTimer = setTimeout(handler, 100);
        return false;
      },
      _dropHandler: function (e) {
        var me = this,
            ruid = me.getRuid(),
            parentElem = me.elem.parent().get(0),
            dataTransfer,
            data; // 只处理框内的。

        if (parentElem && !$.contains(parentElem, e.currentTarget)) {
          return false;
        }

        e = e.originalEvent || e;
        dataTransfer = e.dataTransfer; // 如果是页面内拖拽，还不能处理，不阻止事件。
        // 此处 ie11 下会报参数错误，

        try {
          data = dataTransfer.getData('text/html');
        } catch (err) {}

        me.dndOver = false;
        me.elem.removeClass(prefix + 'over');

        if (data) {
          return;
        }

        me._getTansferFiles(dataTransfer, function (results) {
          me.trigger('drop', $.map(results, function (file) {
            return new File(ruid, file);
          }));
        });

        return false;
      },
      // 如果传入 callback 则去查看文件夹，否则只管当前文件夹。
      _getTansferFiles: function (dataTransfer, callback) {
        var results = [],
            promises = [],
            items,
            files,
            file,
            item,
            i,
            len,
            canAccessFolder;
        items = dataTransfer.items;
        files = dataTransfer.files;
        canAccessFolder = !!(items && items[0].webkitGetAsEntry);

        for (i = 0, len = files.length; i < len; i++) {
          file = files[i];
          item = items && items[i];

          if (canAccessFolder && item.webkitGetAsEntry().isDirectory) {
            promises.push(this._traverseDirectoryTree(item.webkitGetAsEntry(), results));
          } else {
            results.push(file);
          }
        }

        Base.when.apply(Base, promises).done(function () {
          if (!results.length) {
            return;
          }

          callback(results);
        });
      },
      _traverseDirectoryTree: function (entry, results) {
        var deferred = Base.Deferred(),
            me = this;

        if (entry.isFile) {
          entry.file(function (file) {
            results.push(file);
            deferred.resolve();
          });
        } else if (entry.isDirectory) {
          entry.createReader().readEntries(function (entries) {
            var len = entries.length,
                promises = [],
                arr = [],
                // 为了保证顺序。
            i;

            for (i = 0; i < len; i++) {
              promises.push(me._traverseDirectoryTree(entries[i], arr));
            }

            Base.when.apply(Base, promises).then(function () {
              results.push.apply(results, arr);
              deferred.resolve();
            }, deferred.reject);
          });
        }

        return deferred.promise();
      },
      destroy: function () {
        var elem = this.elem; // 还没 init 就调用 destroy

        if (!elem) {
          return;
        }

        elem.off('dragenter', this.dragEnterHandler);
        elem.off('dragover', this.dragOverHandler);
        elem.off('dragleave', this.dragLeaveHandler);
        elem.off('drop', this.dropHandler);

        if (this.options.disableGlobalDnd) {
          $(document).off('dragover', this.dragOverHandler);
          $(document).off('drop', this.dropHandler);
        }
      }
    });
  });
  /**
   * @fileOverview FilePaste
   */

  define('runtime/html5/filepaste', ['base', 'runtime/html5/runtime', 'lib/file'], function (Base, Html5Runtime, File) {
    return Html5Runtime.register('FilePaste', {
      init: function () {
        var opts = this.options,
            elem = this.elem = opts.container,
            accept = '.*',
            arr,
            i,
            len,
            item; // accetp的mimeTypes中生成匹配正则。

        if (opts.accept) {
          arr = [];

          for (i = 0, len = opts.accept.length; i < len; i++) {
            item = opts.accept[i].mimeTypes;
            item && arr.push(item);
          }

          if (arr.length) {
            accept = arr.join(',');
            accept = accept.replace(/,/g, '|').replace(/\*/g, '.*');
          }
        }

        this.accept = accept = new RegExp(accept, 'i');
        this.hander = Base.bindFn(this._pasteHander, this);
        elem.on('paste', this.hander);
      },
      _pasteHander: function (e) {
        var allowed = [],
            ruid = this.getRuid(),
            items,
            item,
            blob,
            i,
            len;
        e = e.originalEvent || e;
        items = e.clipboardData.items;

        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];

          if (item.kind !== 'file' || !(blob = item.getAsFile())) {
            continue;
          }

          allowed.push(new File(ruid, blob));
        }

        if (allowed.length) {
          // 不阻止非文件粘贴（文字粘贴）的事件冒泡
          e.preventDefault();
          e.stopPropagation();
          this.trigger('paste', allowed);
        }
      },
      destroy: function () {
        this.elem.off('paste', this.hander);
      }
    });
  });
  /**
   * @fileOverview FilePicker
   */

  define('runtime/html5/filepicker', ['base', 'runtime/html5/runtime'], function (Base, Html5Runtime) {
    var $ = Base.$;
    return Html5Runtime.register('FilePicker', {
      init: function () {
        var container = this.getRuntime().getContainer(),
            me = this,
            owner = me.owner,
            opts = me.options,
            label = this.label = $(document.createElement('label')),
            input = this.input = $(document.createElement('input')),
            arr,
            i,
            len,
            mouseHandler;
        input.attr('type', 'file');
        input.attr('capture', 'camera');
        input.attr('name', opts.name);
        input.addClass('webuploader-element-invisible');
        label.on('click', function (e) {
          input.trigger('click');
          e.stopPropagation();
          owner.trigger('dialogopen');
        });
        label.css({
          opacity: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          cursor: 'pointer',
          background: '#ffffff'
        });

        if (opts.multiple) {
          input.attr('multiple', 'multiple');
        } // @todo Firefox不支持单独指定后缀


        if (opts.accept && opts.accept.length > 0) {
          arr = [];

          for (i = 0, len = opts.accept.length; i < len; i++) {
            arr.push(opts.accept[i].mimeTypes);
          }

          input.attr('accept', arr.join(','));
        }

        container.append(input);
        container.append(label);

        mouseHandler = function (e) {
          owner.trigger(e.type);
        };

        input.on('change', function (e) {
          var fn = arguments.callee,
              clone;
          me.files = e.target.files; // reset input

          clone = this.cloneNode(true);
          clone.value = null;
          this.parentNode.replaceChild(clone, this);
          input.off();
          input = $(clone).on('change', fn).on('mouseenter mouseleave', mouseHandler);
          owner.trigger('change');
        });
        label.on('mouseenter mouseleave', mouseHandler);
      },
      getFiles: function () {
        return this.files;
      },
      destroy: function () {
        this.input.off();
        this.label.off();
      }
    });
  });
  /**
   * Terms:
   *
   * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
   * @fileOverview Image控件
   */

  define('runtime/html5/util', ['base'], function (Base) {
    var urlAPI = window.createObjectURL && window || window.URL && URL.revokeObjectURL && URL || window.webkitURL,
        createObjectURL = Base.noop,
        revokeObjectURL = createObjectURL;

    if (urlAPI) {
      // 更安全的方式调用，比如android里面就能把context改成其他的对象。
      createObjectURL = function () {
        return urlAPI.createObjectURL.apply(urlAPI, arguments);
      };

      revokeObjectURL = function () {
        return urlAPI.revokeObjectURL.apply(urlAPI, arguments);
      };
    }

    return {
      createObjectURL: createObjectURL,
      revokeObjectURL: revokeObjectURL,
      dataURL2Blob: function (dataURI) {
        var byteStr, intArray, ab, i, mimetype, parts;
        parts = dataURI.split(',');

        if (~parts[0].indexOf('base64')) {
          byteStr = atob(parts[1]);
        } else {
          byteStr = decodeURIComponent(parts[1]);
        }

        ab = new ArrayBuffer(byteStr.length);
        intArray = new Uint8Array(ab);

        for (i = 0; i < byteStr.length; i++) {
          intArray[i] = byteStr.charCodeAt(i);
        }

        mimetype = parts[0].split(':')[1].split(';')[0];
        return this.arrayBufferToBlob(ab, mimetype);
      },
      dataURL2ArrayBuffer: function (dataURI) {
        var byteStr, intArray, i, parts;
        parts = dataURI.split(',');

        if (~parts[0].indexOf('base64')) {
          byteStr = atob(parts[1]);
        } else {
          byteStr = decodeURIComponent(parts[1]);
        }

        intArray = new Uint8Array(byteStr.length);

        for (i = 0; i < byteStr.length; i++) {
          intArray[i] = byteStr.charCodeAt(i);
        }

        return intArray.buffer;
      },
      arrayBufferToBlob: function (buffer, type) {
        var builder = window.BlobBuilder || window.WebKitBlobBuilder,
            bb; // android不支持直接new Blob, 只能借助blobbuilder.

        if (builder) {
          bb = new builder();
          bb.append(buffer);
          return bb.getBlob(type);
        }

        return new Blob([buffer], type ? {
          type: type
        } : {});
      },
      // 抽出来主要是为了解决android下面canvas.toDataUrl不支持jpeg.
      // 你得到的结果是png.
      canvasToDataUrl: function (canvas, type, quality) {
        return canvas.toDataURL(type, quality / 100);
      },
      // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
      parseMeta: function (blob, callback) {
        callback(false, {});
      },
      // imagemeat会复写这个方法，如果用户选择加载那个文件了的话。
      updateImageHead: function (data) {
        return data;
      }
    };
  });
  /**
   * Terms:
   *
   * Uint8Array, FileReader, BlobBuilder, atob, ArrayBuffer
   * @fileOverview Image控件
   */

  define('runtime/html5/imagemeta', ['runtime/html5/util'], function (Util) {
    var api;
    api = {
      parsers: {
        0xffe1: []
      },
      maxMetaDataSize: 262144,
      parse: function (blob, cb) {
        var me = this,
            fr = new FileReader();

        fr.onload = function () {
          cb(false, me._parse(this.result));
          fr = fr.onload = fr.onerror = null;
        };

        fr.onerror = function (e) {
          cb(e.message);
          fr = fr.onload = fr.onerror = null;
        };

        blob = blob.slice(0, me.maxMetaDataSize);
        fr.readAsArrayBuffer(blob.getSource());
      },
      _parse: function (buffer, noParse) {
        if (buffer.byteLength < 6) {
          return;
        }

        var dataview = new DataView(buffer),
            offset = 2,
            maxOffset = dataview.byteLength - 4,
            headLength = offset,
            ret = {},
            markerBytes,
            markerLength,
            parsers,
            i;

        if (dataview.getUint16(0) === 0xffd8) {
          while (offset < maxOffset) {
            markerBytes = dataview.getUint16(offset);

            if (markerBytes >= 0xffe0 && markerBytes <= 0xffef || markerBytes === 0xfffe) {
              markerLength = dataview.getUint16(offset + 2) + 2;

              if (offset + markerLength > dataview.byteLength) {
                break;
              }

              parsers = api.parsers[markerBytes];

              if (!noParse && parsers) {
                for (i = 0; i < parsers.length; i += 1) {
                  parsers[i].call(api, dataview, offset, markerLength, ret);
                }
              }

              offset += markerLength;
              headLength = offset;
            } else {
              break;
            }
          }

          if (headLength > 6) {
            if (buffer.slice) {
              ret.imageHead = buffer.slice(2, headLength);
            } else {
              // Workaround for IE10, which does not yet
              // support ArrayBuffer.slice:
              ret.imageHead = new Uint8Array(buffer).subarray(2, headLength);
            }
          }
        }

        return ret;
      },
      updateImageHead: function (buffer, head) {
        var data = this._parse(buffer, true),
            buf1,
            buf2,
            bodyoffset;

        bodyoffset = 2;

        if (data.imageHead) {
          bodyoffset = 2 + data.imageHead.byteLength;
        }

        if (buffer.slice) {
          buf2 = buffer.slice(bodyoffset);
        } else {
          buf2 = new Uint8Array(buffer).subarray(bodyoffset);
        }

        buf1 = new Uint8Array(head.byteLength + 2 + buf2.byteLength);
        buf1[0] = 0xFF;
        buf1[1] = 0xD8;
        buf1.set(new Uint8Array(head), 2);
        buf1.set(new Uint8Array(buf2), head.byteLength + 2);
        return buf1.buffer;
      }
    };

    Util.parseMeta = function () {
      return api.parse.apply(api, arguments);
    };

    Util.updateImageHead = function () {
      return api.updateImageHead.apply(api, arguments);
    };

    return api;
  });
  /**
   * 代码来自于：https://github.com/blueimp/JavaScript-Load-Image
   * 暂时项目中只用了orientation.
   *
   * 去除了 Exif Sub IFD Pointer, GPS Info IFD Pointer, Exif Thumbnail.
   * @fileOverview EXIF解析
   */
  // Sample
  // ====================================
  // Make : Apple
  // Model : iPhone 4S
  // Orientation : 1
  // XResolution : 72 [72/1]
  // YResolution : 72 [72/1]
  // ResolutionUnit : 2
  // Software : QuickTime 7.7.1
  // DateTime : 2013:09:01 22:53:55
  // ExifIFDPointer : 190
  // ExposureTime : 0.058823529411764705 [1/17]
  // FNumber : 2.4 [12/5]
  // ExposureProgram : Normal program
  // ISOSpeedRatings : 800
  // ExifVersion : 0220
  // DateTimeOriginal : 2013:09:01 22:52:51
  // DateTimeDigitized : 2013:09:01 22:52:51
  // ComponentsConfiguration : YCbCr
  // ShutterSpeedValue : 4.058893515764426
  // ApertureValue : 2.5260688216892597 [4845/1918]
  // BrightnessValue : -0.3126686601998395
  // MeteringMode : Pattern
  // Flash : Flash did not fire, compulsory flash mode
  // FocalLength : 4.28 [107/25]
  // SubjectArea : [4 values]
  // FlashpixVersion : 0100
  // ColorSpace : 1
  // PixelXDimension : 2448
  // PixelYDimension : 3264
  // SensingMethod : One-chip color area sensor
  // ExposureMode : 0
  // WhiteBalance : Auto white balance
  // FocalLengthIn35mmFilm : 35
  // SceneCaptureType : Standard

  define('runtime/html5/imagemeta/exif', ['base', 'runtime/html5/imagemeta'], function (Base, ImageMeta) {
    var EXIF = {};

    EXIF.ExifMap = function () {
      return this;
    };

    EXIF.ExifMap.prototype.map = {
      'Orientation': 0x0112
    };

    EXIF.ExifMap.prototype.get = function (id) {
      return this[id] || this[this.map[id]];
    };

    EXIF.exifTagTypes = {
      // byte, 8-bit unsigned int:
      1: {
        getValue: function (dataView, dataOffset) {
          return dataView.getUint8(dataOffset);
        },
        size: 1
      },
      // ascii, 8-bit byte:
      2: {
        getValue: function (dataView, dataOffset) {
          return String.fromCharCode(dataView.getUint8(dataOffset));
        },
        size: 1,
        ascii: true
      },
      // short, 16 bit int:
      3: {
        getValue: function (dataView, dataOffset, littleEndian) {
          return dataView.getUint16(dataOffset, littleEndian);
        },
        size: 2
      },
      // long, 32 bit int:
      4: {
        getValue: function (dataView, dataOffset, littleEndian) {
          return dataView.getUint32(dataOffset, littleEndian);
        },
        size: 4
      },
      // rational = two long values,
      // first is numerator, second is denominator:
      5: {
        getValue: function (dataView, dataOffset, littleEndian) {
          return dataView.getUint32(dataOffset, littleEndian) / dataView.getUint32(dataOffset + 4, littleEndian);
        },
        size: 8
      },
      // slong, 32 bit signed int:
      9: {
        getValue: function (dataView, dataOffset, littleEndian) {
          return dataView.getInt32(dataOffset, littleEndian);
        },
        size: 4
      },
      // srational, two slongs, first is numerator, second is denominator:
      10: {
        getValue: function (dataView, dataOffset, littleEndian) {
          return dataView.getInt32(dataOffset, littleEndian) / dataView.getInt32(dataOffset + 4, littleEndian);
        },
        size: 8
      }
    }; // undefined, 8-bit byte, value depending on field:

    EXIF.exifTagTypes[7] = EXIF.exifTagTypes[1];

    EXIF.getExifValue = function (dataView, tiffOffset, offset, type, length, littleEndian) {
      var tagType = EXIF.exifTagTypes[type],
          tagSize,
          dataOffset,
          values,
          i,
          str,
          c;

      if (!tagType) {
        Base.log('Invalid Exif data: Invalid tag type.');
        return;
      }

      tagSize = tagType.size * length; // Determine if the value is contained in the dataOffset bytes,
      // or if the value at the dataOffset is a pointer to the actual data:

      dataOffset = tagSize > 4 ? tiffOffset + dataView.getUint32(offset + 8, littleEndian) : offset + 8;

      if (dataOffset + tagSize > dataView.byteLength) {
        Base.log('Invalid Exif data: Invalid data offset.');
        return;
      }

      if (length === 1) {
        return tagType.getValue(dataView, dataOffset, littleEndian);
      }

      values = [];

      for (i = 0; i < length; i += 1) {
        values[i] = tagType.getValue(dataView, dataOffset + i * tagType.size, littleEndian);
      }

      if (tagType.ascii) {
        str = ''; // Concatenate the chars:

        for (i = 0; i < values.length; i += 1) {
          c = values[i]; // Ignore the terminating NULL byte(s):

          if (c === '\u0000') {
            break;
          }

          str += c;
        }

        return str;
      }

      return values;
    };

    EXIF.parseExifTag = function (dataView, tiffOffset, offset, littleEndian, data) {
      var tag = dataView.getUint16(offset, littleEndian);
      data.exif[tag] = EXIF.getExifValue(dataView, tiffOffset, offset, dataView.getUint16(offset + 2, littleEndian), // tag type
      dataView.getUint32(offset + 4, littleEndian), // tag length
      littleEndian);
    };

    EXIF.parseExifTags = function (dataView, tiffOffset, dirOffset, littleEndian, data) {
      var tagsNumber, dirEndOffset, i;

      if (dirOffset + 6 > dataView.byteLength) {
        Base.log('Invalid Exif data: Invalid directory offset.');
        return;
      }

      tagsNumber = dataView.getUint16(dirOffset, littleEndian);
      dirEndOffset = dirOffset + 2 + 12 * tagsNumber;

      if (dirEndOffset + 4 > dataView.byteLength) {
        Base.log('Invalid Exif data: Invalid directory size.');
        return;
      }

      for (i = 0; i < tagsNumber; i += 1) {
        this.parseExifTag(dataView, tiffOffset, dirOffset + 2 + 12 * i, // tag offset
        littleEndian, data);
      } // Return the offset to the next directory:


      return dataView.getUint32(dirEndOffset, littleEndian);
    }; // EXIF.getExifThumbnail = function(dataView, offset, length) {
    //     var hexData,
    //         i,
    //         b;
    //     if (!length || offset + length > dataView.byteLength) {
    //         Base.log('Invalid Exif data: Invalid thumbnail data.');
    //         return;
    //     }
    //     hexData = [];
    //     for (i = 0; i < length; i += 1) {
    //         b = dataView.getUint8(offset + i);
    //         hexData.push((b < 16 ? '0' : '') + b.toString(16));
    //     }
    //     return 'data:image/jpeg,%' + hexData.join('%');
    // };


    EXIF.parseExifData = function (dataView, offset, length, data) {
      var tiffOffset = offset + 10,
          littleEndian,
          dirOffset; // Check for the ASCII code for "Exif" (0x45786966):

      if (dataView.getUint32(offset + 4) !== 0x45786966) {
        // No Exif data, might be XMP data instead
        return;
      }

      if (tiffOffset + 8 > dataView.byteLength) {
        Base.log('Invalid Exif data: Invalid segment size.');
        return;
      } // Check for the two null bytes:


      if (dataView.getUint16(offset + 8) !== 0x0000) {
        Base.log('Invalid Exif data: Missing byte alignment offset.');
        return;
      } // Check the byte alignment:


      switch (dataView.getUint16(tiffOffset)) {
        case 0x4949:
          littleEndian = true;
          break;

        case 0x4D4D:
          littleEndian = false;
          break;

        default:
          Base.log('Invalid Exif data: Invalid byte alignment marker.');
          return;
      } // Check for the TIFF tag marker (0x002A):


      if (dataView.getUint16(tiffOffset + 2, littleEndian) !== 0x002A) {
        Base.log('Invalid Exif data: Missing TIFF marker.');
        return;
      } // Retrieve the directory offset bytes, usually 0x00000008 or 8 decimal:


      dirOffset = dataView.getUint32(tiffOffset + 4, littleEndian); // Create the exif object to store the tags:

      data.exif = new EXIF.ExifMap(); // Parse the tags of the main image directory and retrieve the
      // offset to the next directory, usually the thumbnail directory:

      dirOffset = EXIF.parseExifTags(dataView, tiffOffset, tiffOffset + dirOffset, littleEndian, data); // 尝试读取缩略图
      // if ( dirOffset ) {
      //     thumbnailData = {exif: {}};
      //     dirOffset = EXIF.parseExifTags(
      //         dataView,
      //         tiffOffset,
      //         tiffOffset + dirOffset,
      //         littleEndian,
      //         thumbnailData
      //     );
      //     // Check for JPEG Thumbnail offset:
      //     if (thumbnailData.exif[0x0201]) {
      //         data.exif.Thumbnail = EXIF.getExifThumbnail(
      //             dataView,
      //             tiffOffset + thumbnailData.exif[0x0201],
      //             thumbnailData.exif[0x0202] // Thumbnail data length
      //         );
      //     }
      // }
    };

    ImageMeta.parsers[0xffe1].push(EXIF.parseExifData);
    return EXIF;
  });
  /**
   * 这个方式性能不行，但是可以解决android里面的toDataUrl的bug
   * android里面toDataUrl('image/jpege')得到的结果却是png.
   *
   * 所以这里没辙，只能借助这个工具
   * @fileOverview jpeg encoder
   */

  define('runtime/html5/jpegencoder', [], function (require, exports, module) {
    /*
      Copyright (c) 2008, Adobe Systems Incorporated
      All rights reserved.
       Redistribution and use in source and binary forms, with or without
      modification, are permitted provided that the following conditions are
      met:
       * Redistributions of source code must retain the above copyright notice,
        this list of conditions and the following disclaimer.
       * Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.
       * Neither the name of Adobe Systems Incorporated nor the names of its
        contributors may be used to endorse or promote products derived from
        this software without specific prior written permission.
       THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
      IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
      THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
      PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
      CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
      EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
      PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
      PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
      LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
      SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

    /*
    JPEG encoder ported to JavaScript and optimized by Andreas Ritter, www.bytestrom.eu, 11/2009
     Basic GUI blocking jpeg encoder
    */
    function JPEGEncoder(quality) {
      var self = this;
      var fround = Math.round;
      var ffloor = Math.floor;
      var YTable = new Array(64);
      var UVTable = new Array(64);
      var fdtbl_Y = new Array(64);
      var fdtbl_UV = new Array(64);
      var YDC_HT;
      var UVDC_HT;
      var YAC_HT;
      var UVAC_HT;
      var bitcode = new Array(65535);
      var category = new Array(65535);
      var outputfDCTQuant = new Array(64);
      var DU = new Array(64);
      var byteout = [];
      var bytenew = 0;
      var bytepos = 7;
      var YDU = new Array(64);
      var UDU = new Array(64);
      var VDU = new Array(64);
      var clt = new Array(256);
      var RGB_YUV_TABLE = new Array(2048);
      var currentQuality;
      var ZigZag = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63];
      var std_dc_luminance_nrcodes = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0];
      var std_dc_luminance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var std_ac_luminance_nrcodes = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 0x7d];
      var std_ac_luminance_values = [0x01, 0x02, 0x03, 0x00, 0x04, 0x11, 0x05, 0x12, 0x21, 0x31, 0x41, 0x06, 0x13, 0x51, 0x61, 0x07, 0x22, 0x71, 0x14, 0x32, 0x81, 0x91, 0xa1, 0x08, 0x23, 0x42, 0xb1, 0xc1, 0x15, 0x52, 0xd1, 0xf0, 0x24, 0x33, 0x62, 0x72, 0x82, 0x09, 0x0a, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xe1, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa];
      var std_dc_chrominance_nrcodes = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
      var std_dc_chrominance_values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      var std_ac_chrominance_nrcodes = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 0x77];
      var std_ac_chrominance_values = [0x00, 0x01, 0x02, 0x03, 0x11, 0x04, 0x05, 0x21, 0x31, 0x06, 0x12, 0x41, 0x51, 0x07, 0x61, 0x71, 0x13, 0x22, 0x32, 0x81, 0x08, 0x14, 0x42, 0x91, 0xa1, 0xb1, 0xc1, 0x09, 0x23, 0x33, 0x52, 0xf0, 0x15, 0x62, 0x72, 0xd1, 0x0a, 0x16, 0x24, 0x34, 0xe1, 0x25, 0xf1, 0x17, 0x18, 0x19, 0x1a, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x43, 0x44, 0x45, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x53, 0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x73, 0x74, 0x75, 0x76, 0x77, 0x78, 0x79, 0x7a, 0x82, 0x83, 0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7, 0xd8, 0xd9, 0xda, 0xe2, 0xe3, 0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa];

      function initQuantTables(sf) {
        var YQT = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99];

        for (var i = 0; i < 64; i++) {
          var t = ffloor((YQT[i] * sf + 50) / 100);

          if (t < 1) {
            t = 1;
          } else if (t > 255) {
            t = 255;
          }

          YTable[ZigZag[i]] = t;
        }

        var UVQT = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99];

        for (var j = 0; j < 64; j++) {
          var u = ffloor((UVQT[j] * sf + 50) / 100);

          if (u < 1) {
            u = 1;
          } else if (u > 255) {
            u = 255;
          }

          UVTable[ZigZag[j]] = u;
        }

        var aasf = [1.0, 1.387039845, 1.306562965, 1.175875602, 1.0, 0.785694958, 0.541196100, 0.275899379];
        var k = 0;

        for (var row = 0; row < 8; row++) {
          for (var col = 0; col < 8; col++) {
            fdtbl_Y[k] = 1.0 / (YTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
            fdtbl_UV[k] = 1.0 / (UVTable[ZigZag[k]] * aasf[row] * aasf[col] * 8.0);
            k++;
          }
        }
      }

      function computeHuffmanTbl(nrcodes, std_table) {
        var codevalue = 0;
        var pos_in_table = 0;
        var HT = new Array();

        for (var k = 1; k <= 16; k++) {
          for (var j = 1; j <= nrcodes[k]; j++) {
            HT[std_table[pos_in_table]] = [];
            HT[std_table[pos_in_table]][0] = codevalue;
            HT[std_table[pos_in_table]][1] = k;
            pos_in_table++;
            codevalue++;
          }

          codevalue *= 2;
        }

        return HT;
      }

      function initHuffmanTbl() {
        YDC_HT = computeHuffmanTbl(std_dc_luminance_nrcodes, std_dc_luminance_values);
        UVDC_HT = computeHuffmanTbl(std_dc_chrominance_nrcodes, std_dc_chrominance_values);
        YAC_HT = computeHuffmanTbl(std_ac_luminance_nrcodes, std_ac_luminance_values);
        UVAC_HT = computeHuffmanTbl(std_ac_chrominance_nrcodes, std_ac_chrominance_values);
      }

      function initCategoryNumber() {
        var nrlower = 1;
        var nrupper = 2;

        for (var cat = 1; cat <= 15; cat++) {
          //Positive numbers
          for (var nr = nrlower; nr < nrupper; nr++) {
            category[32767 + nr] = cat;
            bitcode[32767 + nr] = [];
            bitcode[32767 + nr][1] = cat;
            bitcode[32767 + nr][0] = nr;
          } //Negative numbers


          for (var nrneg = -(nrupper - 1); nrneg <= -nrlower; nrneg++) {
            category[32767 + nrneg] = cat;
            bitcode[32767 + nrneg] = [];
            bitcode[32767 + nrneg][1] = cat;
            bitcode[32767 + nrneg][0] = nrupper - 1 + nrneg;
          }

          nrlower <<= 1;
          nrupper <<= 1;
        }
      }

      function initRGBYUVTable() {
        for (var i = 0; i < 256; i++) {
          RGB_YUV_TABLE[i] = 19595 * i;
          RGB_YUV_TABLE[i + 256 >> 0] = 38470 * i;
          RGB_YUV_TABLE[i + 512 >> 0] = 7471 * i + 0x8000;
          RGB_YUV_TABLE[i + 768 >> 0] = -11059 * i;
          RGB_YUV_TABLE[i + 1024 >> 0] = -21709 * i;
          RGB_YUV_TABLE[i + 1280 >> 0] = 32768 * i + 0x807FFF;
          RGB_YUV_TABLE[i + 1536 >> 0] = -27439 * i;
          RGB_YUV_TABLE[i + 1792 >> 0] = -5329 * i;
        }
      } // IO functions


      function writeBits(bs) {
        var value = bs[0];
        var posval = bs[1] - 1;

        while (posval >= 0) {
          if (value & 1 << posval) {
            bytenew |= 1 << bytepos;
          }

          posval--;
          bytepos--;

          if (bytepos < 0) {
            if (bytenew == 0xFF) {
              writeByte(0xFF);
              writeByte(0);
            } else {
              writeByte(bytenew);
            }

            bytepos = 7;
            bytenew = 0;
          }
        }
      }

      function writeByte(value) {
        byteout.push(clt[value]); // write char directly instead of converting later
      }

      function writeWord(value) {
        writeByte(value >> 8 & 0xFF);
        writeByte(value & 0xFF);
      } // DCT & quantization core


      function fDCTQuant(data, fdtbl) {
        var d0, d1, d2, d3, d4, d5, d6, d7;
        /* Pass 1: process rows. */

        var dataOff = 0;
        var i;
        var I8 = 8;
        var I64 = 64;

        for (i = 0; i < I8; ++i) {
          d0 = data[dataOff];
          d1 = data[dataOff + 1];
          d2 = data[dataOff + 2];
          d3 = data[dataOff + 3];
          d4 = data[dataOff + 4];
          d5 = data[dataOff + 5];
          d6 = data[dataOff + 6];
          d7 = data[dataOff + 7];
          var tmp0 = d0 + d7;
          var tmp7 = d0 - d7;
          var tmp1 = d1 + d6;
          var tmp6 = d1 - d6;
          var tmp2 = d2 + d5;
          var tmp5 = d2 - d5;
          var tmp3 = d3 + d4;
          var tmp4 = d3 - d4;
          /* Even part */

          var tmp10 = tmp0 + tmp3;
          /* phase 2 */

          var tmp13 = tmp0 - tmp3;
          var tmp11 = tmp1 + tmp2;
          var tmp12 = tmp1 - tmp2;
          data[dataOff] = tmp10 + tmp11;
          /* phase 3 */

          data[dataOff + 4] = tmp10 - tmp11;
          var z1 = (tmp12 + tmp13) * 0.707106781;
          /* c4 */

          data[dataOff + 2] = tmp13 + z1;
          /* phase 5 */

          data[dataOff + 6] = tmp13 - z1;
          /* Odd part */

          tmp10 = tmp4 + tmp5;
          /* phase 2 */

          tmp11 = tmp5 + tmp6;
          tmp12 = tmp6 + tmp7;
          /* The rotator is modified from fig 4-8 to avoid extra negations. */

          var z5 = (tmp10 - tmp12) * 0.382683433;
          /* c6 */

          var z2 = 0.541196100 * tmp10 + z5;
          /* c2-c6 */

          var z4 = 1.306562965 * tmp12 + z5;
          /* c2+c6 */

          var z3 = tmp11 * 0.707106781;
          /* c4 */

          var z11 = tmp7 + z3;
          /* phase 5 */

          var z13 = tmp7 - z3;
          data[dataOff + 5] = z13 + z2;
          /* phase 6 */

          data[dataOff + 3] = z13 - z2;
          data[dataOff + 1] = z11 + z4;
          data[dataOff + 7] = z11 - z4;
          dataOff += 8;
          /* advance pointer to next row */
        }
        /* Pass 2: process columns. */


        dataOff = 0;

        for (i = 0; i < I8; ++i) {
          d0 = data[dataOff];
          d1 = data[dataOff + 8];
          d2 = data[dataOff + 16];
          d3 = data[dataOff + 24];
          d4 = data[dataOff + 32];
          d5 = data[dataOff + 40];
          d6 = data[dataOff + 48];
          d7 = data[dataOff + 56];
          var tmp0p2 = d0 + d7;
          var tmp7p2 = d0 - d7;
          var tmp1p2 = d1 + d6;
          var tmp6p2 = d1 - d6;
          var tmp2p2 = d2 + d5;
          var tmp5p2 = d2 - d5;
          var tmp3p2 = d3 + d4;
          var tmp4p2 = d3 - d4;
          /* Even part */

          var tmp10p2 = tmp0p2 + tmp3p2;
          /* phase 2 */

          var tmp13p2 = tmp0p2 - tmp3p2;
          var tmp11p2 = tmp1p2 + tmp2p2;
          var tmp12p2 = tmp1p2 - tmp2p2;
          data[dataOff] = tmp10p2 + tmp11p2;
          /* phase 3 */

          data[dataOff + 32] = tmp10p2 - tmp11p2;
          var z1p2 = (tmp12p2 + tmp13p2) * 0.707106781;
          /* c4 */

          data[dataOff + 16] = tmp13p2 + z1p2;
          /* phase 5 */

          data[dataOff + 48] = tmp13p2 - z1p2;
          /* Odd part */

          tmp10p2 = tmp4p2 + tmp5p2;
          /* phase 2 */

          tmp11p2 = tmp5p2 + tmp6p2;
          tmp12p2 = tmp6p2 + tmp7p2;
          /* The rotator is modified from fig 4-8 to avoid extra negations. */

          var z5p2 = (tmp10p2 - tmp12p2) * 0.382683433;
          /* c6 */

          var z2p2 = 0.541196100 * tmp10p2 + z5p2;
          /* c2-c6 */

          var z4p2 = 1.306562965 * tmp12p2 + z5p2;
          /* c2+c6 */

          var z3p2 = tmp11p2 * 0.707106781;
          /* c4 */

          var z11p2 = tmp7p2 + z3p2;
          /* phase 5 */

          var z13p2 = tmp7p2 - z3p2;
          data[dataOff + 40] = z13p2 + z2p2;
          /* phase 6 */

          data[dataOff + 24] = z13p2 - z2p2;
          data[dataOff + 8] = z11p2 + z4p2;
          data[dataOff + 56] = z11p2 - z4p2;
          dataOff++;
          /* advance pointer to next column */
        } // Quantize/descale the coefficients


        var fDCTQuant;

        for (i = 0; i < I64; ++i) {
          // Apply the quantization and scaling factor & Round to nearest integer
          fDCTQuant = data[i] * fdtbl[i];
          outputfDCTQuant[i] = fDCTQuant > 0.0 ? fDCTQuant + 0.5 | 0 : fDCTQuant - 0.5 | 0; //outputfDCTQuant[i] = fround(fDCTQuant);
        }

        return outputfDCTQuant;
      }

      function writeAPP0() {
        writeWord(0xFFE0); // marker

        writeWord(16); // length

        writeByte(0x4A); // J

        writeByte(0x46); // F

        writeByte(0x49); // I

        writeByte(0x46); // F

        writeByte(0); // = "JFIF",'\0'

        writeByte(1); // versionhi

        writeByte(1); // versionlo

        writeByte(0); // xyunits

        writeWord(1); // xdensity

        writeWord(1); // ydensity

        writeByte(0); // thumbnwidth

        writeByte(0); // thumbnheight
      }

      function writeSOF0(width, height) {
        writeWord(0xFFC0); // marker

        writeWord(17); // length, truecolor YUV JPG

        writeByte(8); // precision

        writeWord(height);
        writeWord(width);
        writeByte(3); // nrofcomponents

        writeByte(1); // IdY

        writeByte(0x11); // HVY

        writeByte(0); // QTY

        writeByte(2); // IdU

        writeByte(0x11); // HVU

        writeByte(1); // QTU

        writeByte(3); // IdV

        writeByte(0x11); // HVV

        writeByte(1); // QTV
      }

      function writeDQT() {
        writeWord(0xFFDB); // marker

        writeWord(132); // length

        writeByte(0);

        for (var i = 0; i < 64; i++) {
          writeByte(YTable[i]);
        }

        writeByte(1);

        for (var j = 0; j < 64; j++) {
          writeByte(UVTable[j]);
        }
      }

      function writeDHT() {
        writeWord(0xFFC4); // marker

        writeWord(0x01A2); // length

        writeByte(0); // HTYDCinfo

        for (var i = 0; i < 16; i++) {
          writeByte(std_dc_luminance_nrcodes[i + 1]);
        }

        for (var j = 0; j <= 11; j++) {
          writeByte(std_dc_luminance_values[j]);
        }

        writeByte(0x10); // HTYACinfo

        for (var k = 0; k < 16; k++) {
          writeByte(std_ac_luminance_nrcodes[k + 1]);
        }

        for (var l = 0; l <= 161; l++) {
          writeByte(std_ac_luminance_values[l]);
        }

        writeByte(1); // HTUDCinfo

        for (var m = 0; m < 16; m++) {
          writeByte(std_dc_chrominance_nrcodes[m + 1]);
        }

        for (var n = 0; n <= 11; n++) {
          writeByte(std_dc_chrominance_values[n]);
        }

        writeByte(0x11); // HTUACinfo

        for (var o = 0; o < 16; o++) {
          writeByte(std_ac_chrominance_nrcodes[o + 1]);
        }

        for (var p = 0; p <= 161; p++) {
          writeByte(std_ac_chrominance_values[p]);
        }
      }

      function writeSOS() {
        writeWord(0xFFDA); // marker

        writeWord(12); // length

        writeByte(3); // nrofcomponents

        writeByte(1); // IdY

        writeByte(0); // HTY

        writeByte(2); // IdU

        writeByte(0x11); // HTU

        writeByte(3); // IdV

        writeByte(0x11); // HTV

        writeByte(0); // Ss

        writeByte(0x3f); // Se

        writeByte(0); // Bf
      }

      function processDU(CDU, fdtbl, DC, HTDC, HTAC) {
        var EOB = HTAC[0x00];
        var M16zeroes = HTAC[0xF0];
        var pos;
        var I16 = 16;
        var I63 = 63;
        var I64 = 64;
        var DU_DCT = fDCTQuant(CDU, fdtbl); //ZigZag reorder

        for (var j = 0; j < I64; ++j) {
          DU[ZigZag[j]] = DU_DCT[j];
        }

        var Diff = DU[0] - DC;
        DC = DU[0]; //Encode DC

        if (Diff == 0) {
          writeBits(HTDC[0]); // Diff might be 0
        } else {
          pos = 32767 + Diff;
          writeBits(HTDC[category[pos]]);
          writeBits(bitcode[pos]);
        } //Encode ACs


        var end0pos = 63; // was const... which is crazy

        for (; end0pos > 0 && DU[end0pos] == 0; end0pos--) {}

        ; //end0pos = first element in reverse order !=0

        if (end0pos == 0) {
          writeBits(EOB);
          return DC;
        }

        var i = 1;
        var lng;

        while (i <= end0pos) {
          var startpos = i;

          for (; DU[i] == 0 && i <= end0pos; ++i) {}

          var nrzeroes = i - startpos;

          if (nrzeroes >= I16) {
            lng = nrzeroes >> 4;

            for (var nrmarker = 1; nrmarker <= lng; ++nrmarker) writeBits(M16zeroes);

            nrzeroes = nrzeroes & 0xF;
          }

          pos = 32767 + DU[i];
          writeBits(HTAC[(nrzeroes << 4) + category[pos]]);
          writeBits(bitcode[pos]);
          i++;
        }

        if (end0pos != I63) {
          writeBits(EOB);
        }

        return DC;
      }

      function initCharLookupTable() {
        var sfcc = String.fromCharCode;

        for (var i = 0; i < 256; i++) {
          ///// ACHTUNG // 255
          clt[i] = sfcc(i);
        }
      }

      this.encode = function (image, quality) // image data object
      {
        // var time_start = new Date().getTime();
        if (quality) setQuality(quality); // Initialize bit writer

        byteout = new Array();
        bytenew = 0;
        bytepos = 7; // Add JPEG headers

        writeWord(0xFFD8); // SOI

        writeAPP0();
        writeDQT();
        writeSOF0(image.width, image.height);
        writeDHT();
        writeSOS(); // Encode 8x8 macroblocks

        var DCY = 0;
        var DCU = 0;
        var DCV = 0;
        bytenew = 0;
        bytepos = 7;
        this.encode.displayName = "_encode_";
        var imageData = image.data;
        var width = image.width;
        var height = image.height;
        var quadWidth = width * 4;
        var tripleWidth = width * 3;
        var x,
            y = 0;
        var r, g, b;
        var start, p, col, row, pos;

        while (y < height) {
          x = 0;

          while (x < quadWidth) {
            start = quadWidth * y + x;
            p = start;
            col = -1;
            row = 0;

            for (pos = 0; pos < 64; pos++) {
              row = pos >> 3; // /8

              col = (pos & 7) * 4; // %8

              p = start + row * quadWidth + col;

              if (y + row >= height) {
                // padding bottom
                p -= quadWidth * (y + 1 + row - height);
              }

              if (x + col >= quadWidth) {
                // padding right
                p -= x + col - quadWidth + 4;
              }

              r = imageData[p++];
              g = imageData[p++];
              b = imageData[p++];
              /* // calculate YUV values dynamically
              YDU[pos]=((( 0.29900)*r+( 0.58700)*g+( 0.11400)*b))-128; //-0x80
              UDU[pos]=(((-0.16874)*r+(-0.33126)*g+( 0.50000)*b));
              VDU[pos]=((( 0.50000)*r+(-0.41869)*g+(-0.08131)*b));
              */
              // use lookup table (slightly faster)

              YDU[pos] = (RGB_YUV_TABLE[r] + RGB_YUV_TABLE[g + 256 >> 0] + RGB_YUV_TABLE[b + 512 >> 0] >> 16) - 128;
              UDU[pos] = (RGB_YUV_TABLE[r + 768 >> 0] + RGB_YUV_TABLE[g + 1024 >> 0] + RGB_YUV_TABLE[b + 1280 >> 0] >> 16) - 128;
              VDU[pos] = (RGB_YUV_TABLE[r + 1280 >> 0] + RGB_YUV_TABLE[g + 1536 >> 0] + RGB_YUV_TABLE[b + 1792 >> 0] >> 16) - 128;
            }

            DCY = processDU(YDU, fdtbl_Y, DCY, YDC_HT, YAC_HT);
            DCU = processDU(UDU, fdtbl_UV, DCU, UVDC_HT, UVAC_HT);
            DCV = processDU(VDU, fdtbl_UV, DCV, UVDC_HT, UVAC_HT);
            x += 32;
          }

          y += 8;
        } ////////////////////////////////////////////////////////////////
        // Do the bit alignment of the EOI marker


        if (bytepos >= 0) {
          var fillbits = [];
          fillbits[1] = bytepos + 1;
          fillbits[0] = (1 << bytepos + 1) - 1;
          writeBits(fillbits);
        }

        writeWord(0xFFD9); //EOI

        var jpegDataUri = 'data:image/jpeg;base64,' + btoa(byteout.join(''));
        byteout = []; // benchmarking
        // var duration = new Date().getTime() - time_start;
        // console.log('Encoding time: '+ currentQuality + 'ms');
        //

        return jpegDataUri;
      };

      function setQuality(quality) {
        if (quality <= 0) {
          quality = 1;
        }

        if (quality > 100) {
          quality = 100;
        }

        if (currentQuality == quality) return; // don't recalc if unchanged

        var sf = 0;

        if (quality < 50) {
          sf = Math.floor(5000 / quality);
        } else {
          sf = Math.floor(200 - quality * 2);
        }

        initQuantTables(sf);
        currentQuality = quality; // console.log('Quality set to: '+quality +'%');
      }

      function init() {
        // var time_start = new Date().getTime();
        if (!quality) quality = 50; // Create tables

        initCharLookupTable();
        initHuffmanTbl();
        initCategoryNumber();
        initRGBYUVTable();
        setQuality(quality); // var duration = new Date().getTime() - time_start;
        // console.log('Initialization '+ duration + 'ms');
      }

      init();
    }

    ;

    JPEGEncoder.encode = function (data, quality) {
      var encoder = new JPEGEncoder(quality);
      return encoder.encode(data);
    };

    return JPEGEncoder;
  });
  /**
   * @fileOverview Fix android canvas.toDataUrl bug.
   */

  define('runtime/html5/androidpatch', ['runtime/html5/util', 'runtime/html5/jpegencoder', 'base'], function (Util, encoder, Base) {
    var origin = Util.canvasToDataUrl,
        supportJpeg;

    Util.canvasToDataUrl = function (canvas, type, quality) {
      var ctx, w, h, fragement, parts; // 非android手机直接跳过。

      if (!Base.os.android) {
        return origin.apply(null, arguments);
      } // 检测是否canvas支持jpeg导出，根据数据格式来判断。
      // JPEG 前两位分别是：255, 216


      if (type === 'image/jpeg' && typeof supportJpeg === 'undefined') {
        fragement = origin.apply(null, arguments);
        parts = fragement.split(',');

        if (~parts[0].indexOf('base64')) {
          fragement = atob(parts[1]);
        } else {
          fragement = decodeURIComponent(parts[1]);
        }

        fragement = fragement.substring(0, 2);
        supportJpeg = fragement.charCodeAt(0) === 255 && fragement.charCodeAt(1) === 216;
      } // 只有在android环境下才修复


      if (type === 'image/jpeg' && !supportJpeg) {
        w = canvas.width;
        h = canvas.height;
        ctx = canvas.getContext('2d');
        return encoder.encode(ctx.getImageData(0, 0, w, h), quality);
      }

      return origin.apply(null, arguments);
    };
  });
  /**
   * @fileOverview Image
   */

  define('runtime/html5/image', ['base', 'runtime/html5/runtime', 'runtime/html5/util'], function (Base, Html5Runtime, Util) {
    var BLANK = 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D';
    return Html5Runtime.register('Image', {
      // flag: 标记是否被修改过。
      modified: false,
      init: function () {
        var me = this,
            img = new Image();

        img.onload = function () {
          me._info = {
            type: me.type,
            width: this.width,
            height: this.height
          }; //debugger;
          // 读取meta信息。

          if (!me._metas && 'image/jpeg' === me.type) {
            Util.parseMeta(me._blob, function (error, ret) {
              me._metas = ret;
              me.owner.trigger('load');
            });
          } else {
            me.owner.trigger('load');
          }
        };

        img.onerror = function () {
          me.owner.trigger('error');
        };

        me._img = img;
      },
      loadFromBlob: function (blob) {
        var me = this,
            img = me._img;
        me._blob = blob;
        me.type = blob.type;
        img.src = Util.createObjectURL(blob.getSource());
        me.owner.once('load', function () {
          Util.revokeObjectURL(img.src);
        });
      },
      resize: function (width, height) {
        var canvas = this._canvas || (this._canvas = document.createElement('canvas'));

        this._resize(this._img, canvas, width, height);

        this._blob = null; // 没用了，可以删掉了。

        this.modified = true;
        this.owner.trigger('complete', 'resize');
      },
      crop: function (x, y, w, h, s) {
        var cvs = this._canvas || (this._canvas = document.createElement('canvas')),
            opts = this.options,
            img = this._img,
            iw = img.naturalWidth,
            ih = img.naturalHeight,
            orientation = this.getOrientation();
        s = s || 1; // todo 解决 orientation 的问题。
        // values that require 90 degree rotation
        // if ( ~[ 5, 6, 7, 8 ].indexOf( orientation ) ) {
        //     switch ( orientation ) {
        //         case 6:
        //             tmp = x;
        //             x = y;
        //             y = iw * s - tmp - w;
        //             console.log(ih * s, tmp, w)
        //             break;
        //     }
        //     (w ^= h, h ^= w, w ^= h);
        // }

        cvs.width = w;
        cvs.height = h;
        opts.preserveHeaders || this._rotate2Orientaion(cvs, orientation);

        this._renderImageToCanvas(cvs, img, -x, -y, iw * s, ih * s);

        this._blob = null; // 没用了，可以删掉了。

        this.modified = true;
        this.owner.trigger('complete', 'crop');
      },
      getAsBlob: function (type) {
        var blob = this._blob,
            opts = this.options,
            canvas;
        type = type || this.type; // blob需要重新生成。

        if (this.modified || this.type !== type) {
          canvas = this._canvas;

          if (type === 'image/jpeg') {
            blob = Util.canvasToDataUrl(canvas, type, opts.quality);

            if (opts.preserveHeaders && this._metas && this._metas.imageHead) {
              blob = Util.dataURL2ArrayBuffer(blob);
              blob = Util.updateImageHead(blob, this._metas.imageHead);
              blob = Util.arrayBufferToBlob(blob, type);
              return blob;
            }
          } else {
            blob = Util.canvasToDataUrl(canvas, type);
          }

          blob = Util.dataURL2Blob(blob);
        }

        return blob;
      },
      getAsDataUrl: function (type) {
        var opts = this.options;
        type = type || this.type;

        if (type === 'image/jpeg') {
          return Util.canvasToDataUrl(this._canvas, type, opts.quality);
        } else {
          return this._canvas.toDataURL(type);
        }
      },
      getOrientation: function () {
        return this._metas && this._metas.exif && this._metas.exif.get('Orientation') || 1;
      },
      info: function (val) {
        // setter
        if (val) {
          this._info = val;
          return this;
        } // getter


        return this._info;
      },
      meta: function (val) {
        // setter
        if (val) {
          this._metas = val;
          return this;
        } // getter


        return this._metas;
      },
      destroy: function () {
        var canvas = this._canvas;
        this._img.onload = null;

        if (canvas) {
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = canvas.height = 0;
          this._canvas = null;
        } // 释放内存。非常重要，否则释放不了image的内存。


        this._img.src = BLANK;
        this._img = this._blob = null;
      },
      _resize: function (img, cvs, width, height) {
        var opts = this.options,
            naturalWidth = img.width,
            naturalHeight = img.height,
            orientation = this.getOrientation(),
            scale,
            w,
            h,
            x,
            y; // values that require 90 degree rotation

        if (~[5, 6, 7, 8].indexOf(orientation)) {
          // 交换width, height的值。
          width ^= height;
          height ^= width;
          width ^= height;
        }

        scale = Math[opts.crop ? 'max' : 'min'](width / naturalWidth, height / naturalHeight); // 不允许放大。

        opts.allowMagnify || (scale = Math.min(1, scale));
        w = naturalWidth * scale;
        h = naturalHeight * scale;

        if (opts.crop) {
          cvs.width = width;
          cvs.height = height;
        } else {
          cvs.width = w;
          cvs.height = h;
        }

        x = (cvs.width - w) / 2;
        y = (cvs.height - h) / 2;
        opts.preserveHeaders || this._rotate2Orientaion(cvs, orientation);

        this._renderImageToCanvas(cvs, img, x, y, w, h);
      },
      _rotate2Orientaion: function (canvas, orientation) {
        var width = canvas.width,
            height = canvas.height,
            ctx = canvas.getContext('2d');

        switch (orientation) {
          case 5:
          case 6:
          case 7:
          case 8:
            canvas.width = height;
            canvas.height = width;
            break;
        }

        switch (orientation) {
          case 2:
            // horizontal flip
            ctx.translate(width, 0);
            ctx.scale(-1, 1);
            break;

          case 3:
            // 180 rotate left
            ctx.translate(width, height);
            ctx.rotate(Math.PI);
            break;

          case 4:
            // vertical flip
            ctx.translate(0, height);
            ctx.scale(1, -1);
            break;

          case 5:
            // vertical flip + 90 rotate right
            ctx.rotate(0.5 * Math.PI);
            ctx.scale(1, -1);
            break;

          case 6:
            // 90 rotate right
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(0, -height);
            break;

          case 7:
            // horizontal flip + 90 rotate right
            ctx.rotate(0.5 * Math.PI);
            ctx.translate(width, -height);
            ctx.scale(-1, 1);
            break;

          case 8:
            // 90 rotate left
            ctx.rotate(-0.5 * Math.PI);
            ctx.translate(-width, 0);
            break;
        }
      },
      // https://github.com/stomita/ios-imagefile-megapixel/
      // blob/master/src/megapix-image.js
      _renderImageToCanvas: function () {
        // 如果不是ios, 不需要这么复杂！
        if (!Base.os.ios) {
          return function (canvas) {
            var args = Base.slice(arguments, 1),
                ctx = canvas.getContext('2d');
            ctx.drawImage.apply(ctx, args);
          };
        }
        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into
         * canvas for some images.
         */


        function detectVerticalSquash(img, iw, ih) {
          var canvas = document.createElement('canvas'),
              ctx = canvas.getContext('2d'),
              sy = 0,
              ey = ih,
              py = ih,
              data,
              alpha,
              ratio;
          canvas.width = 1;
          canvas.height = ih;
          ctx.drawImage(img, 0, 0);
          data = ctx.getImageData(0, 0, 1, ih).data; // search image edge pixel position in case
          // it is squashed vertically.

          while (py > sy) {
            alpha = data[(py - 1) * 4 + 3];

            if (alpha === 0) {
              ey = py;
            } else {
              sy = py;
            }

            py = ey + sy >> 1;
          }

          ratio = py / ih;
          return ratio === 0 ? 1 : ratio;
        } // fix ie7 bug
        // http://stackoverflow.com/questions/11929099/
        // html5-canvas-drawimage-ratio-bug-ios


        if (Base.os.ios >= 7) {
          return function (canvas, img, x, y, w, h) {
            var iw = img.naturalWidth,
                ih = img.naturalHeight,
                vertSquashRatio = detectVerticalSquash(img, iw, ih);
            return canvas.getContext('2d').drawImage(img, 0, 0, iw * vertSquashRatio, ih * vertSquashRatio, x, y, w, h);
          };
        }
        /**
         * Detect subsampling in loaded image.
         * In iOS, larger images than 2M pixels may be
         * subsampled in rendering.
         */


        function detectSubsampling(img) {
          var iw = img.naturalWidth,
              ih = img.naturalHeight,
              canvas,
              ctx; // subsampling may happen overmegapixel image

          if (iw * ih > 1024 * 1024) {
            canvas = document.createElement('canvas');
            canvas.width = canvas.height = 1;
            ctx = canvas.getContext('2d');
            ctx.drawImage(img, -iw + 1, 0); // subsampled image becomes half smaller in rendering size.
            // check alpha channel value to confirm image is covering
            // edge pixel or not. if alpha value is 0
            // image is not covering, hence subsampled.

            return ctx.getImageData(0, 0, 1, 1).data[3] === 0;
          } else {
            return false;
          }
        }

        return function (canvas, img, x, y, width, height) {
          var iw = img.naturalWidth,
              ih = img.naturalHeight,
              ctx = canvas.getContext('2d'),
              subsampled = detectSubsampling(img),
              doSquash = this.type === 'image/jpeg',
              d = 1024,
              sy = 0,
              dy = 0,
              tmpCanvas,
              tmpCtx,
              vertSquashRatio,
              dw,
              dh,
              sx,
              dx;

          if (subsampled) {
            iw /= 2;
            ih /= 2;
          }

          ctx.save();
          tmpCanvas = document.createElement('canvas');
          tmpCanvas.width = tmpCanvas.height = d;
          tmpCtx = tmpCanvas.getContext('2d');
          vertSquashRatio = doSquash ? detectVerticalSquash(img, iw, ih) : 1;
          dw = Math.ceil(d * width / iw);
          dh = Math.ceil(d * height / ih / vertSquashRatio);

          while (sy < ih) {
            sx = 0;
            dx = 0;

            while (sx < iw) {
              tmpCtx.clearRect(0, 0, d, d);
              tmpCtx.drawImage(img, -sx, -sy);
              ctx.drawImage(tmpCanvas, 0, 0, d, d, x + dx, y + dy, dw, dh);
              sx += d;
              dx += dw;
            }

            sy += d;
            dy += dh;
          }

          ctx.restore();
          tmpCanvas = tmpCtx = null;
        };
      }()
    });
  });
  /**
   * @fileOverview Transport
   * @todo 支持chunked传输，优势：
   * 可以将大文件分成小块，挨个传输，可以提高大文件成功率，当失败的时候，也只需要重传那小部分，
   * 而不需要重头再传一次。另外断点续传也需要用chunked方式。
   */

  define('runtime/html5/transport', ['base', 'runtime/html5/runtime'], function (Base, Html5Runtime) {
    var noop = Base.noop,
        $ = Base.$;
    return Html5Runtime.register('Transport', {
      init: function () {
        this._status = 0;
        this._response = null;
      },
      send: function () {
        var owner = this.owner,
            opts = this.options,
            xhr = this._initAjax(),
            blob = owner._blob,
            server = opts.server,
            formData,
            binary,
            fr;

        if (opts.sendAsBinary) {
          server += (/\?/.test(server) ? '&' : '?') + $.param(owner._formData);
          binary = blob.getSource();
        } else {
          formData = new FormData();
          $.each(owner._formData, function (k, v) {
            formData.append(k, v);
          });
          formData.append(opts.fileVal, blob.getSource(), opts.filename || owner._formData.name || '');
        }

        if (opts.withCredentials && 'withCredentials' in xhr) {
          xhr.open(opts.method, server, true);
          xhr.withCredentials = true;
        } else {
          xhr.open(opts.method, server);
        }

        this._setRequestHeader(xhr, opts.headers);

        if (binary) {
          // 强制设置成 content-type 为文件流。
          xhr.overrideMimeType && xhr.overrideMimeType('application/octet-stream'); // android直接发送blob会导致服务端接收到的是空文件。
          // bug详情。
          // https://code.google.com/p/android/issues/detail?id=39882
          // 所以先用fileReader读取出来再通过arraybuffer的方式发送。

          if (Base.os.android) {
            fr = new FileReader();

            fr.onload = function () {
              xhr.send(this.result);
              fr = fr.onload = null;
            };

            fr.readAsArrayBuffer(binary);
          } else {
            xhr.send(binary);
          }
        } else {
          xhr.send(formData);
        }
      },
      getResponse: function () {
        return this._response;
      },
      getResponseAsJson: function () {
        return this._parseJson(this._response);
      },
      getStatus: function () {
        return this._status;
      },
      abort: function () {
        var xhr = this._xhr;

        if (xhr) {
          xhr.upload.onprogress = noop;
          xhr.onreadystatechange = noop;
          xhr.abort();
          this._xhr = xhr = null;
        }
      },
      destroy: function () {
        this.abort();
      },
      _initAjax: function () {
        var me = this,
            xhr = new XMLHttpRequest(),
            opts = this.options;

        if (opts.withCredentials && !('withCredentials' in xhr) && typeof XDomainRequest !== 'undefined') {
          xhr = new XDomainRequest();
        }

        xhr.upload.onprogress = function (e) {
          var percentage = 0;

          if (e.lengthComputable) {
            percentage = e.loaded / e.total;
          }

          return me.trigger('progress', percentage);
        };

        xhr.onreadystatechange = function () {
          if (xhr.readyState !== 4) {
            return;
          }

          xhr.upload.onprogress = noop;
          xhr.onreadystatechange = noop;
          me._xhr = null;
          me._status = xhr.status;

          if (xhr.status >= 200 && xhr.status < 300) {
            me._response = xhr.responseText;
            return me.trigger('load');
          } else if (xhr.status >= 500 && xhr.status < 600) {
            me._response = xhr.responseText;
            return me.trigger('error', 'server');
          }

          return me.trigger('error', me._status ? 'http' : 'abort');
        };

        me._xhr = xhr;
        return xhr;
      },
      _setRequestHeader: function (xhr, headers) {
        $.each(headers, function (key, val) {
          xhr.setRequestHeader(key, val);
        });
      },
      _parseJson: function (str) {
        var json;

        try {
          json = JSON.parse(str);
        } catch (ex) {
          json = {};
        }

        return json;
      }
    });
  });
  /**
   * @fileOverview  Transport flash实现
   */

  define('runtime/html5/md5', ['runtime/html5/runtime'], function (FlashRuntime) {
    /*
     * Fastest md5 implementation around (JKM md5)
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
      return a + b & 0xFFFFFFFF;
    },
        cmn = function (q, a, b, x, s, t) {
      a = add32(add32(a, q), add32(x, t));
      return add32(a << s | a >>> 32 - s, b);
    },
        ff = function (a, b, c, d, x, s, t) {
      return cmn(b & c | ~b & d, a, b, x, s, t);
    },
        gg = function (a, b, c, d, x, s, t) {
      return cmn(b & d | c & ~d, a, b, x, s, t);
    },
        hh = function (a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
    },
        ii = function (a, b, c, d, x, s, t) {
      return cmn(c ^ (b | ~d), a, b, x, s, t);
    },
        md5cycle = function (x, k) {
      var a = x[0],
          b = x[1],
          c = x[2],
          d = x[3];
      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17, 606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12, 1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7, 1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7, 1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22, 1236535329);
      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14, 643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9, 38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5, 568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20, 1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14, 1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);
      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16, 1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11, 1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4, 681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23, 76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16, 530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);
      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10, 1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6, 1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6, 1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21, 1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15, 718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);
      x[0] = add32(a, x[0]);
      x[1] = add32(b, x[1]);
      x[2] = add32(c, x[2]);
      x[3] = add32(d, x[3]);
    },

    /* there needs to be support for Unicode here,
       * unless we pretend that we can redefine the MD-5
       * algorithm for multi-byte characters (perhaps
       * by adding every four 16-bit characters and
       * shortening the sum to 32 bits). Otherwise
       * I suggest performing MD-5 as if every character
       * was two bytes--e.g., 0040 0025 = @%--but then
       * how will an ordinary MD-5 sum be matched?
       * There is no way to standardize text to something
       * like UTF-8 before transformation; speed cost is
       * utterly prohibitive. The JavaScript standard
       * itself needs to look at this: it should start
       * providing access to strings as preformed UTF-8
       * 8-bit unsigned value arrays.
       */
    md5blk = function (s) {
      var md5blks = [],
          i;
      /* Andy King said do it this way. */

      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }

      return md5blks;
    },
        md5blk_array = function (a) {
      var md5blks = [],
          i;
      /* Andy King said do it this way. */

      for (i = 0; i < 64; i += 4) {
        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
      }

      return md5blks;
    },
        md51 = function (s) {
      var n = s.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;

      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk(s.substring(i - 64, i)));
      }

      s = s.substring(i - 64);
      length = s.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
      }

      tail[i >> 2] |= 0x80 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      } // Beware that the final length might not fit in 32 bits so we take care of that


      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    },
        md51_array = function (a) {
      var n = a.length,
          state = [1732584193, -271733879, -1732584194, 271733878],
          i,
          length,
          tail,
          tmp,
          lo,
          hi;

      for (i = 64; i <= n; i += 64) {
        md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
      } // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
      // containing the last element of the parent array if the sub array specified starts
      // beyond the length of the parent array - weird.
      // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue


      a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
      length = a.length;
      tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= a[i] << (i % 4 << 3);
      }

      tail[i >> 2] |= 0x80 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      } // Beware that the final length might not fit in 32 bits so we take care of that


      tmp = n * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(state, tail);
      return state;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'],
        rhex = function (n) {
      var s = '',
          j;

      for (j = 0; j < 4; j += 1) {
        s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
      }

      return s;
    },
        hex = function (x) {
      var i;

      for (i = 0; i < x.length; i += 1) {
        x[i] = rhex(x[i]);
      }

      return x.join('');
    },
        md5 = function (s) {
      return hex(md51(s));
    },
        ////////////////////////////////////////////////////////////////////////////

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */
    SparkMD5 = function () {
      // call reset to init the instance
      this.reset();
    }; // In some cases the fast add32 function cannot be used..


    if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
      add32 = function (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF),
            msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xFFFF;
      };
    }
    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */


    SparkMD5.prototype.append = function (str) {
      // converts the string to utf8 bytes if necessary
      if (/[\u0080-\uFFFF]/.test(str)) {
        str = unescape(encodeURIComponent(str));
      } // then append as binary


      this.appendBinary(str);
      return this;
    };
    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */


    SparkMD5.prototype.appendBinary = function (contents) {
      this._buff += contents;
      this._length += contents.length;
      var length = this._buff.length,
          i;

      for (i = 64; i <= length; i += 64) {
        md5cycle(this._state, md5blk(this._buff.substring(i - 64, i)));
      }

      this._buff = this._buff.substr(i - 64);
      return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     * Use the raw parameter to obtain the raw result instead of the hex one.
     *
     * @param {Boolean} raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */


    SparkMD5.prototype.end = function (raw) {
      var buff = this._buff,
          length = buff.length,
          i,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          ret;

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
      }

      this._finish(tail, length);

      ret = !!raw ? this._state : hex(this._state);
      this.reset();
      return ret;
    };
    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */


    SparkMD5.prototype._finish = function (tail, length) {
      var i = length,
          tmp,
          lo,
          hi;
      tail[i >> 2] |= 0x80 << (i % 4 << 3);

      if (i > 55) {
        md5cycle(this._state, tail);

        for (i = 0; i < 16; i += 1) {
          tail[i] = 0;
        }
      } // Do the final computation based on the tail and length
      // Beware that the final length may not fit in 32 bits so we take care of that


      tmp = this._length * 8;
      tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
      lo = parseInt(tmp[2], 16);
      hi = parseInt(tmp[1], 16) || 0;
      tail[14] = lo;
      tail[15] = hi;
      md5cycle(this._state, tail);
    };
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */


    SparkMD5.prototype.reset = function () {
      this._buff = "";
      this._length = 0;
      this._state = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    /**
     * Releases memory used by the incremental buffer and other aditional
     * resources. If you plan to use the instance again, use reset instead.
     */


    SparkMD5.prototype.destroy = function () {
      delete this._state;
      delete this._buff;
      delete this._length;
    };
    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */


    SparkMD5.hash = function (str, raw) {
      // converts the string to utf8 bytes if necessary
      if (/[\u0080-\uFFFF]/.test(str)) {
        str = unescape(encodeURIComponent(str));
      }

      var hash = md51(str);
      return !!raw ? hash : hex(hash);
    };
    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */


    SparkMD5.hashBinary = function (content, raw) {
      var hash = md51(content);
      return !!raw ? hash : hex(hash);
    };
    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */


    SparkMD5.ArrayBuffer = function () {
      // call reset to init the instance
      this.reset();
    }; ////////////////////////////////////////////////////////////////////////////

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */


    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
      // TODO: we could avoid the concatenation here but the algorithm would be more complex
      //       if you find yourself needing extra performance, please make a PR.
      var buff = this._concatArrayBuffer(this._buff, arr),
          length = buff.length,
          i;

      this._length += arr.byteLength;

      for (i = 64; i <= length; i += 64) {
        md5cycle(this._state, md5blk_array(buff.subarray(i - 64, i)));
      } // Avoids IE10 weirdness (documented above)


      this._buff = i - 64 < length ? buff.subarray(i - 64) : new Uint8Array(0);
      return this;
    };
    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     * Use the raw parameter to obtain the raw result instead of the hex one.
     *
     * @param {Boolean} raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */


    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
      var buff = this._buff,
          length = buff.length,
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          i,
          ret;

      for (i = 0; i < length; i += 1) {
        tail[i >> 2] |= buff[i] << (i % 4 << 3);
      }

      this._finish(tail, length);

      ret = !!raw ? this._state : hex(this._state);
      this.reset();
      return ret;
    };

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */

    SparkMD5.ArrayBuffer.prototype.reset = function () {
      this._buff = new Uint8Array(0);
      this._length = 0;
      this._state = [1732584193, -271733879, -1732584194, 271733878];
      return this;
    };
    /**
     * Releases memory used by the incremental buffer and other aditional
     * resources. If you plan to use the instance again, use reset instead.
     */


    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
    /**
     * Concats two array buffers, returning a new one.
     *
     * @param  {ArrayBuffer} first  The first array buffer
     * @param  {ArrayBuffer} second The second array buffer
     *
     * @return {ArrayBuffer} The new array buffer
     */

    SparkMD5.ArrayBuffer.prototype._concatArrayBuffer = function (first, second) {
      var firstLength = first.length,
          result = new Uint8Array(firstLength + second.byteLength);
      result.set(first);
      result.set(new Uint8Array(second), firstLength);
      return result;
    };
    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw result, false to get the hex result
     *
     * @return {String|Array} The result
     */


    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
      var hash = md51_array(new Uint8Array(arr));
      return !!raw ? hash : hex(hash);
    };

    return FlashRuntime.register('Md5', {
      init: function () {// do nothing.
      },
      loadFromBlob: function (file) {
        var blob = file.getSource(),
            chunkSize = 2 * 1024 * 1024,
            chunks = Math.ceil(blob.size / chunkSize),
            chunk = 0,
            owner = this.owner,
            spark = new SparkMD5.ArrayBuffer(),
            me = this,
            blobSlice = blob.mozSlice || blob.webkitSlice || blob.slice,
            loadNext,
            fr;
        fr = new FileReader();

        loadNext = function () {
          var start, end;
          start = chunk * chunkSize;
          end = Math.min(start + chunkSize, blob.size);

          fr.onload = function (e) {
            spark.append(e.target.result);
            owner.trigger('progress', {
              total: file.size,
              loaded: end
            });
          };

          fr.onloadend = function () {
            fr.onloadend = fr.onload = null;

            if (++chunk < chunks) {
              setTimeout(loadNext, 1);
            } else {
              setTimeout(function () {
                owner.trigger('load');
                me.result = spark.end();
                loadNext = file = blob = spark = null;
                owner.trigger('complete');
              }, 50);
            }
          };

          fr.readAsArrayBuffer(blobSlice.call(blob, start, end));
        };

        loadNext();
      },
      getResult: function () {
        return this.result;
      }
    });
  });
  /**
   * @fileOverview FlashRuntime
   */

  define('runtime/flash/runtime', ['base', 'runtime/runtime', 'runtime/compbase'], function (Base, Runtime, CompBase) {
    var $ = Base.$,
        type = 'flash',
        components = {};

    function getFlashVersion() {
      var version;

      try {
        version = navigator.plugins['Shockwave Flash'];
        version = version.description;
      } catch (ex) {
        try {
          version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');
        } catch (ex2) {
          version = '0.0';
        }
      }

      version = version.match(/\d+/g);
      return parseFloat(version[0] + '.' + version[1], 10);
    }

    function FlashRuntime() {
      var pool = {},
          clients = {},
          destroy = this.destroy,
          me = this,
          jsreciver = Base.guid('webuploader_');
      Runtime.apply(me, arguments);
      me.type = type; // 这个方法的调用者，实际上是RuntimeClient

      me.exec = function (comp, fn
      /*, args...*/
      ) {
        var client = this,
            uid = client.uid,
            args = Base.slice(arguments, 2),
            instance;
        clients[uid] = client;

        if (components[comp]) {
          if (!pool[uid]) {
            pool[uid] = new components[comp](client, me);
          }

          instance = pool[uid];

          if (instance[fn]) {
            return instance[fn].apply(instance, args);
          }
        }

        return me.flashExec.apply(client, arguments);
      };

      function handler(evt, obj) {
        var type = evt.type || evt,
            parts,
            uid;
        parts = type.split('::');
        uid = parts[0];
        type = parts[1]; // console.log.apply( console, arguments );

        if (type === 'Ready' && uid === me.uid) {
          me.trigger('ready');
        } else if (clients[uid]) {
          clients[uid].trigger(type.toLowerCase(), evt, obj);
        } // Base.log( evt, obj );

      } // flash的接受器。


      window[jsreciver] = function () {
        var args = arguments; // 为了能捕获得到。

        setTimeout(function () {
          handler.apply(null, args);
        }, 1);
      };

      this.jsreciver = jsreciver;

      this.destroy = function () {
        // @todo 删除池子中的所有实例
        return destroy && destroy.apply(this, arguments);
      };

      this.flashExec = function (comp, fn) {
        var flash = me.getFlash(),
            args = Base.slice(arguments, 2);
        return flash.exec(this.uid, comp, fn, args);
      }; // @todo

    }

    Base.inherits(Runtime, {
      constructor: FlashRuntime,
      init: function () {
        var container = this.getContainer(),
            opts = this.options,
            html; // if not the minimal height, shims are not initialized
        // in older browsers (e.g FF3.6, IE6,7,8, Safari 4.0,5.0, etc)

        container.css({
          position: 'absolute',
          top: '-8px',
          left: '-8px',
          width: '9px',
          height: '9px',
          overflow: 'hidden'
        }); // insert flash object

        html = '<object id="' + this.uid + '" type="application/' + 'x-shockwave-flash" data="' + opts.swf + '" ';

        if (Base.browser.ie) {
          html += 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ';
        }

        html += 'width="100%" height="100%" style="outline:0">' + '<param name="movie" value="' + opts.swf + '" />' + '<param name="flashvars" value="uid=' + this.uid + '&jsreciver=' + this.jsreciver + '" />' + '<param name="wmode" value="transparent" />' + '<param name="allowscriptaccess" value="always" />' + '</object>';
        container.html(html);
      },
      getFlash: function () {
        if (this._flash) {
          return this._flash;
        }

        this._flash = $('#' + this.uid).get(0);
        return this._flash;
      }
    });

    FlashRuntime.register = function (name, component) {
      component = components[name] = Base.inherits(CompBase, $.extend({
        // @todo fix this later
        flashExec: function () {
          var owner = this.owner,
              runtime = this.getRuntime();
          return runtime.flashExec.apply(owner, arguments);
        }
      }, component));
      return component;
    };

    if (getFlashVersion() >= 11.4) {
      Runtime.addRuntime(type, FlashRuntime);
    }

    return FlashRuntime;
  });
  /**
   * @fileOverview FilePicker
   */

  define('runtime/flash/filepicker', ['base', 'runtime/flash/runtime'], function (Base, FlashRuntime) {
    var $ = Base.$;
    return FlashRuntime.register('FilePicker', {
      init: function (opts) {
        var copy = $.extend({}, opts),
            len,
            i; // 修复Flash再没有设置title的情况下无法弹出flash文件选择框的bug.

        len = copy.accept && copy.accept.length;

        for (i = 0; i < len; i++) {
          if (!copy.accept[i].title) {
            copy.accept[i].title = 'Files';
          }
        }

        delete copy.button;
        delete copy.id;
        delete copy.container;
        this.flashExec('FilePicker', 'init', copy);
      },
      destroy: function () {
        this.flashExec('FilePicker', 'destroy');
      }
    });
  });
  /**
   * @fileOverview 图片压缩
   */

  define('runtime/flash/image', ['runtime/flash/runtime'], function (FlashRuntime) {
    return FlashRuntime.register('Image', {
      // init: function( options ) {
      //     var owner = this.owner;
      //     this.flashExec( 'Image', 'init', options );
      //     owner.on( 'load', function() {
      //         debugger;
      //     });
      // },
      loadFromBlob: function (blob) {
        var owner = this.owner;
        owner.info() && this.flashExec('Image', 'info', owner.info());
        owner.meta() && this.flashExec('Image', 'meta', owner.meta());
        this.flashExec('Image', 'loadFromBlob', blob.uid);
      }
    });
  });
  /**
   * @fileOverview  Transport flash实现
   */

  define('runtime/flash/transport', ['base', 'runtime/flash/runtime', 'runtime/client'], function (Base, FlashRuntime, RuntimeClient) {
    var $ = Base.$;
    return FlashRuntime.register('Transport', {
      init: function () {
        this._status = 0;
        this._response = null;
        this._responseJson = null;
      },
      send: function () {
        var owner = this.owner,
            opts = this.options,
            xhr = this._initAjax(),
            blob = owner._blob,
            server = opts.server,
            binary;

        xhr.connectRuntime(blob.ruid);

        if (opts.sendAsBinary) {
          server += (/\?/.test(server) ? '&' : '?') + $.param(owner._formData);
          binary = blob.uid;
        } else {
          $.each(owner._formData, function (k, v) {
            xhr.exec('append', k, v);
          });
          xhr.exec('appendBlob', opts.fileVal, blob.uid, opts.filename || owner._formData.name || '');
        }

        this._setRequestHeader(xhr, opts.headers);

        xhr.exec('send', {
          method: opts.method,
          url: server,
          forceURLStream: opts.forceURLStream,
          mimeType: 'application/octet-stream'
        }, binary);
      },
      getStatus: function () {
        return this._status;
      },
      getResponse: function () {
        return this._response || '';
      },
      getResponseAsJson: function () {
        return this._responseJson;
      },
      abort: function () {
        var xhr = this._xhr;

        if (xhr) {
          xhr.exec('abort');
          xhr.destroy();
          this._xhr = xhr = null;
        }
      },
      destroy: function () {
        this.abort();
      },
      _initAjax: function () {
        var me = this,
            xhr = new RuntimeClient('XMLHttpRequest');
        xhr.on('uploadprogress progress', function (e) {
          var percent = e.loaded / e.total;
          percent = Math.min(1, Math.max(0, percent));
          return me.trigger('progress', percent);
        });
        xhr.on('load', function () {
          var status = xhr.exec('getStatus'),
              readBody = false,
              err = '',
              p;
          xhr.off();
          me._xhr = null;

          if (status >= 200 && status < 300) {
            readBody = true;
          } else if (status >= 500 && status < 600) {
            readBody = true;
            err = 'server';
          } else {
            err = 'http';
          }

          if (readBody) {
            me._response = xhr.exec('getResponse');
            me._response = decodeURIComponent(me._response); // flash 处理可能存在 bug, 没辙只能靠 js 了
            // try {
            //     me._responseJson = xhr.exec('getResponseAsJson');
            // } catch ( error ) {

            p = function (s) {
              try {
                if (window.JSON && window.JSON.parse) {
                  return JSON.parse(s);
                }

                return new Function('return ' + s).call();
              } catch (err) {
                return {};
              }
            };

            me._responseJson = me._response ? p(me._response) : {}; // }
          }

          xhr.destroy();
          xhr = null;
          return err ? me.trigger('error', err) : me.trigger('load');
        });
        xhr.on('error', function () {
          xhr.off();
          me._xhr = null;
          me.trigger('error', 'http');
        });
        me._xhr = xhr;
        return xhr;
      },
      _setRequestHeader: function (xhr, headers) {
        $.each(headers, function (key, val) {
          xhr.exec('setRequestHeader', key, val);
        });
      }
    });
  });
  /**
   * @fileOverview Blob Html实现
   */

  define('runtime/flash/blob', ['runtime/flash/runtime', 'lib/blob'], function (FlashRuntime, Blob) {
    return FlashRuntime.register('Blob', {
      slice: function (start, end) {
        var blob = this.flashExec('Blob', 'slice', start, end);
        return new Blob(this.getRuid(), blob);
      }
    });
  });
  /**
   * @fileOverview  Md5 flash实现
   */

  define('runtime/flash/md5', ['runtime/flash/runtime'], function (FlashRuntime) {
    return FlashRuntime.register('Md5', {
      init: function () {// do nothing.
      },
      loadFromBlob: function (blob) {
        return this.flashExec('Md5', 'loadFromBlob', blob.uid);
      }
    });
  });
  /**
   * @fileOverview 完全版本。
   */

  define('preset/all', ['base', // widgets
  'widgets/filednd', 'widgets/filepaste', 'widgets/filepicker', 'widgets/image', 'widgets/queue', 'widgets/runtime', 'widgets/upload', 'widgets/validator', 'widgets/md5', // runtimes
  // html5
  'runtime/html5/blob', 'runtime/html5/dnd', 'runtime/html5/filepaste', 'runtime/html5/filepicker', 'runtime/html5/imagemeta/exif', 'runtime/html5/androidpatch', 'runtime/html5/image', 'runtime/html5/transport', 'runtime/html5/md5', // flash
  'runtime/flash/filepicker', 'runtime/flash/image', 'runtime/flash/transport', 'runtime/flash/blob', 'runtime/flash/md5'], function (Base) {
    return Base;
  });
  /**
   * @fileOverview 日志组件，主要用来收集错误信息，可以帮助 webuploader 更好的定位问题和发展。
   *
   * 如果您不想要启用此功能，请在打包的时候去掉 log 模块。
   *
   * 或者可以在初始化的时候通过 options.disableWidgets 属性禁用。
   *
   * 如：
   * WebUploader.create({
   *     ...
   *
   *     disableWidgets: 'log',
   *
   *     ...
   * })
   */

  define('widgets/log', ['base', 'uploader', 'widgets/widget'], function (Base, Uploader) {
    var $ = Base.$,
        logUrl = ' http://static.tieba.baidu.com/tb/pms/img/st.gif??',
        product = (location.hostname || location.host || 'protected').toLowerCase(),
        // 只针对 baidu 内部产品用户做统计功能。
    enable = product && /baidu/i.exec(product),
        base;

    if (!enable) {
      return;
    }

    base = {
      dv: 3,
      master: 'webuploader',
      online: /test/.exec(product) ? 0 : 1,
      module: '',
      product: product,
      type: 0
    };

    function send(data) {
      var obj = $.extend({}, base, data),
          url = logUrl.replace(/^(.*)\?/, '$1' + $.param(obj)),
          image = new Image();
      image.src = url;
    }

    return Uploader.register({
      name: 'log',
      init: function () {
        var owner = this.owner,
            count = 0,
            size = 0;
        owner.on('error', function (code) {
          send({
            type: 2,
            c_error_code: code
          });
        }).on('uploadError', function (file, reason) {
          send({
            type: 2,
            c_error_code: 'UPLOAD_ERROR',
            c_reason: '' + reason
          });
        }).on('uploadComplete', function (file) {
          count++;
          size += file.size;
        }).on('uploadFinished', function () {
          send({
            c_count: count,
            c_size: size
          });
          count = size = 0;
        });
        send({
          c_usage: 1
        });
      }
    });
  });
  /**
   * @fileOverview Uploader上传类
   */

  define('webuploader', ['preset/all', 'widgets/log'], function (preset) {
    return preset;
  });
  var _require = require;
  return _require('webuploader');
});

/***/ }),

/***/ "./src/webUploader.js":
/*!****************************!*\
  !*** ./src/webUploader.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.4.1@jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webuploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webuploader */ "./node_modules/_webuploader@0.1.8@webuploader/dist/webuploader.fis.js");
/* harmony import */ var webuploader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webuploader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var webuploader_css_webuploader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webuploader/css/webuploader.css */ "./node_modules/_webuploader@0.1.8@webuploader/css/webuploader.css");
/* harmony import */ var webuploader_css_webuploader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webuploader_css_webuploader_css__WEBPACK_IMPORTED_MODULE_2__);




(function () {
  /** -- 变量定义 -- */
  let $dnd = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#dndBox'),
      // 拖拽框
  $list = $dnd.find('#thelist'),
      // 存放文件的列表
  $statusBar = $dnd.find('.status-bar'),
      // 状态栏
  $btnUpload = $statusBar.find('#ctlBtn'),
      // 开始上传的按钮
  $process = $statusBar.find('.process'),
      // 开始上传的按钮
  $tipInfo = $statusBar.find('.tip-info'),
      // 上传错误提示
  state = 'pending',
      // 全局状态 pending（初始状态）,ready（等待上传）,uploading（上传中）,paused（暂停）,finish（上传完成）
  totalPercent = {},
      // 存储文件进度，用于总进度条展示 {fileId:[fileSize,filePercent]}
  uploader; // WebUploader实例

  /** -- 初始化WebUploader实例 -- */

  uploader = webuploader__WEBPACK_IMPORTED_MODULE_1___default.a.create({
    // auto: false, // 选完文件后，是否自动上传
    swf: 'webuploader/dist/Uploader.swf',
    // swf文件路径
    // 文件接收服务端。
    server: 'http://localhost:8088/uploader/php/fileupload.php',
    // 选择文件的按钮。可选。
    // 内部根据当前运行是创建，可能是input元素，也可能是flash.
    pick: '#picker',
    // 拖拽容器
    dnd: '#dndBox',
    // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
    resize: false,
    fileNumLimit: 100 //限制上传个数

  });
  /** 当有文件被添加进队列的时候 -- */

  uploader.on('fileQueued', function (file) {
    // 生成文件列表
    let $file = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<div id="${file.id}" class="item">
        <span class="item-delete" title="删除">X</span>
        <span class="item-info"> ${file.name} </span>
        <span class="item-state">等待上传...</span>
        <div class="progress">
           <span class="progress-bar" role="progressbar" style="width: 0%"></span>
        </div>
        </div>`).appendTo($list); // 绑定删除事件

    $file.one('click', '.item-delete', () => {
      uploader.removeFile(file, true); // 队列中一并删除

      $file.remove(); // 清除html

      delete totalPercent[file.id];
      updateTotalBar();

      if (uploader.getFiles("QUEUED").length == 0) {
        // 如果队列中没有文件，则重置到初始状态
        setState("pending");
      }
    }); // 总进度条

    totalPercent[file.id] = [file.size, 0];
    statusChange(file); // 文件状态绑定

    updateTotalBar(); // 刷新全局进度条

    setState('ready'); // 修改状态
  });
  /** -- 单个文件上传过程中创建进度条实时显示。-- */

  uploader.on('uploadProgress', function (file, percentage) {
    let $item = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + file.id),
        $percent = $item.find('.progress .progress-bar');
    $item.find('.state').text('上传中');
    $percent.css('width', percentage * 100 + '%');
    !$percent.parent().hasClass("active") ? $percent.parent().addClass("active") : false; // 全局进度条

    totalPercent[file.id] = [file.size, percentage];
    updateTotalBar();
  });
  /** -- 全局状态监听 -- */

  uploader.on('all', function (type, file, percent) {
    switch (type) {
      // 整体状态控制
      case 'uploadFinished':
        setState('finish');
        break;

      case 'startUpload':
        setState('uploading');
        break;

      case 'stopUpload':
        setState('paused');
        break;
    }
  });
  /** -- 开始上传按钮 -- */

  $btnUpload.on('click', function () {
    if (state == 'uploading') {
      // 暂停
      uploader.stop(true); // 正在上传的文件也暂停
    } else if (state == 'ready' || state == 'paused') {
      // 继续上传
      uploader.upload();
    }
  });
  /** -- 重新上传，或忽略失败文件 -- */

  $tipInfo.on('click', 'span', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() == '重新上传') {
      uploader.retry();
    } else {
      setState('pending');
      uploader.reset(); // 忽略则重置队列
    }
  });
  /**
   * 设置全局状态
   * @param val
   */

  function setState(val) {
    if (val === state) {
      // 状态未改变，直接返回
      return;
    }

    $btnUpload.removeClass("state-" + state);
    $btnUpload.addClass("state-" + val);
    state = val; // 赋值给全局变量，state

    switch (state) {
      case 'pending':
        // 初始状态
        $dnd.addClass("dnd-bd"); // 加虚线

        $process.removeClass("active");
        $btnUpload.removeClass("active");
        $tipInfo.removeClass("active");
        $list.find('.item').remove(); // 删除队列dom

        uploader.reset(); // 重置队列，已上传成功的可以再上传

        uploader.refresh();
        break;

      case 'ready':
        // 待上传
        $dnd.removeClass("dnd-bd");
        $process.removeClass("active");
        $tipInfo.removeClass("active");
        $btnUpload.text("开始上传");
        $btnUpload.addClass("active");
        uploader.refresh();
        break;

      case 'uploading':
        // 正在上传
        $process.addClass("active");
        $tipInfo.removeClass("active");
        $btnUpload.addClass("active");
        $btnUpload.text("暂停上传");
        break;

      case 'paused':
        // 暂停
        $btnUpload.text("继续上传");
        break;

      case 'finish':
        $tipInfo.addClass("active");
        let stats = uploader.getStats(),
            state = "";

        if (stats.successNum && !stats.uploadFailNum) {
          alert(`${stats.successNum}个文件，全部上传成功`);
          state = 'pending'; // 回到初始状态
        } else {
          $tipInfo.html(`${stats.uploadFailNum}个文件上传失败，<span>重新上传</span>或<span>忽略</span>`);
          state = 'error';
        }

        setState(state); // 回到初始状态

        break;

      case 'error':
        $process.removeClass("active");
        $process.find(".process-bar").width(0);
        $process.find(".process-text").text('0%');
        $btnUpload.removeClass("active");
        uploader.refresh();
    }
  }
  /**
   * 总进度条
   */


  function updateTotalBar() {
    let totalSize = 0,
        // 文件总大小
    loadSize = 0; // 已经上传的文件大小

    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(totalPercent, function (i, v) {
      totalSize += v[0];
      loadSize += v[0] * v[1];
    });
    let percent = Math.round((totalSize ? loadSize / totalSize : 0) * 100) + '%';
    $statusBar.find(".process-bar").width(percent);
    $statusBar.find(".process-text").text(percent);
  }
  /**
   * 文件状态函数
   * @param file 文件对象
   */


  function statusChange(file) {
    file.on('statuschange', function (cur, prev) {
      console.log(cur);
      let $file = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + file.id),
          stateText = "等待上传...",
          stateClass = "item-state ",
          barClass = "progress-bar ";

      if (cur === 'queued') {
        // 进入队列
        totalPercent[file.id][1] = 0;
      } else if (cur === 'progress') {
        // 上传中
        totalPercent[file.id][1] = 1;
        stateText = "上传中";
      } else if (cur === 'interrupt') {
        // 上传暂停
        totalPercent[file.id][1] = 1;
        stateText = "上传暂停";
        stateClass += "item-state-stop";
      } else if (cur === 'error' || cur === 'invalid') {
        // 错误
        totalPercent[file.id][1] = 1;
        stateText = "上传出错";
        stateClass += "item-state-error";
        barClass += "bar-error";
      } else if (cur === 'complete') {
        // 上传完成，更改状态
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + file.id).find('.item-delete').remove(); // 删除

        stateText = "上传成功";
        stateClass += "item-state-success";
        barClass += "bar-success";
      }

      $file.find('.item-state').text(stateText);
      $file.find('.item-state').attr('class', stateClass);
      $file.find('.progress-bar').attr('class', barClass);
    });
  }
})();

/***/ }),

/***/ 2:
/*!**********************************!*\
  !*** multi ./src/webUploader.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\test\src\webUploader.js */"./src/webUploader.js");


/***/ })

/******/ });
//# sourceMappingURL=webUploader.js.map