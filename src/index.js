const MODE_ABSOLUTE = 'absolute';
const MODE_RELATIVE = 'relative';

import {
	CloseNode,
	MoveToNode,
	LineNode,
	HorizontalLineNode,
	VerticalLineNode,
	CurveNode,
	QuadraticCurveNode,
	SymmetricCurveNode,
	ArcNode
} from './node';

export default class PathBuilder {
	constructor() {
		this.isClosed = false;
		this.mode = MODE_RELATIVE;
		this.d = [];
	}

	addPathNode(node) {
		this.d.push(node);

		return this;
	}

	close() {
		if (!this.isClosed) {
			this.addPathNode(new CloseNode());
			this.isClosed = true;
		}

		return this;
	}

	moveTo(x, y) {
		this.addPathNode(new MoveToNode(this.mode, x, y));

		return this;
	}

	line(x, y) {
		this.addPathNode(new LineNode(this.mode, x, y));

		return this;
	}

	horizontalLine(x) {
		this.addPathNode(new HorizontalLineNode(this.mode, x));

		return this;
	}

	verticalLine(y) {
		this.addPathNode(new VerticalLineNode(this.mode, y));

		return this;
	}

	curve(x1, y1, x2, y2, x3, y3) {
		this.addPathNode(new CurveNode(this.mode, x1, y1, x2, y2, x3, y3));

		return this;
	}

	quadraticCurve(x1, y1, x2, y2) {
		this.addPathNode(new QuadraticCurveNode(this.mode, x1, y1, x2, y2));

		return this;
	}

	symmetricCurve(x1, y1, x2, y2) {
		this.addPathNode(new SymmetricCurveNode(this.mode, x1, y1, x2, y2));

		return this;
	}

	arc(x1, y1, rotation, arc, sweep, x2, y2) {
		this.addPathNode(new ArcNode(this.mode, x1, y1, rotation, arc, sweep, x2, y2));

		return this;
	}

	absolute() {
		this.mode = MODE_ABSOLUTE;

		return this;
	}

	relative() {
		this.mode = MODE_RELATIVE;

		return this;
	}

	toString() {
		return this.d.reduce((prev, node) => `${ prev } ${ node.toString() }`, '').trim();
	}
}
