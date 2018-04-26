import CurveNode from './CurveNode';

export default class SymmetricCurveNode extends CurveNode {
	constructor(mode, x1, y1, x3, y3) {
		super(mode, x1, y1, null, null, x3, y3);

		this.key = 'S';
	}

	toString() {
		return `${ this.getKeyInProperCase() }${ this.x1 } ${ this.y1 } ${ this.x3 } ${ this.y3 }`;
	}
}
