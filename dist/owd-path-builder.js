(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("owd-path-builder", [], factory);
	else if(typeof exports === 'object')
		exports["owd-path-builder"] = factory();
	else
		root["owd-path-builder"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MODE_ABSOLUTE = 'absolute';
var MODE_RELATIVE = 'relative';

var PathNode = function () {
	function PathNode(mode) {
		_classCallCheck(this, PathNode);

		this.key = '';
		this.mode = mode === MODE_RELATIVE ? MODE_RELATIVE : MODE_ABSOLUTE;
	}

	_createClass(PathNode, [{
		key: 'getKeyInProperCase',
		value: function getKeyInProperCase() {
			if (this.mode === MODE_ABSOLUTE) {
				return this.key.toUpperCase();
			}

			return this.key.toLowerCase();
		}
	}, {
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase();
		}
	}]);

	return PathNode;
}();

exports.default = PathNode;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _MoveToNode2 = __webpack_require__(3);

var _MoveToNode3 = _interopRequireDefault(_MoveToNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineNode = function (_MoveToNode) {
	_inherits(LineNode, _MoveToNode);

	function LineNode(mode, x, y) {
		_classCallCheck(this, LineNode);

		var _this = _possibleConstructorReturn(this, (LineNode.__proto__ || Object.getPrototypeOf(LineNode)).call(this, mode, x, y));

		_this.key = 'L';
		return _this;
	}

	return LineNode;
}(_MoveToNode3.default);

exports.default = LineNode;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PathNode2 = __webpack_require__(0);

var _PathNode3 = _interopRequireDefault(_PathNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurveNode = function (_PathNode) {
	_inherits(CurveNode, _PathNode);

	function CurveNode(mode, x1, y1, x2, y2, x3, y3) {
		_classCallCheck(this, CurveNode);

		var _this = _possibleConstructorReturn(this, (CurveNode.__proto__ || Object.getPrototypeOf(CurveNode)).call(this, mode));

		_this.key = 'C';
		_this.x1 = x1;
		_this.y1 = y1;
		_this.x2 = x2;
		_this.y2 = y2;
		_this.x3 = x3;
		_this.y3 = y3;
		return _this;
	}

	_createClass(CurveNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.x1 + ' ' + this.y1 + ' ' + this.x2 + ' ' + this.y2 + ' ' + this.x3 + ' ' + this.y3;
		}
	}]);

	return CurveNode;
}(_PathNode3.default);

exports.default = CurveNode;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PathNode2 = __webpack_require__(0);

var _PathNode3 = _interopRequireDefault(_PathNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoveToNode = function (_PathNode) {
	_inherits(MoveToNode, _PathNode);

	function MoveToNode(mode, x, y) {
		_classCallCheck(this, MoveToNode);

		var _this = _possibleConstructorReturn(this, (MoveToNode.__proto__ || Object.getPrototypeOf(MoveToNode)).call(this, mode));

		_this.key = 'M';
		_this.x = x;
		_this.y = y;
		return _this;
	}

	_createClass(MoveToNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.x + ' ' + this.y;
		}
	}]);

	return MoveToNode;
}(_PathNode3.default);

exports.default = MoveToNode;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _node = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MODE_ABSOLUTE = 'absolute';
var MODE_RELATIVE = 'relative';

var PathBuilder = function () {
	function PathBuilder() {
		_classCallCheck(this, PathBuilder);

		this.isClosed = false;
		this.mode = MODE_RELATIVE;
		this.d = [];
	}

	_createClass(PathBuilder, [{
		key: 'addPathNode',
		value: function addPathNode(node) {
			this.d.push(node);

			return this;
		}
	}, {
		key: 'close',
		value: function close() {
			if (!this.isClosed) {
				this.addPathNode(new _node.CloseNode());
				this.isClosed = true;
			}

			return this;
		}
	}, {
		key: 'moveTo',
		value: function moveTo(x, y) {
			this.addPathNode(new _node.MoveToNode(this.mode, x, y));

			return this;
		}
	}, {
		key: 'line',
		value: function line(x, y) {
			this.addPathNode(new _node.LineNode(this.mode, x, y));

			return this;
		}
	}, {
		key: 'horizontalLine',
		value: function horizontalLine(x) {
			this.addPathNode(new _node.HorizontalLineNode(this.mode, x));

			return this;
		}
	}, {
		key: 'verticalLine',
		value: function verticalLine(y) {
			this.addPathNode(new _node.VerticalLineNode(this.mode, y));

			return this;
		}
	}, {
		key: 'curve',
		value: function curve(x1, y1, x2, y2, x3, y3) {
			this.addPathNode(new _node.CurveNode(this.mode, x1, y1, x2, y2, x3, y3));

			return this;
		}
	}, {
		key: 'quadraticCurve',
		value: function quadraticCurve(x1, y1, x2, y2) {
			this.addPathNode(new _node.QuadraticCurveNode(this.mode, x1, y1, x2, y2));

			return this;
		}
	}, {
		key: 'symmetricCurve',
		value: function symmetricCurve(x1, y1, x2, y2) {
			this.addPathNode(new _node.SymmetricCurveNode(this.mode, x1, y1, x2, y2));

			return this;
		}
	}, {
		key: 'arc',
		value: function arc(x1, y1, rotation, _arc, sweep, x2, y2) {
			this.addPathNode(new _node.ArcNode(this.mode, x1, y1, rotation, _arc, sweep, x2, y2));

			return this;
		}
	}, {
		key: 'absolute',
		value: function absolute() {
			this.mode = MODE_ABSOLUTE;

			return this;
		}
	}, {
		key: 'relative',
		value: function relative() {
			this.mode = MODE_RELATIVE;

			return this;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.d.reduce(function (prev, node) {
				return prev + ' ' + node.toString();
			}, '').trim();
		}
	}]);

	return PathBuilder;
}();

exports.default = PathBuilder;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PathNode = __webpack_require__(0);

Object.defineProperty(exports, 'PathNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_PathNode).default;
  }
});

var _CloseNode = __webpack_require__(6);

Object.defineProperty(exports, 'CloseNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CloseNode).default;
  }
});

var _MoveToNode = __webpack_require__(3);

Object.defineProperty(exports, 'MoveToNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_MoveToNode).default;
  }
});

var _LineNode = __webpack_require__(1);

Object.defineProperty(exports, 'LineNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LineNode).default;
  }
});

var _HorizontalLineNode = __webpack_require__(7);

Object.defineProperty(exports, 'HorizontalLineNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_HorizontalLineNode).default;
  }
});

var _VerticalLineNode = __webpack_require__(8);

Object.defineProperty(exports, 'VerticalLineNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VerticalLineNode).default;
  }
});

var _CurveNode = __webpack_require__(2);

Object.defineProperty(exports, 'CurveNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CurveNode).default;
  }
});

var _QuadraticCurveNode = __webpack_require__(9);

Object.defineProperty(exports, 'QuadraticCurveNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_QuadraticCurveNode).default;
  }
});

var _SymmetricCurveNode = __webpack_require__(10);

Object.defineProperty(exports, 'SymmetricCurveNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SymmetricCurveNode).default;
  }
});

var _ArcNode = __webpack_require__(11);

Object.defineProperty(exports, 'ArcNode', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ArcNode).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _PathNode2 = __webpack_require__(0);

var _PathNode3 = _interopRequireDefault(_PathNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CloseNode = function (_PathNode) {
	_inherits(CloseNode, _PathNode);

	function CloseNode(mode) {
		_classCallCheck(this, CloseNode);

		var _this = _possibleConstructorReturn(this, (CloseNode.__proto__ || Object.getPrototypeOf(CloseNode)).call(this, mode));

		_this.key = 'Z';
		return _this;
	}

	return CloseNode;
}(_PathNode3.default);

exports.default = CloseNode;
module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LineNode2 = __webpack_require__(1);

var _LineNode3 = _interopRequireDefault(_LineNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HorizontalNode = function (_LineNode) {
	_inherits(HorizontalNode, _LineNode);

	function HorizontalNode(mode, x) {
		_classCallCheck(this, HorizontalNode);

		var _this = _possibleConstructorReturn(this, (HorizontalNode.__proto__ || Object.getPrototypeOf(HorizontalNode)).call(this, mode, x, 0));

		_this.key = 'H';
		return _this;
	}

	_createClass(HorizontalNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.x;
		}
	}]);

	return HorizontalNode;
}(_LineNode3.default);

exports.default = HorizontalNode;
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LineNode2 = __webpack_require__(1);

var _LineNode3 = _interopRequireDefault(_LineNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VerticalLineNode = function (_LineNode) {
	_inherits(VerticalLineNode, _LineNode);

	function VerticalLineNode(mode, y) {
		_classCallCheck(this, VerticalLineNode);

		var _this = _possibleConstructorReturn(this, (VerticalLineNode.__proto__ || Object.getPrototypeOf(VerticalLineNode)).call(this, mode, 0, y));

		_this.key = 'V';
		return _this;
	}

	_createClass(VerticalLineNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.y;
		}
	}]);

	return VerticalLineNode;
}(_LineNode3.default);

exports.default = VerticalLineNode;
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CurveNode2 = __webpack_require__(2);

var _CurveNode3 = _interopRequireDefault(_CurveNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var QuadraticCurveNode = function (_CurveNode) {
	_inherits(QuadraticCurveNode, _CurveNode);

	function QuadraticCurveNode(mode, x1, y1, x3, y3) {
		_classCallCheck(this, QuadraticCurveNode);

		var _this = _possibleConstructorReturn(this, (QuadraticCurveNode.__proto__ || Object.getPrototypeOf(QuadraticCurveNode)).call(this, mode, x1, y1, null, null, x3, y3));

		_this.key = 'Q';
		return _this;
	}

	_createClass(QuadraticCurveNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.x1 + ' ' + this.y1 + ' ' + this.x3 + ' ' + this.y3;
		}
	}]);

	return QuadraticCurveNode;
}(_CurveNode3.default);

exports.default = QuadraticCurveNode;
module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CurveNode2 = __webpack_require__(2);

var _CurveNode3 = _interopRequireDefault(_CurveNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SymmetricCurveNode = function (_CurveNode) {
	_inherits(SymmetricCurveNode, _CurveNode);

	function SymmetricCurveNode(mode, x1, y1, x3, y3) {
		_classCallCheck(this, SymmetricCurveNode);

		var _this = _possibleConstructorReturn(this, (SymmetricCurveNode.__proto__ || Object.getPrototypeOf(SymmetricCurveNode)).call(this, mode, x1, y1, null, null, x3, y3));

		_this.key = 'S';
		return _this;
	}

	_createClass(SymmetricCurveNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.x1 + ' ' + this.y1 + ' ' + this.x3 + ' ' + this.y3;
		}
	}]);

	return SymmetricCurveNode;
}(_CurveNode3.default);

exports.default = SymmetricCurveNode;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PathNode2 = __webpack_require__(0);

var _PathNode3 = _interopRequireDefault(_PathNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ArcNode = function (_PathNode) {
	_inherits(ArcNode, _PathNode);

	function ArcNode(mode, x1, y1, rotation, arc, sweep, x2, y2) {
		_classCallCheck(this, ArcNode);

		var _this = _possibleConstructorReturn(this, (ArcNode.__proto__ || Object.getPrototypeOf(ArcNode)).call(this, mode));

		_this.key = 'A';
		_this.x1 = x1;
		_this.y1 = y1;
		_this.rotation = rotation;
		_this.arc = arc;
		_this.sweep = sweep;
		_this.x2 = x2;
		_this.y2 = y2;
		return _this;
	}

	_createClass(ArcNode, [{
		key: 'toString',
		value: function toString() {
			return '' + this.getKeyInProperCase() + this.x1 + ' ' + this.y1 + ' ' + this.rotation + ' ' + this.arc + ' ' + this.sweep + ' ' + this.x2 + ' ' + this.y2;
		}
	}]);

	return ArcNode;
}(_PathNode3.default);

exports.default = ArcNode;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=owd-path-builder.js.map