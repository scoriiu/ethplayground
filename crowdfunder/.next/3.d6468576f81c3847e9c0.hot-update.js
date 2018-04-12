webpackHotUpdate(3,{

/***/ "./pages/campaigns/show.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethereum_factory__ = __webpack_require__("./ethereum/factory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__ = __webpack_require__("./ethereum/campaign.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__ = __webpack_require__("./ethereum/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_ContributeForm__ = __webpack_require__("./components/ContributeForm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__routes__);

var _jsxFileName = '/Users/scoriiu/git_projects/ethplayground/crowdfunder/pages/campaigns/show.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
	var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

	enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var CampaignShow = function (_Component) {
	_inherits(CampaignShow, _Component);

	function CampaignShow() {
		_classCallCheck(this, CampaignShow);

		return _possibleConstructorReturn(this, (CampaignShow.__proto__ || Object.getPrototypeOf(CampaignShow)).apply(this, arguments));
	}

	_createClass(CampaignShow, [{
		key: 'renderDetails',
		value: function renderDetails() {
			var _props = this.props,
			    minimumContribution = _props.minimumContribution,
			    balance = _props.balance,
			    requestsCount = _props.requestsCount,
			    approversCount = _props.approversCount,
			    manager = _props.manager;


			var items = [{
				header: manager,
				meta: 'Address of Manager',
				description: 'The creator of the campaign.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].utils.fromWei(minimumContribution, 'ether'),
				meta: 'Minimum contribution in ETH',
				description: 'The minimum contribution an user is allowed to participate.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: __WEBPACK_IMPORTED_MODULE_6__ethereum_web3__["a" /* default */].utils.fromWei(balance, 'ether'),
				meta: 'Balance in ETH',
				description: 'The balanec of money this campaign has left to spend.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: requestsCount,
				meta: 'Number of requests',
				description: 'A request is about to withdraw money from the contract.',
				style: { overflowWrap: 'break-word' }
			}, {
				header: approversCount,
				meta: 'Number of approvers',
				description: 'The number of contributors to this campaign',
				style: { overflowWrap: 'break-word' }
			}];

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["b" /* Card */].Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */],
				{
					__source: {
						fileName: _jsxFileName,
						lineNumber: 72
					}
				},
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					'h3',
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 73
						}
					},
					'Show Campaign'
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Grid */],
					{
						__source: {
							fileName: _jsxFileName,
							lineNumber: 74
						}
					},
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Grid */].Row,
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 75
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Grid */].Column,
							{ width: 10, __source: {
									fileName: _jsxFileName,
									lineNumber: 76
								}
							},
							this.renderDetails()
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Grid */].Column,
							{ width: 6, __source: {
									fileName: _jsxFileName,
									lineNumber: 80
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_ContributeForm__["a" /* default */], { address: this.props.address, __source: {
									fileName: _jsxFileName,
									lineNumber: 81
								}
							})
						)
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Grid */].Row,
						{
							__source: {
								fileName: _jsxFileName,
								lineNumber: 84
							}
						},
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["e" /* Grid */].Column,
							{
								__source: {
									fileName: _jsxFileName,
									lineNumber: 85
								}
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_8__routes__["Link"],
								{ route: '/campaigns/' + this.props.address + '/requests', __source: {
										fileName: _jsxFileName,
										lineNumber: 86
									}
								},
								__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
									'a',
									{
										__source: {
											fileName: _jsxFileName,
											lineNumber: 87
										}
									},
									__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
										__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["a" /* Button */],
										{ primary: true, __source: {
												fileName: _jsxFileName,
												lineNumber: 88
											}
										},
										'Show Requests'
									)
								)
							)
						)
					)
				)
			);
		}
	}, {
		key: '__reactstandin__regenerateByEval',
		value: function __reactstandin__regenerateByEval(key, code) {
			this[key] = eval(code);
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(props) {
				var campaign, summary;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								campaign = Object(__WEBPACK_IMPORTED_MODULE_4__ethereum_campaign__["a" /* default */])(props.query.address);
								_context.next = 3;
								return campaign.methods.getSummary().call();

							case 3:
								summary = _context.sent;
								return _context.abrupt('return', {
									address: props.query.address,
									minimumContribution: summary[0],
									balance: summary[1],
									requestsCount: summary[2],
									approversCount: summary[3],
									manager: summary[4]
								});

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return CampaignShow;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = CampaignShow;


/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
	var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

	var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

	if (!reactHotLoader) {
		return;
	}

	reactHotLoader.register(CampaignShow, 'CampaignShow', '/Users/scoriiu/git_projects/ethplayground/crowdfunder/pages/campaigns/show.js');
	reactHotLoader.register(_default, 'default', '/Users/scoriiu/git_projects/ethplayground/crowdfunder/pages/campaigns/show.js');
	leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.d6468576f81c3847e9c0.hot-update.js.map