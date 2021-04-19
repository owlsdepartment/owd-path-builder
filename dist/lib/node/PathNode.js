"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants/index");
var PathNode = /** @class */ (function () {
    function PathNode(mode) {
        if (mode === void 0) { mode = constants_1.MODE_ABSOLUTE; }
        this.key = '';
        this.mode = mode || constants_1.MODE_ABSOLUTE;
    }
    PathNode.prototype.getKeyInProperCase = function () {
        if (this.isAbsolute) {
            return this.key.toUpperCase();
        }
        return this.key.toLowerCase();
    };
    Object.defineProperty(PathNode.prototype, "isAbsolute", {
        get: function () {
            return !this.isRelative;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PathNode.prototype, "isRelative", {
        get: function () {
            return this.mode === constants_1.MODE_RELATIVE;
        },
        enumerable: false,
        configurable: true
    });
    PathNode.prototype.toString = function () {
        return "" + this.getKeyInProperCase();
    };
    return PathNode;
}());
exports.default = PathNode;
