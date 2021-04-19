import { Mode } from '@/types';

import PathNode from './PathNode';

export default class MoveToNode extends PathNode {
    x: number;
    y: number;

    constructor(mode: Mode, x: number, y: number) {
        super(mode);

        this.key = 'M';
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x} ${this.y}`;
    }
}
