/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./datasetControl/index.ts":
/*!*********************************!*\
  !*** ./datasetControl/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   datasetControl: () => (/* binding */ datasetControl)\n/* harmony export */ });\nclass datasetControl {\n  constructor() {\n    // Initialize any required variables here\n  }\n  init(context, notifyOutputChanged, state, container) {\n    this._container = container; // Assign the container\n  }\n  updateView(context) {\n    // Clear the existing content\n    this._container.innerHTML = \"\";\n    // Create and append table\n    var table = document.createElement(\"table\");\n    // Create table header\n    var headerRow = document.createElement(\"tr\");\n    context.parameters.sampleDataSet.columns.forEach(columnItem => {\n      var th = document.createElement(\"th\");\n      th.textContent = columnItem.displayName;\n      headerRow.appendChild(th);\n    });\n    table.appendChild(headerRow);\n    // Create table rows\n    context.parameters.sampleDataSet.sortedRecordIds.forEach(recordId => {\n      var tr = document.createElement(\"tr\");\n      context.parameters.sampleDataSet.columns.forEach(columnItem => {\n        var td = document.createElement(\"td\");\n        td.textContent = context.parameters.sampleDataSet.records[recordId].getFormattedValue(columnItem.name);\n        tr.appendChild(td);\n      });\n      table.appendChild(tr);\n    });\n    this._container.appendChild(table);\n  }\n  getOutputs() {\n    return {};\n  }\n  destroy() {\n    // Add code to cleanup control if necessary\n  }\n}\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./datasetControl/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./datasetControl/index.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('dataset.datasetControl', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.datasetControl);
} else {
	var dataset = dataset || {};
	dataset.datasetControl = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.datasetControl;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}