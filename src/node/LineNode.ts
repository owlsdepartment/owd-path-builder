import { Mode } from '@/types';

import MoveToNode from './MoveToNode';

export default class LineNode extends MoveToNode {
    constructor(mode: Mode, x: number, y: number) {
        super(mode, x, y);

        this.key = 'L';
    }
}
