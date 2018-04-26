import PathNode from './PathNode';

export default class ArcNode extends PathNode {
	constructor(mode, x1, y1, rotation, arc, sweep, x2, y2) {
		super(mode);

		this.key = 'A';
		this.x1 = x1;
		this.y1 = y1;
		this.rotation = rotation;
		this.arc = arc;
		this.sweep = sweep;
		this.x2 = x2;
		this.y2 = y2;
	}

	toString() {
		return `${ this.getKeyInProperCase() }${ this.x1 } ${ this.y1 } ${ this.rotation } ${ this.arc } ${ this.sweep } ${ this.x2 } ${ this.y2 }`;
	}
}
