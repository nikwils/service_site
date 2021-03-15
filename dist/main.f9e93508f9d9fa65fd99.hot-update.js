/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson30"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nvar sendForm = function sendForm(elID) {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся';\n  var form = document.getElementById(elID);\n  var statusMessage = document.createElement('div');\n  var popup = document.querySelector('.popup');\n  form.addEventListener('submit', function (event) {\n    statusMessage.style.cssText = 'font-size: 2rem;';\n    var target = event.target;\n    event.preventDefault();\n    statusMessage.hidden = false;\n    statusMessage.textContent = loadMessage;\n    form.appendChild(statusMessage);\n\n    if (target.matches('#form3')) {\n      statusMessage.style.cssText = 'color: white;';\n    }\n\n    var formData = new FormData(form);\n    var body = {};\n    formData.forEach(function (val, key) {\n      body[key] = val;\n    });\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n\n      if (target.matches('#form3')) {\n        statusMessage.style.cssText = 'color: white;';\n        setTimeout(function () {\n          popup.style.display = 'none';\n        }, 8000);\n      }\n\n      setTimeout(function () {\n        statusMessage.hidden = true;\n      }, 5000);\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  var postData = function postData(body) {\n    var inputs = document.querySelectorAll('input');\n    inputs.forEach(function (input) {\n      return input.value = '';\n    });\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://lesson30/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("79f10dd525d0c250597d")
/******/ 	})();
/******/ 	
/******/ }
);