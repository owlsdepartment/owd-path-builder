import MoveToNode from './MoveToNode';

export default class LineNode extends MoveToNode {
	constructor(mode, x, y) {
		super(mode, x, y);

		this.key = 'L';
	}
}
