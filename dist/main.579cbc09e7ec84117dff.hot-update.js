/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30"]("main",{

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content'),\n      menu = document.querySelector('menu');\n  var count = 0,\n      appearanceInterval;\n\n  function appearanceAnimate() {\n    menu.classList.remove('active-menu');\n    appearanceInterval = requestAnimationFrame(appearanceAnimate);\n    count += 1;\n\n    if (document.documentElement.clientWidth > 768) {\n      if (count < 40) {\n        popup.style.display = 'block';\n        popupContent.style.left = count + '%';\n      } else {\n        cancelAnimationFrame(appearanceInterval);\n      }\n    } else {\n      popupContent.style.left = 30 + '%';\n      popup.style.display = 'block';\n      cancelAnimationFrame(appearanceInterval);\n    }\n  }\n\n  ;\n  popupBtn.forEach(function (el) {\n    el.addEventListener('click', function () {\n      count = 0;\n      appearanceAnimate();\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      count = 0;\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        count = 0;\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://lesson30/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6ef54f61952447c3c890")
/******/ 	})();
/******/ 	
/******/ }
);