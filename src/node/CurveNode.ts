import PathNode from './PathNode';

import { Mode } from '@/types';

export default class CurveNode extends PathNode {
    readonly key: string = 'C';

    constructor(
        mode: Mode,
        readonly x1: number,
        readonly y1: number,
        readonly x2: number,
        readonly y2: number,
        readonly x3: number,
        readonly y3: number
    ) {
        super(mode);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x1} ${this.y1} ${this.x2} ${this.y2} ${this.x3} ${this.y3}`;
    }
}
