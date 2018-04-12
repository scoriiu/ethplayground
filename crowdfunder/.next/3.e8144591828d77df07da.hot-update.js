webpackHotUpdate(3,{

/***/ "./ethereum/factory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_CampaignFactory_json__ = __webpack_require__("./ethereum/build/CampaignFactory.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_CampaignFactory_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__build_CampaignFactory_json__);
(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();




var factory = new __WEBPACK_IMPORTED_MODULE_0__web3__["a" /* default */].eth.Contract(JSON.parse(__WEBPACK_IMPORTED_MODULE_1__build_CampaignFactory_json___default.a.interface), '0xe172C0F182127E11b1BE0498633491F18A9612e6');

var _default = factory;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(factory, 'factory', '/Users/scoriiu/git_projects/ethplayground/crowdfunder/ethereum/factory.js');
	reactHotLoader.register(_default, 'default', '/Users/scoriiu/git_projects/ethplayground/crowdfunder/ethereum/factory.js');
	leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.e8144591828d77df07da.hot-update.js.map