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

/***/ "./dist/user-interface.js":
/*!********************************!*\
  !*** ./dist/user-interface.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validation_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-module */ \"./dist/validation-module.js\");\n\n  \n  function createForm() {\n    const form = document.createElement('form');\n    form.appendChild(createEmailLabel());\n    form.appendChild(createEmailInput());\n    form.appendChild(createCountryLabel());\n    form.appendChild(createCountryInput());\n    form.appendChild(createZipLabel());\n    form.appendChild(createZipInput());\n    form.appendChild(createPasswordLabel());\n    form.appendChild(createPasswordContainer());\n    form.appendChild(createPasswordConfirmLabel());\n    form.appendChild(createPasswordConfirmContainer());\n    form.appendChild(createSubmitBtn());\n    return form;\n  }\n\n  function createPasswordContainer() {\n    const container = document.createElement('div');\n    container.classList.add('container');\n    container.appendChild(createPasswordInput());\n    container.appendChild(createErrorMessage());\n    return container;\n  }\n\n  function createErrorMessage() {\n    const errorMessage = document.createElement('div');\n    errorMessage.classList.add('error-message-red')\n    errorMessage.setAttribute('id', 'error-message');\n    return errorMessage;\n  }\n\n  function createPasswordConfirmContainer() {\n    const container = document.createElement('div');\n    container.classList.add('container');\n    container.appendChild(createPasswordConfirmInput());\n    container.appendChild(createErrorMessageConfirm());\n    return container;\n  }\n\n  function createErrorMessageConfirm() {\n    const errorMessage = document.createElement('div');\n    errorMessage.classList.add('error-message-red')\n    errorMessage.setAttribute('id', 'error-message-confirm');\n    return errorMessage;\n  }\n  \n  function createEmailLabel() {\n    const label = document.createElement('label');\n    label.setAttribute('for', 'email');\n    label.textContent = 'email';\n    return label;\n  }\n  \n  function createEmailInput() {\n    const email = document.createElement('input');\n    email.type = 'email';\n    email.required = true;\n    email.placeholder = 'example@mail.com';\n    email.setAttribute('id', 'email');\n    return email;\n  }\n  \n  function createCountryLabel() {\n    const label = document.createElement('label');\n    label.setAttribute('for', 'country');\n    label.textContent = 'country';\n    return label;\n  }\n  \n  function createCountryInput() {\n    const country = document.createElement('input');\n    country.setAttribute('id', 'country');\n    country.type = 'text';\n    country.required = true;\n    return country;\n  }\n  \n  function createZipLabel() {\n    const label = document.createElement('label');\n    label.setAttribute('for', 'zip');\n    label.textContent = 'zip code';\n    return label;\n  }\n  \n  function createZipInput() {\n    const zip = document.createElement('input');\n    zip.setAttribute('id', 'zip');\n    zip.required = true;\n    zip.type = 'number'\n    return zip;\n  }\n  \n  function createPasswordLabel() {\n    const label = document.createElement('label');\n    label.setAttribute('for', 'password');\n    label.textContent = 'password';\n    return label;\n  }\n  \n  function createPasswordInput() {\n    const password = document.createElement('input');\n    password.type = 'password';\n    password.required = true;\n    password.setAttribute('id', 'password');\n    return password;\n  }\n\n  function initPasswordListener() {\n    const password = document.getElementById('password');\n    const errorMessage = document.getElementById('error-message');\n    password.addEventListener(\"blur\", function() {\n        errorMessage.textContent = '';\n        errorMessage.classList.replace('error-message-green','error-message-red');\n        if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.checkNotEmpty(password)) {\n            errorMessage.textContent = 'Must enter a password';\n        } else if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.checkPasswordLength(password)) {\n            errorMessage.textContent = 'Must be at least 7 characters long';\n        } else if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.checkNumber(password)) {\n            errorMessage.textContent = 'Must contain at least one number';\n        } else if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.checkLetter(password)) {\n            errorMessage.textContent = 'Must contain at least one letter'\n        } else if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.checkUpperLowercase(password)){\n            errorMessage.textContent = 'Must contain at least one lowercase and one uppercase letter'\n        } else if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.checkSpecialCharacters(password)) {\n            errorMessage.textContent = 'Must contain at least one special character'\n        } else {\n            errorMessage.classList.replace('error-message-red','error-message-green');\n            errorMessage.textContent = 'acceptable password'\n            _validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.getPassword(password);\n            console.log('good job')\n        }\n      });\n  }\n\n  function initPasswordConfirmListener() {\n    const passwordConfirm = document.getElementById('password-confirm');\n    const password = document.getElementById('password').value;\n    const errorMessage = document.getElementById('error-message-confirm');\n    passwordConfirm.addEventListener(\"blur\", function() {\n        errorMessage.textContent = '';\n        if(!_validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.comparePasswords(passwordConfirm)) {\n          errorMessage.classList.add('error-message-red')\n            errorMessage.textContent = 'Must match password';\n        } else {\n            errorMessage.classList.replace('error-message-red', 'error-message-green')\n            errorMessage.textContent = 'password match'\n            _validation_module__WEBPACK_IMPORTED_MODULE_0__.ValidationModule.getPassword(passwordConfirm);\n            console.log('good job');\n        }\n      });\n  }\n  \n  function createPasswordConfirmLabel() {\n    const label = document.createElement('label');\n    label.setAttribute('for', 'password-confirm');\n    label.textContent = 'confirm password';\n    return label;\n  }\n  \n  function createPasswordConfirmInput() {\n    const errorMessage = document.getElementById('error-message-confirm');\n    const password = document.createElement('input');\n    password.type = 'password';\n    password.required = true;\n    password.setAttribute('id', 'password-confirm');\n    /*password.addEventListener(\"input\", (event) => {\n        if(ValidationModule.comparePasswords(password)) {\n            password.classList.add('valid');\n            //errorMessage.textContent = 'password match'\n        } else {\n            console.log('no match')\n        }\n    });*/\n    return password;\n  }\n\n  function createSubmitBtn() {\n    const btnSubmit = document.createElement('button');\n    btnSubmit.setAttribute('id', 'btn-submit')\n    btnSubmit.textContent = 'Submit';\n    btnSubmit.addEventListener('click', function() {\n\n    })\n    return btnSubmit;\n  }\n  \n  function initPage() {\n    const wrapper = document.querySelector('.content');\n    wrapper.appendChild(createForm());\n    initPasswordListener();\n    initPasswordConfirmListener();\n  }\n  \n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPage);\n\n//# sourceURL=webpack://form-validation/./dist/user-interface.js?");

/***/ }),

/***/ "./dist/validation-module.js":
/*!***********************************!*\
  !*** ./dist/validation-module.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ValidationModule\": () => (/* binding */ ValidationModule)\n/* harmony export */ });\nconst ValidationModule = (function() {\n\n    const PASSWORD_MIN_LENGTH = 7;\n    let password = '';\n    const NO_ERROR = 'good';\n    const ERROR_EMPTY_PASSWORD = 'Must enter a password';\n    const ERROR_NOT_LONG_ENOUGH = 'Must be at least 7 characters long';\n    const ERROR_NO_NUMBER = 'Must contain at least one number';\n    const ERROR_NO_LETTER = 'Must contain at least one letter';\n    const ERROR_UPPERCASE_LOWERCASE = 'Must contain at least one lowercase and one uppercase letter';\n    const ERROR_SPECIAL_CHARACTER = 'Must contain at least one special character';\n\n    const getPassword = (input) => {\n        password = input.value;\n    }\n\n    const comparePasswords = (input) => {\n        if(input.value === password && input.value.length > 0) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n        \n    const checkPasswordLength = (input) => {\n        input = input.value;\n        if(input.length >= PASSWORD_MIN_LENGTH ) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    const checkSpecialCharacters = (input) => {\n        const format = /[~`!@#$%^&*()-_+=\\[\\]{};':\"\\\\|,.<>\\/?]+/;\n        const specialChars = \"<>@!#$%^&*()_+[]{}?:;|'\\\"\\\\,./~`-=\";\n        /*for(let i=0; i < specialChars.length; i++) {\n            console.log(input[i])\n            if(input.value.indexOf(specialChars[i]) > -1) {\n                console.log('special')\n                return true;\n            } else {\n                console.log('not special')\n                return false;\n        }\n        }*/\n        if(input.value.match(/\\W/)){\n            console.log('special')\n            return true;\n        } else {\n            console.log('NOT special')\n            return false;\n        }\n    }\n\n    const checkNotEmpty = (input) => {\n        input = input.value;\n        if(input.trim() != '') {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    const checkNumber = (input) => {\n        let hasNumber = /\\d/;\n        //const number = /^[0-9a]+$/;\n        if(hasNumber.test(input.value)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    const checkLetter = (input) => {\n        const letter = /[a-zA-Z]/g;\n        if(input.value.match(letter)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n\n    const checkUpperLowercase = (input) => {\n        const isUppercase = /[A-Z]/;\n        const isLowercase = /[a-z]/;\n        if(isUppercase.test(input.value) && isLowercase.test(input.value)) {\n            return true;\n        } else {\n            return false;\n        }\n    }\n    \n    return {\n        getPassword,\n        comparePasswords,\n        checkPasswordLength,\n        checkSpecialCharacters,\n        checkNotEmpty,\n        checkNumber,\n        checkLetter,\n        checkUpperLowercase\n    }\n    \n    })();\n    \n    \n\n//# sourceURL=webpack://form-validation/./dist/validation-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_user_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/user-interface */ \"./dist/user-interface.js\");\n\n\n(0,_dist_user_interface__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n\n\n//# sourceURL=webpack://form-validation/./src/index.js?");

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