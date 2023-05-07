import PathNode from './PathNode';

import { Mode } from '@/types';

export default class MoveToNode extends PathNode {
    readonly key: string = 'M';

    constructor(
        mode: Mode,
        readonly x: number,
        readonly y: number
    ) {
        super(mode);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x} ${this.y}`;
    }
}
