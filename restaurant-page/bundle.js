/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    box-sizing: border-box;
}

html,
body,
h1,
h3,
p {
    margin: 0;
    padding: 0;
}

body {
    background: #0c1923;
    color: #fdf9f3;
    min-height: 100vh;
}

#bg-transition {
    position: fixed;
    opacity: 1;
    pointer-events: none;
    z-index: -1;
    inset: 0;
    transition: opacity 0.8s ease-in-out;
    background: radial-gradient(circle at center, #0c1923 0%, #000000 80%);
    background-repeat: no-repeat;
    background-position: center;
}

.container {
    padding-left: 15%;
    padding-right: 15%;
}

.container-fluid {
    padding-left: 5%;
    padding-right: 5%;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.navbar .brand {
    width: 100%;
    height: 6.5rem;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: no-repeat;
    background-size: contain;
}

.navbar .navbar-list {
    display: flex;
    gap: 6rem;
    list-style-type: none;
}

.navbar-list li {
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-size: 1.5rem;
    cursor: pointer;
    color: #fdf9f3;
    text-transform: uppercase;
}

.navbar-list li:hover {
    color: #2dedf3;
}

.flex-center {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.welcome {
    width: 900px;
}

.welcome h1 {
    font-size: 4rem;
    text-align: center;
    font-weight: 600;
    opacity: 0;
}

.welcome .fade {
    animation: fadeSlide 4s ease-in-out;
}

.highlight {
    color: #71f9ff;
}

@keyframes fadeSlide {
    0% { opacity: 0; transform: translateY(1.25rem); }
    20%, 80% { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-1.25rem); }
}

@keyframes normalFade {
    from { opacity: 0 }
    to { opacity: 1 }
}

.grid-menu {
    padding-top: 15%;
    display: grid;
    grid-template-columns: repeat(3, minmax(12.5rem, 1fr));
    gap: 5rem;
    animation: normalFade 1.5s ease-in-out;
}

.card {
    display: grid;
    grid-template-columns: 10rem 1fr;
    gap: 0.5rem;
}

.card img {
    width: 100%;
    height: auto;
    max-height: 10rem;
    object-fit: contain;
    justify-self: center;
    padding: 0.5rem;
}

.card .card-body {
    display: grid;
    grid-template-rows: auto 1fr;
    background: #35516d;
}

.card .card-header {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: stretch;
    overflow: hidden;
    margin-bottom: 0.5rem;;
}

.card-header h3 {
    background: #a7f2ff;
    padding-left: 0.5rem;
    color: #239ca8;
    display: flex;
    align-items: center;
}

.card-header span {
    width: 3rem;
    padding: 0.4rem;
    background: #3f939a;
    text-align: center;
}

.card-body p {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.mb {
    margin-bottom: 1rem;
}

.contact {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: normalFade 1.5s ease-in-out;
}

.contact .col-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
}

/*
.contact .col-grid:last-child {
    margin-bottom: 0;
}
*/

.contact .flex-input {
    display: flex;
    flex-direction: column;
}

.contact .contact-body {
    
    padding: 1rem;
}

.contact input {
    border: 1px solid #3e7a96;
    outline: none;
    background: #1b343c;
    padding: 0.5rem;
    color: #fdf9f3;
}

.contact label {
    color: #3e7a96;
    text-transform: uppercase;
}

.contact textarea {
    outline: none;
    resize: none;
    background: #1b343c;
    border: 1px solid #3e7a96;
    padding: 0.5rem;
    color: #fdf9f3;
}

.contact .btn-submit {
    display: block;
    width: 100%;
    border: 1px solid #3e7a96;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: #1b343c;
    color: #fdf9f3;
    text-transform: uppercase;
}

.contact .btn-submit:hover {
    background: #3e7a96;
}

.contact input:focus,
.contact textarea:focus {
    border: 1px solid #96bdcf;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance: textfield;
}

.fixed-footer {
    position: fixed;
    bottom: 0;
    right: 0;
    padding: 1rem;
    color: #35516d;
    font-size: 0.9rem;
}

@media (max-width: 640px) {
    .grid-menu {
        grid-template-columns: 1fr;
    }

    .card {
        grid-template-columns: 1fr;
    }

    .card img {
        max-height: 12rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/stylesheet.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n* {\r\n    font-family: \"Poppins\", sans-serif;\r\n    font-style: normal;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody,\r\nh1,\r\nh3,\r\np {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    background: #0c1923;\r\n    color: #fdf9f3;\r\n    min-height: 100vh;\r\n}\r\n\r\n#bg-transition {\r\n    position: fixed;\r\n    opacity: 1;\r\n    pointer-events: none;\r\n    z-index: -1;\r\n    inset: 0;\r\n    transition: opacity 0.8s ease-in-out;\r\n    background: radial-gradient(circle at center, #0c1923 0%, #000000 80%);\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n}\r\n\r\n.container {\r\n    padding-left: 15%;\r\n    padding-right: 15%;\r\n}\r\n\r\n.container-fluid {\r\n    padding-left: 5%;\r\n    padding-right: 5%;\r\n}\r\n\r\n.navbar {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.navbar .brand {\r\n    width: 100%;\r\n    height: 6.5rem;\r\n    background-image: url('./img/logo.png');\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.navbar .navbar-list {\r\n    display: flex;\r\n    gap: 6rem;\r\n    list-style-type: none;\r\n}\r\n\r\n.navbar-list li {\r\n    font-family: \"Playfair Display\", serif;\r\n    font-optical-sizing: auto;\r\n    font-weight: 500;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    color: #fdf9f3;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.navbar-list li:hover {\r\n    color: #2dedf3;\r\n}\r\n\r\n.flex-center {\r\n    height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.welcome {\r\n    width: 900px;\r\n}\r\n\r\n.welcome h1 {\r\n    font-size: 4rem;\r\n    text-align: center;\r\n    font-weight: 600;\r\n    opacity: 0;\r\n}\r\n\r\n.welcome .fade {\r\n    animation: fadeSlide 4s ease-in-out;\r\n}\r\n\r\n.highlight {\r\n    color: #71f9ff;\r\n}\r\n\r\n@keyframes fadeSlide {\r\n    0% { opacity: 0; transform: translateY(1.25rem); }\r\n    20%, 80% { opacity: 1; transform: translateY(0); }\r\n    100% { opacity: 0; transform: translateY(-1.25rem); }\r\n}\r\n\r\n@keyframes normalFade {\r\n    from { opacity: 0 }\r\n    to { opacity: 1 }\r\n}\r\n\r\n.grid-menu {\r\n    padding-top: 15%;\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(12.5rem, 1fr));\r\n    gap: 5rem;\r\n    animation: normalFade 1.5s ease-in-out;\r\n}\r\n\r\n.card {\r\n    display: grid;\r\n    grid-template-columns: 10rem 1fr;\r\n    gap: 0.5rem;\r\n}\r\n\r\n.card img {\r\n    width: 100%;\r\n    height: auto;\r\n    max-height: 10rem;\r\n    object-fit: contain;\r\n    justify-self: center;\r\n    padding: 0.5rem;\r\n}\r\n\r\n.card .card-body {\r\n    display: grid;\r\n    grid-template-rows: auto 1fr;\r\n    background: #35516d;\r\n}\r\n\r\n.card .card-header {\r\n    display: grid;\r\n    grid-template-columns: 1fr auto;\r\n    align-items: stretch;\r\n    overflow: hidden;\r\n    margin-bottom: 0.5rem;;\r\n}\r\n\r\n.card-header h3 {\r\n    background: #a7f2ff;\r\n    padding-left: 0.5rem;\r\n    color: #239ca8;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.card-header span {\r\n    width: 3rem;\r\n    padding: 0.4rem;\r\n    background: #3f939a;\r\n    text-align: center;\r\n}\r\n\r\n.card-body p {\r\n    padding-left: 0.5rem;\r\n    padding-right: 0.5rem;\r\n}\r\n\r\n.mb {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.contact {\r\n    min-height: 100vh;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    animation: normalFade 1.5s ease-in-out;\r\n}\r\n\r\n.contact .col-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    gap: 1rem;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/*\r\n.contact .col-grid:last-child {\r\n    margin-bottom: 0;\r\n}\r\n*/\r\n\r\n.contact .flex-input {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.contact .contact-body {\r\n    \r\n    padding: 1rem;\r\n}\r\n\r\n.contact input {\r\n    border: 1px solid #3e7a96;\r\n    outline: none;\r\n    background: #1b343c;\r\n    padding: 0.5rem;\r\n    color: #fdf9f3;\r\n}\r\n\r\n.contact label {\r\n    color: #3e7a96;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.contact textarea {\r\n    outline: none;\r\n    resize: none;\r\n    background: #1b343c;\r\n    border: 1px solid #3e7a96;\r\n    padding: 0.5rem;\r\n    color: #fdf9f3;\r\n}\r\n\r\n.contact .btn-submit {\r\n    display: block;\r\n    width: 100%;\r\n    border: 1px solid #3e7a96;\r\n    padding-top: 0.5rem;\r\n    padding-bottom: 0.5rem;\r\n    background: #1b343c;\r\n    color: #fdf9f3;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.contact .btn-submit:hover {\r\n    background: #3e7a96;\r\n}\r\n\r\n.contact input:focus,\r\n.contact textarea:focus {\r\n    border: 1px solid #96bdcf;\r\n}\r\n\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n    margin: 0;\r\n}\r\n\r\ninput[type=number] {\r\n    -moz-appearance: textfield;\r\n}\r\n\r\n.fixed-footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 1rem;\r\n    color: #35516d;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n@media (max-width: 640px) {\r\n    .grid-menu {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .card {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .card img {\r\n        max-height: 12rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img sync \\.(png%7Cjpg)$":
/*!***************************************************!*\
  !*** ./src/img/ sync nonrecursive \.(png%7Cjpg)$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cointreau.png": "./src/img/cointreau.png",
	"./disaronno.png": "./src/img/disaronno.png",
	"./logo.png": "./src/img/logo.png",
	"./martini_bianco.png": "./src/img/martini_bianco.png",
	"./martini_rosato.png": "./src/img/martini_rosato.png",
	"./martini_rose.png": "./src/img/martini_rose.png",
	"./martini_rosso.png": "./src/img/martini_rosso.png",
	"./sanderman_porto.png": "./src/img/sanderman_porto.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/img sync \\.(png%7Cjpg)$";

/***/ }),

/***/ "./src/img/cointreau.png":
/*!*******************************!*\
  !*** ./src/img/cointreau.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "29a52b9d0a5cbe2138c6.png";

/***/ }),

/***/ "./src/img/disaronno.png":
/*!*******************************!*\
  !*** ./src/img/disaronno.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a4def7cc70e22e2fa6eb.png";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a5721eb552f02ad76de4.png";

/***/ }),

/***/ "./src/img/martini_bianco.png":
/*!************************************!*\
  !*** ./src/img/martini_bianco.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3d9a19c769e01ae3abe3.png";

/***/ }),

/***/ "./src/img/martini_rosato.png":
/*!************************************!*\
  !*** ./src/img/martini_rosato.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ab9e044d397501624362.png";

/***/ }),

/***/ "./src/img/martini_rose.png":
/*!**********************************!*\
  !*** ./src/img/martini_rose.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4baeaa1e01870546c83d.png";

/***/ }),

/***/ "./src/img/martini_rosso.png":
/*!***********************************!*\
  !*** ./src/img/martini_rosso.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ac206786f5c43cc49ef4.png";

/***/ }),

/***/ "./src/img/sanderman_porto.png":
/*!*************************************!*\
  !*** ./src/img/sanderman_porto.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a6421c0b2d2343ef3274.png";

/***/ }),

/***/ "./src/structure/background.js":
/*!*************************************!*\
  !*** ./src/structure/background.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backgroundTransition)
/* harmony export */ });
function backgroundTransition(setBg) {
    const background = document.getElementById('bg-transition');

    background.style.opacity = 0;

    setTimeout(() => {
        background.style.background = setBg;
        background.style.opacity = 1;
    }, 500);
}

/***/ }),

/***/ "./src/structure/contact.js":
/*!**********************************!*\
  !*** ./src/structure/contact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayContact)
/* harmony export */ });
function displayContact() {
    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.className = 'contact';

    const body = document.createElement('div');
    body.className = 'contact-body';

    const header = document.createElement('h1');
    header.innerHTML = 'Are you <span class="highlight">interested</span> with us?'

    const description = document.createElement('p');
    description.className = 'mb';
    description.textContent = 'Fill up the contents below and we will make sure to read it.';

    const fullname = document.createElement('div');
    fullname.className = 'col-grid';

    const firstnameDiv = document.createElement('div');
    firstnameDiv.className = 'flex-input';

    const firstnameLabel = document.createElement('label');
    firstnameLabel.textContent = 'First name';
    firstnameLabel.htmlFor = 'first-name';

    const firstnameInput = document.createElement('input');
    firstnameInput.type = 'text';
    firstnameInput.id = 'first-name';

    const lastnameDiv = document.createElement('div');
    lastnameDiv.className = 'flex-input';

    const lastnameLabel = document.createElement('label');
    lastnameLabel.textContent = 'Last name';
    lastnameLabel.htmlFor = 'last-name';

    const lastnameInput = document.createElement('input');
    lastnameInput.type = 'text';
    lastnameInput.id = 'last-name';

    const contactInfo = document.createElement('div');
    contactInfo.className = 'col-grid';

    const emailDiv = document.createElement('div');
    emailDiv.className = 'flex-input';

    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Email';
    emailLabel.htmlFor = 'email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';

    const phoneDiv = document.createElement('div');
    phoneDiv.className = 'flex-input';

    const phoneLabel = document.createElement('label');
    phoneLabel.textContent = 'Phone';
    phoneLabel.htmlFor = 'phone';

    const phoneInput = document.createElement('input');
    phoneInput.type = 'number';
    phoneInput.id = 'phone';

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex-input', 'mb');

    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'What do you want?';
    messageLabel.htmlFor = 'message';

    const messageTextarea = document.createElement('textarea');
    messageTextarea.rows = 10;

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'btn-submit';
    btnSubmit.textContent = 'Submit';

    [messageLabel, messageTextarea].forEach(l => messageDiv.appendChild(l));
    [phoneLabel, phoneInput].forEach(l => phoneDiv.appendChild(l));
    [emailLabel, emailInput].forEach(l => emailDiv.appendChild(l));
    [emailDiv, phoneDiv].forEach(l => contactInfo.appendChild(l));
    [lastnameLabel, lastnameInput].forEach(l => lastnameDiv.appendChild(l));
    [firstnameLabel, firstnameInput].forEach(l => firstnameDiv.appendChild(l));
    [firstnameDiv, lastnameDiv].forEach(l => fullname.appendChild(l));
    [header, description, fullname, contactInfo, messageDiv, btnSubmit].forEach(l => body.appendChild(l));
    container.appendChild(body);
    frag.appendChild(container);

    return frag;
}

/***/ }),

/***/ "./src/structure/footer.js":
/*!*********************************!*\
  !*** ./src/structure/footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayFooter)
/* harmony export */ });
function displayFooter() {
    const frag = document.createDocumentFragment();

    const footer = document.createElement('footer');
    footer.className = 'fixed-footer';
    footer.textContent = 'Best Viewed in Desktop';

    frag.appendChild(footer);

    return frag;
}

/***/ }),

/***/ "./src/structure/home.js":
/*!*******************************!*\
  !*** ./src/structure/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHome)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/structure/background.js");


let lineInterval;

function displayHome() {
    (0,_background__WEBPACK_IMPORTED_MODULE_0__["default"])('radial-gradient(circle at center, #0c1923 0%, #000000 80%)');

    if (lineInterval) clearInterval(lineInterval);

    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.className = 'flex-center';

    const content = document.createElement('div');
    content.className = 'welcome';

    const punchline = document.createElement('h1');
    const lines = [
        'Do you <span class="highlight">come</span> here often?',
        'If so, try our new <span class="highlight">cocktails</span>',
        'Cheap. <span class="highlight">Worth</span>. Satisfied.'
    ];

    content.appendChild(punchline);
    container.appendChild(content);
    frag.appendChild(container);

    let i = 0;
    const changeLine = () => {
        punchline.classList.remove('fade');
        void punchline.offsetWidth;
        punchline.innerHTML = lines[i];
        punchline.classList.add('fade');
        i = (i + 1) % lines.length;
    };

    lineInterval = setInterval(changeLine, 4000);
    changeLine();

    return frag;
}

/***/ }),

/***/ "./src/structure/menu.js":
/*!*******************************!*\
  !*** ./src/structure/menu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenu)
/* harmony export */ });
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./src/structure/background.js");


function displayMenu() {
    (0,_background__WEBPACK_IMPORTED_MODULE_0__["default"])('#0c1923');

    const importIMG = __webpack_require__("./src/img sync \\.(png%7Cjpg)$");

    const items = [
        { name: 'Cointreau', filename: 'cointreau.png', price: '$108', description: 'Sed bibendum, sapien a venenatis fermentum, mauris augue cursus turpis, vitae elementum massa orci sit amet massa.' },
        { name: 'Disaronno', filename: 'disaronno.png', price: '$102', description: 'Integer laoreet, sapien eget vehicula vehicula, odio lorem scelerisque magna, nec gravida libero nulla eget risus.' },
        { name: 'Martini Bianco', filename: 'martini_bianco.png', price: '$85', description: 'Duis efficitur, sapien quis bibendum auctor, lectus risus feugiat sapien, ac pulvinar orci est a arcu.' },
        { name: 'Martini Rose', filename: 'martini_rose.png', price: '$98', description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
        { name: 'Sanderman Porto', filename: 'sanderman_porto.png', price: '$111', description: 'Vivamus commodo, odio sed fringilla pretium, sem nulla feugiat odio, in cursus elit dolor et ex.' },
        { name: 'Martini Rosato', filename: 'martini_rosato.png', price: '$101', description: 'Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero.' },
        //{ name: 'Martini Rosso', filename: 'martini_rosso.png', price: '$101', description: 'Praesent placerat, magna in vehicula vestibulum, felis urna cursus lorem, sed vestibulum quam eros vel libero.' },
    ];

    const createBox = (i) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = importIMG(`./${i.filename}`);
        img.alt = i.name;

        const body = document.createElement('div');
        body.className = 'card-body';

        const header = document.createElement('div');
        header.className = 'card-header';

        const name = document.createElement('h3');
        name.textContent = i.name;

        const price = document.createElement('span');
        price.textContent = i.price;

        const description = document.createElement('p');
        description.textContent = i.description;

        [name, price].forEach(l => header.appendChild(l));
        [header, description].forEach(l => body.appendChild(l));
        [img, body].forEach(l => card.appendChild(l));

        return card;
    };

    const frag = document.createDocumentFragment();

    const container = document.createElement('div');
    container.classList.add('grid-menu', 'container-fluid');

    for (const i of items) {
        container.appendChild(createBox(i));
    }

    frag.appendChild(container);

    return frag;
}

/***/ }),

/***/ "./src/structure/navigation.js":
/*!*************************************!*\
  !*** ./src/structure/navigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createNav)
/* harmony export */ });
function createNav(navigate) {
    const frag = document.createDocumentFragment();

    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'container');

    const logo = document.createElement('div');
    logo.className = 'brand';

    const page = document.createElement('ul');
    page.className = 'navbar-list';

    const home = document.createElement('li');
    home.textContent = 'Home';
    home.dataset.route = 'home';

    const menu = document.createElement('li');
    menu.textContent = 'Menu';
    menu.dataset.route = 'menu';

    const contact = document.createElement('li');
    contact.textContent = 'Contact';
    contact.dataset.route = 'contact';

    [home, menu, contact].forEach(l => page.appendChild(l));
    [logo, page].forEach(l => nav.appendChild(l));
    frag.appendChild(nav);

    nav.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li || !nav.contains(li)) return;
        const route = li.dataset.route;
        if (route) navigate(route);
    });

    return frag;
}

/***/ }),

/***/ "./src/stylesheet.css":
/*!****************************!*\
  !*** ./src/stylesheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet.css */ "./src/stylesheet.css");
/* harmony import */ var _structure_navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./structure/navigation.js */ "./src/structure/navigation.js");
/* harmony import */ var _structure_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./structure/home.js */ "./src/structure/home.js");
/* harmony import */ var _structure_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./structure/menu.js */ "./src/structure/menu.js");
/* harmony import */ var _structure_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./structure/contact.js */ "./src/structure/contact.js");
/* harmony import */ var _structure_footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structure/footer.js */ "./src/structure/footer.js");







const load = () => {
    const route = {
        home: _structure_home_js__WEBPACK_IMPORTED_MODULE_2__["default"],
        menu: _structure_menu_js__WEBPACK_IMPORTED_MODULE_3__["default"],
        contact: _structure_contact_js__WEBPACK_IMPORTED_MODULE_4__["default"]
    }

    const navigate = (r) => {
        const make = route[r] ?? route.home;
        page.replaceChildren(make());
    };

    const app = document.getElementById('app');

    const background = document.createElement('div');
    background.id = 'bg-transition';

    const page = document.createElement('main');

    [background, (0,_structure_navigation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(navigate), page, (0,_structure_footer_js__WEBPACK_IMPORTED_MODULE_5__["default"])()].forEach(l => app.appendChild(l));

    navigate('home');
};

load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMseUdBQWlDO0FBQzdFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YscUlBQXFJLDBDQUEwQyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUNuUyx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQ0FBbUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxZQUFZO0FBQ3JCLGVBQWUsWUFBWTtBQUMzQixXQUFXLFlBQVk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHFGQUFxRixZQUFZLGFBQWEsYUFBYSxPQUFPLFNBQVMsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLGlDQUFpQyxPQUFPLEtBQUssZUFBZSxnQkFBZ0IsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxX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Q0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUEsb0I7Ozs7O1dDckJBLG1DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDd0I7QUFDSjtBQUNBO0FBQ007QUFDRjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLDBEQUFXO0FBQ3pCLGNBQWMsMERBQVc7QUFDekIsaUJBQWlCLDZEQUFjO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0VBQVMsa0JBQWtCLGdFQUFhO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXNoZWV0LmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBnKSQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnVjdHVyZS9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJ1Y3R1cmUvY29udGFjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0dXJlL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RydWN0dXJlL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnVjdHVyZS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHJ1Y3R1cmUvbmF2aWdhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzaGVldC5jc3M/ZDc0ZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2xvZ28ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSxcclxuaDEsXHJcbmgzLFxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogIzBjMTkyMztcclxuICAgIGNvbG9yOiAjZmRmOWYzO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNiZy10cmFuc2l0aW9uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgIzBjMTkyMyAwJSwgIzAwMDAwMCA4MCUpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1JTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogNSU7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhciAuYnJhbmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYuNXJlbTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5uYXZiYXIgLm5hdmJhci1saXN0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDZyZW07XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlzdCBsaSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIHNlcmlmO1xyXG4gICAgZm9udC1vcHRpY2FsLXNpemluZzogYXV0bztcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmRmOWYzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLm5hdmJhci1saXN0IGxpOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMmRlZGYzO1xyXG59XHJcblxyXG4uZmxleC1jZW50ZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA5MDBweDtcclxufVxyXG5cclxuLndlbGNvbWUgaDEge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi53ZWxjb21lIC5mYWRlIHtcclxuICAgIGFuaW1hdGlvbjogZmFkZVNsaWRlIDRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0IHtcclxuICAgIGNvbG9yOiAjNzFmOWZmO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVTbGlkZSB7XHJcbiAgICAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjI1cmVtKTsgfVxyXG4gICAgMjAlLCA4MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxuICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjVyZW0pOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbm9ybWFsRmFkZSB7XHJcbiAgICBmcm9tIHsgb3BhY2l0eTogMCB9XHJcbiAgICB0byB7IG9wYWNpdHk6IDEgfVxyXG59XHJcblxyXG4uZ3JpZC1tZW51IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNSU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDEyLjVyZW0sIDFmcikpO1xyXG4gICAgZ2FwOiA1cmVtO1xyXG4gICAgYW5pbWF0aW9uOiBub3JtYWxGYWRlIDEuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIDFmcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4uY2FyZCBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiAxMHJlbTtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtYm9keSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICAgIGJhY2tncm91bmQ6ICMzNTUxNmQ7XHJcbn1cclxuXHJcbi5jYXJkIC5jYXJkLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgYXV0bztcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTs7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciBoMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYTdmMmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XHJcbiAgICBjb2xvcjogIzIzOWNhODtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIgc3BhbiB7XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICAgIHBhZGRpbmc6IDAuNHJlbTtcclxuICAgIGJhY2tncm91bmQ6ICMzZjkzOWE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJvZHkgcCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcclxufVxyXG5cclxuLm1iIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFuaW1hdGlvbjogbm9ybWFsRmFkZSAxLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY29udGFjdCAuY29sLWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4vKlxyXG4uY29udGFjdCAuY29sLWdyaWQ6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbiovXHJcblxyXG4uY29udGFjdCAuZmxleC1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRhY3QgLmNvbnRhY3QtYm9keSB7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5jb250YWN0IGlucHV0IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZTdhOTY7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogIzFiMzQzYztcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGNvbG9yOiAjZmRmOWYzO1xyXG59XHJcblxyXG4uY29udGFjdCBsYWJlbCB7XHJcbiAgICBjb2xvcjogIzNlN2E5NjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jb250YWN0IHRleHRhcmVhIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMWIzNDNjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlN2E5NjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGNvbG9yOiAjZmRmOWYzO1xyXG59XHJcblxyXG4uY29udGFjdCAuYnRuLXN1Ym1pdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlN2E5NjtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgYmFja2dyb3VuZDogIzFiMzQzYztcclxuICAgIGNvbG9yOiAjZmRmOWYzO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNvbnRhY3QgLmJ0bi1zdWJtaXQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzNlN2E5NjtcclxufVxyXG5cclxuLmNvbnRhY3QgaW5wdXQ6Zm9jdXMsXHJcbi5jb250YWN0IHRleHRhcmVhOmZvY3VzIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NmJkY2Y7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuLmZpeGVkLWZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2xvcjogIzM1NTE2ZDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcclxuICAgIC5ncmlkLW1lbnUge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCBpbWcge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDEycmVtO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTs7Ozs7SUFLSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsUUFBUTtJQUNSLG9DQUFvQztJQUNwQyxzRUFBc0U7SUFDdEUsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ks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ZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbmgxLFxcclxcbmgzLFxcclxcbnAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMGMxOTIzO1xcclxcbiAgICBjb2xvcjogI2ZkZjlmMztcXHJcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbiNiZy10cmFuc2l0aW9uIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICAgIGluc2V0OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuOHMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgY2VudGVyLCAjMGMxOTIzIDAlLCAjMDAwMDAwIDgwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNSU7XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXItZmx1aWQge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLmJyYW5kIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNi41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1nL2xvZ28ucG5nJyk7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAubmF2YmFyLWxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDZyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhci1saXN0IGxpIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQbGF5ZmFpciBEaXNwbGF5XFxcIiwgc2VyaWY7XFxyXFxuICAgIGZvbnQtb3B0aWNhbC1zaXppbmc6IGF1dG87XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjZmRmOWYzO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLWxpc3QgbGk6aG92ZXIge1xcclxcbiAgICBjb2xvcjogIzJkZWRmMztcXHJcXG59XFxyXFxuXFxyXFxuLmZsZXgtY2VudGVyIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lIHtcXHJcXG4gICAgd2lkdGg6IDkwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ud2VsY29tZSAuZmFkZSB7XFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZVNsaWRlIDRzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlnaGxpZ2h0IHtcXHJcXG4gICAgY29sb3I6ICM3MWY5ZmY7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZVNsaWRlIHtcXHJcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS4yNXJlbSk7IH1cXHJcXG4gICAgMjAlLCA4MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXHJcXG4gICAgMTAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yNXJlbSk7IH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBub3JtYWxGYWRlIHtcXHJcXG4gICAgZnJvbSB7IG9wYWNpdHk6IDAgfVxcclxcbiAgICB0byB7IG9wYWNpdHk6IDEgfVxcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZC1tZW51IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1JTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDEyLjVyZW0sIDFmcikpO1xcclxcbiAgICBnYXA6IDVyZW07XFxyXFxuICAgIGFuaW1hdGlvbjogbm9ybWFsRmFkZSAxLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gMWZyO1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LWhlaWdodDogMTByZW07XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jYXJkIC5jYXJkLWJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMzU1MTZkO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZCAuY2FyZC1oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBhdXRvO1xcclxcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtaGVhZGVyIGgzIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2E3ZjJmZjtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjMjM5Y2E4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZC1oZWFkZXIgc3BhbiB7XFxyXFxuICAgIHdpZHRoOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjRyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICMzZjkzOWE7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtYm9keSBwIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1iIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFuaW1hdGlvbjogbm9ybWFsRmFkZSAxLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCAuY29sLWdyaWQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuLmNvbnRhY3QgLmNvbC1ncmlkOmxhc3QtY2hpbGQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG4qL1xcclxcblxcclxcbi5jb250YWN0IC5mbGV4LWlucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgLmNvbnRhY3QtYm9keSB7XFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBpbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzZTdhOTY7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6ICMxYjM0M2M7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgY29sb3I6ICNmZGY5ZjM7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IGxhYmVsIHtcXHJcXG4gICAgY29sb3I6ICMzZTdhOTY7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHRleHRhcmVhIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMWIzNDNjO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM2U3YTk2O1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGNvbG9yOiAjZmRmOWYzO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCAuYnRuLXN1Ym1pdCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNlN2E5NjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFiMzQzYztcXHJcXG4gICAgY29sb3I6ICNmZGY5ZjM7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IC5idG4tc3VibWl0OmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzNlN2E5NjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaW5wdXQ6Zm9jdXMsXFxyXFxuLmNvbnRhY3QgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTZiZGNmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcXHJcXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XFxyXFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xcclxcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpeGVkLWZvb3RlciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgY29sb3I6ICMzNTUxNmQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNjQwcHgpIHtcXHJcXG4gICAgLmdyaWQtbWVudSB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZCB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FyZCBpbWcge1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMTJyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY29pbnRyZWF1LnBuZ1wiOiBcIi4vc3JjL2ltZy9jb2ludHJlYXUucG5nXCIsXG5cdFwiLi9kaXNhcm9ubm8ucG5nXCI6IFwiLi9zcmMvaW1nL2Rpc2Fyb25uby5wbmdcIixcblx0XCIuL2xvZ28ucG5nXCI6IFwiLi9zcmMvaW1nL2xvZ28ucG5nXCIsXG5cdFwiLi9tYXJ0aW5pX2JpYW5jby5wbmdcIjogXCIuL3NyYy9pbWcvbWFydGluaV9iaWFuY28ucG5nXCIsXG5cdFwiLi9tYXJ0aW5pX3Jvc2F0by5wbmdcIjogXCIuL3NyYy9pbWcvbWFydGluaV9yb3NhdG8ucG5nXCIsXG5cdFwiLi9tYXJ0aW5pX3Jvc2UucG5nXCI6IFwiLi9zcmMvaW1nL21hcnRpbmlfcm9zZS5wbmdcIixcblx0XCIuL21hcnRpbmlfcm9zc28ucG5nXCI6IFwiLi9zcmMvaW1nL21hcnRpbmlfcm9zc28ucG5nXCIsXG5cdFwiLi9zYW5kZXJtYW5fcG9ydG8ucG5nXCI6IFwiLi9zcmMvaW1nL3NhbmRlcm1hbl9wb3J0by5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvaW1nIHN5bmMgXFxcXC4ocG5nJTdDanBnKSRcIjsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBiYWNrZ3JvdW5kVHJhbnNpdGlvbihzZXRCZykge1xyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiZy10cmFuc2l0aW9uJyk7XHJcblxyXG4gICAgYmFja2dyb3VuZC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmQgPSBzZXRCZztcclxuICAgICAgICBiYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSAxO1xyXG4gICAgfSwgNTAwKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDb250YWN0KCkge1xyXG4gICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY29udGFjdCc7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSAnY29udGFjdC1ib2R5JztcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdBcmUgeW91IDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0XCI+aW50ZXJlc3RlZDwvc3Bhbj4gd2l0aCB1cz8nXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvbi5jbGFzc05hbWUgPSAnbWInO1xyXG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSAnRmlsbCB1cCB0aGUgY29udGVudHMgYmVsb3cgYW5kIHdlIHdpbGwgbWFrZSBzdXJlIHRvIHJlYWQgaXQuJztcclxuXHJcbiAgICBjb25zdCBmdWxsbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZnVsbG5hbWUuY2xhc3NOYW1lID0gJ2NvbC1ncmlkJztcclxuXHJcbiAgICBjb25zdCBmaXJzdG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpcnN0bmFtZURpdi5jbGFzc05hbWUgPSAnZmxleC1pbnB1dCc7XHJcblxyXG4gICAgY29uc3QgZmlyc3RuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZmlyc3RuYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnRmlyc3QgbmFtZSc7XHJcbiAgICBmaXJzdG5hbWVMYWJlbC5odG1sRm9yID0gJ2ZpcnN0LW5hbWUnO1xyXG5cclxuICAgIGNvbnN0IGZpcnN0bmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGZpcnN0bmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBmaXJzdG5hbWVJbnB1dC5pZCA9ICdmaXJzdC1uYW1lJztcclxuXHJcbiAgICBjb25zdCBsYXN0bmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGFzdG5hbWVEaXYuY2xhc3NOYW1lID0gJ2ZsZXgtaW5wdXQnO1xyXG5cclxuICAgIGNvbnN0IGxhc3RuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFzdG5hbWVMYWJlbC50ZXh0Q29udGVudCA9ICdMYXN0IG5hbWUnO1xyXG4gICAgbGFzdG5hbWVMYWJlbC5odG1sRm9yID0gJ2xhc3QtbmFtZSc7XHJcblxyXG4gICAgY29uc3QgbGFzdG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBsYXN0bmFtZUlucHV0LnR5cGUgPSAndGV4dCc7XHJcbiAgICBsYXN0bmFtZUlucHV0LmlkID0gJ2xhc3QtbmFtZSc7XHJcblxyXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3RJbmZvLmNsYXNzTmFtZSA9ICdjb2wtZ3JpZCc7XHJcblxyXG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTmFtZSA9ICdmbGV4LWlucHV0JztcclxuXHJcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWwnO1xyXG4gICAgZW1haWxMYWJlbC5odG1sRm9yID0gJ2VtYWlsJztcclxuXHJcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCc7XHJcbiAgICBlbWFpbElucHV0LmlkID0gJ2VtYWlsJztcclxuXHJcbiAgICBjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGhvbmVEaXYuY2xhc3NOYW1lID0gJ2ZsZXgtaW5wdXQnO1xyXG5cclxuICAgIGNvbnN0IHBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgcGhvbmVMYWJlbC50ZXh0Q29udGVudCA9ICdQaG9uZSc7XHJcbiAgICBwaG9uZUxhYmVsLmh0bWxGb3IgPSAncGhvbmUnO1xyXG5cclxuICAgIGNvbnN0IHBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgcGhvbmVJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICBwaG9uZUlucHV0LmlkID0gJ3Bob25lJztcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZXNzYWdlRGl2LmNsYXNzTGlzdC5hZGQoJ2ZsZXgtaW5wdXQnLCAnbWInKTtcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbWVzc2FnZUxhYmVsLnRleHRDb250ZW50ID0gJ1doYXQgZG8geW91IHdhbnQ/JztcclxuICAgIG1lc3NhZ2VMYWJlbC5odG1sRm9yID0gJ21lc3NhZ2UnO1xyXG5cclxuICAgIGNvbnN0IG1lc3NhZ2VUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICBtZXNzYWdlVGV4dGFyZWEucm93cyA9IDEwO1xyXG5cclxuICAgIGNvbnN0IGJ0blN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuU3VibWl0LmNsYXNzTmFtZSA9ICdidG4tc3VibWl0JztcclxuICAgIGJ0blN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xyXG5cclxuICAgIFttZXNzYWdlTGFiZWwsIG1lc3NhZ2VUZXh0YXJlYV0uZm9yRWFjaChsID0+IG1lc3NhZ2VEaXYuYXBwZW5kQ2hpbGQobCkpO1xyXG4gICAgW3Bob25lTGFiZWwsIHBob25lSW5wdXRdLmZvckVhY2gobCA9PiBwaG9uZURpdi5hcHBlbmRDaGlsZChsKSk7XHJcbiAgICBbZW1haWxMYWJlbCwgZW1haWxJbnB1dF0uZm9yRWFjaChsID0+IGVtYWlsRGl2LmFwcGVuZENoaWxkKGwpKTtcclxuICAgIFtlbWFpbERpdiwgcGhvbmVEaXZdLmZvckVhY2gobCA9PiBjb250YWN0SW5mby5hcHBlbmRDaGlsZChsKSk7XHJcbiAgICBbbGFzdG5hbWVMYWJlbCwgbGFzdG5hbWVJbnB1dF0uZm9yRWFjaChsID0+IGxhc3RuYW1lRGl2LmFwcGVuZENoaWxkKGwpKTtcclxuICAgIFtmaXJzdG5hbWVMYWJlbCwgZmlyc3RuYW1lSW5wdXRdLmZvckVhY2gobCA9PiBmaXJzdG5hbWVEaXYuYXBwZW5kQ2hpbGQobCkpO1xyXG4gICAgW2ZpcnN0bmFtZURpdiwgbGFzdG5hbWVEaXZdLmZvckVhY2gobCA9PiBmdWxsbmFtZS5hcHBlbmRDaGlsZChsKSk7XHJcbiAgICBbaGVhZGVyLCBkZXNjcmlwdGlvbiwgZnVsbG5hbWUsIGNvbnRhY3RJbmZvLCBtZXNzYWdlRGl2LCBidG5TdWJtaXRdLmZvckVhY2gobCA9PiBib2R5LmFwcGVuZENoaWxkKGwpKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChib2R5KTtcclxuICAgIGZyYWcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICByZXR1cm4gZnJhZztcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlGb290ZXIoKSB7XHJcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdmaXhlZC1mb290ZXInO1xyXG4gICAgZm9vdGVyLnRleHRDb250ZW50ID0gJ0Jlc3QgVmlld2VkIGluIERlc2t0b3AnO1xyXG5cclxuICAgIGZyYWcuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gZnJhZztcclxufSIsImltcG9ydCBiYWNrZ3JvdW5kVHJhbnNpdGlvbiBmcm9tIFwiLi9iYWNrZ3JvdW5kXCI7XHJcblxyXG5sZXQgbGluZUludGVydmFsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUhvbWUoKSB7XHJcbiAgICBiYWNrZ3JvdW5kVHJhbnNpdGlvbigncmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBjZW50ZXIsICMwYzE5MjMgMCUsICMwMDAwMDAgODAlKScpO1xyXG5cclxuICAgIGlmIChsaW5lSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwobGluZUludGVydmFsKTtcclxuXHJcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdmbGV4LWNlbnRlcic7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnd2VsY29tZSc7XHJcblxyXG4gICAgY29uc3QgcHVuY2hsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IGxpbmVzID0gW1xyXG4gICAgICAgICdEbyB5b3UgPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj5jb21lPC9zcGFuPiBoZXJlIG9mdGVuPycsXHJcbiAgICAgICAgJ0lmIHNvLCB0cnkgb3VyIG5ldyA8c3BhbiBjbGFzcz1cImhpZ2hsaWdodFwiPmNvY2t0YWlsczwvc3Bhbj4nLFxyXG4gICAgICAgICdDaGVhcC4gPHNwYW4gY2xhc3M9XCJoaWdobGlnaHRcIj5Xb3J0aDwvc3Bhbj4uIFNhdGlzZmllZC4nXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHVuY2hsaW5lKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIGZyYWcuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuXHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBjb25zdCBjaGFuZ2VMaW5lID0gKCkgPT4ge1xyXG4gICAgICAgIHB1bmNobGluZS5jbGFzc0xpc3QucmVtb3ZlKCdmYWRlJyk7XHJcbiAgICAgICAgdm9pZCBwdW5jaGxpbmUub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgcHVuY2hsaW5lLmlubmVySFRNTCA9IGxpbmVzW2ldO1xyXG4gICAgICAgIHB1bmNobGluZS5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XHJcbiAgICAgICAgaSA9IChpICsgMSkgJSBsaW5lcy5sZW5ndGg7XHJcbiAgICB9O1xyXG5cclxuICAgIGxpbmVJbnRlcnZhbCA9IHNldEludGVydmFsKGNoYW5nZUxpbmUsIDQwMDApO1xyXG4gICAgY2hhbmdlTGluZSgpO1xyXG5cclxuICAgIHJldHVybiBmcmFnO1xyXG59IiwiaW1wb3J0IGJhY2tncm91bmRUcmFuc2l0aW9uIGZyb20gXCIuL2JhY2tncm91bmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xyXG4gICAgYmFja2dyb3VuZFRyYW5zaXRpb24oJyMwYzE5MjMnKTtcclxuXHJcbiAgICBjb25zdCBpbXBvcnRJTUcgPSByZXF1aXJlLmNvbnRleHQoJy4uL2ltZycsIGZhbHNlLCAvXFwuKHBuZ3xqcGcpJC8pO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgIHsgbmFtZTogJ0NvaW50cmVhdScsIGZpbGVuYW1lOiAnY29pbnRyZWF1LnBuZycsIHByaWNlOiAnJDEwOCcsIGRlc2NyaXB0aW9uOiAnU2VkIGJpYmVuZHVtLCBzYXBpZW4gYSB2ZW5lbmF0aXMgZmVybWVudHVtLCBtYXVyaXMgYXVndWUgY3Vyc3VzIHR1cnBpcywgdml0YWUgZWxlbWVudHVtIG1hc3NhIG9yY2kgc2l0IGFtZXQgbWFzc2EuJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ0Rpc2Fyb25ubycsIGZpbGVuYW1lOiAnZGlzYXJvbm5vLnBuZycsIHByaWNlOiAnJDEwMicsIGRlc2NyaXB0aW9uOiAnSW50ZWdlciBsYW9yZWV0LCBzYXBpZW4gZWdldCB2ZWhpY3VsYSB2ZWhpY3VsYSwgb2RpbyBsb3JlbSBzY2VsZXJpc3F1ZSBtYWduYSwgbmVjIGdyYXZpZGEgbGliZXJvIG51bGxhIGVnZXQgcmlzdXMuJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01hcnRpbmkgQmlhbmNvJywgZmlsZW5hbWU6ICdtYXJ0aW5pX2JpYW5jby5wbmcnLCBwcmljZTogJyQ4NScsIGRlc2NyaXB0aW9uOiAnRHVpcyBlZmZpY2l0dXIsIHNhcGllbiBxdWlzIGJpYmVuZHVtIGF1Y3RvciwgbGVjdHVzIHJpc3VzIGZldWdpYXQgc2FwaWVuLCBhYyBwdWx2aW5hciBvcmNpIGVzdCBhIGFyY3UuJyB9LFxyXG4gICAgICAgIHsgbmFtZTogJ01hcnRpbmkgUm9zZScsIGZpbGVuYW1lOiAnbWFydGluaV9yb3NlLnBuZycsIHByaWNlOiAnJDk4JywgZGVzY3JpcHRpb246ICdEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4nIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnU2FuZGVybWFuIFBvcnRvJywgZmlsZW5hbWU6ICdzYW5kZXJtYW5fcG9ydG8ucG5nJywgcHJpY2U6ICckMTExJywgZGVzY3JpcHRpb246ICdWaXZhbXVzIGNvbW1vZG8sIG9kaW8gc2VkIGZyaW5naWxsYSBwcmV0aXVtLCBzZW0gbnVsbGEgZmV1Z2lhdCBvZGlvLCBpbiBjdXJzdXMgZWxpdCBkb2xvciBldCBleC4nIH0sXHJcbiAgICAgICAgeyBuYW1lOiAnTWFydGluaSBSb3NhdG8nLCBmaWxlbmFtZTogJ21hcnRpbmlfcm9zYXRvLnBuZycsIHByaWNlOiAnJDEwMScsIGRlc2NyaXB0aW9uOiAnUHJhZXNlbnQgcGxhY2VyYXQsIG1hZ25hIGluIHZlaGljdWxhIHZlc3RpYnVsdW0sIGZlbGlzIHVybmEgY3Vyc3VzIGxvcmVtLCBzZWQgdmVzdGlidWx1bSBxdWFtIGVyb3MgdmVsIGxpYmVyby4nIH0sXHJcbiAgICAgICAgLy97IG5hbWU6ICdNYXJ0aW5pIFJvc3NvJywgZmlsZW5hbWU6ICdtYXJ0aW5pX3Jvc3NvLnBuZycsIHByaWNlOiAnJDEwMScsIGRlc2NyaXB0aW9uOiAnUHJhZXNlbnQgcGxhY2VyYXQsIG1hZ25hIGluIHZlaGljdWxhIHZlc3RpYnVsdW0sIGZlbGlzIHVybmEgY3Vyc3VzIGxvcmVtLCBzZWQgdmVzdGlidWx1bSBxdWFtIGVyb3MgdmVsIGxpYmVyby4nIH0sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJveCA9IChpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQnO1xyXG5cclxuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWcuc3JjID0gaW1wb3J0SU1HKGAuLyR7aS5maWxlbmFtZX1gKTtcclxuICAgICAgICBpbWcuYWx0ID0gaS5uYW1lO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuXHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdjYXJkLWhlYWRlcic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpLm5hbWU7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaS5wcmljZTtcclxuXHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpLmRlc2NyaXB0aW9uO1xyXG5cclxuICAgICAgICBbbmFtZSwgcHJpY2VdLmZvckVhY2gobCA9PiBoZWFkZXIuYXBwZW5kQ2hpbGQobCkpO1xyXG4gICAgICAgIFtoZWFkZXIsIGRlc2NyaXB0aW9uXS5mb3JFYWNoKGwgPT4gYm9keS5hcHBlbmRDaGlsZChsKSk7XHJcbiAgICAgICAgW2ltZywgYm9keV0uZm9yRWFjaChsID0+IGNhcmQuYXBwZW5kQ2hpbGQobCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2FyZDtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZnJhZyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdncmlkLW1lbnUnLCAnY29udGFpbmVyLWZsdWlkJyk7XHJcblxyXG4gICAgZm9yIChjb25zdCBpIG9mIGl0ZW1zKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJveChpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnJhZy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICAgIHJldHVybiBmcmFnO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTmF2KG5hdmlnYXRlKSB7XHJcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdmJhcicsICdjb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdicmFuZCc7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBwYWdlLmNsYXNzTmFtZSA9ICduYXZiYXItbGlzdCc7XHJcblxyXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xyXG4gICAgaG9tZS5kYXRhc2V0LnJvdXRlID0gJ2hvbWUnO1xyXG5cclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgbWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICAgIG1lbnUuZGF0YXNldC5yb3V0ZSA9ICdtZW51JztcclxuXHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgICBjb250YWN0LmRhdGFzZXQucm91dGUgPSAnY29udGFjdCc7XHJcblxyXG4gICAgW2hvbWUsIG1lbnUsIGNvbnRhY3RdLmZvckVhY2gobCA9PiBwYWdlLmFwcGVuZENoaWxkKGwpKTtcclxuICAgIFtsb2dvLCBwYWdlXS5mb3JFYWNoKGwgPT4gbmF2LmFwcGVuZENoaWxkKGwpKTtcclxuICAgIGZyYWcuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpID0gZS50YXJnZXQuY2xvc2VzdCgnbGknKTtcclxuICAgICAgICBpZiAoIWxpIHx8ICFuYXYuY29udGFpbnMobGkpKSByZXR1cm47XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSBsaS5kYXRhc2V0LnJvdXRlO1xyXG4gICAgICAgIGlmIChyb3V0ZSkgbmF2aWdhdGUocm91dGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZyYWc7XHJcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzaGVldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXNoZWV0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoL15ibG9iOi8sIFwiXCIpLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5iYXNlVVJJKSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXNoZWV0LmNzcyc7XHJcbmltcG9ydCBjcmVhdGVOYXYgZnJvbSAnLi9zdHJ1Y3R1cmUvbmF2aWdhdGlvbi5qcyc7XHJcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL3N0cnVjdHVyZS9ob21lLmpzJztcclxuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gJy4vc3RydWN0dXJlL21lbnUuanMnO1xyXG5pbXBvcnQgZGlzcGxheUNvbnRhY3QgZnJvbSAnLi9zdHJ1Y3R1cmUvY29udGFjdC5qcyc7XHJcbmltcG9ydCBkaXNwbGF5Rm9vdGVyIGZyb20gJy4vc3RydWN0dXJlL2Zvb3Rlci5qcyc7XHJcblxyXG5jb25zdCBsb2FkID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGUgPSB7XHJcbiAgICAgICAgaG9tZTogZGlzcGxheUhvbWUsXHJcbiAgICAgICAgbWVudTogZGlzcGxheU1lbnUsXHJcbiAgICAgICAgY29udGFjdDogZGlzcGxheUNvbnRhY3RcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYXZpZ2F0ZSA9IChyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFrZSA9IHJvdXRlW3JdID8/IHJvdXRlLmhvbWU7XHJcbiAgICAgICAgcGFnZS5yZXBsYWNlQ2hpbGRyZW4obWFrZSgpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJhY2tncm91bmQuaWQgPSAnYmctdHJhbnNpdGlvbic7XHJcblxyXG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuXHJcbiAgICBbYmFja2dyb3VuZCwgY3JlYXRlTmF2KG5hdmlnYXRlKSwgcGFnZSwgZGlzcGxheUZvb3RlcigpXS5mb3JFYWNoKGwgPT4gYXBwLmFwcGVuZENoaWxkKGwpKTtcclxuXHJcbiAgICBuYXZpZ2F0ZSgnaG9tZScpO1xyXG59O1xyXG5cclxubG9hZCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==