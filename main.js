/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cultured: #f8f9faff;\n  --cultured-2: #e9ecefff;\n  --gainsboro: #dee2e6ff;\n  --light-gray: #ced4daff;\n  --cadet-blue-crayola: #adb5bdff;\n  --sonic-silver: #6c757dff;\n  --davys-grey: #495057ff;\n  --onyx: #343a40ff;\n  --eerie-black: #212529ff;\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --focus-color: #89d9fb;\n}\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  background-color: var(--cultured-2);\n  color: var(--eerie-black);\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#sidebar {\n  background-color: var(--cultured);\n  padding: 1rem;\n  display: grid;\n  align-content: start;\n}\n\n#sidebar .header {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\n#sidebar .header:first-of-type {\n  font-size: 2.2rem;\n}\n\n#sidebar .header:first-of-type span {\n  color: purple;\n}\n\n#sidebar .tab {\n  color: var(--davys-grey);\n  margin-bottom: 1.5rem;\n}\n\n#main {\n  padding: 2rem;\n  display: grid;\n  align-content: start;\n  gap: 1rem;\n}\n\n#main #current-project {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: medium solid var(--light-gray);\n}\n\n.todo-obj {\n  background-color: var(--cultured);\n  border: thin solid var(--light-gray);\n  display: grid;\n  min-width: 18rem;\n  grid-template: \n    'done  priority  title  del' auto\n    '.  note  note  note' 1fr\n    '.  date  date date' auto /\n    auto auto 1fr auto;\n  grid-gap: 0.5rem;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.todo-obj .done-checkbox {\n  grid-area: done;\n  justify-self: center;\n  position: relative;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  appearance: none;\n  border: solid thin var(--eerie-black);\n  align-self: center;\n}\n\n.todo-obj .done-checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--eerie-black);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n\n.todo-obj .done-checkbox:checked::before {\n  transform: scale(0.75);\n}\n\n.todo-obj .priority-box {\n  grid-area: priority;\n  color: var(--sonic-silver);\n  font-size: 1.5rem;\n  position: relative;\n  align-self: center;\n}\n\n.todo-obj .priority-box .priority-popup {\n  position: absolute;\n  display: none;\n  background-color: var(--cultured-2);\n  border-radius: 1rem;\n  border-top-left-radius: 0;\n  border: thin solid var(--light-gray);\n  font-size: 1rem;\n  height: max-content;\n  overflow: hidden;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n\n.todo-obj .priority-box .priority-popup.show {\n  display: flex;\n}\n\n.todo-obj .priority-box .priority-popup .priority-btn {\n  border: thin solid var(--sonic-silver);\n  background-color: var(--cultured);\n  padding: 0.3rem;\n  width: 2rem;\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n}\n\n.todo-obj .title-box {\n  grid-area: title;\n  font-size: 1.5rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n}\n\n.todo-obj .title-box input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  width: 100%;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  height: 1.1em;\n  font-weight: 500;\n  outline: none;\n  border-bottom: thin solid var(--eerie-black);\n}\n\n.todo-obj .delete-btn {\n  grid-area: del;\n  appearance: none;\n  align-self: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: none;\n  background-color: var(--cultured);\n  cursor: pointer;\n}\n\n.todo-obj .delete-btn img {\n  height: 100%;\n  width: 100%;\n}\n\n.todo-obj .note-box {\n  grid-area: note;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .note-box div {\n  min-height: 1rem;\n  white-space: pre-wrap;\n}\n\n.todo-obj .note-box textarea {\n  appearance: none;\n  resize: vertical;\n  width: 100%;\n  height: 5rem;\n  border: none;\n  color: var(--sonic-silver);\n  font-family: inherit;\n  font-size: 1rem;\n  background-color: var(--cultured);\n  outline: none;\n  border-bottom:  thin solid var(--sonic-silver);\n}\n\n.todo-obj .due-date-box {\n  grid-area: date;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .due-date-box input[type=\"date\"] {\n  appearance: none;\n  padding: 0;\n  margin: 0;\n  background-color: var(--cultured);\n  color: var(--sonic-silver);\n  font-size: 1rem;\n  font-family: var(--font-family);\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-bottom: thin solid var(--sonic-silver);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --cultured: #f8f9faff;\n  --cultured-2: #e9ecefff;\n  --gainsboro: #dee2e6ff;\n  --light-gray: #ced4daff;\n  --cadet-blue-crayola: #adb5bdff;\n  --sonic-silver: #6c757dff;\n  --davys-grey: #495057ff;\n  --onyx: #343a40ff;\n  --eerie-black: #212529ff;\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --focus-color: #89d9fb;\n}\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  background-color: var(--cultured-2);\n  color: var(--eerie-black);\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#sidebar {\n  background-color: var(--cultured);\n  padding: 1rem;\n  display: grid;\n  align-content: start;\n}\n\n#sidebar .header {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\n#sidebar .header:first-of-type {\n  font-size: 2.2rem;\n}\n\n#sidebar .header:first-of-type span {\n  color: purple;\n}\n\n#sidebar .tab {\n  color: var(--davys-grey);\n  margin-bottom: 1.5rem;\n}\n\n#main {\n  padding: 2rem;\n  display: grid;\n  align-content: start;\n  gap: 1rem;\n}\n\n#main #current-project {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: medium solid var(--light-gray);\n}\n\n.todo-obj {\n  background-color: var(--cultured);\n  border: thin solid var(--light-gray);\n  display: grid;\n  min-width: 18rem;\n  grid-template: \n    'done  priority  title  del' auto\n    '.  note  note  note' 1fr\n    '.  date  date date' auto /\n    auto auto 1fr auto;\n  grid-gap: 0.5rem;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.todo-obj .done-checkbox {\n  grid-area: done;\n  justify-self: center;\n  position: relative;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  appearance: none;\n  border: solid thin var(--eerie-black);\n  align-self: center;\n}\n\n.todo-obj .done-checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--eerie-black);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n\n.todo-obj .done-checkbox:checked::before {\n  transform: scale(0.75);\n}\n\n.todo-obj .priority-box {\n  grid-area: priority;\n  color: var(--sonic-silver);\n  font-size: 1.5rem;\n  position: relative;\n  align-self: center;\n}\n\n.todo-obj .priority-box .priority-popup {\n  position: absolute;\n  display: none;\n  background-color: var(--cultured-2);\n  border-radius: 1rem;\n  border-top-left-radius: 0;\n  border: thin solid var(--light-gray);\n  font-size: 1rem;\n  height: max-content;\n  overflow: hidden;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n\n.todo-obj .priority-box .priority-popup.show {\n  display: flex;\n}\n\n.todo-obj .priority-box .priority-popup .priority-btn {\n  border: thin solid var(--sonic-silver);\n  background-color: var(--cultured);\n  padding: 0.3rem;\n  width: 2rem;\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n}\n\n.todo-obj .title-box {\n  grid-area: title;\n  font-size: 1.5rem;\n  font-weight: 500;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n}\n\n.todo-obj .title-box input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  width: 100%;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  height: 1.1em;\n  font-weight: 500;\n  outline: none;\n  border-bottom: thin solid var(--eerie-black);\n}\n\n.todo-obj .delete-btn {\n  grid-area: del;\n  appearance: none;\n  align-self: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: none;\n  background-color: var(--cultured);\n  cursor: pointer;\n}\n\n.todo-obj .delete-btn img {\n  height: 100%;\n  width: 100%;\n}\n\n.todo-obj .note-box {\n  grid-area: note;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .note-box div {\n  min-height: 1rem;\n  white-space: pre-wrap;\n}\n\n.todo-obj .note-box textarea {\n  appearance: none;\n  resize: vertical;\n  width: 100%;\n  height: 5rem;\n  border: none;\n  color: var(--sonic-silver);\n  font-family: inherit;\n  font-size: 1rem;\n  background-color: var(--cultured);\n  outline: none;\n  border-bottom:  thin solid var(--sonic-silver);\n}\n\n.todo-obj .due-date-box {\n  grid-area: date;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .due-date-box input[type=\"date\"] {\n  appearance: none;\n  padding: 0;\n  margin: 0;\n  background-color: var(--cultured);\n  color: var(--sonic-silver);\n  font-size: 1rem;\n  font-family: var(--font-family);\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-bottom: thin solid var(--sonic-silver);\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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

/***/ "./src/page.js":
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const page = () => {
  const create = (tagName) => document.createElement(tagName);

  let currentProject = 'Bababoi';

  const logoHeader = create('div');
  logoHeader.classList.add('header');
  logoHeader.append('Do', (() => {
    const tmp = create('span');
    tmp.textContent = 'Zen';
    return tmp;
  })());
  const allTab = create('div');
  allTab.classList.add('tab');
  allTab.textContent = 'All';
  const todayTab = create('div');
  todayTab.classList.add('tab');
  todayTab.textContent = 'Today';
  const thisWeekTab = create('div');
  thisWeekTab.classList.add('tab');
  thisWeekTab.textContent = 'This Week';
  const projectHeader = create('div');
  projectHeader.classList.add('header');
  projectHeader.textContent = 'Projects';
  const defaultProject = create('div');
  defaultProject.classList.add('tab');
  defaultProject.textContent = 'Todo List';
  const addProject = create('div');
  addProject.classList.add('tab');
  addProject.id = 'add-project';
  addProject.textContent = 'New Project +';
  addProject.addEventListener('click', () => {
    alert('add project');
  });
  const sidebarDiv = create('div');
  sidebarDiv.id = 'sidebar';
  sidebarDiv.append(
    logoHeader,
    allTab,
    todayTab,
    thisWeekTab,
    projectHeader,
    defaultProject,
    addProject,
  );

  const currentProjectDiv = create('div');
  currentProjectDiv.id = 'current-project';
  currentProjectDiv.textContent = currentProject;

  const mainDiv = create('div');
  mainDiv.id = 'main';
  mainDiv.append(currentProjectDiv);

  const render = () => [sidebarDiv, mainDiv];

  const appendTodo = (todo) => mainDiv.append(todo.render());

  const clearTodo = () => {
    while (mainDiv.children[1]) {
      mainDiv.children[1].remove();
    }
  };

  return {
    render,
    appendTodo,
    clearTodo,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (page);


/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe)
/* harmony export */ });
const pubSub = (() => {
  const events = {};
  const subscribe = (eventName, fn) => {
    events[eventName] = events[eventName] || [];
    events[eventName].push(fn);
  };
  const publish = (eventName, data) => {
    if (events[eventName]) {
      events[eventName].forEach((fn) => {
        fn(data);
      });
    }
  };
  return { subscribe, publish };
})();
const subscribe = (eventName, fn) => {
  pubSub.subscribe(eventName, fn);
};
const publish = (eventName, data) => {
  pubSub.publish(eventName, data);
};




/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/delete.svg */ "./src/img/delete.svg");


const todo = (project, publish, deleteTodo) => {
  const create = (type) => document.createElement(type);

  let id = Symbol('id of todoObj');
  let done = false;
  let priority = '-';
  let title = '';
  let note = '';
  let date = 'no date';

  const updateLocalStorage = () => {
    // load data from localStorage
    // store data in allTodo
    // search for same id in allTodo
    // update key with value in allTodo
    // stringify allTodo and store in localStorage
  };

  const checkbox = create('input');
  checkbox.type = 'checkbox';
  checkbox.checked = done;
  checkbox.classList.add('done-checkbox');
  checkbox.addEventListener('change', () => {
    done = !done;
    setTimeout(() => {
      checkbox.checked = done;
      publish('shownTodoChanged');
    }, 200);
  });

  const priorityDiv = create('div');
  priorityDiv.classList.add('priority-box');
  const prioritySpan = create('span');
  prioritySpan.textContent = priority;
  const setPriority = (newPriority) => {
    priority = newPriority;
    prioritySpan.textContent = priority;
    publish('shownTodoChanged');
  };
  const priorityPopup = create('div');
  priorityPopup.classList.add('priority-popup');
  const nonePriority = create('div');
  nonePriority.classList.add('priority-btn');
  nonePriority.textContent = '-';
  nonePriority.addEventListener('click', () => setPriority('-'));
  const lowPriority = create('div');
  lowPriority.classList.add('priority-btn');
  lowPriority.textContent = '!';
  lowPriority.addEventListener('click', () => setPriority('!'));
  const mediumPriority = create('div');
  mediumPriority.classList.add('priority-btn');
  mediumPriority.textContent = '!!';
  mediumPriority.addEventListener('click', () => setPriority('!!'));
  const highPriority = create('div');
  highPriority.classList.add('priority-btn');
  highPriority.textContent = '!!!';
  highPriority.addEventListener('click', () => setPriority('!!!'));
  priorityPopup.append(
    nonePriority,
    lowPriority,
    mediumPriority,
    highPriority,
  );
  priorityDiv.append(prioritySpan, priorityPopup);
  priorityDiv.addEventListener('click', () => {
    priorityPopup.classList.toggle('show');
  });

  const titleDiv = create('div');
  titleDiv.classList.add('title-box');
  const titleSpan = create('span');
  titleSpan.textContent = 'New todo';
  const titleInput = create('input');
  titleInput.type = 'text';
  titleDiv.append(titleSpan);
  titleSpan.addEventListener('click', () => {
    titleDiv.firstChild.remove();
    titleInput.value = title;
    titleDiv.append(titleInput);
    titleInput.focus();
  });
  titleInput.addEventListener('blur', () => {
    titleDiv.firstChild.remove();
    title = titleInput.value;
    titleSpan.textContent = title;
    titleDiv.append(titleSpan);
  });

  const deleteBtn = create('button');
  deleteBtn.classList.add('delete-btn');
  const deleteImg = create('img');
  deleteImg.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
  deleteBtn.append(deleteImg);
  deleteBtn.addEventListener('click', () => {
    deleteTodo(id);
    publish('shownTodoChanged');
  });

  const noteDiv = create('div');
  noteDiv.classList.add('note-box');
  const noteText = create('div');
  noteText.textContent = '';
  const noteInput = create('textarea');
  noteDiv.append(noteText);
  noteText.addEventListener('click', () => {
    noteDiv.firstChild.remove();
    noteInput.value = note;
    noteDiv.append(noteInput);
    noteInput.focus();
  });
  noteInput.addEventListener('blur', () => {
    noteDiv.firstChild.remove();
    note = noteInput.value;
    noteText.textContent = note;
    noteDiv.append(noteText);
  });

  const dueDateDiv = create('div');
  dueDateDiv.classList.add('due-date-box');
  const dueDateSpan = create('span');
  dueDateSpan.textContent = 'no date';
  const dueDateInput = create('input');
  dueDateInput.type = 'date';
  dueDateDiv.append(dueDateSpan);
  dueDateSpan.addEventListener('click', () => {
    dueDateDiv.firstChild.remove();
    dueDateDiv.append(dueDateInput);
    dueDateInput.focus();
  });
  dueDateInput.addEventListener('blur', () => {
    dueDateDiv.firstChild.remove();
    const { value } = dueDateInput;
    date = (value)
      ? `${value.split('-')[2]}.${value.split('-')[1]}.${value.split('-')[0]}`
      : 'no date';
    dueDateSpan.textContent = (date);
    dueDateDiv.append(dueDateSpan);
  });

  const todoObj = create('div');
  todoObj.classList.add('todo-obj');
  todoObj.append(
    checkbox,
    priorityDiv,
    titleDiv,
    deleteBtn,
    noteDiv,
    dueDateDiv,
  );

  const set = (newDone, newPriority, newTitle, newNote, newDate, newId) => {
    done = newDone;
    checkbox.checked = done;
    priority = newPriority;
    prioritySpan.textContent = priority;
    title = newTitle;
    titleSpan.textContent = title;
    note = newNote;
    noteText.textContent = note;
    date = newDate;
    dueDateSpan.textContent = date;
    if (newId) id = newId;
  };

  const get = () => ({
    done,
    priority,
    title,
    note,
    date,
  });

  const render = () => todoObj;

  return {
    project,
    id,
    render,
    set,
    get,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);


/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b385a415776d1fe3a5e.svg";

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
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub */ "./src/pubsub.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page */ "./src/page.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(function main() {
  const content = document.querySelector('#content');
  let allTodo = [];
  let shownTodo = [];
  const pageUI = (0,_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const currentProject = 'Bababoi';

  const deleteTodo = (id) => {
    allTodo = allTodo.filter((i) => i.id !== id);
  };

  const addTodo = () => {
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(currentProject, _pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteTodo);
    allTodo.push(newTodo);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };

  const buildUI = () => {
    const defaultTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(currentProject, _pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteTodo);
    defaultTodo.set(
      true,
      '!!!',
      'Todo Name',
      'You can add a note here',
      'no date',
    );
    allTodo.push(defaultTodo);
    content.append(...pageUI.render());
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('init', buildUI);

  const storeData = () => {
    console.log('store data');
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('storeData');
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('sownTodoChanged');

  // when the data is loaded from localStorage and the allTodo is set,
  // the localStorage should be updated with the new allTodo
  // because the id of the todo is not the same as the id of the todo in the
  // localStorage
  // localStorage allTodo key: 1459333224678674
  // localStorage project key: 8637207312324280

  const render = () => {
    pageUI.clearTodo();
    shownTodo = [...allTodo]; // here needs to be a sorting function
    shownTodo.forEach((obj) => pageUI.appendTodo(obj));
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('shownTodoChanged', render);

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('init');
}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRThCOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJhOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNENBQVc7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsWUFBWSxRQUFRO0FBQ3BCO0FBQ0EsV0FBVyxvQkFBb0IsR0FBRyxvQkFBb0IsR0FBRyxvQkFBb0I7QUFDN0U7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pMcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7OztBQ0EwQjtBQUNvQjtBQUNwQjtBQUNMOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpREFBSTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaURBQUksaUJBQWlCLDRDQUFPO0FBQ2hEO0FBQ0EsSUFBSSxnREFBTztBQUNYOztBQUVBO0FBQ0Esd0JBQXdCLGlEQUFJLGlCQUFpQiw0Q0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQSxFQUFFLGtEQUFTOztBQUVYO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0RBQVM7QUFDWCxFQUFFLGtEQUFTOztBQUVYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxFQUFFLGtEQUFTOztBQUVYLEVBQUUsZ0RBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcGFnZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1jdWx0dXJlZDogI2Y4ZjlmYWZmO1xcbiAgLS1jdWx0dXJlZC0yOiAjZTllY2VmZmY7XFxuICAtLWdhaW5zYm9ybzogI2RlZTJlNmZmO1xcbiAgLS1saWdodC1ncmF5OiAjY2VkNGRhZmY7XFxuICAtLWNhZGV0LWJsdWUtY3JheW9sYTogI2FkYjViZGZmO1xcbiAgLS1zb25pYy1zaWx2ZXI6ICM2Yzc1N2RmZjtcXG4gIC0tZGF2eXMtZ3JleTogIzQ5NTA1N2ZmO1xcbiAgLS1vbnl4OiAjMzQzYTQwZmY7XFxuICAtLWVlcmllLWJsYWNrOiAjMjEyNTI5ZmY7XFxuICAtLWZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxcXFwiU2Vnb2UgVUlcXFwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsc2Fucy1zZXJpZjtcXG4gIC0tZm9jdXMtY29sb3I6ICM4OWQ5ZmI7XFxufVxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkLTIpO1xcbiAgY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jc2lkZWJhciAuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuI3NpZGViYXIgLmhlYWRlcjpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG5cXG4jc2lkZWJhciAuaGVhZGVyOmZpcnN0LW9mLXR5cGUgc3BhbiB7XFxuICBjb2xvcjogcHVycGxlO1xcbn1cXG5cXG4jc2lkZWJhciAudGFiIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXZ5cy1ncmV5KTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuXFxuI21haW4ge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gI2N1cnJlbnQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IG1lZGl1bSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG59XFxuXFxuLnRvZG8tb2JqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4td2lkdGg6IDE4cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgICdkb25lICBwcmlvcml0eSAgdGl0bGUgIGRlbCcgYXV0b1xcbiAgICAnLiAgbm90ZSAgbm90ZSAgbm90ZScgMWZyXFxuICAgICcuICBkYXRlICBkYXRlIGRhdGUnIGF1dG8gL1xcbiAgICBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi50b2RvLW9iaiAuZG9uZS1jaGVja2JveCB7XFxuICBncmlkLWFyZWE6IGRvbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRoaW4gdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1vYmogLmRvbmUtY2hlY2tib3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kb25lLWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC5wcmlvcml0eS1ib3ggLnByaW9yaXR5LXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZC0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tb2JqIC5wcmlvcml0eS1ib3ggLnByaW9yaXR5LXBvcHVwLnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8tb2JqIC5wcmlvcml0eS1ib3ggLnByaW9yaXR5LXBvcHVwIC5wcmlvcml0eS1idG4ge1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLWVlcmllLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kZWxldGUtYnRuIHtcXG4gIGdyaWQtYXJlYTogZGVsO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC5kZWxldGUtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB7XFxuICBncmlkLWFyZWE6IG5vdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCBkaXYge1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB0ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAgdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cXG5cXG4udG9kby1vYmogLmR1ZS1kYXRlLWJveCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kdWUtZGF0ZS1ib3ggaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwwSEFBMEg7RUFDMUgsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2Isb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQ0FBb0M7RUFDcEMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjs7OztzQkFJb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFDQUFxQztFQUNyQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0QyxpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLDZDQUE2QztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWN1bHR1cmVkOiAjZjhmOWZhZmY7XFxuICAtLWN1bHR1cmVkLTI6ICNlOWVjZWZmZjtcXG4gIC0tZ2FpbnNib3JvOiAjZGVlMmU2ZmY7XFxuICAtLWxpZ2h0LWdyYXk6ICNjZWQ0ZGFmZjtcXG4gIC0tY2FkZXQtYmx1ZS1jcmF5b2xhOiAjYWRiNWJkZmY7XFxuICAtLXNvbmljLXNpbHZlcjogIzZjNzU3ZGZmO1xcbiAgLS1kYXZ5cy1ncmV5OiAjNDk1MDU3ZmY7XFxuICAtLW9ueXg6ICMzNDNhNDBmZjtcXG4gIC0tZWVyaWUtYmxhY2s6ICMyMTI1MjlmZjtcXG4gIC0tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1mb2N1cy1jb2xvcjogIzg5ZDlmYjtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQtMik7XFxuICBjb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNzaWRlYmFyIC5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xcbn1cXG5cXG4jc2lkZWJhciAuaGVhZGVyOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxufVxcblxcbiNzaWRlYmFyIC5oZWFkZXI6Zmlyc3Qtb2YtdHlwZSBzcGFuIHtcXG4gIGNvbG9yOiBwdXJwbGU7XFxufVxcblxcbiNzaWRlYmFyIC50YWIge1xcbiAgY29sb3I6IHZhcigtLWRhdnlzLWdyZXkpO1xcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4jbWFpbiB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAjY3VycmVudC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogbWVkaXVtIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4udG9kby1vYmoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogMThyZW07XFxuICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ2RvbmUgIHByaW9yaXR5ICB0aXRsZSAgZGVsJyBhdXRvXFxuICAgICcuICBub3RlICBub3RlICBub3RlJyAxZnJcXG4gICAgJy4gIGRhdGUgIGRhdGUgZGF0ZScgYXV0byAvXFxuICAgIGF1dG8gYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kb25lLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogZG9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdGhpbiB2YXIoLS1lZXJpZS1ibGFjayk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAuZG9uZS1jaGVja2JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4udG9kby1vYmogLmRvbmUtY2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IHtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAgLnByaW9yaXR5LWJ0biB7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC50aXRsZS1ib3gge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXG59XFxuXFxuLnRvZG8tb2JqIC50aXRsZS1ib3ggaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogMS4xZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0tZWVyaWUtYmxhY2spO1xcbn1cXG5cXG4udG9kby1vYmogLmRlbGV0ZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBkZWw7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1vYmogLmRlbGV0ZS1idG4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1vYmogLm5vdGUtYm94IHtcXG4gIGdyaWQtYXJlYTogbm90ZTtcXG4gIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cXG5cXG4udG9kby1vYmogLm5vdGUtYm94IGRpdiB7XFxuICBtaW4taGVpZ2h0OiAxcmVtO1xcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbn1cXG5cXG4udG9kby1vYmogLm5vdGUtYm94IHRleHRhcmVhIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206ICB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxufVxcblxcbi50b2RvLW9iaiAuZHVlLWRhdGUtYm94IHtcXG4gIGdyaWQtYXJlYTogZGF0ZTtcXG4gIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cXG5cXG4udG9kby1vYmogLmR1ZS1kYXRlLWJveCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseSk7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBwYWdlID0gKCkgPT4ge1xuICBjb25zdCBjcmVhdGUgPSAodGFnTmFtZSkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICBsZXQgY3VycmVudFByb2plY3QgPSAnQmFiYWJvaSc7XG5cbiAgY29uc3QgbG9nb0hlYWRlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGxvZ29IZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIGxvZ29IZWFkZXIuYXBwZW5kKCdEbycsICgoKSA9PiB7XG4gICAgY29uc3QgdG1wID0gY3JlYXRlKCdzcGFuJyk7XG4gICAgdG1wLnRleHRDb250ZW50ID0gJ1plbic7XG4gICAgcmV0dXJuIHRtcDtcbiAgfSkoKSk7XG4gIGNvbnN0IGFsbFRhYiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGFsbFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgYWxsVGFiLnRleHRDb250ZW50ID0gJ0FsbCc7XG4gIGNvbnN0IHRvZGF5VGFiID0gY3JlYXRlKCdkaXYnKTtcbiAgdG9kYXlUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIHRvZGF5VGFiLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgY29uc3QgdGhpc1dlZWtUYWIgPSBjcmVhdGUoJ2RpdicpO1xuICB0aGlzV2Vla1RhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgdGhpc1dlZWtUYWIudGV4dENvbnRlbnQgPSAnVGhpcyBXZWVrJztcbiAgY29uc3QgcHJvamVjdEhlYWRlciA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHByb2plY3RIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGRlZmF1bHRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBkZWZhdWx0UHJvamVjdC50ZXh0Q29udGVudCA9ICdUb2RvIExpc3QnO1xuICBjb25zdCBhZGRQcm9qZWN0ID0gY3JlYXRlKCdkaXYnKTtcbiAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgYWRkUHJvamVjdC5pZCA9ICdhZGQtcHJvamVjdCc7XG4gIGFkZFByb2plY3QudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QgKyc7XG4gIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWxlcnQoJ2FkZCBwcm9qZWN0Jyk7XG4gIH0pO1xuICBjb25zdCBzaWRlYmFyRGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgc2lkZWJhckRpdi5pZCA9ICdzaWRlYmFyJztcbiAgc2lkZWJhckRpdi5hcHBlbmQoXG4gICAgbG9nb0hlYWRlcixcbiAgICBhbGxUYWIsXG4gICAgdG9kYXlUYWIsXG4gICAgdGhpc1dlZWtUYWIsXG4gICAgcHJvamVjdEhlYWRlcixcbiAgICBkZWZhdWx0UHJvamVjdCxcbiAgICBhZGRQcm9qZWN0LFxuICApO1xuXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0RGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgY3VycmVudFByb2plY3REaXYuaWQgPSAnY3VycmVudC1wcm9qZWN0JztcbiAgY3VycmVudFByb2plY3REaXYudGV4dENvbnRlbnQgPSBjdXJyZW50UHJvamVjdDtcblxuICBjb25zdCBtYWluRGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgbWFpbkRpdi5pZCA9ICdtYWluJztcbiAgbWFpbkRpdi5hcHBlbmQoY3VycmVudFByb2plY3REaXYpO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IFtzaWRlYmFyRGl2LCBtYWluRGl2XTtcblxuICBjb25zdCBhcHBlbmRUb2RvID0gKHRvZG8pID0+IG1haW5EaXYuYXBwZW5kKHRvZG8ucmVuZGVyKCkpO1xuXG4gIGNvbnN0IGNsZWFyVG9kbyA9ICgpID0+IHtcbiAgICB3aGlsZSAobWFpbkRpdi5jaGlsZHJlblsxXSkge1xuICAgICAgbWFpbkRpdi5jaGlsZHJlblsxXS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXIsXG4gICAgYXBwZW5kVG9kbyxcbiAgICBjbGVhclRvZG8sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIiwiY29uc3QgcHViU3ViID0gKCgpID0+IHtcbiAgY29uc3QgZXZlbnRzID0ge307XG4gIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfTtcbiAgY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICAgIGZuKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbn0pKCk7XG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pO1xufTtcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIHB1YlN1Yi5wdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbiIsImltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcblxuY29uc3QgdG9kbyA9IChwcm9qZWN0LCBwdWJsaXNoLCBkZWxldGVUb2RvKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICh0eXBlKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGxldCBpZCA9IFN5bWJvbCgnaWQgb2YgdG9kb09iaicpO1xuICBsZXQgZG9uZSA9IGZhbHNlO1xuICBsZXQgcHJpb3JpdHkgPSAnLSc7XG4gIGxldCB0aXRsZSA9ICcnO1xuICBsZXQgbm90ZSA9ICcnO1xuICBsZXQgZGF0ZSA9ICdubyBkYXRlJztcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgLy8gbG9hZCBkYXRhIGZyb20gbG9jYWxTdG9yYWdlXG4gICAgLy8gc3RvcmUgZGF0YSBpbiBhbGxUb2RvXG4gICAgLy8gc2VhcmNoIGZvciBzYW1lIGlkIGluIGFsbFRvZG9cbiAgICAvLyB1cGRhdGUga2V5IHdpdGggdmFsdWUgaW4gYWxsVG9kb1xuICAgIC8vIHN0cmluZ2lmeSBhbGxUb2RvIGFuZCBzdG9yZSBpbiBsb2NhbFN0b3JhZ2VcbiAgfTtcblxuICBjb25zdCBjaGVja2JveCA9IGNyZWF0ZSgnaW5wdXQnKTtcbiAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gIGNoZWNrYm94LmNoZWNrZWQgPSBkb25lO1xuICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdkb25lLWNoZWNrYm94Jyk7XG4gIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBkb25lID0gIWRvbmU7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjaGVja2JveC5jaGVja2VkID0gZG9uZTtcbiAgICAgIHB1Ymxpc2goJ3Nob3duVG9kb0NoYW5nZWQnKTtcbiAgICB9LCAyMDApO1xuICB9KTtcblxuICBjb25zdCBwcmlvcml0eURpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJveCcpO1xuICBjb25zdCBwcmlvcml0eVNwYW4gPSBjcmVhdGUoJ3NwYW4nKTtcbiAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gIGNvbnN0IHNldFByaW9yaXR5ID0gKG5ld1ByaW9yaXR5KSA9PiB7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBwcmlvcml0eVNwYW4udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgICBwdWJsaXNoKCdzaG93blRvZG9DaGFuZ2VkJyk7XG4gIH07XG4gIGNvbnN0IHByaW9yaXR5UG9wdXAgPSBjcmVhdGUoJ2RpdicpO1xuICBwcmlvcml0eVBvcHVwLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LXBvcHVwJyk7XG4gIGNvbnN0IG5vbmVQcmlvcml0eSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG5vbmVQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idG4nKTtcbiAgbm9uZVByaW9yaXR5LnRleHRDb250ZW50ID0gJy0nO1xuICBub25lUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRQcmlvcml0eSgnLScpKTtcbiAgY29uc3QgbG93UHJpb3JpdHkgPSBjcmVhdGUoJ2RpdicpO1xuICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idG4nKTtcbiAgbG93UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnISc7XG4gIGxvd1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJpb3JpdHkoJyEnKSk7XG4gIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gY3JlYXRlKCdkaXYnKTtcbiAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIG1lZGl1bVByaW9yaXR5LnRleHRDb250ZW50ID0gJyEhJztcbiAgbWVkaXVtUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRQcmlvcml0eSgnISEnKSk7XG4gIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1idG4nKTtcbiAgaGlnaFByaW9yaXR5LnRleHRDb250ZW50ID0gJyEhISc7XG4gIGhpZ2hQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFByaW9yaXR5KCchISEnKSk7XG4gIHByaW9yaXR5UG9wdXAuYXBwZW5kKFxuICAgIG5vbmVQcmlvcml0eSxcbiAgICBsb3dQcmlvcml0eSxcbiAgICBtZWRpdW1Qcmlvcml0eSxcbiAgICBoaWdoUHJpb3JpdHksXG4gICk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZChwcmlvcml0eVNwYW4sIHByaW9yaXR5UG9wdXApO1xuICBwcmlvcml0eURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcmlvcml0eVBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfSk7XG5cbiAgY29uc3QgdGl0bGVEaXYgPSBjcmVhdGUoJ2RpdicpO1xuICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZS1ib3gnKTtcbiAgY29uc3QgdGl0bGVTcGFuID0gY3JlYXRlKCdzcGFuJyk7XG4gIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9ICdOZXcgdG9kbyc7XG4gIGNvbnN0IHRpdGxlSW5wdXQgPSBjcmVhdGUoJ2lucHV0Jyk7XG4gIHRpdGxlSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlU3Bhbik7XG4gIHRpdGxlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0aXRsZURpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSB0aXRsZTtcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVJbnB1dCk7XG4gICAgdGl0bGVJbnB1dC5mb2N1cygpO1xuICB9KTtcbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIHRpdGxlRGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZVNwYW4pO1xuICB9KTtcblxuICBjb25zdCBkZWxldGVCdG4gPSBjcmVhdGUoJ2J1dHRvbicpO1xuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWJ0bicpO1xuICBjb25zdCBkZWxldGVJbWcgPSBjcmVhdGUoJ2ltZycpO1xuICBkZWxldGVJbWcuc3JjID0gZGVsZXRlSW1hZ2U7XG4gIGRlbGV0ZUJ0bi5hcHBlbmQoZGVsZXRlSW1nKTtcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZVRvZG8oaWQpO1xuICAgIHB1Ymxpc2goJ3Nob3duVG9kb0NoYW5nZWQnKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90ZURpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1ib3gnKTtcbiAgY29uc3Qgbm90ZVRleHQgPSBjcmVhdGUoJ2RpdicpO1xuICBub3RlVGV4dC50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBub3RlSW5wdXQgPSBjcmVhdGUoJ3RleHRhcmVhJyk7XG4gIG5vdGVEaXYuYXBwZW5kKG5vdGVUZXh0KTtcbiAgbm90ZVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90ZURpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIG5vdGVJbnB1dC52YWx1ZSA9IG5vdGU7XG4gICAgbm90ZURpdi5hcHBlbmQobm90ZUlucHV0KTtcbiAgICBub3RlSW5wdXQuZm9jdXMoKTtcbiAgfSk7XG4gIG5vdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIG5vdGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBub3RlID0gbm90ZUlucHV0LnZhbHVlO1xuICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gbm90ZTtcbiAgICBub3RlRGl2LmFwcGVuZChub3RlVGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBjcmVhdGUoJ2RpdicpO1xuICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLWJveCcpO1xuICBjb25zdCBkdWVEYXRlU3BhbiA9IGNyZWF0ZSgnc3BhbicpO1xuICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9ICdubyBkYXRlJztcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlKCdpbnB1dCcpO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZVNwYW4pO1xuICBkdWVEYXRlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkdWVEYXRlRGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZUlucHV0KTtcbiAgICBkdWVEYXRlSW5wdXQuZm9jdXMoKTtcbiAgfSk7XG4gIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGR1ZURhdGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBkdWVEYXRlSW5wdXQ7XG4gICAgZGF0ZSA9ICh2YWx1ZSlcbiAgICAgID8gYCR7dmFsdWUuc3BsaXQoJy0nKVsyXX0uJHt2YWx1ZS5zcGxpdCgnLScpWzFdfS4ke3ZhbHVlLnNwbGl0KCctJylbMF19YFxuICAgICAgOiAnbm8gZGF0ZSc7XG4gICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSAoZGF0ZSk7XG4gICAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZVNwYW4pO1xuICB9KTtcblxuICBjb25zdCB0b2RvT2JqID0gY3JlYXRlKCdkaXYnKTtcbiAgdG9kb09iai5jbGFzc0xpc3QuYWRkKCd0b2RvLW9iaicpO1xuICB0b2RvT2JqLmFwcGVuZChcbiAgICBjaGVja2JveCxcbiAgICBwcmlvcml0eURpdixcbiAgICB0aXRsZURpdixcbiAgICBkZWxldGVCdG4sXG4gICAgbm90ZURpdixcbiAgICBkdWVEYXRlRGl2LFxuICApO1xuXG4gIGNvbnN0IHNldCA9IChuZXdEb25lLCBuZXdQcmlvcml0eSwgbmV3VGl0bGUsIG5ld05vdGUsIG5ld0RhdGUsIG5ld0lkKSA9PiB7XG4gICAgZG9uZSA9IG5ld0RvbmU7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGRvbmU7XG4gICAgcHJpb3JpdHkgPSBuZXdQcmlvcml0eTtcbiAgICBwcmlvcml0eVNwYW4udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcbiAgICB0aXRsZSA9IG5ld1RpdGxlO1xuICAgIHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIG5vdGUgPSBuZXdOb3RlO1xuICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gbm90ZTtcbiAgICBkYXRlID0gbmV3RGF0ZTtcbiAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IGRhdGU7XG4gICAgaWYgKG5ld0lkKSBpZCA9IG5ld0lkO1xuICB9O1xuXG4gIGNvbnN0IGdldCA9ICgpID0+ICh7XG4gICAgZG9uZSxcbiAgICBwcmlvcml0eSxcbiAgICB0aXRsZSxcbiAgICBub3RlLFxuICAgIGRhdGUsXG4gIH0pO1xuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHRvZG9PYmo7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0LFxuICAgIGlkLFxuICAgIHJlbmRlcixcbiAgICBzZXQsXG4gICAgZ2V0LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBwdWJsaXNoIH0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0IHBhZ2UgZnJvbSAnLi9wYWdlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4oZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGxldCBhbGxUb2RvID0gW107XG4gIGxldCBzaG93blRvZG8gPSBbXTtcbiAgY29uc3QgcGFnZVVJID0gcGFnZSgpO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9ICdCYWJhYm9pJztcblxuICBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgYWxsVG9kbyA9IGFsbFRvZG8uZmlsdGVyKChpKSA9PiBpLmlkICE9PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyhjdXJyZW50UHJvamVjdCwgcHVibGlzaCwgZGVsZXRlVG9kbyk7XG4gICAgYWxsVG9kby5wdXNoKG5ld1RvZG8pO1xuICAgIHB1Ymxpc2goJ3Nob3duVG9kb0NoYW5nZWQnKTtcbiAgfTtcblxuICBjb25zdCBidWlsZFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRUb2RvID0gdG9kbyhjdXJyZW50UHJvamVjdCwgcHVibGlzaCwgZGVsZXRlVG9kbyk7XG4gICAgZGVmYXVsdFRvZG8uc2V0KFxuICAgICAgdHJ1ZSxcbiAgICAgICchISEnLFxuICAgICAgJ1RvZG8gTmFtZScsXG4gICAgICAnWW91IGNhbiBhZGQgYSBub3RlIGhlcmUnLFxuICAgICAgJ25vIGRhdGUnLFxuICAgICk7XG4gICAgYWxsVG9kby5wdXNoKGRlZmF1bHRUb2RvKTtcbiAgICBjb250ZW50LmFwcGVuZCguLi5wYWdlVUkucmVuZGVyKCkpO1xuICAgIHB1Ymxpc2goJ3Nob3duVG9kb0NoYW5nZWQnKTtcbiAgfTtcbiAgc3Vic2NyaWJlKCdpbml0JywgYnVpbGRVSSk7XG5cbiAgY29uc3Qgc3RvcmVEYXRhID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdzdG9yZSBkYXRhJyk7XG4gIH07XG4gIHN1YnNjcmliZSgnc3RvcmVEYXRhJyk7XG4gIHN1YnNjcmliZSgnc293blRvZG9DaGFuZ2VkJyk7XG5cbiAgLy8gd2hlbiB0aGUgZGF0YSBpcyBsb2FkZWQgZnJvbSBsb2NhbFN0b3JhZ2UgYW5kIHRoZSBhbGxUb2RvIGlzIHNldCxcbiAgLy8gdGhlIGxvY2FsU3RvcmFnZSBzaG91bGQgYmUgdXBkYXRlZCB3aXRoIHRoZSBuZXcgYWxsVG9kb1xuICAvLyBiZWNhdXNlIHRoZSBpZCBvZiB0aGUgdG9kbyBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGlkIG9mIHRoZSB0b2RvIGluIHRoZVxuICAvLyBsb2NhbFN0b3JhZ2VcbiAgLy8gbG9jYWxTdG9yYWdlIGFsbFRvZG8ga2V5OiAxNDU5MzMzMjI0Njc4Njc0XG4gIC8vIGxvY2FsU3RvcmFnZSBwcm9qZWN0IGtleTogODYzNzIwNzMxMjMyNDI4MFxuXG4gIGNvbnN0IHJlbmRlciA9ICgpID0+IHtcbiAgICBwYWdlVUkuY2xlYXJUb2RvKCk7XG4gICAgc2hvd25Ub2RvID0gWy4uLmFsbFRvZG9dOyAvLyBoZXJlIG5lZWRzIHRvIGJlIGEgc29ydGluZyBmdW5jdGlvblxuICAgIHNob3duVG9kby5mb3JFYWNoKChvYmopID0+IHBhZ2VVSS5hcHBlbmRUb2RvKG9iaikpO1xuICB9O1xuICBzdWJzY3JpYmUoJ3Nob3duVG9kb0NoYW5nZWQnLCByZW5kZXIpO1xuXG4gIHB1Ymxpc2goJ2luaXQnKTtcbn0oKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=