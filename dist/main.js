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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --cultured: #f8f9faff;\n  --cultured-2: #e9ecefff;\n  --gainsboro: #dee2e6ff;\n  --light-gray: #ced4daff;\n  --cadet-blue-crayola: #adb5bdff;\n  --sonic-silver: #6c757dff;\n  --davys-grey: #495057ff;\n  --onyx: #343a40ff;\n  --eerie-black: #212529ff;\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --focus-color: #89d9fb;\n}\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  background-color: var(--cultured-2);\n  color: var(--eerie-black);\n}\n\n.todo-obj {\n  background-color: var(--cultured);\n  display: grid;\n  min-width: 18rem;\n  grid-template: \n    'done  priority  title  del' auto\n    '.  note  note  note' 1fr\n    '.  date  date date' auto /\n    auto auto 1fr auto;\n  grid-gap: 0.5rem;\n  margin: 2rem;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.todo-obj .done-checkbox {\n  grid-area: done;\n  justify-self: center;\n  position: relative;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  appearance: none;\n  border: solid thin var(--eerie-black);\n  align-self: center;\n}\n\n.todo-obj .done-checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--eerie-black);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n\n.todo-obj .done-checkbox:checked::before {\n  transform: scale(0.75);\n}\n\n.todo-obj .priority-box {\n  grid-area: priority;\n  color: var(--sonic-silver);\n  font-size: 1.5rem;\n  position: relative;\n  align-self: center;\n}\n\n.todo-obj .priority-box .priority-popup {\n  position: absolute;\n  display: none;\n  background-color: var(--cultured-2);\n  border-radius: 1rem;\n  border-top-left-radius: 0;\n  border: thin solid var(--sonic-silver);\n  font-size: 1rem;\n  height: max-content;\n  overflow: hidden;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n\n.todo-obj .priority-box .priority-popup.show {\n  display: flex;\n}\n\n.todo-obj .priority-box .priority-popup .priority-btn {\n  border: thin solid var(--sonic-silver);\n  background-color: var(--light-gray);\n  padding: 0.3rem;\n  width: 2rem;\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n}\n\n.todo-obj .title-box {\n  grid-area: title;\n  font-size: 1.5rem;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.todo-obj .title-box input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  width: 100%;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  height: 1.1em;\n  font-weight: 400;\n  outline: none;\n  border-bottom: thin solid var(--eerie-black);\n}\n\n.todo-obj .delete-btn {\n  grid-area: del;\n  appearance: none;\n  align-self: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: none;\n  background-color: var(--cultured);\n  cursor: pointer;\n}\n\n.todo-obj .delete-btn img {\n  height: 100%;\n  width: 100%;\n}\n\n.todo-obj .note-box {\n  grid-area: note;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .note-box div {\n  min-height: 1rem;\n  white-space: pre-wrap;\n}\n\n.todo-obj .note-box textarea {\n  appearance: none;\n  resize: vertical;\n  width: 100%;\n  height: 5rem;\n  border: none;\n  color: var(--sonic-silver);\n  font-family: inherit;\n  font-size: 1rem;\n  background-color: var(--cultured);\n  outline: none;\n  border-bottom:  thin solid var(--sonic-silver);\n}\n\n.todo-obj .due-date-box {\n  grid-area: date;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .due-date-box input[type=\"date\"] {\n  appearance: none;\n  padding: 0;\n  margin: 0;\n  background-color: var(--cultured);\n  color: var(--sonic-silver);\n  font-size: 1rem;\n  font-family: var(--font-family);\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-bottom: thin solid var(--sonic-silver);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,uBAAuB;EACvB,sBAAsB;EACtB,uBAAuB;EACvB,+BAA+B;EAC/B,yBAAyB;EACzB,uBAAuB;EACvB,iBAAiB;EACjB,wBAAwB;EACxB,0HAA0H;EAC1H,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;EACZ,iBAAiB;EACjB,mCAAmC;EACnC,yBAAyB;AAC3B;;AAEA;EACE,iCAAiC;EACjC,aAAa;EACb,gBAAgB;EAChB;;;;sBAIoB;EACpB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,qCAAqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,oCAAoC;EACpC,kBAAkB;EAClB,gCAAgC;EAChC,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mCAAmC;EACnC,mBAAmB;EACnB,yBAAyB;EACzB,sCAAsC;EACtC,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sCAAsC;EACtC,mCAAmC;EACnC,eAAe;EACf,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,iCAAiC;EACjC,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,4CAA4C;AAC9C;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,YAAY;EACZ,iCAAiC;EACjC,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,0BAA0B;EAC1B,oBAAoB;EACpB,eAAe;EACf,iCAAiC;EACjC,aAAa;EACb,8CAA8C;AAChD;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,UAAU;EACV,SAAS;EACT,iCAAiC;EACjC,0BAA0B;EAC1B,eAAe;EACf,+BAA+B;EAC/B,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,6CAA6C;AAC/C","sourcesContent":[":root {\n  --cultured: #f8f9faff;\n  --cultured-2: #e9ecefff;\n  --gainsboro: #dee2e6ff;\n  --light-gray: #ced4daff;\n  --cadet-blue-crayola: #adb5bdff;\n  --sonic-silver: #6c757dff;\n  --davys-grey: #495057ff;\n  --onyx: #343a40ff;\n  --eerie-black: #212529ff;\n  --font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\n  --focus-color: #89d9fb;\n}\n*, *::before, *::after {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  font-family: var(--font-family);\n  width: 100vw;\n  min-height: 100vh;\n  background-color: var(--cultured-2);\n  color: var(--eerie-black);\n}\n\n.todo-obj {\n  background-color: var(--cultured);\n  display: grid;\n  min-width: 18rem;\n  grid-template: \n    'done  priority  title  del' auto\n    '.  note  note  note' 1fr\n    '.  date  date date' auto /\n    auto auto 1fr auto;\n  grid-gap: 0.5rem;\n  margin: 2rem;\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.todo-obj .done-checkbox {\n  grid-area: done;\n  justify-self: center;\n  position: relative;\n  cursor: pointer;\n  height: 1.5rem;\n  width: 1.5rem;\n  border-radius: 50%;\n  appearance: none;\n  border: solid thin var(--eerie-black);\n  align-self: center;\n}\n\n.todo-obj .done-checkbox::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--eerie-black);\n  border-radius: 50%;\n  transition: all 0.2s ease-in-out;\n  transform: scale(0);\n}\n\n.todo-obj .done-checkbox:checked::before {\n  transform: scale(0.75);\n}\n\n.todo-obj .priority-box {\n  grid-area: priority;\n  color: var(--sonic-silver);\n  font-size: 1.5rem;\n  position: relative;\n  align-self: center;\n}\n\n.todo-obj .priority-box .priority-popup {\n  position: absolute;\n  display: none;\n  background-color: var(--cultured-2);\n  border-radius: 1rem;\n  border-top-left-radius: 0;\n  border: thin solid var(--sonic-silver);\n  font-size: 1rem;\n  height: max-content;\n  overflow: hidden;\n  padding: 0.5rem;\n  gap: 0.5rem;\n}\n\n.todo-obj .priority-box .priority-popup.show {\n  display: flex;\n}\n\n.todo-obj .priority-box .priority-popup .priority-btn {\n  border: thin solid var(--sonic-silver);\n  background-color: var(--light-gray);\n  padding: 0.3rem;\n  width: 2rem;\n  text-align: center;\n  border-radius: 1rem;\n  cursor: pointer;\n}\n\n.todo-obj .title-box {\n  grid-area: title;\n  font-size: 1.5rem;\n  font-weight: 400;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.todo-obj .title-box input[type=\"text\"] {\n  appearance: none;\n  background-color: var(--cultured);\n  width: 100%;\n  border: none;\n  margin: 0;\n  padding: 0;\n  font-size: 1.5rem;\n  height: 1.1em;\n  font-weight: 400;\n  outline: none;\n  border-bottom: thin solid var(--eerie-black);\n}\n\n.todo-obj .delete-btn {\n  grid-area: del;\n  appearance: none;\n  align-self: center;\n  height: 1.5rem;\n  width: 1.5rem;\n  border: none;\n  background-color: var(--cultured);\n  cursor: pointer;\n}\n\n.todo-obj .delete-btn img {\n  height: 100%;\n  width: 100%;\n}\n\n.todo-obj .note-box {\n  grid-area: note;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .note-box div {\n  min-height: 1rem;\n  white-space: pre-wrap;\n}\n\n.todo-obj .note-box textarea {\n  appearance: none;\n  resize: vertical;\n  width: 100%;\n  height: 5rem;\n  border: none;\n  color: var(--sonic-silver);\n  font-family: inherit;\n  font-size: 1rem;\n  background-color: var(--cultured);\n  outline: none;\n  border-bottom:  thin solid var(--sonic-silver);\n}\n\n.todo-obj .due-date-box {\n  grid-area: date;\n  color: var(--sonic-silver);\n}\n\n.todo-obj .due-date-box input[type=\"date\"] {\n  appearance: none;\n  padding: 0;\n  margin: 0;\n  background-color: var(--cultured);\n  color: var(--sonic-silver);\n  font-size: 1rem;\n  font-family: var(--font-family);\n  box-sizing: border-box;\n  border: none;\n  outline: none;\n  border-bottom: thin solid var(--sonic-silver);\n}"],"sourceRoot":""}]);
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

  let done = false;
  let priority = '-';
  let date = 'no date';
  const id = Symbol('id of todoObj');

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
  const setPriority = (level) => {
    priority = level;
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
    titleInput.value = titleSpan.textContent;
    titleDiv.append(titleInput);
    titleInput.focus();
  });
  titleInput.addEventListener('blur', () => {
    titleDiv.firstChild.remove();
    titleSpan.textContent = titleInput.value;
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
    noteInput.value = noteText.textContent;
    noteDiv.append(noteInput);
    noteInput.focus();
  });
  noteInput.addEventListener('blur', () => {
    noteDiv.firstChild.remove();
    noteText.textContent = noteInput.value;
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

  const getDate = () => date;
  const getDone = () => done;
  const getPriority = () => priority;
  const render = () => todoObj;

  return {
    project,
    id,
    render,
    getDate,
    getDone,
    getPriority,
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(function main() {
  const content = document.querySelector('#content');
  let allTodo = [];
  let shownTodo = [];
  const currentProject = 'Bababoi';

  const deleteTodo = (id) => {
    // debugger;
    allTodo = allTodo.filter((i) => i.id !== id);
  };

  const addTodo = () => {
    const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__["default"])(currentProject, _pubsub__WEBPACK_IMPORTED_MODULE_1__.publish, deleteTodo);
    allTodo.push(newTodo);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('shownTodoChanged');
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('init', addTodo);

  const render = () => {
    while (content.firstChild) {
      content.firstChild.remove();
    }
    shownTodo = [...allTodo];
    shownTodo.forEach((obj) => {
      console.log(obj.getDone());
      content.append(obj.render());
    });
  };
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)('shownTodoChanged', render);

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)('init');
}());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFOEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QmE7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDRDQUFXO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQSxXQUFXLG9CQUFvQixHQUFHLG9CQUFvQixHQUFHLG9CQUFvQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUpwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEI7QUFDb0I7QUFDekI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsaURBQUksaUJBQWlCLDRDQUFPO0FBQ2hEO0FBQ0EsSUFBSSxnREFBTztBQUNYO0FBQ0EsRUFBRSxrREFBUzs7QUFFWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsRUFBRSxrREFBUzs7QUFFWCxFQUFFLGdEQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWN1bHR1cmVkOiAjZjhmOWZhZmY7XFxuICAtLWN1bHR1cmVkLTI6ICNlOWVjZWZmZjtcXG4gIC0tZ2FpbnNib3JvOiAjZGVlMmU2ZmY7XFxuICAtLWxpZ2h0LWdyYXk6ICNjZWQ0ZGFmZjtcXG4gIC0tY2FkZXQtYmx1ZS1jcmF5b2xhOiAjYWRiNWJkZmY7XFxuICAtLXNvbmljLXNpbHZlcjogIzZjNzU3ZGZmO1xcbiAgLS1kYXZ5cy1ncmV5OiAjNDk1MDU3ZmY7XFxuICAtLW9ueXg6ICMzNDNhNDBmZjtcXG4gIC0tZWVyaWUtYmxhY2s6ICMyMTI1MjlmZjtcXG4gIC0tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1mb2N1cy1jb2xvcjogIzg5ZDlmYjtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQtMik7XFxuICBjb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbn1cXG5cXG4udG9kby1vYmoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogMThyZW07XFxuICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ2RvbmUgIHByaW9yaXR5ICB0aXRsZSAgZGVsJyBhdXRvXFxuICAgICcuICBub3RlICBub3RlICBub3RlJyAxZnJcXG4gICAgJy4gIGRhdGUgIGRhdGUgZGF0ZScgYXV0byAvXFxuICAgIGF1dG8gYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBtYXJnaW46IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kb25lLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogZG9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdGhpbiB2YXIoLS1lZXJpZS1ibGFjayk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAuZG9uZS1jaGVja2JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4udG9kby1vYmogLmRvbmUtY2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IHtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IC5wcmlvcml0eS1wb3B1cC5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IC5wcmlvcml0eS1wb3B1cCAucHJpb3JpdHktYnRuIHtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLWVlcmllLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kZWxldGUtYnRuIHtcXG4gIGdyaWQtYXJlYTogZGVsO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC5kZWxldGUtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB7XFxuICBncmlkLWFyZWE6IG5vdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCBkaXYge1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB0ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAgdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cXG5cXG4udG9kby1vYmogLmR1ZS1kYXRlLWJveCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kdWUtZGF0ZS1ib3ggaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsK0JBQStCO0VBQy9CLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QiwwSEFBMEg7RUFDMUgsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1DQUFtQztFQUNuQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQjs7OztzQkFJb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQ0FBcUM7RUFDckMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLGFBQWE7RUFDYiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsK0JBQStCO0VBQy9CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLDZDQUE2QztBQUMvQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWN1bHR1cmVkOiAjZjhmOWZhZmY7XFxuICAtLWN1bHR1cmVkLTI6ICNlOWVjZWZmZjtcXG4gIC0tZ2FpbnNib3JvOiAjZGVlMmU2ZmY7XFxuICAtLWxpZ2h0LWdyYXk6ICNjZWQ0ZGFmZjtcXG4gIC0tY2FkZXQtYmx1ZS1jcmF5b2xhOiAjYWRiNWJkZmY7XFxuICAtLXNvbmljLXNpbHZlcjogIzZjNzU3ZGZmO1xcbiAgLS1kYXZ5cy1ncmV5OiAjNDk1MDU3ZmY7XFxuICAtLW9ueXg6ICMzNDNhNDBmZjtcXG4gIC0tZWVyaWUtYmxhY2s6ICMyMTI1MjlmZjtcXG4gIC0tZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFxcXCJTZWdvZSBVSVxcXCIsUm9ib3RvLE94eWdlbi1TYW5zLFVidW50dSxDYW50YXJlbGwsXFxcIkhlbHZldGljYSBOZXVlXFxcIixzYW5zLXNlcmlmO1xcbiAgLS1mb2N1cy1jb2xvcjogIzg5ZDlmYjtcXG59XFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5KTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQtMik7XFxuICBjb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbn1cXG5cXG4udG9kby1vYmoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG1pbi13aWR0aDogMThyZW07XFxuICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ2RvbmUgIHByaW9yaXR5ICB0aXRsZSAgZGVsJyBhdXRvXFxuICAgICcuICBub3RlICBub3RlICBub3RlJyAxZnJcXG4gICAgJy4gIGRhdGUgIGRhdGUgZGF0ZScgYXV0byAvXFxuICAgIGF1dG8gYXV0byAxZnIgYXV0bztcXG4gIGdyaWQtZ2FwOiAwLjVyZW07XFxuICBtYXJnaW46IDJyZW07XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kb25lLWNoZWNrYm94IHtcXG4gIGdyaWQtYXJlYTogZG9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxuICB3aWR0aDogMS41cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdGhpbiB2YXIoLS1lZXJpZS1ibGFjayk7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAuZG9uZS1jaGVja2JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWVyaWUtYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG5cXG4udG9kby1vYmogLmRvbmUtY2hlY2tib3g6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IHtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1vYmogLnByaW9yaXR5LWJveCAucHJpb3JpdHktcG9wdXAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XFxuICBib3JkZXI6IHRoaW4gc29saWQgdmFyKC0tc29uaWMtc2lsdmVyKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IC5wcmlvcml0eS1wb3B1cC5zaG93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50b2RvLW9iaiAucHJpb3JpdHktYm94IC5wcmlvcml0eS1wb3B1cCAucHJpb3JpdHktYnRuIHtcXG4gIGJvcmRlcjogdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JheSk7XFxuICBwYWRkaW5nOiAwLjNyZW07XFxuICB3aWR0aDogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcblxcbi50b2RvLW9iaiAudGl0bGUtYm94IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBoZWlnaHQ6IDEuMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLWVlcmllLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kZWxldGUtYnRuIHtcXG4gIGdyaWQtYXJlYTogZGVsO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEuNXJlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tb2JqIC5kZWxldGUtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB7XFxuICBncmlkLWFyZWE6IG5vdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCBkaXYge1xcbiAgbWluLWhlaWdodDogMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuXFxuLnRvZG8tb2JqIC5ub3RlLWJveCB0ZXh0YXJlYSB7XFxuICBhcHBlYXJhbmNlOiBub25lO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWN1bHR1cmVkKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiAgdGhpbiBzb2xpZCB2YXIoLS1zb25pYy1zaWx2ZXIpO1xcbn1cXG5cXG4udG9kby1vYmogLmR1ZS1kYXRlLWJveCB7XFxuICBncmlkLWFyZWE6IGRhdGU7XFxuICBjb2xvcjogdmFyKC0tc29uaWMtc2lsdmVyKTtcXG59XFxuXFxuLnRvZG8tb2JqIC5kdWUtZGF0ZS1ib3ggaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdIHtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY3VsdHVyZWQpO1xcbiAgY29sb3I6IHZhcigtLXNvbmljLXNpbHZlcik7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1mYW1pbHkpO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItYm90dG9tOiB0aGluIHNvbGlkIHZhcigtLXNvbmljLXNpbHZlcik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgcHViU3ViID0gKCgpID0+IHtcbiAgY29uc3QgZXZlbnRzID0ge307XG4gIGNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWUsIGZuKSA9PiB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZuKTtcbiAgfTtcbiAgY29uc3QgcHVibGlzaCA9IChldmVudE5hbWUsIGRhdGEpID0+IHtcbiAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICAgIGV2ZW50c1tldmVudE5hbWVdLmZvckVhY2goKGZuKSA9PiB7XG4gICAgICAgIGZuKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbn0pKCk7XG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lLCBmbikgPT4ge1xuICBwdWJTdWIuc3Vic2NyaWJlKGV2ZW50TmFtZSwgZm4pO1xufTtcbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lLCBkYXRhKSA9PiB7XG4gIHB1YlN1Yi5wdWJsaXNoKGV2ZW50TmFtZSwgZGF0YSk7XG59O1xuXG5leHBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfTtcbiIsImltcG9ydCBkZWxldGVJbWFnZSBmcm9tICcuL2ltZy9kZWxldGUuc3ZnJztcblxuY29uc3QgdG9kbyA9IChwcm9qZWN0LCBwdWJsaXNoLCBkZWxldGVUb2RvKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZSA9ICh0eXBlKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gIGxldCBkb25lID0gZmFsc2U7XG4gIGxldCBwcmlvcml0eSA9ICctJztcbiAgbGV0IGRhdGUgPSAnbm8gZGF0ZSc7XG4gIGNvbnN0IGlkID0gU3ltYm9sKCdpZCBvZiB0b2RvT2JqJyk7XG5cbiAgY29uc3QgY2hlY2tib3ggPSBjcmVhdGUoJ2lucHV0Jyk7XG4gIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICBjaGVja2JveC5jaGVja2VkID0gZG9uZTtcbiAgY2hlY2tib3guY2xhc3NMaXN0LmFkZCgnZG9uZS1jaGVja2JveCcpO1xuICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgZG9uZSA9ICFkb25lO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2hlY2tib3guY2hlY2tlZCA9IGRvbmU7XG4gICAgICBwdWJsaXNoKCdzaG93blRvZG9DaGFuZ2VkJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBjcmVhdGUoJ2RpdicpO1xuICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1ib3gnKTtcbiAgY29uc3QgcHJpb3JpdHlTcGFuID0gY3JlYXRlKCdzcGFuJyk7XG4gIHByaW9yaXR5U3Bhbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICBjb25zdCBzZXRQcmlvcml0eSA9IChsZXZlbCkgPT4ge1xuICAgIHByaW9yaXR5ID0gbGV2ZWw7XG4gICAgcHJpb3JpdHlTcGFuLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgcHVibGlzaCgnc2hvd25Ub2RvQ2hhbmdlZCcpO1xuICB9O1xuICBjb25zdCBwcmlvcml0eVBvcHVwID0gY3JlYXRlKCdkaXYnKTtcbiAgcHJpb3JpdHlQb3B1cC5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eS1wb3B1cCcpO1xuICBjb25zdCBub25lUHJpb3JpdHkgPSBjcmVhdGUoJ2RpdicpO1xuICBub25lUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIG5vbmVQcmlvcml0eS50ZXh0Q29udGVudCA9ICctJztcbiAgbm9uZVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJpb3JpdHkoJy0nKSk7XG4gIGNvbnN0IGxvd1ByaW9yaXR5ID0gY3JlYXRlKCdkaXYnKTtcbiAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIGxvd1ByaW9yaXR5LnRleHRDb250ZW50ID0gJyEnO1xuICBsb3dQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNldFByaW9yaXR5KCchJykpO1xuICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGNyZWF0ZSgnZGl2Jyk7XG4gIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5LWJ0bicpO1xuICBtZWRpdW1Qcmlvcml0eS50ZXh0Q29udGVudCA9ICchISc7XG4gIG1lZGl1bVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0UHJpb3JpdHkoJyEhJykpO1xuICBjb25zdCBoaWdoUHJpb3JpdHkgPSBjcmVhdGUoJ2RpdicpO1xuICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHktYnRuJyk7XG4gIGhpZ2hQcmlvcml0eS50ZXh0Q29udGVudCA9ICchISEnO1xuICBoaWdoUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzZXRQcmlvcml0eSgnISEhJykpO1xuICBwcmlvcml0eVBvcHVwLmFwcGVuZChcbiAgICBub25lUHJpb3JpdHksXG4gICAgbG93UHJpb3JpdHksXG4gICAgbWVkaXVtUHJpb3JpdHksXG4gICAgaGlnaFByaW9yaXR5LFxuICApO1xuICBwcmlvcml0eURpdi5hcHBlbmQocHJpb3JpdHlTcGFuLCBwcmlvcml0eVBvcHVwKTtcbiAgcHJpb3JpdHlEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcHJpb3JpdHlQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0pO1xuXG4gIGNvbnN0IHRpdGxlRGl2ID0gY3JlYXRlKCdkaXYnKTtcbiAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUtYm94Jyk7XG4gIGNvbnN0IHRpdGxlU3BhbiA9IGNyZWF0ZSgnc3BhbicpO1xuICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSAnTmV3IHRvZG8nO1xuICBjb25zdCB0aXRsZUlucHV0ID0gY3JlYXRlKCdpbnB1dCcpO1xuICB0aXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gIHRpdGxlRGl2LmFwcGVuZCh0aXRsZVNwYW4pO1xuICB0aXRsZVNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGl0bGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB0aXRsZUlucHV0LnZhbHVlID0gdGl0bGVTcGFuLnRleHRDb250ZW50O1xuICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZUlucHV0KTtcbiAgICB0aXRsZUlucHV0LmZvY3VzKCk7XG4gIH0pO1xuICB0aXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgdGl0bGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB0aXRsZVNwYW4udGV4dENvbnRlbnQgPSB0aXRsZUlucHV0LnZhbHVlO1xuICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZVNwYW4pO1xuICB9KTtcbiAgY29uc3QgZGVsZXRlQnRuID0gY3JlYXRlKCdidXR0b24nKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1idG4nKTtcbiAgY29uc3QgZGVsZXRlSW1nID0gY3JlYXRlKCdpbWcnKTtcbiAgZGVsZXRlSW1nLnNyYyA9IGRlbGV0ZUltYWdlO1xuICBkZWxldGVCdG4uYXBwZW5kKGRlbGV0ZUltZyk7XG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVUb2RvKGlkKTtcbiAgICBwdWJsaXNoKCdzaG93blRvZG9DaGFuZ2VkJyk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdGVEaXYgPSBjcmVhdGUoJ2RpdicpO1xuICBub3RlRGl2LmNsYXNzTGlzdC5hZGQoJ25vdGUtYm94Jyk7XG4gIGNvbnN0IG5vdGVUZXh0ID0gY3JlYXRlKCdkaXYnKTtcbiAgbm90ZVRleHQudGV4dENvbnRlbnQgPSAnJztcbiAgY29uc3Qgbm90ZUlucHV0ID0gY3JlYXRlKCd0ZXh0YXJlYScpO1xuICBub3RlRGl2LmFwcGVuZChub3RlVGV4dCk7XG4gIG5vdGVUZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5vdGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBub3RlSW5wdXQudmFsdWUgPSBub3RlVGV4dC50ZXh0Q29udGVudDtcbiAgICBub3RlRGl2LmFwcGVuZChub3RlSW5wdXQpO1xuICAgIG5vdGVJbnB1dC5mb2N1cygpO1xuICB9KTtcbiAgbm90ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgbm90ZURpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIG5vdGVUZXh0LnRleHRDb250ZW50ID0gbm90ZUlucHV0LnZhbHVlO1xuICAgIG5vdGVEaXYuYXBwZW5kKG5vdGVUZXh0KTtcbiAgfSk7XG5cbiAgY29uc3QgZHVlRGF0ZURpdiA9IGNyZWF0ZSgnZGl2Jyk7XG4gIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtYm94Jyk7XG4gIGNvbnN0IGR1ZURhdGVTcGFuID0gY3JlYXRlKCdzcGFuJyk7XG4gIGR1ZURhdGVTcGFuLnRleHRDb250ZW50ID0gJ25vIGRhdGUnO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBjcmVhdGUoJ2lucHV0Jyk7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlU3Bhbik7XG4gIGR1ZURhdGVTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGR1ZURhdGVEaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlSW5wdXQpO1xuICAgIGR1ZURhdGVJbnB1dC5mb2N1cygpO1xuICB9KTtcbiAgZHVlRGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgZHVlRGF0ZURpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGR1ZURhdGVJbnB1dDtcbiAgICBkYXRlID0gKHZhbHVlKVxuICAgICAgPyBgJHt2YWx1ZS5zcGxpdCgnLScpWzJdfS4ke3ZhbHVlLnNwbGl0KCctJylbMV19LiR7dmFsdWUuc3BsaXQoJy0nKVswXX1gXG4gICAgICA6ICdubyBkYXRlJztcbiAgICBkdWVEYXRlU3Bhbi50ZXh0Q29udGVudCA9IChkYXRlKTtcbiAgICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlU3Bhbik7XG4gIH0pO1xuXG4gIGNvbnN0IHRvZG9PYmogPSBjcmVhdGUoJ2RpdicpO1xuICB0b2RvT2JqLmNsYXNzTGlzdC5hZGQoJ3RvZG8tb2JqJyk7XG4gIHRvZG9PYmouYXBwZW5kKFxuICAgIGNoZWNrYm94LFxuICAgIHByaW9yaXR5RGl2LFxuICAgIHRpdGxlRGl2LFxuICAgIGRlbGV0ZUJ0bixcbiAgICBub3RlRGl2LFxuICAgIGR1ZURhdGVEaXYsXG4gICk7XG5cbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IGRhdGU7XG4gIGNvbnN0IGdldERvbmUgPSAoKSA9PiBkb25lO1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuICBjb25zdCByZW5kZXIgPSAoKSA9PiB0b2RvT2JqO1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdCxcbiAgICBpZCxcbiAgICByZW5kZXIsXG4gICAgZ2V0RGF0ZSxcbiAgICBnZXREb25lLFxuICAgIGdldFByaW9yaXR5LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kbztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBwdWJsaXNoIH0gZnJvbSAnLi9wdWJzdWInO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbihmdW5jdGlvbiBtYWluKCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgbGV0IGFsbFRvZG8gPSBbXTtcbiAgbGV0IHNob3duVG9kbyA9IFtdO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9ICdCYWJhYm9pJztcblxuICBjb25zdCBkZWxldGVUb2RvID0gKGlkKSA9PiB7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgYWxsVG9kbyA9IGFsbFRvZG8uZmlsdGVyKChpKSA9PiBpLmlkICE9PSBpZCk7XG4gIH07XG5cbiAgY29uc3QgYWRkVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdUb2RvID0gdG9kbyhjdXJyZW50UHJvamVjdCwgcHVibGlzaCwgZGVsZXRlVG9kbyk7XG4gICAgYWxsVG9kby5wdXNoKG5ld1RvZG8pO1xuICAgIHB1Ymxpc2goJ3Nob3duVG9kb0NoYW5nZWQnKTtcbiAgfTtcbiAgc3Vic2NyaWJlKCdpbml0JywgYWRkVG9kbyk7XG5cbiAgY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgc2hvd25Ub2RvID0gWy4uLmFsbFRvZG9dO1xuICAgIHNob3duVG9kby5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKG9iai5nZXREb25lKCkpO1xuICAgICAgY29udGVudC5hcHBlbmQob2JqLnJlbmRlcigpKTtcbiAgICB9KTtcbiAgfTtcbiAgc3Vic2NyaWJlKCdzaG93blRvZG9DaGFuZ2VkJywgcmVuZGVyKTtcblxuICBwdWJsaXNoKCdpbml0Jyk7XG59KCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9