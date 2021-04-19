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
var MoveToNode = /** @class */ (function (_super) {
    __extends(MoveToNode, _super);
    function MoveToNode(mode, x, y) {
        var _this = _super.call(this, mode) || this;
        _this.key = 'M';
        _this.x = x;
        _this.y = y;
        return _this;
    }
    MoveToNode.prototype.toString = function () {
        return "" + this.getKeyInProperCase() + this.x + " " + this.y;
    };
    return MoveToNode;
}(PathNode_1.default));
exports.default = MoveToNode;
