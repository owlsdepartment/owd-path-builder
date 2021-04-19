"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants/index");
var node_1 = require("./node/index");
var PathBuilder = /** @class */ (function () {
    function PathBuilder() {
        this.isClosed = false;
        this.mode = constants_1.MODE_RELATIVE;
        this.d = [];
    }
    PathBuilder.prototype.addPathNode = function (node) {
        if (this.isClosed) {
            throw new Error('You cannot add node to path, that has been already closed');
        }
        this.d.push(node);
        return this;
    };
    PathBuilder.prototype.close = function () {
        this.addPathNode(new node_1.CloseNode());
        this.isClosed = true;
        return this;
    };
    PathBuilder.prototype.moveTo = function (x, y) {
        this.addPathNode(new node_1.MoveToNode(this.mode, x, y));
        return this;
    };
    PathBuilder.prototype.line = function (x, y) {
        this.addPathNode(new node_1.LineNode(this.mode, x, y));
        return this;
    };
    PathBuilder.prototype.horizontalLine = function (x) {
        this.addPathNode(new node_1.HorizontalLineNode(this.mode, x));
        return this;
    };
    PathBuilder.prototype.verticalLine = function (y) {
        this.addPathNode(new node_1.VerticalLineNode(this.mode, y));
        return this;
    };
    PathBuilder.prototype.curve = function (x1, y1, x2, y2, x3, y3) {
        this.addPathNode(new node_1.CurveNode(this.mode, x1, y1, x2, y2, x3, y3));
        return this;
    };
    PathBuilder.prototype.quadraticCurve = function (x1, y1, x2, y2) {
        this.addPathNode(new node_1.QuadraticCurveNode(this.mode, x1, y1, x2, y2));
        return this;
    };
    PathBuilder.prototype.symmetricCurve = function (x1, y1, x2, y2) {
        this.addPathNode(new node_1.SymmetricCurveNode(this.mode, x1, y1, x2, y2));
        return this;
    };
    PathBuilder.prototype.arc = function (x1, y1, rotation, arc, sweep, x2, y2) {
        this.addPathNode(new node_1.ArcNode(this.mode, x1, y1, rotation, arc, sweep, x2, y2));
        return this;
    };
    PathBuilder.prototype.absolute = function () {
        this.mode = constants_1.MODE_ABSOLUTE;
        return this;
    };
    PathBuilder.prototype.relative = function () {
        this.mode = constants_1.MODE_RELATIVE;
        return this;
    };
    PathBuilder.prototype.toString = function () {
        return this.d.reduce(function (prev, node) { return prev + " " + node.toString(); }, '').trim();
    };
    return PathBuilder;
}());
exports.default = PathBuilder;
