/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhotoTeam__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changePhotoTeam */ \"./src/modules/changePhotoTeam.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_dataValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/dataValidation */ \"./src/modules/dataValidation.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n\n\n //Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)('27 feb 2021'); //Menu\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)(); //popup\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_2__.default)(); //табы\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__.default)(); //слайдер\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__.default)(); //team\n\n(0,_modules_changePhotoTeam__WEBPACK_IMPORTED_MODULE_5__.default)(); //culc\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)(100); //валидация данных\n\n(0,_modules_dataValidation__WEBPACK_IMPORTED_MODULE_7__.default)(); // send-ajax-form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('form1');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('form2');\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__.default)('form3');\n\n//# sourceURL=webpack://lesson30/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector('.calc-block'),\n      calcType = document.querySelector('.calc-type'),\n      calcSquare = document.querySelector('.calc-square'),\n      calcDay = document.querySelector('.calc-day'),\n      calcCount = document.querySelector('.calc-count'),\n      totalValue = document.getElementById('total');\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = Math.ceil(price * typeValue * squareValue * countValue * dayValue);\n    }\n\n    totalValue.textContent = total;\n  };\n\n  calcBlock.addEventListener('change', function (event) {\n    var target = event.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://lesson30/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/changePhotoTeam.js":
/*!****************************************!*\
  !*** ./src/modules/changePhotoTeam.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar changePhotoTeam = function changePhotoTeam() {\n  var command = document.querySelector('#command');\n  command.addEventListener('mouseover', function (event) {\n    var target = event.target;\n    var imgMain = target.src;\n\n    if (target.matches('.command__photo')) {\n      target.src = target.dataset.img;\n    }\n\n    command.addEventListener('mouseout', function () {\n      if (target.matches('.command__photo')) {\n        target.src = imgMain;\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changePhotoTeam);\n\n//# sourceURL=webpack://lesson30/./src/modules/changePhotoTeam.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds'),\n      spans = document.querySelectorAll('.timer-numbers span');\n  var idInterval;\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60 % 24);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function checkedForValue(number) {\n    if (number < 10) {\n      return '0' + number;\n    } else return number;\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n    var newTimeHours = checkedForValue(timer.hours),\n        newTimeMinutes = checkedForValue(timer.minutes),\n        newTimeSeconds = checkedForValue(timer.seconds);\n    timerHours.textContent = newTimeHours;\n    timerMinutes.textContent = newTimeMinutes;\n    timerSeconds.textContent = newTimeSeconds;\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(idInterval);\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n      spans.forEach(function (item) {\n        item.style.color = 'red';\n      });\n    }\n  }\n\n  idInterval = setInterval(updateClock, 1000);\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://lesson30/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/dataValidation.js":
/*!***************************************!*\
  !*** ./src/modules/dataValidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar dataValidation = function dataValidation() {\n  var calcBlock = document.querySelector('.calc-block'),\n      body = document.querySelector('body'),\n      mainFormInput = document.querySelector('.main-form-input'),\n      footerFormInput = document.querySelector('.footer-form-input'),\n      form3 = document.getElementById('form3');\n  calcBlock.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('.calc-square, .calc-count, .calc-day')) {\n      target.value = target.value.replace(/\\D/g, '');\n    }\n  });\n  form3.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#form3-name')) {\n      target.value = target.value.replace(/\\w/g, '');\n      form3.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#form3-phone')) {\n      target.value = target.value.replace(/[\\D() -]/g, '');\n    }\n\n    if (target.matches('#form3-email')) {\n      target.value = target.value.replace(/\\W@./g, '');\n    }\n\n    ;\n  });\n  mainFormInput.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#form1-name')) {\n      target.value = target.value.replace(/\\w/g, '');\n      mainFormInput.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#form1-phone')) {\n      target.value = target.value.replace(/[\\D+() -]/g, '');\n    }\n\n    if (target.matches('#form1-email')) {\n      target.value = target.value.replace(/\\W@./g, '');\n    }\n\n    ;\n  });\n  footerFormInput.addEventListener('input', function (event) {\n    var target = event.target;\n\n    if (target.matches('#form2-name', '#form2-message')) {\n      target.value = target.value.replace(/\\w/g, '');\n      footerFormInput.addEventListener('change', function () {\n        target.value = target.value.replace(/(^|\\s)\\S/g, function (a) {\n          return a.toUpperCase();\n        });\n      });\n    }\n\n    if (target.matches('#form2-phone')) {\n      target.value = target.value.replace(/[\\D() -]/g, '');\n    }\n\n    if (target.matches('#form2-email')) {\n      target.value = target.value.replace(/\\W@./g, '');\n    }\n\n    ;\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dataValidation);\n\n//# sourceURL=webpack://lesson30/./src/modules/dataValidation.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(elID) {\n  var errorMessage = 'Что-то пошло не так...',\n      loadMessage = 'Загрузка',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся';\n  var form = document.getElementById(elID);\n  var statusMessage = document.createElement('div');\n  form.addEventListener('submit', function (event) {\n    statusMessage.style.cssText = 'font-size: 2rem;';\n    var target = event.target;\n    event.preventDefault();\n    form.appendChild(statusMessage);\n\n    if (target.matches('#form3')) {\n      statusMessage.textContent = loadMessage;\n      statusMessage.style.cssText = 'color: white;';\n    }\n\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    postData(formData).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('status network not 200');\n      }\n\n      statusMessage.textContent = successMessage;\n\n      if (target.matches('#form3')) {\n        statusMessage.style.cssText = 'color: white;';\n      }\n    })[\"catch\"](function (error) {\n      statusMessage.textContent = errorMessage;\n      console.error(error);\n    });\n  });\n\n  var postData = function postData(formData) {\n    var inputs = document.querySelectorAll('input');\n    inputs.forEach(function (input) {\n      return input.value = '';\n    });\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: formData\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://lesson30/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar slider = function slider() {\n  var slides = document.querySelectorAll('.portfolio-item'),\n      slider = document.querySelector('.portfolio-content');\n  var currentSlide = 0,\n      interval,\n      dots = document.querySelector('.portfolio-dots'),\n      dot = [];\n\n  var createDot = function createDot() {\n    for (var i = 0; i < slides.length; i++) {\n      var li = document.createElement('li');\n      dots.append(li);\n      dot.push(li);\n      li.classList.add('dot');\n\n      if (i === 0) {\n        li.classList.add('dot-active');\n      }\n    }\n\n    ;\n  };\n\n  createDot();\n  dots = document.querySelector('.portfolio-dots');\n\n  var prevSlide = function prevSlide(el, i, strClass) {\n    el[i].classList.remove(strClass);\n  };\n\n  var nextSlide = function nextSlide(el, i, strClass) {\n    el[i].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  startSlide(1500);\n  slider.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slides, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    } else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    } else if (target.matches('.dot')) {\n      dot.forEach(function (el, i) {\n        if (el === target) {\n          currentSlide = i;\n        }\n      });\n    }\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    } else if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    }\n\n    nextSlide(slides, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  });\n  slider.addEventListener('mouseover', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      stopSlide();\n    }\n  });\n  slider.addEventListener('mouseout', function (event) {\n    if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {\n      startSlide();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://lesson30/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar tabs = function tabs() {\n  var tabHeader = document.querySelector('.service-header'),\n      tab = tabHeader.querySelectorAll('.service-header-tab'),\n      tabContent = document.querySelectorAll('.service-tab');\n\n  var toggleTabContent = function toggleTabContent(index) {\n    for (var i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      } else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  };\n\n  tabHeader.addEventListener('click', function (el) {\n    var target = event.target;\n    console.log(target);\n    target = target.closest('.service-header-tab');\n    console.log(target);\n\n    if (target) {\n      tab.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n//# sourceURL=webpack://lesson30/./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu'),\n      menu = document.querySelector('menu');\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle('active-menu');\n  };\n\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.tagName !== 'A') {\n      return;\n    } else {\n      handlerMenu(target);\n    }\n  });\n  btnMenu.addEventListener('click', handlerMenu);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://lesson30/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var popup = document.querySelector('.popup'),\n      popupBtn = document.querySelectorAll('.popup-btn'),\n      popupContent = document.querySelector('.popup-content');\n  var count = 0,\n      appearanceInterval;\n\n  function appearanceAnimate() {\n    appearanceInterval = requestAnimationFrame(appearanceAnimate);\n    count += 1;\n\n    if (document.documentElement.clientWidth > 768) {\n      if (count < 40) {\n        popup.style.display = 'block';\n        popupContent.style.left = count + '%';\n      } else {\n        cancelAnimationFrame(appearanceInterval);\n      }\n    } else {\n      popupContent.style.left = 30 + '%';\n      popup.style.display = 'block';\n      cancelAnimationFrame(appearanceInterval);\n    }\n  }\n\n  ;\n  popupBtn.forEach(function (el) {\n    el.addEventListener('click', function () {\n      appearanceAnimate();\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('popup-close')) {\n      count = 0;\n      popup.style.display = 'none';\n    } else {\n      target = target.closest('.popup-content');\n\n      if (!target) {\n        count = 0;\n        popup.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://lesson30/./src/modules/togglePopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;