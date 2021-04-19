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
var CurveNode = /** @class */ (function (_super) {
    __extends(CurveNode, _super);
    function CurveNode(mode, x1, y1, x2, y2, x3, y3) {
        var _this = _super.call(this, mode) || this;
        _this.key = 'C';
        _this.x1 = x1;
        _this.y1 = y1;
        _this.x2 = x2;
        _this.y2 = y2;
        _this.x3 = x3;
        _this.y3 = y3;
        return _this;
    }
    CurveNode.prototype.toString = function () {
        return "" + this.getKeyInProperCase() + this.x1 + " " + this.y1 + " " + this.x2 + " " + this.y2 + " " + this.x3 + " " + this.y3;
    };
    return CurveNode;
}(PathNode_1.default));
exports.default = CurveNode;
