/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30"]("main",{

/***/ "./src/modules/changePhotoTeam.js":
/*!****************************************!*\
  !*** ./src/modules/changePhotoTeam.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar changePhotoTeam = function changePhotoTeam() {\n  var command = document.querySelector('#command');\n  command.addEventListener('mouseover', function (event) {\n    var target = event.target;\n    var imgMain = target.src;\n\n    if (target.matches('.command__photo')) {\n      target.src = target.dataset.img;\n    }\n\n    command.addEventListener('mouseout', function () {\n      if (target.matches('.command__photo')) {\n        target.src = imgMain;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePhotoTeam);\n\n//# sourceURL=webpack://lesson30/./src/modules/changePhotoTeam.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("782865b832833a8fc8e7")
/******/ 	})();
/******/ 	
/******/ }
);