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
var MoveToNode_1 = require("./MoveToNode");
var LineNode = /** @class */ (function (_super) {
    __extends(LineNode, _super);
    function LineNode(mode, x, y) {
        var _this = _super.call(this, mode, x, y) || this;
        _this.key = 'L';
        return _this;
    }
    return LineNode;
}(MoveToNode_1.default));
exports.default = LineNode;
