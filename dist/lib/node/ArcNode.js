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
var ArcNode = /** @class */ (function (_super) {
    __extends(ArcNode, _super);
    function ArcNode(mode, x1, y1, rotation, arc, sweep, x2, y2) {
        var _this = _super.call(this, mode) || this;
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
    ArcNode.prototype.toString = function () {
        // eslint-disable-next-line max-len
        return "" + this.getKeyInProperCase() + this.x1 + " " + this.y1 + " " + this.rotation + " " + this.arc + " " + this.sweep + " " + this.x2 + " " + this.y2;
    };
    return ArcNode;
}(PathNode_1.default));
exports.default = ArcNode;
