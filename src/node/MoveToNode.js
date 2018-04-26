import PathNode from './PathNode';

export default class MoveToNode extends PathNode {
	constructor(mode, x, y) {
		super(mode);

		this.key = 'M';
		this.x = x;
		this.y = y;
	}

	toString() {
		return `${ this.getKeyInProperCase() }${ this.x } ${ this.y }`;
	}
}
