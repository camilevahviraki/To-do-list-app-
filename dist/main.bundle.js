"use strict";
(self["webpackChunkto_do_list_app"] = self["webpackChunkto_do_list_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background_pattern.jpg */ "./src/images/background_pattern.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hello {\n  color: red;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.imgTrash {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  filter: invert(1);\n}\n\n.container {\n  width: 70%;\n  max-width: 680px;\n\n  /* border: 1px solid rgba(139, 137, 137, 0.623); */\n\n  /* box-shadow: 1px 1px 15px #646464; */\n  margin-top: 100px;\n}\n\n.container h3 {\n  padding: 0 1%;\n  height: 51px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-family: 'Oxygen', sans-serif;\n  margin: 20px 0;\n  width: calc(98% - 2px);\n  background-color: #0c1113;\n  color: #fdf6e6;\n  border-radius: 8px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #09171d;\n}\n\n.input-add-new-wrapp {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-color: #0c1113;\n  height: 52px;\n  margin: 20px 0;\n  border-radius: 8px;\n}\n\n.icon-add-new {\n  position: absolute;\n  filter: invert(1);\n  width: 20px;\n  height: 20px;\n  padding: 4px;\n  border: 1px solid #12181a;\n  border-radius: 50%;\n  transform: rotate(45deg);\n  top: 10px;\n  left: 8px;\n  cursor: pointer;\n}\n\n#inputD {\n  width: calc(100% - 68px);\n  border: none;\n  border-top: 1px solid rgba(139, 137, 137, 0.623);\n  height: 48px;\n  padding-left: 12px;\n  color: #fdf6e6;\n  font-family: 'Oxygen', sans-serif;\n  background-color: #0c1113;\n  border-radius: 8px;\n  position: absolute;\n  right: 0;\n}\n\n#list {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  color: #fdf6e6;\n  background-color: #0c1113;\n}\n\n#list li {\n  height: 51px;\n  border-bottom: 1px solid rgba(139, 137, 137, 0.623);\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 12px;\n}\n\n.button_clear {\n  width: 100%;\n  border: none;\n  border-top: 1px solid rgba(139, 137, 137, 0.623);\n  border-radius: 0;\n  height: 51px;\n  color: #fdf6e6;\n  font-family: 'Circular-Loom', sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: #0c1113;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.button_clear:hover {\n  background-color: #1c2124;\n  color: #fff;\n}\n\n.check-container {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  background-color: #0c1113;\n  border: 1px solid #646464;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  font-size: 18px;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #0c1113;\n  border-radius: 50%;\n}\n\n.check-container:hover input ~ .checkmark {\n  background-color: #171b1d;\n}\n\n.check {\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  position: absolute;\n  opacity: 0;\n}\n\n.checkmark-img {\n  filter: invert();\n  position: absolute;\n  display: none;\n  width: 16px;\n  height: auto;\n  top: 3px;\n  right: 3px;\n}\n\n.check-container input:checked ~ .checkmark-img {\n  display: block;\n}\n\n.check-container input:checked ~ .checkmark {\n  background-color: rgb(7, 23, 31);\n}\n\n#imgRecycle {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  right: 12px;\n  cursor: pointer;\n  filter: invert(85%);\n}\n\n#imgRecycle:hover {\n  transform: rotate(180deg);\n  transition: transform 1s;\n}\n\n.inputTask {\n  width: 85%;\n  border: none;\n  border-top: 1px solid rgba(139, 137, 137, 0.623);\n  color: rgb(224, 221, 221);\n  height: 51px;\n  font-family: 'Circular-Loom', sans-serif;\n  font-size: 14px;\n  display: none;\n  background-color: #1a1f22;\n  cursor: pointer;\n  border-radius: 8px;\n}\n\n.imgRemove {\n  width: 20px;\n  height: 19px;\n  position: absolute;\n  right: 20px;\n  display: none;\n  z-index: 10;\n  cursor: pointer;\n  filter: invert(1);\n}\n\n.pTask {\n  width: 85%;\n  font-family: 'Circular-Loom', sans-serif;\n}\n\n#error_message {\n  font-family: 'Circular-Loom', sans-serif;\n  max-width: 680px;\n  position: absolute;\n  top: 60px;\n  left: 50%;\n  background-color: #130f0c3b;\n  color: #fff;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');\n\n.hello {\n  color: red;\n  background: url('./images/background_pattern.jpg');\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.imgTrash {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n  filter: invert(1);\n}\n\n.container {\n  width: 70%;\n  max-width: 680px;\n\n  /* border: 1px solid rgba(139, 137, 137, 0.623); */\n\n  /* box-shadow: 1px 1px 15px #646464; */\n  margin-top: 100px;\n}\n\n.container h3 {\n  padding: 0 1%;\n  height: 51px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-family: 'Oxygen', sans-serif;\n  margin: 20px 0;\n  width: calc(98% - 2px);\n  background-color: #0c1113;\n  color: #fdf6e6;\n  border-radius: 8px;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-height: 100vh;\n  background-color: #09171d;\n}\n\n.input-add-new-wrapp {\n  width: 100%;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-color: #0c1113;\n  height: 52px;\n  margin: 20px 0;\n  border-radius: 8px;\n}\n\n.icon-add-new {\n  position: absolute;\n  filter: invert(1);\n  width: 20px;\n  height: 20px;\n  padding: 4px;\n  border: 1px solid #12181a;\n  border-radius: 50%;\n  transform: rotate(45deg);\n  top: 10px;\n  left: 8px;\n  cursor: pointer;\n}\n\n#inputD {\n  width: calc(100% - 68px);\n  border: none;\n  border-top: 1px solid rgba(139, 137, 137, 0.623);\n  height: 48px;\n  padding-left: 12px;\n  color: #fdf6e6;\n  font-family: 'Oxygen', sans-serif;\n  background-color: #0c1113;\n  border-radius: 8px;\n  position: absolute;\n  right: 0;\n}\n\n#list {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  border-top-right-radius: 8px;\n  border-top-left-radius: 8px;\n  color: #fdf6e6;\n  background-color: #0c1113;\n}\n\n#list li {\n  height: 51px;\n  border-bottom: 1px solid rgba(139, 137, 137, 0.623);\n  display: flex;\n  align-items: center;\n  position: relative;\n  padding-left: 12px;\n}\n\n.button_clear {\n  width: 100%;\n  border: none;\n  border-top: 1px solid rgba(139, 137, 137, 0.623);\n  border-radius: 0;\n  height: 51px;\n  color: #fdf6e6;\n  font-family: 'Circular-Loom', sans-serif;\n  font-size: 14px;\n  cursor: pointer;\n  background-color: #0c1113;\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n\n.button_clear:hover {\n  background-color: #1c2124;\n  color: #fff;\n}\n\n.check-container {\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-right: 12px;\n  background-color: #0c1113;\n  border: 1px solid #646464;\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  font-size: 18px;\n}\n\n.checkmark {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 20px;\n  width: 20px;\n  background-color: #0c1113;\n  border-radius: 50%;\n}\n\n.check-container:hover input ~ .checkmark {\n  background-color: #171b1d;\n}\n\n.check {\n  cursor: pointer;\n  width: 0;\n  height: 0;\n  position: absolute;\n  opacity: 0;\n}\n\n.checkmark-img {\n  filter: invert();\n  position: absolute;\n  display: none;\n  width: 16px;\n  height: auto;\n  top: 3px;\n  right: 3px;\n}\n\n.check-container input:checked ~ .checkmark-img {\n  display: block;\n}\n\n.check-container input:checked ~ .checkmark {\n  background-color: rgb(7, 23, 31);\n}\n\n#imgRecycle {\n  width: 19px;\n  height: 19px;\n  position: absolute;\n  right: 12px;\n  cursor: pointer;\n  filter: invert(85%);\n}\n\n#imgRecycle:hover {\n  transform: rotate(180deg);\n  transition: transform 1s;\n}\n\n.inputTask {\n  width: 85%;\n  border: none;\n  border-top: 1px solid rgba(139, 137, 137, 0.623);\n  color: rgb(224, 221, 221);\n  height: 51px;\n  font-family: 'Circular-Loom', sans-serif;\n  font-size: 14px;\n  display: none;\n  background-color: #1a1f22;\n  cursor: pointer;\n  border-radius: 8px;\n}\n\n.imgRemove {\n  width: 20px;\n  height: 19px;\n  position: absolute;\n  right: 20px;\n  display: none;\n  z-index: 10;\n  cursor: pointer;\n  filter: invert(1);\n}\n\n.pTask {\n  width: 85%;\n  font-family: 'Circular-Loom', sans-serif;\n}\n\n#error_message {\n  font-family: 'Circular-Loom', sans-serif;\n  max-width: 680px;\n  position: absolute;\n  top: 60px;\n  left: 50%;\n  background-color: #130f0c3b;\n  color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_addAndRemove_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addAndRemove.js */ "./src/modules/addAndRemove.js");



const updateTasks = new _modules_addAndRemove_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
updateTasks.computeTask();


/***/ }),

/***/ "./src/modules/StearChecked.js":
/*!*************************************!*\
  !*** ./src/modules/StearChecked.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SteerChecked = () => {
  const StoreCheck = JSON.parse(localStorage.getItem('TaskToday'));

  StoreCheck.forEach((a, i) => {
    const checkBoxs = document.querySelectorAll('.check');
    if (a.completed === true) {
      checkBoxs[i].checked = true;
      document.getElementById(`ptask${i}`).style.textDecoration = 'line-through rgb(68, 68, 68)';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SteerChecked);


/***/ }),

/***/ "./src/modules/addAndRemove.js":
/*!*************************************!*\
  !*** ./src/modules/addAndRemove.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _displayTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks.js */ "./src/modules/displayTasks.js");
/* harmony import */ var _inputShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputShow.js */ "./src/modules/inputShow.js");
/* harmony import */ var _StearChecked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StearChecked.js */ "./src/modules/StearChecked.js");




class UpdateList {
  constructor() {
    this.taskToday = JSON.parse(localStorage.getItem('TaskToday'));
    this.message = document.getElementById('error_message');
  }

  computeTask() {
    const input = document.getElementById('inputD');
    input.addEventListener('keypress', (event) => {
      this.message.innerText = '';
      if (event.key === 'Enter') {
        event.preventDefault();
        if (this.taskToday) {
          this.add(input.value, false, this.taskToday.length);
        } else {
          this.add(input.value, false, 0);
        }
      }
    });
    this.refresh();
  }

  add(title, completed, index) {
    this.taskToday = JSON.parse(localStorage.getItem('TaskToday'));
    if (title === '') {
      this.message.innerText = 'Please, Add a task before sumit!';
    } else {
      this.message.innerText = '';
      const input = document.getElementById('inputD');
      input.value = '';
      if (this.taskToday) {
        this.taskToday = [...this.taskToday, { description: title, completed, id: index }];
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      } else {
        this.taskToday = [{ description: title, completed, id: index }];
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      }
    }
    this.refresh();
  }

  removeTask() {
    const recycle = document.getElementById('imgRecycle');
    recycle.addEventListener('click', () => {
      this.taskToday = [];
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      this.refresh();
      this.message.innerText = '';
    });

    const removeList = document.querySelectorAll('.imgRemove');
    removeList.forEach((button, i) => {
      button.addEventListener('click', () => {
        this.taskToday = this.taskToday.filter((task) => task.id !== i);
        localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        this.updateId();
        this.refresh();
        this.message.innerText = '';
      });
    });

    const buttonRemove = document.getElementById('btnRemove');
    buttonRemove.addEventListener('click', () => {
      this.taskToday = this.taskToday.filter((task) => task.completed !== true);
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
      this.updateId();
      this.refresh();
      this.message.innerText = '';
    });
  }

  setCompleted = () => {
    const checkBoxs = document.querySelectorAll('.check');
    const checkmarcks = document.querySelectorAll('.checkmark-img');
    checkBoxs.forEach((check, i) => {
      check.addEventListener('click', () => {
        this.message.innerText = '';
        if (this.taskToday[i].completed === true) {
          this.taskToday[i].completed = false;
          checkBoxs[i].checked = false;
          checkmarcks[i].style.display = 'none';
          document.getElementById(`ptask${i}`).style.textDecoration = 'none';
          localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        } else {
          this.taskToday[i].completed = true;
          checkmarcks[i].style.display = 'flex';
          checkBoxs[i].checked = true;
          document.getElementById(`ptask${i}`).style.textDecoration = 'line-through #919191';
          localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
        }
      });
      if (this.taskToday[i].completed) {
        checkmarcks[i].style.display = 'flex';
      }
    });
  }

  updateStore() {
    const inputs = document.querySelectorAll('.inputTask');
    inputs.forEach((element, i) => {
      element.addEventListener('keypress', (event) => {
        this.message.innerText = '';
        if (event.key === 'Enter') {
          this.taskToday[i].description = element.value;
          this.taskToday[i].completed = false;
          localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
          this.refresh();
        }
      });
    });
  }

  updateId() {
    this.taskToday.forEach((task, i) => {
      task.id = i;
      localStorage.setItem('TaskToday', JSON.stringify(this.taskToday));
    });
  }

  refresh() {
    (0,_displayTasks_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.taskToday);
    _inputShow_js__WEBPACK_IMPORTED_MODULE_1__["default"].Input();
    _inputShow_js__WEBPACK_IMPORTED_MODULE_1__["default"].Trash();
    this.removeTask();
    this.updateStore();
    this.setCompleted();
    (0,_StearChecked_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateList);


/***/ }),

/***/ "./src/modules/displayTasks.js":
/*!*************************************!*\
  !*** ./src/modules/displayTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wrapContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrapContainer.js */ "./src/modules/wrapContainer.js");
/* harmony import */ var _images_dots_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/dots.png */ "./src/images/dots.png");
/* harmony import */ var _images_trash_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/trash.png */ "./src/images/trash.png");
/* harmony import */ var _images_check_mark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/check-mark.png */ "./src/images/check-mark.png");





(0,_wrapContainer_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const listContainer = document.getElementById('list');

const displayTasks = (tasksList) => {
  listContainer.innerHTML = '';
  tasksList.forEach((task, i) => {
    listContainer.innerHTML += `
        <li class="listTasks" draggable="true">
          <label class="check-container">
            <input type="checkbox" name="check" class="check">
            <span class="checkmark">
              <img src=${_images_check_mark_png__WEBPACK_IMPORTED_MODULE_3__} alt='' class="checkmark-img"/>
            </span>
          </label>
          <p class="pTask" id="ptask${i}">${task.description}</p>
          <img class="imgTrash" src=${_images_dots_png__WEBPACK_IMPORTED_MODULE_1__} id="imdots${i}" alt=""/>
          <input value="${task.description}" type="text" class="inputTask" id=${i} />
          <img class="imgRemove" id="imtrash${i}" src=${_images_trash_png__WEBPACK_IMPORTED_MODULE_2__} alt=""/>
        </li>`;
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);

/***/ }),

/***/ "./src/modules/inputShow.js":
/*!**********************************!*\
  !*** ./src/modules/inputShow.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ShowAndHide {
  constructor() {
    this.lists = document.querySelectorAll('.pTask');
    this.imageDots = document.querySelectorAll('.imgTrash');
  }

  static Input = () => {
    this.lists = document.querySelectorAll('.pTask');
    this.lists.forEach((p, i) => {
      p.addEventListener('mouseover', () => {
        document.getElementById(i).style.display = 'flex';
        document.getElementById(`ptask${i}`).style.display = 'none';
      });
      document.getElementById(i).addEventListener('mouseout', () => {
        document.getElementById(i).style.display = 'none';
        document.getElementById(`ptask${i}`).style.display = 'flex';
      });
    });
  }

  static Trash = () => {
    this.imageDots = document.querySelectorAll('.imgTrash');
    this.imageDots.forEach((button, i) => {
      button.addEventListener('mouseover', () => {
        document.getElementById(`imtrash${i}`).style.display = 'flex';
        document.getElementById(`imdots${i}`).style.display = 'none';
      });
      document.getElementById(`imtrash${i}`).addEventListener('mouseout', () => {
        document.getElementById(`imtrash${i}`).style.display = 'none';
        document.getElementById(`imdots${i}`).style.display = 'flex';
      });
    });
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowAndHide);


/***/ }),

/***/ "./src/modules/wrapContainer.js":
/*!**************************************!*\
  !*** ./src/modules/wrapContainer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_recycle_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/recycle.png */ "./src/images/recycle.png");
/* harmony import */ var _images_close_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/close-icon.png */ "./src/images/close-icon.png");



const WrapContainer = () => {
  document.body.innerHTML = `<div class="container">
   <h3>Today's to do
   <img src=${_images_recycle_png__WEBPACK_IMPORTED_MODULE_0__} id="imgRecycle" alt=""/></h3>
   <div class="input-add-new-wrapp">
    <label for='inputD'>
      <img src=${_images_close_icon_png__WEBPACK_IMPORTED_MODULE_1__} alt="" class="icon-add-new"/> 
    </label>
    <input type="text" placeholder="Create a new task..." id="inputD" name="inputD"/>
   </div>
   <ul id="list"></ul>
   <button class="button_clear" id="btnRemove">Clear all selected</button>
   <p id="error_message"></p>
</div>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WrapContainer);

/***/ }),

/***/ "./src/images/background_pattern.jpg":
/*!*******************************************!*\
  !*** ./src/images/background_pattern.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7e8df5d377bba917d8c1.jpg";

/***/ }),

/***/ "./src/images/check-mark.png":
/*!***********************************!*\
  !*** ./src/images/check-mark.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9072f8c474c90514fea.png";

/***/ }),

/***/ "./src/images/close-icon.png":
/*!***********************************!*\
  !*** ./src/images/close-icon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "188720608dcbabe706b2.png";

/***/ }),

/***/ "./src/images/dots.png":
/*!*****************************!*\
  !*** ./src/images/dots.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2db77db0f8620030cd5b.png";

/***/ }),

/***/ "./src/images/recycle.png":
/*!********************************!*\
  !*** ./src/images/recycle.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d86d40e18b2cadeb831.png";

/***/ }),

/***/ "./src/images/trash.png":
/*!******************************!*\
  !*** ./src/images/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "58156972fe0b74660fc1.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsK0ZBQStGLElBQUksbUJBQW1CLFlBQVksZUFBZSx1REFBdUQsR0FBRyxZQUFZLG9CQUFvQixHQUFHLGVBQWUsZ0JBQWdCLGlCQUFpQix1QkFBdUIs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QVUsRUFBRTtBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCLG1EQUFPLEVBQUU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvU3RlYXJDaGVja2VkLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvYWRkQW5kUmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvZGlzcGxheVRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvaW5wdXRTaG93LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwLy4vc3JjL21vZHVsZXMvd3JhcENvbnRhaW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZF9wYXR0ZXJuLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3h5Z2VuOndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5oZWxsbyB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltZ1RyYXNoIHtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWF4LXdpZHRoOiA2ODBweDtcXG5cXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTM5LCAxMzcsIDEzNywgMC42MjMpOyAqL1xcblxcbiAgLyogYm94LXNoYWRvdzogMXB4IDFweCAxNXB4ICM2NDY0NjQ7ICovXFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuLmNvbnRhaW5lciBoMyB7XFxuICBwYWRkaW5nOiAwIDElO1xcbiAgaGVpZ2h0OiA1MXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIHdpZHRoOiBjYWxjKDk4JSAtIDJweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxMTEzO1xcbiAgY29sb3I6ICNmZGY2ZTY7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDkxNzFkO1xcbn1cXG5cXG4uaW5wdXQtYWRkLW5ldy13cmFwcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG4gIGhlaWdodDogNTJweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uaWNvbi1hZGQtbmV3IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTIxODFhO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgdG9wOiAxMHB4O1xcbiAgbGVmdDogOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaW5wdXREIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2OHB4KTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEzOSwgMTM3LCAxMzcsIDAuNjIzKTtcXG4gIGhlaWdodDogNDhweDtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG4gIGNvbG9yOiAjZmRmNmU2O1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4jbGlzdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xcbiAgY29sb3I6ICNmZGY2ZTY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxMTEzO1xcbn1cXG5cXG4jbGlzdCBsaSB7XFxuICBoZWlnaHQ6IDUxcHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMzksIDEzNywgMTM3LCAwLjYyMyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctbGVmdDogMTJweDtcXG59XFxuXFxuLmJ1dHRvbl9jbGVhciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDEzOSwgMTM3LCAxMzcsIDAuNjIzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBoZWlnaHQ6IDUxcHg7XFxuICBjb2xvcjogI2ZkZjZlNjtcXG4gIGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXItTG9vbScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxMTEzO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogOHB4O1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmJ1dHRvbl9jbGVhcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMyMTI0O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi5jaGVjay1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMxMTEzO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzY0NjQ2NDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5jaGVja21hcmsge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MWIxZDtcXG59XFxuXFxuLmNoZWNrIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmNoZWNrbWFyay1pbWcge1xcbiAgZmlsdGVyOiBpbnZlcnQoKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRvcDogM3B4O1xcbiAgcmlnaHQ6IDNweDtcXG59XFxuXFxuLmNoZWNrLWNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyay1pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDcsIDIzLCAzMSk7XFxufVxcblxcbiNpbWdSZWN5Y2xlIHtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxOXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCg4NSUpO1xcbn1cXG5cXG4jaW1nUmVjeWNsZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xcbn1cXG5cXG4uaW5wdXRUYXNrIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMzksIDEzNywgMTM3LCAwLjYyMyk7XFxuICBjb2xvcjogcmdiKDIyNCwgMjIxLCAyMjEpO1xcbiAgaGVpZ2h0OiA1MXB4O1xcbiAgZm9udC1mYW1pbHk6ICdDaXJjdWxhci1Mb29tJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWExZjIyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG4uaW1nUmVtb3ZlIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAxOXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgei1pbmRleDogMTA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuLnBUYXNrIHtcXG4gIHdpZHRoOiA4NSU7XFxuICBmb250LWZhbWlseTogJ0NpcmN1bGFyLUxvb20nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jZXJyb3JfbWVzc2FnZSB7XFxuICBmb250LWZhbWlseTogJ0NpcmN1bGFyLUxvb20nLCBzYW5zLXNlcmlmO1xcbiAgbWF4LXdpZHRoOiA2ODBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNjBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzBmMGMzYjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsVUFBVTtFQUNWLG1EQUFrRDtBQUNwRDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7O0VBRWhCLGtEQUFrRDs7RUFFbEQsc0NBQXNDO0VBQ3RDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsU0FBUztFQUNULFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1QsVUFBVTtFQUNWLDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLGVBQWU7RUFDZixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLDhCQUE4QjtFQUM5QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnREFBZ0Q7RUFDaEQseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCwyQkFBMkI7RUFDM0IsV0FBVztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU94eWdlbjp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbi5oZWxsbyB7XFxuICBjb2xvcjogcmVkO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kX3BhdHRlcm4uanBnJyk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbWdUcmFzaCB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1heC13aWR0aDogNjgwcHg7XFxuXFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDEzOSwgMTM3LCAxMzcsIDAuNjIzKTsgKi9cXG5cXG4gIC8qIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCAjNjQ2NDY0OyAqL1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbi5jb250YWluZXIgaDMge1xcbiAgcGFkZGluZzogMCAxJTtcXG4gIGhlaWdodDogNTFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICB3aWR0aDogY2FsYyg5OCUgLSAycHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG4gIGNvbG9yOiAjZmRmNmU2O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MTcxZDtcXG59XFxuXFxuLmlucHV0LWFkZC1uZXctd3JhcHAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzExMTM7XFxuICBoZWlnaHQ6IDUycHg7XFxuICBtYXJnaW46IDIwcHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmljb24tYWRkLW5ldyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmaWx0ZXI6IGludmVydCgxKTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZzogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzEyMTgxYTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDhweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2lucHV0RCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjhweCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMzksIDEzNywgMTM3LCAwLjYyMyk7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxuICBjb2xvcjogI2ZkZjZlNjtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzExMTM7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG59XFxuXFxuI2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiAjZmRmNmU2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG59XFxuXFxuI2xpc3QgbGkge1xcbiAgaGVpZ2h0OiA1MXB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTM5LCAxMzcsIDEzNywgMC42MjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nLWxlZnQ6IDEycHg7XFxufVxcblxcbi5idXR0b25fY2xlYXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMzksIDEzNywgMTM3LCAwLjYyMyk7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgaGVpZ2h0OiA1MXB4O1xcbiAgY29sb3I6ICNmZGY2ZTY7XFxuICBmb250LWZhbWlseTogJ0NpcmN1bGFyLUxvb20nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDhweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XFxufVxcblxcbi5idXR0b25fY2xlYXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMjEyNDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMTExMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM2NDY0NjQ7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uY2hlY2ttYXJrIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzExMTM7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5jaGVjay1jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNzFiMWQ7XFxufVxcblxcbi5jaGVjayB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi5jaGVja21hcmstaW1nIHtcXG4gIGZpbHRlcjogaW52ZXJ0KCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB0b3A6IDNweDtcXG4gIHJpZ2h0OiAzcHg7XFxufVxcblxcbi5jaGVjay1jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmstaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY2hlY2stY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig3LCAyMywgMzEpO1xcbn1cXG5cXG4jaW1nUmVjeWNsZSB7XFxuICB3aWR0aDogMTlweDtcXG4gIGhlaWdodDogMTlweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoODUlKTtcXG59XFxuXFxuI2ltZ1JlY3ljbGU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcXG59XFxuXFxuLmlucHV0VGFzayB7XFxuICB3aWR0aDogODUlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTM5LCAxMzcsIDEzNywgMC42MjMpO1xcbiAgY29sb3I6IHJnYigyMjQsIDIyMSwgMjIxKTtcXG4gIGhlaWdodDogNTFweDtcXG4gIGZvbnQtZmFtaWx5OiAnQ2lyY3VsYXItTG9vbScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMWYyMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG59XFxuXFxuLmltZ1JlbW92ZSB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMTlweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAyMHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi5wVGFzayB7XFxuICB3aWR0aDogODUlO1xcbiAgZm9udC1mYW1pbHk6ICdDaXJjdWxhci1Mb29tJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2Vycm9yX21lc3NhZ2Uge1xcbiAgZm9udC1mYW1pbHk6ICdDaXJjdWxhci1Mb29tJywgc2Fucy1zZXJpZjtcXG4gIG1heC13aWR0aDogNjgwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDYwcHg7XFxuICBsZWZ0OiA1MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMwZjBjM2I7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IFVwZGF0ZUxpc3QgZnJvbSAnLi9tb2R1bGVzL2FkZEFuZFJlbW92ZS5qcyc7XG5cbmNvbnN0IHVwZGF0ZVRhc2tzID0gbmV3IFVwZGF0ZUxpc3QoKTtcbnVwZGF0ZVRhc2tzLmNvbXB1dGVUYXNrKCk7XG4iLCJjb25zdCBTdGVlckNoZWNrZWQgPSAoKSA9PiB7XG4gIGNvbnN0IFN0b3JlQ2hlY2sgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrVG9kYXknKSk7XG5cbiAgU3RvcmVDaGVjay5mb3JFYWNoKChhLCBpKSA9PiB7XG4gICAgY29uc3QgY2hlY2tCb3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XG4gICAgaWYgKGEuY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICBjaGVja0JveHNbaV0uY2hlY2tlZCA9IHRydWU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHRhc2ske2l9YCkuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoIHJnYig2OCwgNjgsIDY4KSc7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0ZWVyQ2hlY2tlZDtcbiIsImltcG9ydCBkaXNwbGF5VGFza3MgZnJvbSAnLi9kaXNwbGF5VGFza3MuanMnO1xuaW1wb3J0IFNob3dBbmRIaWRlIGZyb20gJy4vaW5wdXRTaG93LmpzJztcbmltcG9ydCBTdGVlckNoZWNrZWQgZnJvbSAnLi9TdGVhckNoZWNrZWQuanMnO1xuXG5jbGFzcyBVcGRhdGVMaXN0IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50YXNrVG9kYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdUYXNrVG9kYXknKSk7XG4gICAgdGhpcy5tZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yX21lc3NhZ2UnKTtcbiAgfVxuXG4gIGNvbXB1dGVUYXNrKCkge1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0RCcpO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm1lc3NhZ2UuaW5uZXJUZXh0ID0gJyc7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0aGlzLnRhc2tUb2RheSkge1xuICAgICAgICAgIHRoaXMuYWRkKGlucHV0LnZhbHVlLCBmYWxzZSwgdGhpcy50YXNrVG9kYXkubGVuZ3RoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmFkZChpbnB1dC52YWx1ZSwgZmFsc2UsIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICBhZGQodGl0bGUsIGNvbXBsZXRlZCwgaW5kZXgpIHtcbiAgICB0aGlzLnRhc2tUb2RheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Rhc2tUb2RheScpKTtcbiAgICBpZiAodGl0bGUgPT09ICcnKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UuaW5uZXJUZXh0ID0gJ1BsZWFzZSwgQWRkIGEgdGFzayBiZWZvcmUgc3VtaXQhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXNzYWdlLmlubmVyVGV4dCA9ICcnO1xuICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXREJyk7XG4gICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgaWYgKHRoaXMudGFza1RvZGF5KSB7XG4gICAgICAgIHRoaXMudGFza1RvZGF5ID0gWy4uLnRoaXMudGFza1RvZGF5LCB7IGRlc2NyaXB0aW9uOiB0aXRsZSwgY29tcGxldGVkLCBpZDogaW5kZXggfV07XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYXNrVG9kYXknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tUb2RheSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50YXNrVG9kYXkgPSBbeyBkZXNjcmlwdGlvbjogdGl0bGUsIGNvbXBsZXRlZCwgaWQ6IGluZGV4IH1dO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza1RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrVG9kYXkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5yZWZyZXNoKCk7XG4gIH1cblxuICByZW1vdmVUYXNrKCkge1xuICAgIGNvbnN0IHJlY3ljbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nUmVjeWNsZScpO1xuICAgIHJlY3ljbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLnRhc2tUb2RheSA9IFtdO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tUb2RheScsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza1RvZGF5KSk7XG4gICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgIHRoaXMubWVzc2FnZS5pbm5lclRleHQgPSAnJztcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlbW92ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nUmVtb3ZlJyk7XG4gICAgcmVtb3ZlTGlzdC5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy50YXNrVG9kYXkgPSB0aGlzLnRhc2tUb2RheS5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza1RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrVG9kYXkpKTtcbiAgICAgICAgdGhpcy51cGRhdGVJZCgpO1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlLmlubmVyVGV4dCA9ICcnO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBidXR0b25SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuUmVtb3ZlJyk7XG4gICAgYnV0dG9uUmVtb3ZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdGhpcy50YXNrVG9kYXkgPSB0aGlzLnRhc2tUb2RheS5maWx0ZXIoKHRhc2spID0+IHRhc2suY29tcGxldGVkICE9PSB0cnVlKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYXNrVG9kYXknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tUb2RheSkpO1xuICAgICAgdGhpcy51cGRhdGVJZCgpO1xuICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICB0aGlzLm1lc3NhZ2UuaW5uZXJUZXh0ID0gJyc7XG4gICAgfSk7XG4gIH1cblxuICBzZXRDb21wbGV0ZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY2hlY2tCb3hzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrJyk7XG4gICAgY29uc3QgY2hlY2ttYXJja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2ttYXJrLWltZycpO1xuICAgIGNoZWNrQm94cy5mb3JFYWNoKChjaGVjaywgaSkgPT4ge1xuICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMubWVzc2FnZS5pbm5lclRleHQgPSAnJztcbiAgICAgICAgaWYgKHRoaXMudGFza1RvZGF5W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMudGFza1RvZGF5W2ldLmNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgIGNoZWNrQm94c1tpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgY2hlY2ttYXJja3NbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHRhc2ske2l9YCkuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tUb2RheScsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza1RvZGF5KSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy50YXNrVG9kYXlbaV0uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICBjaGVja21hcmNrc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgIGNoZWNrQm94c1tpXS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHRhc2ske2l9YCkuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbGluZS10aHJvdWdoICM5MTkxOTEnO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdUYXNrVG9kYXknLCBKU09OLnN0cmluZ2lmeSh0aGlzLnRhc2tUb2RheSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLnRhc2tUb2RheVtpXS5jb21wbGV0ZWQpIHtcbiAgICAgICAgY2hlY2ttYXJja3NbaV0uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVN0b3JlKCkge1xuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbnB1dFRhc2snKTtcbiAgICBpbnB1dHMuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLm1lc3NhZ2UuaW5uZXJUZXh0ID0gJyc7XG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgICB0aGlzLnRhc2tUb2RheVtpXS5kZXNjcmlwdGlvbiA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgdGhpcy50YXNrVG9kYXlbaV0uY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Rhc2tUb2RheScsIEpTT04uc3RyaW5naWZ5KHRoaXMudGFza1RvZGF5KSk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlSWQoKSB7XG4gICAgdGhpcy50YXNrVG9kYXkuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgICAgdGFzay5pZCA9IGk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVGFza1RvZGF5JywgSlNPTi5zdHJpbmdpZnkodGhpcy50YXNrVG9kYXkpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlZnJlc2goKSB7XG4gICAgZGlzcGxheVRhc2tzKHRoaXMudGFza1RvZGF5KTtcbiAgICBTaG93QW5kSGlkZS5JbnB1dCgpO1xuICAgIFNob3dBbmRIaWRlLlRyYXNoKCk7XG4gICAgdGhpcy5yZW1vdmVUYXNrKCk7XG4gICAgdGhpcy51cGRhdGVTdG9yZSgpO1xuICAgIHRoaXMuc2V0Q29tcGxldGVkKCk7XG4gICAgU3RlZXJDaGVja2VkKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlTGlzdDtcbiIsImltcG9ydCBXcmFwQ29udGFpbmVyIGZyb20gJy4vd3JhcENvbnRhaW5lci5qcyc7XG5pbXBvcnQgaW1nRG90cyBmcm9tICcuLi9pbWFnZXMvZG90cy5wbmcnO1xuaW1wb3J0IGltZ1RyYXNoIGZyb20gJy4uL2ltYWdlcy90cmFzaC5wbmcnO1xuaW1wb3J0IGNoZWNrTWFyayBmcm9tICcuLi9pbWFnZXMvY2hlY2stbWFyay5wbmcnO1xuXG5XcmFwQ29udGFpbmVyKCk7XG5jb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcblxuY29uc3QgZGlzcGxheVRhc2tzID0gKHRhc2tzTGlzdCkgPT4ge1xuICBsaXN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICB0YXNrc0xpc3QuZm9yRWFjaCgodGFzaywgaSkgPT4ge1xuICAgIGxpc3RDb250YWluZXIuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGxpIGNsYXNzPVwibGlzdFRhc2tzXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNoZWNrLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja1wiIGNsYXNzPVwiY2hlY2tcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2hlY2ttYXJrXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPSR7Y2hlY2tNYXJrfSBhbHQ9JycgY2xhc3M9XCJjaGVja21hcmstaW1nXCIvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHAgY2xhc3M9XCJwVGFza1wiIGlkPVwicHRhc2ske2l9XCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nVHJhc2hcIiBzcmM9JHtpbWdEb3RzfSBpZD1cImltZG90cyR7aX1cIiBhbHQ9XCJcIi8+XG4gICAgICAgICAgPGlucHV0IHZhbHVlPVwiJHt0YXNrLmRlc2NyaXB0aW9ufVwiIHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dFRhc2tcIiBpZD0ke2l9IC8+XG4gICAgICAgICAgPGltZyBjbGFzcz1cImltZ1JlbW92ZVwiIGlkPVwiaW10cmFzaCR7aX1cIiBzcmM9JHtpbWdUcmFzaH0gYWx0PVwiXCIvPlxuICAgICAgICA8L2xpPmA7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRhc2tzOyIsImNsYXNzIFNob3dBbmRIaWRlIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5saXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wVGFzaycpO1xuICAgIHRoaXMuaW1hZ2VEb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZ1RyYXNoJyk7XG4gIH1cblxuICBzdGF0aWMgSW5wdXQgPSAoKSA9PiB7XG4gICAgdGhpcy5saXN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wVGFzaycpO1xuICAgIHRoaXMubGlzdHMuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgcC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGkpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwdGFzayR7aX1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHB0YXNrJHtpfWApLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBUcmFzaCA9ICgpID0+IHtcbiAgICB0aGlzLmltYWdlRG90cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWdUcmFzaCcpO1xuICAgIHRoaXMuaW1hZ2VEb3RzLmZvckVhY2goKGJ1dHRvbiwgaSkgPT4ge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltdHJhc2gke2l9YCkuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltZG90cyR7aX1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaW10cmFzaCR7aX1gKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltdHJhc2gke2l9YCkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGltZG90cyR7aX1gKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd0FuZEhpZGU7XG4iLCJpbXBvcnQgaW1nUmVjeWNsZSBmcm9tICcuLi9pbWFnZXMvcmVjeWNsZS5wbmcnO1xuaW1wb3J0IGFkZE1vcmUgZnJvbSAnLi4vaW1hZ2VzL2Nsb3NlLWljb24ucG5nJztcblxuY29uc3QgV3JhcENvbnRhaW5lciA9ICgpID0+IHtcbiAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgPGgzPlRvZGF5J3MgdG8gZG9cbiAgIDxpbWcgc3JjPSR7aW1nUmVjeWNsZX0gaWQ9XCJpbWdSZWN5Y2xlXCIgYWx0PVwiXCIvPjwvaDM+XG4gICA8ZGl2IGNsYXNzPVwiaW5wdXQtYWRkLW5ldy13cmFwcFwiPlxuICAgIDxsYWJlbCBmb3I9J2lucHV0RCc+XG4gICAgICA8aW1nIHNyYz0ke2FkZE1vcmV9IGFsdD1cIlwiIGNsYXNzPVwiaWNvbi1hZGQtbmV3XCIvPiBcbiAgICA8L2xhYmVsPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiQ3JlYXRlIGEgbmV3IHRhc2suLi5cIiBpZD1cImlucHV0RFwiIG5hbWU9XCJpbnB1dERcIi8+XG4gICA8L2Rpdj5cbiAgIDx1bCBpZD1cImxpc3RcIj48L3VsPlxuICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbl9jbGVhclwiIGlkPVwiYnRuUmVtb3ZlXCI+Q2xlYXIgYWxsIHNlbGVjdGVkPC9idXR0b24+XG4gICA8cCBpZD1cImVycm9yX21lc3NhZ2VcIj48L3A+XG48L2Rpdj5gO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgV3JhcENvbnRhaW5lcjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=