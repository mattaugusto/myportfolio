/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//imports
/*import admin from './admin.js';
import sigin from './sigin.js';
import sigup from './sigup.js';
import submit from './submit.js';
*/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const cepError = document.querySelector('#cepError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');
const passwordrepeatError = document.querySelector('#passwordrepeatError');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordrepeat = document.querySelector('#passwordrepeat');
const cepField = document.querySelector('#cep');
const tel = document.querySelector('#tel');
const rua = document.querySelector('#rua');
const state = document.querySelector('#state');
const city = document.querySelector('#city');
const signupbtn = document.querySelector('.signupbtn');
//evento blur cep
cepField.addEventListener('blur', () => {
  let cep = cepField.value;
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(res => res.json()).then(cepInfo => {
    cepField.style.border = '1px solid green';
    state.value = cepInfo.uf;
    city.value = cepInfo.localidade;
    rua.value = cepInfo.logradouro;
  });
});
//validação email cadastro
signupbtn.onclick = function () {
  let emailverify = email.value;
  let passwordverify = password.value;
  let passwordrepeatverify = passwordrepeat.value;

  if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailverify)) {
    email.style.border = '1px solid green';
    email.style.backgroundColor = 'rgba(134, 244, 66, .1)';
    emailError.style.display = 'none';
  } else {
    email.style.border = '1px solid #f00';
    email.style.backgroundColor = 'rgba(255, 0, 0, .1)';
    emailError.style.display = 'block';
    emailError.style.outline = 'none';
  }
  if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(passwordverify)) {
    password.style.border = '1px solid green';
    password.style.backgroundColor = 'rgba(134, 244, 66, .1)';
    pass.style.display = 'none';
  } else {
    password.style.border = '1px solid #f00';
    password.style.backgroundColor = 'rgba(255, 0, 0, .1)';
    passwordError.style.display = 'block';
    passwordError.style.outline = 'none';
  }
  if (passwordverify !== passwordrepeatverify) {
    passwordrepeat.style.border = '1px solid #f00';
    passwordrepeat.style.backgroundColor = 'rgba(255, 0, 0, .1)';
    passwordrepeatError.style.display = 'block';
    passwordrepeatError.style.outline = 'none';
  } else {
    passwordrepeat.style.border = '1px solid green';
    passwordrepeat.style.backgroundColor = 'rgba(134, 244, 66, .1)';
    passwordrepeatError.style.display = 'none';
  }
};

/***/ })
/******/ ]);