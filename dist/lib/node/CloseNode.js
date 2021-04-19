"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../constants/index");
var PathNode_1 = require("./PathNode");
var CloseNode = /** @class */ (function (_super) {
    __extends(CloseNode, _super);
    function CloseNode(mode) {
        if (mode === void 0) { mode = constants_1.MODE_ABSOLUTE; }
        var _this = _super.call(this, mode) || this;
        _this.key = 'Z';
        return _this;
    }
    return CloseNode;
}(PathNode_1.default));
exports.default = CloseNode;
