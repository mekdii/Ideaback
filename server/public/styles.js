(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sis chelsea\Desktop\ContractManagementSystem\server\client\src\styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\n* Template Name: Gp - v2.0.0\n* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/\n* Author: BootstrapMade.com\n* License: https://bootstrapmade.com/license/\n*/\n\n/*--------------------------------------------------------------\n# General\n--------------------------------------------------------------*/\n\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  color: #444444;\n}\n\na {\n  color: #ffc451;\n}\n\na:hover {\n  color: #ffd584;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Raleway\", sans-serif;\n}\n\n/*--------------------------------------------------------------\n# Back to top button\n--------------------------------------------------------------*/\n\n.back-to-top {\n  position: fixed;\n  display: none;\n  right: 15px;\n  bottom: 15px;\n  z-index: 99999;\n}\n\n.back-to-top i {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n  background: #ffc451;\n  color: #151515;\n  transition: all 0.4s;\n}\n\n.back-to-top i:hover {\n  background: #151515;\n  color: #ffc451;\n}\n\n/*--------------------------------------------------------------\n# Preloader\n--------------------------------------------------------------*/\n\n#preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  overflow: hidden;\n  background: #151515;\n}\n\n#preloader:before {\n  content: \"\";\n  position: fixed;\n  top: calc(50% - 0px);\n  left: calc(50% - 30px);\n  border: 6px solid #ffc451;\n  border-top-color: #151515;\n  border-bottom-color: #151515;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  animation: animate-preloader 1s linear infinite;\n}\n\n@keyframes animate-preloader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*--------------------------------------------------------------\n# Disable aos animation delay on mobile devices\n--------------------------------------------------------------*/\n\n@media screen and (max-width: 768px) {\n  [data-aos-delay] {\n    transition-delay: 0 !important;\n  }\n}\n\n/*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n\n#header {\n  transition: all 0.5s;\n  z-index: 997;\n  padding: 15px 0;\n}\n\n#header.header-scrolled, header.header-inner-pages {\n  background:rgba(34, 28, 105, 0.603);\n}\n\n#header .logo {\n  font-size: 32px;\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n#header .logo a {\n  color: #fff;\n}\n\n#header .logo a span {\n  color: #ffc451;\n}\n\n#header .logo img {\n  max-height: 40px;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n\n/* Desktop Navigation */\n\n.nav-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu > ul {\n  display: flex;\n}\n\n.nav-menu > ul > li {\n  position: relative;\n  white-space: nowrap;\n  padding: 10px 0 10px 28px;\n}\n\n.nav-menu a {\n  display: block;\n  position: relative;\n  color: #fff;\n  transition: 0.3s;\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {\n  color: #ffc451;\n}\n\n.nav-menu .drop-down ul {\n  display: block;\n  position: absolute;\n  left: 14px;\n  top: calc(100% + 30px);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n  transition: 0.3s;\n}\n\n.nav-menu .drop-down:hover > ul {\n  opacity: 1;\n  top: 100%;\n  visibility: visible;\n}\n\n.nav-menu .drop-down li {\n  min-width: 180px;\n  position: relative;\n}\n\n.nav-menu .drop-down ul a {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  color: #151515;\n}\n\n.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {\n  color: #151515;\n  background: #ffc451;\n}\n\n.nav-menu .drop-down > a:after {\n  content: \"\\ea99\";\n  font-family: IcoFont;\n  padding-left: 5px;\n}\n\n.nav-menu .drop-down .drop-down ul {\n  top: 0;\n  left: calc(100% - 30px);\n}\n\n.nav-menu .drop-down .drop-down:hover > ul {\n  opacity: 1;\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu .drop-down .drop-down > a {\n  padding-right: 35px;\n}\n\n.nav-menu .drop-down .drop-down > a:after {\n  content: \"\\eaa0\";\n  font-family: IcoFont;\n  position: absolute;\n  right: 15px;\n}\n\n@media (max-width: 1366px) {\n  .nav-menu .drop-down .drop-down ul {\n    left: -90%;\n  }\n  .nav-menu .drop-down .drop-down:hover > ul {\n    left: -100%;\n  }\n  .nav-menu .drop-down .drop-down > a:after {\n    content: \"\\ea9d\";\n  }\n}\n\n/* Get Startet Button */\n\n.get-started-btn {\n  color: #fff;\n  border-radius: 4px;\n  padding: 7px 25px 8px 25px;\n  white-space: nowrap;\n  transition: 0.3s;\n  font-size: 14px;\n  display: inline-block;\n  border: 2px solid #ffc451;\n}\n\n.get-started-btn:hover {\n  background: #ffbb38;\n  color: #343a40;\n}\n\n@media (max-width: 768px) {\n  .get-started-btn {\n    margin: 0 48px 0 0;\n    padding: 7px 20px 8px 20px;\n  }\n}\n\n/* Mobile Navigation */\n\n.mobile-nav-toggle {\n  position: fixed;\n  top: 20px;\n  right: 15px;\n  z-index: 9998;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: right;\n}\n\n.mobile-nav-toggle i {\n  color: #fff;\n}\n\n.mobile-nav {\n  position: fixed;\n  top: 55px;\n  right: 15px;\n  bottom: 15px;\n  left: 15px;\n  z-index: 9999;\n  overflow-y: auto;\n  background: #fff;\n  transition: ease-in-out 0.2s;\n  opacity: 0;\n  visibility: hidden;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n\n.mobile-nav * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.mobile-nav a {\n  display: block;\n  position: relative;\n  color: #151515;\n  padding: 10px 20px;\n  font-weight: 500;\n  outline: none;\n}\n\n.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {\n  color: #151515;\n  text-decoration: none;\n  background: #ffc451;\n}\n\n.mobile-nav .drop-down > a:after {\n  content: \"\\ea99\";\n  font-family: IcoFont;\n  padding-left: 10px;\n  position: absolute;\n  right: 15px;\n}\n\n.mobile-nav .active.drop-down > a:after {\n  content: \"\\eaa1\";\n}\n\n.mobile-nav .drop-down > a {\n  padding-right: 35px;\n}\n\n.mobile-nav .drop-down ul {\n  display: none;\n  overflow: hidden;\n}\n\n.mobile-nav .drop-down li {\n  padding-left: 20px;\n}\n\n.mobile-nav-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 9997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  display: none;\n  transition: ease-in-out 0.2s;\n}\n\n.mobile-nav-active {\n  overflow: hidden;\n}\n\n.mobile-nav-active .mobile-nav {\n  opacity: 1;\n  visibility: visible;\n}\n\n.mobile-nav-active .mobile-nav-toggle i {\n  color: #fff;\n}\n\n/*--------------------------------------------------------------\n# Hero Section\n--------------------------------------------------------------*/\n\n#hero {\n  width: 100%;\n  height: 100vh;\n  background: url('woman-in-blue-crew-neck-shirt-.png');\n  background-size: cover;\n \n}\n\n#hero:before {\n  content: \"\";\n  background: #221C69;\n  opacity: 0.59;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n#hero .container {\n  position: relative;\n  padding-top: 74px;\n  text-align: center;\n}\n\n#hero h1 {\n \n  margin-top: 125px;\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 64px;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n}\n\n#hero h1 span {\n  color: #ffc451;\n}\n\n#hero h2 {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 10px 0 0 0;\n  font-size: 24px;\n}\n\n#hero .icon-box {\n  padding: 30px 20px;\n  transition: ease-in-out 0.3s;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 100%;\n  text-align: center;\n}\n\n#hero .icon-box i {\n  font-size: 32px;\n  line-height: 1;\n  color: #ffc451;\n}\n\n#hero .icon-box h3 {\n  font-weight: 700;\n  margin: 10px 0 0 0;\n  padding: 0;\n  line-height: 1;\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#hero .icon-box h3 a {\n  color: #fff;\n  transition: ease-in-out 0.3s;\n}\n\n#hero .icon-box h3 a:hover {\n  color: #ffc451;\n}\n\n#hero .icon-box:hover {\n  border-color: #ffc451;\n}\n\n@media (min-width: 1024px) {\n  #hero {\n    background-attachment: fixed;\n  }\n}\n\n@media (max-width: 768px) {\n  #hero {\n    height: auto;\n  }\n  #hero h1 {\n    font-size: 28px;\n    line-height: 36px;\n  }\n  #hero h2 {\n    font-size: 20px;\n    line-height: 24px;\n  }\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\n\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #ffde9e;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #151515;\n}\n\n/*--------------------------------------------------------------\n# About\n--------------------------------------------------------------*/\n\n.about .content h3 {\n  margin-top: 50px;\n  font-weight: 700;\n  font-size: 28px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.about .content ul {\n  list-style: none;\n  padding: 0;\n}\n\n.about .content ul li {\n  padding: 0 0 8px 26px;\n  position: relative;\n}\n\n.about .content ul i {\n  position: absolute;\n  font-size: 20px;\n  left: 0;\n  top: -3px;\n  color: #ffc451;\n}\n\n.about .content p:last-child {\n  margin-bottom: 0;\n}\n\n.about button[type=\"submit\"] {\n  background: #ffc451;\n  border: 0;\n\n  margin-right: 400px;\n  padding: 10px 24px;\n  color: #151515;\n  transition: 0.4s;\n  border-radius: 4px;\n}\n\n.about button[type=\"submit\"]:hover {\n  background: #221C69;\n  color: #fff;\n}\n\n/* service Section\n--------------------------------*/\n\n#service {\n  background: url('about.jpg') center top no-repeat fixed;\n  background-size: cover;\n  padding: 60px 0 40px 0;\n  position: relative;\n}\n\n#service::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.92);\n  z-index: 9;\n}\n\n#service .container {\n  position: relative;\n  z-index: 10;\n}\n\n#service .service-col {\n  background: #fff;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n\n#service .service-col .img {\n  position: relative;\n  width: 300px;\n  height: 300px;\n}\n\n#service .service-col .img img {\n\n  border-radius: 4px 4px 0 0;\n}\n\n#service .service-col h2 {\n  color: #000;\n  text-align: center;\n  font-weight: 700;\n  font-size: 25px;\n  padding: 0;\n  margin: 40px 0 12px 0;\n}\n\n#service .service-col p {\n  text-align: center;\n  font-size: 20px;\n  line-height: 24px;\n  color: #6B6969;\n  margin-bottom: 0;\n  padding: 0 20px 20px 20px;\n}\n\n/*--------------------------------------------------------------\n# Clients\n--------------------------------------------------------------*/\n\n.clients {\n  padding-top: 20px;\n}\n\n.clients .owl-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.clients .owl-item img {\n  width: 70%;\n  opacity: 0.5;\n  transition: 0.3s;\n  filter: grayscale(100);\n}\n\n.clients .owl-item img:hover {\n  filter: none;\n  opacity: 1;\n}\n\n.clients .owl-nav, .clients .owl-dots {\n  margin-top: 5px;\n  text-align: center;\n}\n\n.clients .owl-dot {\n  display: inline-block;\n  margin: 0 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #ddd !important;\n}\n\n.clients .owl-dot.active {\n  background-color: #ffc451 !important;\n}\n\n/*--------------------------------------------------------------\n# Features\n--------------------------------------------------------------*/\n\n.features {\n  padding-top: 20px;\n}\n\n.features .icon-box {\n  padding-left: 15px;\n}\n\n.features .icon-box h4 {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 5px 0 10px 60px;\n}\n\n.features .icon-box i {\n  font-size: 48px;\n  float: left;\n  color: #ffc451;\n}\n\n.features .icon-box p {\n  font-size: 15px;\n  color: #848484;\n  margin-left: 60px;\n}\n\n.features .image {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 400px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n\n.services .icon-box {\n  text-align: center;\n  border: 1px solid #ebebeb;\n  padding: 80px 20px;\n  transition: all ease-in-out 0.3s;\n  background: #fff;\n}\n\n.services .icon-box .icon {\n  margin: 0 auto;\n  width: 64px;\n  height: 64px;\n  background: #ffc451;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  transition: 0.3s;\n}\n\n.services .icon-box .icon i {\n  color: #151515;\n  font-size: 28px;\n  transition: ease-in-out 0.3s;\n}\n\n.services .icon-box h4 {\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n\n.services .icon-box h4 a {\n  color: #151515;\n  transition: ease-in-out 0.3s;\n}\n\n.services .icon-box h4 a:hover {\n  color: #ffc451;\n}\n\n.services .icon-box p {\n  line-height: 24px;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.services .icon-box:hover {\n  border-color: #fff;\n  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);\n  transform: translateY(-10px);\n}\n\n/*--------------------------------------------------------------\n# Cta\n--------------------------------------------------------------*/\n\n.cta {\n  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)), url('joVk9l.jpg') fixed center center;\n  background-size: cover;\n  padding: 60px 0;\n}\n\n.cta h3 {\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.cta p {\n  color: #fff;\n}\n\n.cta .cta-btn {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 8px 28px;\n  border-radius: 4px;\n  transition: 0.5s;\n  margin-top: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n.cta .cta-btn:hover {\n  background: #ffc451;\n  border-color: #ffc451;\n  color: #151515;\n}\n\n/*--------------------------------------------------------------\n# Portfolio\n--------------------------------------------------------------*/\n\n.portfolio .portfolio-item {\n  margin-bottom: 30px;\n}\n\n.portfolio #portfolio-flters {\n  padding: 0;\n  margin: 0 auto 20px auto;\n  list-style: none;\n  text-align: center;\n}\n\n.portfolio #portfolio-flters li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 8px 15px 10px 15px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #444444;\n  margin-bottom: 5px;\n  transition: all 0.3s ease-in-out;\n  border-radius: 3px;\n}\n\n.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {\n  color: #151515;\n  background: #ffc451;\n}\n\n.portfolio #portfolio-flters li:last-child {\n  margin-right: 0;\n}\n\n.portfolio .portfolio-wrap {\n  transition: 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  background: rgba(21, 21, 21, 0.6);\n}\n\n.portfolio .portfolio-wrap::before {\n  content: \"\";\n  background: rgba(21, 21, 21, 0.6);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n  opacity: 0;\n}\n\n.portfolio .portfolio-wrap img {\n  transition: all ease-in-out 0.3s;\n}\n\n.portfolio .portfolio-wrap .portfolio-info {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  transition: all ease-in-out 0.3s;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 20px;\n}\n\n.portfolio .portfolio-wrap .portfolio-info h4 {\n  font-size: 20px;\n  color: #fff;\n  font-weight: 600;\n}\n\n.portfolio .portfolio-wrap .portfolio-info p {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0;\n  font-style: italic;\n}\n\n.portfolio .portfolio-wrap .portfolio-links {\n  text-align: center;\n  z-index: 4;\n}\n\n.portfolio .portfolio-wrap .portfolio-links a {\n  color: #fff;\n  margin: 0 5px 0 0;\n  font-size: 28px;\n  display: inline-block;\n  transition: 0.3s;\n}\n\n.portfolio .portfolio-wrap .portfolio-links a:hover {\n  color: #ffc451;\n}\n\n.portfolio .portfolio-wrap:hover::before {\n  opacity: 1;\n}\n\n.portfolio .portfolio-wrap:hover img {\n  transform: scale(1.2);\n}\n\n.portfolio .portfolio-wrap:hover .portfolio-info {\n  opacity: 1;\n}\n\n/*--------------------------------------------------------------\n# Counts\n--------------------------------------------------------------*/\n\n.counts .content {\n  padding: 30px 0;\n}\n\n.counts .content h3 {\n  font-weight: 700;\n  font-size: 34px;\n  color: #151515;\n}\n\n.counts .content p {\n  margin-bottom: 0;\n}\n\n.counts .content .count-box {\n  padding: 20px 0;\n  width: 100%;\n}\n\n.counts .content .count-box i {\n  display: block;\n  font-size: 36px;\n  color: #ffc451;\n  float: left;\n}\n\n.counts .content .count-box span {\n  font-size: 36px;\n  line-height: 30px;\n  display: block;\n  font-weight: 700;\n  color: #151515;\n  margin-left: 50px;\n}\n\n.counts .content .count-box p {\n  padding: 15px 0 0 0;\n  margin: 0 0 0 50px;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 14px;\n  color: #3b3b3b;\n}\n\n.counts .content .count-box a {\n  font-weight: 600;\n  display: block;\n  margin-top: 20px;\n  color: #3b3b3b;\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n  transition: ease-in-out 0.3s;\n}\n\n.counts .content .count-box a:hover {\n  color: #626262;\n}\n\n.counts .image {\n  background: url('counts-img.jpg') center center no-repeat;\n  background-size: cover;\n  min-height: 400px;\n}\n\n@media (max-width: 991px) {\n  .counts .image {\n    text-align: center;\n  }\n  .counts .image img {\n    max-width: 80%;\n  }\n}\n\n@media (max-width: 667px) {\n  .counts .image img {\n    max-width: 100%;\n  }\n}\n\n/*--------------------------------------------------------------\n# Testimonials\n--------------------------------------------------------------*/\n\n.testimonials {\n  padding: 80px 0;\n  background: url('testimonials-bg.jpg') no-repeat;\n  background-position: center center;\n  background-size: cover;\n  position: relative;\n}\n\n.testimonials::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.testimonials .section-header {\n  margin-bottom: 40px;\n}\n\n.testimonials .testimonial-item {\n  text-align: center;\n  color: #fff;\n}\n\n.testimonials .testimonial-item .testimonial-img {\n  width: 100px;\n  border-radius: 50%;\n  border: 6px solid rgba(255, 255, 255, 0.15);\n  margin: 0 auto;\n}\n\n.testimonials .testimonial-item h3 {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 10px 0 5px 0;\n  color: #fff;\n}\n\n.testimonials .testimonial-item h4 {\n  font-size: 14px;\n  color: #ddd;\n  margin: 0 0 15px 0;\n}\n\n.testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 26px;\n}\n\n.testimonials .testimonial-item .quote-icon-left {\n  display: inline-block;\n  left: -5px;\n  position: relative;\n}\n\n.testimonials .testimonial-item .quote-icon-right {\n  display: inline-block;\n  right: -5px;\n  position: relative;\n  top: 10px;\n}\n\n.testimonials .testimonial-item p {\n  font-style: italic;\n  margin: 0 auto 15px auto;\n  color: #eee;\n}\n\n.testimonials .owl-nav, .testimonials .owl-dots {\n  margin-top: 5px;\n  text-align: center;\n}\n\n.testimonials .owl-dot {\n  display: inline-block;\n  margin: 0 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n\n.testimonials .owl-dot.active {\n  background-color: #ffc451 !important;\n}\n\n@media (min-width: 1024px) {\n  .testimonials {\n    background-attachment: fixed;\n  }\n}\n\n@media (min-width: 992px) {\n  .testimonials .testimonial-item p {\n    width: 80%;\n  }\n}\n\n/*--------------------------------------------------------------\n# Team\n--------------------------------------------------------------*/\n\n.team {\n  background: #fff;\n  padding: 60px 0;\n}\n\n.team .member {\n  margin-bottom: 20px;\n  overflow: hidden;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\n}\n\n.team .member .member-img {\n  position: relative;\n  overflow: hidden;\n}\n\n.team .member .social {\n  position: absolute;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  opacity: 0;\n  transition: ease-in-out 0.3s;\n  text-align: center;\n}\n\n.team .member .social a {\n  transition: color 0.3s;\n  color: #151515;\n  margin: 0 3px;\n  padding-top: 7px;\n  border-radius: 4px;\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.8);\n  display: inline-block;\n  transition: ease-in-out 0.3s;\n  color: #ffc451;\n}\n\n.team .member .social a:hover {\n  color: #fff;\n  background: #ffc451;\n}\n\n.team .member .social i {\n  font-size: 18px;\n}\n\n.team .member .member-info {\n  padding: 25px 15px;\n}\n\n.team .member .member-info h4 {\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-size: 18px;\n  color: #151515;\n}\n\n.team .member .member-info span {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  color: #aaaaaa;\n}\n\n.team .member .member-info p {\n  font-style: italic;\n  font-size: 14px;\n  line-height: 26px;\n  color: #777777;\n}\n\n.team .member:hover .social {\n  opacity: 1;\n  bottom: 15px;\n}\n\n/*--------------------------------------------------------------\n# Contact\n--------------------------------------------------------------*/\n\n.contact .info {\n  width: 100%;\n  background: #fff;\n}\n\n.contact .info i {\n  font-size: 20px;\n  background: #221C69;\n  color: #ffc451;\n  float: left;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.3s ease-in-out;\n}\n\n.contact .info h4 {\n  padding: 0 0 0 60px;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #151515;\n}\n\n.contact .info p {\n  padding: 0 0 0 60px;\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #484848;\n}\n\n.contact .info .email, .contact .info .phone {\n  margin-top: 40px;\n}\n\n.contact .php-email-form {\n  width: 100%;\n  background: #fff;\n}\n\n.contact .php-email-form .form-group {\n  padding-bottom: 8px;\n}\n\n.contact .php-email-form input, .contact .php-email-form textarea {\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {\n  border-color: #ffc451;\n}\n\n.contact .php-email-form input {\n  height: 44px;\n}\n\n.contact .php-email-form textarea {\n  padding: 10px 12px;\n}\n\n.contact .php-email-form button[type=\"submit\"] {\n  background: #221C69;\n  border: 0;\n  padding: 10px 24px;\n  color: #ffc451;\n  transition: 0.4s;\n  border-radius: 4px;\n}\n\n.contact .php-email-form button[type=\"submit\"]:hover {\n  background: #ffc451;\n  color: #000;\n}\n\n@keyframes animate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*--------------------------------------------------------------\n# Breadcrumbs\n--------------------------------------------------------------*/\n\n.breadcrumbs {\n  padding: 15px 0;\n  background: whitesmoke;\n  min-height: 40px;\n  margin-top: 74px;\n}\n\n.breadcrumbs h2 {\n  font-size: 28px;\n  font-weight: 400;\n}\n\n.breadcrumbs ol {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.breadcrumbs ol li + li {\n  padding-left: 10px;\n}\n\n.breadcrumbs ol li + li::before {\n  display: inline-block;\n  padding-right: 10px;\n  color: #2f2f2f;\n  content: \"/\";\n}\n\n@media (max-width: 992px) {\n  .breadcrumbs {\n    margin-top: 68px;\n  }\n  .breadcrumbs .d-flex {\n    display: block !important;\n  }\n  .breadcrumbs ol {\n    display: block;\n  }\n  .breadcrumbs ol li {\n    display: inline-block;\n  }\n}\n\n/*--------------------------------------------------------------\n# Footer\n--------------------------------------------------------------*/\n\n#footer {\n  background: black;\n  padding: 0 0 30px 0;\n  color: #fff;\n  font-size: 14px;\n}\n\n#footer .footer-top {\n  background: #221c6991;\n  border-bottom: 1px solid #222222;\n  padding: 60px 0 30px 0;\n}\n\n#footer .footer-top .footer-info {\n  margin-bottom: 30px;\n}\n\n#footer .footer-top .footer-info h3 {\n  font-size: 28px;\n  margin: 0 0 20px 0;\n  padding: 2px 0 2px 0;\n  line-height: 1;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n#footer .footer-top .footer-info h3 span {\n  color: #ffc451;\n}\n\n#footer .footer-top .footer-info p {\n  font-size: 14px;\n  line-height: 24px;\n  margin-bottom: 0;\n  font-family: \"Raleway\", sans-serif;\n  color: #fff;\n}\n\n#footer .footer-top .social-links a {\n  font-size: 18px;\n  display: inline-block;\n  background: #292929;\n  color: #fff;\n  line-height: 1;\n  padding: 8px 0;\n  margin-right: 4px;\n  border-radius: 4px;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n}\n\n#footer .footer-top .social-links a:hover {\n  background: #ffc451;\n  color: #151515;\n  text-decoration: none;\n}\n\n#footer .footer-top h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  position: relative;\n  padding-bottom: 12px;\n}\n\n#footer .footer-top .footer-links {\n  margin-bottom: 30px;\n}\n\n#footer .footer-top .footer-links ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n#footer .footer-top .footer-links ul i {\n  padding-right: 2px;\n  color: #ffc451;\n  font-size: 18px;\n  line-height: 1;\n}\n\n#footer .footer-top .footer-links ul li {\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n}\n\n#footer .footer-top .footer-links ul li:first-child {\n  padding-top: 0;\n}\n\n#footer .footer-top .footer-links ul a {\n  color: #fff;\n  transition: 0.3s;\n  display: inline-block;\n  line-height: 1;\n}\n\n#footer .footer-top .footer-links ul a:hover {\n  color: #ffc451;\n}\n\n#footer .footer-top .footer-newsletter form {\n  margin-top: 30px;\n  background: #fff;\n  padding: 6px 10px;\n  position: relative;\n  border-radius: 4px;\n}\n\n#footer .footer-top .footer-newsletter form input[type=\"email\"] {\n  border: 0;\n  padding: 4px;\n  width: calc(100% - 110px);\n}\n\n#footer .footer-top .footer-newsletter form input[type=\"submit\"] {\n  position: absolute;\n  top: 0;\n  right: -2px;\n  bottom: 0;\n  border: 0;\n  background: none;\n  font-size: 16px;\n  padding: 0 20px;\n  background: #ffc451;\n  color: #151515;\n  transition: 0.3s;\n  border-radius: 0 4px 4px 0;\n}\n\n#footer .footer-top .footer-newsletter form input[type=\"submit\"]:hover {\n  background: #ffcd6b;\n}\n\n#footer .copyright {\n  text-align: center;\n  padding-top: 30px;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #fff;\n}\n\n.section-header h3 {\n  font-size: 32px;\n  color: #111;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n  position: relative;\n  padding-bottom: 15px;\n}\n\n.section-header h3::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px);\n}\n\n.section-header h3::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #ffbb38;\n  bottom: 0;\n  left: calc(50% - 20px);\n}\n\n.section-header p {\n  text-align: center;\n  padding-bottom: 30px;\n  color: #333;\n}\n\n/*login */\n\n.options{\n  margin-top: 25px;\n}\n\n.btn-face,\n.btn-google {\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  line-height: 1.2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  width: calc((100% - 20px) / 2);\n  height: 70px;\n  border-radius: 10px;\n  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -o-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -ms-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  transition: all 0.4s;\n  position: relative;\n  z-index: 1;\n}\n\n.btn-google::before,\n.btn-face::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  top: 0;\n  left: 0;\n  background: #221C69;\n  background: linear-gradient(45deg,   #ffbb38, #221c69);\n  opacity: 0;\n  transition: all 0.4s;\n}\n\n.btn-face {\n  \n  color: #fff;\n  background-color: #3b5998;\n}\n\n.btn-face i {\n  font-size: 30px;\n  margin-right: 17px;\n  padding-bottom: 3px;\n}\n\n.btn-google {\n  color: #555555;\n  background-color: #fff;\n}\n\n.btn-google img {\n  width: 30px;\n  margin-right: 15px;\n  padding-bottom: 3px;\n}\n\n.btn-face:hover:before,\n.btn-google:hover:before {\n  opacity: 1;\n}\n\n.btn-face:hover,\n.btn-google:hover {\n  color: #fff;\n}\n\n.btn-google,.btn-face{\n  width: 200px;\n  align-self: center;\n}\n\n.social-login p{\ntext-align: center;\nfont-size: 24px;\n}\n\n.container-100 {\n  width: 100%;  \n  min-height: 100vh;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  \n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;;\n}\n\n.wrap {\n  width: 680px;\n  background: #fff;\n  border-radius: 10px;\n  position: relative;\n}\n\n@media (max-width: 768px) {\n  .wrap {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n@media (max-width: 576px) {\n  .wrap {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .btn-face,\n  .btn-google {\n    width: 100%;\n  }\n}\n}", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"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","sourcesContent":["/**\n* Template Name: Gp - v2.0.0\n* Template URL: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/\n* Author: BootstrapMade.com\n* License: https://bootstrapmade.com/license/\n*/\n\n/*--------------------------------------------------------------\n# General\n--------------------------------------------------------------*/\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  color: #444444;\n}\n\na {\n  color: #ffc451;\n}\n\na:hover {\n  color: #ffd584;\n  text-decoration: none;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \"Raleway\", sans-serif;\n}\n\n/*--------------------------------------------------------------\n# Back to top button\n--------------------------------------------------------------*/\n.back-to-top {\n  position: fixed;\n  display: none;\n  right: 15px;\n  bottom: 15px;\n  z-index: 99999;\n}\n\n.back-to-top i {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  width: 40px;\n  height: 40px;\n  border-radius: 4px;\n  background: #ffc451;\n  color: #151515;\n  transition: all 0.4s;\n}\n\n.back-to-top i:hover {\n  background: #151515;\n  color: #ffc451;\n}\n\n/*--------------------------------------------------------------\n# Preloader\n--------------------------------------------------------------*/\n#preloader {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  overflow: hidden;\n  background: #151515;\n}\n\n#preloader:before {\n  content: \"\";\n  position: fixed;\n  top: calc(50% - 0px);\n  left: calc(50% - 30px);\n  border: 6px solid #ffc451;\n  border-top-color: #151515;\n  border-bottom-color: #151515;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation: animate-preloader 1s linear infinite;\n  animation: animate-preloader 1s linear infinite;\n}\n\n@-webkit-keyframes animate-preloader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes animate-preloader {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*--------------------------------------------------------------\n# Disable aos animation delay on mobile devices\n--------------------------------------------------------------*/\n@media screen and (max-width: 768px) {\n  [data-aos-delay] {\n    transition-delay: 0 !important;\n  }\n}\n\n/*--------------------------------------------------------------\n# Header\n--------------------------------------------------------------*/\n#header {\n  transition: all 0.5s;\n  z-index: 997;\n  padding: 15px 0;\n}\n\n\n#header.header-scrolled, header.header-inner-pages {\n  background:rgba(34, 28, 105, 0.603);\n}\n#header .logo {\n  font-size: 32px;\n  margin: 0;\n  padding: 0;\n  line-height: 1;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n}\n\n#header .logo a {\n  color: #fff;\n}\n\n#header .logo a span {\n  color: #ffc451;\n}\n\n#header .logo img {\n  max-height: 40px;\n}\n\n/*--------------------------------------------------------------\n# Navigation Menu\n--------------------------------------------------------------*/\n/* Desktop Navigation */\n.nav-menu ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.nav-menu > ul {\n  display: flex;\n}\n\n.nav-menu > ul > li {\n  position: relative;\n  white-space: nowrap;\n  padding: 10px 0 10px 28px;\n}\n\n.nav-menu a {\n  display: block;\n  position: relative;\n  color: #fff;\n  transition: 0.3s;\n  font-size: 15px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 600;\n}\n\n.nav-menu a:hover, .nav-menu .active > a, .nav-menu li:hover > a {\n  color: #ffc451;\n}\n\n.nav-menu .drop-down ul {\n  display: block;\n  position: absolute;\n  left: 14px;\n  top: calc(100% + 30px);\n  z-index: 99;\n  opacity: 0;\n  visibility: hidden;\n  padding: 0;\n  background: #fff;\n  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);\n  transition: 0.3s;\n}\n\n.nav-menu .drop-down:hover > ul {\n  opacity: 1;\n  top: 100%;\n  visibility: visible;\n}\n\n.nav-menu .drop-down li {\n  min-width: 180px;\n  position: relative;\n}\n\n.nav-menu .drop-down ul a {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  text-transform: none;\n  color: #151515;\n}\n\n.nav-menu .drop-down ul a:hover, .nav-menu .drop-down ul .active > a, .nav-menu .drop-down ul li:hover > a {\n  color: #151515;\n  background: #ffc451;\n}\n\n.nav-menu .drop-down > a:after {\n  content: \"\\ea99\";\n  font-family: IcoFont;\n  padding-left: 5px;\n}\n\n.nav-menu .drop-down .drop-down ul {\n  top: 0;\n  left: calc(100% - 30px);\n}\n\n.nav-menu .drop-down .drop-down:hover > ul {\n  opacity: 1;\n  top: 0;\n  left: 100%;\n}\n\n.nav-menu .drop-down .drop-down > a {\n  padding-right: 35px;\n}\n\n.nav-menu .drop-down .drop-down > a:after {\n  content: \"\\eaa0\";\n  font-family: IcoFont;\n  position: absolute;\n  right: 15px;\n}\n\n@media (max-width: 1366px) {\n  .nav-menu .drop-down .drop-down ul {\n    left: -90%;\n  }\n  .nav-menu .drop-down .drop-down:hover > ul {\n    left: -100%;\n  }\n  .nav-menu .drop-down .drop-down > a:after {\n    content: \"\\ea9d\";\n  }\n}\n\n/* Get Startet Button */\n.get-started-btn {\n  color: #fff;\n  border-radius: 4px;\n  padding: 7px 25px 8px 25px;\n  white-space: nowrap;\n  transition: 0.3s;\n  font-size: 14px;\n  display: inline-block;\n  border: 2px solid #ffc451;\n}\n\n.get-started-btn:hover {\n  background: #ffbb38;\n  color: #343a40;\n}\n\n@media (max-width: 768px) {\n  .get-started-btn {\n    margin: 0 48px 0 0;\n    padding: 7px 20px 8px 20px;\n  }\n}\n\n/* Mobile Navigation */\n.mobile-nav-toggle {\n  position: fixed;\n  top: 20px;\n  right: 15px;\n  z-index: 9998;\n  border: 0;\n  background: none;\n  font-size: 24px;\n  transition: all 0.4s;\n  outline: none !important;\n  line-height: 1;\n  cursor: pointer;\n  text-align: right;\n}\n\n.mobile-nav-toggle i {\n  color: #fff;\n}\n\n.mobile-nav {\n  position: fixed;\n  top: 55px;\n  right: 15px;\n  bottom: 15px;\n  left: 15px;\n  z-index: 9999;\n  overflow-y: auto;\n  background: #fff;\n  transition: ease-in-out 0.2s;\n  opacity: 0;\n  visibility: hidden;\n  border-radius: 10px;\n  padding: 10px 0;\n}\n\n.mobile-nav * {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.mobile-nav a {\n  display: block;\n  position: relative;\n  color: #151515;\n  padding: 10px 20px;\n  font-weight: 500;\n  outline: none;\n}\n\n.mobile-nav a:hover, .mobile-nav .active > a, .mobile-nav li:hover > a {\n  color: #151515;\n  text-decoration: none;\n  background: #ffc451;\n}\n\n.mobile-nav .drop-down > a:after {\n  content: \"\\ea99\";\n  font-family: IcoFont;\n  padding-left: 10px;\n  position: absolute;\n  right: 15px;\n}\n\n.mobile-nav .active.drop-down > a:after {\n  content: \"\\eaa1\";\n}\n\n.mobile-nav .drop-down > a {\n  padding-right: 35px;\n}\n\n.mobile-nav .drop-down ul {\n  display: none;\n  overflow: hidden;\n}\n\n.mobile-nav .drop-down li {\n  padding-left: 20px;\n}\n\n.mobile-nav-overly {\n  width: 100%;\n  height: 100%;\n  z-index: 9997;\n  top: 0;\n  left: 0;\n  position: fixed;\n  background: rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  display: none;\n  transition: ease-in-out 0.2s;\n}\n\n.mobile-nav-active {\n  overflow: hidden;\n}\n\n.mobile-nav-active .mobile-nav {\n  opacity: 1;\n  visibility: visible;\n}\n\n.mobile-nav-active .mobile-nav-toggle i {\n  color: #fff;\n}\n\n/*--------------------------------------------------------------\n# Hero Section\n--------------------------------------------------------------*/\n#hero {\n  width: 100%;\n  height: 100vh;\n  background: url(\"./assets/img/woman-in-blue-crew-neck-shirt-.png\");\n  background-size: cover;\n \n}\n\n#hero:before {\n  content: \"\";\n  background: #221C69;\n  opacity: 0.59;\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\n#hero .container {\n  position: relative;\n  padding-top: 74px;\n  text-align: center;\n}\n\n#hero h1 {\n \n  margin-top: 125px;\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 64px;\n  color: #fff;\n  font-family: \"Poppins\", sans-serif;\n}\n\n#hero h1 span {\n  color: #ffc451;\n}\n\n#hero h2 {\n  color: rgba(255, 255, 255, 0.9);\n  margin: 10px 0 0 0;\n  font-size: 24px;\n}\n\n#hero .icon-box {\n  padding: 30px 20px;\n  transition: ease-in-out 0.3s;\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  height: 100%;\n  text-align: center;\n}\n\n#hero .icon-box i {\n  font-size: 32px;\n  line-height: 1;\n  color: #ffc451;\n}\n\n#hero .icon-box h3 {\n  font-weight: 700;\n  margin: 10px 0 0 0;\n  padding: 0;\n  line-height: 1;\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#hero .icon-box h3 a {\n  color: #fff;\n  transition: ease-in-out 0.3s;\n}\n\n#hero .icon-box h3 a:hover {\n  color: #ffc451;\n}\n\n#hero .icon-box:hover {\n  border-color: #ffc451;\n}\n\n@media (min-width: 1024px) {\n  #hero {\n    background-attachment: fixed;\n  }\n}\n\n@media (max-width: 768px) {\n  #hero {\n    height: auto;\n  }\n  #hero h1 {\n    font-size: 28px;\n    line-height: 36px;\n  }\n  #hero h2 {\n    font-size: 20px;\n    line-height: 24px;\n  }\n}\n\n/*--------------------------------------------------------------\n# Sections General\n--------------------------------------------------------------*/\nsection {\n  padding: 60px 0;\n  overflow: hidden;\n}\n\n.section-title {\n  padding-bottom: 40px;\n}\n\n.section-title h2 {\n  font-size: 14px;\n  font-weight: 500;\n  padding: 0;\n  line-height: 1px;\n  margin: 0 0 5px 0;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #aaaaaa;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.section-title h2::after {\n  content: \"\";\n  width: 120px;\n  height: 1px;\n  display: inline-block;\n  background: #ffde9e;\n  margin: 4px 10px;\n}\n\n.section-title p {\n  margin: 0;\n  margin: 0;\n  font-size: 36px;\n  font-weight: 700;\n  text-transform: uppercase;\n  font-family: \"Poppins\", sans-serif;\n  color: #151515;\n}\n/*--------------------------------------------------------------\n# About\n--------------------------------------------------------------*/\n.about .content h3 {\n  margin-top: 50px;\n  font-weight: 700;\n  font-size: 28px;\n  font-family: \"Poppins\", sans-serif;\n}\n\n.about .content ul {\n  list-style: none;\n  padding: 0;\n}\n\n.about .content ul li {\n  padding: 0 0 8px 26px;\n  position: relative;\n}\n\n.about .content ul i {\n  position: absolute;\n  font-size: 20px;\n  left: 0;\n  top: -3px;\n  color: #ffc451;\n}\n\n.about .content p:last-child {\n  margin-bottom: 0;\n}\n.about button[type=\"submit\"] {\n  background: #ffc451;\n  border: 0;\n\n  margin-right: 400px;\n  padding: 10px 24px;\n  color: #151515;\n  transition: 0.4s;\n  border-radius: 4px;\n}\n\n.about button[type=\"submit\"]:hover {\n  background: #221C69;\n  color: #fff;\n}\n\n/* service Section\n--------------------------------*/\n#service {\n  background: url(\"./assets/img/about.jpg\") center top no-repeat fixed;\n  background-size: cover;\n  padding: 60px 0 40px 0;\n  position: relative;\n}\n\n#service::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.92);\n  z-index: 9;\n}\n\n#service .container {\n  position: relative;\n  z-index: 10;\n}\n\n#service .service-col {\n  background: #fff;\n  border-radius: 0 0 4px 4px;\n  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n}\n\n#service .service-col .img {\n  position: relative;\n  width: 300px;\n  height: 300px;\n}\n\n#service .service-col .img img {\n\n  border-radius: 4px 4px 0 0;\n}\n\n\n\n\n#service .service-col h2 {\n  color: #000;\n  text-align: center;\n  font-weight: 700;\n  font-size: 25px;\n  padding: 0;\n  margin: 40px 0 12px 0;\n}\n\n\n\n#service .service-col p {\n  text-align: center;\n  font-size: 20px;\n  line-height: 24px;\n  color: #6B6969;\n  margin-bottom: 0;\n  padding: 0 20px 20px 20px;\n}\n\n/*--------------------------------------------------------------\n# Clients\n--------------------------------------------------------------*/\n.clients {\n  padding-top: 20px;\n}\n\n.clients .owl-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.clients .owl-item img {\n  width: 70%;\n  opacity: 0.5;\n  transition: 0.3s;\n  -webkit-filter: grayscale(100);\n  filter: grayscale(100);\n}\n\n.clients .owl-item img:hover {\n  -webkit-filter: none;\n  filter: none;\n  opacity: 1;\n}\n\n.clients .owl-nav, .clients .owl-dots {\n  margin-top: 5px;\n  text-align: center;\n}\n\n.clients .owl-dot {\n  display: inline-block;\n  margin: 0 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #ddd !important;\n}\n\n.clients .owl-dot.active {\n  background-color: #ffc451 !important;\n}\n\n/*--------------------------------------------------------------\n# Features\n--------------------------------------------------------------*/\n.features {\n  padding-top: 20px;\n}\n\n.features .icon-box {\n  padding-left: 15px;\n}\n\n.features .icon-box h4 {\n  font-size: 20px;\n  font-weight: 700;\n  margin: 5px 0 10px 60px;\n}\n\n.features .icon-box i {\n  font-size: 48px;\n  float: left;\n  color: #ffc451;\n}\n\n.features .icon-box p {\n  font-size: 15px;\n  color: #848484;\n  margin-left: 60px;\n}\n\n.features .image {\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 400px;\n}\n\n/*--------------------------------------------------------------\n# Services\n--------------------------------------------------------------*/\n.services .icon-box {\n  text-align: center;\n  border: 1px solid #ebebeb;\n  padding: 80px 20px;\n  transition: all ease-in-out 0.3s;\n  background: #fff;\n}\n\n.services .icon-box .icon {\n  margin: 0 auto;\n  width: 64px;\n  height: 64px;\n  background: #ffc451;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n  transition: 0.3s;\n}\n\n.services .icon-box .icon i {\n  color: #151515;\n  font-size: 28px;\n  transition: ease-in-out 0.3s;\n}\n\n.services .icon-box h4 {\n  font-weight: 700;\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n\n.services .icon-box h4 a {\n  color: #151515;\n  transition: ease-in-out 0.3s;\n}\n\n.services .icon-box h4 a:hover {\n  color: #ffc451;\n}\n\n.services .icon-box p {\n  line-height: 24px;\n  font-size: 14px;\n  margin-bottom: 0;\n}\n\n.services .icon-box:hover {\n  border-color: #fff;\n  box-shadow: 0px 0 25px 0 rgba(0, 0, 0, 0.1);\n  transform: translateY(-10px);\n}\n\n/*--------------------------------------------------------------\n# Cta\n--------------------------------------------------------------*/\n.cta {\n  background: linear-gradient(rgba(2, 2, 2, 0.5), rgba(0, 0, 0, 0.5)), url(\"./assets/img/joVk9l.jpg\") fixed center center;\n  background-size: cover;\n  padding: 60px 0;\n}\n\n.cta h3 {\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n}\n\n.cta p {\n  color: #fff;\n}\n\n.cta .cta-btn {\n  font-family: \"Raleway\", sans-serif;\n  font-weight: 600;\n  font-size: 16px;\n  letter-spacing: 1px;\n  display: inline-block;\n  padding: 8px 28px;\n  border-radius: 4px;\n  transition: 0.5s;\n  margin-top: 10px;\n  border: 2px solid #fff;\n  color: #fff;\n}\n\n.cta .cta-btn:hover {\n  background: #ffc451;\n  border-color: #ffc451;\n  color: #151515;\n}\n\n/*--------------------------------------------------------------\n# Portfolio\n--------------------------------------------------------------*/\n.portfolio .portfolio-item {\n  margin-bottom: 30px;\n}\n\n.portfolio #portfolio-flters {\n  padding: 0;\n  margin: 0 auto 20px auto;\n  list-style: none;\n  text-align: center;\n}\n\n.portfolio #portfolio-flters li {\n  cursor: pointer;\n  display: inline-block;\n  padding: 8px 15px 10px 15px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1;\n  text-transform: uppercase;\n  color: #444444;\n  margin-bottom: 5px;\n  transition: all 0.3s ease-in-out;\n  border-radius: 3px;\n}\n\n.portfolio #portfolio-flters li:hover, .portfolio #portfolio-flters li.filter-active {\n  color: #151515;\n  background: #ffc451;\n}\n\n.portfolio #portfolio-flters li:last-child {\n  margin-right: 0;\n}\n\n.portfolio .portfolio-wrap {\n  transition: 0.3s;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  background: rgba(21, 21, 21, 0.6);\n}\n\n.portfolio .portfolio-wrap::before {\n  content: \"\";\n  background: rgba(21, 21, 21, 0.6);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  transition: all ease-in-out 0.3s;\n  z-index: 2;\n  opacity: 0;\n}\n\n.portfolio .portfolio-wrap img {\n  transition: all ease-in-out 0.3s;\n}\n\n.portfolio .portfolio-wrap .portfolio-info {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 3;\n  transition: all ease-in-out 0.3s;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  padding: 20px;\n}\n\n.portfolio .portfolio-wrap .portfolio-info h4 {\n  font-size: 20px;\n  color: #fff;\n  font-weight: 600;\n}\n\n.portfolio .portfolio-wrap .portfolio-info p {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 14px;\n  text-transform: uppercase;\n  padding: 0;\n  margin: 0;\n  font-style: italic;\n}\n\n.portfolio .portfolio-wrap .portfolio-links {\n  text-align: center;\n  z-index: 4;\n}\n\n.portfolio .portfolio-wrap .portfolio-links a {\n  color: #fff;\n  margin: 0 5px 0 0;\n  font-size: 28px;\n  display: inline-block;\n  transition: 0.3s;\n}\n\n.portfolio .portfolio-wrap .portfolio-links a:hover {\n  color: #ffc451;\n}\n\n.portfolio .portfolio-wrap:hover::before {\n  opacity: 1;\n}\n\n.portfolio .portfolio-wrap:hover img {\n  transform: scale(1.2);\n}\n\n.portfolio .portfolio-wrap:hover .portfolio-info {\n  opacity: 1;\n}\n\n/*--------------------------------------------------------------\n# Counts\n--------------------------------------------------------------*/\n.counts .content {\n  padding: 30px 0;\n}\n\n.counts .content h3 {\n  font-weight: 700;\n  font-size: 34px;\n  color: #151515;\n}\n\n.counts .content p {\n  margin-bottom: 0;\n}\n\n.counts .content .count-box {\n  padding: 20px 0;\n  width: 100%;\n}\n\n.counts .content .count-box i {\n  display: block;\n  font-size: 36px;\n  color: #ffc451;\n  float: left;\n}\n\n.counts .content .count-box span {\n  font-size: 36px;\n  line-height: 30px;\n  display: block;\n  font-weight: 700;\n  color: #151515;\n  margin-left: 50px;\n}\n\n.counts .content .count-box p {\n  padding: 15px 0 0 0;\n  margin: 0 0 0 50px;\n  font-family: \"Raleway\", sans-serif;\n  font-size: 14px;\n  color: #3b3b3b;\n}\n\n.counts .content .count-box a {\n  font-weight: 600;\n  display: block;\n  margin-top: 20px;\n  color: #3b3b3b;\n  font-size: 15px;\n  font-family: \"Poppins\", sans-serif;\n  transition: ease-in-out 0.3s;\n}\n\n.counts .content .count-box a:hover {\n  color: #626262;\n}\n\n.counts .image {\n  background: url(\"./assets/img/counts-img.jpg\") center center no-repeat;\n  background-size: cover;\n  min-height: 400px;\n}\n\n@media (max-width: 991px) {\n  .counts .image {\n    text-align: center;\n  }\n  .counts .image img {\n    max-width: 80%;\n  }\n}\n\n@media (max-width: 667px) {\n  .counts .image img {\n    max-width: 100%;\n  }\n}\n\n/*--------------------------------------------------------------\n# Testimonials\n--------------------------------------------------------------*/\n.testimonials {\n  padding: 80px 0;\n  background: url(\"./assets/img/testimonials-bg.jpg\") no-repeat;\n  background-position: center center;\n  background-size: cover;\n  position: relative;\n}\n\n.testimonials::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.7);\n}\n\n.testimonials .section-header {\n  margin-bottom: 40px;\n}\n\n.testimonials .testimonial-item {\n  text-align: center;\n  color: #fff;\n}\n\n.testimonials .testimonial-item .testimonial-img {\n  width: 100px;\n  border-radius: 50%;\n  border: 6px solid rgba(255, 255, 255, 0.15);\n  margin: 0 auto;\n}\n\n.testimonials .testimonial-item h3 {\n  font-size: 20px;\n  font-weight: bold;\n  margin: 10px 0 5px 0;\n  color: #fff;\n}\n\n.testimonials .testimonial-item h4 {\n  font-size: 14px;\n  color: #ddd;\n  margin: 0 0 15px 0;\n}\n\n.testimonials .testimonial-item .quote-icon-left, .testimonials .testimonial-item .quote-icon-right {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 26px;\n}\n\n.testimonials .testimonial-item .quote-icon-left {\n  display: inline-block;\n  left: -5px;\n  position: relative;\n}\n\n.testimonials .testimonial-item .quote-icon-right {\n  display: inline-block;\n  right: -5px;\n  position: relative;\n  top: 10px;\n}\n\n.testimonials .testimonial-item p {\n  font-style: italic;\n  margin: 0 auto 15px auto;\n  color: #eee;\n}\n\n.testimonials .owl-nav, .testimonials .owl-dots {\n  margin-top: 5px;\n  text-align: center;\n}\n\n.testimonials .owl-dot {\n  display: inline-block;\n  margin: 0 5px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: rgba(255, 255, 255, 0.4) !important;\n}\n\n.testimonials .owl-dot.active {\n  background-color: #ffc451 !important;\n}\n\n@media (min-width: 1024px) {\n  .testimonials {\n    background-attachment: fixed;\n  }\n}\n\n@media (min-width: 992px) {\n  .testimonials .testimonial-item p {\n    width: 80%;\n  }\n}\n\n/*--------------------------------------------------------------\n# Team\n--------------------------------------------------------------*/\n.team {\n  background: #fff;\n  padding: 60px 0;\n}\n\n.team .member {\n  margin-bottom: 20px;\n  overflow: hidden;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);\n}\n\n.team .member .member-img {\n  position: relative;\n  overflow: hidden;\n}\n\n.team .member .social {\n  position: absolute;\n  left: 0;\n  bottom: 30px;\n  right: 0;\n  opacity: 0;\n  transition: ease-in-out 0.3s;\n  text-align: center;\n}\n\n.team .member .social a {\n  transition: color 0.3s;\n  color: #151515;\n  margin: 0 3px;\n  padding-top: 7px;\n  border-radius: 4px;\n  width: 36px;\n  height: 36px;\n  background: rgba(255, 255, 255, 0.8);\n  display: inline-block;\n  transition: ease-in-out 0.3s;\n  color: #ffc451;\n}\n\n.team .member .social a:hover {\n  color: #fff;\n  background: #ffc451;\n}\n\n.team .member .social i {\n  font-size: 18px;\n}\n\n.team .member .member-info {\n  padding: 25px 15px;\n}\n\n.team .member .member-info h4 {\n  font-weight: 700;\n  margin-bottom: 5px;\n  font-size: 18px;\n  color: #151515;\n}\n\n.team .member .member-info span {\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  color: #aaaaaa;\n}\n\n.team .member .member-info p {\n  font-style: italic;\n  font-size: 14px;\n  line-height: 26px;\n  color: #777777;\n}\n\n.team .member:hover .social {\n  opacity: 1;\n  bottom: 15px;\n}\n\n/*--------------------------------------------------------------\n# Contact\n--------------------------------------------------------------*/\n.contact .info {\n  width: 100%;\n  background: #fff;\n}\n\n.contact .info i {\n  font-size: 20px;\n  background: #221C69;\n  color: #ffc451;\n  float: left;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  transition: all 0.3s ease-in-out;\n}\n\n.contact .info h4 {\n  padding: 0 0 0 60px;\n  font-size: 22px;\n  font-weight: 600;\n  margin-bottom: 5px;\n  color: #151515;\n}\n\n.contact .info p {\n  padding: 0 0 0 60px;\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #484848;\n}\n\n.contact .info .email, .contact .info .phone {\n  margin-top: 40px;\n}\n\n.contact .php-email-form {\n  width: 100%;\n  background: #fff;\n}\n\n.contact .php-email-form .form-group {\n  padding-bottom: 8px;\n}\n\n\n\n.contact .php-email-form input, .contact .php-email-form textarea {\n  border-radius: 0;\n  box-shadow: none;\n  font-size: 14px;\n  border-radius: 4px;\n}\n\n.contact .php-email-form input:focus, .contact .php-email-form textarea:focus {\n  border-color: #ffc451;\n}\n\n.contact .php-email-form input {\n  height: 44px;\n}\n\n.contact .php-email-form textarea {\n  padding: 10px 12px;\n}\n\n.contact .php-email-form button[type=\"submit\"] {\n  background: #221C69;\n  border: 0;\n  padding: 10px 24px;\n  color: #ffc451;\n  transition: 0.4s;\n  border-radius: 4px;\n}\n\n.contact .php-email-form button[type=\"submit\"]:hover {\n  background: #ffc451;\n  color: #000;\n}\n\n@-webkit-keyframes animate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes animate-loading {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/*--------------------------------------------------------------\n# Breadcrumbs\n--------------------------------------------------------------*/\n.breadcrumbs {\n  padding: 15px 0;\n  background: whitesmoke;\n  min-height: 40px;\n  margin-top: 74px;\n}\n\n.breadcrumbs h2 {\n  font-size: 28px;\n  font-weight: 400;\n}\n\n.breadcrumbs ol {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.breadcrumbs ol li + li {\n  padding-left: 10px;\n}\n\n.breadcrumbs ol li + li::before {\n  display: inline-block;\n  padding-right: 10px;\n  color: #2f2f2f;\n  content: \"/\";\n}\n\n@media (max-width: 992px) {\n  .breadcrumbs {\n    margin-top: 68px;\n  }\n  .breadcrumbs .d-flex {\n    display: block !important;\n  }\n  .breadcrumbs ol {\n    display: block;\n  }\n  .breadcrumbs ol li {\n    display: inline-block;\n  }\n}\n/*--------------------------------------------------------------\n# Footer\n--------------------------------------------------------------*/\n#footer {\n  background: black;\n  padding: 0 0 30px 0;\n  color: #fff;\n  font-size: 14px;\n}\n\n#footer .footer-top {\n  background: #221c6991;\n  border-bottom: 1px solid #222222;\n  padding: 60px 0 30px 0;\n}\n\n#footer .footer-top .footer-info {\n  margin-bottom: 30px;\n}\n\n#footer .footer-top .footer-info h3 {\n  font-size: 28px;\n  margin: 0 0 20px 0;\n  padding: 2px 0 2px 0;\n  line-height: 1;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n#footer .footer-top .footer-info h3 span {\n  color: #ffc451;\n}\n\n#footer .footer-top .footer-info p {\n  font-size: 14px;\n  line-height: 24px;\n  margin-bottom: 0;\n  font-family: \"Raleway\", sans-serif;\n  color: #fff;\n}\n\n#footer .footer-top .social-links a {\n  font-size: 18px;\n  display: inline-block;\n  background: #292929;\n  color: #fff;\n  line-height: 1;\n  padding: 8px 0;\n  margin-right: 4px;\n  border-radius: 4px;\n  text-align: center;\n  width: 36px;\n  height: 36px;\n  transition: 0.3s;\n}\n\n#footer .footer-top .social-links a:hover {\n  background: #ffc451;\n  color: #151515;\n  text-decoration: none;\n}\n\n#footer .footer-top h4 {\n  font-size: 16px;\n  font-weight: 600;\n  color: #fff;\n  position: relative;\n  padding-bottom: 12px;\n}\n\n#footer .footer-top .footer-links {\n  margin-bottom: 30px;\n}\n\n#footer .footer-top .footer-links ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n#footer .footer-top .footer-links ul i {\n  padding-right: 2px;\n  color: #ffc451;\n  font-size: 18px;\n  line-height: 1;\n}\n\n#footer .footer-top .footer-links ul li {\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n}\n\n#footer .footer-top .footer-links ul li:first-child {\n  padding-top: 0;\n}\n\n#footer .footer-top .footer-links ul a {\n  color: #fff;\n  transition: 0.3s;\n  display: inline-block;\n  line-height: 1;\n}\n\n#footer .footer-top .footer-links ul a:hover {\n  color: #ffc451;\n}\n\n#footer .footer-top .footer-newsletter form {\n  margin-top: 30px;\n  background: #fff;\n  padding: 6px 10px;\n  position: relative;\n  border-radius: 4px;\n}\n\n#footer .footer-top .footer-newsletter form input[type=\"email\"] {\n  border: 0;\n  padding: 4px;\n  width: calc(100% - 110px);\n}\n\n#footer .footer-top .footer-newsletter form input[type=\"submit\"] {\n  position: absolute;\n  top: 0;\n  right: -2px;\n  bottom: 0;\n  border: 0;\n  background: none;\n  font-size: 16px;\n  padding: 0 20px;\n  background: #ffc451;\n  color: #151515;\n  transition: 0.3s;\n  border-radius: 0 4px 4px 0;\n}\n\n#footer .footer-top .footer-newsletter form input[type=\"submit\"]:hover {\n  background: #ffcd6b;\n}\n\n#footer .copyright {\n  text-align: center;\n  padding-top: 30px;\n}\n\n#footer .credits {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 13px;\n  color: #fff;\n}\n\n.section-header h3 {\n  font-size: 32px;\n  color: #111;\n  text-transform: uppercase;\n  text-align: center;\n  font-weight: 700;\n  position: relative;\n  padding-bottom: 15px;\n}\n\n.section-header h3::before {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 120px;\n  height: 1px;\n  background: #ddd;\n  bottom: 1px;\n  left: calc(50% - 60px);\n}\n\n.section-header h3::after {\n  content: '';\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 3px;\n  background: #ffbb38;\n  bottom: 0;\n  left: calc(50% - 20px);\n}\n\n.section-header p {\n  text-align: center;\n  padding-bottom: 30px;\n  color: #333;\n}\n/*login */\n.options{\n  margin-top: 25px;\n}\n.btn-face,\n.btn-google {\n  font-family: Montserrat-SemiBold;\n  font-size: 18px;\n  line-height: 1.2;\n\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  width: calc((100% - 20px) / 2);\n  height: 70px;\n  border-radius: 10px;\n  box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -moz-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -o-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -ms-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n  position: relative;\n  z-index: 1;\n}\n\n.btn-google::before,\n.btn-face::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  top: 0;\n  left: 0;\n  background: #221C69;\n  background: -webkit-linear-gradient(45deg, #ffbb38, #221c69);\n  background: -o-linear-gradient(45deg,   #ffbb38, #221c69);\n  background: -moz-linear-gradient(45deg,   #ffbb38, #221c69);\n  background: linear-gradient(45deg,   #ffbb38, #221c69);\n  opacity: 0;\n  -webkit-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  transition: all 0.4s;\n}\n\n.btn-face {\n  \n  color: #fff;\n  background-color: #3b5998;\n}\n\n.btn-face i {\n  font-size: 30px;\n  margin-right: 17px;\n  padding-bottom: 3px;\n}\n\n.btn-google {\n  color: #555555;\n  background-color: #fff;\n}\n\n.btn-google img {\n  width: 30px;\n  margin-right: 15px;\n  padding-bottom: 3px;\n}\n\n.btn-face:hover:before,\n.btn-google:hover:before {\n  opacity: 1;\n}\n\n.btn-face:hover,\n.btn-google:hover {\n  color: #fff;\n}\n.btn-google,.btn-face{\n  width: 200px;\n  align-self: center;\n}\n.social-login p{\ntext-align: center;\nfont-size: 24px;\n}\n.container-100 {\n  width: 100%;  \n  min-height: 100vh;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 15px;\n  \n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;;\n}\n.wrap {\n  width: 680px;\n  background: #fff;\n  border-radius: 10px;\n  position: relative;\n}\n@media (max-width: 768px) {\n  .wrap {\n    padding-left: 60px;\n    padding-right: 60px;\n  }\n\n@media (max-width: 576px) {\n  .wrap {\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n\n  .btn-face,\n  .btn-google {\n    width: 100%;\n  }\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map