require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
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
/***/ (function(module, exports, __webpack_require__) {

	var newman = __webpack_require__(1); // require newman in your project 
	 
	// call newman.run to pass `options` object and wait for callback 
	newman.run({
	    collection: __webpack_require__(2),
	    reporters: ['json', 'cli'],
	    iterationCount: 2, 
	
	}, function (err) {
	    if (err) { throw err; }
	    console.log('collection run complete!');
	});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("newman");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {"variables":[],"info":{"name":"FileGenerator","_postman_id":"4000e6d1-1e66-660c-4cfb-d8bd143acae9","description":"","schema":"https://schema.getpostman.com/json/collection/v2.0.0/collection.json"},"item":[{"name":"http://localhost:49706/file-generator","request":{"url":"http://localhost:49706/file-generator","method":"POST","header":[{"key":"Content-Type","value":"application/json","description":""}],"body":{"mode":"raw","raw":"{\n\t\"TargetPath\" : \"C:\\\\Users\\\\PG\\\\Desktop\\\\pii\",\n\t\"SourcePath\": \"C:\\\\Users\\\\PG\\\\Desktop\\\\pii\\\\pii.csv\",\n\t\"ServerConnection\": \"Server=DESKTOP-QFSTPSK;Database=vega;User Id=test;Password=test;\"\n}"},"description":""},"response":[]}]}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map