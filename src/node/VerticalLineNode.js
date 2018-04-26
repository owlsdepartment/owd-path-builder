import LineNode from './LineNode';

export default class VerticalLineNode extends LineNode {
	constructor(mode, y) {
		super(mode, 0, y);

		this.key = 'V';
	}

	toString() {
		return `${ this.getKeyInProperCase() }${ this.y }`;
	}
}
