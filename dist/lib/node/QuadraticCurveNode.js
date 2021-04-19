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
var PathNode_1 = require("./PathNode");
var QuadraticCurveNode = /** @class */ (function (_super) {
    __extends(QuadraticCurveNode, _super);
    function QuadraticCurveNode(mode, x1, y1, x3, y3) {
        var _this = _super.call(this, mode) || this;
        _this.key = 'Q';
        _this.x1 = x1;
        _this.y1 = y1;
        _this.x3 = x3;
        _this.y3 = y3;
        return _this;
    }
    QuadraticCurveNode.prototype.toString = function () {
        return "" + this.getKeyInProperCase() + this.x1 + " " + this.y1 + " " + this.x3 + " " + this.y3;
    };
    return QuadraticCurveNode;
}(PathNode_1.default));
exports.default = QuadraticCurveNode;
