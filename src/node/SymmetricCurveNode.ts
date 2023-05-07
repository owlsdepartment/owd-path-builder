import { Mode } from '@/types';

import PathNode from './PathNode';

export default class SymmetricCurveNode extends PathNode {
    readonly key: string = 'S';

    constructor(
        mode: Mode,
        readonly x1: number,
        readonly y1: number,
        readonly x3: number,
        readonly y3: number
    ) {
        super(mode);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x1} ${this.y1} ${this.x3} ${this.y3}`;
    }
}
