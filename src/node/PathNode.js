const MODE_ABSOLUTE = 'absolute';
const MODE_RELATIVE = 'relative';

export default class PathNode {
	constructor(mode) {
		this.key = '';
		this.mode = (mode === MODE_RELATIVE) ?
			MODE_RELATIVE :
			MODE_ABSOLUTE;
	}

	getKeyInProperCase() {
		if (this.mode === MODE_ABSOLUTE) {
			return this.key.toUpperCase();
		}

		return this.key.toLowerCase();
	}

	toString() {
		return `${ this.getKeyInProperCase() }`;
	}
}
