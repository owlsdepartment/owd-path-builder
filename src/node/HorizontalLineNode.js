import LineNode from './LineNode';

export default class HorizontalNode extends LineNode {
	constructor(mode, x) {
		super(mode, x, 0);

		this.key = 'H';
	}

	toString() {
		return `${ this.getKeyInProperCase() }${ this.x }`;
	}
}
