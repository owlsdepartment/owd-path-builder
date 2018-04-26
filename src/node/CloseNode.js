import PathNode from './PathNode';

export default class CloseNode extends PathNode {
	constructor(mode) {
		super(mode);

		this.key = 'Z';
	}
}
