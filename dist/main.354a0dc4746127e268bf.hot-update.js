/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30"]("main",{

/***/ "./src/modules/dataValidation.js":
/*!***************************************!*\
  !*** ./src/modules/dataValidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar dataValidation = function dataValidation() {\n  var calcBlock = document.querySelector('.calc-block'),\n      mainFormInput = document.querySelector('.main-form-input'),\n      footerFormInput = document.querySelector('.footer-form-input'),\n      form3 = document.getElementById('form3'),\n      form1 = document.getElementById('form1'),\n      form2 = document.getElementById('form2');\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-square, .calc-count, .calc-day')) {\n      target.value = target.value.replace(/\\D/g, '');\n    }\n  });\n  form3.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#form3-name')) {\n      target.value = target.value.replace(/\\w/g, '');\n      form3.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#form3-phone')) {\n      target.value = target.value.replace(/[\\D() -]/g, '');\n\n      if (target.matches(/\\d{7,13}/)) {\n        form3.button.disabled = false;\n      }\n    }\n\n    if (target.matches('#form3-email')) {\n      target.value = target.value.replace(/\\W@./g, '');\n    }\n\n    ;\n  });\n  mainFormInput.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#form1-name')) {\n      target.value = target.value.replace(/\\w/g, '');\n      mainFormInput.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#form1-phone')) {\n      target.value = target.value.replace(/[\\D+() -]/g, '');\n    }\n\n    if (target.matches('#form1-email')) {\n      target.value = target.value.replace(/\\W@./g, '');\n    }\n\n    ;\n  });\n  footerFormInput.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#form2-name', '#form2-message')) {\n      target.value = target.value.replace(/\\w/g, '');\n      footerFormInput.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#form2-phone')) {\n      target.value = target.value.replace(/[\\D() -]/g, '');\n    }\n\n    if (target.matches('#form2-email')) {\n      target.value = target.value.replace(/\\W@./g, '');\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataValidation);\n\n//# sourceURL=webpack://lesson30/./src/modules/dataValidation.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("64e23fb70779cd240840")
/******/ 	})();
/******/ 	
/******/ }
);