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

// LOGIN
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const incorretos = document.querySelector('#incorretos');
const entrar = document.querySelector('#entrar');

// AÇÃO BOTÃO ENTRAR
entrar.onclick = () => {
	let emailverify = email.value;
	let senhaverify = senha.value;

	/* TRATAMENTO DA STRING EMAIL */
	if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailverify)) {
		email.style.border = '1px solid #f00';
		email.style.backgroundColor = 'rgba(255, 0, 0, .1)';
		senha.style.border = '1px solid #f00';
		senha.style.backgroundColor = 'rgba(255, 0, 0, .1)';
		incorretos.style.display = 'block';
		incorretos.style.outline = 'none';
	}

	/* TRATAMENTO DA STRING SENHA */
	if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(senhaverify)) {
		email.style.border = '1px solid #f00';
		email.style.backgroundColor = 'rgba(255, 0, 0, .1)';
		senha.style.border = '1px solid #f00';
		senha.style.backgroundColor = 'rgba(255, 0, 0, .1)';
		incorretos.style.display = 'block';
		incorretos.style.outline = 'none';
	}

	/* ADMIN */
	if (emailverify == 'admin@gmail.com' && senhaverify == 'admin') window.location.assign('admin.html');
};

/***/ })
/******/ ]);