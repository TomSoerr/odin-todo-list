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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cultured: #f8f9faff;\n  --cultured-2: #e9ecefff;\n  --gainsboro: #dee2e6ff;\n  --light-gray: #ced4daff;\n  --cadet-blue-crayola: #adb5bdff;\n  --sonic-silver: #6c757dff;\n  --davys-grey: #495057ff;\n  --onyx: #343a40ff;\n  --eerie-black: #212529ff;\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --focus-color: #89d9fb;\n}\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  background-color: var(--cultured-2);\n  color: var(--eerie-black);\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n/* PAGE */\n\n/* SIDEBAR */\n\n#sidebar {\n  background-color: var(--cultured);\n  display: grid;\n  align-content: start;\n}\n\n#sidebar .header {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem 1rem;\n}\n\n#sidebar .header:first-of-type {\n  font-size: 2.2rem;\n  font-weight: 800;\n}\n\n#sidebar .header:first-of-type span {\n  color: purple;\n}\n\n#sidebar .tab {\n  color: var(--davys-grey);\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: auto  1fr;\n  grid-auto-rows: 1.5rem;\n  gap: 0.5rem;\n  align-items: center;\n  cursor: pointer;\n  border-left: thick solid transparent;\n}\n\n#sidebar .tab img {\n  height: 100%;\n}\n\n#sidebar .tab img:last-child {\n  justify-self: end;\n}\n\n#sidebar .tab input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  color: var(--davys-grey);\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-bottom: thin solid var(--davys-grey);\n  outline: none;\n  font-size: 1rem;\n  width: 7rem;\n}\n\n#sidebar .tab.active {\n  background-color: var(--cultured-2);\n  border-color: var(--davys-grey);\n}\n\n/* MAIN PAGE */\n\n#main {\n  position: relative;\n  overflow: auto;\n  height: 100vh;\n  padding: 2rem;\n  padding-bottom: 6.5rem;\n  display: grid;\n  align-content: start;\n  gap: 1rem;\n}\n\n#main #current-project {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: medium solid var(--light-gray);\n  display: grid;\n  gap: 0.5rem;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n  grid-auto-rows: 1.5rem;\n}\n\n#main #current-project img {\n  height: 100%;\n}\n\n#main #add-todo {\n  display: none;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  background-color: var(--cultured);\n  padding: 0.5rem;\n  border-radius: 2.5rem;\n  gap: 0.5rem;\n  grid-template-columns: max-content max-content;\n  grid-auto-rows: 1.5rem;\n  align-items: center;\n  border: thin solid var(--light-gray);\n  margin: 2rem;\n}\n\n#main #add-todo.active {\n  display: grid;\n}\n\n#main #add-todo img {\n  height: 100%;\n  width: 100%;\n}\n\n/* TODO CARD */\n\n.todo-obj {\n  background-color: var(--cultured);\n  border: thin solid var(--light-gray);\n  display: grid;\n  min-width: 18rem;\n  grid-template: \n    'done  priority  title  del' auto\n    '.  note  note  note' 1fr\n    '.  date  date date' auto /\n    auto auto 1fr auto;\n  grid-gap: 0.5rem;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.todo-obj .done-checkbox {\n  grid-area: done;\n  justify-self: center;\n  position: relative;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  appearance: none;\n  border: solid thin var(--eerie-black);\n  align-self: center;\n}\n\n.todo-obj .done-checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--eerie-black);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n\n.todo-obj .done-checkbox:checked::before {\n  transform: scale(0.75);\n}\n\n.todo-obj .priority-box {\n  grid-area: priority;\n  color: var(--sonic-silver);\n  font-size: 1.5rem;\n  position: relative;\n  align-self: center;\n}\n\n.todo-obj .priority-box .priority-popup {\n  position: absolute;\n  display: none;\n  background-color: var(--cultured-2);\n  border-radius: 1rem;\n  border-top-left-radius: 0;\n  border: thin solid var(--light-gray);\n  font-size: 1rem;\n  height: max-content;\n  overflow: hidden;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n\n.todo-obj .priority-box .priority-popup.show {\n  display: flex;\n}\n\n.todo-obj .priority-box .priority-popup .priority-btn {\n  border: thin solid var(--sonic-silver);\n  background-color: var(--cultured);\n  padding: 0.3rem;\n  width: 2rem;\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n}\n\n.todo-obj .title-box {\n  grid-area: title;\n  font-size: 1.5rem;\n  font-weight: 500;\n  overflow: hidden;\n  overflow-wrap: break-word;\n}\n\n.todo-obj .title-box input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  width: 100%;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  height: 1.1em;\n  font-weight: 500;\n  outline: none;\n  border-bottom: thin solid var(--eerie-black);\n}\n\n.todo-obj .delete-btn {\n  grid-area: del;\n  appearance: none;\n  align-self: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: none;\n  background-color: var(--cultured);\n  cursor: pointer;\n}\n\n.todo-obj .delete-btn img {\n  height: 100%;\n  width: 100%;\n}\n\n.todo-obj .note-box {\n  grid-area: note;\n  color: var(--sonic-silver);\n  overflow: hidden;\n  overflow-wrap: break-word;\n}\n\n.todo-obj .note-box div {\n  min-height: 1rem;\n  white-space: pre-wrap;\n}\n\n.todo-obj .note-box textarea {\n  appearance: none;\n  resize: vertical;\n  width: 100%;\n  height: 5rem;\n  border: none;\n  color: var(--sonic-silver);\n  font-family: inherit;\n  font-size: 1rem;\n  background-color: var(--cultured);\n  outline: none;\n  border-bottom:  thin solid var(--sonic-silver);\n}\n\n.todo-obj .due-date-box {\n  grid-area: date;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .due-date-box input[type=\"date\"] {\n  appearance: none;\n  padding: 0;\n  margin: 0;\n  background-color: var(--cultured);\n  color: var(--sonic-silver);\n  font-size: 1rem;\n  font-family: var(--font-family);\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-bottom: thin solid var(--sonic-silver);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --cultured: #f8f9faff;\n  --cultured-2: #e9ecefff;\n  --gainsboro: #dee2e6ff;\n  --light-gray: #ced4daff;\n  --cadet-blue-crayola: #adb5bdff;\n  --sonic-silver: #6c757dff;\n  --davys-grey: #495057ff;\n  --onyx: #343a40ff;\n  --eerie-black: #212529ff;\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --focus-color: #89d9fb;\n}\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  background-color: var(--cultured-2);\n  color: var(--eerie-black);\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n/* PAGE */\n\n/* SIDEBAR */\n\n#sidebar {\n  background-color: var(--cultured);\n  display: grid;\n  align-content: start;\n}\n\n#sidebar .header {\n  font-size: 1.8rem;\n  font-weight: 700;\n  margin: 1rem 1rem 0.5rem 1rem;\n}\n\n#sidebar .header:first-of-type {\n  font-size: 2.2rem;\n  font-weight: 800;\n}\n\n#sidebar .header:first-of-type span {\n  color: purple;\n}\n\n#sidebar .tab {\n  color: var(--davys-grey);\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: auto  1fr;\n  grid-auto-rows: 1.5rem;\n  gap: 0.5rem;\n  align-items: center;\n  cursor: pointer;\n  border-left: thick solid transparent;\n}\n\n#sidebar .tab img {\n  height: 100%;\n}\n\n#sidebar .tab img:last-child {\n  justify-self: end;\n}\n\n#sidebar .tab input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  color: var(--davys-grey);\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-bottom: thin solid var(--davys-grey);\n  outline: none;\n  font-size: 1rem;\n  width: 7rem;\n}\n\n#sidebar .tab.active {\n  background-color: var(--cultured-2);\n  border-color: var(--davys-grey);\n}\n\n/* MAIN PAGE */\n\n#main {\n  position: relative;\n  overflow: auto;\n  height: 100vh;\n  padding: 2rem;\n  padding-bottom: 6.5rem;\n  display: grid;\n  align-content: start;\n  gap: 1rem;\n}\n\n#main #current-project {\n  font-size: 1.5rem;\n  font-weight: 700;\n  padding-bottom: 1rem;\n  border-bottom: medium solid var(--light-gray);\n  display: grid;\n  gap: 0.5rem;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n  grid-auto-rows: 1.5rem;\n}\n\n#main #current-project img {\n  height: 100%;\n}\n\n#main #add-todo {\n  display: none;\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  background-color: var(--cultured);\n  padding: 0.5rem;\n  border-radius: 2.5rem;\n  gap: 0.5rem;\n  grid-template-columns: max-content max-content;\n  grid-auto-rows: 1.5rem;\n  align-items: center;\n  border: thin solid var(--light-gray);\n  margin: 2rem;\n}\n\n#main #add-todo.active {\n  display: grid;\n}\n\n#main #add-todo img {\n  height: 100%;\n  width: 100%;\n}\n\n/* TODO CARD */\n\n.todo-obj {\n  background-color: var(--cultured);\n  border: thin solid var(--light-gray);\n  display: grid;\n  min-width: 18rem;\n  grid-template: \n    'done  priority  title  del' auto\n    '.  note  note  note' 1fr\n    '.  date  date date' auto /\n    auto auto 1fr auto;\n  grid-gap: 0.5rem;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.todo-obj .done-checkbox {\n  grid-area: done;\n  justify-self: center;\n  position: relative;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  appearance: none;\n  border: solid thin var(--eerie-black);\n  align-self: center;\n}\n\n.todo-obj .done-checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--eerie-black);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n\n.todo-obj .done-checkbox:checked::before {\n  transform: scale(0.75);\n}\n\n.todo-obj .priority-box {\n  grid-area: priority;\n  color: var(--sonic-silver);\n  font-size: 1.5rem;\n  position: relative;\n  align-self: center;\n}\n\n.todo-obj .priority-box .priority-popup {\n  position: absolute;\n  display: none;\n  background-color: var(--cultured-2);\n  border-radius: 1rem;\n  border-top-left-radius: 0;\n  border: thin solid var(--light-gray);\n  font-size: 1rem;\n  height: max-content;\n  overflow: hidden;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n\n.todo-obj .priority-box .priority-popup.show {\n  display: flex;\n}\n\n.todo-obj .priority-box .priority-popup .priority-btn {\n  border: thin solid var(--sonic-silver);\n  background-color: var(--cultured);\n  padding: 0.3rem;\n  width: 2rem;\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n}\n\n.todo-obj .title-box {\n  grid-area: title;\n  font-size: 1.5rem;\n  font-weight: 500;\n  overflow: hidden;\n  overflow-wrap: break-word;\n}\n\n.todo-obj .title-box input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  width: 100%;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  height: 1.1em;\n  font-weight: 500;\n  outline: none;\n  border-bottom: thin solid var(--eerie-black);\n}\n\n.todo-obj .delete-btn {\n  grid-area: del;\n  appearance: none;\n  align-self: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: none;\n  background-color: var(--cultured);\n  cursor: pointer;\n}\n\n.todo-obj .delete-btn img {\n  height: 100%;\n  width: 100%;\n}\n\n.todo-obj .note-box {\n  grid-area: note;\n  color: var(--sonic-silver);\n  overflow: hidden;\n  overflow-wrap: break-word;\n}\n\n.todo-obj .note-box div {\n  min-height: 1rem;\n  white-space: pre-wrap;\n}\n\n.todo-obj .note-box textarea {\n  appearance: none;\n  resize: vertical;\n  width: 100%;\n  height: 5rem;\n  border: none;\n  color: var(--sonic-silver);\n  font-family: inherit;\n  font-size: 1rem;\n  background-color: var(--cultured);\n  outline: none;\n  border-bottom:  thin solid var(--sonic-silver);\n}\n\n.todo-obj .due-date-box {\n  grid-area: date;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .due-date-box input[type=\"date\"] {\n  appearance: none;\n  padding: 0;\n  margin: 0;\n  background-color: var(--cultured);\n  color: var(--sonic-silver);\n  font-size: 1rem;\n  font-family: var(--font-family);\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-bottom: thin solid var(--sonic-silver);\n}"],"sourceRoot":""}]);
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

/***/ "./src/local-storage-test.js":
/*!***********************************!*\
  !*** ./src/local-storage-test.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
      || e.code === 1014
      || e.name === 'QuotaExceededError'
      || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && (storage && storage.length !== 0);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageAvailable);


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
/* harmony import */ var _img_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/add.svg */ "./src/img/add.svg");
/* harmony import */ var _img_today_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/today.svg */ "./src/img/today.svg");
/* harmony import */ var _img_all_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/all.svg */ "./src/img/all.svg");
/* harmony import */ var _img_week_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/week.svg */ "./src/img/week.svg");
/* harmony import */ var _img_remove_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/remove.svg */ "./src/img/remove.svg");
/* harmony import */ var _img_project_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/project.svg */ "./src/img/project.svg");







const page = (addTodo, addProject, setCurrentOrder) => {
  const create = (tagName) => document.createElement(tagName);
  const projectKey = '863720731232428';

  let currentProject = 'Default Project';

  const currentProjectDiv = create('div');
  currentProjectDiv.id = 'current-project';
  const projectImg = create('img');
  projectImg.src = _img_project_svg__WEBPACK_IMPORTED_MODULE_5__;
  currentProjectDiv.append(projectImg, currentProject);

  const addTodoDiv = create('div');
  addTodoDiv.id = 'add-todo';
  const addImg = create('img');
  addImg.src = _img_add_svg__WEBPACK_IMPORTED_MODULE_0__;
  const addText = create('div');
  addText.textContent = 'Add Todo';
  addTodoDiv.append(addText, addImg);
  addTodoDiv.addEventListener('click', () => {
    addTodo(currentProject);
  });

  const mainDiv = create('div');
  mainDiv.id = 'main';
  mainDiv.append(currentProjectDiv, addTodoDiv);

  const sidebarDiv = create('div');
  sidebarDiv.id = 'sidebar';

  const removeAllActive = () => {
    [...sidebarDiv.children].forEach((child) => {
      child.classList.remove('active');
    });
    addTodoDiv.classList.remove('active');
  };

  const logoHeader = create('div');
  logoHeader.classList.add('header');
  logoHeader.append((() => {
    const tmp = create('span');
    tmp.textContent = 'Zen';
    return tmp;
  })(), 'Do');
  const allTab = create('div');
  allTab.classList.add('tab');
  const allImg = create('img');
  allImg.src = _img_all_svg__WEBPACK_IMPORTED_MODULE_2__;
  allTab.append(allImg, 'All');
  allTab.addEventListener('click', () => {
    removeAllActive();
    allTab.classList.add('active');
    setCurrentOrder('All');
  });
  const todayTab = create('div');
  todayTab.classList.add('tab');
  const todayImg = create('img');
  todayImg.src = _img_today_svg__WEBPACK_IMPORTED_MODULE_1__;
  todayTab.append(todayImg, 'Today');
  todayTab.addEventListener('click', () => {
    removeAllActive();
    todayTab.classList.add('active');
    setCurrentOrder('Today');
  });
  const thisWeekTab = create('div');
  thisWeekTab.classList.add('tab');
  const thisWeekImg = create('img');
  thisWeekImg.src = _img_week_svg__WEBPACK_IMPORTED_MODULE_3__;
  thisWeekTab.append(thisWeekImg, 'Week');
  thisWeekTab.addEventListener('click', () => {
    removeAllActive();
    thisWeekTab.classList.add('active');
    setCurrentOrder('This Week');
  });
  const projectHeader = create('div');
  projectHeader.classList.add('header');
  projectHeader.textContent = 'Projects';
  const addProjectDiv = create('div');
  addProjectDiv.classList.add('tab');
  addProjectDiv.id = 'add-project';
  const addProjectImg = create('img');
  addProjectImg.src = _img_add_svg__WEBPACK_IMPORTED_MODULE_0__;
  addProjectDiv.append('New Project', addProjectImg);
  addProjectDiv.addEventListener('click', () => {
    addProject();
  });
  sidebarDiv.append(
    logoHeader,
    allTab,
    todayTab,
    thisWeekTab,
    projectHeader,
    addProjectDiv,
  );

  const project = () => {
    let name;

    const projectDiv = create('div');
    projectDiv.classList.add('tab');
    const projectInput = create('input');
    projectInput.type = 'text';
    projectInput.focus();
    const removeImg = create('img');
    removeImg.src = _img_remove_svg__WEBPACK_IMPORTED_MODULE_4__;
    removeImg.addEventListener('click', () => {
      addTodoDiv.classList.remove('active');
      projectDiv.remove();
      // delete all todos in this project
      // setCurrentOrder('All');
      alert('Project removed');
    });
    projectDiv.append(projectInput, removeImg);

    const activate = () => {
      removeAllActive();
      projectDiv.classList.add('active');
      addTodoDiv.classList.add('active');
      currentProject = name;
      setCurrentOrder(currentProject);
    };

    projectInput.addEventListener('blur', () => {
      if (projectInput.value === '') {
        projectDiv.remove();
      } else {
        name = projectInput.value;
        projectDiv.replaceChildren(name, removeImg);
        activate();
        const tmp = JSON.parse(localStorage.getItem(projectKey));
        tmp.push(name);
        localStorage.setItem(projectKey, JSON.stringify(tmp));
      }
    });

    projectDiv.addEventListener('click', () => {
      if (projectDiv.children[0].tagName !== 'INPUT') {
        activate();
      }
    });

    const set = (newProjectName) => {
      name = newProjectName;
      projectDiv.replaceChildren(newProjectName, removeImg);
      activate();
    };

    const render = () => projectDiv;
    return {
      render,
      set,
      projectInput,
    };
  };

  const appendProject = (newProject) => {
    sidebarDiv.insertBefore(newProject.render(), addProjectDiv);
    newProject.projectInput.focus();
  };

  const render = () => [sidebarDiv, mainDiv];

  const appendTodo = (todo) => mainDiv.append(todo.render());

  const clearTodo = () => {
    while (mainDiv.children[2]) {
      mainDiv.children[2].remove();
    }
  };

  return {
    render,
    appendTodo,
    clearTodo,
    project,
    appendProject,
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

  const allTodoKey = '145933322467867';

  let id = (Math.floor(Math.random() * 10 ** 15)).toString();
  let done = false;
  let priority = '-';
  let title = '';
  let note = '';
  let date = 'no date';

  const updateLocalStorage = () => {
    const allTodo = JSON.parse(localStorage.getItem(allTodoKey));
    allTodo[id] = [project, done, priority, title, note, date];
    localStorage.setItem(allTodoKey, JSON.stringify(allTodo));
  };

  const checkbox = create('input');
  checkbox.type = 'checkbox';
  checkbox.checked = done;
  checkbox.classList.add('done-checkbox');
  checkbox.addEventListener('change', () => {
    done = !done;
    setTimeout(() => {
      checkbox.checked = done;
      updateLocalStorage();
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
    updateLocalStorage();
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
    updateLocalStorage();
    titleDiv.append(titleSpan);
  });

  const deleteBtn = create('button');
  deleteBtn.classList.add('delete-btn');
  const deleteImg = create('img');
  deleteImg.src = _img_delete_svg__WEBPACK_IMPORTED_MODULE_0__;
  deleteBtn.append(deleteImg);
  deleteBtn.addEventListener('click', () => {
    deleteTodo(id);
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
    updateLocalStorage();
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
    dueDateSpan.textContent = date;
    updateLocalStorage();
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

/***/ "./src/img/add.svg":
/*!*************************!*\
  !*** ./src/img/add.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "38d5f795970601b2c451.svg";

/***/ }),

/***/ "./src/img/all.svg":
/*!*************************!*\
  !*** ./src/img/all.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "46608fd383b03e086de0.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07961921628d24775f35.svg";

/***/ }),

/***/ "./src/img/project.svg":
/*!*****************************!*\
  !*** ./src/img/project.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1cb9a6abcc3794f9f77d.svg";

/***/ }),

/***/ "./src/img/remove.svg":
/*!****************************!*\
  !*** ./src/img/remove.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "622bf66fda8e7da50438.svg";

/***/ }),

/***/ "./src/img/today.svg":
/*!***************************!*\
  !*** ./src/img/today.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "498e000fe00b9d5b1e7b.svg";

/***/ }),

/***/ "./src/img/week.svg":
/*!**************************!*\
  !*** ./src/img/week.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51dfc34901b45ebd3fa5.svg";

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
/* harmony import */ var _local_storage_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage-test */ "./src/local-storage-test.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(function main() {
  const content = document.querySelector('#content');
  const allTodoKey = '145933322467867';
  const projectKey = '863720731232428';

  let allTodo = [];
  let shownTodo = [];
  let pageUI;
  const projectsOnLoad = [];
  let currentOrder;

  const setCurrentOrder = (newOrder) => {
    currentOrder = newOrder;
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };

  const deleteTodo = (id) => {
    const tmp = JSON.parse(localStorage.getItem(allTodoKey));
    delete tmp[id];
    localStorage.setItem(allTodoKey, JSON.stringify(tmp));
    allTodo = allTodo.filter((i) => i.id !== id);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };

  const addTodo = (projectName) => {
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName, _pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteTodo);
    allTodo.push(newTodo);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };

  const deleteProject = (id) => {
    const tmp = JSON.parse(localStorage.getItem(projectKey));
    // find index of id in tmp and splice it
    const index = tmp.indexOf(id);
    tmp.splice(index, 1);
    localStorage.setItem(projectKey, JSON.stringify(tmp));
  };

  const addProject = () => {
    const newProject = pageUI.project(_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteProject);
    pageUI.appendProject(newProject);
  };

  const init = () => {
    const setDefaultTodo = () => {
      const defaultTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])('Default Project', _pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteTodo);
      const today = new Date();
      defaultTodo.set(
        true,
        '!!!',
        'Todo Name',
        'You can add a note here',
        `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`,
      );
      allTodo.push(defaultTodo);
    };

    const setDefaultProject = () => {
      const newProject = pageUI.project(_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteProject);
      newProject.set('Default Project');
      projectsOnLoad.push('Default Project');
      pageUI.appendProject(newProject);
    };

    if ((0,_local_storage_test__WEBPACK_IMPORTED_MODULE_3__["default"])('localStorage')) {
      pageUI = (0,_page__WEBPACK_IMPORTED_MODULE_2__["default"])(addTodo, addProject, setCurrentOrder);
      content.append(...pageUI.render());

      if (localStorage.getItem(projectKey)) {
        projectsOnLoad.push(...JSON.parse(localStorage.getItem(projectKey)));
        projectsOnLoad.forEach((projectName) => {
          const tmpProject = pageUI.project(_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteProject);
          tmpProject.set(projectName);
          pageUI.appendProject(tmpProject);
        });
      } else {
        setDefaultProject();
        localStorage.setItem(projectKey, JSON.stringify(projectsOnLoad));
      }
      if (localStorage.getItem(allTodoKey)) {
        const tmp = JSON.parse(localStorage.getItem(allTodoKey));

        Object.keys(tmp).forEach((key) => {
          const id = key;
          const [project, done, priority, title, note, date] = tmp[key];
          const tmpTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(project, _pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteTodo);
          tmpTodo.id = id;
          tmpTodo.set(done, priority, title, note, date, id);
          allTodo.push(tmpTodo);
        });
      } else {
        setDefaultTodo();
        const allTodoData = {};
        allTodo.forEach((i) => {
          const {
            done, priority, title, note, date,
          } = i.get();
          allTodoData[i.id] = [
            i.project, done, priority, title, note, date,
          ];
        });
        localStorage.setItem(allTodoKey, JSON.stringify(allTodoData));
      }
    } else {
      console.error('Local storage is not available');
      setDefaultProject();
      setDefaultTodo();
    }
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('init', init);

  const renderTodo = () => {
    pageUI.clearTodo();
    console.log(`currentOrder: ${currentOrder}`);
    console.log(localStorage.getItem(projectKey))
    shownTodo = [...allTodo]; // here needs to be a sorting function
    shownTodo.forEach((obj) => pageUI.appendTodo(obj));
    console.info(JSON.parse(localStorage.getItem(allTodoKey)));
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('shownTodoChanged', renderTodo);

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('init');
}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRDQUFXO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxTHBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmE7O0FBRTNDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRDQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQjtBQUNBLFdBQVcsb0JBQW9CLEdBQUcsb0JBQW9CLEdBQUcsb0JBQW9CO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdMcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDb0I7QUFDcEI7QUFDMEI7QUFDL0I7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksZ0RBQU87QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBTztBQUNYOztBQUVBO0FBQ0Esb0JBQW9CLGlEQUFJLGNBQWMsNENBQU87QUFDN0M7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsNENBQU87QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlEQUFJLG9CQUFvQiw0Q0FBTztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGdCQUFnQixHQUFHLHFCQUFxQixHQUFHLG9CQUFvQjtBQUMxRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsNENBQU87QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSwrREFBZ0I7QUFDeEIsZUFBZSxpREFBSTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsNENBQU87QUFDbkQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaURBQUksVUFBVSw0Q0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFPO0FBQ1g7QUFDQSxFQUFFLGtEQUFTOztBQUVYO0FBQ0E7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxFQUFFLGtEQUFTOztBQUVYLEVBQUUsZ0RBQU87QUFDVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbG9jYWwtc3RvcmFnZS10ZXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3BhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tY3VsdHVyZWQ6ICNmOGY5ZmFmZjtcXG4gIC0tY3VsdHVyZWQtMjogI2U5ZWNlZmZmO1xcbiAgLS1nYWluc2Jvcm86ICNkZWUyZTZmZjtcXG4gIC0tbGlnaHQtZ3JheTogI2NlZDRkYWZmO1xcbiAgLS1jYWRldC1ibHVlLWNyYXlvbGE6ICNhZGI1YmRmZjtcXG4gIC0tc29uaWMtc2lsdmVyOiAjNmM3NTdkZmY7XFxuICAtLWRhdnlzLWdyZXk6ICM0OTUwNTdmZjtcXG4gIC0tb255eDogIzM0M2E0MGZmO1xcbiAgLS1lZXJpZS1ibGFjazogIzIxMjUyOWZmO1xcbiAgLS1mb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXFxcIlNlZ29lIFVJXFxcIixSb2JvdG8sT3h5Z2VuLVNhbnMsVWJ1bnR1LENhbnRhcmVsbCxcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLHNhbnMtc2VyaWY7XFxuICAtLWZvY3VzLWNvbG9yOiAjODlkOWZiO1xcbn1cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZC0yKTtcXG4gIGNvbG9yOiB2YXIoLS1lZXJpZS1ibGFjayk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmcjtcXG59XFxuXFxuLyogUEFHRSAqL1xcblxcbi8qIFNJREVCQVIgKi9cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24tY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNzaWRlYmFyIC5oZWFkZXIge1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbWFyZ2luOiAxcmVtIDFyZW0gMC41cmVtIDFyZW07XFxufVxcblxcbiNzaWRlYmFyIC5oZWFkZXI6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxufVxcblxcbiNzaWRlYmFyIC5oZWFkZXI6Zmlyc3Qtb2YtdHlwZSBzcGFuIHtcXG4gIGNvbG9yOiBwdXJwbGU7XFxufVxcblxcbiNzaWRlYmFyIC50YWIge1xcbiAgY29sb3I6IHZhcigtLWRhdnlzLWdyZXkpO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gIDFmcjtcXG4gIGdyaWQtYXV0by1yb3dzOiAxLjVyZW07XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItbGVmdDogdGhpY2sgc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNzaWRlYmFyIC50YWIgaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3NpZGViYXIgLnRhYiBpbWc6bGFzdC1jaGlsZCB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuI3NpZGViYXIgLnRhYiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGNvbG9yOiB2YXIoLS1kYXZ5cy1ncmV5KTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLWRhdnlzLWdyZXkpO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHdpZHRoOiA3cmVtO1xcbn1cXG5cXG4jc2lkZWJhciAudGFiLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZC0yKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGF2eXMtZ3JleSk7XFxufVxcblxcbi8qIE1BSU4gUEFHRSAqL1xcblxcbiNtYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogNi41cmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4jbWFpbiAjY3VycmVudC1wcm9qZWN0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYm9yZGVyLWJvdHRvbTogbWVkaXVtIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMS41cmVtO1xcbn1cXG5cXG4jbWFpbiAjY3VycmVudC1wcm9qZWN0IGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNtYWluICNhZGQtdG9kbyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBib3JkZXItcmFkaXVzOiAyLjVyZW07XFxuICBnYXA6IDAuNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XFxuICBncmlkLWF1dG8tcm93czogMS41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIG1hcmdpbjogMnJlbTtcXG59XFxuXFxuI21haW4gI2FkZC10b2RvLmFjdGl2ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4jbWFpbiAjYWRkLXRvZG8gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4vKiBUT0RPIENBUkQgKi9cXG5cXG4udG9kby1vYmoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogMThyZW07XFxuICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ2RvbmUgIHByaW9yaXR5ICB0aXRsZSAgZGVsJyBhdXRvXFxuICAgICcuICBub3RlICBub3RlICBub3RlJyAxZnJcXG4gICAgJy4gIGRhdGUgIGRhdGUgZGF0ZScgYXV0byAvXFxuICAgIGF1dG8gYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kb25lLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogZG9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdGhpbiB2YXIoLS1lZXJpZS1ibGFjayk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAuZG9uZS1jaGVja2JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4udG9kby1vYmogLmRvbmUtY2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IHtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGdhcDogMC41cmVtO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAuc2hvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAgLnByaW9yaXR5LWJ0biB7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIHBhZGRpbmc6IDAuM3JlbTtcXG4gIHdpZHRoOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC50aXRsZS1ib3gge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4udG9kby1vYmogLnRpdGxlLWJveCBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgaGVpZ2h0OiAxLjFlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCB2YXIoLS1lZXJpZS1ibGFjayk7XFxufVxcblxcbi50b2RvLW9iaiAuZGVsZXRlLWJ0biB7XFxuICBncmlkLWFyZWE6IGRlbDtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxLjVyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAuZGVsZXRlLWJ0biBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b2RvLW9iaiAubm90ZS1ib3gge1xcbiAgZ3JpZC1hcmVhOiBub3RlO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCBkaXYge1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB0ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAgdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cXG5cXG4udG9kby1vYmogLmR1ZS1kYXRlLWJveCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kdWUtZGF0ZS1ib3ggaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIs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XFxuICAtLWN1bHR1cmVkLTI6ICNlOWVjZWZmZjtcXG4gIC0tZ2FpbnNib3JvOiAjZGVlMmU2ZmY7XFxuICAtLWxpZ2h0LWdyYXk6ICNjZWQ0ZGFmZjtcXG4gIC0tY2FkZXQtYmx1ZS1jcmF5b2xhOiAjYWRiNWJkZmY7XFxuICAtLXNvbmljLXNpbHZlcjogIzZjNzU3ZGZmO1xcbiAgLS1kYXZ5cy1ncmV5OiAjNDk1MDU3ZmY7XFxuICAtLW9ueXg6ICMzNDNhNDBmZjtcXG4gIC0tZWVyaWUtYmxhY2s6ICMyMTI1MjlmZjtcXG4gIC0tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1mb2N1cy1jb2xvcjogIzg5ZDlmYjtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQtMik7XFxuICBjb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XFxufVxcblxcbi8qIFBBR0UgKi9cXG5cXG4vKiBTSURFQkFSICovXFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jc2lkZWJhciAuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogMXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4jc2lkZWJhciAuaGVhZGVyOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAyLjJyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jc2lkZWJhciAuaGVhZGVyOmZpcnN0LW9mLXR5cGUgc3BhbiB7XFxuICBjb2xvcjogcHVycGxlO1xcbn1cXG5cXG4jc2lkZWJhciAudGFiIHtcXG4gIGNvbG9yOiB2YXIoLS1kYXZ5cy1ncmV5KTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvICAxZnI7XFxuICBncmlkLWF1dG8tcm93czogMS41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLWxlZnQ6IHRoaWNrIHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jc2lkZWJhciAudGFiIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNzaWRlYmFyIC50YWIgaW1nOmxhc3QtY2hpbGQge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbiNzaWRlYmFyIC50YWIgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBjb2xvcjogdmFyKC0tZGF2eXMtZ3JleSk7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCB2YXIoLS1kYXZ5cy1ncmV5KTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB3aWR0aDogN3JlbTtcXG59XFxuXFxuI3NpZGViYXIgLnRhYi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQtMik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWRhdnlzLWdyZXkpO1xcbn1cXG5cXG4vKiBNQUlOIFBBR0UgKi9cXG5cXG4jbWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDYuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBhbGlnbi1jb250ZW50OiBzdGFydDtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuI21haW4gI2N1cnJlbnQtcHJvamVjdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJvcmRlci1ib3R0b206IG1lZGl1bSBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDEuNXJlbTtcXG59XFxuXFxuI21haW4gI2N1cnJlbnQtcHJvamVjdCBpbWcge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jbWFpbiAjYWRkLXRvZG8ge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMi41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xcbiAgZ3JpZC1hdXRvLXJvd3M6IDEuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBtYXJnaW46IDJyZW07XFxufVxcblxcbiNtYWluICNhZGQtdG9kby5hY3RpdmUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuI21haW4gI2FkZC10b2RvIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogVE9ETyBDQVJEICovXFxuXFxuLnRvZG8tb2JqIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1saWdodC1ncmF5KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBtaW4td2lkdGg6IDE4cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgICdkb25lICBwcmlvcml0eSAgdGl0bGUgIGRlbCcgYXV0b1xcbiAgICAnLiAgbm90ZSAgbm90ZSAgbm90ZScgMWZyXFxuICAgICcuICBkYXRlICBkYXRlIGRhdGUnIGF1dG8gL1xcbiAgICBhdXRvIGF1dG8gMWZyIGF1dG87XFxuICBncmlkLWdhcDogMC41cmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi50b2RvLW9iaiAuZG9uZS1jaGVja2JveCB7XFxuICBncmlkLWFyZWE6IGRvbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRoaW4gdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1vYmogLmRvbmUtY2hlY2tib3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWVlcmllLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kb25lLWNoZWNrYm94OmNoZWNrZWQ6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC5wcmlvcml0eS1ib3ggLnByaW9yaXR5LXBvcHVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZC0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLWxpZ2h0LWdyYXkpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLnRvZG8tb2JqIC5wcmlvcml0eS1ib3ggLnByaW9yaXR5LXBvcHVwLnNob3cge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8tb2JqIC5wcmlvcml0eS1ib3ggLnByaW9yaXR5LXBvcHVwIC5wcmlvcml0eS1idG4ge1xcbiAgYm9yZGVyOiB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuXFxuLnRvZG8tb2JqIC50aXRsZS1ib3ggaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGhlaWdodDogMS4xZW07XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1ib3R0b206IHRoaW4gc29saWQgdmFyKC0tZWVyaWUtYmxhY2spO1xcbn1cXG5cXG4udG9kby1vYmogLmRlbGV0ZS1idG4ge1xcbiAgZ3JpZC1hcmVhOiBkZWw7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1vYmogLmRlbGV0ZS1idG4gaW1nIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9kby1vYmogLm5vdGUtYm94IHtcXG4gIGdyaWQtYXJlYTogbm90ZTtcXG4gIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcblxcbi50b2RvLW9iaiAubm90ZS1ib3ggZGl2IHtcXG4gIG1pbi1oZWlnaHQ6IDFyZW07XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcblxcbi50b2RvLW9iaiAubm90ZS1ib3ggdGV4dGFyZWEge1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jdWx0dXJlZCk7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogIHRoaW4gc29saWQgdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kdWUtZGF0ZS1ib3gge1xcbiAgZ3JpZC1hcmVhOiBkYXRlO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxufVxcblxcbi50b2RvLW9iaiAuZHVlLWRhdGUtYm94IGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGNvbG9yOiB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLWJvdHRvbTogdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSAnX19zdG9yYWdlX3Rlc3RfXyc7XG4gICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgIGUuY29kZSA9PT0gMjJcbiAgICAgIHx8IGUuY29kZSA9PT0gMTAxNFxuICAgICAgfHwgZS5uYW1lID09PSAnUXVvdGFFeGNlZWRlZEVycm9yJ1xuICAgICAgfHwgZS5uYW1lID09PSAnTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRUQnKVxuICAgICAgJiYgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2VBdmFpbGFibGU7XG4iLCJpbXBvcnQgYWRkSW1hZ2UgZnJvbSAnLi9pbWcvYWRkLnN2Zyc7XG5pbXBvcnQgdG9kYXlJbWFnZSBmcm9tICcuL2ltZy90b2RheS5zdmcnO1xuaW1wb3J0IGFsbEltYWdlIGZyb20gJy4vaW1nL2FsbC5zdmcnO1xuaW1wb3J0IHRoaXNXZWVrSW1hZ2UgZnJvbSAnLi9pbWcvd2Vlay5zdmcnO1xuaW1wb3J0IHJlbW92ZUltYWdlIGZyb20gJy4vaW1nL3JlbW92ZS5zdmcnO1xuaW1wb3J0IHByb2plY3RJbWFnZSBmcm9tICcuL2ltZy9wcm9qZWN0LnN2Zyc7XG5cbmNvbnN0IHBhZ2UgPSAoYWRkVG9kbywgYWRkUHJvamVjdCwgc2V0Q3VycmVudE9yZGVyKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICh0YWdOYW1lKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICBjb25zdCBwcm9qZWN0S2V5ID0gJzg2MzcyMDczMTIzMjQyOCc7XG5cbiAgbGV0IGN1cnJlbnRQcm9qZWN0ID0gJ0RlZmF1bHQgUHJvamVjdCc7XG5cbiAgY29uc3QgY3VycmVudFByb2plY3REaXYgPSBjcmVhdGUoJ2RpdicpO1xuICBjdXJyZW50UHJvamVjdERpdi5pZCA9ICdjdXJyZW50LXByb2plY3QnO1xuICBjb25zdCBwcm9qZWN0SW1nID0gY3JlYXRlKCdpbWcnKTtcbiAgcHJvamVjdEltZy5zcmMgPSBwcm9qZWN0SW1hZ2U7XG4gIGN1cnJlbnRQcm9qZWN0RGl2LmFwcGVuZChwcm9qZWN0SW1nLCBjdXJyZW50UHJvamVjdCk7XG5cbiAgY29uc3QgYWRkVG9kb0RpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGFkZFRvZG9EaXYuaWQgPSAnYWRkLXRvZG8nO1xuICBjb25zdCBhZGRJbWcgPSBjcmVhdGUoJ2ltZycpO1xuICBhZGRJbWcuc3JjID0gYWRkSW1hZ2U7XG4gIGNvbnN0IGFkZFRleHQgPSBjcmVhdGUoJ2RpdicpO1xuICBhZGRUZXh0LnRleHRDb250ZW50ID0gJ0FkZCBUb2RvJztcbiAgYWRkVG9kb0Rpdi5hcHBlbmQoYWRkVGV4dCwgYWRkSW1nKTtcbiAgYWRkVG9kb0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRUb2RvKGN1cnJlbnRQcm9qZWN0KTtcbiAgfSk7XG5cbiAgY29uc3QgbWFpbkRpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1haW5EaXYuaWQgPSAnbWFpbic7XG4gIG1haW5EaXYuYXBwZW5kKGN1cnJlbnRQcm9qZWN0RGl2LCBhZGRUb2RvRGl2KTtcblxuICBjb25zdCBzaWRlYmFyRGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgc2lkZWJhckRpdi5pZCA9ICdzaWRlYmFyJztcblxuICBjb25zdCByZW1vdmVBbGxBY3RpdmUgPSAoKSA9PiB7XG4gICAgWy4uLnNpZGViYXJEaXYuY2hpbGRyZW5dLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBhZGRUb2RvRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9O1xuXG4gIGNvbnN0IGxvZ29IZWFkZXIgPSBjcmVhdGUoJ2RpdicpO1xuICBsb2dvSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBsb2dvSGVhZGVyLmFwcGVuZCgoKCkgPT4ge1xuICAgIGNvbnN0IHRtcCA9IGNyZWF0ZSgnc3BhbicpO1xuICAgIHRtcC50ZXh0Q29udGVudCA9ICdaZW4nO1xuICAgIHJldHVybiB0bXA7XG4gIH0pKCksICdEbycpO1xuICBjb25zdCBhbGxUYWIgPSBjcmVhdGUoJ2RpdicpO1xuICBhbGxUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGNvbnN0IGFsbEltZyA9IGNyZWF0ZSgnaW1nJyk7XG4gIGFsbEltZy5zcmMgPSBhbGxJbWFnZTtcbiAgYWxsVGFiLmFwcGVuZChhbGxJbWcsICdBbGwnKTtcbiAgYWxsVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbW92ZUFsbEFjdGl2ZSgpO1xuICAgIGFsbFRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRDdXJyZW50T3JkZXIoJ0FsbCcpO1xuICB9KTtcbiAgY29uc3QgdG9kYXlUYWIgPSBjcmVhdGUoJ2RpdicpO1xuICB0b2RheVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgY29uc3QgdG9kYXlJbWcgPSBjcmVhdGUoJ2ltZycpO1xuICB0b2RheUltZy5zcmMgPSB0b2RheUltYWdlO1xuICB0b2RheVRhYi5hcHBlbmQodG9kYXlJbWcsICdUb2RheScpO1xuICB0b2RheVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW1vdmVBbGxBY3RpdmUoKTtcbiAgICB0b2RheVRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRDdXJyZW50T3JkZXIoJ1RvZGF5Jyk7XG4gIH0pO1xuICBjb25zdCB0aGlzV2Vla1RhYiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHRoaXNXZWVrVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICBjb25zdCB0aGlzV2Vla0ltZyA9IGNyZWF0ZSgnaW1nJyk7XG4gIHRoaXNXZWVrSW1nLnNyYyA9IHRoaXNXZWVrSW1hZ2U7XG4gIHRoaXNXZWVrVGFiLmFwcGVuZCh0aGlzV2Vla0ltZywgJ1dlZWsnKTtcbiAgdGhpc1dlZWtUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVtb3ZlQWxsQWN0aXZlKCk7XG4gICAgdGhpc1dlZWtUYWIuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0Q3VycmVudE9yZGVyKCdUaGlzIFdlZWsnKTtcbiAgfSk7XG4gIGNvbnN0IHByb2plY3RIZWFkZXIgPSBjcmVhdGUoJ2RpdicpO1xuICBwcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgY29uc3QgYWRkUHJvamVjdERpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGFkZFByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gIGFkZFByb2plY3REaXYuaWQgPSAnYWRkLXByb2plY3QnO1xuICBjb25zdCBhZGRQcm9qZWN0SW1nID0gY3JlYXRlKCdpbWcnKTtcbiAgYWRkUHJvamVjdEltZy5zcmMgPSBhZGRJbWFnZTtcbiAgYWRkUHJvamVjdERpdi5hcHBlbmQoJ05ldyBQcm9qZWN0JywgYWRkUHJvamVjdEltZyk7XG4gIGFkZFByb2plY3REaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkUHJvamVjdCgpO1xuICB9KTtcbiAgc2lkZWJhckRpdi5hcHBlbmQoXG4gICAgbG9nb0hlYWRlcixcbiAgICBhbGxUYWIsXG4gICAgdG9kYXlUYWIsXG4gICAgdGhpc1dlZWtUYWIsXG4gICAgcHJvamVjdEhlYWRlcixcbiAgICBhZGRQcm9qZWN0RGl2LFxuICApO1xuXG4gIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5hbWU7XG5cbiAgICBjb25zdCBwcm9qZWN0RGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGNyZWF0ZSgnaW5wdXQnKTtcbiAgICBwcm9qZWN0SW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBwcm9qZWN0SW5wdXQuZm9jdXMoKTtcbiAgICBjb25zdCByZW1vdmVJbWcgPSBjcmVhdGUoJ2ltZycpO1xuICAgIHJlbW92ZUltZy5zcmMgPSByZW1vdmVJbWFnZTtcbiAgICByZW1vdmVJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBhZGRUb2RvRGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgcHJvamVjdERpdi5yZW1vdmUoKTtcbiAgICAgIC8vIGRlbGV0ZSBhbGwgdG9kb3MgaW4gdGhpcyBwcm9qZWN0XG4gICAgICAvLyBzZXRDdXJyZW50T3JkZXIoJ0FsbCcpO1xuICAgICAgYWxlcnQoJ1Byb2plY3QgcmVtb3ZlZCcpO1xuICAgIH0pO1xuICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RJbnB1dCwgcmVtb3ZlSW1nKTtcblxuICAgIGNvbnN0IGFjdGl2YXRlID0gKCkgPT4ge1xuICAgICAgcmVtb3ZlQWxsQWN0aXZlKCk7XG4gICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgYWRkVG9kb0Rpdi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbmFtZTtcbiAgICAgIHNldEN1cnJlbnRPcmRlcihjdXJyZW50UHJvamVjdCk7XG4gICAgfTtcblxuICAgIHByb2plY3RJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgaWYgKHByb2plY3RJbnB1dC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgcHJvamVjdERpdi5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5hbWUgPSBwcm9qZWN0SW5wdXQudmFsdWU7XG4gICAgICAgIHByb2plY3REaXYucmVwbGFjZUNoaWxkcmVuKG5hbWUsIHJlbW92ZUltZyk7XG4gICAgICAgIGFjdGl2YXRlKCk7XG4gICAgICAgIGNvbnN0IHRtcCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdEtleSkpO1xuICAgICAgICB0bXAucHVzaChuYW1lKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEtleSwgSlNPTi5zdHJpbmdpZnkodG1wKSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaWYgKHByb2plY3REaXYuY2hpbGRyZW5bMF0udGFnTmFtZSAhPT0gJ0lOUFVUJykge1xuICAgICAgICBhY3RpdmF0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0ID0gKG5ld1Byb2plY3ROYW1lKSA9PiB7XG4gICAgICBuYW1lID0gbmV3UHJvamVjdE5hbWU7XG4gICAgICBwcm9qZWN0RGl2LnJlcGxhY2VDaGlsZHJlbihuZXdQcm9qZWN0TmFtZSwgcmVtb3ZlSW1nKTtcbiAgICAgIGFjdGl2YXRlKCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IHByb2plY3REaXY7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIHNldCxcbiAgICAgIHByb2plY3RJbnB1dCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IGFwcGVuZFByb2plY3QgPSAobmV3UHJvamVjdCkgPT4ge1xuICAgIHNpZGViYXJEaXYuaW5zZXJ0QmVmb3JlKG5ld1Byb2plY3QucmVuZGVyKCksIGFkZFByb2plY3REaXYpO1xuICAgIG5ld1Byb2plY3QucHJvamVjdElucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4gW3NpZGViYXJEaXYsIG1haW5EaXZdO1xuXG4gIGNvbnN0IGFwcGVuZFRvZG8gPSAodG9kbykgPT4gbWFpbkRpdi5hcHBlbmQodG9kby5yZW5kZXIoKSk7XG5cbiAgY29uc3QgY2xlYXJUb2RvID0gKCkgPT4ge1xuICAgIHdoaWxlIChtYWluRGl2LmNoaWxkcmVuWzJdKSB7XG4gICAgICBtYWluRGl2LmNoaWxkcmVuWzJdLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlcixcbiAgICBhcHBlbmRUb2RvLFxuICAgIGNsZWFyVG9kbyxcbiAgICBwcm9qZWN0LFxuICAgIGFwcGVuZFByb2plY3QsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIiwiY29uc3QgcHViU3ViID0gKCgpID0+IHtcbiAgY29uc3QgZXZlbnRzID0ge307XG4gIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfTtcbiAgY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICAgIGZuKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbn0pKCk7XG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pO1xufTtcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIHB1YlN1Yi5wdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbiIsImltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcblxuY29uc3QgdG9kbyA9IChwcm9qZWN0LCBwdWJsaXNoLCBkZWxldGVUb2RvKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICh0eXBlKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGNvbnN0IGFsbFRvZG9LZXkgPSAnMTQ1OTMzMzIyNDY3ODY3JztcblxuICBsZXQgaWQgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKiogMTUpKS50b1N0cmluZygpO1xuICBsZXQgZG9uZSA9IGZhbHNlO1xuICBsZXQgcHJpb3JpdHkgPSAnLSc7XG4gIGxldCB0aXRsZSA9ICcnO1xuICBsZXQgbm90ZSA9ICcnO1xuICBsZXQgZGF0ZSA9ICdubyBkYXRlJztcblxuICBjb25zdCB1cGRhdGVMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsVG9kbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVG9kb0tleSkpO1xuICAgIGFsbFRvZG9baWRdID0gW3Byb2plY3QsIGRvbmUsIHByaW9yaXR5LCB0aXRsZSwgbm90ZSwgZGF0ZV07XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWxsVG9kb0tleSwgSlNPTi5zdHJpbmdpZnkoYWxsVG9kbykpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlKCdpbnB1dCcpO1xuICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3guY2hlY2tlZCA9IGRvbmU7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ2RvbmUtY2hlY2tib3gnKTtcbiAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGRvbmUgPSAhZG9uZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBkb25lO1xuICAgICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgICBwdWJsaXNoKCdzaG93blRvZG9DaGFuZ2VkJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGUoJ2RpdicpO1xuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1ib3gnKTtcbiAgY29uc3QgcHJpb3JpdHlTcGFuID0gY3JlYXRlKCdzcGFuJyk7XG4gIHByaW9yaXR5U3Bhbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICBjb25zdCBzZXRQcmlvcml0eSA9IChuZXdQcmlvcml0eSkgPT4ge1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgdXBkYXRlTG9jYWxTdG9yYWdlKCk7XG4gICAgcHVibGlzaCgnc2hvd25Ub2RvQ2hhbmdlZCcpO1xuICB9O1xuICBjb25zdCBwcmlvcml0eVBvcHVwID0gY3JlYXRlKCdkaXYnKTtcbiAgcHJpb3JpdHlQb3B1cC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1wb3B1cCcpO1xuICBjb25zdCBub25lUHJpb3JpdHkgPSBjcmVhdGUoJ2RpdicpO1xuICBub25lUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIG5vbmVQcmlvcml0eS50ZXh0Q29udGVudCA9ICctJztcbiAgbm9uZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJpb3JpdHkoJy0nKSk7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gY3JlYXRlKCdkaXYnKTtcbiAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJyEnO1xuICBsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFByaW9yaXR5KCchJykpO1xuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ0bicpO1xuICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICchISc7XG4gIG1lZGl1bVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJpb3JpdHkoJyEhJykpO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBjcmVhdGUoJ2RpdicpO1xuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICchISEnO1xuICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRQcmlvcml0eSgnISEhJykpO1xuICBwcmlvcml0eVBvcHVwLmFwcGVuZChcbiAgICBub25lUHJpb3JpdHksXG4gICAgbG93UHJpb3JpdHksXG4gICAgbWVkaXVtUHJpb3JpdHksXG4gICAgaGlnaFByaW9yaXR5LFxuICApO1xuICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlTcGFuLCBwcmlvcml0eVBvcHVwKTtcbiAgcHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJpb3JpdHlQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94Jyk7XG4gIGNvbnN0IHRpdGxlU3BhbiA9IGNyZWF0ZSgnc3BhbicpO1xuICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSAnTmV3IHRvZG8nO1xuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlKCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIHRpdGxlRGl2LmFwcGVuZCh0aXRsZVNwYW4pO1xuICB0aXRsZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGl0bGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGU7XG4gICAgdGl0bGVEaXYuYXBwZW5kKHRpdGxlSW5wdXQpO1xuICAgIHRpdGxlSW5wdXQuZm9jdXMoKTtcbiAgfSk7XG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICB0aXRsZURpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIHRpdGxlID0gdGl0bGVJbnB1dC52YWx1ZTtcbiAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVTcGFuKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlKCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgY29uc3QgZGVsZXRlSW1nID0gY3JlYXRlKCdpbWcnKTtcbiAgZGVsZXRlSW1nLnNyYyA9IGRlbGV0ZUltYWdlO1xuICBkZWxldGVCdG4uYXBwZW5kKGRlbGV0ZUltZyk7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVUb2RvKGlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90ZURpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG5vdGVEaXYuY2xhc3NMaXN0LmFkZCgnbm90ZS1ib3gnKTtcbiAgY29uc3Qgbm90ZVRleHQgPSBjcmVhdGUoJ2RpdicpO1xuICBub3RlVGV4dC50ZXh0Q29udGVudCA9ICcnO1xuICBjb25zdCBub3RlSW5wdXQgPSBjcmVhdGUoJ3RleHRhcmVhJyk7XG4gIG5vdGVEaXYuYXBwZW5kKG5vdGVUZXh0KTtcbiAgbm90ZVRleHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbm90ZURpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIG5vdGVJbnB1dC52YWx1ZSA9IG5vdGU7XG4gICAgbm90ZURpdi5hcHBlbmQobm90ZUlucHV0KTtcbiAgICBub3RlSW5wdXQuZm9jdXMoKTtcbiAgfSk7XG4gIG5vdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIG5vdGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBub3RlID0gbm90ZUlucHV0LnZhbHVlO1xuICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gbm90ZTtcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoKTtcbiAgICBub3RlRGl2LmFwcGVuZChub3RlVGV4dCk7XG4gIH0pO1xuXG4gIGNvbnN0IGR1ZURhdGVEaXYgPSBjcmVhdGUoJ2RpdicpO1xuICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlLWJveCcpO1xuICBjb25zdCBkdWVEYXRlU3BhbiA9IGNyZWF0ZSgnc3BhbicpO1xuICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9ICdubyBkYXRlJztcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gY3JlYXRlKCdpbnB1dCcpO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZVNwYW4pO1xuICBkdWVEYXRlU3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkdWVEYXRlRGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZUlucHV0KTtcbiAgICBkdWVEYXRlSW5wdXQuZm9jdXMoKTtcbiAgfSk7XG4gIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGR1ZURhdGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBkdWVEYXRlSW5wdXQ7XG4gICAgZGF0ZSA9ICh2YWx1ZSlcbiAgICAgID8gYCR7dmFsdWUuc3BsaXQoJy0nKVsyXX0uJHt2YWx1ZS5zcGxpdCgnLScpWzFdfS4ke3ZhbHVlLnNwbGl0KCctJylbMF19YFxuICAgICAgOiAnbm8gZGF0ZSc7XG4gICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSBkYXRlO1xuICAgIHVwZGF0ZUxvY2FsU3RvcmFnZSgpO1xuICAgIGR1ZURhdGVEaXYuYXBwZW5kKGR1ZURhdGVTcGFuKTtcbiAgfSk7XG5cbiAgY29uc3QgdG9kb09iaiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIHRvZG9PYmouY2xhc3NMaXN0LmFkZCgndG9kby1vYmonKTtcbiAgdG9kb09iai5hcHBlbmQoXG4gICAgY2hlY2tib3gsXG4gICAgcHJpb3JpdHlEaXYsXG4gICAgdGl0bGVEaXYsXG4gICAgZGVsZXRlQnRuLFxuICAgIG5vdGVEaXYsXG4gICAgZHVlRGF0ZURpdixcbiAgKTtcblxuICBjb25zdCBzZXQgPSAobmV3RG9uZSwgbmV3UHJpb3JpdHksIG5ld1RpdGxlLCBuZXdOb3RlLCBuZXdEYXRlLCBuZXdJZCkgPT4ge1xuICAgIGRvbmUgPSBuZXdEb25lO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBkb25lO1xuICAgIHByaW9yaXR5ID0gbmV3UHJpb3JpdHk7XG4gICAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgdGl0bGUgPSBuZXdUaXRsZTtcbiAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICBub3RlID0gbmV3Tm90ZTtcbiAgICBub3RlVGV4dC50ZXh0Q29udGVudCA9IG5vdGU7XG4gICAgZGF0ZSA9IG5ld0RhdGU7XG4gICAgZHVlRGF0ZVNwYW4udGV4dENvbnRlbnQgPSBkYXRlO1xuICAgIGlmIChuZXdJZCkgaWQgPSBuZXdJZDtcbiAgfTtcblxuICBjb25zdCBnZXQgPSAoKSA9PiAoe1xuICAgIGRvbmUsXG4gICAgcHJpb3JpdHksXG4gICAgdGl0bGUsXG4gICAgbm90ZSxcbiAgICBkYXRlLFxuICB9KTtcblxuICBjb25zdCByZW5kZXIgPSAoKSA9PiB0b2RvT2JqO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdCxcbiAgICBpZCxcbiAgICByZW5kZXIsXG4gICAgc2V0LFxuICAgIGdldCxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG87XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IHN1YnNjcmliZSwgcHVibGlzaCB9IGZyb20gJy4vcHVic3ViJztcbmltcG9ydCBwYWdlIGZyb20gJy4vcGFnZSc7XG5pbXBvcnQgc3RvcmFnZUF2YWlsYWJsZSBmcm9tICcuL2xvY2FsLXN0b3JhZ2UtdGVzdCc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuKGZ1bmN0aW9uIG1haW4oKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb25zdCBhbGxUb2RvS2V5ID0gJzE0NTkzMzMyMjQ2Nzg2Nyc7XG4gIGNvbnN0IHByb2plY3RLZXkgPSAnODYzNzIwNzMxMjMyNDI4JztcblxuICBsZXQgYWxsVG9kbyA9IFtdO1xuICBsZXQgc2hvd25Ub2RvID0gW107XG4gIGxldCBwYWdlVUk7XG4gIGNvbnN0IHByb2plY3RzT25Mb2FkID0gW107XG4gIGxldCBjdXJyZW50T3JkZXI7XG5cbiAgY29uc3Qgc2V0Q3VycmVudE9yZGVyID0gKG5ld09yZGVyKSA9PiB7XG4gICAgY3VycmVudE9yZGVyID0gbmV3T3JkZXI7XG4gICAgcHVibGlzaCgnc2hvd25Ub2RvQ2hhbmdlZCcpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVRvZG8gPSAoaWQpID0+IHtcbiAgICBjb25zdCB0bXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRvZG9LZXkpKTtcbiAgICBkZWxldGUgdG1wW2lkXTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhbGxUb2RvS2V5LCBKU09OLnN0cmluZ2lmeSh0bXApKTtcbiAgICBhbGxUb2RvID0gYWxsVG9kby5maWx0ZXIoKGkpID0+IGkuaWQgIT09IGlkKTtcbiAgICBwdWJsaXNoKCdzaG93blRvZG9DaGFuZ2VkJyk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9IChwcm9qZWN0TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5ld1RvZG8gPSB0b2RvKHByb2plY3ROYW1lLCBwdWJsaXNoLCBkZWxldGVUb2RvKTtcbiAgICBhbGxUb2RvLnB1c2gobmV3VG9kbyk7XG4gICAgcHVibGlzaCgnc2hvd25Ub2RvQ2hhbmdlZCcpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0bXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RLZXkpKTtcbiAgICAvLyBmaW5kIGluZGV4IG9mIGlkIGluIHRtcCBhbmQgc3BsaWNlIGl0XG4gICAgY29uc3QgaW5kZXggPSB0bXAuaW5kZXhPZihpZCk7XG4gICAgdG1wLnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEtleSwgSlNPTi5zdHJpbmdpZnkodG1wKSk7XG4gIH07XG5cbiAgY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcGFnZVVJLnByb2plY3QocHVibGlzaCwgZGVsZXRlUHJvamVjdCk7XG4gICAgcGFnZVVJLmFwcGVuZFByb2plY3QobmV3UHJvamVjdCk7XG4gIH07XG5cbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICBjb25zdCBzZXREZWZhdWx0VG9kbyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGRlZmF1bHRUb2RvID0gdG9kbygnRGVmYXVsdCBQcm9qZWN0JywgcHVibGlzaCwgZGVsZXRlVG9kbyk7XG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICBkZWZhdWx0VG9kby5zZXQoXG4gICAgICAgIHRydWUsXG4gICAgICAgICchISEnLFxuICAgICAgICAnVG9kbyBOYW1lJyxcbiAgICAgICAgJ1lvdSBjYW4gYWRkIGEgbm90ZSBoZXJlJyxcbiAgICAgICAgYCR7dG9kYXkuZ2V0RGF0ZSgpfS4ke3RvZGF5LmdldE1vbnRoKCkgKyAxfS4ke3RvZGF5LmdldEZ1bGxZZWFyKCl9YCxcbiAgICAgICk7XG4gICAgICBhbGxUb2RvLnB1c2goZGVmYXVsdFRvZG8pO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXREZWZhdWx0UHJvamVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwYWdlVUkucHJvamVjdChwdWJsaXNoLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgIG5ld1Byb2plY3Quc2V0KCdEZWZhdWx0IFByb2plY3QnKTtcbiAgICAgIHByb2plY3RzT25Mb2FkLnB1c2goJ0RlZmF1bHQgUHJvamVjdCcpO1xuICAgICAgcGFnZVVJLmFwcGVuZFByb2plY3QobmV3UHJvamVjdCk7XG4gICAgfTtcblxuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgcGFnZVVJID0gcGFnZShhZGRUb2RvLCBhZGRQcm9qZWN0LCBzZXRDdXJyZW50T3JkZXIpO1xuICAgICAgY29udGVudC5hcHBlbmQoLi4ucGFnZVVJLnJlbmRlcigpKTtcblxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3RLZXkpKSB7XG4gICAgICAgIHByb2plY3RzT25Mb2FkLnB1c2goLi4uSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KSkpO1xuICAgICAgICBwcm9qZWN0c09uTG9hZC5mb3JFYWNoKChwcm9qZWN0TmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRtcFByb2plY3QgPSBwYWdlVUkucHJvamVjdChwdWJsaXNoLCBkZWxldGVQcm9qZWN0KTtcbiAgICAgICAgICB0bXBQcm9qZWN0LnNldChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgcGFnZVVJLmFwcGVuZFByb2plY3QodG1wUHJvamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RGVmYXVsdFByb2plY3QoKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdEtleSwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNPbkxvYWQpKTtcbiAgICAgIH1cbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUb2RvS2V5KSkge1xuICAgICAgICBjb25zdCB0bXAgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRvZG9LZXkpKTtcblxuICAgICAgICBPYmplY3Qua2V5cyh0bXApLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGlkID0ga2V5O1xuICAgICAgICAgIGNvbnN0IFtwcm9qZWN0LCBkb25lLCBwcmlvcml0eSwgdGl0bGUsIG5vdGUsIGRhdGVdID0gdG1wW2tleV07XG4gICAgICAgICAgY29uc3QgdG1wVG9kbyA9IHRvZG8ocHJvamVjdCwgcHVibGlzaCwgZGVsZXRlVG9kbyk7XG4gICAgICAgICAgdG1wVG9kby5pZCA9IGlkO1xuICAgICAgICAgIHRtcFRvZG8uc2V0KGRvbmUsIHByaW9yaXR5LCB0aXRsZSwgbm90ZSwgZGF0ZSwgaWQpO1xuICAgICAgICAgIGFsbFRvZG8ucHVzaCh0bXBUb2RvKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXREZWZhdWx0VG9kbygpO1xuICAgICAgICBjb25zdCBhbGxUb2RvRGF0YSA9IHt9O1xuICAgICAgICBhbGxUb2RvLmZvckVhY2goKGkpID0+IHtcbiAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBkb25lLCBwcmlvcml0eSwgdGl0bGUsIG5vdGUsIGRhdGUsXG4gICAgICAgICAgfSA9IGkuZ2V0KCk7XG4gICAgICAgICAgYWxsVG9kb0RhdGFbaS5pZF0gPSBbXG4gICAgICAgICAgICBpLnByb2plY3QsIGRvbmUsIHByaW9yaXR5LCB0aXRsZSwgbm90ZSwgZGF0ZSxcbiAgICAgICAgICBdO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWxsVG9kb0tleSwgSlNPTi5zdHJpbmdpZnkoYWxsVG9kb0RhdGEpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcignTG9jYWwgc3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlJyk7XG4gICAgICBzZXREZWZhdWx0UHJvamVjdCgpO1xuICAgICAgc2V0RGVmYXVsdFRvZG8oKTtcbiAgICB9XG4gICAgcHVibGlzaCgnc2hvd25Ub2RvQ2hhbmdlZCcpO1xuICB9O1xuICBzdWJzY3JpYmUoJ2luaXQnLCBpbml0KTtcblxuICBjb25zdCByZW5kZXJUb2RvID0gKCkgPT4ge1xuICAgIHBhZ2VVSS5jbGVhclRvZG8oKTtcbiAgICBjb25zb2xlLmxvZyhgY3VycmVudE9yZGVyOiAke2N1cnJlbnRPcmRlcn1gKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0S2V5KSlcbiAgICBzaG93blRvZG8gPSBbLi4uYWxsVG9kb107IC8vIGhlcmUgbmVlZHMgdG8gYmUgYSBzb3J0aW5nIGZ1bmN0aW9uXG4gICAgc2hvd25Ub2RvLmZvckVhY2goKG9iaikgPT4gcGFnZVVJLmFwcGVuZFRvZG8ob2JqKSk7XG4gICAgY29uc29sZS5pbmZvKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVG9kb0tleSkpKTtcbiAgfTtcbiAgc3Vic2NyaWJlKCdzaG93blRvZG9DaGFuZ2VkJywgcmVuZGVyVG9kbyk7XG5cbiAgcHVibGlzaCgnaW5pdCcpO1xufSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==