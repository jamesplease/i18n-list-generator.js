(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["generateList"] = factory();
	else
		root["generateList"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = generateList;
	// These are ISO 639-1 codes. For a list of them, see:
	// https://en.wikipedia.org/wiki/ISO_639-1
	var rtlCodes = ['ar', 'ur', 'fa', 'he'];
	// These languages use the reverse, upside-down "arabic" comma
	var reverseComma = ['ar', 'ur', 'fa'];
	
	function generateList() {
	  var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
	  var languageCode = arguments[1];
	
	  var rtl = rtlCodes.indexOf(languageCode) >= 0;
	  var comma = reverseComma.indexOf(languageCode) >= 0 ? '،' : ',';
	
	  if (rtl) {
	    return arr.reverse().join(' ' + comma);
	  } else {
	    return arr.join(comma + ' ');
	  }
	};

/***/ }
/******/ ])
});
;
//# sourceMappingURL=i18n-list-generator.js.map